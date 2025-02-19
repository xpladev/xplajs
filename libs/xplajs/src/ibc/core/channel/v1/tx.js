"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgPruneAcknowledgementsResponse = exports.MsgPruneAcknowledgements = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgChannelUpgradeCancelResponse = exports.MsgChannelUpgradeCancel = exports.MsgChannelUpgradeTimeoutResponse = exports.MsgChannelUpgradeTimeout = exports.MsgChannelUpgradeOpenResponse = exports.MsgChannelUpgradeOpen = exports.MsgChannelUpgradeConfirmResponse = exports.MsgChannelUpgradeConfirm = exports.MsgChannelUpgradeAckResponse = exports.MsgChannelUpgradeAck = exports.MsgChannelUpgradeTryResponse = exports.MsgChannelUpgradeTry = exports.MsgChannelUpgradeInitResponse = exports.MsgChannelUpgradeInit = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.ResponseResultTypeAmino = exports.ResponseResultType = void 0;
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
exports.responseResultTypeToJSON = responseResultTypeToJSON;
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const upgrade_1 = require("./upgrade");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_FAILURE"] = 3] = "RESPONSE_RESULT_TYPE_FAILURE";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType || (exports.ResponseResultType = ResponseResultType = {}));
exports.ResponseResultTypeAmino = ResponseResultType;
function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case 3:
        case "RESPONSE_RESULT_TYPE_FAILURE":
            return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
            return "RESPONSE_RESULT_TYPE_FAILURE";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgChannelOpenInit() {
    return {
        portId: "",
        channel: channel_1.Channel.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenInit.typeUrl || typeof o.portId === "string" && channel_1.Channel.is(o.channel) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && channel_1.Channel.isAmino(o.channel) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.portId = object.portId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenInit.typeUrl, exports.MsgChannelOpenInit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenInit.aminoType, exports.MsgChannelOpenInit.typeUrl);
function createBaseMsgChannelOpenInitResponse() {
    return {
        channelId: "",
        version: ""
    };
}
exports.MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenInitResponse.typeUrl || typeof o.channelId === "string" && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        message.channelId = object.channelId ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.version = message.version === "" ? undefined : message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenInitResponse.typeUrl, exports.MsgChannelOpenInitResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenInitResponse.aminoType, exports.MsgChannelOpenInitResponse.typeUrl);
function createBaseMsgChannelOpenTry() {
    return {
        portId: "",
        previousChannelId: "",
        channel: channel_1.Channel.fromPartial({}),
        counterpartyVersion: "",
        proofInit: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenTry.typeUrl || typeof o.portId === "string" && typeof o.previousChannelId === "string" && channel_1.Channel.is(o.channel) && typeof o.counterpartyVersion === "string" && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && channel_1.Channel.isAmino(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.previousChannelId !== "") {
            writer.uint32(18).string(message.previousChannelId);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(42).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.previousChannelId = reader.string();
                    break;
                case 3:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofInit = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.portId = object.portId ?? "";
        message.previousChannelId = object.previousChannelId ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTry();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
            message.previousChannelId = object.previous_channel_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.previous_channel_id = message.previousChannelId === "" ? undefined : message.previousChannelId;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
        obj.proof_init = message.proofInit ? (0, helpers_1.base64FromBytes)(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenTry.typeUrl, exports.MsgChannelOpenTry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenTry.aminoType, exports.MsgChannelOpenTry.typeUrl);
function createBaseMsgChannelOpenTryResponse() {
    return {
        version: "",
        channelId: ""
    };
}
exports.MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channelId === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = object.version ?? "";
        message.channelId = object.channelId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version === "" ? undefined : message.version;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenTryResponse.typeUrl, exports.MsgChannelOpenTryResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenTryResponse.aminoType, exports.MsgChannelOpenTryResponse.typeUrl);
function createBaseMsgChannelOpenAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelId: "",
        counterpartyVersion: "",
        proofTry: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenAck.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.counterpartyChannelId === "string" && typeof o.counterpartyVersion === "string" && (o.proofTry instanceof Uint8Array || typeof o.proofTry === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelId !== "") {
            writer.uint32(26).string(message.counterpartyChannelId);
        }
        if (message.counterpartyVersion !== "") {
            writer.uint32(34).string(message.counterpartyVersion);
        }
        if (message.proofTry.length !== 0) {
            writer.uint32(42).bytes(message.proofTry);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannelId = reader.string();
                    break;
                case 4:
                    message.counterpartyVersion = reader.string();
                    break;
                case 5:
                    message.proofTry = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelId = object.counterpartyChannelId ?? "";
        message.counterpartyVersion = object.counterpartyVersion ?? "";
        message.proofTry = object.proofTry ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenAck();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
            message.counterpartyChannelId = object.counterparty_channel_id;
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterpartyVersion = object.counterparty_version;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proofTry = (0, helpers_1.bytesFromBase64)(object.proof_try);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_channel_id = message.counterpartyChannelId === "" ? undefined : message.counterpartyChannelId;
        obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
        obj.proof_try = message.proofTry ? (0, helpers_1.base64FromBytes)(message.proofTry) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenAck.typeUrl, exports.MsgChannelOpenAck);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenAck.aminoType, exports.MsgChannelOpenAck.typeUrl);
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelOpenAckResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelOpenAckResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenAckResponse.typeUrl, exports.MsgChannelOpenAckResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenAckResponse.aminoType, exports.MsgChannelOpenAckResponse.typeUrl);
function createBaseMsgChannelOpenConfirm() {
    return {
        portId: "",
        channelId: "",
        proofAck: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (o.proofAck instanceof Uint8Array || typeof o.proofAck === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofAck.length !== 0) {
            writer.uint32(26).bytes(message.proofAck);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofAck = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofAck = object.proofAck ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proofAck = (0, helpers_1.bytesFromBase64)(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.proof_ack = message.proofAck ? (0, helpers_1.base64FromBytes)(message.proofAck) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenConfirm.typeUrl, exports.MsgChannelOpenConfirm);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenConfirm.aminoType, exports.MsgChannelOpenConfirm.typeUrl);
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelOpenConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelOpenConfirmResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelOpenConfirmResponse.typeUrl, exports.MsgChannelOpenConfirmResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelOpenConfirmResponse.aminoType, exports.MsgChannelOpenConfirmResponse.typeUrl);
function createBaseMsgChannelCloseInit() {
    return {
        portId: "",
        channelId: "",
        signer: ""
    };
}
exports.MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelCloseInit.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelCloseInit.typeUrl, exports.MsgChannelCloseInit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelCloseInit.aminoType, exports.MsgChannelCloseInit.typeUrl);
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelCloseInitResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelCloseInitResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelCloseInitResponse.typeUrl, exports.MsgChannelCloseInitResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelCloseInitResponse.aminoType, exports.MsgChannelCloseInitResponse.typeUrl);
function createBaseMsgChannelCloseConfirm() {
    return {
        portId: "",
        channelId: "",
        proofInit: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: "",
        counterpartyUpgradeSequence: BigInt(0)
    };
}
exports.MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelCloseConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string" && typeof o.counterpartyUpgradeSequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.proofInit.length !== 0) {
            writer.uint32(26).bytes(message.proofInit);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        if (message.counterpartyUpgradeSequence !== BigInt(0)) {
            writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proofInit = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                case 6:
                    message.counterpartyUpgradeSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proofInit = object.proofInit ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proofInit = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
            message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.proof_init = message.proofInit ? (0, helpers_1.base64FromBytes)(message.proofInit) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelCloseConfirm.typeUrl, exports.MsgChannelCloseConfirm);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelCloseConfirm.aminoType, exports.MsgChannelCloseConfirm.typeUrl);
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelCloseConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelCloseConfirmResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelCloseConfirmResponse.typeUrl, exports.MsgChannelCloseConfirmResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelCloseConfirmResponse.aminoType, exports.MsgChannelCloseConfirmResponse.typeUrl);
function createBaseMsgRecvPacket() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofCommitment: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    aminoType: "cosmos-sdk/MsgRecvPacket",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecvPacket.typeUrl || channel_1.Packet.is(o.packet) && (o.proofCommitment instanceof Uint8Array || typeof o.proofCommitment === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecvPacket.typeUrl || channel_1.Packet.isAmino(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofCommitment.length !== 0) {
            writer.uint32(18).bytes(message.proofCommitment);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofCommitment = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofCommitment = object.proofCommitment ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacket();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
            message.proofCommitment = (0, helpers_1.bytesFromBase64)(object.proof_commitment);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proofCommitment ? (0, helpers_1.base64FromBytes)(message.proofCommitment) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: exports.MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: exports.MsgRecvPacket.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecvPacket.typeUrl, exports.MsgRecvPacket);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRecvPacket.aminoType, exports.MsgRecvPacket.typeUrl);
