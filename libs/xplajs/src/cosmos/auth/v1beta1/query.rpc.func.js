"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetAccountInfo = exports.createGetAddressStringToBytes = exports.createGetAddressBytesToString = exports.createGetBech32Prefix = exports.createGetModuleAccountByName = exports.createGetModuleAccounts = exports.createGetParams = exports.createGetAccountAddressByID = exports.createGetAccount = exports.createGetAccounts = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetAccounts = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountsRequest.encode,
    decode: query_1.QueryAccountsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Accounts",
    clientResolver
});
exports.createGetAccounts = createGetAccounts;
const createGetAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountRequest.encode,
    decode: query_1.QueryAccountResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Account",
    clientResolver
});
exports.createGetAccount = createGetAccount;
const createGetAccountAddressByID = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountAddressByIDRequest.encode,
    decode: query_1.QueryAccountAddressByIDResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AccountAddressByID",
    clientResolver
});
exports.createGetAccountAddressByID = createGetAccountAddressByID;
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
const createGetModuleAccounts = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryModuleAccountsRequest.encode,
    decode: query_1.QueryModuleAccountsResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "ModuleAccounts",
    clientResolver
});
exports.createGetModuleAccounts = createGetModuleAccounts;
const createGetModuleAccountByName = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryModuleAccountByNameRequest.encode,
    decode: query_1.QueryModuleAccountByNameResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "ModuleAccountByName",
    clientResolver
});
exports.createGetModuleAccountByName = createGetModuleAccountByName;
const createGetBech32Prefix = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.Bech32PrefixRequest.encode,
    decode: query_1.Bech32PrefixResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "Bech32Prefix",
    clientResolver
});
exports.createGetBech32Prefix = createGetBech32Prefix;
const createGetAddressBytesToString = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.AddressBytesToStringRequest.encode,
    decode: query_1.AddressBytesToStringResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AddressBytesToString",
    clientResolver
});
exports.createGetAddressBytesToString = createGetAddressBytesToString;
const createGetAddressStringToBytes = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.AddressStringToBytesRequest.encode,
    decode: query_1.AddressStringToBytesResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AddressStringToBytes",
    clientResolver
});
exports.createGetAddressStringToBytes = createGetAddressStringToBytes;
const createGetAccountInfo = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountInfoRequest.encode,
    decode: query_1.QueryAccountInfoResponse.decode,
    service: "cosmos.auth.v1beta1.Query",
    method: "AccountInfo",
    clientResolver
});
exports.createGetAccountInfo = createGetAccountInfo;
