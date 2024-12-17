"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLeaveGroup = exports.createLeaveGroup = exports.useExec = exports.createExec = exports.useVote = exports.createVote = exports.useWithdrawProposal = exports.createWithdrawProposal = exports.useSubmitProposal = exports.createSubmitProposal = exports.useUpdateGroupPolicyMetadata = exports.createUpdateGroupPolicyMetadata = exports.useUpdateGroupPolicyDecisionPolicy = exports.createUpdateGroupPolicyDecisionPolicy = exports.useUpdateGroupPolicyAdmin = exports.createUpdateGroupPolicyAdmin = exports.useCreateGroupWithPolicy = exports.createCreateGroupWithPolicy = exports.useCreateGroupPolicy = exports.createCreateGroupPolicy = exports.useUpdateGroupMetadata = exports.createUpdateGroupMetadata = exports.useUpdateGroupAdmin = exports.createUpdateGroupAdmin = exports.useUpdateGroupMembers = exports.createUpdateGroupMembers = exports.useCreateGroup = exports.createCreateGroup = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateGroup = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroup.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroup),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroup)
});
exports.createCreateGroup = createCreateGroup;
exports.useCreateGroup = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreateGroup
});
const createUpdateGroupMembers = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupMembers.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupMembers),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupMembers)
});
exports.createUpdateGroupMembers = createUpdateGroupMembers;
exports.useUpdateGroupMembers = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupMembers
});
const createUpdateGroupAdmin = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupAdmin.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupAdmin),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupAdmin)
});
exports.createUpdateGroupAdmin = createUpdateGroupAdmin;
exports.useUpdateGroupAdmin = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupAdmin
});
const createUpdateGroupMetadata = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupMetadata.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupMetadata),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupMetadata)
});
exports.createUpdateGroupMetadata = createUpdateGroupMetadata;
exports.useUpdateGroupMetadata = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupMetadata
});
const createCreateGroupPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroupPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroupPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroupPolicy)
});
exports.createCreateGroupPolicy = createCreateGroupPolicy;
exports.useCreateGroupPolicy = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreateGroupPolicy
});
const createCreateGroupWithPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroupWithPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroupWithPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroupWithPolicy)
});
exports.createCreateGroupWithPolicy = createCreateGroupWithPolicy;
exports.useCreateGroupWithPolicy = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createCreateGroupWithPolicy
});
const createUpdateGroupPolicyAdmin = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyAdmin.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyAdmin),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyAdmin)
});
exports.createUpdateGroupPolicyAdmin = createUpdateGroupPolicyAdmin;
exports.useUpdateGroupPolicyAdmin = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupPolicyAdmin
});
const createUpdateGroupPolicyDecisionPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyDecisionPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyDecisionPolicy)
});
exports.createUpdateGroupPolicyDecisionPolicy = createUpdateGroupPolicyDecisionPolicy;
exports.useUpdateGroupPolicyDecisionPolicy = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupPolicyDecisionPolicy
});
const createUpdateGroupPolicyMetadata = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyMetadata.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyMetadata),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyMetadata)
});
exports.createUpdateGroupPolicyMetadata = createUpdateGroupPolicyMetadata;
exports.useUpdateGroupPolicyMetadata = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createUpdateGroupPolicyMetadata
});
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
const createWithdrawProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgWithdrawProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgWithdrawProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgWithdrawProposal)
});
exports.createWithdrawProposal = createWithdrawProposal;
exports.useWithdrawProposal = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createWithdrawProposal
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
const createLeaveGroup = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgLeaveGroup.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgLeaveGroup),
    converters: (0, utils_1.toConverters)(tx_1.MsgLeaveGroup)
});
exports.createLeaveGroup = createLeaveGroup;
exports.useLeaveGroup = (0, react_query_1.buildUseMutation)({
    builderMutationFn: exports.createLeaveGroup
});
