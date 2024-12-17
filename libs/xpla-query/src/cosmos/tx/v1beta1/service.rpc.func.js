"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetTxDecodeAmino = exports.createGetTxDecodeAmino = exports.useGetTxEncodeAmino = exports.createGetTxEncodeAmino = exports.useGetTxEncode = exports.createGetTxEncode = exports.useGetTxDecode = exports.createGetTxDecode = exports.useGetGetBlockWithTxs = exports.createGetGetBlockWithTxs = exports.useGetGetTxsEvent = exports.createGetGetTxsEvent = exports.useGetBroadcastTx = exports.createGetBroadcastTx = exports.useGetGetTx = exports.createGetGetTx = exports.useGetSimulate = exports.createGetSimulate = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const service_1 = require("./service");
const createGetSimulate = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.SimulateRequest.encode,
    decode: service_1.SimulateResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "Simulate",
    clientResolver
});
exports.createGetSimulate = createGetSimulate;
exports.useGetSimulate = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetSimulate,
    queryKeyPrefix: "SimulateQuery"
});
const createGetGetTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetTxRequest.encode,
    decode: service_1.GetTxResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetTx",
    clientResolver
});
exports.createGetGetTx = createGetGetTx;
exports.useGetGetTx = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetGetTx,
    queryKeyPrefix: "GetTxQuery"
});
const createGetBroadcastTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.BroadcastTxRequest.encode,
    decode: service_1.BroadcastTxResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "BroadcastTx",
    clientResolver
});
exports.createGetBroadcastTx = createGetBroadcastTx;
exports.useGetBroadcastTx = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetBroadcastTx,
    queryKeyPrefix: "BroadcastTxQuery"
});
const createGetGetTxsEvent = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetTxsEventRequest.encode,
    decode: service_1.GetTxsEventResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetTxsEvent",
    clientResolver
});
exports.createGetGetTxsEvent = createGetGetTxsEvent;
exports.useGetGetTxsEvent = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetGetTxsEvent,
    queryKeyPrefix: "GetTxsEventQuery"
});
const createGetGetBlockWithTxs = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetBlockWithTxsRequest.encode,
    decode: service_1.GetBlockWithTxsResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetBlockWithTxs",
    clientResolver
});
exports.createGetGetBlockWithTxs = createGetGetBlockWithTxs;
exports.useGetGetBlockWithTxs = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetGetBlockWithTxs,
    queryKeyPrefix: "GetBlockWithTxsQuery"
});
const createGetTxDecode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxDecodeRequest.encode,
    decode: service_1.TxDecodeResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxDecode",
    clientResolver
});
exports.createGetTxDecode = createGetTxDecode;
exports.useGetTxDecode = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTxDecode,
    queryKeyPrefix: "TxDecodeQuery"
});
const createGetTxEncode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxEncodeRequest.encode,
    decode: service_1.TxEncodeResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxEncode",
    clientResolver
});
exports.createGetTxEncode = createGetTxEncode;
exports.useGetTxEncode = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTxEncode,
    queryKeyPrefix: "TxEncodeQuery"
});
const createGetTxEncodeAmino = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxEncodeAminoRequest.encode,
    decode: service_1.TxEncodeAminoResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxEncodeAmino",
    clientResolver
});
exports.createGetTxEncodeAmino = createGetTxEncodeAmino;
exports.useGetTxEncodeAmino = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTxEncodeAmino,
    queryKeyPrefix: "TxEncodeAminoQuery"
});
const createGetTxDecodeAmino = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxDecodeAminoRequest.encode,
    decode: service_1.TxDecodeAminoResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxDecodeAmino",
    clientResolver
});
exports.createGetTxDecodeAmino = createGetTxDecodeAmino;
exports.useGetTxDecodeAmino = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetTxDecodeAmino,
    queryKeyPrefix: "TxDecodeAminoQuery"
});
