"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateParams = exports.createCancelUnbondingDelegation = exports.createUndelegate = exports.createBeginRedelegate = exports.createDelegate = exports.createEditValidator = exports.createCreateValidator = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateValidator)
});
exports.createCreateValidator = createCreateValidator;
const createEditValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgEditValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgEditValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgEditValidator)
});
exports.createEditValidator = createEditValidator;
const createDelegate = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgDelegate.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgDelegate),
    converters: (0, utils_1.toConverters)(tx_1.MsgDelegate)
});
exports.createDelegate = createDelegate;
const createBeginRedelegate = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgBeginRedelegate.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgBeginRedelegate),
    converters: (0, utils_1.toConverters)(tx_1.MsgBeginRedelegate)
});
exports.createBeginRedelegate = createBeginRedelegate;
const createUndelegate = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUndelegate.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUndelegate),
    converters: (0, utils_1.toConverters)(tx_1.MsgUndelegate)
});
exports.createUndelegate = createUndelegate;
const createCancelUnbondingDelegation = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCancelUnbondingDelegation.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCancelUnbondingDelegation),
    converters: (0, utils_1.toConverters)(tx_1.MsgCancelUnbondingDelegation)
});
exports.createCancelUnbondingDelegation = createCancelUnbondingDelegation;
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
