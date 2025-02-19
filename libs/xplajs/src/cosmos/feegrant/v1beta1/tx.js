"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgPruneAllowancesResponse = exports.MsgPruneAllowances = exports.MsgRevokeAllowanceResponse = exports.MsgRevokeAllowance = exports.MsgGrantAllowanceResponse = exports.MsgGrantAllowance = void 0;
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
exports.MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgGrantAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgGrantAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        obj.allowance = message.allowance ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: exports.MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: exports.MsgGrantAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrantAllowance.typeUrl, exports.MsgGrantAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrantAllowance.aminoType, exports.MsgGrantAllowance.typeUrl);
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
exports.MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    aminoType: "cosmos-sdk/MsgGrantAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgGrantAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgGrantAllowanceResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: exports.MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgGrantAllowanceResponse.typeUrl, exports.MsgGrantAllowanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgGrantAllowanceResponse.aminoType, exports.MsgGrantAllowanceResponse.typeUrl);
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
exports.MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRevokeAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter === "" ? undefined : message.granter;
        obj.grantee = message.grantee === "" ? undefined : message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: exports.MsgRevokeAllowance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevokeAllowance.typeUrl, exports.MsgRevokeAllowance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevokeAllowance.aminoType, exports.MsgRevokeAllowance.typeUrl);
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
exports.MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    aminoType: "cosmos-sdk/MsgRevokeAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgRevokeAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgRevokeAllowanceResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: exports.MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRevokeAllowanceResponse.typeUrl, exports.MsgRevokeAllowanceResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRevokeAllowanceResponse.aminoType, exports.MsgRevokeAllowanceResponse.typeUrl);
function createBaseMsgPruneAllowances() {
    return {
        pruner: ""
    };
}
exports.MsgPruneAllowances = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
    aminoType: "cosmos-sdk/MsgPruneAllowances",
    is(o) {
        return o && (o.$typeUrl === exports.MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pruner !== "") {
            writer.uint32(10).string(message.pruner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAllowances();
        message.pruner = object.pruner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPruneAllowances();
        if (object.pruner !== undefined && object.pruner !== null) {
            message.pruner = object.pruner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pruner = message.pruner === "" ? undefined : message.pruner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPruneAllowances.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowances",
            value: exports.MsgPruneAllowances.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgPruneAllowances.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPruneAllowances.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
            value: exports.MsgPruneAllowances.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPruneAllowances.typeUrl, exports.MsgPruneAllowances);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgPruneAllowances.aminoType, exports.MsgPruneAllowances.typeUrl);
function createBaseMsgPruneAllowancesResponse() {
    return {};
}
exports.MsgPruneAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
    aminoType: "cosmos-sdk/MsgPruneAllowancesResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgPruneAllowancesResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgPruneAllowancesResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowancesResponse();
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
        const message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgPruneAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowancesResponse",
            value: exports.MsgPruneAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgPruneAllowancesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgPruneAllowancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
            value: exports.MsgPruneAllowancesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgPruneAllowancesResponse.typeUrl, exports.MsgPruneAllowancesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgPruneAllowancesResponse.aminoType, exports.MsgPruneAllowancesResponse.typeUrl);
