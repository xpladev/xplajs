"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCancelProposal = exports.createCancelProposal = exports.useUpdateParams = exports.createUpdateParams = exports.useDeposit = exports.createDeposit = exports.useVoteWeighted = exports.createVoteWeighted = exports.useVote = exports.createVote = exports.useExecLegacyContent = exports.createExecLegacyContent = exports.useSubmitProposal = exports.createSubmitProposal = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createSubmitProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSubmitProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSubmitProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgSubmitProposal)
});
exports.createSubmitProposal = createSubmitProposal;
exports.useSubmitProposal = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createSubmitProposal
});
const createExecLegacyContent = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgExecLegacyContent.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgExecLegacyContent),
    converters: (0, utils_1.toConverters)(tx_1.MsgExecLegacyContent)
});
exports.createExecLegacyContent = createExecLegacyContent;
exports.useExecLegacyContent = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createExecLegacyContent
});
const createVote = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgVote.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgVote),
    converters: (0, utils_1.toConverters)(tx_1.MsgVote)
});
exports.createVote = createVote;
exports.useVote = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createVote
});
const createVoteWeighted = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgVoteWeighted.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgVoteWeighted),
    converters: (0, utils_1.toConverters)(tx_1.MsgVoteWeighted)
});
exports.createVoteWeighted = createVoteWeighted;
exports.useVoteWeighted = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createVoteWeighted
});
const createDeposit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgDeposit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgDeposit),
    converters: (0, utils_1.toConverters)(tx_1.MsgDeposit)
});
exports.createDeposit = createDeposit;
exports.useDeposit = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createDeposit
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
const createCancelProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCancelProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCancelProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgCancelProposal)
});
exports.createCancelProposal = createCancelProposal;
exports.useCancelProposal = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCancelProposal
});
