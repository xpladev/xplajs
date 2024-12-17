"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPruneAcknowledgements = exports.createUpdateChannelParams = exports.createChannelUpgradeCancel = exports.createChannelUpgradeTimeout = exports.createChannelUpgradeOpen = exports.createChannelUpgradeConfirm = exports.createChannelUpgradeAck = exports.createChannelUpgradeTry = exports.createChannelUpgradeInit = exports.createAcknowledgement = exports.createTimeoutOnClose = exports.createTimeout = exports.createRecvPacket = exports.createChannelCloseConfirm = exports.createChannelCloseInit = exports.createChannelOpenConfirm = exports.createChannelOpenAck = exports.createChannelOpenTry = exports.createChannelOpenInit = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createChannelOpenInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenInit)
});
exports.createChannelOpenInit = createChannelOpenInit;
const createChannelOpenTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenTry)
});
exports.createChannelOpenTry = createChannelOpenTry;
const createChannelOpenAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenAck)
});
exports.createChannelOpenAck = createChannelOpenAck;
const createChannelOpenConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelOpenConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelOpenConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelOpenConfirm)
});
exports.createChannelOpenConfirm = createChannelOpenConfirm;
const createChannelCloseInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelCloseInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelCloseInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelCloseInit)
});
exports.createChannelCloseInit = createChannelCloseInit;
const createChannelCloseConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelCloseConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelCloseConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelCloseConfirm)
});
exports.createChannelCloseConfirm = createChannelCloseConfirm;
const createRecvPacket = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRecvPacket.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRecvPacket),
    converters: (0, utils_1.toConverters)(tx_1.MsgRecvPacket)
});
exports.createRecvPacket = createRecvPacket;
const createTimeout = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgTimeout.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgTimeout),
    converters: (0, utils_1.toConverters)(tx_1.MsgTimeout)
});
exports.createTimeout = createTimeout;
const createTimeoutOnClose = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgTimeoutOnClose.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgTimeoutOnClose),
    converters: (0, utils_1.toConverters)(tx_1.MsgTimeoutOnClose)
});
exports.createTimeoutOnClose = createTimeoutOnClose;
const createAcknowledgement = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgAcknowledgement.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgAcknowledgement),
    converters: (0, utils_1.toConverters)(tx_1.MsgAcknowledgement)
});
exports.createAcknowledgement = createAcknowledgement;
const createChannelUpgradeInit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeInit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeInit),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeInit)
});
exports.createChannelUpgradeInit = createChannelUpgradeInit;
const createChannelUpgradeTry = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeTry.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeTry),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeTry)
});
exports.createChannelUpgradeTry = createChannelUpgradeTry;
const createChannelUpgradeAck = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeAck.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeAck),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeAck)
});
exports.createChannelUpgradeAck = createChannelUpgradeAck;
const createChannelUpgradeConfirm = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeConfirm.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeConfirm),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeConfirm)
});
exports.createChannelUpgradeConfirm = createChannelUpgradeConfirm;
const createChannelUpgradeOpen = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeOpen.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeOpen),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeOpen)
});
exports.createChannelUpgradeOpen = createChannelUpgradeOpen;
const createChannelUpgradeTimeout = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeTimeout.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeTimeout),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeTimeout)
});
exports.createChannelUpgradeTimeout = createChannelUpgradeTimeout;
const createChannelUpgradeCancel = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgChannelUpgradeCancel.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgChannelUpgradeCancel),
    converters: (0, utils_1.toConverters)(tx_1.MsgChannelUpgradeCancel)
});
exports.createChannelUpgradeCancel = createChannelUpgradeCancel;
const createUpdateChannelParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateChannelParams = createUpdateChannelParams;
const createPruneAcknowledgements = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgPruneAcknowledgements.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgPruneAcknowledgements),
    converters: (0, utils_1.toConverters)(tx_1.MsgPruneAcknowledgements)
});
exports.createPruneAcknowledgements = createPruneAcknowledgements;
