import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { createCosmosEvmSignerConfig, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '../../src/signers/config';
import * as bip39 from 'bip39';
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { storeCodeCosmwasmWasmV1 } from '@xpla/xplajs';
import { MsgStoreCode } from '@xpla/xplajs/cosmwasm/wasm/v1/tx';
import * as fs from 'fs';
import * as path from 'path';

import { describe, it, expect, beforeAll } from 'vitest';
import { createPublicClient, createWalletClient, http, getAddress, toHex, fromHex, defineChain } from 'viem';
import { mnemonicToAccount, Address } from 'viem/accounts';

// Import ABIs from @xpla/evm factories
import { IBank__factory, StakingI__factory, IWasm__factory } from '@xpla/evm';

const hdPath = "m/44'/60'/0'/0/0";
const RPC_URL = 'http://127.0.0.1:8545';

// TODO: encapsulate with matching abis in @xpla/evm
// Precompile addresses
const PRECOMPILE_ADDRESSES = {
  Bank: '0x1000000000000000000000000000000000000001' as Address,
  Staking: '0x0000000000000000000000000000000000000800' as Address,
  Wasm: '0x1000000000000000000000000000000000000004' as Address,
};

// local xpla
const xplaLocal = defineChain({
  id: 37,
  name: 'XPLA Local',
  nativeCurrency: {
    decimals: 18,
    name: 'XPLA',
    symbol: 'XPLA',
  },
  rpcUrls: {
    default: { http: [RPC_URL] },
  },
});

describe('Token transfers with viem', () => {
  let directSigner: DirectSigner, denom: string, address: string, hexAddress: Address, hexAddress2: Address;
  let chainInfo: ChainInfo, getCoin: () => Promise<Asset>, getRpcEndpoint: () => Promise<string>, creditFromFaucet;

  let publicClient: ReturnType<typeof createPublicClient>;
  let walletClient: ReturnType<typeof createWalletClient>;
  let commonPrefix: string;
  let xplaRpcEndpoint: string;
  let mnemonic: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } = useChain('xpla'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;
    xplaRpcEndpoint = await getRpcEndpoint();

    mnemonic = bip39.generateMnemonic();

    // Use EthSecp256k1HDWallet with Ethereum HD path for Xpla compatibility
    const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [
        {
          prefix: commonPrefix,
          hdPath: hdPath,
        },
      ],
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    // Create viem account from mnemonic
    const account = mnemonicToAccount(mnemonic, { path: hdPath });
    hexAddress = account.address;

    // Create second address for transfer tests
    const account2 = mnemonicToAccount(bip39.generateMnemonic(), { path: hdPath });
    hexAddress2 = account2.address;

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    // Create viem clients
    publicClient = createPublicClient({
      chain: xplaLocal,
      transport: http(RPC_URL),
    });

    walletClient = createWalletClient({
      account,
      chain: xplaLocal,
      transport: http(RPC_URL),
    });

    // Use Xpla-specific signer configuration with proper defaults
    let actualChainId = 'xpla-1';
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient: queryClient,
      chainId: actualChainId,
      addressPrefix: commonPrefix,
    };

    const signerConfig = createCosmosEvmSignerConfig({
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      ...baseSignerConfig,
    });

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await creditFromFaucet(address);

    await sleep(5000);
  });

  it('cosmos address & evm address', () => {
    const { data: hexByteAddress } = fromBech32(address);
    const addressToHex = getAddress(toHex(hexByteAddress));

    expect(hexAddress).toEqual(addressToHex);

    const bech32Address = toBech32(commonPrefix, hexByteAddress);
    expect(bech32Address).toEqual(address);
  }, 100000);

  it('check address has tokens', async () => {
    const balance = await publicClient.getBalance({ address: hexAddress });
    expect(balance).toEqual(100000000000000000000n);
  }, 200000);

  it('precompile bank', async () => {
    const amount = {
      denom: denom,
      amount: 1n,
    };

    const hash = await walletClient.writeContract({
      account: walletClient.account,
      chain: xplaLocal,
      address: PRECOMPILE_ADDRESSES.Bank,
      abi: IBank__factory.abi,
      functionName: 'send',
      args: [hexAddress, hexAddress2, [amount]],
    });
    await sleep(2000);
    await publicClient.waitForTransactionReceipt({ hash });

    const balance = await publicClient.getBalance({ address: hexAddress2 });
    expect(balance).toEqual(1n);
  }, 200000);

  it('precompile staking', async () => {
    const page = {
      key: '0x' as `0x${string}`,
      offset: 0n,
      limit: 10n,
      countTotal: false,
      reverse: false,
    };

    const [validators] = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: StakingI__factory.abi,
      functionName: 'validators',
      args: ['BOND_STATUS_BONDED', page],
      authorizationList: [],
    });
    const operatorAddressHex = validators[0].operatorAddress;
    const operatorAddressBech32 = toBech32('xplavaloper', fromHex(operatorAddressHex as `0x${string}`, 'bytes'));

    const hash = await walletClient.writeContract({
      account: walletClient.account!,
      chain: xplaLocal,
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: StakingI__factory.abi,
      functionName: 'delegate',
      args: [hexAddress, operatorAddressBech32, 1000000000000000000n],
    });
    await sleep(2000);
    await publicClient.waitForTransactionReceipt({ hash });

    const [, delegation] = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: StakingI__factory.abi,
      functionName: 'delegation',
      args: [hexAddress, operatorAddressBech32],
      authorizationList: [],
    });
    expect(delegation.amount).toEqual(1000000000000000000n);
  }, 200000);

  it('precompile wasm', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    directSigner.addEncoders(toEncoders(MsgStoreCode));

    const wasmByteCode = fs.readFileSync(path.join(__dirname, '../misc/counter.wasm'));

    const msg = MsgStoreCode.fromPartial({
      sender: address,
      wasmByteCode,
    });

    const result = await storeCodeCosmwasmWasmV1(
      directSigner,
      address,
      msg,
      {
        amount: [],
        gas: '40000000',
      },
      ''
    );
    await result.wait();
    const tx = await queryClient.getTx(result.transactionHash);
    const codeId = tx.txResult.events
      .find(e => e.type === 'store_code')
      ?.attributes.find(a => a.key === 'code_id')?.value;

    const instantiateMsg = toHex(new TextEncoder().encode(`{"count": 0}`));
    const hash = await walletClient.writeContract({
      account: walletClient.account!,
      chain: xplaLocal,
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: IWasm__factory.abi,
      functionName: 'instantiateContract',
      args: [hexAddress, hexAddress, BigInt(codeId!), 'counter', instantiateMsg, []],
    });
    await sleep(2000);
    const instantiateTx = await publicClient.waitForTransactionReceipt({ hash });

    const blockResults = await queryClient.getBlockResults(Number(instantiateTx.blockNumber));
    const contractAddress = blockResults.txsResults[0].events
      ?.find(e => e.type === 'instantiate')
      ?.attributes.find(a => a.key === '_contract_address')?.value;

    let { data: contractAddressHex } = fromBech32(contractAddress!);
    contractAddressHex = contractAddressHex.slice(12, contractAddressHex.length);
    const contractAddressHexString = getAddress(toHex(contractAddressHex));

    const queryData = toHex(new TextEncoder().encode(`{"get_count": {}}`));
    const beforeRes = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: IWasm__factory.abi,
      functionName: 'smartContractState',
      args: [contractAddressHexString, queryData],
      authorizationList: [],
    });
    const beforeHexString = beforeRes.startsWith('0x') ? beforeRes.slice(2) : beforeRes;
    const beforeBytes = fromHex(`0x${beforeHexString}` as `0x${string}`, 'bytes');
    const { count: beforeCount } = JSON.parse(new TextDecoder().decode(beforeBytes));
    expect(beforeCount).toEqual(0);

    const executeMsg = toHex(new TextEncoder().encode(`{"increment": {}}`));
    const executeHash = await walletClient.writeContract({
      account: walletClient.account,
      chain: xplaLocal,
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: IWasm__factory.abi,
      functionName: 'executeContract',
      args: [hexAddress, contractAddressHexString, executeMsg, []],
    });
    await sleep(1000);
    await publicClient.waitForTransactionReceipt({ hash: executeHash });

    const afterRes = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: IWasm__factory.abi,
      functionName: 'smartContractState',
      args: [contractAddressHexString, queryData],
      authorizationList: [],
    });
    const afterHexString = afterRes.startsWith('0x') ? afterRes.slice(2) : afterRes;
    const afterBytes = fromHex(`0x${afterHexString}` as `0x${string}`, 'bytes');
    const { count: afterCount } = JSON.parse(new TextDecoder().decode(afterBytes));
    expect(afterCount).toEqual(1);
  }, 200000);
});
