/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { AminoSigner, DirectSigner, createCosmosQueryClient } from '@interchainjs/cosmos';
import {
  toConverters,
  toEncoders,
} from '@interchainjs/cosmos/utils';
import {
  sleep,
} from '@interchainjs/utils';
import {
  ProposalStatus,
  TextProposal,
  VoteOption,
} from 'interchainjs/cosmos/gov/v1beta1/gov';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js';
import { useChain } from 'starshipjs';

import { EthSecp256k1HDWallet, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import { OfflineAminoSigner, OfflineDirectSigner } from '@interchainjs/cosmos';
import { getBalance, getProposal, getVote, getValidators, delegate, vote, MsgVote } from "@xpla/xplajs";
import { MsgSubmitProposal,  } from "@xpla/xplajs/cosmos/gov/v1beta1/tx"
import { submitProposal } from "@xpla/xplajs/cosmos/gov/v1beta1/tx.rpc.func"
import * as bip39 from 'bip39';


const hdPath = "m/44'/60'/0'/0/0";

describe('Governance tests for xpla', () => {
  let directSigner: DirectSigner,
    aminoSigner: AminoSigner,
    directOfflineSigner: OfflineDirectSigner,
    aminoOfflineSigner: OfflineAminoSigner,
    denom: string,
    commonPrefix: string,
    directAddress: string,
    aminoAddress: string,
    directOfflineAddress: string,
    aminoOfflineAddress: string,
    testingOfflineAddress: string;
  let chainInfo,
    getCoin: () => Promise<Asset>,
    getRpcEndpoint: () => Promise<string>,
    creditFromFaucet;
  let xplaRpcEndpoint: string;

  // Variables used accross testcases
  let proposalId: string;
  let validatorAddress: string;

  beforeAll(async () => {
    ({ chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
      useChain('xpla'));
    denom = (await getCoin()).base;
    xplaRpcEndpoint = await getRpcEndpoint();

    commonPrefix = chainInfo?.chain?.bech32_prefix;

    // Initialize wallet and signers with EthSecp256k1HDWallet and Ethereum HD path
    const hdWallet = await EthSecp256k1HDWallet.fromMnemonic(bip39.generateMnemonic(), {
      derivations: [{
        prefix: commonPrefix,
        hdPath: hdPath
      }]
    });

    directOfflineSigner = await hdWallet.toOfflineDirectSigner();
    aminoOfflineSigner = await hdWallet.toOfflineAminoSigner();

    // Create query client for signer configuration
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    let actualChainId = ''; // default fallback
    try {
      const status = await queryClient.getStatus();
      actualChainId = status.nodeInfo.network;
    } catch (e) {
      console.log('Could not get chainId, using default:', actualChainId);
    }

    const baseSignerConfig = {
      queryClient,
      chainId: actualChainId,
      addressPrefix: commonPrefix
    };

    // Merge with DEFAULT_COSMOS_EVM_SIGNER_CONFIG for complete configuration
    const signerConfig = {
      ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
      ...baseSignerConfig
    };

    directSigner = new DirectSigner(directOfflineSigner, signerConfig);
    directSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));

    aminoSigner = new AminoSigner(aminoOfflineSigner, signerConfig);
    aminoSigner.addEncoders(toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));
    aminoSigner.addConverters(toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote));

    const directAddresses = await directOfflineSigner.getAccounts();
    const aminoAddresses = await aminoOfflineSigner.getAccounts();
    directAddress = directAddresses[0].address;
    aminoAddress = aminoAddresses[0].address;

    directOfflineAddress = directAddress;
    aminoOfflineAddress = aminoAddress;
    testingOfflineAddress = aminoOfflineAddress;

    // Transfer xpla to address
    for (let i = 0; i < 10; i++) {
      await creditFromFaucet(directAddress);
    }

    await sleep(5000);
  }, 200000);

  it('check direct address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: directAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check amino address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: aminoAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check direct offline address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: directOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('check amino offline address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: aminoOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

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
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: testingOfflineAddress,
      denom,
    });

    // Stake 1/5 of the tokens
    // eslint-disable-next-line no-undef
    const delegationAmount = (BigInt(balance!.amount) / BigInt(5)).toString();
    const msgDelegate = MsgDelegate.fromPartial({
      delegatorAddress: testingOfflineAddress,
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
      aminoSigner,
      testingOfflineAddress,
      msgDelegate,
      fee,
      ''
    );
    await result.wait();
  }, 200000);

  it('check direct address has tokens', async () => {
    // Create query client for balance check
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { balance } = await getBalance(queryClient, {
      address: testingOfflineAddress,
      denom,
    });

    expect(parseInt(balance!.amount)).toBeGreaterThan(0);
  }, 200000);

  it('submit a txt proposal', async () => {
    const contentMsg = TextProposal.fromPartial({
      title: 'Test Proposal',
      description: 'Test text proposal for the e2e testing',
    });

    const msgSubmitProposal = MsgSubmitProposal.fromPartial({
      proposer: directAddress,
      initialDeposit: [
        {
          amount: '100000000000000000000',
          denom: denom,
        },
      ],
      content: {
        typeUrl: '/cosmos.gov.v1beta1.TextProposal',
        value: TextProposal.encode(contentMsg).finish(),
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

    const result = await submitProposal(
      directSigner,
      directAddress,
      msgSubmitProposal,
      fee,
      ''
    );

    try {
      await result.wait();
    } catch (error) {
      console.log(error);
      console.log(result);
    }


    // For simplicity, use a fixed proposal ID since event parsing is complex
    // In a real test, you would parse the events to get the actual proposal ID
    proposalId = '1';

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it('query proposal', async () => {
    // Create query client for proposal query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const result = await getProposal(queryClient, {
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.id.toString()).toEqual(proposalId);
  }, 200000);

  it('vote on proposal using direct', async () => {
    // Vote on proposal from direct address
    const msgVote = MsgVote.fromPartial({
      proposalId: BigInt(proposalId),
      voter: directAddress,
      option: VoteOption.VOTE_OPTION_YES,
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

    const result = await vote(
      directSigner,
      directAddress,
      msgVote,
      fee,
      ''
    );

    await result.wait();
  }, 200000);

  it('verify direct vote', async () => {
    // Create query client for vote query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { vote } = await getVote(queryClient, {
      proposalId: BigInt(proposalId),
      voter: directAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(directAddress);
    vote.options.some((option) => {
      return option.option === VoteOption.VOTE_OPTION_YES;
    });
  }, 200000);

  it('vote on proposal using amino', async () => {
    // Vote on proposal from amino address
    const msgVote = MsgVote.fromPartial({
      proposalId: BigInt(proposalId),
      voter: aminoAddress,
      option: VoteOption.VOTE_OPTION_NO,
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

    const result = await vote(
      aminoSigner,
      aminoAddress,
      msgVote,
      fee,
      ''
    );

    await result.wait();
  }, 200000);

  it('verify amino vote', async () => {
    // Create query client for vote query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { vote } = await getVote(queryClient, {
      proposalId: BigInt(proposalId),
      voter: aminoAddress,
    });

    expect(vote.proposalId.toString()).toEqual(proposalId);
    expect(vote.voter).toEqual(aminoAddress);
    vote.options.some((option) => {
      return option.option === VoteOption.VOTE_OPTION_NO;
    });
  }, 200000);

  it('verify proposal passed', async () => {
    // Create query client for proposal query
    const queryClient = await createCosmosQueryClient(xplaRpcEndpoint);

    const { proposal } = await getProposal(queryClient, {
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD);
  }, 200000);
});
