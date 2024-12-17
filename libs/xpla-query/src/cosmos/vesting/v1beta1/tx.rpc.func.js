"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreatePeriodicVestingAccount = exports.createCreatePeriodicVestingAccount = exports.useCreatePermanentLockedAccount = exports.createCreatePermanentLockedAccount = exports.useCreateVestingAccount = exports.createCreateVestingAccount = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateVestingAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateVestingAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateVestingAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateVestingAccount)
});
exports.createCreateVestingAccount = createCreateVestingAccount;
exports.useCreateVestingAccount = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreateVestingAccount
});
const createCreatePermanentLockedAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreatePermanentLockedAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreatePermanentLockedAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreatePermanentLockedAccount)
});
exports.createCreatePermanentLockedAccount = createCreatePermanentLockedAccount;
exports.useCreatePermanentLockedAccount = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreatePermanentLockedAccount
});
const createCreatePeriodicVestingAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreatePeriodicVestingAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreatePeriodicVestingAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreatePeriodicVestingAccount)
});
exports.createCreatePeriodicVestingAccount = createCreatePeriodicVestingAccount;
exports.useCreatePeriodicVestingAccount = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreatePeriodicVestingAccount
});
