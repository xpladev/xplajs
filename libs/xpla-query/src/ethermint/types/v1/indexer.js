"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxResult = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseTxResult() {
    return {
        height: BigInt(0),
        txIndex: 0,
        msgIndex: 0,
        ethTxIndex: 0,
        failed: false,
        gasUsed: BigInt(0),
        cumulativeGasUsed: BigInt(0)
    };
}
exports.TxResult = {
    typeUrl: "/ethermint.types.v1.TxResult",
    is(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.height === "bigint" && typeof o.txIndex === "number" && typeof o.msgIndex === "number" && typeof o.ethTxIndex === "number" && typeof o.failed === "boolean" && typeof o.gasUsed === "bigint" && typeof o.cumulativeGasUsed === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.height === "bigint" && typeof o.tx_index === "number" && typeof o.msg_index === "number" && typeof o.eth_tx_index === "number" && typeof o.failed === "boolean" && typeof o.gas_used === "bigint" && typeof o.cumulative_gas_used === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txIndex !== 0) {
            writer.uint32(16).uint32(message.txIndex);
        }
        if (message.msgIndex !== 0) {
            writer.uint32(24).uint32(message.msgIndex);
        }
        if (message.ethTxIndex !== 0) {
            writer.uint32(32).int32(message.ethTxIndex);
        }
        if (message.failed === true) {
            writer.uint32(40).bool(message.failed);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).uint64(message.gasUsed);
        }
        if (message.cumulativeGasUsed !== BigInt(0)) {
            writer.uint32(56).uint64(message.cumulativeGasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txIndex = reader.uint32();
                    break;
                case 3:
                    message.msgIndex = reader.uint32();
                    break;
                case 4:
                    message.ethTxIndex = reader.int32();
                    break;
                case 5:
                    message.failed = reader.bool();
                    break;
                case 6:
                    message.gasUsed = reader.uint64();
                    break;
                case 7:
                    message.cumulativeGasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxResult();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.txIndex = object.txIndex ?? 0;
        message.msgIndex = object.msgIndex ?? 0;
        message.ethTxIndex = object.ethTxIndex ?? 0;
        message.failed = object.failed ?? false;
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        message.cumulativeGasUsed = object.cumulativeGasUsed !== undefined && object.cumulativeGasUsed !== null ? BigInt(object.cumulativeGasUsed.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = object.tx_index;
        }
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msgIndex = object.msg_index;
        }
        if (object.eth_tx_index !== undefined && object.eth_tx_index !== null) {
            message.ethTxIndex = object.eth_tx_index;
        }
        if (object.failed !== undefined && object.failed !== null) {
            message.failed = object.failed;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        if (object.cumulative_gas_used !== undefined && object.cumulative_gas_used !== null) {
            message.cumulativeGasUsed = BigInt(object.cumulative_gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
        obj.tx_index = message.txIndex === 0 ? undefined : message.txIndex;
        obj.msg_index = message.msgIndex === 0 ? undefined : message.msgIndex;
        obj.eth_tx_index = message.ethTxIndex === 0 ? undefined : message.ethTxIndex;
        obj.failed = message.failed === false ? undefined : message.failed;
        obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
        obj.cumulative_gas_used = message.cumulativeGasUsed !== BigInt(0) ? message.cumulativeGasUsed?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxResult.typeUrl, exports.TxResult);