function createBaseMsgRecvPacketResponse() {
    return {
        result: 0
    };
}
exports.MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    aminoType: "cosmos-sdk/MsgRecvPacketResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRecvPacketResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRecvPacketResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgRecvPacketResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacketResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRecvPacketResponse.typeUrl, exports.MsgRecvPacketResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRecvPacketResponse.aminoType, exports.MsgRecvPacketResponse.typeUrl);
function createBaseMsgTimeout() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: ""
    };
}
exports.MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    aminoType: "cosmos-sdk/MsgTimeout",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTimeout.typeUrl || channel_1.Packet.is(o.packet) && (o.proofUnreceived instanceof Uint8Array || typeof o.proofUnreceived === "string") && client_1.Height.is(o.proofHeight) && typeof o.nextSequenceRecv === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTimeout.typeUrl || channel_1.Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(32).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.nextSequenceRecv = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeout();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? (0, helpers_1.base64FromBytes)(message.proofUnreceived) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: exports.MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: exports.MsgTimeout.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTimeout.typeUrl, exports.MsgTimeout);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTimeout.aminoType, exports.MsgTimeout.typeUrl);
function createBaseMsgTimeoutResponse() {
    return {
        result: 0
    };
}
exports.MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    aminoType: "cosmos-sdk/MsgTimeoutResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgTimeoutResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTimeoutResponse.typeUrl, exports.MsgTimeoutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTimeoutResponse.aminoType, exports.MsgTimeoutResponse.typeUrl);
function createBaseMsgTimeoutOnClose() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proofUnreceived: new Uint8Array(),
        proofClose: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        nextSequenceRecv: BigInt(0),
        signer: "",
        counterpartyUpgradeSequence: BigInt(0)
    };
}
exports.MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutOnClose.typeUrl || channel_1.Packet.is(o.packet) && (o.proofUnreceived instanceof Uint8Array || typeof o.proofUnreceived === "string") && (o.proofClose instanceof Uint8Array || typeof o.proofClose === "string") && client_1.Height.is(o.proofHeight) && typeof o.nextSequenceRecv === "bigint" && typeof o.signer === "string" && typeof o.counterpartyUpgradeSequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutOnClose.typeUrl || channel_1.Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string" && typeof o.counterparty_upgrade_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proofUnreceived.length !== 0) {
            writer.uint32(18).bytes(message.proofUnreceived);
        }
        if (message.proofClose.length !== 0) {
            writer.uint32(26).bytes(message.proofClose);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.nextSequenceRecv !== BigInt(0)) {
            writer.uint32(40).uint64(message.nextSequenceRecv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        if (message.counterpartyUpgradeSequence !== BigInt(0)) {
            writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proofUnreceived = reader.bytes();
                    break;
                case 3:
                    message.proofClose = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.nextSequenceRecv = reader.uint64();
                    break;
                case 6:
                    message.signer = reader.string();
                    break;
                case 7:
                    message.counterpartyUpgradeSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
        message.proofClose = object.proofClose ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? BigInt(object.nextSequenceRecv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnClose();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proofUnreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_close !== undefined && object.proof_close !== null) {
            message.proofClose = (0, helpers_1.bytesFromBase64)(object.proof_close);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.nextSequenceRecv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
            message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proofUnreceived ? (0, helpers_1.base64FromBytes)(message.proofUnreceived) : undefined;
        obj.proof_close = message.proofClose ? (0, helpers_1.base64FromBytes)(message.proofClose) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.next_sequence_recv = message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTimeoutOnClose.typeUrl, exports.MsgTimeoutOnClose);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTimeoutOnClose.aminoType, exports.MsgTimeoutOnClose.typeUrl);
function createBaseMsgTimeoutOnCloseResponse() {
    return {
        result: 0
    };
}
exports.MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutOnCloseResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTimeoutOnCloseResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTimeoutOnCloseResponse.typeUrl, exports.MsgTimeoutOnCloseResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTimeoutOnCloseResponse.aminoType, exports.MsgTimeoutOnCloseResponse.typeUrl);
function createBaseMsgAcknowledgement() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proofAcked: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    is(o) {
        return o && (o.$typeUrl === exports.MsgAcknowledgement.typeUrl || channel_1.Packet.is(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proofAcked instanceof Uint8Array || typeof o.proofAcked === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgAcknowledgement.typeUrl || channel_1.Packet.isAmino(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proofAcked.length !== 0) {
            writer.uint32(26).bytes(message.proofAcked);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proofAcked = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proofAcked = object.proofAcked ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgement();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = (0, helpers_1.bytesFromBase64)(object.acknowledgement);
        }
        if (object.proof_acked !== undefined && object.proof_acked !== null) {
            message.proofAcked = (0, helpers_1.bytesFromBase64)(object.proof_acked);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement ? (0, helpers_1.base64FromBytes)(message.acknowledgement) : undefined;
        obj.proof_acked = message.proofAcked ? (0, helpers_1.base64FromBytes)(message.proofAcked) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: exports.MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: exports.MsgAcknowledgement.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAcknowledgement.typeUrl, exports.MsgAcknowledgement);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAcknowledgement.aminoType, exports.MsgAcknowledgement.typeUrl);
function createBaseMsgAcknowledgementResponse() {
    return {
        result: 0
    };
}
exports.MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgAcknowledgementResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgAcknowledgementResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgAcknowledgementResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgementResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgAcknowledgementResponse.typeUrl, exports.MsgAcknowledgementResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgAcknowledgementResponse.aminoType, exports.MsgAcknowledgementResponse.typeUrl);
function createBaseMsgChannelUpgradeInit() {
    return {
        portId: "",
        channelId: "",
        fields: upgrade_1.UpgradeFields.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
    aminoType: "cosmos-sdk/MsgChannelUpgradeInit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeInit.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && upgrade_1.UpgradeFields.is(o.fields) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && upgrade_1.UpgradeFields.isAmino(o.fields) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.fields !== undefined) {
            upgrade_1.UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.fields = upgrade_1.UpgradeFields.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeInit();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.fields = object.fields !== undefined && object.fields !== null ? upgrade_1.UpgradeFields.fromPartial(object.fields) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.fields !== undefined && object.fields !== null) {
            message.fields = upgrade_1.UpgradeFields.fromAmino(object.fields);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.fields = message.fields ? upgrade_1.UpgradeFields.toAmino(message.fields) : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeInit",
            value: exports.MsgChannelUpgradeInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
            value: exports.MsgChannelUpgradeInit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeInit.typeUrl, exports.MsgChannelUpgradeInit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeInit.aminoType, exports.MsgChannelUpgradeInit.typeUrl);
function createBaseMsgChannelUpgradeInitResponse() {
    return {
        upgrade: upgrade_1.Upgrade.fromPartial({}),
        upgradeSequence: BigInt(0)
    };
}
exports.MsgChannelUpgradeInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeInitResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeInitResponse.typeUrl || upgrade_1.Upgrade.is(o.upgrade) && typeof o.upgradeSequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeInitResponse.typeUrl || upgrade_1.Upgrade.isAmino(o.upgrade) && typeof o.upgrade_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgradeSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.upgradeSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.upgradeSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeInitResponse();
        message.upgrade = object.upgrade !== undefined && object.upgrade !== null ? upgrade_1.Upgrade.fromPartial(object.upgrade) : undefined;
        message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeInitResponse();
        if (object.upgrade !== undefined && object.upgrade !== null) {
            message.upgrade = upgrade_1.Upgrade.fromAmino(object.upgrade);
        }
        if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
            message.upgradeSequence = BigInt(object.upgrade_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgrade = message.upgrade ? upgrade_1.Upgrade.toAmino(message.upgrade) : undefined;
        obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeInitResponse",
            value: exports.MsgChannelUpgradeInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
            value: exports.MsgChannelUpgradeInitResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeInitResponse.typeUrl, exports.MsgChannelUpgradeInitResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeInitResponse.aminoType, exports.MsgChannelUpgradeInitResponse.typeUrl);
function createBaseMsgChannelUpgradeTry() {
    return {
        portId: "",
        channelId: "",
        proposedUpgradeConnectionHops: [],
        counterpartyUpgradeFields: upgrade_1.UpgradeFields.fromPartial({}),
        counterpartyUpgradeSequence: BigInt(0),
        proofChannel: new Uint8Array(),
        proofUpgrade: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
    aminoType: "cosmos-sdk/MsgChannelUpgradeTry",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTry.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && Array.isArray(o.proposedUpgradeConnectionHops) && (!o.proposedUpgradeConnectionHops.length || typeof o.proposedUpgradeConnectionHops[0] === "string") && upgrade_1.UpgradeFields.is(o.counterpartyUpgradeFields) && typeof o.counterpartyUpgradeSequence === "bigint" && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTry.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.proposed_upgrade_connection_hops) && (!o.proposed_upgrade_connection_hops.length || typeof o.proposed_upgrade_connection_hops[0] === "string") && upgrade_1.UpgradeFields.isAmino(o.counterparty_upgrade_fields) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        for (const v of message.proposedUpgradeConnectionHops) {
            writer.uint32(26).string(v);
        }
        if (message.counterpartyUpgradeFields !== undefined) {
            upgrade_1.UpgradeFields.encode(message.counterpartyUpgradeFields, writer.uint32(34).fork()).ldelim();
        }
        if (message.counterpartyUpgradeSequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(50).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(58).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(74).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.proposedUpgradeConnectionHops.push(reader.string());
                    break;
                case 4:
                    message.counterpartyUpgradeFields = upgrade_1.UpgradeFields.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.counterpartyUpgradeSequence = reader.uint64();
                    break;
                case 6:
                    message.proofChannel = reader.bytes();
                    break;
                case 7:
                    message.proofUpgrade = reader.bytes();
                    break;
                case 8:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTry();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops?.map(e => e) || [];
        message.counterpartyUpgradeFields = object.counterpartyUpgradeFields !== undefined && object.counterpartyUpgradeFields !== null ? upgrade_1.UpgradeFields.fromPartial(object.counterpartyUpgradeFields) : undefined;
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
        message.proofChannel = object.proofChannel ?? new Uint8Array();
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeTry();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        message.proposedUpgradeConnectionHops = object.proposed_upgrade_connection_hops?.map(e => e) || [];
        if (object.counterparty_upgrade_fields !== undefined && object.counterparty_upgrade_fields !== null) {
            message.counterpartyUpgradeFields = upgrade_1.UpgradeFields.fromAmino(object.counterparty_upgrade_fields);
        }
        if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
            message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
        }
        if (object.proof_channel !== undefined && object.proof_channel !== null) {
            message.proofChannel = (0, helpers_1.bytesFromBase64)(object.proof_channel);
        }
        if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
            message.proofUpgrade = (0, helpers_1.bytesFromBase64)(object.proof_upgrade);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        if (message.proposedUpgradeConnectionHops) {
            obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops.map(e => e);
        }
        else {
            obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops;
        }
        obj.counterparty_upgrade_fields = message.counterpartyUpgradeFields ? upgrade_1.UpgradeFields.toAmino(message.counterpartyUpgradeFields) : undefined;
        obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : undefined;
        obj.proof_channel = message.proofChannel ? (0, helpers_1.base64FromBytes)(message.proofChannel) : undefined;
        obj.proof_upgrade = message.proofUpgrade ? (0, helpers_1.base64FromBytes)(message.proofUpgrade) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeTry",
            value: exports.MsgChannelUpgradeTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
            value: exports.MsgChannelUpgradeTry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeTry.typeUrl, exports.MsgChannelUpgradeTry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeTry.aminoType, exports.MsgChannelUpgradeTry.typeUrl);
function createBaseMsgChannelUpgradeTryResponse() {
    return {
        upgrade: upgrade_1.Upgrade.fromPartial({}),
        upgradeSequence: BigInt(0),
        result: 0
    };
}
exports.MsgChannelUpgradeTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeTryResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTryResponse.typeUrl || upgrade_1.Upgrade.is(o.upgrade) && typeof o.upgradeSequence === "bigint" && (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTryResponse.typeUrl || upgrade_1.Upgrade.isAmino(o.upgrade) && typeof o.upgrade_sequence === "bigint" && (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgradeSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.upgradeSequence);
        }
        if (message.result !== 0) {
            writer.uint32(24).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.upgradeSequence = reader.uint64();
                    break;
                case 3:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTryResponse();
        message.upgrade = object.upgrade !== undefined && object.upgrade !== null ? upgrade_1.Upgrade.fromPartial(object.upgrade) : undefined;
        message.upgradeSequence = object.upgradeSequence !== undefined && object.upgradeSequence !== null ? BigInt(object.upgradeSequence.toString()) : BigInt(0);
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeTryResponse();
        if (object.upgrade !== undefined && object.upgrade !== null) {
            message.upgrade = upgrade_1.Upgrade.fromAmino(object.upgrade);
        }
        if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
            message.upgradeSequence = BigInt(object.upgrade_sequence);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgrade = message.upgrade ? upgrade_1.Upgrade.toAmino(message.upgrade) : undefined;
        obj.upgrade_sequence = message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeTryResponse",
            value: exports.MsgChannelUpgradeTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
            value: exports.MsgChannelUpgradeTryResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeTryResponse.typeUrl, exports.MsgChannelUpgradeTryResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeTryResponse.aminoType, exports.MsgChannelUpgradeTryResponse.typeUrl);
function createBaseMsgChannelUpgradeAck() {
    return {
        portId: "",
        channelId: "",
        counterpartyUpgrade: upgrade_1.Upgrade.fromPartial({}),
        proofChannel: new Uint8Array(),
        proofUpgrade: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
    aminoType: "cosmos-sdk/MsgChannelUpgradeAck",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeAck.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && upgrade_1.Upgrade.is(o.counterpartyUpgrade) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && upgrade_1.Upgrade.isAmino(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyUpgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.counterpartyUpgrade, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(34).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(42).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyUpgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proofChannel = reader.bytes();
                    break;
                case 5:
                    message.proofUpgrade = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeAck();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyUpgrade = object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null ? upgrade_1.Upgrade.fromPartial(object.counterpartyUpgrade) : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array();
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeAck();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
            message.counterpartyUpgrade = upgrade_1.Upgrade.fromAmino(object.counterparty_upgrade);
        }
        if (object.proof_channel !== undefined && object.proof_channel !== null) {
            message.proofChannel = (0, helpers_1.bytesFromBase64)(object.proof_channel);
        }
        if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
            message.proofUpgrade = (0, helpers_1.bytesFromBase64)(object.proof_upgrade);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_upgrade = message.counterpartyUpgrade ? upgrade_1.Upgrade.toAmino(message.counterpartyUpgrade) : undefined;
        obj.proof_channel = message.proofChannel ? (0, helpers_1.base64FromBytes)(message.proofChannel) : undefined;
        obj.proof_upgrade = message.proofUpgrade ? (0, helpers_1.base64FromBytes)(message.proofUpgrade) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeAck",
            value: exports.MsgChannelUpgradeAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
            value: exports.MsgChannelUpgradeAck.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeAck.typeUrl, exports.MsgChannelUpgradeAck);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeAck.aminoType, exports.MsgChannelUpgradeAck.typeUrl);
function createBaseMsgChannelUpgradeAckResponse() {
    return {
        result: 0
    };
}
exports.MsgChannelUpgradeAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeAckResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeAckResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeAckResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeAckResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeAckResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeAckResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeAckResponse",
            value: exports.MsgChannelUpgradeAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
            value: exports.MsgChannelUpgradeAckResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeAckResponse.typeUrl, exports.MsgChannelUpgradeAckResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeAckResponse.aminoType, exports.MsgChannelUpgradeAckResponse.typeUrl);
function createBaseMsgChannelUpgradeConfirm() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelState: 0,
        counterpartyUpgrade: upgrade_1.Upgrade.fromPartial({}),
        proofChannel: new Uint8Array(),
        proofUpgrade: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
    aminoType: "cosmos-sdk/MsgChannelUpgradeConfirm",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeConfirm.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (0, helpers_1.isSet)(o.counterpartyChannelState) && upgrade_1.Upgrade.is(o.counterpartyUpgrade) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && (o.proofUpgrade instanceof Uint8Array || typeof o.proofUpgrade === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (0, helpers_1.isSet)(o.counterparty_channel_state) && upgrade_1.Upgrade.isAmino(o.counterparty_upgrade) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && (o.proof_upgrade instanceof Uint8Array || typeof o.proof_upgrade === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelState !== 0) {
            writer.uint32(24).int32(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgrade !== undefined) {
            upgrade_1.Upgrade.encode(message.counterpartyUpgrade, writer.uint32(34).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(42).bytes(message.proofChannel);
        }
        if (message.proofUpgrade.length !== 0) {
            writer.uint32(50).bytes(message.proofUpgrade);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(66).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannelState = reader.int32();
                    break;
                case 4:
                    message.counterpartyUpgrade = upgrade_1.Upgrade.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proofChannel = reader.bytes();
                    break;
                case 6:
                    message.proofUpgrade = reader.bytes();
                    break;
                case 7:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeConfirm();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
        message.counterpartyUpgrade = object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null ? upgrade_1.Upgrade.fromPartial(object.counterpartyUpgrade) : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array();
        message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
            message.counterpartyChannelState = object.counterparty_channel_state;
        }
        if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
            message.counterpartyUpgrade = upgrade_1.Upgrade.fromAmino(object.counterparty_upgrade);
        }
        if (object.proof_channel !== undefined && object.proof_channel !== null) {
            message.proofChannel = (0, helpers_1.bytesFromBase64)(object.proof_channel);
        }
        if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
            message.proofUpgrade = (0, helpers_1.bytesFromBase64)(object.proof_upgrade);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
        obj.counterparty_upgrade = message.counterpartyUpgrade ? upgrade_1.Upgrade.toAmino(message.counterpartyUpgrade) : undefined;
        obj.proof_channel = message.proofChannel ? (0, helpers_1.base64FromBytes)(message.proofChannel) : undefined;
        obj.proof_upgrade = message.proofUpgrade ? (0, helpers_1.base64FromBytes)(message.proofUpgrade) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeConfirm",
            value: exports.MsgChannelUpgradeConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
            value: exports.MsgChannelUpgradeConfirm.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeConfirm.typeUrl, exports.MsgChannelUpgradeConfirm);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeConfirm.aminoType, exports.MsgChannelUpgradeConfirm.typeUrl);
function createBaseMsgChannelUpgradeConfirmResponse() {
    return {
        result: 0
    };
}
exports.MsgChannelUpgradeConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeConfirmResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeConfirmResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeConfirmResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeConfirmResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
            value: exports.MsgChannelUpgradeConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
            value: exports.MsgChannelUpgradeConfirmResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeConfirmResponse.typeUrl, exports.MsgChannelUpgradeConfirmResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeConfirmResponse.aminoType, exports.MsgChannelUpgradeConfirmResponse.typeUrl);
function createBaseMsgChannelUpgradeOpen() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannelState: 0,
        counterpartyUpgradeSequence: BigInt(0),
        proofChannel: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeOpen = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
    aminoType: "cosmos-sdk/MsgChannelUpgradeOpen",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeOpen.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && (0, helpers_1.isSet)(o.counterpartyChannelState) && typeof o.counterpartyUpgradeSequence === "bigint" && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeOpen.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (0, helpers_1.isSet)(o.counterparty_channel_state) && typeof o.counterparty_upgrade_sequence === "bigint" && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannelState !== 0) {
            writer.uint32(24).int32(message.counterpartyChannelState);
        }
        if (message.counterpartyUpgradeSequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(42).bytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeOpen();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannelState = reader.int32();
                    break;
                case 4:
                    message.counterpartyUpgradeSequence = reader.uint64();
                    break;
                case 5:
                    message.proofChannel = reader.bytes();
                    break;
                case 6:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeOpen();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
        message.counterpartyUpgradeSequence = object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null ? BigInt(object.counterpartyUpgradeSequence.toString()) : BigInt(0);
        message.proofChannel = object.proofChannel ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeOpen();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
            message.counterpartyChannelState = object.counterparty_channel_state;
        }
        if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
            message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
        }
        if (object.proof_channel !== undefined && object.proof_channel !== null) {
            message.proofChannel = (0, helpers_1.bytesFromBase64)(object.proof_channel);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_channel_state = message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
        obj.counterparty_upgrade_sequence = message.counterpartyUpgradeSequence !== BigInt(0) ? message.counterpartyUpgradeSequence?.toString() : undefined;
        obj.proof_channel = message.proofChannel ? (0, helpers_1.base64FromBytes)(message.proofChannel) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeOpen.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeOpen",
            value: exports.MsgChannelUpgradeOpen.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeOpen.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeOpen.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
            value: exports.MsgChannelUpgradeOpen.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeOpen.typeUrl, exports.MsgChannelUpgradeOpen);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeOpen.aminoType, exports.MsgChannelUpgradeOpen.typeUrl);
