"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const reward_1 = require("./reward");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/xpla.reward.v1beta1.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: reward_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/xpla.reward.v1beta1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || reward_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || reward_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            reward_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? reward_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = reward_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? reward_1.Params.toAmino(message.params) : reward_1.Params.toAmino(reward_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    typeUrl: "/xpla.reward.v1beta1.QueryPoolRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryPoolRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPoolRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryPoolRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.QueryPoolRequest",
            value: exports.QueryPoolRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolRequest.typeUrl, exports.QueryPoolRequest);
function createBaseQueryPoolResponse() {
    return {
        pool: []
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/xpla.reward.v1beta1.QueryPoolResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || coin_1.Coin.is(o.pool[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPoolResponse.typeUrl || Array.isArray(o.pool) && (!o.pool.length || coin_1.Coin.isAmino(o.pool[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pool) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool = message.pool;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.QueryPoolResponse",
            value: exports.QueryPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolResponse.typeUrl, exports.QueryPoolResponse);
