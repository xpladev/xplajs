"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePruneAllowances = exports.createPruneAllowances = exports.useRevokeAllowance = exports.createRevokeAllowance = exports.useGrantAllowance = exports.createGrantAllowance = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createGrantAllowance = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgGrantAllowance.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgGrantAllowance),
    converters: (0, utils_1.toConverters)(tx_1.MsgGrantAllowance)
});
exports.createGrantAllowance = createGrantAllowance;
exports.useGrantAllowance = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createGrantAllowance
});
const createRevokeAllowance = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRevokeAllowance.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRevokeAllowance),
    converters: (0, utils_1.toConverters)(tx_1.MsgRevokeAllowance)
});
exports.createRevokeAllowance = createRevokeAllowance;
exports.useRevokeAllowance = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createRevokeAllowance
});
const createPruneAllowances = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgPruneAllowances.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgPruneAllowances),
    converters: (0, utils_1.toConverters)(tx_1.MsgPruneAllowances)
});
exports.createPruneAllowances = createPruneAllowances;
exports.usePruneAllowances = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createPruneAllowances
});
