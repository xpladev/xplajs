"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgFundRewardPoolResponse = exports.MsgFundRewardPool = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const reward_1 = require("./reward");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseMsgFundRewardPool() {
    return {
        amount: [],
        depositor: ""
    };
}
exports.MsgFundRewardPool = {
    typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
    aminoType: "xpladev/MsgFundRewardPool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgFundRewardPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.depositor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgFundRewardPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.depositor === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundRewardPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgFundRewardPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFundRewardPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundRewardPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/MsgFundRewardPool",
            value: exports.MsgFundRewardPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFundRewardPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundRewardPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
            value: exports.MsgFundRewardPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundRewardPool.typeUrl, exports.MsgFundRewardPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFundRewardPool.aminoType, exports.MsgFundRewardPool.typeUrl);
function createBaseMsgFundRewardPoolResponse() {
    return {};
}
exports.MsgFundRewardPoolResponse = {
    typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgFundRewardPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgFundRewardPoolResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundRewardPoolResponse();
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
        const message = createBaseMsgFundRewardPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFundRewardPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundRewardPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgFundRewardPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundRewardPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse",
            value: exports.MsgFundRewardPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundRewardPoolResponse.typeUrl, exports.MsgFundRewardPoolResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: reward_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
    aminoType: "xpladev/x/reward/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && reward_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && reward_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            reward_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = reward_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? reward_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = reward_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? reward_1.Params.toAmino(message.params) : reward_1.Params.toAmino(reward_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/x/reward/MsgUpdateParams",
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
            typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
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
    typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse",
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
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
