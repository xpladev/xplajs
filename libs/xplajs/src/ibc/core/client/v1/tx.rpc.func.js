"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateClientParams = exports.createIBCSoftwareUpgrade = exports.createRecoverClient = exports.createSubmitMisbehaviour = exports.createUpgradeClient = exports.createUpdateClient = exports.createCreateClient = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateClient)
});
exports.createCreateClient = createCreateClient;
const createUpdateClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateClient)
});
exports.createUpdateClient = createUpdateClient;
const createUpgradeClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpgradeClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpgradeClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpgradeClient)
});
exports.createUpgradeClient = createUpgradeClient;
const createSubmitMisbehaviour = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSubmitMisbehaviour.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSubmitMisbehaviour),
    converters: (0, utils_1.toConverters)(tx_1.MsgSubmitMisbehaviour)
});
exports.createSubmitMisbehaviour = createSubmitMisbehaviour;
const createRecoverClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRecoverClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRecoverClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgRecoverClient)
});
exports.createRecoverClient = createRecoverClient;
const createIBCSoftwareUpgrade = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgIBCSoftwareUpgrade.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgIBCSoftwareUpgrade),
    converters: (0, utils_1.toConverters)(tx_1.MsgIBCSoftwareUpgrade)
});
exports.createIBCSoftwareUpgrade = createIBCSoftwareUpgrade;
const createUpdateClientParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateClientParams = createUpdateClientParams;
