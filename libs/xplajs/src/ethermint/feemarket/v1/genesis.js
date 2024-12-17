"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const feemarket_1 = require("./feemarket");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: feemarket_1.Params.fromPartial({}),
        blockGas: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/ethermint.feemarket.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || feemarket_1.Params.is(o.params) && typeof o.blockGas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || feemarket_1.Params.isAmino(o.params) && typeof o.block_gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            feemarket_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockGas !== BigInt(0)) {
            writer.uint32(24).uint64(message.blockGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = feemarket_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? feemarket_1.Params.fromPartial(object.params) : undefined;
        message.blockGas = object.blockGas !== undefined && object.blockGas !== null ? BigInt(object.blockGas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = feemarket_1.Params.fromAmino(object.params);
        }
        if (object.block_gas !== undefined && object.block_gas !== null) {
            message.blockGas = BigInt(object.block_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? feemarket_1.Params.toAmino(message.params) : feemarket_1.Params.toAmino(feemarket_1.Params.fromPartial({}));
        obj.block_gas = message.blockGas !== BigInt(0) ? message.blockGas?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
