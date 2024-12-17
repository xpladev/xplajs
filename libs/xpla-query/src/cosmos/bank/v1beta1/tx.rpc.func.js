"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetSendEnabled = exports.createSetSendEnabled = exports.useUpdateParams = exports.createUpdateParams = exports.useMultiSend = exports.createMultiSend = exports.useSend = exports.createSend = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createSend = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSend.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSend),
    converters: (0, utils_1.toConverters)(tx_1.MsgSend)
});
exports.createSend = createSend;
exports.useSend = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createSend
});
const createMultiSend = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgMultiSend.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgMultiSend),
    converters: (0, utils_1.toConverters)(tx_1.MsgMultiSend)
});
exports.createMultiSend = createMultiSend;
exports.useMultiSend = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createMultiSend
});
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
exports.useUpdateParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateParams
});
const createSetSendEnabled = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSetSendEnabled.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSetSendEnabled),
    converters: (0, utils_1.toConverters)(tx_1.MsgSetSendEnabled)
});
exports.createSetSendEnabled = createSetSendEnabled;
exports.useSetSendEnabled = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createSetSendEnabled
});
