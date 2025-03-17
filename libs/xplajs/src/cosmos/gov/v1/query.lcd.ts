import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryConstitutionRequest, QueryConstitutionResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Constitution queries the chain's constitution. */
  constitution = async (_params: QueryConstitutionRequest = {}): Promise<QueryConstitutionResponse> => {
    const endpoint = `cosmos/gov/v1/constitution`;
    return await this.req.get<QueryConstitutionResponse>(endpoint);
  };
  /* Proposal queries proposal details based on ProposalID. */
  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}`;
    return await this.req.get<QueryProposalResponse>(endpoint);
  };
  /* Proposals queries all proposals based on given status. */
  proposals = async (params: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.proposal_status !== "undefined") {
      options.params.proposal_status = params.proposal_status;
    }
    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }
    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals`;
    return await this.req.get<QueryProposalsResponse>(endpoint, options);
  };
  /* Vote queries voted information based on proposalID, voterAddr. */
  vote = async (params: QueryVoteRequest): Promise<QueryVoteResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/votes/${params.voter}`;
    return await this.req.get<QueryVoteResponse>(endpoint);
  };
  /* Votes queries votes of a given proposal. */
  votes = async (params: QueryVotesRequest): Promise<QueryVotesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/votes`;
    return await this.req.get<QueryVotesResponse>(endpoint, options);
  };
  /* Params queries all parameters of the gov module. */
  params = async (params: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/gov/v1/params/${params.params_type}`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Deposit queries single deposit information based on proposalID, depositAddr. */
  deposit = async (params: QueryDepositRequest): Promise<QueryDepositResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/deposits/${params.depositor}`;
    return await this.req.get<QueryDepositResponse>(endpoint);
  };
  /* Deposits queries all deposits of a single proposal. */
  deposits = async (params: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/deposits`;
    return await this.req.get<QueryDepositsResponse>(endpoint, options);
  };
  /* TallyResult queries the tally of a proposal vote. */
  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposal_id}/tally`;
    return await this.req.get<QueryTallyResultResponse>(endpoint);
  };
}