import './setup.test';

import { Asset } from '@chain-registry/types';
import { DirectSigner, AminoSigner } from '@interchainjs/cosmos';
import {
  sleep,
} from '@interchainjs/utils';

import { createCosmosQueryClient } from '@interchainjs/cosmos';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { BigNumber } from 'bignumber.js'; // Using `fromWallet` to construct Signer
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet } from '../../src/wallets/ethSecp256k1hd';
import { DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '../../src/signers/config';
import { getBalanceCosmosBankV1beta1, delegate, getValidators, getDelegation, MsgDelegate } from "@xpla/xplajs";
import * as bip39 from 'bip39';

import { describe, it, expect, beforeAll } from 'vitest';

const hdPath = "m/44'/60'/0'/0/0";

describe('Staking tokens testing', () => {
  let directSigner: DirectSigner, aminoSigner: AminoSigner, denom: string, address: string;
  let wallet: EthSecp256k1HDWallet;
  let chainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;
  let xplaRpcEndpoint: string;
  let commonPrefix: string;

  // Variables used accross testcases
  let validatorAddress: string;
  let delegationAmount: string;
  

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('xpla'));
    denom = (await getCoin()).base;

    commonPrefix = chainInfo?.chain?.bech32_prefix;
    xplaRpcEndpoint = await getRpcEndpoint();

    const mnemonic = bip39.generateMnemonic();

    // Use EthSecp256k1HDWallet with Ethereum HD path for XPLA compatibility
    wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{
        prefix: commonPrefix,
        hdPath: hdPath, // Ethereum-style HD path for XPLA
      }]
    });


    const offlineSigner = await wallet.toOfflineDirectSigner();

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);


    // Query client is properly configured with all required methods

    // Use XPLA-specific signer configuration with proper defaults
    let actualChainId = 'xpla-1'; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient,
      chainId: actualChainId,
      addressPrefix: 'xpla'
    };



    // Merge with DEFAULT_COSMOS_EVM_SIGNER_CONFIG for complete configuration
    // Override signature format to use compact format for compatibility
    const signerConfig = {
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      ...baseSignerConfig
    };

    directSigner = new DirectSigner(offlineSigner, signerConfig);

    // Also create amino signer as backup
    aminoSigner = new AminoSigner(offlineSigner, signerConfig);
    const addresses = await offlineSigner.getAccounts();
    address = addresses[0].address;



    // Transfer tokens to address
    await creditFromFaucet(address);
    await sleep(5000);
  }, 200000);

  it('check address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
    // We'll check if balance is sufficient for delegation in the staking test
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
    // Create query client for validator query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    // First get the validator address
    const { validators } = await getValidators(queryClient, {
      status: bondStatusToJSON(BondStatus.BOND_STATUS_BONDED),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);
    validatorAddress = allValidators[0].operatorAddress;

    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance!.amount) / BigInt(2)).toString();

    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: address,
      validatorAddress: validatorAddress,
      amount: {
        amount: delegationAmount,
        denom: balance!.denom,
      },
    });

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };


    const result = await delegate(
      directSigner,
      address,
      msgDelegate,
      fee,
      'Stake tokens to genesis validator'
    );
    await result.wait();

    // Verify the delegation was successful by checking the delegation amount
    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });



    // Check that delegation exists and has a reasonable amount
    expect(delegationResponse?.balance?.amount).toBeDefined();
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    // The delegation amount should be at least what we just delegated
    // (it might be more if there were previous delegations from other test runs)
    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
  });

  it('query delegation', async () => {
    // Create query client for delegation query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { delegationResponse } = await getDelegation(queryClient, {
      delegatorAddr: address,
      validatorAddr: validatorAddress,
    });

    // Assert that the delegation amount is reasonable

    // Check that delegation exists and has a reasonable amount
    expect(BigInt(delegationResponse!.balance.amount)).toBeGreaterThan(BigInt(0));
    expect(delegationResponse!.balance.denom).toEqual(denom);

    // The delegation amount should be at least what we just delegated
    // (it might be more if there were previous delegations from other test runs)
    const expectedAmount = BigInt(delegationAmount);
    const actualAmount = BigInt(delegationResponse!.balance.amount);
    expect(actualAmount).toBeGreaterThanOrEqual(expectedAmount);
  });
});
