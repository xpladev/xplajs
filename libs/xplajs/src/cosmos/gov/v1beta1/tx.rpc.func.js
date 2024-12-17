"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeposit = exports.createVoteWeighted = exports.createVote = exports.createSubmitProposal = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const utils_1 = require("@interchainjs/cosmos/utils");
const tx_1 = require("./tx");
const createSubmitProposal = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgSubmitProposal.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgSubmitProposal),
    converters: (0, utils_1.toConverters)(tx_1.MsgSubmitProposal)
});
exports.createSubmitProposal = createSubmitProposal;
const createVote = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgVote.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgVote),
    converters: (0, utils_1.toConverters)(tx_1.MsgVote)
});
exports.createVote = createVote;
const createVoteWeighted = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgVoteWeighted.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgVoteWeighted),
    converters: (0, utils_1.toConverters)(tx_1.MsgVoteWeighted)
});
exports.createVoteWeighted = createVoteWeighted;
const createDeposit = (clientResolver) => (0, helper_func_types_1.buildTx)({
    clientResolver,
    typeUrl: tx_1.MsgDeposit.typeUrl,
    encoders: (0, utils_1.toEncoders)(tx_1.MsgDeposit),
    converters: (0, utils_1.toConverters)(tx_1.MsgDeposit)
});
exports.createDeposit = createDeposit;
