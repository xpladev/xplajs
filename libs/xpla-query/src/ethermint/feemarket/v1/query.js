"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBlockGasResponse = exports.QueryBlockGasRequest = exports.QueryBaseFeeResponse = exports.QueryBaseFeeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const feemarket_1 = require("./feemarket");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest",
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
            typeUrl: "/ethermint.feemarket.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: feemarket_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || feemarket_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || feemarket_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            feemarket_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = feemarket_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? feemarket_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? feemarket_1.Params.toAmino(message.params) : feemarket_1.Params.toAmino(feemarket_1.Params.fromPartial({}));
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
            typeUrl: "/ethermint.feemarket.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseQueryBaseFeeRequest() {
    return {};
}
exports.QueryBaseFeeRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryBaseFeeRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryBaseFeeRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeRequest();
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
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBaseFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeRequest",
            value: exports.QueryBaseFeeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBaseFeeRequest.typeUrl, exports.QueryBaseFeeRequest);
function createBaseQueryBaseFeeResponse() {
    return {
        baseFee: ""
    };
}
exports.QueryBaseFeeResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBaseFeeResponse.typeUrl || typeof o.baseFee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBaseFeeResponse.typeUrl || typeof o.base_fee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBaseFeeResponse();
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_fee = message.baseFee === "" ? undefined : message.baseFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBaseFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBaseFeeResponse",
            value: exports.QueryBaseFeeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBaseFeeResponse.typeUrl, exports.QueryBaseFeeResponse);
function createBaseQueryBlockGasRequest() {
    return {};
}
exports.QueryBlockGasRequest = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryBlockGasRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryBlockGasRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasRequest();
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
        const message = createBaseQueryBlockGasRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBlockGasRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBlockGasRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBlockGasRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBlockGasRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBlockGasRequest",
            value: exports.QueryBlockGasRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBlockGasRequest.typeUrl, exports.QueryBlockGasRequest);
function createBaseQueryBlockGasResponse() {
    return {
        gas: BigInt(0)
    };
}
exports.QueryBlockGasResponse = {
    typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBlockGasResponse.typeUrl || typeof o.gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBlockGasResponse.typeUrl || typeof o.gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas !== BigInt(0)) {
            writer.uint32(8).int64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBlockGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBlockGasResponse();
        message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBlockGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBlockGasResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBlockGasResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBlockGasResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.QueryBlockGasResponse",
            value: exports.QueryBlockGasResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBlockGasResponse.typeUrl, exports.QueryBlockGasResponse);
