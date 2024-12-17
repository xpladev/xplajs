"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRevoke = exports.createExec = exports.createGrant = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createGrant = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgGrant.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgGrant),
    converters: (0, utils_1.toConverters)(tx_1.MsgGrant)
});
exports.createGrant = createGrant;
const createExec = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgExec.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgExec),
    converters: (0, utils_1.toConverters)(tx_1.MsgExec)
});
exports.createExec = createExec;
const createRevoke = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRevoke.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRevoke),
    converters: (0, utils_1.toConverters)(tx_1.MsgRevoke)
});
exports.createRevoke = createRevoke;
