"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetBlockGas = exports.createGetBaseFee = exports.createGetParams = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
const createGetBaseFee = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBaseFeeRequest.encode,
    decode: query_1.QueryBaseFeeResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "BaseFee",
    clientResolver
});
exports.createGetBaseFee = createGetBaseFee;
const createGetBlockGas = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryBlockGasRequest.encode,
    decode: query_1.QueryBlockGasResponse.decode,
    service: "ethermint.feemarket.v1.Query",
    method: "BlockGas",
    clientResolver
});
exports.createGetBlockGas = createGetBlockGas;
