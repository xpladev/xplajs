"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetBaseFee = exports.createGetBaseFee = exports.useGetTraceBlock = exports.createGetTraceBlock = exports.useGetTraceTx = exports.createGetTraceTx = exports.useGetEstimateGas = exports.createGetEstimateGas = exports.useGetEthCall = exports.createGetEthCall = exports.useGetParams = exports.createGetParams = exports.useGetCode = exports.createGetCode = exports.useGetStorage = exports.createGetStorage = exports.useGetBalance = exports.createGetBalance = exports.useGetValidatorAccount = exports.createGetValidatorAccount = exports.useGetCosmosAccount = exports.createGetCosmosAccount = exports.useGetAccount = exports.createGetAccount = void 0;
const tx_1 = require("./tx");
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryAccountRequest.encode,
    decode: query_1.QueryAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Account",
    clientResolver
});
exports.createGetAccount = createGetAccount;
exports.useGetAccount = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetAccount,
    queryKeyPrefix: "AccountQuery"
});
const createGetCosmosAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryCosmosAccountRequest.encode,
    decode: query_1.QueryCosmosAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "CosmosAccount",
    clientResolver
});
exports.createGetCosmosAccount = createGetCosmosAccount;
exports.useGetCosmosAccount = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetCosmosAccount,
    queryKeyPrefix: "CosmosAccountQuery"
});
const createGetValidatorAccount = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorAccountRequest.encode,
    decode: query_1.QueryValidatorAccountResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "ValidatorAccount",
    clientResolver
});
exports.createGetValidatorAccount = createGetValidatorAccount;
exports.useGetValidatorAccount = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetValidatorAccount,
    queryKeyPrefix: "ValidatorAccountQuery"
});
const createGetBalance = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBalanceRequest.encode,
    decode: query_1.QueryBalanceResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Balance",
    clientResolver
});
exports.createGetBalance = createGetBalance;
exports.useGetBalance = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBalance,
    queryKeyPrefix: "BalanceQuery"
});
const createGetStorage = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryStorageRequest.encode,
    decode: query_1.QueryStorageResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Storage",
    clientResolver
});
exports.createGetStorage = createGetStorage;
exports.useGetStorage = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetStorage,
    queryKeyPrefix: "StorageQuery"
});
const createGetCode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryCodeRequest.encode,
    decode: query_1.QueryCodeResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Code",
    clientResolver
});
exports.createGetCode = createGetCode;
exports.useGetCode = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetCode,
    queryKeyPrefix: "CodeQuery"
});
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetEthCall = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.EthCallRequest.encode,
    decode: tx_1.MsgEthereumTxResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "EthCall",
    clientResolver
});
exports.createGetEthCall = createGetEthCall;
exports.useGetEthCall = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetEthCall,
    queryKeyPrefix: "EthCallQuery"
});
const createGetEstimateGas = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.EthCallRequest.encode,
    decode: query_1.EstimateGasResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "EstimateGas",
    clientResolver
});
exports.createGetEstimateGas = createGetEstimateGas;
exports.useGetEstimateGas = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetEstimateGas,
    queryKeyPrefix: "EstimateGasQuery"
});
const createGetTraceTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTraceTxRequest.encode,
    decode: query_1.QueryTraceTxResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "TraceTx",
    clientResolver
});
exports.createGetTraceTx = createGetTraceTx;
exports.useGetTraceTx = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTraceTx,
    queryKeyPrefix: "TraceTxQuery"
});
const createGetTraceBlock = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryTraceBlockRequest.encode,
    decode: query_1.QueryTraceBlockResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "TraceBlock",
    clientResolver
});
exports.createGetTraceBlock = createGetTraceBlock;
exports.useGetTraceBlock = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTraceBlock,
    queryKeyPrefix: "TraceBlockQuery"
});
const createGetBaseFee = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBaseFeeRequest.encode,
    decode: query_1.QueryBaseFeeResponse.decode,
    service: "ethermint.evm.v1.Query",
    method: "BaseFee",
    clientResolver
});
exports.createGetBaseFee = createGetBaseFee;
exports.useGetBaseFee = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBaseFee,
    queryKeyPrefix: "BaseFeeQuery"
});
