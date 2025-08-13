
import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { DirectSigner, ICosmosQueryClient, createCosmosQueryClient } from '@interchainjs/cosmos';
import { toEncoders } from '@interchainjs/cosmos/utils';
import { sleep } from '@interchainjs/utils';
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';
import { MsgTransfer } from '@xpla/xplajs/ibc/applications/transfer/v1/tx';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '@xpla/xpla/wallets/ethSecp256k1hd';
import { createCosmosEvmSignerConfig, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '../../src/signers/config';
import { getAllBalances, getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { send } from "@xpla/xplajs/cosmos/bank/v1beta1/tx.rpc.func";
import { transfer } from "@xpla/xplajs/ibc/applications/transfer/v1/tx.rpc.func";
import * as bip39 from 'bip39';
import { createPrecompileBech32 } from '@xpla/evm/precompiles';
import { JsonRpcProvider } from 'ethers';

const hdPath = "m/44'/60'/0'/0/0";
const RPC_URL = 'http://127.0.0.1:8545';

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, address2: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

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

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

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

  it('check address has tokens', async () => {
    // Create query client for balance check
    const provider = new JsonRpcProvider(RPC_URL)
    const bech32Contract = createPrecompileBech32(provider)
    const hexAddress = await bech32Contract.bech32ToHex(address)
    console.log(hexAddress)
    
    const balance = await provider.getBalance(hexAddress.data)
    console.log(balance)
    expect(balance).toEqual('100000000000000000000');
  }, 200000);
});
