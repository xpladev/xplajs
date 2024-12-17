"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetBaseFee = exports.createGetTraceBlock = exports.createGetTraceTx = exports.createGetEstimateGas = exports.createGetEthCall = exports.createGetParams = exports.createGetCode = exports.createGetStorage = exports.createGetBalance = exports.createGetValidatorAccount = exports.createGetCosmosAccount = exports.createGetAccount = void 0;
const tx_1 = require("./tx");
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountRequest.encode,
    decode: query_1.QueryAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Account",
    clientResolver
});
exports.createGetAccount = createGetAccount;
const createGetCosmosAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryCosmosAccountRequest.encode,
    decode: query_1.QueryCosmosAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "CosmosAccount",
    clientResolver
});
exports.createGetCosmosAccount = createGetCosmosAccount;
const createGetValidatorAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorAccountRequest.encode,
    decode: query_1.QueryValidatorAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "ValidatorAccount",
    clientResolver
});
exports.createGetValidatorAccount = createGetValidatorAccount;
const createGetBalance = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBalanceRequest.encode,
    decode: query_1.QueryBalanceResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Balance",
    clientResolver
});
exports.createGetBalance = createGetBalance;
const createGetStorage = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryStorageRequest.encode,
    decode: query_1.QueryStorageResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Storage",
    clientResolver
});
exports.createGetStorage = createGetStorage;
const createGetCode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryCodeRequest.encode,
    decode: query_1.QueryCodeResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Code",
    clientResolver
});
exports.createGetCode = createGetCode;
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
const createGetEthCall = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.EthCallRequest.encode,
    decode: tx_1.MsgEthereumTxResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "EthCall",
    clientResolver
});
exports.createGetEthCall = createGetEthCall;
const createGetEstimateGas = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.EthCallRequest.encode,
    decode: query_1.EstimateGasResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "EstimateGas",
    clientResolver
});
exports.createGetEstimateGas = createGetEstimateGas;
const createGetTraceTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTraceTxRequest.encode,
    decode: query_1.QueryTraceTxResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "TraceTx",
    clientResolver
});
exports.createGetTraceTx = createGetTraceTx;
const createGetTraceBlock = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTraceBlockRequest.encode,
    decode: query_1.QueryTraceBlockResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "TraceBlock",
    clientResolver
});
exports.createGetTraceBlock = createGetTraceBlock;
const createGetBaseFee = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBaseFeeRequest.encode,
    decode: query_1.QueryBaseFeeResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "BaseFee",
    clientResolver
});
exports.createGetBaseFee = createGetBaseFee;
