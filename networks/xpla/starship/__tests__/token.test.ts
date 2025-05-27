import './setup.test';

import { ChainInfo } from '@chain-registry/client';
import { Asset } from '@chain-registry/types';
import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { DirectSigner as CosmosDirectSigner } from '@interchainjs/cosmos/signers/direct';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  createQueryRpc,
  sleep,
} from '@interchainjs/utils';
import { MsgSend } from 'interchainjs/cosmos/bank/v1beta1/tx';
import { MsgTransfer } from 'interchainjs/ibc/applications/transfer/v1/tx';
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { getAllBalances, getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';
import { defaultSignerOptions } from '@xpla/xpla/defaults';

const hdPath = "m/44'/60'/0'/0/0";

const cosmosHdPath = "m/44'/118'/0'/0/0";

describe('Token transfers', () => {
  let directSigner: DirectSigner, denom: string, address: string, address2: string;
  let chainInfo: ChainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;

  let xplaRpcEndpoint: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('xpla'));
    denom = (await getCoin()).base;

    xplaRpcEndpoint = await getRpcEndpoint();

    const mnemonic = generateMnemonic();

    // Initialize auth
    const [auth] = EthSecp256k1Auth.fromMnemonic(mnemonic, [hdPath]);
    directSigner = new DirectSigner(auth, [], xplaRpcEndpoint, defaultSignerOptions.Cosmos);
    address = await directSigner.getAddress();

    await creditFromFaucet(address);

    await sleep(5000);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: address,
      denom,
    });

    expect(balance!.amount).toEqual('100000000000000000000');
  }, 200000);

  it('send xpla token to address', async () => {
    const mnemonic = generateMnemonic();
    // Initialize wallet
    const [auth2] = EthSecp256k1Auth.fromMnemonic(mnemonic, [hdPath]);

    const directSigner2 = new DirectSigner(auth2, [], xplaRpcEndpoint);

    address2 = await directSigner2.getAddress();

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      amount: '10000000',
      denom,
    };

    // Transfer uosmo tokens from faceut
    directSigner.addEncoders(toEncoders(MsgSend));
    await directSigner.signAndBroadcast(
      {
        messages: [
          {
            typeUrl: MsgSend.typeUrl,
            value: {
              fromAddress: address,
              toAddress: address2,
              amount: [token],
            },
          },
        ],
        fee,
        memo: 'send tokens test',
      },
      { deliverTx: true }
    );

    const { balance } = await getBalance(xplaRpcEndpoint, { address: address2, denom });

    expect(balance!.amount).toEqual(token.amount);
    expect(balance!.denom).toEqual(denom);
  }, 200000);

  it('send ibc xpla tokens to address on cosmos chain', async () => {
    const { chainInfo: cosmosChainInfo, getRpcEndpoint: cosmosRpcEndpoint } =
    useChain('cosmoshub');

    // Initialize wallet address for cosmos chain
    const [cosmosAuth] = Secp256k1Auth.fromMnemonic(generateMnemonic(), [
      cosmosHdPath,
    ]);

    const cosmosDirectSigner = new CosmosDirectSigner(cosmosAuth, [], await cosmosRpcEndpoint());

    const cosmosAddress = await cosmosDirectSigner.getAddress();

    const ibcInfos = chainInfo.fetcher.getChainIbcData(
      chainInfo.chain.chain_name
    );
    const ibcInfo = ibcInfos.find(
      (i) =>
        i.chain_1.chain_name === chainInfo.chain.chain_name &&
        i.chain_2.chain_name === cosmosChainInfo.chain.chain_name
    );

    expect(ibcInfo).toBeTruthy();

    const { port_id: sourcePort, channel_id: sourceChannel } =
      ibcInfo!.channels[0].chain_1;

    // Transfer xpla tokens via IBC to cosmos chain
    const currentTime = Math.floor(Date.now()) * 1000000;
    const timeoutTime = currentTime + 3000 * 1000000000; // 5 minutes

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const token = {
      denom,
      amount: '10000000',
    };

    // send ibc tokens
    directSigner.addEncoders(toEncoders(MsgTransfer));
    const resp = await directSigner.signAndBroadcast(
      {
        messages: [
          {
            typeUrl: MsgTransfer.typeUrl,
            value: MsgTransfer.fromPartial({
              sourcePort,
              sourceChannel,
              token,
              sender: address,
              receiver: cosmosAddress,
              timeoutHeight: undefined,
              timeoutTimestamp: BigInt(timeoutTime),
              memo: 'test transfer',
            }),
          },
        ],
        fee,
        memo: '',
      },
      { deliverTx: true }
    );

    assertIsDeliverTxSuccess(resp);

    await new Promise((resolve) => setTimeout(resolve, 6000));

    const { balances } = await getAllBalances(await cosmosRpcEndpoint(), {
      address: cosmosAddress,
      resolveDenom: true,
    });

    // check balances
    expect(balances.length).toEqual(1);
    const ibcBalance = balances.find((balance) => {
      return balance.denom.startsWith('ibc/');
    });
    expect(ibcBalance!.amount).toEqual(token.amount);
    expect(ibcBalance!.denom).toContain('ibc/');
  }, 200000);
});
