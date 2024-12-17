"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLeaveGroup = exports.createExec = exports.createVote = exports.createWithdrawProposal = exports.createSubmitProposal = exports.createUpdateGroupPolicyMetadata = exports.createUpdateGroupPolicyDecisionPolicy = exports.createUpdateGroupPolicyAdmin = exports.createCreateGroupWithPolicy = exports.createCreateGroupPolicy = exports.createUpdateGroupMetadata = exports.createUpdateGroupAdmin = exports.createUpdateGroupMembers = exports.createCreateGroup = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createCreateGroup = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroup.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroup),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroup)
});
exports.createCreateGroup = createCreateGroup;
const createUpdateGroupMembers = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupMembers.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupMembers),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupMembers)
});
exports.createUpdateGroupMembers = createUpdateGroupMembers;
const createUpdateGroupAdmin = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupAdmin.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupAdmin),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupAdmin)
});
exports.createUpdateGroupAdmin = createUpdateGroupAdmin;
const createUpdateGroupMetadata = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupMetadata.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupMetadata),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupMetadata)
});
exports.createUpdateGroupMetadata = createUpdateGroupMetadata;
const createCreateGroupPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroupPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroupPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroupPolicy)
});
exports.createCreateGroupPolicy = createCreateGroupPolicy;
const createCreateGroupWithPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgCreateGroupWithPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgCreateGroupWithPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgCreateGroupWithPolicy)
});
exports.createCreateGroupWithPolicy = createCreateGroupWithPolicy;
const createUpdateGroupPolicyAdmin = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyAdmin.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyAdmin),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyAdmin)
});
exports.createUpdateGroupPolicyAdmin = createUpdateGroupPolicyAdmin;
const createUpdateGroupPolicyDecisionPolicy = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyDecisionPolicy.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyDecisionPolicy),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyDecisionPolicy)
});
exports.createUpdateGroupPolicyDecisionPolicy = createUpdateGroupPolicyDecisionPolicy;
const createUpdateGroupPolicyMetadata = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgUpdateGroupPolicyMetadata.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgUpdateGroupPolicyMetadata),
    converters: (0, utils_1.toConverters)(tx_1.MsgUpdateGroupPolicyMetadata)
});
exports.createUpdateGroupPolicyMetadata = createUpdateGroupPolicyMetadata;
const createSubmitProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSubmitProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSubmitProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgSubmitProposal)
});
exports.createSubmitProposal = createSubmitProposal;
const createWithdrawProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgWithdrawProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgWithdrawProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgWithdrawProposal)
});
exports.createWithdrawProposal = createWithdrawProposal;
const createVote = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgVote.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgVote),
    converters: (0, utils_1.toConverters)(tx_1.MsgVote)
});
exports.createVote = createVote;
const createExec = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgExec.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgExec),
    converters: (0, utils_1.toConverters)(tx_1.MsgExec)
});
exports.createExec = createExec;
const createLeaveGroup = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgLeaveGroup.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgLeaveGroup),
    converters: (0, utils_1.toConverters)(tx_1.MsgLeaveGroup)
});
exports.createLeaveGroup = createLeaveGroup;
