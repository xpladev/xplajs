"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        noBaseFee: false,
        baseFeeChangeDenominator: 0,
        elasticityMultiplier: 0,
        enableHeight: BigInt(0),
        baseFee: "",
        minGasPrice: "",
        minGasMultiplier: ""
    };
}
exports.Params = {
    typeUrl: "/ethermint.feemarket.v1.Params",
    aminoType: "ethermint/x/feemarket/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.noBaseFee === "boolean" && typeof o.baseFeeChangeDenominator === "number" && typeof o.elasticityMultiplier === "number" && typeof o.enableHeight === "bigint" && typeof o.baseFee === "string" && typeof o.minGasPrice === "string" && typeof o.minGasMultiplier === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.no_base_fee === "boolean" && typeof o.base_fee_change_denominator === "number" && typeof o.elasticity_multiplier === "number" && typeof o.enable_height === "bigint" && typeof o.base_fee === "string" && typeof o.min_gas_price === "string" && typeof o.min_gas_multiplier === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.noBaseFee === true) {
            writer.uint32(8).bool(message.noBaseFee);
        }
        if (message.baseFeeChangeDenominator !== 0) {
            writer.uint32(16).uint32(message.baseFeeChangeDenominator);
        }
        if (message.elasticityMultiplier !== 0) {
            writer.uint32(24).uint32(message.elasticityMultiplier);
        }
        if (message.enableHeight !== BigInt(0)) {
            writer.uint32(40).int64(message.enableHeight);
        }
        if (message.baseFee !== "") {
            writer.uint32(50).string(message.baseFee);
        }
        if (message.minGasPrice !== "") {
            writer.uint32(58).string(message.minGasPrice);
        }
        if (message.minGasMultiplier !== "") {
            writer.uint32(66).string(message.minGasMultiplier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noBaseFee = reader.bool();
                    break;
                case 2:
                    message.baseFeeChangeDenominator = reader.uint32();
                    break;
                case 3:
                    message.elasticityMultiplier = reader.uint32();
                    break;
                case 5:
                    message.enableHeight = reader.int64();
                    break;
                case 6:
                    message.baseFee = reader.string();
                    break;
                case 7:
                    message.minGasPrice = reader.string();
                    break;
                case 8:
                    message.minGasMultiplier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.noBaseFee = object.noBaseFee ?? false;
        message.baseFeeChangeDenominator = object.baseFeeChangeDenominator ?? 0;
        message.elasticityMultiplier = object.elasticityMultiplier ?? 0;
        message.enableHeight = object.enableHeight !== undefined && object.enableHeight !== null ? BigInt(object.enableHeight.toString()) : BigInt(0);
        message.baseFee = object.baseFee ?? "";
        message.minGasPrice = object.minGasPrice ?? "";
        message.minGasMultiplier = object.minGasMultiplier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.no_base_fee !== undefined && object.no_base_fee !== null) {
            message.noBaseFee = object.no_base_fee;
        }
        if (object.base_fee_change_denominator !== undefined && object.base_fee_change_denominator !== null) {
            message.baseFeeChangeDenominator = object.base_fee_change_denominator;
        }
        if (object.elasticity_multiplier !== undefined && object.elasticity_multiplier !== null) {
            message.elasticityMultiplier = object.elasticity_multiplier;
        }
        if (object.enable_height !== undefined && object.enable_height !== null) {
            message.enableHeight = BigInt(object.enable_height);
        }
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
            message.minGasPrice = object.min_gas_price;
        }
        if (object.min_gas_multiplier !== undefined && object.min_gas_multiplier !== null) {
            message.minGasMultiplier = object.min_gas_multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.no_base_fee = message.noBaseFee === false ? undefined : message.noBaseFee;
        obj.base_fee_change_denominator = message.baseFeeChangeDenominator === 0 ? undefined : message.baseFeeChangeDenominator;
        obj.elasticity_multiplier = message.elasticityMultiplier === 0 ? undefined : message.elasticityMultiplier;
        obj.enable_height = message.enableHeight !== BigInt(0) ? message.enableHeight?.toString() : undefined;
        obj.base_fee = message.baseFee ?? "";
        obj.min_gas_price = message.minGasPrice ?? "";
        obj.min_gas_multiplier = message.minGasMultiplier ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "ethermint/x/feemarket/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.feemarket.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
