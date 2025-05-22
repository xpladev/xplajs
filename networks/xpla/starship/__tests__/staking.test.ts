/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
import {
  assertIsDeliverTxSuccess,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  sleep,
} from '@interchainjs/utils';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js'; // Using `fromWallet` to construct Signer
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getValidators, getDelegation } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';
import { QueryDelegationRequest, QueryDelegationResponse, QueryValidatorsRequest, QueryValidatorsResponse } from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/query';
import { defaultSignerOptions } from '@xpla/xpla/defaults';

const hdPath = "m/44'/60'/0'/0/0";

describe('Staking tokens testing', () => {
  let directSigner: DirectSigner, denom: string, address: string;
  let getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;
  let xplaRpcEndpoint: string;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;

  beforeAll(async () => {
    ({ getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('xpla'));
    denom = (await getCoin()).base;

    const mnemonic = generateMnemonic();
    xplaRpcEndpoint = await getRpcEndpoint();

    // Initialize auth
    const [auth] = EthSecp256k1Auth.fromMnemonic(mnemonic, [hdPath]);
    directSigner = new DirectSigner(auth, toEncoders(MsgDelegate), xplaRpcEndpoint, defaultSignerOptions.Cosmos);
    address = await directSigner.getAddress();

    await creditFromFaucet(address);
    await sleep(5000);
  }, 200000);

  it('check address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address,
      denom,
    });

    expect(balance!.amount).toEqual('100000000000000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(xplaRpcEndpoint, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: address,
        validatorAddress: validatorAddress,
        amount: {
          amount: delegationAmount,
          denom: balance!.denom,
        },
      }),
    };

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const result = await directSigner.signAndBroadcast(
      {
        messages: [msg],
        fee,
        memo: '',
      },
      {
        deliverTx: true,
      }
    );
    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } = await getDelegation(xplaRpcEndpoint, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(
      BigInt(0)
    );
    expect(delegationResponse!.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse!.balance.denom).toEqual(denom);
  });
});
