import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { createCosmosEvmSignerConfig, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '../../src/signers/config';
import * as bip39 from 'bip39';
import {
  PRECOMPILE_ADDRESSES,
  BANK_PRECOMPILE_ABI,
  STAKING_PRECOMPILE_ABI,
  WASM_PRECOMPILE_ABI,
  type CoinStruct,
} from '@xpla/evm/precompiles';
import { conxLocal } from '@xpla/evm';
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { storeCodeCosmwasmWasmV1 } from '@xpla/xplajs';
import { MsgStoreCode } from '@xpla/xplajs/cosmwasm/wasm/v1/tx';
import * as fs from 'fs';
import * as path from 'path';
import {
  createPublicClient,
  createWalletClient,
  http,
  getAddress,
  hexToBytes,
  bytesToHex,
  type Address,
} from 'viem';
import { mnemonicToAccount } from 'viem/accounts';

import { describe, it, expect, beforeAll } from 'vitest';

const hdPath = "m/44'/60'/0'/0/0";
const RPC_URL = 'http://127.0.0.1:8545';

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, hexAddress: Address, hexAddress2: Address;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet: (addr: string) => Promise<void>;

  let publicClient: ReturnType<typeof createPublicClient>;
  let walletClient: ReturnType<typeof createWalletClient>;
  let walletAccount: ReturnType<typeof mnemonicToAccount>;
  let chain: typeof conxLocal;
  let commonPrefix: string;
  let xplaRpcEndpoint: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } = useChain('xpla'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix ?? 'xpla';
    xplaRpcEndpoint = await getRpcEndpoint();

    const mnemonic = bip39.generateMnemonic();

    const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{ prefix: commonPrefix, hdPath }],
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    walletAccount = mnemonicToAccount(mnemonic, { path: hdPath });
    hexAddress = walletAccount.address;
    hexAddress2 = mnemonicToAccount(bip39.generateMnemonic(), { path: hdPath }).address;

    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    chain = conxLocal;
    const transport = http(RPC_URL);
    publicClient = createPublicClient({ chain, transport });
    walletClient = createWalletClient({ chain, transport, account: walletAccount });

    let actualChainId = 'xpla-1';
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const signerConfig = createCosmosEvmSignerConfig({
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      queryClient,
      chainId: actualChainId,
      addressPrefix: commonPrefix,
    });

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await creditFromFaucet(address);
    await sleep(5000);
  });

  it('cosmos address & evm address', () => {
    const { data: hexByteAddress } = fromBech32(address);
    const addressToHex = getAddress(bytesToHex(hexByteAddress) as `0x${string}`);
    expect(hexAddress).toEqual(addressToHex);

    const bech32Address = toBech32(commonPrefix, hexByteAddress);
    expect(bech32Address).toEqual(address);
  }, 100000);

  it('check address has tokens', async () => {
    const { data: hexByteAddress } = fromBech32(address);
    const addr = getAddress(bytesToHex(hexByteAddress) as `0x${string}`);
    const balance = await publicClient.getBalance({ address: addr });
    expect(balance).toEqual(100000000000000000000n);
  }, 200000);

  it('precompile bank', async () => {
    const amount: CoinStruct = { denom, amount: '1' };
    const hash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      address: PRECOMPILE_ADDRESSES.Bank,
      abi: BANK_PRECOMPILE_ABI,
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
    const validatorsResult = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: STAKING_PRECOMPILE_ABI,
      functionName: 'validators',
      args: ['BOND_STATUS_BONDED', page],
      authorizationList: [],
    }) as [Array<{ operatorAddress: string }>, unknown] | { validators: Array<{ operatorAddress: string }> };
    const validatorsList = Array.isArray(validatorsResult) ? validatorsResult[0] : validatorsResult.validators;
    const operatorAddressHex = validatorsList[0].operatorAddress;
    const hexForBytes = operatorAddressHex.startsWith('0x') ? (operatorAddressHex as `0x${string}`) : (`0x${operatorAddressHex}` as `0x${string}`);
    const operatorAddressBech32 = toBech32('xplavaloper', hexToBytes(hexForBytes));

    const hash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: STAKING_PRECOMPILE_ABI,
      functionName: 'delegate',
      args: [hexAddress, operatorAddressBech32, 1000000000000000000n],
    });
    await sleep(2000);
    await publicClient.waitForTransactionReceipt({ hash });

    const delegation = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Staking,
      abi: STAKING_PRECOMPILE_ABI,
      functionName: 'delegation',
      args: [hexAddress, operatorAddressBech32],
      authorizationList: [],
    }) as [bigint, { amount: bigint }];
    expect(delegation[1].amount).toEqual(1000000000000000000n);
  }, 200000);

  it('precompile wasm', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    directSigner.addEncoders(toEncoders(MsgStoreCode));

    const wasmByteCode = fs.readFileSync(path.join(__dirname, '../misc/counter.wasm'));
    const msg = MsgStoreCode.fromPartial({ sender: address, wasmByteCode });

    const result = await storeCodeCosmwasmWasmV1(
      directSigner,
      address,
      msg,
      { amount: [], gas: '40000000' },
      '',
    );
    await result.wait();
    const tx = await queryClient.getTx(result.transactionHash);
    const codeId = tx.txResult.events
      ?.find((e) => e.type === 'store_code')
      ?.attributes?.find((a) => a.key === 'code_id')?.value;

    const instantiateMsg = new Uint8Array(Buffer.from(`{"count": 0}`));
    const instantiateHash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: WASM_PRECOMPILE_ABI,
      functionName: 'instantiateContract',
      args: [hexAddress, hexAddress, BigInt(codeId ?? 0), 'counter', bytesToHex(instantiateMsg) as `0x${string}`, []],
    });
    await sleep(2000);
    const receipt = await publicClient.waitForTransactionReceipt({ hash: instantiateHash });

    const blockResults = await queryClient.getBlockResults(Number(receipt.blockNumber));
    const contractAddress =
      blockResults.txsResults[0].events?.find((e) => e.type === 'instantiate')?.attributes?.find(
        (a) => a.key === '_contract_address',
      )?.value;

    let contractAddressHex = fromBech32(contractAddress!).data;
    contractAddressHex = contractAddressHex.slice(12, contractAddressHex.length);
    const contractAddressHexString = bytesToHex(contractAddressHex) as `0x${string}`;

    const queryData = new Uint8Array(Buffer.from(`{"get_count": {}}`));
    const beforeRes = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: WASM_PRECOMPILE_ABI,
      functionName: 'smartContractState',
      args: [contractAddressHexString, bytesToHex(queryData) as `0x${string}`],
      authorizationList: [],
    });
    const beforeHexString = typeof beforeRes === 'string' && beforeRes.startsWith('0x') ? beforeRes.slice(2) : String(beforeRes);
    const beforeBytes = new Uint8Array(Buffer.from(beforeHexString, 'hex'));
    const { count: beforeCount } = JSON.parse(new TextDecoder().decode(beforeBytes));
    expect(beforeCount).toEqual(0);

    const executeMsg = new Uint8Array(Buffer.from(`{"increment": {}}`));
    const executeHash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: WASM_PRECOMPILE_ABI,
      functionName: 'executeContract',
      args: [hexAddress, contractAddressHexString, bytesToHex(executeMsg) as `0x${string}`, []],
    });
    await sleep(1000);
    await publicClient.waitForTransactionReceipt({ hash: executeHash });

    const afterRes = await publicClient.readContract({
      address: PRECOMPILE_ADDRESSES.Wasm,
      abi: WASM_PRECOMPILE_ABI,
      functionName: 'smartContractState',
      args: [contractAddressHexString, bytesToHex(queryData) as `0x${string}`],
      authorizationList: [],
    });
    const afterHexString = typeof afterRes === 'string' && afterRes.startsWith('0x') ? afterRes.slice(2) : String(afterRes);
    const afterBytes = new Uint8Array(Buffer.from(afterHexString, 'hex'));
    const { count: afterCount } = JSON.parse(new TextDecoder().decode(afterBytes));
    expect(afterCount).toEqual(1);
  }, 200000);
});
