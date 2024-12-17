"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteInfo = exports.ValidatorUpdate = exports.Validator = exports.TxResult = exports.ExecTxResult = exports.EventAttribute = exports.Event = exports.ExtendedCommitInfo = exports.CommitInfo = exports.ResponseFinalizeBlock = exports.ResponseVerifyVoteExtension = exports.ResponseExtendVote = exports.ResponseProcessProposal = exports.ResponsePrepareProposal = exports.ResponseApplySnapshotChunk = exports.ResponseLoadSnapshotChunk = exports.ResponseOfferSnapshot = exports.ResponseListSnapshots = exports.ResponseCommit = exports.ResponseCheckTx = exports.ResponseQuery = exports.ResponseInitChain = exports.ResponseInfo = exports.ResponseFlush = exports.ResponseEcho = exports.ResponseException = exports.Response = exports.RequestFinalizeBlock = exports.RequestVerifyVoteExtension = exports.RequestExtendVote = exports.RequestProcessProposal = exports.RequestPrepareProposal = exports.RequestApplySnapshotChunk = exports.RequestLoadSnapshotChunk = exports.RequestOfferSnapshot = exports.RequestListSnapshots = exports.RequestCommit = exports.RequestCheckTx = exports.RequestQuery = exports.RequestInitChain = exports.RequestInfo = exports.RequestFlush = exports.RequestEcho = exports.Request = exports.MisbehaviorType = exports.ResponseVerifyVoteExtension_VerifyStatus = exports.ResponseProcessProposal_ProposalStatus = exports.ResponseApplySnapshotChunk_Result = exports.ResponseOfferSnapshot_Result = exports.CheckTxType = void 0;
exports.Snapshot = exports.Misbehavior = exports.ExtendedVoteInfo = void 0;
exports.checkTxTypeFromJSON = checkTxTypeFromJSON;
exports.checkTxTypeToJSON = checkTxTypeToJSON;
exports.responseOfferSnapshot_ResultFromJSON = responseOfferSnapshot_ResultFromJSON;
exports.responseOfferSnapshot_ResultToJSON = responseOfferSnapshot_ResultToJSON;
exports.responseApplySnapshotChunk_ResultFromJSON = responseApplySnapshotChunk_ResultFromJSON;
exports.responseApplySnapshotChunk_ResultToJSON = responseApplySnapshotChunk_ResultToJSON;
exports.responseProcessProposal_ProposalStatusFromJSON = responseProcessProposal_ProposalStatusFromJSON;
exports.responseProcessProposal_ProposalStatusToJSON = responseProcessProposal_ProposalStatusToJSON;
exports.responseVerifyVoteExtension_VerifyStatusFromJSON = responseVerifyVoteExtension_VerifyStatusFromJSON;
exports.responseVerifyVoteExtension_VerifyStatusToJSON = responseVerifyVoteExtension_VerifyStatusToJSON;
exports.misbehaviorTypeFromJSON = misbehaviorTypeFromJSON;
exports.misbehaviorTypeToJSON = misbehaviorTypeToJSON;
var timestamp_1 = require("../../google/protobuf/timestamp");
var params_1 = require("../types/params");
var proof_1 = require("../crypto/proof");
var keys_1 = require("../crypto/keys");
var binary_1 = require("../../binary");
var helpers_1 = require("../../helpers");
var CheckTxType;
(function (CheckTxType) {
    CheckTxType[CheckTxType["NEW"] = 0] = "NEW";
    CheckTxType[CheckTxType["RECHECK"] = 1] = "RECHECK";
    CheckTxType[CheckTxType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CheckTxType || (exports.CheckTxType = CheckTxType = {}));
function checkTxTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "NEW":
            return CheckTxType.NEW;
        case 1:
        case "RECHECK":
            return CheckTxType.RECHECK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CheckTxType.UNRECOGNIZED;
    }
}
function checkTxTypeToJSON(object) {
    switch (object) {
        case CheckTxType.NEW:
            return "NEW";
        case CheckTxType.RECHECK:
            return "RECHECK";
        case CheckTxType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseOfferSnapshot_Result;
(function (ResponseOfferSnapshot_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Snapshot accepted, apply chunks */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["ABORT"] = 2] = "ABORT";
    /** REJECT - Reject this specific snapshot, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT"] = 3] = "REJECT";
    /** REJECT_FORMAT - Reject all snapshots of this format, try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_FORMAT"] = 4] = "REJECT_FORMAT";
    /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["REJECT_SENDER"] = 5] = "REJECT_SENDER";
    ResponseOfferSnapshot_Result[ResponseOfferSnapshot_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseOfferSnapshot_Result || (exports.ResponseOfferSnapshot_Result = ResponseOfferSnapshot_Result = {}));
function responseOfferSnapshot_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseOfferSnapshot_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseOfferSnapshot_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseOfferSnapshot_Result.ABORT;
        case 3:
        case "REJECT":
            return ResponseOfferSnapshot_Result.REJECT;
        case 4:
        case "REJECT_FORMAT":
            return ResponseOfferSnapshot_Result.REJECT_FORMAT;
        case 5:
        case "REJECT_SENDER":
            return ResponseOfferSnapshot_Result.REJECT_SENDER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseOfferSnapshot_Result.UNRECOGNIZED;
    }
}
function responseOfferSnapshot_ResultToJSON(object) {
    switch (object) {
        case ResponseOfferSnapshot_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseOfferSnapshot_Result.ACCEPT:
            return "ACCEPT";
        case ResponseOfferSnapshot_Result.ABORT:
            return "ABORT";
        case ResponseOfferSnapshot_Result.REJECT:
            return "REJECT";
        case ResponseOfferSnapshot_Result.REJECT_FORMAT:
            return "REJECT_FORMAT";
        case ResponseOfferSnapshot_Result.REJECT_SENDER:
            return "REJECT_SENDER";
        case ResponseOfferSnapshot_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseApplySnapshotChunk_Result;
(function (ResponseApplySnapshotChunk_Result) {
    /** UNKNOWN - Unknown result, abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNKNOWN"] = 0] = "UNKNOWN";
    /** ACCEPT - Chunk successfully accepted */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ACCEPT"] = 1] = "ACCEPT";
    /** ABORT - Abort all snapshot restoration */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["ABORT"] = 2] = "ABORT";
    /** RETRY - Retry chunk (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY"] = 3] = "RETRY";
    /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["RETRY_SNAPSHOT"] = 4] = "RETRY_SNAPSHOT";
    /** REJECT_SNAPSHOT - Reject this snapshot, try others */
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["REJECT_SNAPSHOT"] = 5] = "REJECT_SNAPSHOT";
    ResponseApplySnapshotChunk_Result[ResponseApplySnapshotChunk_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseApplySnapshotChunk_Result || (exports.ResponseApplySnapshotChunk_Result = ResponseApplySnapshotChunk_Result = {}));
function responseApplySnapshotChunk_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseApplySnapshotChunk_Result.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseApplySnapshotChunk_Result.ACCEPT;
        case 2:
        case "ABORT":
            return ResponseApplySnapshotChunk_Result.ABORT;
        case 3:
        case "RETRY":
            return ResponseApplySnapshotChunk_Result.RETRY;
        case 4:
        case "RETRY_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
        case 5:
        case "REJECT_SNAPSHOT":
            return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
    }
}
function responseApplySnapshotChunk_ResultToJSON(object) {
    switch (object) {
        case ResponseApplySnapshotChunk_Result.UNKNOWN:
            return "UNKNOWN";
        case ResponseApplySnapshotChunk_Result.ACCEPT:
            return "ACCEPT";
        case ResponseApplySnapshotChunk_Result.ABORT:
            return "ABORT";
        case ResponseApplySnapshotChunk_Result.RETRY:
            return "RETRY";
        case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
            return "RETRY_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
            return "REJECT_SNAPSHOT";
        case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseProcessProposal_ProposalStatus;
(function (ResponseProcessProposal_ProposalStatus) {
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["ACCEPT"] = 1] = "ACCEPT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["REJECT"] = 2] = "REJECT";
    ResponseProcessProposal_ProposalStatus[ResponseProcessProposal_ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseProcessProposal_ProposalStatus || (exports.ResponseProcessProposal_ProposalStatus = ResponseProcessProposal_ProposalStatus = {}));
function responseProcessProposal_ProposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseProcessProposal_ProposalStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseProcessProposal_ProposalStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseProcessProposal_ProposalStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
    }
}
function responseProcessProposal_ProposalStatusToJSON(object) {
    switch (object) {
        case ResponseProcessProposal_ProposalStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseProcessProposal_ProposalStatus.ACCEPT:
            return "ACCEPT";
        case ResponseProcessProposal_ProposalStatus.REJECT:
            return "REJECT";
        case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var ResponseVerifyVoteExtension_VerifyStatus;
(function (ResponseVerifyVoteExtension_VerifyStatus) {
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNKNOWN"] = 0] = "UNKNOWN";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["ACCEPT"] = 1] = "ACCEPT";
    /**
     * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
     * Incorrectly implementing this thus has liveness implications as it may affect
     * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
     * Honest nodes should never be rejected.
     */
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["REJECT"] = 2] = "REJECT";
    ResponseVerifyVoteExtension_VerifyStatus[ResponseVerifyVoteExtension_VerifyStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseVerifyVoteExtension_VerifyStatus || (exports.ResponseVerifyVoteExtension_VerifyStatus = ResponseVerifyVoteExtension_VerifyStatus = {}));
function responseVerifyVoteExtension_VerifyStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
        case 1:
        case "ACCEPT":
            return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
        case 2:
        case "REJECT":
            return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
    }
}
function responseVerifyVoteExtension_VerifyStatusToJSON(object) {
    switch (object) {
        case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
            return "UNKNOWN";
        case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
            return "ACCEPT";
        case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
            return "REJECT";
        case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var MisbehaviorType;
(function (MisbehaviorType) {
    MisbehaviorType[MisbehaviorType["UNKNOWN"] = 0] = "UNKNOWN";
    MisbehaviorType[MisbehaviorType["DUPLICATE_VOTE"] = 1] = "DUPLICATE_VOTE";
    MisbehaviorType[MisbehaviorType["LIGHT_CLIENT_ATTACK"] = 2] = "LIGHT_CLIENT_ATTACK";
    MisbehaviorType[MisbehaviorType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MisbehaviorType || (exports.MisbehaviorType = MisbehaviorType = {}));
function misbehaviorTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return MisbehaviorType.UNKNOWN;
        case 1:
        case "DUPLICATE_VOTE":
            return MisbehaviorType.DUPLICATE_VOTE;
        case 2:
        case "LIGHT_CLIENT_ATTACK":
            return MisbehaviorType.LIGHT_CLIENT_ATTACK;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MisbehaviorType.UNRECOGNIZED;
    }
}
function misbehaviorTypeToJSON(object) {
    switch (object) {
        case MisbehaviorType.UNKNOWN:
            return "UNKNOWN";
        case MisbehaviorType.DUPLICATE_VOTE:
            return "DUPLICATE_VOTE";
        case MisbehaviorType.LIGHT_CLIENT_ATTACK:
            return "LIGHT_CLIENT_ATTACK";
        case MisbehaviorType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseRequest() {
    return {
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        checkTx: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined,
        extendVote: undefined,
        verifyVoteExtension: undefined,
        finalizeBlock: undefined
    };
}
exports.Request = {
    typeUrl: "/tendermint.abci.Request",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.echo !== undefined) {
            exports.RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.RequestInitChain.encode(message.initChain, writer.uint32(42).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.RequestCheckTx.encode(message.checkTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.RequestListSnapshots.encode(message.listSnapshots, writer.uint32(98).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.RequestOfferSnapshot.encode(message.offerSnapshot, writer.uint32(106).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.RequestLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(114).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.RequestApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.RequestPrepareProposal.encode(message.prepareProposal, writer.uint32(130).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.RequestProcessProposal.encode(message.processProposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.extendVote !== undefined) {
            exports.RequestExtendVote.encode(message.extendVote, writer.uint32(146).fork()).ldelim();
        }
        if (message.verifyVoteExtension !== undefined) {
            exports.RequestVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(154).fork()).ldelim();
        }
        if (message.finalizeBlock !== undefined) {
            exports.RequestFinalizeBlock.encode(message.finalizeBlock, writer.uint32(162).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.echo = exports.RequestEcho.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flush = exports.RequestFlush.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.info = exports.RequestInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.initChain = exports.RequestInitChain.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.query = exports.RequestQuery.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.checkTx = exports.RequestCheckTx.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.commit = exports.RequestCommit.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.listSnapshots = exports.RequestListSnapshots.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.offerSnapshot = exports.RequestOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.loadSnapshotChunk = exports.RequestLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.applySnapshotChunk = exports.RequestApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.prepareProposal = exports.RequestPrepareProposal.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.processProposal = exports.RequestProcessProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.extendVote = exports.RequestExtendVote.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.verifyVoteExtension = exports.RequestVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.finalizeBlock = exports.RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseRequest();
        message.echo = object.echo !== undefined && object.echo !== null ? exports.RequestEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.RequestFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.RequestInfo.fromPartial(object.info) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.RequestInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.RequestQuery.fromPartial(object.query) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.RequestCheckTx.fromPartial(object.checkTx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.RequestCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.RequestListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.RequestOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.RequestLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.RequestApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? exports.RequestPrepareProposal.fromPartial(object.prepareProposal) : undefined;
        message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? exports.RequestProcessProposal.fromPartial(object.processProposal) : undefined;
        message.extendVote = object.extendVote !== undefined && object.extendVote !== null ? exports.RequestExtendVote.fromPartial(object.extendVote) : undefined;
        message.verifyVoteExtension = object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null ? exports.RequestVerifyVoteExtension.fromPartial(object.verifyVoteExtension) : undefined;
        message.finalizeBlock = object.finalizeBlock !== undefined && object.finalizeBlock !== null ? exports.RequestFinalizeBlock.fromPartial(object.finalizeBlock) : undefined;
        return message;
    }
};
function createBaseRequestEcho() {
    return {
        message: ""
    };
}
exports.RequestEcho = {
    typeUrl: "/tendermint.abci.RequestEcho",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestEcho();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseRequestFlush() {
    return {};
}
exports.RequestFlush = {
    typeUrl: "/tendermint.abci.RequestFlush",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestFlush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseRequestFlush();
        return message;
    }
};
function createBaseRequestInfo() {
    return {
        version: "",
        blockVersion: BigInt(0),
        p2pVersion: BigInt(0),
        abciVersion: ""
    };
}
exports.RequestInfo = {
    typeUrl: "/tendermint.abci.RequestInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.blockVersion !== BigInt(0)) {
            writer.uint32(16).uint64(message.blockVersion);
        }
        if (message.p2pVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.p2pVersion);
        }
        if (message.abciVersion !== "") {
            writer.uint32(34).string(message.abciVersion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.blockVersion = reader.uint64();
                    break;
                case 3:
                    message.p2pVersion = reader.uint64();
                    break;
                case 4:
                    message.abciVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRequestInfo();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.blockVersion = object.blockVersion !== undefined && object.blockVersion !== null ? BigInt(object.blockVersion.toString()) : BigInt(0);
        message.p2pVersion = object.p2pVersion !== undefined && object.p2pVersion !== null ? BigInt(object.p2pVersion.toString()) : BigInt(0);
        message.abciVersion = (_b = object.abciVersion) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseRequestInitChain() {
    return {
        time: new Date(),
        chainId: "",
        consensusParams: undefined,
        validators: [],
        appStateBytes: new Uint8Array(),
        initialHeight: BigInt(0)
    };
}
exports.RequestInitChain = {
    typeUrl: "/tendermint.abci.RequestInitChain",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorUpdate.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.appStateBytes.length !== 0) {
            writer.uint32(42).bytes(message.appStateBytes);
        }
        if (message.initialHeight !== BigInt(0)) {
            writer.uint32(48).int64(message.initialHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestInitChain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.appStateBytes = reader.bytes();
                    break;
                case 6:
                    message.initialHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseRequestInitChain();
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.chainId = (_b = object.chainId) !== null && _b !== void 0 ? _b : "";
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? params_1.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.appStateBytes = (_d = object.appStateBytes) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? BigInt(object.initialHeight.toString()) : BigInt(0);
        return message;
    }
};
function createBaseRequestQuery() {
    return {
        data: new Uint8Array(),
        path: "",
        height: BigInt(0),
        prove: false
    };
}
exports.RequestQuery = {
    typeUrl: "/tendermint.abci.RequestQuery",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.prove === true) {
            writer.uint32(32).bool(message.prove);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestQuery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.prove = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestQuery();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.prove = (_c = object.prove) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseRequestCheckTx() {
    return {
        tx: new Uint8Array(),
        type: 0
    };
}
exports.RequestCheckTx = {
    typeUrl: "/tendermint.abci.RequestCheckTx",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestCheckTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRequestCheckTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseRequestCommit() {
    return {};
}
exports.RequestCommit = {
    typeUrl: "/tendermint.abci.RequestCommit",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseRequestCommit();
        return message;
    }
};
function createBaseRequestListSnapshots() {
    return {};
}
exports.RequestListSnapshots = {
    typeUrl: "/tendermint.abci.RequestListSnapshots",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestListSnapshots();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseRequestListSnapshots();
        return message;
    }
};
function createBaseRequestOfferSnapshot() {
    return {
        snapshot: undefined,
        appHash: new Uint8Array()
    };
}
exports.RequestOfferSnapshot = {
    typeUrl: "/tendermint.abci.RequestOfferSnapshot",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.snapshot !== undefined) {
            exports.Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(18).bytes(message.appHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestOfferSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshot = exports.Snapshot.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRequestOfferSnapshot();
        message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? exports.Snapshot.fromPartial(object.snapshot) : undefined;
        message.appHash = (_a = object.appHash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseRequestLoadSnapshotChunk() {
    return {
        height: BigInt(0),
        format: 0,
        chunk: 0
    };
}
exports.RequestLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunk !== 0) {
            writer.uint32(24).uint32(message.chunk);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestLoadSnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunk = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRequestLoadSnapshotChunk();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunk = (_b = object.chunk) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseRequestApplySnapshotChunk() {
    return {
        index: 0,
        chunk: new Uint8Array(),
        sender: ""
    };
}
exports.RequestApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(18).bytes(message.chunk);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestApplySnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.chunk = reader.bytes();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestApplySnapshotChunk();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.chunk = (_b = object.chunk) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseRequestPrepareProposal() {
    return {
        maxTxBytes: BigInt(0),
        txs: [],
        localLastCommit: exports.ExtendedCommitInfo.fromPartial({}),
        misbehavior: [],
        height: BigInt(0),
        time: new Date(),
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestPrepareProposal = {
    typeUrl: "/tendermint.abci.RequestPrepareProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxTxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxTxBytes);
        }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).bytes(v);
        }
        if (message.localLastCommit !== undefined) {
            exports.ExtendedCommitInfo.encode(message.localLastCommit, writer.uint32(26).fork()).ldelim();
        }
        for (var _b = 0, _c = message.misbehavior; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Misbehavior.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestPrepareProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxTxBytes = reader.int64();
                    break;
                case 2:
                    message.txs.push(reader.bytes());
                    break;
                case 3:
                    message.localLastCommit = exports.ExtendedCommitInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseRequestPrepareProposal();
        message.maxTxBytes = object.maxTxBytes !== undefined && object.maxTxBytes !== null ? BigInt(object.maxTxBytes.toString()) : BigInt(0);
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.localLastCommit = object.localLastCommit !== undefined && object.localLastCommit !== null ? exports.ExtendedCommitInfo.fromPartial(object.localLastCommit) : undefined;
        message.misbehavior = ((_b = object.misbehavior) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Misbehavior.fromPartial(e); })) || [];
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_c = object.time) !== null && _c !== void 0 ? _c : undefined;
        message.nextValidatorsHash = (_d = object.nextValidatorsHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proposerAddress = (_e = object.proposerAddress) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    }
};
function createBaseRequestProcessProposal() {
    return {
        txs: [],
        proposedLastCommit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestProcessProposal = {
    typeUrl: "/tendermint.abci.RequestProcessProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        if (message.proposedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.proposedLastCommit, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.misbehavior; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestProcessProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.proposedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseRequestProcessProposal();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? exports.CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
        message.misbehavior = ((_b = object.misbehavior) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Misbehavior.fromPartial(e); })) || [];
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : undefined;
        message.nextValidatorsHash = (_e = object.nextValidatorsHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proposerAddress = (_f = object.proposerAddress) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    }
};
function createBaseRequestExtendVote() {
    return {
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        txs: [],
        proposedLastCommit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestExtendVote = {
    typeUrl: "/tendermint.abci.RequestExtendVote",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(26).fork()).ldelim();
        }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).bytes(v);
        }
        if (message.proposedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.proposedLastCommit, writer.uint32(42).fork()).ldelim();
        }
        for (var _b = 0, _c = message.misbehavior; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Misbehavior.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestExtendVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.txs.push(reader.bytes());
                    break;
                case 5:
                    message.proposedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseRequestExtendVote();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.txs = ((_c = object.txs) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        message.proposedLastCommit = object.proposedLastCommit !== undefined && object.proposedLastCommit !== null ? exports.CommitInfo.fromPartial(object.proposedLastCommit) : undefined;
        message.misbehavior = ((_d = object.misbehavior) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.Misbehavior.fromPartial(e); })) || [];
        message.nextValidatorsHash = (_e = object.nextValidatorsHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proposerAddress = (_f = object.proposerAddress) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    }
};
function createBaseRequestVerifyVoteExtension() {
    return {
        hash: new Uint8Array(),
        validatorAddress: new Uint8Array(),
        height: BigInt(0),
        voteExtension: new Uint8Array()
    };
}
exports.RequestVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.voteExtension.length !== 0) {
            writer.uint32(34).bytes(message.voteExtension);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestVerifyVoteExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.voteExtension = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRequestVerifyVoteExtension();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.voteExtension = (_c = object.voteExtension) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseRequestFinalizeBlock() {
    return {
        txs: [],
        decidedLastCommit: exports.CommitInfo.fromPartial({}),
        misbehavior: [],
        hash: new Uint8Array(),
        height: BigInt(0),
        time: new Date(),
        nextValidatorsHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
exports.RequestFinalizeBlock = {
    typeUrl: "/tendermint.abci.RequestFinalizeBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        if (message.decidedLastCommit !== undefined) {
            exports.CommitInfo.encode(message.decidedLastCommit, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.misbehavior; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.Misbehavior.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(40).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(50).fork()).ldelim();
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(58).bytes(message.nextValidatorsHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRequestFinalizeBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                case 2:
                    message.decidedLastCommit = exports.CommitInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.misbehavior.push(exports.Misbehavior.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseRequestFinalizeBlock();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.decidedLastCommit = object.decidedLastCommit !== undefined && object.decidedLastCommit !== null ? exports.CommitInfo.fromPartial(object.decidedLastCommit) : undefined;
        message.misbehavior = ((_b = object.misbehavior) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Misbehavior.fromPartial(e); })) || [];
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_d = object.time) !== null && _d !== void 0 ? _d : undefined;
        message.nextValidatorsHash = (_e = object.nextValidatorsHash) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proposerAddress = (_f = object.proposerAddress) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    }
};
function createBaseResponse() {
    return {
        exception: undefined,
        echo: undefined,
        flush: undefined,
        info: undefined,
        initChain: undefined,
        query: undefined,
        checkTx: undefined,
        commit: undefined,
        listSnapshots: undefined,
        offerSnapshot: undefined,
        loadSnapshotChunk: undefined,
        applySnapshotChunk: undefined,
        prepareProposal: undefined,
        processProposal: undefined,
        extendVote: undefined,
        verifyVoteExtension: undefined,
        finalizeBlock: undefined
    };
}
exports.Response = {
    typeUrl: "/tendermint.abci.Response",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.exception !== undefined) {
            exports.ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
        }
        if (message.echo !== undefined) {
            exports.ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
        }
        if (message.flush !== undefined) {
            exports.ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
        }
        if (message.info !== undefined) {
            exports.ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
        }
        if (message.initChain !== undefined) {
            exports.ResponseInitChain.encode(message.initChain, writer.uint32(50).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
        }
        if (message.checkTx !== undefined) {
            exports.ResponseCheckTx.encode(message.checkTx, writer.uint32(74).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
        }
        if (message.listSnapshots !== undefined) {
            exports.ResponseListSnapshots.encode(message.listSnapshots, writer.uint32(106).fork()).ldelim();
        }
        if (message.offerSnapshot !== undefined) {
            exports.ResponseOfferSnapshot.encode(message.offerSnapshot, writer.uint32(114).fork()).ldelim();
        }
        if (message.loadSnapshotChunk !== undefined) {
            exports.ResponseLoadSnapshotChunk.encode(message.loadSnapshotChunk, writer.uint32(122).fork()).ldelim();
        }
        if (message.applySnapshotChunk !== undefined) {
            exports.ResponseApplySnapshotChunk.encode(message.applySnapshotChunk, writer.uint32(130).fork()).ldelim();
        }
        if (message.prepareProposal !== undefined) {
            exports.ResponsePrepareProposal.encode(message.prepareProposal, writer.uint32(138).fork()).ldelim();
        }
        if (message.processProposal !== undefined) {
            exports.ResponseProcessProposal.encode(message.processProposal, writer.uint32(146).fork()).ldelim();
        }
        if (message.extendVote !== undefined) {
            exports.ResponseExtendVote.encode(message.extendVote, writer.uint32(154).fork()).ldelim();
        }
        if (message.verifyVoteExtension !== undefined) {
            exports.ResponseVerifyVoteExtension.encode(message.verifyVoteExtension, writer.uint32(162).fork()).ldelim();
        }
        if (message.finalizeBlock !== undefined) {
            exports.ResponseFinalizeBlock.encode(message.finalizeBlock, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exception = exports.ResponseException.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.echo = exports.ResponseEcho.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.flush = exports.ResponseFlush.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.info = exports.ResponseInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.initChain = exports.ResponseInitChain.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.query = exports.ResponseQuery.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.checkTx = exports.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.commit = exports.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.listSnapshots = exports.ResponseListSnapshots.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.offerSnapshot = exports.ResponseOfferSnapshot.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.loadSnapshotChunk = exports.ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.applySnapshotChunk = exports.ResponseApplySnapshotChunk.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.prepareProposal = exports.ResponsePrepareProposal.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.processProposal = exports.ResponseProcessProposal.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.extendVote = exports.ResponseExtendVote.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.verifyVoteExtension = exports.ResponseVerifyVoteExtension.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.finalizeBlock = exports.ResponseFinalizeBlock.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseResponse();
        message.exception = object.exception !== undefined && object.exception !== null ? exports.ResponseException.fromPartial(object.exception) : undefined;
        message.echo = object.echo !== undefined && object.echo !== null ? exports.ResponseEcho.fromPartial(object.echo) : undefined;
        message.flush = object.flush !== undefined && object.flush !== null ? exports.ResponseFlush.fromPartial(object.flush) : undefined;
        message.info = object.info !== undefined && object.info !== null ? exports.ResponseInfo.fromPartial(object.info) : undefined;
        message.initChain = object.initChain !== undefined && object.initChain !== null ? exports.ResponseInitChain.fromPartial(object.initChain) : undefined;
        message.query = object.query !== undefined && object.query !== null ? exports.ResponseQuery.fromPartial(object.query) : undefined;
        message.checkTx = object.checkTx !== undefined && object.checkTx !== null ? exports.ResponseCheckTx.fromPartial(object.checkTx) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.ResponseCommit.fromPartial(object.commit) : undefined;
        message.listSnapshots = object.listSnapshots !== undefined && object.listSnapshots !== null ? exports.ResponseListSnapshots.fromPartial(object.listSnapshots) : undefined;
        message.offerSnapshot = object.offerSnapshot !== undefined && object.offerSnapshot !== null ? exports.ResponseOfferSnapshot.fromPartial(object.offerSnapshot) : undefined;
        message.loadSnapshotChunk = object.loadSnapshotChunk !== undefined && object.loadSnapshotChunk !== null ? exports.ResponseLoadSnapshotChunk.fromPartial(object.loadSnapshotChunk) : undefined;
        message.applySnapshotChunk = object.applySnapshotChunk !== undefined && object.applySnapshotChunk !== null ? exports.ResponseApplySnapshotChunk.fromPartial(object.applySnapshotChunk) : undefined;
        message.prepareProposal = object.prepareProposal !== undefined && object.prepareProposal !== null ? exports.ResponsePrepareProposal.fromPartial(object.prepareProposal) : undefined;
        message.processProposal = object.processProposal !== undefined && object.processProposal !== null ? exports.ResponseProcessProposal.fromPartial(object.processProposal) : undefined;
        message.extendVote = object.extendVote !== undefined && object.extendVote !== null ? exports.ResponseExtendVote.fromPartial(object.extendVote) : undefined;
        message.verifyVoteExtension = object.verifyVoteExtension !== undefined && object.verifyVoteExtension !== null ? exports.ResponseVerifyVoteExtension.fromPartial(object.verifyVoteExtension) : undefined;
        message.finalizeBlock = object.finalizeBlock !== undefined && object.finalizeBlock !== null ? exports.ResponseFinalizeBlock.fromPartial(object.finalizeBlock) : undefined;
        return message;
    }
};
function createBaseResponseException() {
    return {
        error: ""
    };
}
exports.ResponseException = {
    typeUrl: "/tendermint.abci.ResponseException",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.error !== "") {
            writer.uint32(10).string(message.error);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseException();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseException();
        message.error = (_a = object.error) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseResponseEcho() {
    return {
        message: ""
    };
}
exports.ResponseEcho = {
    typeUrl: "/tendermint.abci.ResponseEcho",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseEcho();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseEcho();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseResponseFlush() {
    return {};
}
exports.ResponseFlush = {
    typeUrl: "/tendermint.abci.ResponseFlush",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseFlush();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseResponseFlush();
        return message;
    }
};
function createBaseResponseInfo() {
    return {
        data: "",
        version: "",
        appVersion: BigInt(0),
        lastBlockHeight: BigInt(0),
        lastBlockAppHash: new Uint8Array()
    };
}
exports.ResponseInfo = {
    typeUrl: "/tendermint.abci.ResponseInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.data !== "") {
            writer.uint32(10).string(message.data);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.appVersion !== BigInt(0)) {
            writer.uint32(24).uint64(message.appVersion);
        }
        if (message.lastBlockHeight !== BigInt(0)) {
            writer.uint32(32).int64(message.lastBlockHeight);
        }
        if (message.lastBlockAppHash.length !== 0) {
            writer.uint32(42).bytes(message.lastBlockAppHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.appVersion = reader.uint64();
                    break;
                case 4:
                    message.lastBlockHeight = reader.int64();
                    break;
                case 5:
                    message.lastBlockAppHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseResponseInfo();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.appVersion = object.appVersion !== undefined && object.appVersion !== null ? BigInt(object.appVersion.toString()) : BigInt(0);
        message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? BigInt(object.lastBlockHeight.toString()) : BigInt(0);
        message.lastBlockAppHash = (_c = object.lastBlockAppHash) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseResponseInitChain() {
    return {
        consensusParams: undefined,
        validators: [],
        appHash: new Uint8Array()
    };
}
exports.ResponseInitChain = {
    typeUrl: "/tendermint.abci.ResponseInitChain",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.consensusParams !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ValidatorUpdate.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(26).bytes(message.appHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseInitChain();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusParams = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseResponseInitChain();
        message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? params_1.ConsensusParams.fromPartial(object.consensusParams) : undefined;
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.appHash = (_b = object.appHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
function createBaseResponseQuery() {
    return {
        code: 0,
        log: "",
        info: "",
        index: BigInt(0),
        key: new Uint8Array(),
        value: new Uint8Array(),
        proofOps: undefined,
        height: BigInt(0),
        codespace: ""
    };
}
exports.ResponseQuery = {
    typeUrl: "/tendermint.abci.ResponseQuery",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(40).int64(message.index);
        }
        if (message.key.length !== 0) {
            writer.uint32(50).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(58).bytes(message.value);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(66).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(72).int64(message.height);
        }
        if (message.codespace !== "") {
            writer.uint32(82).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseQuery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.index = reader.int64();
                    break;
                case 6:
                    message.key = reader.bytes();
                    break;
                case 7:
                    message.value = reader.bytes();
                    break;
                case 8:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.height = reader.int64();
                    break;
                case 10:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseResponseQuery();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.info = (_c = object.info) !== null && _c !== void 0 ? _c : "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.key = (_d = object.key) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.value = (_e = object.value) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? proof_1.ProofOps.fromPartial(object.proofOps) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseResponseCheckTx() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: ""
    };
}
exports.ResponseCheckTx = {
    typeUrl: "/tendermint.abci.ResponseCheckTx",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseCheckTx();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseResponseCheckTx();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = ((_e = object.events) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseResponseCommit() {
    return {
        retainHeight: BigInt(0)
    };
}
exports.ResponseCommit = {
    typeUrl: "/tendermint.abci.ResponseCommit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.retainHeight !== BigInt(0)) {
            writer.uint32(24).int64(message.retainHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseCommit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.retainHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseResponseCommit();
        message.retainHeight = object.retainHeight !== undefined && object.retainHeight !== null ? BigInt(object.retainHeight.toString()) : BigInt(0);
        return message;
    }
};
function createBaseResponseListSnapshots() {
    return {
        snapshots: []
    };
}
exports.ResponseListSnapshots = {
    typeUrl: "/tendermint.abci.ResponseListSnapshots",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.snapshots; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Snapshot.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseListSnapshots();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots.push(exports.Snapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseListSnapshots();
        message.snapshots = ((_a = object.snapshots) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Snapshot.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseResponseOfferSnapshot() {
    return {
        result: 0
    };
}
exports.ResponseOfferSnapshot = {
    typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseOfferSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseOfferSnapshot();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseResponseLoadSnapshotChunk() {
    return {
        chunk: new Uint8Array()
    };
}
exports.ResponseLoadSnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.chunk.length !== 0) {
            writer.uint32(10).bytes(message.chunk);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseLoadSnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseLoadSnapshotChunk();
        message.chunk = (_a = object.chunk) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseResponseApplySnapshotChunk() {
    return {
        result: 0,
        refetchChunks: [],
        rejectSenders: []
    };
}
exports.ResponseApplySnapshotChunk = {
    typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        writer.uint32(18).fork();
        for (var _i = 0, _a = message.refetchChunks; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(v);
        }
        writer.ldelim();
        for (var _b = 0, _c = message.rejectSenders; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseApplySnapshotChunk();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.refetchChunks.push(reader.uint32());
                        }
                    }
                    else {
                        message.refetchChunks.push(reader.uint32());
                    }
                    break;
                case 3:
                    message.rejectSenders.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseResponseApplySnapshotChunk();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        message.refetchChunks = ((_b = object.refetchChunks) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.rejectSenders = ((_c = object.rejectSenders) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseResponsePrepareProposal() {
    return {
        txs: []
    };
}
exports.ResponsePrepareProposal = {
    typeUrl: "/tendermint.abci.ResponsePrepareProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponsePrepareProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponsePrepareProposal();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseResponseProcessProposal() {
    return {
        status: 0
    };
}
exports.ResponseProcessProposal = {
    typeUrl: "/tendermint.abci.ResponseProcessProposal",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseProcessProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseProcessProposal();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseResponseExtendVote() {
    return {
        voteExtension: new Uint8Array()
    };
}
exports.ResponseExtendVote = {
    typeUrl: "/tendermint.abci.ResponseExtendVote",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.voteExtension.length !== 0) {
            writer.uint32(10).bytes(message.voteExtension);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseExtendVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteExtension = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseExtendVote();
        message.voteExtension = (_a = object.voteExtension) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseResponseVerifyVoteExtension() {
    return {
        status: 0
    };
}
exports.ResponseVerifyVoteExtension = {
    typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseVerifyVoteExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseResponseVerifyVoteExtension();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseResponseFinalizeBlock() {
    return {
        events: [],
        txResults: [],
        validatorUpdates: [],
        consensusParamUpdates: undefined,
        appHash: new Uint8Array()
    };
}
exports.ResponseFinalizeBlock = {
    typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.txResults; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.ExecTxResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _d = 0, _e = message.validatorUpdates; _d < _e.length; _d++) {
            var v = _e[_d];
            exports.ValidatorUpdate.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.consensusParamUpdates !== undefined) {
            params_1.ConsensusParams.encode(message.consensusParamUpdates, writer.uint32(34).fork()).ldelim();
        }
        if (message.appHash.length !== 0) {
            writer.uint32(42).bytes(message.appHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseResponseFinalizeBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.txResults.push(exports.ExecTxResult.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validatorUpdates.push(exports.ValidatorUpdate.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.consensusParamUpdates = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.appHash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseResponseFinalizeBlock();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        message.txResults = ((_b = object.txResults) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ExecTxResult.fromPartial(e); })) || [];
        message.validatorUpdates = ((_c = object.validatorUpdates) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.ValidatorUpdate.fromPartial(e); })) || [];
        message.consensusParamUpdates = object.consensusParamUpdates !== undefined && object.consensusParamUpdates !== null ? params_1.ConsensusParams.fromPartial(object.consensusParamUpdates) : undefined;
        message.appHash = (_d = object.appHash) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    }
};
function createBaseCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.CommitInfo = {
    typeUrl: "/tendermint.abci.CommitInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.VoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.VoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCommitInfo();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.VoteInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseExtendedCommitInfo() {
    return {
        round: 0,
        votes: []
    };
}
exports.ExtendedCommitInfo = {
    typeUrl: "/tendermint.abci.ExtendedCommitInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.round !== 0) {
            writer.uint32(8).int32(message.round);
        }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ExtendedVoteInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtendedCommitInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.votes.push(exports.ExtendedVoteInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseExtendedCommitInfo();
        message.round = (_a = object.round) !== null && _a !== void 0 ? _a : 0;
        message.votes = ((_b = object.votes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.ExtendedVoteInfo.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.Event = {
    typeUrl: "/tendermint.abci.Event",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (var _i = 0, _a = message.attributes; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.EventAttribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.EventAttribute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.EventAttribute.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseEventAttribute() {
    return {
        key: "",
        value: "",
        index: false
    };
}
exports.EventAttribute = {
    typeUrl: "/tendermint.abci.EventAttribute",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.index === true) {
            writer.uint32(24).bool(message.index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEventAttribute();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.index = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEventAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseExecTxResult() {
    return {
        code: 0,
        data: new Uint8Array(),
        log: "",
        info: "",
        gasWanted: BigInt(0),
        gasUsed: BigInt(0),
        events: [],
        codespace: ""
    };
}
exports.ExecTxResult = {
    typeUrl: "/tendermint.abci.ExecTxResult",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.code !== 0) {
            writer.uint32(8).uint32(message.code);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(26).string(message.log);
        }
        if (message.info !== "") {
            writer.uint32(34).string(message.info);
        }
        if (message.gasWanted !== BigInt(0)) {
            writer.uint32(40).int64(message.gasWanted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).int64(message.gasUsed);
        }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Event.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.codespace !== "") {
            writer.uint32(66).string(message.codespace);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExecTxResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.uint32();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.log = reader.string();
                    break;
                case 4:
                    message.info = reader.string();
                    break;
                case 5:
                    message.gasWanted = reader.int64();
                    break;
                case 6:
                    message.gasUsed = reader.int64();
                    break;
                case 7:
                    message.events.push(exports.Event.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.codespace = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseExecTxResult();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.log = (_c = object.log) !== null && _c !== void 0 ? _c : "";
        message.info = (_d = object.info) !== null && _d !== void 0 ? _d : "";
        message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.events = ((_e = object.events) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.Event.fromPartial(e); })) || [];
        message.codespace = (_f = object.codespace) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseTxResult() {
    return {
        height: BigInt(0),
        index: 0,
        tx: new Uint8Array(),
        result: exports.ExecTxResult.fromPartial({})
    };
}
exports.TxResult = {
    typeUrl: "/tendermint.abci.TxResult",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.index !== 0) {
            writer.uint32(16).uint32(message.index);
        }
        if (message.tx.length !== 0) {
            writer.uint32(26).bytes(message.tx);
        }
        if (message.result !== undefined) {
            exports.ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.index = reader.uint32();
                    break;
                case 3:
                    message.tx = reader.bytes();
                    break;
                case 4:
                    message.result = exports.ExecTxResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : 0;
        message.tx = (_b = object.tx) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.result = object.result !== undefined && object.result !== null ? exports.ExecTxResult.fromPartial(object.result) : undefined;
        return message;
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        power: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.abci.Validator",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    }
};
function createBaseValidatorUpdate() {
    return {
        pubKey: keys_1.PublicKey.fromPartial({}),
        power: BigInt(0)
    };
}
exports.ValidatorUpdate = {
    typeUrl: "/tendermint.abci.ValidatorUpdate",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseValidatorUpdate();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    }
};
function createBaseVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        blockIdFlag: 0
    };
}
exports.VoteInfo = {
    typeUrl: "/tendermint.abci.VoteInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockIdFlag !== 0) {
            writer.uint32(24).int32(message.blockIdFlag);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockIdFlag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.blockIdFlag = (_a = object.blockIdFlag) !== null && _a !== void 0 ? _a : 0;
        return message;
    }
};
function createBaseExtendedVoteInfo() {
    return {
        validator: exports.Validator.fromPartial({}),
        voteExtension: new Uint8Array(),
        extensionSignature: new Uint8Array(),
        blockIdFlag: 0
    };
}
exports.ExtendedVoteInfo = {
    typeUrl: "/tendermint.abci.ExtendedVoteInfo",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteExtension.length !== 0) {
            writer.uint32(26).bytes(message.voteExtension);
        }
        if (message.extensionSignature.length !== 0) {
            writer.uint32(34).bytes(message.extensionSignature);
        }
        if (message.blockIdFlag !== 0) {
            writer.uint32(40).int32(message.blockIdFlag);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseExtendedVoteInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voteExtension = reader.bytes();
                    break;
                case 4:
                    message.extensionSignature = reader.bytes();
                    break;
                case 5:
                    message.blockIdFlag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseExtendedVoteInfo();
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.voteExtension = (_a = object.voteExtension) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.extensionSignature = (_b = object.extensionSignature) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.blockIdFlag = (_c = object.blockIdFlag) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseMisbehavior() {
    return {
        type: 0,
        validator: exports.Validator.fromPartial({}),
        height: BigInt(0),
        time: new Date(),
        totalVotingPower: BigInt(0)
    };
}
exports.Misbehavior = {
    typeUrl: "/tendermint.abci.Misbehavior",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.validator !== undefined) {
            exports.Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(40).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMisbehavior();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.validator = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.totalVotingPower = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMisbehavior();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.Validator.fromPartial(object.validator) : undefined;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = (_b = object.time) !== null && _b !== void 0 ? _b : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    }
};
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array()
    };
}
exports.Snapshot = {
    typeUrl: "/tendermint.abci.Snapshot",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunks = (_b = object.chunks) !== null && _b !== void 0 ? _b : 0;
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.metadata = (_d = object.metadata) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    }
};
