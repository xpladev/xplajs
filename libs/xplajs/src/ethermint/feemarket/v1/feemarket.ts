import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
  /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  no_base_fee: boolean;
  /**
   * base_fee_change_denominator bounds the amount the base fee can change
   * between blocks.
   */
  base_fee_change_denominator: number;
  /**
   * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticity_multiplier: number;
  /** enable_height defines at which block height the base fee calculation is enabled. */
  enable_height: bigint;
  /** base_fee for EIP-1559 blocks. */
  base_fee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  min_gas_price: string;
  /**
   * min_gas_multiplier bounds the minimum gas used to be charged
   * to senders based on gas limit
   */
  min_gas_multiplier: string;
}
export interface ParamsProtoMsg {
  type_url: "/ethermint.feemarket.v1.Params";
  value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
  /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
  no_base_fee: boolean;
  /**
   * base_fee_change_denominator bounds the amount the base fee can change
   * between blocks.
   */
  base_fee_change_denominator: number;
  /**
   * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
   * have.
   */
  elasticity_multiplier: number;
  /** enable_height defines at which block height the base fee calculation is enabled. */
  enable_height: string;
  /** base_fee for EIP-1559 blocks. */
  base_fee: string;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  min_gas_price: string;
  /**
   * min_gas_multiplier bounds the minimum gas used to be charged
   * to senders based on gas limit
   */
  min_gas_multiplier: string;
}
export interface ParamsAminoMsg {
  type: "ethermint/x/feemarket/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    no_base_fee: false,
    base_fee_change_denominator: 0,
    elasticity_multiplier: 0,
    enable_height: BigInt(0),
    base_fee: "",
    min_gas_price: "",
    min_gas_multiplier: ""
  };
}
export const Params = {
  typeUrl: "/ethermint.feemarket.v1.Params",
  aminoType: "ethermint/x/feemarket/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.no_base_fee === "boolean" && typeof o.base_fee_change_denominator === "number" && typeof o.elasticity_multiplier === "number" && typeof o.enable_height === "bigint" && typeof o.base_fee === "string" && typeof o.min_gas_price === "string" && typeof o.min_gas_multiplier === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.no_base_fee === "boolean" && typeof o.base_fee_change_denominator === "number" && typeof o.elasticity_multiplier === "number" && typeof o.enable_height === "bigint" && typeof o.base_fee === "string" && typeof o.min_gas_price === "string" && typeof o.min_gas_multiplier === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.no_base_fee === true) {
      writer.uint32(8).bool(message.no_base_fee);
    }
    if (message.base_fee_change_denominator !== 0) {
      writer.uint32(16).uint32(message.base_fee_change_denominator);
    }
    if (message.elasticity_multiplier !== 0) {
      writer.uint32(24).uint32(message.elasticity_multiplier);
    }
    if (message.enable_height !== BigInt(0)) {
      writer.uint32(40).int64(message.enable_height);
    }
    if (message.base_fee !== "") {
      writer.uint32(50).string(message.base_fee);
    }
    if (message.min_gas_price !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.min_gas_price, 18).atomics);
    }
    if (message.min_gas_multiplier !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.min_gas_multiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.no_base_fee = reader.bool();
          break;
        case 2:
          message.base_fee_change_denominator = reader.uint32();
          break;
        case 3:
          message.elasticity_multiplier = reader.uint32();
          break;
        case 5:
          message.enable_height = reader.int64();
          break;
        case 6:
          message.base_fee = reader.string();
          break;
        case 7:
          message.min_gas_price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.min_gas_multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.no_base_fee = object.no_base_fee ?? false;
    message.base_fee_change_denominator = object.base_fee_change_denominator ?? 0;
    message.elasticity_multiplier = object.elasticity_multiplier ?? 0;
    message.enable_height = object.enable_height !== undefined && object.enable_height !== null ? BigInt(object.enable_height.toString()) : BigInt(0);
    message.base_fee = object.base_fee ?? "";
    message.min_gas_price = object.min_gas_price ?? "";
    message.min_gas_multiplier = object.min_gas_multiplier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.no_base_fee !== undefined && object.no_base_fee !== null) {
      message.no_base_fee = object.no_base_fee;
    }
    if (object.base_fee_change_denominator !== undefined && object.base_fee_change_denominator !== null) {
      message.base_fee_change_denominator = object.base_fee_change_denominator;
    }
    if (object.elasticity_multiplier !== undefined && object.elasticity_multiplier !== null) {
      message.elasticity_multiplier = object.elasticity_multiplier;
    }
    if (object.enable_height !== undefined && object.enable_height !== null) {
      message.enable_height = BigInt(object.enable_height);
    }
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.base_fee = object.base_fee;
    }
    if (object.min_gas_price !== undefined && object.min_gas_price !== null) {
      message.min_gas_price = object.min_gas_price;
    }
    if (object.min_gas_multiplier !== undefined && object.min_gas_multiplier !== null) {
      message.min_gas_multiplier = object.min_gas_multiplier;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.no_base_fee = message.no_base_fee === false ? undefined : message.no_base_fee;
    obj.base_fee_change_denominator = message.base_fee_change_denominator === 0 ? undefined : message.base_fee_change_denominator;
    obj.elasticity_multiplier = message.elasticity_multiplier === 0 ? undefined : message.elasticity_multiplier;
    obj.enable_height = message.enable_height !== BigInt(0) ? message.enable_height?.toString() : undefined;
    obj.base_fee = message.base_fee ?? "";
    obj.min_gas_price = Decimal.fromUserInput(message.min_gas_price, 18).atomics ?? "";
    obj.min_gas_multiplier = Decimal.fromUserInput(message.min_gas_multiplier, 18).atomics ?? "";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "ethermint/x/feemarket/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ethermint.feemarket.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};