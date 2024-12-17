"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetPool = exports.createGetPool = exports.useGetParams = exports.createGetParams = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "xpla.reward.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
const createGetPool = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryPoolRequest.encode,
    decode: query_1.QueryPoolResponse.decode,
    service: "xpla.reward.v1beta1.Query",
    method: "Pool",
    clientResolver
});
exports.createGetPool = createGetPool;
exports.useGetPool = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetPool,
    queryKeyPrefix: "PoolQuery"
});
