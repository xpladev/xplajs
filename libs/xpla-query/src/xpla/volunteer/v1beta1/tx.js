"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnregisterVolunteerValidatorResponse = exports.MsgUnregisterVolunteerValidator = exports.MsgRegisterVolunteerValidatorResponse = exports.MsgRegisterVolunteerValidator = void 0;
const staking_1 = require("../../../cosmos/staking/v1beta1/staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const proto_signing_1 = require("@cosmjs/proto-signing");
const registry_1 = require("../../../registry");
function createBaseMsgRegisterVolunteerValidator() {
    return {
        authority: "",
        validatorDescription: staking_1.Description.fromPartial({}),
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRegisterVolunteerValidator = {
    typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
    aminoType: "xpladev/MsgRegisterVolunteerValidator",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterVolunteerValidator.typeUrl || typeof o.authority === "string" && staking_1.Description.is(o.validatorDescription) && typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterVolunteerValidator.typeUrl || typeof o.authority === "string" && staking_1.Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.validatorDescription !== undefined) {
            staking_1.Description.encode(message.validatorDescription, writer.uint32(18).fork()).ldelim();
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(26).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(34).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(42).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterVolunteerValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.validatorDescription = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorAddress = reader.string();
                    break;
                case 4:
                    message.validatorAddress = reader.string();
                    break;
                case 5:
                    message.pubkey = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 6:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterVolunteerValidator();
        message.authority = object.authority ?? "";
        message.validatorDescription = object.validatorDescription !== undefined && object.validatorDescription !== null ? staking_1.Description.fromPartial(object.validatorDescription) : undefined;
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterVolunteerValidator();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.validator_description !== undefined && object.validator_description !== null) {
            message.validatorDescription = staking_1.Description.fromAmino(object.validator_description);
        }
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = (0, proto_signing_1.encodePubkey)(object.pubkey);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.validator_description = message.validatorDescription ? staking_1.Description.toAmino(message.validatorDescription) : staking_1.Description.toAmino(staking_1.Description.fromPartial({}));
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.pubkey = message.pubkey ? (0, proto_signing_1.decodePubkey)(message.pubkey) : undefined;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterVolunteerValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/MsgRegisterVolunteerValidator",
            value: exports.MsgRegisterVolunteerValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterVolunteerValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterVolunteerValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
            value: exports.MsgRegisterVolunteerValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterVolunteerValidator.typeUrl, exports.MsgRegisterVolunteerValidator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRegisterVolunteerValidator.aminoType, exports.MsgRegisterVolunteerValidator.typeUrl);
function createBaseMsgRegisterVolunteerValidatorResponse() {
    return {};
}
exports.MsgRegisterVolunteerValidatorResponse = {
    typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgRegisterVolunteerValidatorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgRegisterVolunteerValidatorResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterVolunteerValidatorResponse();
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
        const message = createBaseMsgRegisterVolunteerValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRegisterVolunteerValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterVolunteerValidatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterVolunteerValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterVolunteerValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse",
            value: exports.MsgRegisterVolunteerValidatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterVolunteerValidatorResponse.typeUrl, exports.MsgRegisterVolunteerValidatorResponse);
function createBaseMsgUnregisterVolunteerValidator() {
    return {
        authority: "",
        validatorAddress: ""
    };
}
exports.MsgUnregisterVolunteerValidator = {
    typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
    aminoType: "xpladev/MsgUnregisterVolunteerValidator",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUnregisterVolunteerValidator.typeUrl || typeof o.authority === "string" && typeof o.validatorAddress === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUnregisterVolunteerValidator.typeUrl || typeof o.authority === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnregisterVolunteerValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUnregisterVolunteerValidator();
        message.authority = object.authority ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUnregisterVolunteerValidator();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnregisterVolunteerValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/MsgUnregisterVolunteerValidator",
            value: exports.MsgUnregisterVolunteerValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnregisterVolunteerValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnregisterVolunteerValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
            value: exports.MsgUnregisterVolunteerValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnregisterVolunteerValidator.typeUrl, exports.MsgUnregisterVolunteerValidator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUnregisterVolunteerValidator.aminoType, exports.MsgUnregisterVolunteerValidator.typeUrl);
function createBaseMsgUnregisterVolunteerValidatorResponse() {
    return {};
}
exports.MsgUnregisterVolunteerValidatorResponse = {
    typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUnregisterVolunteerValidatorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUnregisterVolunteerValidatorResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnregisterVolunteerValidatorResponse();
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
        const message = createBaseMsgUnregisterVolunteerValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUnregisterVolunteerValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnregisterVolunteerValidatorResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUnregisterVolunteerValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnregisterVolunteerValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse",
            value: exports.MsgUnregisterVolunteerValidatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUnregisterVolunteerValidatorResponse.typeUrl, exports.MsgUnregisterVolunteerValidatorResponse);
