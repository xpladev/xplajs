/// <reference types="@types/jest" />

import './setup.test';

import { Asset } from '@chain-registry/types';
import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';
import { AminoSigner } from '@interchainjs/cosmos/signers/amino';
import { DirectSigner } from '@interchainjs/cosmos/signers/direct';
import { EthSecp256k1HDWallet } from '@xpla/xpla/wallets/ethSecp256k1hd';
import { SigningClient } from '@interchainjs/cosmos/signing-client';
import {
  assertIsDeliverTxSuccess,
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
  MsgSubmitProposal,
  MsgVote,
} from 'interchainjs/cosmos/gov/v1beta1/tx';
import {
  BondStatus,
  bondStatusToJSON,
} from 'interchainjs/cosmos/staking/v1beta1/staking';
import { MsgDelegate } from 'interchainjs/cosmos/staking/v1beta1/tx';
import { BigNumber } from 'bignumber.js';
import { useChain } from 'starshipjs';

import { generateMnemonic } from '../src';
import { AminoGenericOfflineSigner, OfflineAminoSigner, OfflineDirectSigner } from '@interchainjs/cosmos/types/wallet';
import { SIGN_MODE } from '@interchainjs/types';
import { getBalance } from "@interchainjs/cosmos-types/cosmos/bank/v1beta1/query.rpc.func";
import { getProposal, getVote } from "@interchainjs/cosmos-types/cosmos/gov/v1beta1/query.rpc.func";
import { getValidators } from "@interchainjs/cosmos-types/cosmos/staking/v1beta1/query.rpc.func";
import { QueryBalanceRequest, QueryBalanceResponse } from '@interchainjs/cosmos-types/cosmos/bank/v1beta1/query';
import { QueryProposalRequest, QueryProposalResponse, QueryVoteRequest, QueryVoteResponse } from '@interchainjs/cosmos-types/cosmos/gov/v1beta1/query';
import { QueryValidatorsRequest, QueryValidatorsResponse } from '@interchainjs/cosmos-types/cosmos/staking/v1beta1/query';
import { defaultSignerOptions } from '@xpla/xpla/defaults';


const hdPath = "m/44'/60'/0'/0/0";

