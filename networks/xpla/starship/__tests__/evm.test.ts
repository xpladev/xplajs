
import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, ICosmosQueryClient, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '@xpla/xpla/wallets/ethSecp256k1hd';
import { createCosmosEvmSignerConfig, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '../../src/signers/config';
import * as bip39 from 'bip39';
import { createPrecompileBank, createPrecompileStaking, createPrecompileWasm } from '@xpla/evm/precompiles';
import { CoinStruct } from '@xpla/evm/IBank';
import { getAddress, getBytes, HDNodeWallet, hexlify, JsonRpcProvider, JsonRpcSigner, Wallet } from 'ethers';
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { PageRequestStruct } from '@xpla/evm/StakingI';
import { getCode, storeCode } from '@xpla/xplajs';
import { MsgStoreCode } from "@xpla/xplajs/cosmwasm/wasm/v1/tx"
import * as fs from 'fs';
import * as path from 'path';

const hdPath = "m/44'/60'/0'/0/0";
const RPC_URL = 'http://127.0.0.1:8545';

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, hexAddress: string, hexAddress2: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  let provider: JsonRpcProvider;
  let ethersWallet: HDNodeWallet;
  let commonPrefix: string;
  let xplaRpcEndpoint: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('xpla'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;
    xplaRpcEndpoint = await getRpcEndpoint();

    const mnemonic = bip39.generateMnemonic();

    // Use EthSecp256k1HDWallet with Ethereum HD path for Xpla compatibility
    const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: commonPrefix,
        hdPath: hdPath, // Ethereum-style HD path for Xpla
      }]
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    ethersWallet = Wallet.fromPhrase(mnemonic)
    hexAddress = ethersWallet.address

    hexAddress2 = Wallet.fromPhrase(bip39.generateMnemonic()).address

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    // Create ethers provider
    provider = new JsonRpcProvider(RPC_URL)

    // Use Xpla-specific signer configuration with proper defaults
    let actualChainId = 'xpla-1'; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient: queryClient,
      chainId: actualChainId,
      addressPrefix: commonPrefix
    };

    // Merge with DEFAULT_COSMOS_EVM_SIGNER_CONFIG for complete configuration
    const signerConfig = createCosmosEvmSignerConfig({
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      ...baseSignerConfig
    });

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await creditFromFaucet(address);

    await sleep(5000);
  });

  it('cosmos address & evm address', () => {
    const { data: hexByteAddress} = fromBech32(address)
    const addressToHex = getAddress(hexlify(hexByteAddress))
    
    expect(hexAddress).toEqual(addressToHex)

    const bech32Address = toBech32(commonPrefix, hexByteAddress)
    expect(bech32Address).toEqual(address)
  }, 100000)

  it('check address has tokens', async () => {
    // Create query client for balance check
    const { data: hexByteAddress} = fromBech32(address)
    const hexAddress = hexlify(hexByteAddress)
  
    const balance = await provider.getBalance(hexAddress)
    expect(balance).toEqual(100000000000000000000n);
  }, 200000);

  it('precompile bank', async () => {
    const signer = ethersWallet.connect(provider)
    const bankContract = createPrecompileBank(provider)
    const bankContractWithSigner = bankContract.connect(signer)
    
    const amount : CoinStruct = {
      denom: denom,
      amount: "1"
    }

    const txRes = await bankContractWithSigner.send(hexAddress, hexAddress2, [amount])
    await sleep(2000)
    const tx = await txRes.wait()

    const balance = await provider.getBalance(hexAddress2)
    expect(balance).toEqual(1n);
  }, 200000);

  it('precompile staking', async () => {
    const signer = ethersWallet.connect(provider)
    const stakingContract = createPrecompileStaking(provider)
    const stakingContractWithSigner = stakingContract.connect(signer)

    const page: PageRequestStruct = {
      key: new Uint8Array(),
      offset: 0n,
      limit: 10n,
      countTotal: false,
      reverse: false
    }
    const validators = await stakingContract.validators("BOND_STATUS_BONDED", page)
    const operatorAddressHex = validators.validators[0].operatorAddress
    const operatorAddressBech32 = toBech32('xplavaloper', getBytes(operatorAddressHex))

    const txRes = await stakingContractWithSigner.delegate(hexAddress, operatorAddressBech32, 1000000000000000000n)
    await sleep(2000)
    await txRes.wait()

    const delegation = await stakingContract.delegation(hexAddress, operatorAddressBech32)
    expect(delegation.balance.amount).toEqual(1000000000000000000n)
  }, 200000);

  it('precompile wasm', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    directSigner.addEncoders(toEncoders(MsgStoreCode))

    const wasmByteCode = fs.readFileSync(path.join(__dirname, '../misc/counter.wasm'))

    let msg = MsgStoreCode.fromPartial({
      sender: address,
      wasmByteCode,
    })

    const result = await storeCode(
      directSigner,
      address,
      msg,
      {
        amount: [],
        gas: "40000000"
      }, 
      ""
    )
    await result.wait()
    const tx = await queryClient.getTx(result.transactionHash)
    const codeId = tx.txResult.events.find(e => e.type === "store_code")?.attributes.find(a => a.key === "code_id")?.value

    const signer = ethersWallet.connect(provider)
    const wasmContract = createPrecompileWasm(provider)
    const wasmContractWithSigner = wasmContract.connect(signer)

    const instantiateMsg = new Uint8Array(Buffer.from(`{"count": 0}`))
    const txRes = await wasmContractWithSigner.instantiateContract(hexAddress, hexAddress, codeId, "counter", instantiateMsg, [])
    await sleep(2000)
    const instantiateTx = await txRes.wait()
    
    const blockResults = await queryClient.getBlockResults(instantiateTx.blockNumber)
    const contractAddress = blockResults.txsResults[0].events?.find(e => e.type === "instantiate")?.attributes.find(a => a.key === "_contract_address")?.value
    
    let {data: contractAddressHex} = fromBech32(contractAddress)
    contractAddressHex = contractAddressHex.slice(12, contractAddressHex.length)
    const contractAddressHexString = hexlify(contractAddressHex)
    
    const queryData = new Uint8Array(Buffer.from(`{"get_count": {}}`))
    const beforeRes = await wasmContract.smartContractState(contractAddressHexString, queryData)
    const beforeHexString = beforeRes.startsWith('0x') ? beforeRes.slice(2) : beforeRes
    const beforeBytes = new Uint8Array(Buffer.from(beforeHexString, 'hex'))
    const { count: beforeCount } = JSON.parse(new TextDecoder().decode(beforeBytes)) 
    expect(beforeCount).toEqual(0)
    
    const executeMsg = new Uint8Array(Buffer.from(`{"increment": {}}`))
    const executeTx = await wasmContractWithSigner.executeContract(hexAddress, contractAddressHexString, executeMsg, [])
    await sleep(1000)
    await executeTx.wait()
    
    const afterRes = await wasmContract.smartContractState(contractAddressHexString, queryData)
    const afterHexString = afterRes.startsWith('0x') ? afterRes.slice(2) : afterRes
    const afterBytes = new Uint8Array(Buffer.from(afterHexString, 'hex'))
    const { count: afterCount } = JSON.parse(new TextDecoder().decode(afterBytes)) 
    expect(afterCount).toEqual(1)

  }, 200000);
});
