"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionOptionDynamicFeeTx = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseExtensionOptionDynamicFeeTx() {
    return {
        maxPriorityPrice: ""
    };
}
exports.ExtensionOptionDynamicFeeTx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
    is(o) {
        return o && (o.$typeUrl === exports.ExtensionOptionDynamicFeeTx.typeUrl || typeof o.maxPriorityPrice === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExtensionOptionDynamicFeeTx.typeUrl || typeof o.max_priority_price === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.maxPriorityPrice !== "") {
            writer.uint32(10).string(message.maxPriorityPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxPriorityPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionDynamicFeeTx();
        message.maxPriorityPrice = object.maxPriorityPrice ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionOptionDynamicFeeTx();
        if (object.max_priority_price !== undefined && object.max_priority_price !== null) {
            message.maxPriorityPrice = object.max_priority_price;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_priority_price = message.maxPriorityPrice === "" ? undefined : message.maxPriorityPrice;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtensionOptionDynamicFeeTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtensionOptionDynamicFeeTx.decode(message.value);
    },
    toProto(message) {
        return exports.ExtensionOptionDynamicFeeTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx",
            value: exports.ExtensionOptionDynamicFeeTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtensionOptionDynamicFeeTx.typeUrl, exports.ExtensionOptionDynamicFeeTx);
