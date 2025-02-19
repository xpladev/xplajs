"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCancelProposalResponse = exports.MsgCancelProposal = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgExecLegacyContentResponse = exports.MsgExecLegacyContent = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = void 0;
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const gov_1 = require("./gov");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSubmitProposal() {
    return {
        messages: [],
        initialDeposit: [],
        proposer: "",
        metadata: "",
        title: "",
        summary: "",
        expedited: false
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    aminoType: "cosmos-sdk/v1/MsgSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || Array.isArray(o.messages) && (!o.messages.length || any_1.Any.is(o.messages[0])) && Array.isArray(o.initialDeposit) && (!o.initialDeposit.length || coin_1.Coin.is(o.initialDeposit[0])) && typeof o.proposer === "string" && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.expedited === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || Array.isArray(o.messages) && (!o.messages.length || any_1.Any.isAmino(o.messages[0])) && Array.isArray(o.initial_deposit) && (!o.initial_deposit.length || coin_1.Coin.isAmino(o.initial_deposit[0])) && typeof o.proposer === "string" && typeof o.metadata === "string" && typeof o.title === "string" && typeof o.summary === "string" && typeof o.expedited === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(50).string(message.summary);
        }
        if (message.expedited === true) {
            writer.uint32(56).bool(message.expedited);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.initialDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.summary = reader.string();
                    break;
                case 7:
                    message.expedited = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.initialDeposit = object.initialDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        message.metadata = object.metadata ?? "";
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        message.expedited = object.expedited ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        message.initialDeposit = object.initial_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        if (object.expedited !== undefined && object.expedited !== null) {
            message.expedited = object.expedited;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        if (message.initialDeposit) {
            obj.initial_deposit = message.initialDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = message.initialDeposit;
        }
        obj.proposer = message.proposer === "" ? undefined : message.proposer;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.title = message.title === "" ? undefined : message.title;
        obj.summary = message.summary === "" ? undefined : message.summary;
        obj.expedited = message.expedited === false ? undefined : message.expedited;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposal.typeUrl, exports.MsgSubmitProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposal.aminoType, exports.MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
    aminoType: "cosmos-sdk/v1/MsgSubmitProposalResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposalResponse.typeUrl, exports.MsgSubmitProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposalResponse.aminoType, exports.MsgSubmitProposalResponse.typeUrl);
function createBaseMsgExecLegacyContent() {
    return {
        content: undefined,
        authority: ""
    };
}
exports.MsgExecLegacyContent = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContent",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExecLegacyContent.typeUrl || typeof o.authority === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExecLegacyContent.typeUrl || typeof o.authority === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.content !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.content), writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExecLegacyContent();
        message.content = object.content !== undefined && object.content !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.content) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecLegacyContent();
        if (object.content !== undefined && object.content !== null) {
            message.content = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.content);
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.content) : undefined;
        obj.authority = message.authority === "" ? undefined : message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContent.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecLegacyContent.typeUrl, exports.MsgExecLegacyContent);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecLegacyContent.aminoType, exports.MsgExecLegacyContent.typeUrl);
function createBaseMsgExecLegacyContentResponse() {
    return {};
}
exports.MsgExecLegacyContentResponse = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
    aminoType: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgExecLegacyContentResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgExecLegacyContentResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecLegacyContentResponse.typeUrl, exports.MsgExecLegacyContentResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecLegacyContentResponse.aminoType, exports.MsgExecLegacyContentResponse.typeUrl);
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        metadata: ""
    };
}
exports.MsgVote = {
    typeUrl: "/cosmos.gov.v1.MsgVote",
    aminoType: "cosmos-sdk/v1/MsgVote",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.option = message.option === 0 ? undefined : message.option;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVote.typeUrl, exports.MsgVote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVote.aminoType, exports.MsgVote.typeUrl);
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
    aminoType: "cosmos-sdk/v1/MsgVoteResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteResponse.typeUrl, exports.MsgVoteResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteResponse.aminoType, exports.MsgVoteResponse.typeUrl);
