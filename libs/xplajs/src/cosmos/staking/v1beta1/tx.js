"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgCancelUnbondingDelegationResponse = exports.MsgCancelUnbondingDelegation = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = void 0;
const staking_1 = require("./staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const proto_signing_1 = require("@cosmjs/proto-signing");
const registry_1 = require("../../../registry");
function createBaseMsgCreateValidator() {
    return {
        description: staking_1.Description.fromPartial({}),
        commission: staking_1.CommissionRates.fromPartial({}),
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        value: coin_1.Coin.fromPartial({})
    };
}
exports.MsgCreateValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
    aminoType: "cosmos-sdk/MsgCreateValidator",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateValidator.typeUrl || staking_1.Description.is(o.description) && staking_1.CommissionRates.is(o.commission) && typeof o.minSelfDelegation === "string" && typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.value));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateValidator.typeUrl || staking_1.Description.isAmino(o.description) && staking_1.CommissionRates.isAmino(o.commission) && typeof o.min_self_delegation === "string" && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.value));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minSelfDelegation = reader.string();
                    break;
                case 4:
                    message.delegatorAddress = reader.string();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.pubkey = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? staking_1.Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? staking_1.CommissionRates.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? coin_1.Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateValidator();
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromAmino(object.description);
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = staking_1.CommissionRates.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
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
        if (object.value !== undefined && object.value !== null) {
            message.value = coin_1.Coin.fromAmino(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? staking_1.Description.toAmino(message.description) : staking_1.Description.toAmino(staking_1.Description.fromPartial({}));
        obj.commission = message.commission ? staking_1.CommissionRates.toAmino(message.commission) : staking_1.CommissionRates.toAmino(staking_1.CommissionRates.fromPartial({}));
        obj.min_self_delegation = message.minSelfDelegation ?? "";
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.pubkey = message.pubkey ? (0, proto_signing_1.decodePubkey)(message.pubkey) : undefined;
        obj.value = message.value ? coin_1.Coin.toAmino(message.value) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidator",
            value: exports.MsgCreateValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: exports.MsgCreateValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateValidator.typeUrl, exports.MsgCreateValidator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateValidator.aminoType, exports.MsgCreateValidator.typeUrl);
function createBaseMsgCreateValidatorResponse() {
    return {};
}
exports.MsgCreateValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
    aminoType: "cosmos-sdk/MsgCreateValidatorResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreateValidatorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreateValidatorResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidatorResponse();
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
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidatorResponse",
            value: exports.MsgCreateValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
            value: exports.MsgCreateValidatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateValidatorResponse.typeUrl, exports.MsgCreateValidatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateValidatorResponse.aminoType, exports.MsgCreateValidatorResponse.typeUrl);
function createBaseMsgEditValidator() {
    return {
        description: staking_1.Description.fromPartial({}),
        validatorAddress: "",
        commissionRate: "",
        minSelfDelegation: ""
    };
}
exports.MsgEditValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
    aminoType: "cosmos-sdk/MsgEditValidator",
    is(o) {
        return o && (o.$typeUrl === exports.MsgEditValidator.typeUrl || staking_1.Description.is(o.description) && typeof o.validatorAddress === "string" && typeof o.commissionRate === "string" && typeof o.minSelfDelegation === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgEditValidator.typeUrl || staking_1.Description.isAmino(o.description) && typeof o.validator_address === "string" && typeof o.commission_rate === "string" && typeof o.min_self_delegation === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
                    message.minSelfDelegation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? staking_1.Description.fromPartial(object.description) : undefined;
        message.validatorAddress = object.validatorAddress ?? "";
        message.commissionRate = object.commissionRate ?? "";
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEditValidator();
        if (object.description !== undefined && object.description !== null) {
            message.description = staking_1.Description.fromAmino(object.description);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.commission_rate !== undefined && object.commission_rate !== null) {
            message.commissionRate = object.commission_rate;
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? staking_1.Description.toAmino(message.description) : staking_1.Description.toAmino(staking_1.Description.fromPartial({}));
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.commission_rate = message.commissionRate === "" ? undefined : message.commissionRate;
        obj.min_self_delegation = message.minSelfDelegation === "" ? undefined : message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEditValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidator",
            value: exports.MsgEditValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEditValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEditValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: exports.MsgEditValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgEditValidator.typeUrl, exports.MsgEditValidator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgEditValidator.aminoType, exports.MsgEditValidator.typeUrl);
function createBaseMsgEditValidatorResponse() {
    return {};
}
exports.MsgEditValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
    aminoType: "cosmos-sdk/MsgEditValidatorResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgEditValidatorResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgEditValidatorResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidatorResponse();
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
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEditValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidatorResponse",
            value: exports.MsgEditValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEditValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEditValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
            value: exports.MsgEditValidatorResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgEditValidatorResponse.typeUrl, exports.MsgEditValidatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgEditValidatorResponse.aminoType, exports.MsgEditValidatorResponse.typeUrl);
function createBaseMsgDelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    aminoType: "cosmos-sdk/MsgDelegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgDelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegate",
            value: exports.MsgDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: exports.MsgDelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegate.typeUrl, exports.MsgDelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegate.aminoType, exports.MsgDelegate.typeUrl);
