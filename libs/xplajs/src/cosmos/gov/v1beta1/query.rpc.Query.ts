import { Proposal, Vote, Deposit, TallyResult } from "./gov";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based on proposalID, depositor address. */
  Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Proposal queries proposal details based on ProposalID. */
  Proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  };
  /* Proposals queries all proposals based on given status. */
  Proposals = async (request: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new BinaryReader(data)));
  };
  /* Vote queries voted information based on proposalID, voterAddr. */
  Vote = async (request: QueryVoteRequest): Promise<QueryVoteResponse> => {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  };
  /* Votes queries votes of a given proposal. */
  Votes = async (request: QueryVotesRequest): Promise<QueryVotesResponse> => {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters of the gov module. */
  Params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Deposit queries single deposit information based on proposalID, depositor address. */
  Deposit = async (request: QueryDepositRequest): Promise<QueryDepositResponse> => {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  };
  /* Deposits queries all deposits of a single proposal. */
  Deposits = async (request: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  };
  /* TallyResult queries the tally of a proposal vote. */
  TallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.Proposal(request);
    },
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
      return queryService.Proposals(request);
    },
    Vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
      return queryService.Vote(request);
    },
    Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
      return queryService.Votes(request);
    },
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
      return queryService.Deposit(request);
    },
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.Deposits(request);
    },
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
      return queryService.TallyResult(request);
    }
  };
};