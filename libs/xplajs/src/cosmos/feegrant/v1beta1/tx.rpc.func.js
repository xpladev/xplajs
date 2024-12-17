"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPruneAllowances = exports.createRevokeAllowance = exports.createGrantAllowance = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createGrantAllowance = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgGrantAllowance.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgGrantAllowance),
    converters: (0, utils_1.toConverters)(tx_1.MsgGrantAllowance)
});
exports.createGrantAllowance = createGrantAllowance;
const createRevokeAllowance = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRevokeAllowance.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRevokeAllowance),
    converters: (0, utils_1.toConverters)(tx_1.MsgRevokeAllowance)
});
exports.createRevokeAllowance = createRevokeAllowance;
const createPruneAllowances = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgPruneAllowances.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgPruneAllowances),
    converters: (0, utils_1.toConverters)(tx_1.MsgPruneAllowances)
});
exports.createPruneAllowances = createPruneAllowances;
