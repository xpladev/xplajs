"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetTxDecodeAmino = exports.createGetTxEncodeAmino = exports.createGetTxEncode = exports.createGetTxDecode = exports.createGetGetBlockWithTxs = exports.createGetGetTxsEvent = exports.createGetBroadcastTx = exports.createGetGetTx = exports.createGetSimulate = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const service_1 = require("./service");
const createGetSimulate = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.SimulateRequest.encode,
    decode: service_1.SimulateResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "Simulate",
    clientResolver
});
exports.createGetSimulate = createGetSimulate;
const createGetGetTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetTxRequest.encode,
    decode: service_1.GetTxResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetTx",
    clientResolver
});
exports.createGetGetTx = createGetGetTx;
const createGetBroadcastTx = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.BroadcastTxRequest.encode,
    decode: service_1.BroadcastTxResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "BroadcastTx",
    clientResolver
});
exports.createGetBroadcastTx = createGetBroadcastTx;
const createGetGetTxsEvent = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetTxsEventRequest.encode,
    decode: service_1.GetTxsEventResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetTxsEvent",
    clientResolver
});
exports.createGetGetTxsEvent = createGetGetTxsEvent;
const createGetGetBlockWithTxs = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.GetBlockWithTxsRequest.encode,
    decode: service_1.GetBlockWithTxsResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "GetBlockWithTxs",
    clientResolver
});
exports.createGetGetBlockWithTxs = createGetGetBlockWithTxs;
const createGetTxDecode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxDecodeRequest.encode,
    decode: service_1.TxDecodeResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxDecode",
    clientResolver
});
exports.createGetTxDecode = createGetTxDecode;
const createGetTxEncode = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxEncodeRequest.encode,
    decode: service_1.TxEncodeResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxEncode",
    clientResolver
});
exports.createGetTxEncode = createGetTxEncode;
const createGetTxEncodeAmino = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxEncodeAminoRequest.encode,
    decode: service_1.TxEncodeAminoResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxEncodeAmino",
    clientResolver
});
exports.createGetTxEncodeAmino = createGetTxEncodeAmino;
const createGetTxDecodeAmino = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: service_1.TxDecodeAminoRequest.encode,
    decode: service_1.TxDecodeAminoResponse.decode,
    service: "cosmos.tx.v1beta1.Service",
    method: "TxDecodeAmino",
    clientResolver
});
exports.createGetTxDecodeAmino = createGetTxDecodeAmino;
