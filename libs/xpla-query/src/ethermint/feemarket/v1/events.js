"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBlockGas = exports.EventFeeMarket = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseEventFeeMarket() {
    return {
        baseFee: ""
    };
}
exports.EventFeeMarket = {
    typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
    is(o) {
        return o && (o.$typeUrl === exports.EventFeeMarket.typeUrl || typeof o.baseFee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventFeeMarket.typeUrl || typeof o.base_fee === "string");
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
        const message = createBaseEventFeeMarket();
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
        const message = createBaseEventFeeMarket();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventFeeMarket();
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
        return exports.EventFeeMarket.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventFeeMarket.decode(message.value);
    },
    toProto(message) {
        return exports.EventFeeMarket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.EventFeeMarket",
            value: exports.EventFeeMarket.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventFeeMarket.typeUrl, exports.EventFeeMarket);
function createBaseEventBlockGas() {
    return {
        height: "",
        amount: ""
    };
}
exports.EventBlockGas = {
    typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
    is(o) {
        return o && (o.$typeUrl === exports.EventBlockGas.typeUrl || typeof o.height === "string" && typeof o.amount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventBlockGas.typeUrl || typeof o.height === "string" && typeof o.amount === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== "") {
            writer.uint32(10).string(message.height);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockGas();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBlockGas();
        message.height = object.height ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBlockGas();
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height === "" ? undefined : message.height;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBlockGas.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBlockGas.decode(message.value);
    },
    toProto(message) {
        return exports.EventBlockGas.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.EventBlockGas",
            value: exports.EventBlockGas.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventBlockGas.typeUrl, exports.EventBlockGas);
