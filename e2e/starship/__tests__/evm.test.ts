import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet, createCosmosEvmSignerConfig, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import * as bip39 from 'bip39';
import { bank, staking, wasm } from '@xpla/evm/precompiles';
import { conxLocal } from '@xpla/evm';
import { fromBech32, toBech32 } from '@interchainjs/encoding';
import { storeCodeCosmwasmWasmV1 } from '@xpla/xplajs';
import { MsgStoreCode } from '@xpla/xplajs/cosmwasm/wasm/v1/tx';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {
  createPublicClient,
  createWalletClient,
  http,
  getAddress,
  hexToBytes,
  bytesToHex,
  type Address,
  hexToString,
  stringToHex,
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
    const addressToHex = getAddress(bytesToHex(hexByteAddress));
    expect(hexAddress).toEqual(addressToHex);

    const bech32Address = toBech32(commonPrefix, hexByteAddress);
    expect(bech32Address).toEqual(address);
  }, 100000);

  it('check address has tokens', async () => {
    const { data: hexByteAddress } = fromBech32(address);
    const addr = getAddress(bytesToHex(hexByteAddress));
    const balance = await publicClient.getBalance({ address: addr });
    expect(balance).toEqual(100000000000000000000n);
  }, 200000);

  it('precompile bank', async () => {
    const amount = { denom, amount: 1n };
    const hash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      ...bank,
      functionName: 'send',
      args: [hexAddress, hexAddress2, [amount]],
    });
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
    const [validatorsList] = await publicClient.readContract({
      ...staking,
      functionName: 'validators',
      args: ['BOND_STATUS_BONDED', page],
      authorizationList: [],
    });
    const operatorAddressHex = validatorsList[0].operatorAddress;
    const hexForBytes = operatorAddressHex.startsWith('0x')
      ? (operatorAddressHex as `0x${string}`)
      : (`0x${operatorAddressHex}` as `0x${string}`);
    const operatorAddressBech32 = toBech32('xplavaloper', hexToBytes(hexForBytes));

    const hash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      ...staking,
      functionName: 'delegate',
      args: [hexAddress, operatorAddressBech32, 1000000000000000000n],
    });
    await publicClient.waitForTransactionReceipt({ hash });

    const [, delegationBalance] = await publicClient.readContract({
      ...staking,
      functionName: 'delegation',
      args: [hexAddress, operatorAddressBech32],
      authorizationList: [],
    });
    expect(delegationBalance.amount).toEqual(1000000000000000000n);
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

    const instantiateMsg = stringToHex(`{"count": 0}`);
    const instantiateHash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      ...wasm,
      functionName: 'instantiateContract',
      args: [hexAddress, hexAddress, BigInt(codeId ?? 0), 'counter', instantiateMsg, []],
    });
    const receipt = await publicClient.waitForTransactionReceipt({ hash: instantiateHash });

    const blockResults = await queryClient.getBlockResults(Number(receipt.blockNumber));
    const contractAddress =
      blockResults.txsResults[0].events?.find((e) => e.type === 'instantiate')?.attributes?.find(
        (a) => a.key === '_contract_address',
      )?.value;

    let contractAddressHex = fromBech32(contractAddress!).data;
    contractAddressHex = contractAddressHex.slice(12, contractAddressHex.length);
    const contractAddressHexString = bytesToHex(contractAddressHex);

    const queryData = stringToHex(`{"get_count": {}}`);
    const beforeRes = await publicClient.readContract({
      ...wasm,
      functionName: 'smartContractState',
      args: [contractAddressHexString, queryData],
      authorizationList: [],
    });

    const { count: beforeCount } = JSON.parse(hexToString(beforeRes));
    expect(beforeCount).toEqual(0);

    const executeMsg = stringToHex(`{"increment": {}}`);
    const executeHash = await walletClient.writeContract({
      account: walletAccount,
      chain,
      ...wasm,
      functionName: 'executeContract',
      args: [hexAddress, contractAddressHexString, executeMsg, []],
    });
    await sleep(1000);
    await publicClient.waitForTransactionReceipt({ hash: executeHash });

    const afterRes = await publicClient.readContract({
      ...wasm,
      functionName: 'smartContractState',
      args: [contractAddressHexString, queryData],
      authorizationList: [],
    });
 
    const { count: afterCount } = JSON.parse(hexToString(afterRes));
    expect(afterCount).toEqual(1);
  }, 200000);
});
