"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePruneAcknowledgements = exports.createPruneAcknowledgements = exports.useUpdateChannelParams = exports.createUpdateChannelParams = exports.useChannelUpgradeCancel = exports.createChannelUpgradeCancel = exports.useChannelUpgradeTimeout = exports.createChannelUpgradeTimeout = exports.useChannelUpgradeOpen = exports.createChannelUpgradeOpen = exports.useChannelUpgradeConfirm = exports.createChannelUpgradeConfirm = exports.useChannelUpgradeAck = exports.createChannelUpgradeAck = exports.useChannelUpgradeTry = exports.createChannelUpgradeTry = exports.useChannelUpgradeInit = exports.createChannelUpgradeInit = exports.useAcknowledgement = exports.createAcknowledgement = exports.useTimeoutOnClose = exports.createTimeoutOnClose = exports.useTimeout = exports.createTimeout = exports.useRecvPacket = exports.createRecvPacket = exports.useChannelCloseConfirm = exports.createChannelCloseConfirm = exports.useChannelCloseInit = exports.createChannelCloseInit = exports.useChannelOpenConfirm = exports.createChannelOpenConfirm = exports.useChannelOpenAck = exports.createChannelOpenAck = exports.useChannelOpenTry = exports.createChannelOpenTry = exports.useChannelOpenInit = exports.createChannelOpenInit = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const react_query_1 = require("../../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createChannelOpenInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenInit)
});
exports.createChannelOpenInit = createChannelOpenInit;
exports.useChannelOpenInit = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelOpenInit
});
const createChannelOpenTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenTry)
});
exports.createChannelOpenTry = createChannelOpenTry;
exports.useChannelOpenTry = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelOpenTry
});
const createChannelOpenAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenAck)
});
exports.createChannelOpenAck = createChannelOpenAck;
exports.useChannelOpenAck = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelOpenAck
});
const createChannelOpenConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenConfirm)
});
exports.createChannelOpenConfirm = createChannelOpenConfirm;
exports.useChannelOpenConfirm = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelOpenConfirm
});
const createChannelCloseInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelCloseInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelCloseInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelCloseInit)
});
exports.createChannelCloseInit = createChannelCloseInit;
exports.useChannelCloseInit = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelCloseInit
});
const createChannelCloseConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelCloseConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelCloseConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelCloseConfirm)
});
exports.createChannelCloseConfirm = createChannelCloseConfirm;
exports.useChannelCloseConfirm = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelCloseConfirm
});
const createRecvPacket = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRecvPacket.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRecvPacket),
    converters: (0, utils_1.toConverters)(tx_1.MsgRecvPacket)
});
exports.createRecvPacket = createRecvPacket;
exports.useRecvPacket = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createRecvPacket
});
const createTimeout = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgTimeout.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgTimeout),
    converters: (0, utils_1.toConverters)(tx_1.MsgTimeout)
});
exports.createTimeout = createTimeout;
exports.useTimeout = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createTimeout
});
const createTimeoutOnClose = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgTimeoutOnClose.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgTimeoutOnClose),
    converters: (0, utils_1.toConverters)(tx_1.MsgTimeoutOnClose)
});
exports.createTimeoutOnClose = createTimeoutOnClose;
exports.useTimeoutOnClose = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createTimeoutOnClose
});
const createAcknowledgement = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgAcknowledgement.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgAcknowledgement),
    converters: (0, utils_1.toConverters)(tx_1.MsgAcknowledgement)
});
exports.createAcknowledgement = createAcknowledgement;
exports.useAcknowledgement = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createAcknowledgement
});
const createChannelUpgradeInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeInit)
});
exports.createChannelUpgradeInit = createChannelUpgradeInit;
exports.useChannelUpgradeInit = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeInit
});
const createChannelUpgradeTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeTry)
});
exports.createChannelUpgradeTry = createChannelUpgradeTry;
exports.useChannelUpgradeTry = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeTry
});
const createChannelUpgradeAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeAck)
});
exports.createChannelUpgradeAck = createChannelUpgradeAck;
exports.useChannelUpgradeAck = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeAck
});
const createChannelUpgradeConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeConfirm)
});
exports.createChannelUpgradeConfirm = createChannelUpgradeConfirm;
exports.useChannelUpgradeConfirm = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeConfirm
});
const createChannelUpgradeOpen = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeOpen.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeOpen),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeOpen)
});
exports.createChannelUpgradeOpen = createChannelUpgradeOpen;
exports.useChannelUpgradeOpen = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeOpen
});
const createChannelUpgradeTimeout = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeTimeout.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeTimeout),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeTimeout)
});
exports.createChannelUpgradeTimeout = createChannelUpgradeTimeout;
exports.useChannelUpgradeTimeout = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeTimeout
});
const createChannelUpgradeCancel = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeCancel.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeCancel),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeCancel)
});
exports.createChannelUpgradeCancel = createChannelUpgradeCancel;
exports.useChannelUpgradeCancel = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createChannelUpgradeCancel
});
const createUpdateChannelParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateChannelParams = createUpdateChannelParams;
exports.useUpdateChannelParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateChannelParams
});
const createPruneAcknowledgements = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgPruneAcknowledgements.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgPruneAcknowledgements),
    converters: (0, utils_1.toConverters)(tx_1.MsgPruneAcknowledgements)
});
exports.createPruneAcknowledgements = createPruneAcknowledgements;
exports.usePruneAcknowledgements = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createPruneAcknowledgements
});
