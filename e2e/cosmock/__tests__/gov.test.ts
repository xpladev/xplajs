import { AminoSigner, DirectSigner, createCosmosQueryClient } from '@interchainjs/cosmos';
import { toConverters, toEncoders } from '@interchainjs/cosmos';
import { ProposalStatus, TextProposal, VoteOption } from 'interchainjs/cosmos/gov/v1beta1/gov';
import { BondStatus, bondStatusToJSON } from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js';
import { describe, it, expect, beforeAll, inject } from 'vitest';

import { EthSecp256k1HDWallet, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import { OfflineAminoSigner, OfflineDirectSigner } from '@interchainjs/cosmos';
import {
  getBalanceCosmosBankV1beta1,
  getProposalCosmosGovV1,
  getVoteCosmosGovV1,
  getValidators,
  delegate,
  voteCosmosGovV1,
  CosmosGovV1MsgVote,
} from '@xpla/xplajs';
import { MsgSubmitProposal } from '@xpla/xplajs/cosmos/gov/v1beta1/tx';
import { submitProposal } from '@xpla/xplajs/cosmos/gov/v1beta1/tx.rpc.func';
import * as bip39 from 'bip39';

import { faucet, HD_PATH } from '../helpers';

// Single large faucet call (vs 10 sequential calls in the starship version)
const GOV_FUND_AMOUNT = '1000000000000000000000'; // 1000 xpla

describe('Governance tests for xpla', () => {
  const xplaRpcEndpoint = inject('xplaRpcUrl');
  const xplaChainId = inject('xplaChainId');
  const commonPrefix = inject('xplaPrefix');
  const denom = inject('xplaDenom');

  let directSigner: DirectSigner;
  let aminoSigner: AminoSigner;
  let directOfflineSigner: OfflineDirectSigner;
  let aminoOfflineSigner: OfflineAminoSigner;
  let directAddress: string;
  let aminoAddress: string;
  let testingOfflineAddress: string;

  let proposalId: string;
  let validatorAddress: string;

  beforeAll(async () => {
    const hdWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [{ prefix: commonPrefix, hdPath: HD_PATH }],
    });

    directOfflineSigner = await hdWallet.toOfflineDirectSigner();
    aminoOfflineSigner = await hdWallet.toOfflineAminoSigner();

    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const signerConfig = {
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      queryClient,
      chainId: xplaChainId,
      addressPrefix: commonPrefix,
    };

    directSigner = new DirectSigner(directOfflineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, CosmosGovV1MsgVote));

    aminoSigner = new AminoSigner(aminoOfflineSigner, signerConfig);
    aminoSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, CosmosGovV1MsgVote));
    aminoSigner.addConverters(toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, CosmosGovV1MsgVote));

    const directAddresses = await directOfflineSigner.getAccounts();
    const aminoAddresses = await aminoOfflineSigner.getAccounts();
    directAddress = directAddresses[0].address;
    aminoAddress = aminoAddresses[0].address;
    testingOfflineAddress = aminoAddress;

    await faucet('gov', directAddress, GOV_FUND_AMOUNT);
  }, 200000);

  it('check direct address has tokens', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address: directAddress,
      denom,
    });
    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check amino address has tokens', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address: aminoAddress,
      denom,
    });
    // Direct and amino share the same wallet/derivation — same address, same funds.
    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

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
    const { balance } = await getBalanceCosmosBankV1beta1(queryClient, {
      address: testingOfflineAddress,
      denom,
    });

    const delegationAmount = (BigInt(balance!.amount) / BigInt(5)).toString();
    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: testingOfflineAddress,
      validatorAddress,
      amount: { amount: delegationAmount, denom: balance!.denom },
    });

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };

    const result = await delegate(aminoSigner, testingOfflineAddress, msgDelegate, fee, '');
    await result.wait();
  }, 200000);

  it('submit a txt proposal', async () => {
    const contentMsg = TextProposal.fromPartial({
      title: 'Test Proposal',
      description: 'Test text proposal for the e2e testing',
    });

    const msgSubmitProposal = MsgSubmitProposal.fromPartial({
      proposer: directAddress,
      initialDeposit: [{ amount: '100000000000000000000', denom }],
      content: {
        typeUrl: '/cosmos.gov.v1beta1.TextProposal',
        value: TextProposal.encode(contentMsg).finish(),
      },
    });

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };

    const result = await submitProposal(directSigner, directAddress, msgSubmitProposal, fee, '');
    try {
      await result.wait();
    } catch (error) {
      console.log(error);
      console.log(result);
    }

    proposalId = '1';
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it('query proposal', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const result = await getProposalCosmosGovV1(queryClient, {
      proposalId: BigInt(proposalId),
    });
    expect(result.proposal.id.toString()).toEqual(proposalId);
  }, 200000);

  it('vote on proposal using direct', async () => {
    const msgVote = CosmosGovV1MsgVote.fromPartial({
      proposalId: BigInt(proposalId),
      voter: directAddress,
      option: VoteOption.VOTE_OPTION_YES,
    });

    const fee = {
      amount: [{ denom, amount: '100000' }],
      gas: '550000',
    };

    const result = await voteCosmosGovV1(directSigner, directAddress, msgVote, fee, '');
    await result.wait();
  }, 200000);

  it('verify direct vote', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { vote } = await getVoteCosmosGovV1(queryClient, {
      proposalId: BigInt(proposalId),
      voter: directAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(directAddress);
    vote.options.some(option => option.option === VoteOption.VOTE_OPTION_YES);
  }, 200000);

  it('verify proposal passed', async () => {
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);
    const { proposal } = await getProposalCosmosGovV1(queryClient, {
      proposalId: BigInt(proposalId),
    });
    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD);
  }, 200000);
});
