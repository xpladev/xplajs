"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreatePeriodicVestingAccount = exports.createCreatePermanentLockedAccount = exports.createCreateVestingAccount = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateVestingAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateVestingAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateVestingAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateVestingAccount)
});
exports.createCreateVestingAccount = createCreateVestingAccount;
const createCreatePermanentLockedAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreatePermanentLockedAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreatePermanentLockedAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreatePermanentLockedAccount)
});
exports.createCreatePermanentLockedAccount = createCreatePermanentLockedAccount;
const createCreatePeriodicVestingAccount = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreatePeriodicVestingAccount.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreatePeriodicVestingAccount),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreatePeriodicVestingAccount)
});
exports.createCreatePeriodicVestingAccount = createCreatePeriodicVestingAccount;