function createBaseMsgVoteWeighted() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
exports.MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
    aminoType: "cosmos-sdk/v1/MsgVoteWeighted",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVoteWeighted.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || gov_1.WeightedVoteOption.is(o.options[0])) && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVoteWeighted.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && Array.isArray(o.options) && (!o.options.length || gov_1.WeightedVoteOption.isAmino(o.options[0])) && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            gov_1.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.options.push(gov_1.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVoteWeighted();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
        obj.voter = message.voter === "" ? undefined : message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = message.options;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeighted",
            value: exports.MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
            value: exports.MsgVoteWeighted.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteWeighted.typeUrl, exports.MsgVoteWeighted);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteWeighted.aminoType, exports.MsgVoteWeighted.typeUrl);
function createBaseMsgVoteWeightedResponse() {
    return {};
}
exports.MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
    aminoType: "cosmos-sdk/v1/MsgVoteWeightedResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVoteWeightedResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVoteWeightedResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteWeightedResponse.typeUrl, exports.MsgVoteWeightedResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteWeightedResponse.aminoType, exports.MsgVoteWeightedResponse.typeUrl);
function createBaseMsgDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.MsgDeposit = {
    typeUrl: "/cosmos.gov.v1.MsgDeposit",
    aminoType: "cosmos-sdk/v1/MsgDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDeposit.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDeposit.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDeposit",
            value: exports.MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDeposit.typeUrl, exports.MsgDeposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDeposit.aminoType, exports.MsgDeposit.typeUrl);
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
    aminoType: "cosmos-sdk/v1/MsgDepositResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgDepositResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDepositResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDepositResponse",
            value: exports.MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDepositResponse.typeUrl, exports.MsgDepositResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDepositResponse.aminoType, exports.MsgDepositResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: gov_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && gov_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && gov_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            gov_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = gov_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? gov_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = gov_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? gov_1.Params.toAmino(message.params) : gov_1.Params.toAmino(gov_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/gov/v1/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/v1/MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
function createBaseMsgCancelProposal() {
    return {
        proposalId: BigInt(0),
        proposer: ""
    };
}
exports.MsgCancelProposal = {
    typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
    aminoType: "cosmos-sdk/v1/MsgCancelProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCancelProposal.typeUrl || typeof o.proposalId === "bigint" && typeof o.proposer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCancelProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.proposer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.proposer = object.proposer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
        obj.proposer = message.proposer === "" ? undefined : message.proposer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgCancelProposal",
            value: exports.MsgCancelProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgCancelProposal",
            value: exports.MsgCancelProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelProposal.typeUrl, exports.MsgCancelProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelProposal.aminoType, exports.MsgCancelProposal.typeUrl);
function createBaseMsgCancelProposalResponse() {
    return {
        proposalId: BigInt(0),
        canceledTime: new Date(),
        canceledHeight: BigInt(0)
    };
}
exports.MsgCancelProposalResponse = {
    typeUrl: "/cosmos.gov.v1.MsgCancelProposalResponse",
    aminoType: "cosmos-sdk/v1/MsgCancelProposalResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCancelProposalResponse.typeUrl || typeof o.proposalId === "bigint" && timestamp_1.Timestamp.is(o.canceledTime) && typeof o.canceledHeight === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCancelProposalResponse.typeUrl || typeof o.proposal_id === "bigint" && timestamp_1.Timestamp.isAmino(o.canceled_time) && typeof o.canceled_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.canceledTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.canceledTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.canceledHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.canceledHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.canceledTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canceledHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.canceledTime = object.canceledTime ?? undefined;
        message.canceledHeight = object.canceledHeight !== undefined && object.canceledHeight !== null ? BigInt(object.canceledHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.canceled_time !== undefined && object.canceled_time !== null) {
            message.canceledTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.canceled_time));
        }
        if (object.canceled_height !== undefined && object.canceled_height !== null) {
            message.canceledHeight = BigInt(object.canceled_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
        obj.canceled_time = message.canceledTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.canceledTime)) : undefined;
        obj.canceled_height = message.canceledHeight !== BigInt(0) ? message.canceledHeight?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgCancelProposalResponse",
            value: exports.MsgCancelProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgCancelProposalResponse",
            value: exports.MsgCancelProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelProposalResponse.typeUrl, exports.MsgCancelProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelProposalResponse.aminoType, exports.MsgCancelProposalResponse.typeUrl);