function createBaseMsgChannelUpgradeOpenResponse() {
    return {};
}
exports.MsgChannelUpgradeOpenResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeOpenResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeOpenResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeOpenResponse();
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
        const message = createBaseMsgChannelUpgradeOpenResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelUpgradeOpenResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeOpenResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
            value: exports.MsgChannelUpgradeOpenResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeOpenResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeOpenResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
            value: exports.MsgChannelUpgradeOpenResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeOpenResponse.typeUrl, exports.MsgChannelUpgradeOpenResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeOpenResponse.aminoType, exports.MsgChannelUpgradeOpenResponse.typeUrl);
function createBaseMsgChannelUpgradeTimeout() {
    return {
        portId: "",
        channelId: "",
        counterpartyChannel: channel_1.Channel.fromPartial({}),
        proofChannel: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
    aminoType: "cosmos-sdk/MsgChannelUpgradeTimeout",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTimeout.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && channel_1.Channel.is(o.counterpartyChannel) && (o.proofChannel instanceof Uint8Array || typeof o.proofChannel === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeTimeout.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && channel_1.Channel.isAmino(o.counterparty_channel) && (o.proof_channel instanceof Uint8Array || typeof o.proof_channel === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.counterpartyChannel !== undefined) {
            channel_1.Channel.encode(message.counterpartyChannel, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofChannel.length !== 0) {
            writer.uint32(34).bytes(message.proofChannel);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.counterpartyChannel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proofChannel = reader.bytes();
                    break;
                case 5:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeTimeout();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.counterpartyChannel = object.counterpartyChannel !== undefined && object.counterpartyChannel !== null ? channel_1.Channel.fromPartial(object.counterpartyChannel) : undefined;
        message.proofChannel = object.proofChannel ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeTimeout();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.counterparty_channel !== undefined && object.counterparty_channel !== null) {
            message.counterpartyChannel = channel_1.Channel.fromAmino(object.counterparty_channel);
        }
        if (object.proof_channel !== undefined && object.proof_channel !== null) {
            message.proofChannel = (0, helpers_1.bytesFromBase64)(object.proof_channel);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.counterparty_channel = message.counterpartyChannel ? channel_1.Channel.toAmino(message.counterpartyChannel) : undefined;
        obj.proof_channel = message.proofChannel ? (0, helpers_1.base64FromBytes)(message.proofChannel) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeTimeout",
            value: exports.MsgChannelUpgradeTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeTimeout.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
            value: exports.MsgChannelUpgradeTimeout.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeTimeout.typeUrl, exports.MsgChannelUpgradeTimeout);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeTimeout.aminoType, exports.MsgChannelUpgradeTimeout.typeUrl);
function createBaseMsgChannelUpgradeTimeoutResponse() {
    return {};
}
exports.MsgChannelUpgradeTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeTimeoutResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeTimeoutResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeTimeoutResponse();
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
        const message = createBaseMsgChannelUpgradeTimeoutResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelUpgradeTimeoutResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
            value: exports.MsgChannelUpgradeTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
            value: exports.MsgChannelUpgradeTimeoutResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeTimeoutResponse.typeUrl, exports.MsgChannelUpgradeTimeoutResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeTimeoutResponse.aminoType, exports.MsgChannelUpgradeTimeoutResponse.typeUrl);
function createBaseMsgChannelUpgradeCancel() {
    return {
        portId: "",
        channelId: "",
        errorReceipt: upgrade_1.ErrorReceipt.fromPartial({}),
        proofErrorReceipt: new Uint8Array(),
        proofHeight: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelUpgradeCancel = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
    aminoType: "cosmos-sdk/MsgChannelUpgradeCancel",
    is(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeCancel.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && upgrade_1.ErrorReceipt.is(o.errorReceipt) && (o.proofErrorReceipt instanceof Uint8Array || typeof o.proofErrorReceipt === "string") && client_1.Height.is(o.proofHeight) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgChannelUpgradeCancel.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && upgrade_1.ErrorReceipt.isAmino(o.error_receipt) && (o.proof_error_receipt instanceof Uint8Array || typeof o.proof_error_receipt === "string") && client_1.Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.errorReceipt !== undefined) {
            upgrade_1.ErrorReceipt.encode(message.errorReceipt, writer.uint32(26).fork()).ldelim();
        }
        if (message.proofErrorReceipt.length !== 0) {
            writer.uint32(34).bytes(message.proofErrorReceipt);
        }
        if (message.proofHeight !== undefined) {
            client_1.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.errorReceipt = upgrade_1.ErrorReceipt.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proofErrorReceipt = reader.bytes();
                    break;
                case 5:
                    message.proofHeight = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelUpgradeCancel();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.errorReceipt = object.errorReceipt !== undefined && object.errorReceipt !== null ? upgrade_1.ErrorReceipt.fromPartial(object.errorReceipt) : undefined;
        message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? client_1.Height.fromPartial(object.proofHeight) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelUpgradeCancel();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.error_receipt !== undefined && object.error_receipt !== null) {
            message.errorReceipt = upgrade_1.ErrorReceipt.fromAmino(object.error_receipt);
        }
        if (object.proof_error_receipt !== undefined && object.proof_error_receipt !== null) {
            message.proofErrorReceipt = (0, helpers_1.bytesFromBase64)(object.proof_error_receipt);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proofHeight = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.error_receipt = message.errorReceipt ? upgrade_1.ErrorReceipt.toAmino(message.errorReceipt) : undefined;
        obj.proof_error_receipt = message.proofErrorReceipt ? (0, helpers_1.base64FromBytes)(message.proofErrorReceipt) : undefined;
        obj.proof_height = message.proofHeight ? client_1.Height.toAmino(message.proofHeight) : {};
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeCancel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeCancel",
            value: exports.MsgChannelUpgradeCancel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeCancel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
            value: exports.MsgChannelUpgradeCancel.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeCancel.typeUrl, exports.MsgChannelUpgradeCancel);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeCancel.aminoType, exports.MsgChannelUpgradeCancel.typeUrl);
function createBaseMsgChannelUpgradeCancelResponse() {
    return {};
}
exports.MsgChannelUpgradeCancelResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
    aminoType: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeCancelResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgChannelUpgradeCancelResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelUpgradeCancelResponse();
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
        const message = createBaseMsgChannelUpgradeCancelResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelUpgradeCancelResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelUpgradeCancelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
            value: exports.MsgChannelUpgradeCancelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelUpgradeCancelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelUpgradeCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
            value: exports.MsgChannelUpgradeCancelResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgChannelUpgradeCancelResponse.typeUrl, exports.MsgChannelUpgradeCancelResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgChannelUpgradeCancelResponse.aminoType, exports.MsgChannelUpgradeCancelResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: client_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && client_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && client_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
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
            typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
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
    typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
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
            type: "cosmos-sdk/MsgUpdateParamsResponse",
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
            typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
function createBaseMsgPruneAcknowledgements() {
    return {
        portId: "",
        channelId: "",
        limit: BigInt(0),
        signer: ""
    };
}
exports.MsgPruneAcknowledgements = {
    typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
    aminoType: "cosmos-sdk/MsgPruneAcknowledgements",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPruneAcknowledgements.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.limit === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPruneAcknowledgements.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.limit === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAcknowledgements();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAcknowledgements();
        message.portId = object.portId ?? "";
        message.channelId = object.channelId ?? "";
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPruneAcknowledgements();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.portId = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channelId = object.channel_id;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.portId === "" ? undefined : message.portId;
        obj.channel_id = message.channelId === "" ? undefined : message.channelId;
        obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
        obj.signer = message.signer === "" ? undefined : message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPruneAcknowledgements.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAcknowledgements",
            value: exports.MsgPruneAcknowledgements.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgPruneAcknowledgements.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPruneAcknowledgements.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
            value: exports.MsgPruneAcknowledgements.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPruneAcknowledgements.typeUrl, exports.MsgPruneAcknowledgements);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgPruneAcknowledgements.aminoType, exports.MsgPruneAcknowledgements.typeUrl);
function createBaseMsgPruneAcknowledgementsResponse() {
    return {
        totalPrunedSequences: BigInt(0),
        totalRemainingSequences: BigInt(0)
    };
}
exports.MsgPruneAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
    aminoType: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPruneAcknowledgementsResponse.typeUrl || typeof o.totalPrunedSequences === "bigint" && typeof o.totalRemainingSequences === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPruneAcknowledgementsResponse.typeUrl || typeof o.total_pruned_sequences === "bigint" && typeof o.total_remaining_sequences === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalPrunedSequences !== BigInt(0)) {
            writer.uint32(8).uint64(message.totalPrunedSequences);
        }
        if (message.totalRemainingSequences !== BigInt(0)) {
            writer.uint32(16).uint64(message.totalRemainingSequences);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalPrunedSequences = reader.uint64();
                    break;
                case 2:
                    message.totalRemainingSequences = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAcknowledgementsResponse();
        message.totalPrunedSequences = object.totalPrunedSequences !== undefined && object.totalPrunedSequences !== null ? BigInt(object.totalPrunedSequences.toString()) : BigInt(0);
        message.totalRemainingSequences = object.totalRemainingSequences !== undefined && object.totalRemainingSequences !== null ? BigInt(object.totalRemainingSequences.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPruneAcknowledgementsResponse();
        if (object.total_pruned_sequences !== undefined && object.total_pruned_sequences !== null) {
            message.totalPrunedSequences = BigInt(object.total_pruned_sequences);
        }
        if (object.total_remaining_sequences !== undefined && object.total_remaining_sequences !== null) {
            message.totalRemainingSequences = BigInt(object.total_remaining_sequences);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_pruned_sequences = message.totalPrunedSequences !== BigInt(0) ? message.totalPrunedSequences?.toString() : undefined;
        obj.total_remaining_sequences = message.totalRemainingSequences !== BigInt(0) ? message.totalRemainingSequences?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPruneAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
            value: exports.MsgPruneAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgPruneAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPruneAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
            value: exports.MsgPruneAcknowledgementsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPruneAcknowledgementsResponse.typeUrl, exports.MsgPruneAcknowledgementsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgPruneAcknowledgementsResponse.aminoType, exports.MsgPruneAcknowledgementsResponse.typeUrl);
