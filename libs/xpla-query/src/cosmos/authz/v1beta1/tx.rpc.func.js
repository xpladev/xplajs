"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRevoke = exports.createRevoke = exports.useExec = exports.createExec = exports.useGrant = exports.createGrant = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createGrant = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgGrant.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgGrant),
    converters: (0, utils_1.toConverters)(tx_1.MsgGrant)
});
exports.createGrant = createGrant;
exports.useGrant = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createGrant
});
const createExec = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgExec.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgExec),
    converters: (0, utils_1.toConverters)(tx_1.MsgExec)
});
exports.createExec = createExec;
exports.useExec = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createExec
});
const createRevoke = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRevoke.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRevoke),
    converters: (0, utils_1.toConverters)(tx_1.MsgRevoke)
});
exports.createRevoke = createRevoke;
exports.useRevoke = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createRevoke
});
