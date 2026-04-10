import { DirectSigner, createCosmosQueryClient } from '@interchainjs/cosmos';
import { BondStatus, bondStatusToJSON } from 'interchainjs/cosmos/staking/v1beta1/staking';
import { BigNumber } from 'bignumber.js';
import { describe, it, expect, beforeAll, inject } from 'vitest';

import { EthSecp256k1HDWallet, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import { getBalanceCosmosBankV1beta1, delegate, getValidators, getDelegation, MsgDelegate } from '@xpla/xplajs';
import * as bip39 from 'bip39';

import { faucet, HD_PATH } from '../helpers';

describe('Staking tokens testing', () => {
  const xplaRpcEndpoint = inject('xplaRpcUrl');
  const xplaChainId = inject('xplaChainId');
  const commonPrefix = inject('xplaPrefix');
  const denom = inject('xplaDenom');

  let directSigner: DirectSigner;
  let wallet: EthSecp256k1HDWallet;
  let address: string;

  let validatorAddress: string;
  let delegationAmount: string;

  beforeAll(async () => {
    const mnemonic = bip39.generateMnemonic();
    wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
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

    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;

    await faucet('staking', address);
  }, 200000);

  it('check address has tokens', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address,
      denom,
    });
    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await getValidators(xplaRpcEndpoint, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) => new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber());
    }
    expect(allValidators.length).toBeGreaterThan(0);
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { validators } = await getValidators(queryClient, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) => new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber());
    }
    expect(allValidators.length).toBeGreaterThan(0);
    validatorAddress = allValidators[0].operatorAddress;

    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, { address, denom });

    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress,
      amount: { amount: delegationAmount, denom: balance!.denom },
    });

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };

    const result = await delegate(directSigner, address, msgDelegate, fee, 'Stake tokens to genesis validator');
    await result.wait();

    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    expect(delegationResponse?.balance?.amount).toBeDefined();
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
  });

  it('query delegation', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
  });
});
