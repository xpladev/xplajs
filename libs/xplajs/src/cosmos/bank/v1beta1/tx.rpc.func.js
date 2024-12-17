"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSetSendEnabled = exports.createUpdateParams = exports.createMultiSend = exports.createSend = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createSend = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSend.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSend),
    converters: (0, utils_1.toConverters)(tx_1.MsgSend)
});
exports.createSend = createSend;
const createMultiSend = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgMultiSend.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgMultiSend),
    converters: (0, utils_1.toConverters)(tx_1.MsgMultiSend)
});
exports.createMultiSend = createMultiSend;
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
const createSetSendEnabled = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSetSendEnabled.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSetSendEnabled),
    converters: (0, utils_1.toConverters)(tx_1.MsgSetSendEnabled)
});
exports.createSetSendEnabled = createSetSendEnabled;
