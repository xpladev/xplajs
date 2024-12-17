"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnregisterVolunteerValidator = exports.createUnregisterVolunteerValidator = exports.useRegisterVolunteerValidator = exports.createRegisterVolunteerValidator = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createRegisterVolunteerValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgRegisterVolunteerValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgRegisterVolunteerValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgRegisterVolunteerValidator)
});
exports.createRegisterVolunteerValidator = createRegisterVolunteerValidator;
exports.useRegisterVolunteerValidator = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createRegisterVolunteerValidator
});
const createUnregisterVolunteerValidator = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUnregisterVolunteerValidator.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUnregisterVolunteerValidator),
    converters: (0, utils_1.toConverters)(tx_1.MsgUnregisterVolunteerValidator)
});
exports.createUnregisterVolunteerValidator = createUnregisterVolunteerValidator;
exports.useUnregisterVolunteerValidator = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUnregisterVolunteerValidator
});
