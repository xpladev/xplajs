"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUnregisterVolunteerValidator = exports.createRegisterVolunteerValidator = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createRegisterVolunteerValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRegisterVolunteerValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRegisterVolunteerValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgRegisterVolunteerValidator)
});
exports.createRegisterVolunteerValidator = createRegisterVolunteerValidator;
const createUnregisterVolunteerValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUnregisterVolunteerValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUnregisterVolunteerValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgUnregisterVolunteerValidator)
});
exports.createUnregisterVolunteerValidator = createUnregisterVolunteerValidator;
