"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionOptionsWeb3Tx = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseExtensionOptionsWeb3Tx() {
    return {
        typedDataChainId: BigInt(0),
        feePayer: "",
        feePayerSig: new Uint8Array()
    };
}
exports.ExtensionOptionsWeb3Tx = {
    typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
    is(o) {
        return o && (o.$typeUrl === exports.ExtensionOptionsWeb3Tx.typeUrl || typeof o.typedDataChainId === "bigint" && typeof o.feePayer === "string" && (o.feePayerSig instanceof Uint8Array || typeof o.feePayerSig === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExtensionOptionsWeb3Tx.typeUrl || typeof o.typed_data_chain_id === "bigint" && typeof o.fee_payer === "string" && (o.fee_payer_sig instanceof Uint8Array || typeof o.fee_payer_sig === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.typedDataChainId !== BigInt(0)) {
            writer.uint32(8).uint64(message.typedDataChainId);
        }
        if (message.feePayer !== "") {
            writer.uint32(18).string(message.feePayer);
        }
        if (message.feePayerSig.length !== 0) {
            writer.uint32(26).bytes(message.feePayerSig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsWeb3Tx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.typedDataChainId = reader.uint64();
                    break;
                case 2:
                    message.feePayer = reader.string();
                    break;
                case 3:
                    message.feePayerSig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        message.typedDataChainId = object.typedDataChainId !== undefined && object.typedDataChainId !== null ? BigInt(object.typedDataChainId.toString()) : BigInt(0);
        message.feePayer = object.feePayer ?? "";
        message.feePayerSig = object.feePayerSig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionOptionsWeb3Tx();
        if (object.typed_data_chain_id !== undefined && object.typed_data_chain_id !== null) {
            message.typedDataChainId = BigInt(object.typed_data_chain_id);
        }
        if (object.fee_payer !== undefined && object.fee_payer !== null) {
            message.feePayer = object.fee_payer;
        }
        if (object.fee_payer_sig !== undefined && object.fee_payer_sig !== null) {
            message.feePayerSig = (0, helpers_1.bytesFromBase64)(object.fee_payer_sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.typed_data_chain_id = message.typedDataChainId !== BigInt(0) ? message.typedDataChainId?.toString() : undefined;
        obj.fee_payer = message.feePayer === "" ? undefined : message.feePayer;
        obj.fee_payer_sig = message.feePayerSig ? (0, helpers_1.base64FromBytes)(message.feePayerSig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtensionOptionsWeb3Tx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtensionOptionsWeb3Tx.decode(message.value);
    },
    toProto(message) {
        return exports.ExtensionOptionsWeb3Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
            value: exports.ExtensionOptionsWeb3Tx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtensionOptionsWeb3Tx.typeUrl, exports.ExtensionOptionsWeb3Tx);
