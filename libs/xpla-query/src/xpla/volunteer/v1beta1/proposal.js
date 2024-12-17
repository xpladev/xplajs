"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnregisterVolunteerValidatorProposalWithDeposit = exports.UnregisterVolunteerValidatorProposal = exports.RegisterVolunteerValidatorProposalWithDeposit = exports.RegisterVolunteerValidatorProposal = void 0;
const staking_1 = require("../../../cosmos/staking/v1beta1/staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const proto_signing_1 = require("@cosmjs/proto-signing");
const registry_1 = require("../../../registry");
function createBaseRegisterVolunteerValidatorProposal() {
    return {
        title: "",
        description: "",
        validatorDescription: staking_1.Description.fromPartial({}),
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.RegisterVolunteerValidatorProposal = {
    typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal",
    aminoType: "xpladev/RegisterVolunteerValidatorProposal",
    is(o) {
        return o && (o.$typeUrl === exports.RegisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && staking_1.Description.is(o.validatorDescription) && typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RegisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && staking_1.Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validatorDescription !== undefined) {
            staking_1.Description.encode(message.validatorDescription, writer.uint32(26).fork()).ldelim();
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
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterVolunteerValidatorProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.validatorDescription = staking_1.Description.decode(reader, reader.uint32());
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
        const message = createBaseRegisterVolunteerValidatorProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.validatorDescription = object.validatorDescription !== undefined && object.validatorDescription !== null ? staking_1.Description.fromPartial(object.validatorDescription) : undefined;
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterVolunteerValidatorProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.validator_description = message.validatorDescription ? staking_1.Description.toAmino(message.validatorDescription) : staking_1.Description.toAmino(staking_1.Description.fromPartial({}));
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.pubkey = message.pubkey ? (0, proto_signing_1.decodePubkey)(message.pubkey) : undefined;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RegisterVolunteerValidatorProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/RegisterVolunteerValidatorProposal",
            value: exports.RegisterVolunteerValidatorProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RegisterVolunteerValidatorProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RegisterVolunteerValidatorProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal",
            value: exports.RegisterVolunteerValidatorProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RegisterVolunteerValidatorProposal.typeUrl, exports.RegisterVolunteerValidatorProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RegisterVolunteerValidatorProposal.aminoType, exports.RegisterVolunteerValidatorProposal.typeUrl);
function createBaseRegisterVolunteerValidatorProposalWithDeposit() {
    return {
        title: "",
        description: "",
        validatorDescription: staking_1.Description.fromPartial({}),
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        amount: coin_1.Coin.fromPartial({}),
        deposit: ""
    };
}
exports.RegisterVolunteerValidatorProposalWithDeposit = {
    typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit",
    aminoType: "xpladev/RegisterVolunteerValidatorProposalWithDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.RegisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && staking_1.Description.is(o.validatorDescription) && typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.amount) && typeof o.deposit === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RegisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && staking_1.Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.amount) && typeof o.deposit === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validatorDescription !== undefined) {
            staking_1.Description.encode(message.validatorDescription, writer.uint32(26).fork()).ldelim();
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
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
        }
        if (message.deposit !== "") {
            writer.uint32(66).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.validatorDescription = staking_1.Description.decode(reader, reader.uint32());
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.validatorDescription = object.validatorDescription !== undefined && object.validatorDescription !== null ? staking_1.Description.fromPartial(object.validatorDescription) : undefined;
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
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
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.validator_description = message.validatorDescription ? staking_1.Description.toAmino(message.validatorDescription) : staking_1.Description.toAmino(staking_1.Description.fromPartial({}));
        obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.pubkey = message.pubkey ? (0, proto_signing_1.decodePubkey)(message.pubkey) : undefined;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : coin_1.Coin.toAmino(coin_1.Coin.fromPartial({}));
        obj.deposit = message.deposit === "" ? undefined : message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RegisterVolunteerValidatorProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/RegisterVolunteerValidatorProposalWithDeposit",
            value: exports.RegisterVolunteerValidatorProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RegisterVolunteerValidatorProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.RegisterVolunteerValidatorProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit",
            value: exports.RegisterVolunteerValidatorProposalWithDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RegisterVolunteerValidatorProposalWithDeposit.typeUrl, exports.RegisterVolunteerValidatorProposalWithDeposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RegisterVolunteerValidatorProposalWithDeposit.aminoType, exports.RegisterVolunteerValidatorProposalWithDeposit.typeUrl);
function createBaseUnregisterVolunteerValidatorProposal() {
    return {
        title: "",
        description: "",
        validatorAddress: ""
    };
}
exports.UnregisterVolunteerValidatorProposal = {
    typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal",
    aminoType: "xpladev/UnregisterVolunteerValidatorProposal",
    is(o) {
        return o && (o.$typeUrl === exports.UnregisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validatorAddress === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnregisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(26).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnregisterVolunteerValidatorProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
        const message = createBaseUnregisterVolunteerValidatorProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnregisterVolunteerValidatorProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnregisterVolunteerValidatorProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/UnregisterVolunteerValidatorProposal",
            value: exports.UnregisterVolunteerValidatorProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnregisterVolunteerValidatorProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UnregisterVolunteerValidatorProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal",
            value: exports.UnregisterVolunteerValidatorProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnregisterVolunteerValidatorProposal.typeUrl, exports.UnregisterVolunteerValidatorProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnregisterVolunteerValidatorProposal.aminoType, exports.UnregisterVolunteerValidatorProposal.typeUrl);
function createBaseUnregisterVolunteerValidatorProposalWithDeposit() {
    return {
        title: "",
        description: "",
        validatorAddress: "",
        deposit: ""
    };
}
exports.UnregisterVolunteerValidatorProposalWithDeposit = {
    typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit",
    aminoType: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.UnregisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validatorAddress === "string" && typeof o.deposit === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnregisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string" && typeof o.deposit === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(26).string(message.validatorAddress);
        }
        if (message.deposit !== "") {
            writer.uint32(34).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.validatorAddress = reader.string();
                    break;
                case 4:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
        obj.deposit = message.deposit === "" ? undefined : message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnregisterVolunteerValidatorProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit",
            value: exports.UnregisterVolunteerValidatorProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnregisterVolunteerValidatorProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.UnregisterVolunteerValidatorProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit",
            value: exports.UnregisterVolunteerValidatorProposalWithDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnregisterVolunteerValidatorProposalWithDeposit.typeUrl, exports.UnregisterVolunteerValidatorProposalWithDeposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnregisterVolunteerValidatorProposalWithDeposit.aminoType, exports.UnregisterVolunteerValidatorProposalWithDeposit.typeUrl);
