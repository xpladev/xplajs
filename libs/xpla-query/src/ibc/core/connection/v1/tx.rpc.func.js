"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateConnectionParams = exports.createUpdateConnectionParams = exports.useConnectionOpenConfirm = exports.createConnectionOpenConfirm = exports.useConnectionOpenAck = exports.createConnectionOpenAck = exports.useConnectionOpenTry = exports.createConnectionOpenTry = exports.useConnectionOpenInit = exports.createConnectionOpenInit = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const react_query_1 = require("../../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createConnectionOpenInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenInit)
});
exports.createConnectionOpenInit = createConnectionOpenInit;
exports.useConnectionOpenInit = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createConnectionOpenInit
});
const createConnectionOpenTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenTry)
});
exports.createConnectionOpenTry = createConnectionOpenTry;
exports.useConnectionOpenTry = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createConnectionOpenTry
});
const createConnectionOpenAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenAck)
});
exports.createConnectionOpenAck = createConnectionOpenAck;
exports.useConnectionOpenAck = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createConnectionOpenAck
});
const createConnectionOpenConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenConfirm)
});
exports.createConnectionOpenConfirm = createConnectionOpenConfirm;
exports.useConnectionOpenConfirm = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createConnectionOpenConfirm
});
const createUpdateConnectionParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateConnectionParams = createUpdateConnectionParams;
exports.useUpdateConnectionParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateConnectionParams
});
