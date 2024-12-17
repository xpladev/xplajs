"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateClientParams = exports.createUpdateClientParams = exports.useIBCSoftwareUpgrade = exports.createIBCSoftwareUpgrade = exports.useRecoverClient = exports.createRecoverClient = exports.useSubmitMisbehaviour = exports.createSubmitMisbehaviour = exports.useUpgradeClient = exports.createUpgradeClient = exports.useUpdateClient = exports.createUpdateClient = exports.useCreateClient = exports.createCreateClient = void 0;
const helper_func_types_1 = require("../../../../helper-func-types");
const react_query_1 = require("../../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateClient)
});
exports.createCreateClient = createCreateClient;
exports.useCreateClient = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreateClient
});
const createUpdateClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateClient)
});
exports.createUpdateClient = createUpdateClient;
exports.useUpdateClient = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateClient
});
const createUpgradeClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpgradeClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpgradeClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpgradeClient)
});
exports.createUpgradeClient = createUpgradeClient;
exports.useUpgradeClient = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpgradeClient
});
const createSubmitMisbehaviour = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSubmitMisbehaviour.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSubmitMisbehaviour),
    converters: (0, utils_1.toConverters)(tx_1.MsgSubmitMisbehaviour)
});
exports.createSubmitMisbehaviour = createSubmitMisbehaviour;
exports.useSubmitMisbehaviour = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createSubmitMisbehaviour
});
const createRecoverClient = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRecoverClient.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRecoverClient),
    converters: (0, utils_1.toConverters)(tx_1.MsgRecoverClient)
});
exports.createRecoverClient = createRecoverClient;
exports.useRecoverClient = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createRecoverClient
});
const createIBCSoftwareUpgrade = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgIBCSoftwareUpgrade.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgIBCSoftwareUpgrade),
    converters: (0, utils_1.toConverters)(tx_1.MsgIBCSoftwareUpgrade)
});
exports.createIBCSoftwareUpgrade = createIBCSoftwareUpgrade;
exports.useIBCSoftwareUpgrade = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createIBCSoftwareUpgrade
});
const createUpdateClientParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateClientParams = createUpdateClientParams;
exports.useUpdateClientParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateClientParams
});
