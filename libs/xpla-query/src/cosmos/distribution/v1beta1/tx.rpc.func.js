"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDepositValidatorRewardsPool = exports.createDepositValidatorRewardsPool = exports.useCommunityPoolSpend = exports.createCommunityPoolSpend = exports.useUpdateParams = exports.createUpdateParams = exports.useFundCommunityPool = exports.createFundCommunityPool = exports.useWithdrawValidatorCommission = exports.createWithdrawValidatorCommission = exports.useWithdrawDelegatorReward = exports.createWithdrawDelegatorReward = exports.useSetWithdrawAddress = exports.createSetWithdrawAddress = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createSetWithdrawAddress = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSetWithdrawAddress.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSetWithdrawAddress),
    converters: (0, utils_1.toConverters)(tx_1.MsgSetWithdrawAddress)
});
exports.createSetWithdrawAddress = createSetWithdrawAddress;
exports.useSetWithdrawAddress = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createSetWithdrawAddress
});
const createWithdrawDelegatorReward = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgWithdrawDelegatorReward.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgWithdrawDelegatorReward),
    converters: (0, utils_1.toConverters)(tx_1.MsgWithdrawDelegatorReward)
});
exports.createWithdrawDelegatorReward = createWithdrawDelegatorReward;
exports.useWithdrawDelegatorReward = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createWithdrawDelegatorReward
});
const createWithdrawValidatorCommission = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgWithdrawValidatorCommission.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgWithdrawValidatorCommission),
    converters: (0, utils_1.toConverters)(tx_1.MsgWithdrawValidatorCommission)
});
exports.createWithdrawValidatorCommission = createWithdrawValidatorCommission;
exports.useWithdrawValidatorCommission = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createWithdrawValidatorCommission
});
const createFundCommunityPool = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgFundCommunityPool.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgFundCommunityPool),
    converters: (0, utils_1.toConverters)(tx_1.MsgFundCommunityPool)
});
exports.createFundCommunityPool = createFundCommunityPool;
exports.useFundCommunityPool = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createFundCommunityPool
});
const createUpdateParams = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateParams.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateParams),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateParams)
});
exports.createUpdateParams = createUpdateParams;
exports.useUpdateParams = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateParams
});
const createCommunityPoolSpend = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCommunityPoolSpend.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCommunityPoolSpend),
    converters: (0, utils_1.toConverters)(tx_1.MsgCommunityPoolSpend)
});
exports.createCommunityPoolSpend = createCommunityPoolSpend;
exports.useCommunityPoolSpend = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCommunityPoolSpend
});
const createDepositValidatorRewardsPool = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgDepositValidatorRewardsPool.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgDepositValidatorRewardsPool),
    converters: (0, utils_1.toConverters)(tx_1.MsgDepositValidatorRewardsPool)
});
exports.createDepositValidatorRewardsPool = createDepositValidatorRewardsPool;
exports.useDepositValidatorRewardsPool = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createDepositValidatorRewardsPool
});
