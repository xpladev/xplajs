"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetSendEnabled = exports.createGetDenomOwnersByQuery = exports.createGetDenomOwners = exports.createGetDenomsMetadata = exports.createGetDenomMetadataByQueryString = exports.createGetDenomMetadata = exports.createGetParams = exports.createGetSupplyOf = exports.createGetTotalSupply = exports.createGetSpendableBalanceByDenom = exports.createGetSpendableBalances = exports.createGetAllBalances = exports.createGetBalance = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetBalance = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBalanceRequest.encode,
    decode: query_1.QueryBalanceResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "Balance",
    clientResolver
});
exports.createGetBalance = createGetBalance;
const createGetAllBalances = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAllBalancesRequest.encode,
    decode: query_1.QueryAllBalancesResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "AllBalances",
    clientResolver
});
exports.createGetAllBalances = createGetAllBalances;
const createGetSpendableBalances = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySpendableBalancesRequest.encode,
    decode: query_1.QuerySpendableBalancesResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SpendableBalances",
    clientResolver
});
exports.createGetSpendableBalances = createGetSpendableBalances;
const createGetSpendableBalanceByDenom = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySpendableBalanceByDenomRequest.encode,
    decode: query_1.QuerySpendableBalanceByDenomResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SpendableBalanceByDenom",
    clientResolver
});
exports.createGetSpendableBalanceByDenom = createGetSpendableBalanceByDenom;
const createGetTotalSupply = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTotalSupplyRequest.encode,
    decode: query_1.QueryTotalSupplyResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "TotalSupply",
    clientResolver
});
exports.createGetTotalSupply = createGetTotalSupply;
const createGetSupplyOf = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySupplyOfRequest.encode,
    decode: query_1.QuerySupplyOfResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SupplyOf",
    clientResolver
});
exports.createGetSupplyOf = createGetSupplyOf;
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
const createGetDenomMetadata = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomMetadataRequest.encode,
    decode: query_1.QueryDenomMetadataResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomMetadata",
    clientResolver
});
exports.createGetDenomMetadata = createGetDenomMetadata;
const createGetDenomMetadataByQueryString = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomMetadataByQueryStringRequest.encode,
    decode: query_1.QueryDenomMetadataByQueryStringResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomMetadataByQueryString",
    clientResolver
});
exports.createGetDenomMetadataByQueryString = createGetDenomMetadataByQueryString;
const createGetDenomsMetadata = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomsMetadataRequest.encode,
    decode: query_1.QueryDenomsMetadataResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomsMetadata",
    clientResolver
});
exports.createGetDenomsMetadata = createGetDenomsMetadata;
const createGetDenomOwners = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomOwnersRequest.encode,
    decode: query_1.QueryDenomOwnersResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomOwners",
    clientResolver
});
exports.createGetDenomOwners = createGetDenomOwners;
const createGetDenomOwnersByQuery = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDenomOwnersByQueryRequest.encode,
    decode: query_1.QueryDenomOwnersByQueryResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "DenomOwnersByQuery",
    clientResolver
});
exports.createGetDenomOwnersByQuery = createGetDenomOwnersByQuery;
const createGetSendEnabled = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QuerySendEnabledRequest.encode,
    decode: query_1.QuerySendEnabledResponse.decode,
    service: "cosmos.bank.v1beta1.Query",
    method: "SendEnabled",
    clientResolver
});
exports.createGetSendEnabled = createGetSendEnabled;
