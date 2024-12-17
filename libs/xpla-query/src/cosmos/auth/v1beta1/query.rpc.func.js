"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetAccountInfo = exports.createGetAccountInfo = exports.useGetAddressStringToBytes = exports.createGetAddressStringToBytes = exports.useGetAddressBytesToString = exports.createGetAddressBytesToString = exports.useGetBech32Prefix = exports.createGetBech32Prefix = exports.useGetModuleAccountByName = exports.createGetModuleAccountByName = exports.useGetModuleAccounts = exports.createGetModuleAccounts = exports.useGetParams = exports.createGetParams = exports.useGetAccountAddressByID = exports.createGetAccountAddressByID = exports.useGetAccount = exports.createGetAccount = exports.useGetAccounts = exports.createGetAccounts = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetAccounts = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountsRequest.encode,
    decode: query_1.QueryAccountsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Accounts",
    clientResolver
});
exports.createGetAccounts = createGetAccounts;
exports.useGetAccounts = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAccounts,
    queryKeyPrefix: "AccountsQuery"
});
const createGetAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountRequest.encode,
    decode: query_1.QueryAccountResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Account",
    clientResolver
});
exports.createGetAccount = createGetAccount;
exports.useGetAccount = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAccount,
    queryKeyPrefix: "AccountQuery"
});
const createGetAccountAddressByID = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountAddressByIDRequest.encode,
    decode: query_1.QueryAccountAddressByIDResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AccountAddressByID",
    clientResolver
});
exports.createGetAccountAddressByID = createGetAccountAddressByID;
exports.useGetAccountAddressByID = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAccountAddressByID,
    queryKeyPrefix: "AccountAddressByIDQuery"
});
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetModuleAccounts = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryModuleAccountsRequest.encode,
    decode: query_1.QueryModuleAccountsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "ModuleAccounts",
    clientResolver
});
exports.createGetModuleAccounts = createGetModuleAccounts;
exports.useGetModuleAccounts = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetModuleAccounts,
    queryKeyPrefix: "ModuleAccountsQuery"
});
const createGetModuleAccountByName = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryModuleAccountByNameRequest.encode,
    decode: query_1.QueryModuleAccountByNameResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "ModuleAccountByName",
    clientResolver
});
exports.createGetModuleAccountByName = createGetModuleAccountByName;
exports.useGetModuleAccountByName = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetModuleAccountByName,
    queryKeyPrefix: "ModuleAccountByNameQuery"
});
const createGetBech32Prefix = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.Bech32PrefixRequest.encode,
    decode: query_1.Bech32PrefixResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Bech32Prefix",
    clientResolver
});
exports.createGetBech32Prefix = createGetBech32Prefix;
exports.useGetBech32Prefix = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBech32Prefix,
    queryKeyPrefix: "Bech32PrefixQuery"
});
const createGetAddressBytesToString = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.AddressBytesToStringRequest.encode,
    decode: query_1.AddressBytesToStringResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AddressBytesToString",
    clientResolver
});
exports.createGetAddressBytesToString = createGetAddressBytesToString;
exports.useGetAddressBytesToString = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAddressBytesToString,
    queryKeyPrefix: "AddressBytesToStringQuery"
});
const createGetAddressStringToBytes = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.AddressStringToBytesRequest.encode,
    decode: query_1.AddressStringToBytesResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AddressStringToBytes",
    clientResolver
});
exports.createGetAddressStringToBytes = createGetAddressStringToBytes;
exports.useGetAddressStringToBytes = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAddressStringToBytes,
    queryKeyPrefix: "AddressStringToBytesQuery"
});
const createGetAccountInfo = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountInfoRequest.encode,
    decode: query_1.QueryAccountInfoResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AccountInfo",
    clientResolver
});
exports.createGetAccountInfo = createGetAccountInfo;
exports.useGetAccountInfo = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAccountInfo,
    queryKeyPrefix: "AccountInfoQuery"
});
