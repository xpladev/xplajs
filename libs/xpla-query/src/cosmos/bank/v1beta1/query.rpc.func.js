"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetSendEnabled = exports.createGetSendEnabled = exports.useGetDenomOwnersByQuery = exports.createGetDenomOwnersByQuery = exports.useGetDenomOwners = exports.createGetDenomOwners = exports.useGetDenomsMetadata = exports.createGetDenomsMetadata = exports.useGetDenomMetadataByQueryString = exports.createGetDenomMetadataByQueryString = exports.useGetDenomMetadata = exports.createGetDenomMetadata = exports.useGetParams = exports.createGetParams = exports.useGetSupplyOf = exports.createGetSupplyOf = exports.useGetTotalSupply = exports.createGetTotalSupply = exports.useGetSpendableBalanceByDenom = exports.createGetSpendableBalanceByDenom = exports.useGetSpendableBalances = exports.createGetSpendableBalances = exports.useGetAllBalances = exports.createGetAllBalances = exports.useGetBalance = exports.createGetBalance = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetBalance = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBalanceRequest.encode,
    decode: query_1.QueryBalanceResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "Balance",
    clientResolver
});
exports.createGetBalance = createGetBalance;
exports.useGetBalance = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBalance,
    queryKeyPrefix: "BalanceQuery"
});
const createGetAllBalances = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAllBalancesRequest.encode,
    decode: query_1.QueryAllBalancesResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "AllBalances",
    clientResolver
});
exports.createGetAllBalances = createGetAllBalances;
exports.useGetAllBalances = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAllBalances,
    queryKeyPrefix: "AllBalancesQuery"
});
const createGetSpendableBalances = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySpendableBalancesRequest.encode,
    decode: query_1.QuerySpendableBalancesResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SpendableBalances",
    clientResolver
});
exports.createGetSpendableBalances = createGetSpendableBalances;
exports.useGetSpendableBalances = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetSpendableBalances,
    queryKeyPrefix: "SpendableBalancesQuery"
});
const createGetSpendableBalanceByDenom = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySpendableBalanceByDenomRequest.encode,
    decode: query_1.QuerySpendableBalanceByDenomResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SpendableBalanceByDenom",
    clientResolver
});
exports.createGetSpendableBalanceByDenom = createGetSpendableBalanceByDenom;
exports.useGetSpendableBalanceByDenom = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetSpendableBalanceByDenom,
    queryKeyPrefix: "SpendableBalanceByDenomQuery"
});
const createGetTotalSupply = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTotalSupplyRequest.encode,
    decode: query_1.QueryTotalSupplyResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "TotalSupply",
    clientResolver
});
exports.createGetTotalSupply = createGetTotalSupply;
exports.useGetTotalSupply = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTotalSupply,
    queryKeyPrefix: "TotalSupplyQuery"
});
const createGetSupplyOf = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySupplyOfRequest.encode,
    decode: query_1.QuerySupplyOfResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SupplyOf",
    clientResolver
});
exports.createGetSupplyOf = createGetSupplyOf;
exports.useGetSupplyOf = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetSupplyOf,
    queryKeyPrefix: "SupplyOfQuery"
});
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetDenomMetadata = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomMetadataRequest.encode,
    decode: query_1.QueryDenomMetadataResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomMetadata",
    clientResolver
});
exports.createGetDenomMetadata = createGetDenomMetadata;
exports.useGetDenomMetadata = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDenomMetadata,
    queryKeyPrefix: "DenomMetadataQuery"
});
const createGetDenomMetadataByQueryString = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomMetadataByQueryStringRequest.encode,
    decode: query_1.QueryDenomMetadataByQueryStringResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomMetadataByQueryString",
    clientResolver
});
exports.createGetDenomMetadataByQueryString = createGetDenomMetadataByQueryString;
exports.useGetDenomMetadataByQueryString = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDenomMetadataByQueryString,
    queryKeyPrefix: "DenomMetadataByQueryStringQuery"
});
const createGetDenomsMetadata = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomsMetadataRequest.encode,
    decode: query_1.QueryDenomsMetadataResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomsMetadata",
    clientResolver
});
exports.createGetDenomsMetadata = createGetDenomsMetadata;
exports.useGetDenomsMetadata = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDenomsMetadata,
    queryKeyPrefix: "DenomsMetadataQuery"
});
const createGetDenomOwners = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomOwnersRequest.encode,
    decode: query_1.QueryDenomOwnersResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomOwners",
    clientResolver
});
exports.createGetDenomOwners = createGetDenomOwners;
exports.useGetDenomOwners = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDenomOwners,
    queryKeyPrefix: "DenomOwnersQuery"
});
const createGetDenomOwnersByQuery = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomOwnersByQueryRequest.encode,
    decode: query_1.QueryDenomOwnersByQueryResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomOwnersByQuery",
    clientResolver
});
exports.createGetDenomOwnersByQuery = createGetDenomOwnersByQuery;
exports.useGetDenomOwnersByQuery = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDenomOwnersByQuery,
    queryKeyPrefix: "DenomOwnersByQueryQuery"
});
const createGetSendEnabled = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySendEnabledRequest.encode,
    decode: query_1.QuerySendEnabledResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SendEnabled",
    clientResolver
});
exports.createGetSendEnabled = createGetSendEnabled;
exports.useGetSendEnabled = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetSendEnabled,
    queryKeyPrefix: "SendEnabledQuery"
});