describe('Governance tests for xpla', () => {
  let directSigner: DirectSigner,
    aminoSigner: AminoSigner,
    signingClient: SigningClient,
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

    // Initialize auth
    const [directAuth] = EthSecp256k1Auth.fromMnemonic(generateMnemonic(), [
      hdPath,
    ]);
    const [aminoAuth] = EthSecp256k1Auth.fromMnemonic(generateMnemonic(), [
      hdPath,
    ]);
    directSigner = new DirectSigner(
      directAuth,
      toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      xplaRpcEndpoint,
      defaultSignerOptions.Cosmos
    );
    aminoSigner = new AminoSigner(
      aminoAuth,
      toEncoders(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      toConverters(MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote),
      xplaRpcEndpoint,
      defaultSignerOptions.Cosmos
    );
    directAddress = await directSigner.getAddress();
    aminoAddress = await aminoSigner.getAddress();

    // Initialize wallet
    const directWallet = EthSecp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: commonPrefix,
        hdPath: hdPath,
      },
    ]);
    const aminoWallet = EthSecp256k1HDWallet.fromMnemonic(generateMnemonic(), [
      {
        prefix: commonPrefix,
        hdPath: hdPath,
      },
    ]);
    directOfflineSigner = directWallet.toOfflineDirectSigner();
    aminoOfflineSigner = aminoWallet.toOfflineAminoSigner();
    directOfflineAddress = (await directOfflineSigner.getAccounts())[0].address;
    aminoOfflineAddress = (await aminoOfflineSigner.getAccounts())[0].address;
    testingOfflineAddress = aminoOfflineAddress;

    signingClient = await SigningClient.connectWithSigner(
      await getRpcEndpoint(),
      new AminoGenericOfflineSigner(aminoOfflineSigner),
      {
        signerOptions: defaultSignerOptions.Cosmos,
        broadcast: {
          checkTx: true,
          deliverTx: true,
          useLegacyBroadcastTxCommit: false,
        }
      }
    );

    signingClient.addEncoders([MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote]);
    signingClient.addConverters([MsgDelegate, TextProposal, MsgSubmitProposal, MsgVote]);

    // Transfer xpla to address
    for (let i = 0; i < 10; i++) {
      await creditFromFaucet(directAddress);
      await creditFromFaucet(aminoAddress);
      await creditFromFaucet(directOfflineAddress);
      await creditFromFaucet(aminoOfflineAddress);
    }

    await sleep(5000);
  }, 2000000);

  it('check direct address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: directAddress,
      denom,
    });

    expect(balance!.amount).toEqual('1000000000000000000000');
  }, 200000);

  it('check amino address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: aminoAddress,
      denom,
    });

    expect(balance!.amount).toEqual('1000000000000000000000');
  }, 200000);

  it('check direct offline address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: directOfflineAddress,
      denom,
    });

    expect(balance!.amount).toEqual('1000000000000000000000');
  }, 200000);

  it('check amino offline address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: aminoOfflineAddress,
      denom,
    });

    expect(balance!.amount).toEqual('1000000000000000000000');
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
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: testingOfflineAddress,
      denom,
    });

    // Stake 1/5 of the tokens
    // eslint-disable-next-line no-undef
    const delegationAmount = (BigInt(balance!.amount) / BigInt(5)).toString();
    const msg = {
      typeUrl: MsgDelegate.typeUrl,
      value: MsgDelegate.fromPartial({
        delegatorAddress: testingOfflineAddress,
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

    const result = await signingClient.signAndBroadcast(
      testingOfflineAddress,
      [msg],
      fee
    );
    assertIsDeliverTxSuccess(result);
  }, 200000);

  it('check direct address has tokens', async () => {
    const { balance } = await getBalance(xplaRpcEndpoint, {
      address: testingOfflineAddress,
      denom,
    });

    expect(balance!.amount).toEqual('799999999999999900000');
  }, 200000);

  it('submit a txt proposal', async () => {
    const contentMsg = TextProposal.fromPartial({
      title: 'Test Proposal',
      description: 'Test text proposal for the e2e testing',
    });

    // Stake half of the tokens
    const msg = {
      typeUrl: MsgSubmitProposal.typeUrl,
      value: MsgSubmitProposal.fromPartial({
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

    // Get proposal id from log events
    const proposalIdEvent = result.events.find(
      (event) => event.type === 'submit_proposal'
    );

    proposalId = proposalIdEvent!.attributes.find(
      (attr) => attr.key === 'proposal_id'
    )!.value;

    // eslint-disable-next-line no-undef
    expect(BigInt(proposalId)).toBeGreaterThan(BigInt(0));
  }, 200000);

  it('query proposal', async () => {
    const result = await getProposal(xplaRpcEndpoint, {
      proposalId: BigInt(proposalId),
    });

    expect(result.proposal.proposalId.toString()).toEqual(proposalId);
  }, 200000);

  it('vote on proposal using direct', async () => {
    // Vote on proposal from direct address
    const msg = {
      typeUrl: MsgVote.typeUrl,
      value: MsgVote.fromPartial({
        proposalId: BigInt(proposalId),
        voter: directAddress,
        option: VoteOption.VOTE_OPTION_YES,
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
  }, 200000);

  it('verify direct vote', async () => {
    const { vote } = await getVote(xplaRpcEndpoint, {
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
    const msg = {
      typeUrl: MsgVote.typeUrl,
      value: MsgVote.fromPartial({
        proposalId: BigInt(proposalId),
        voter: aminoAddress,
        option: VoteOption.VOTE_OPTION_NO,
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

    const result = await aminoSigner.signAndBroadcast(
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
  }, 200000);

  it('verify amino vote', async () => {
    const { vote } = await getVote(xplaRpcEndpoint, {
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
    const { proposal } = await getProposal(xplaRpcEndpoint, {
      proposalId: BigInt(proposalId),
    });

    expect(proposal.status).toEqual(ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD);
  }, 200000);
});
