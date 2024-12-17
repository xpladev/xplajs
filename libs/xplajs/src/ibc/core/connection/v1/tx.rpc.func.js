"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateConnectionParams = exports.createConnectionOpenConfirm = exports.createConnectionOpenAck = exports.createConnectionOpenTry = exports.createConnectionOpenInit = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createConnectionOpenInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenInit)
});
exports.createConnectionOpenInit = createConnectionOpenInit;
const createConnectionOpenTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenTry)
});
exports.createConnectionOpenTry = createConnectionOpenTry;
const createConnectionOpenAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenAck)
});
exports.createConnectionOpenAck = createConnectionOpenAck;
const createConnectionOpenConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgConnectionOpenConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgConnectionOpenConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgConnectionOpenConfirm)
});
exports.createConnectionOpenConfirm = createConnectionOpenConfirm;
const createUpdateConnectionParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateConnectionParams = createUpdateConnectionParams;