function createBaseMsgDelegateResponse() {
    return {};
}
exports.MsgDelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
    aminoType: "cosmos-sdk/MsgDelegateResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgDelegateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDelegateResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateResponse();
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
        const message = createBaseMsgDelegateResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDelegateResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegateResponse",
            value: exports.MsgDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
            value: exports.MsgDelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDelegateResponse.typeUrl, exports.MsgDelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDelegateResponse.aminoType, exports.MsgDelegateResponse.typeUrl);
function createBaseMsgBeginRedelegate() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgBeginRedelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginRedelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorSrcAddress === "string" && typeof o.validatorDstAddress === "string" && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginRedelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
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
        const message = createBaseMsgBeginRedelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginRedelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress === "" ? undefined : message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress === "" ? undefined : message.validatorDstAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginRedelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegate",
            value: exports.MsgBeginRedelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginRedelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginRedelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: exports.MsgBeginRedelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginRedelegate.typeUrl, exports.MsgBeginRedelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginRedelegate.aminoType, exports.MsgBeginRedelegate.typeUrl);
function createBaseMsgBeginRedelegateResponse() {
    return {
        completionTime: new Date()
    };
}
exports.MsgBeginRedelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
    aminoType: "cosmos-sdk/MsgBeginRedelegateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgBeginRedelegateResponse.typeUrl || timestamp_1.Timestamp.is(o.completionTime));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgBeginRedelegateResponse.typeUrl || timestamp_1.Timestamp.isAmino(o.completion_time));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        message.completionTime = object.completionTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : new Date();
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginRedelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegateResponse",
            value: exports.MsgBeginRedelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginRedelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginRedelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
            value: exports.MsgBeginRedelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgBeginRedelegateResponse.typeUrl, exports.MsgBeginRedelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgBeginRedelegateResponse.aminoType, exports.MsgBeginRedelegateResponse.typeUrl);
function createBaseMsgUndelegate() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUndelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    aminoType: "cosmos-sdk/MsgUndelegate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUndelegate.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUndelegate.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgUndelegate();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegate();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegate",
            value: exports.MsgUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: exports.MsgUndelegate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegate.typeUrl, exports.MsgUndelegate);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegate.aminoType, exports.MsgUndelegate.typeUrl);
function createBaseMsgUndelegateResponse() {
    return {
        completionTime: new Date(),
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUndelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
    aminoType: "cosmos-sdk/MsgUndelegateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUndelegateResponse.typeUrl || timestamp_1.Timestamp.is(o.completionTime) && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUndelegateResponse.typeUrl || timestamp_1.Timestamp.isAmino(o.completion_time) && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        const message = createBaseMsgUndelegateResponse();
        message.completionTime = object.completionTime ?? undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUndelegateResponse();
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : new Date();
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegateResponse",
            value: exports.MsgUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
            value: exports.MsgUndelegateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUndelegateResponse.typeUrl, exports.MsgUndelegateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUndelegateResponse.aminoType, exports.MsgUndelegateResponse.typeUrl);
function createBaseMsgCancelUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: coin_1.Coin.fromPartial({}),
        creationHeight: BigInt(0)
    };
}
exports.MsgCancelUnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegation",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCancelUnbondingDelegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount) && typeof o.creationHeight === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCancelUnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount) && typeof o.creation_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(32).int64(message.creationHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUnbondingDelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.creationHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelUnbondingDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_1.Coin.fromAmino(object.amount);
        }
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        obj.creation_height = message.creationHeight !== BigInt(0) ? message.creationHeight?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelUnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUnbondingDelegation",
            value: exports.MsgCancelUnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelUnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelUnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",
            value: exports.MsgCancelUnbondingDelegation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelUnbondingDelegation.typeUrl, exports.MsgCancelUnbondingDelegation);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelUnbondingDelegation.aminoType, exports.MsgCancelUnbondingDelegation.typeUrl);
function createBaseMsgCancelUnbondingDelegationResponse() {
    return {};
}
exports.MsgCancelUnbondingDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
    aminoType: "cosmos-sdk/MsgCancelUnbondingDelegationResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCancelUnbondingDelegationResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCancelUnbondingDelegationResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelUnbondingDelegationResponse();
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
        const message = createBaseMsgCancelUnbondingDelegationResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelUnbondingDelegationResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelUnbondingDelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCancelUnbondingDelegationResponse",
            value: exports.MsgCancelUnbondingDelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCancelUnbondingDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelUnbondingDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegationResponse",
            value: exports.MsgCancelUnbondingDelegationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelUnbondingDelegationResponse.typeUrl, exports.MsgCancelUnbondingDelegationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCancelUnbondingDelegationResponse.aminoType, exports.MsgCancelUnbondingDelegationResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: staking_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
    aminoType: "cosmos-sdk/x/staking/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && staking_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && staking_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = staking_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? staking_1.Params.toAmino(message.params) : staking_1.Params.toAmino(staking_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/staking/MsgUpdateParams",
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
            typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParams",
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
    typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParamsResponse",
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
            typeUrl: "/cosmos.staking.v1beta1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
