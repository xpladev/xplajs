"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetBlockGas = exports.createGetBlockGas = exports.useGetBaseFee = exports.createGetBaseFee = exports.useGetParams = exports.createGetParams = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetBaseFee = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBaseFeeRequest.encode,
    decode: query_1.QueryBaseFeeResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "BaseFee",
    clientResolver
});
exports.createGetBaseFee = createGetBaseFee;
exports.useGetBaseFee = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBaseFee,
    queryKeyPrefix: "BaseFeeQuery"
});
const createGetBlockGas = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBlockGasRequest.encode,
    decode: query_1.QueryBlockGasResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "BlockGas",
    clientResolver
});
exports.createGetBlockGas = createGetBlockGas;
exports.useGetBlockGas = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBlockGas,
    queryKeyPrefix: "BlockGasQuery"
});
