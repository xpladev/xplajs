import { ProposalStatus, Proposal, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal: Proposal;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposalStatus: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    /** proposals defines all the requested governance proposals. */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** voter defines the voter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defines the queried vote. */
    vote: Vote;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defines the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    paramsType: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** voting_params defines the parameters related to voting. */
    votingParams: VotingParams;
    /** deposit_params defines the parameters related to deposit. */
    depositParams: DepositParams;
    /** tally_params defines the parameters related to tally. */
    tallyParams: TallyParams;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit: Deposit;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits defines the requested deposits. */
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposalId: bigint;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally: TallyResult;
}
export declare const QueryProposalRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryProposalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest;
    fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse;
    fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest;
    fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryVoteRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest;
    fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryVoteResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse;
    fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryVotesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest;
    fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryVotesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse;
    fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest;
    fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse;
    fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest;
    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse;
    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const QueryTallyResultRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTallyResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest;
    fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTallyResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse;
    fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse;
};
