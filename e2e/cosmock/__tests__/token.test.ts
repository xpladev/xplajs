import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { sleep } from '@interchainjs/utils';
import { describe, it, expect, beforeAll, inject } from 'vitest';

import { EthSecp256k1HDWallet, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import {
  getAllBalances,
  getBalanceCosmosBankV1beta1,
  send,
  transfer,
  MsgSend,
  MsgTransfer,
  getClientStatus,
} from '@xpla/xplajs';
import * as bip39 from 'bip39';

import { faucet, HD_PATH } from '../helpers';

describe('Token transfers', () => {
  const xplaRpcEndpoint = inject('xplaRpcUrl');
  const xplaChainId = inject('xplaChainId');
  const commonPrefix = inject('xplaPrefix');
  const denom = inject('xplaDenom');
  const cosmosRpcEndpoint = inject('cosmosRpcUrl');
  const sourceChannel = inject('ibcChannel');
  const sourcePort = 'transfer';

  let directSigner: DirectSigner;
  let address: string;
  let address2: string;

  beforeAll(async () => {
    const mnemonic = bip39.generateMnemonic();
    const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{ prefix: commonPrefix, hdPath: HD_PATH }],
    });
    const offlineSigner = await wallet.toOfflineDirectSigner();

    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const signerConfig = {
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      queryClient,
      chainId: xplaChainId,
      addressPrefix: commonPrefix,
    };

    directSigner = new DirectSigner(offlineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgSend, MsgTransfer));

    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await faucet('token', address);
  });

  it('check address has tokens', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address,
      denom,
    });
    expect(balance!.amount).toEqual('100000000000000000000');
  }, 200000);

  it('send xpla token to address', async () => {
    const mnemonic = bip39.generateMnemonic();
    const wallet2 = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{ prefix: commonPrefix, hdPath: HD_PATH }],
    });
    const offlineSigner2 = await wallet2.toOfflineDirectSigner();
    const addresses2 = await offlineSigner2.getAccounts();
    address2 = addresses2[0].address;

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };
    const token = { amount: '10000000', denom };

    const result = await send(
      directSigner,
      address,
      { fromAddress: address, toAddress: address2, amount: [token] },
      fee,
      'send tokens test',
    );

    try {
      await result.wait();
    } catch (err) {
      console.log(err);
    }

    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address: address2,
      denom,
    });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 200000);

  it('send ibc xpla tokens to address on cosmos chain', async () => {
    // Generate a cosmoshub recipient using the standard Cosmos HD path
    const cosmosWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [
        {
          prefix: 'cosmos',
          hdPath: "m/44'/118'/0'/0/0",
        },
      ],
    });
    const cosmosOfflineSigner = await cosmosWallet.toOfflineDirectSigner();
    const cosmosAddresses = await cosmosOfflineSigner.getAccounts();
    const cosmosAddress = cosmosAddresses[0].address;

    // Check IBC client status before transfer
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const clientStatus = await getClientStatus(queryClient, {
      clientId: '07-tendermint-0',
    });
    expect(clientStatus.status).toEqual('Active');

    const currentTime = Date.now() * 1_000_000; // ns
    const timeoutTime = currentTime + 3600 * 1_000_000_000; // 1h

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };
    const token = { denom, amount: '10000000' };

    const resp = await transfer(
      directSigner,
      address,
      MsgTransfer.fromPartial({
        sourcePort,
        sourceChannel,
        token,
        sender: address,
        receiver: cosmosAddress,
        timeoutHeight: undefined,
        timeoutTimestamp: BigInt(timeoutTime),
        memo: 'test transfer',
      }),
      fee,
      '',
    );

    try {
      await resp.wait();
    } catch (err) {
      console.log('IBC transfer error:', err);
      throw err;
    }

    // Poll for the IBC packet to land on the destination chain
    let ibcBalance: { denom: string; amount: string } | undefined;
    let balancesLen = 0;
    for (let i = 0; i < 30; i++) {
      const { balances } = await getAllBalances(cosmosRpcEndpoint, {
        address: cosmosAddress,
        resolveDenom: false,
      });
      balancesLen = balances.length;
      ibcBalance = balances.find(b => b.denom.startsWith('ibc/'));
      if (ibcBalance) break;
      await sleep(500);
    }

    expect(balancesLen).toEqual(1);
    expect(ibcBalance!.amount).toEqual(token.amount);
    expect(ibcBalance!.denom).toContain('ibc/');
  }, 200000);
});
