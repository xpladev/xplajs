"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetTallyResult = exports.createGetTallyResult = exports.useGetDeposits = exports.createGetDeposits = exports.useGetDeposit = exports.createGetDeposit = exports.useGetParams = exports.createGetParams = exports.useGetVotes = exports.createGetVotes = exports.useGetVote = exports.createGetVote = exports.useGetProposals = exports.createGetProposals = exports.useGetProposal = exports.createGetProposal = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetProposal = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryProposalRequest.encode,
    decode: query_1.QueryProposalResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Proposal",
    clientResolver
});
exports.createGetProposal = createGetProposal;
exports.useGetProposal = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetProposal,
    queryKeyPrefix: "ProposalQuery"
});
const createGetProposals = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryProposalsRequest.encode,
    decode: query_1.QueryProposalsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Proposals",
    clientResolver
});
exports.createGetProposals = createGetProposals;
exports.useGetProposals = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetProposals,
    queryKeyPrefix: "ProposalsQuery"
});
const createGetVote = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryVoteRequest.encode,
    decode: query_1.QueryVoteResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Vote",
    clientResolver
});
exports.createGetVote = createGetVote;
exports.useGetVote = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetVote,
    queryKeyPrefix: "VoteQuery"
});
const createGetVotes = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryVotesRequest.encode,
    decode: query_1.QueryVotesResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Votes",
    clientResolver
});
exports.createGetVotes = createGetVotes;
exports.useGetVotes = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetVotes,
    queryKeyPrefix: "VotesQuery"
});
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetDeposit = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDepositRequest.encode,
    decode: query_1.QueryDepositResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Deposit",
    clientResolver
});
exports.createGetDeposit = createGetDeposit;
exports.useGetDeposit = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDeposit,
    queryKeyPrefix: "DepositQuery"
});
const createGetDeposits = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDepositsRequest.encode,
    decode: query_1.QueryDepositsResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "Deposits",
    clientResolver
});
exports.createGetDeposits = createGetDeposits;
exports.useGetDeposits = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDeposits,
    queryKeyPrefix: "DepositsQuery"
});
const createGetTallyResult = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTallyResultRequest.encode,
    decode: query_1.QueryTallyResultResponse.decode,
    service: "cosmos.gov.v1beta1.Query",
    method: "TallyResult",
    clientResolver
});
exports.createGetTallyResult = createGetTallyResult;
exports.useGetTallyResult = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTallyResult,
    queryKeyPrefix: "TallyResultQuery"
});
