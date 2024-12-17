"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateParams = exports.createFundRewardPool = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createFundRewardPool = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgFundRewardPool.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgFundRewardPool),
    converters: (0, utils_1.toConverters)(tx_1.MsgFundRewardPool)
});
exports.createFundRewardPool = createFundRewardPool;
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
