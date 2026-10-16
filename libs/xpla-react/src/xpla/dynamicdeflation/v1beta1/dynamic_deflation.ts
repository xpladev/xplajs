import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines the dynamic deflation parameters used for the next period.
 * @name Params
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.Params
 */
export interface Params {
  enabled: boolean;
  allocationRate: string;
  settlementIntervalBlocks: bigint;
  minFeeAmount: Coin;
  maxFeeAmount: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the dynamic deflation parameters used for the next period.
 * @name ParamsAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.Params
 */
export interface ParamsAmino {
  enabled: boolean;
  allocation_rate: string;
  settlement_interval_blocks: string;
  min_fee_amount: CoinAmino;
  max_fee_amount: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "xpladev/x/dynamicdeflation/Params";
  value: ParamsAmino;
}
/**
 * CurrentPeriod tracks the active observation period.
 * @name CurrentPeriod
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.CurrentPeriod
 */
export interface CurrentPeriod {
  startHeight: bigint;
  endHeight: bigint;
  activeConfig: Params;
  grossAmount: string;
  allocatedAmount: string;
}
export interface CurrentPeriodProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.CurrentPeriod";
  value: Uint8Array;
}
/**
 * CurrentPeriod tracks the active observation period.
 * @name CurrentPeriodAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.CurrentPeriod
 */
export interface CurrentPeriodAmino {
  start_height: string;
  end_height: string;
  active_config: ParamsAmino;
  gross_amount: string;
  allocated_amount: string;
}
export interface CurrentPeriodAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.CurrentPeriod";
  value: CurrentPeriodAmino;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    allocationRate: "",
    settlementIntervalBlocks: BigInt(0),
    minFeeAmount: Coin.fromPartial({}),
    maxFeeAmount: Coin.fromPartial({})
  };
}
/**
 * Params defines the dynamic deflation parameters used for the next period.
 * @name Params
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.Params
 */
export const Params = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.Params",
  aminoType: "xpladev/x/dynamicdeflation/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enabled === "boolean" && typeof o.allocationRate === "string" && typeof o.settlementIntervalBlocks === "bigint" && Coin.is(o.minFeeAmount) && Coin.is(o.maxFeeAmount));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enabled === "boolean" && typeof o.allocation_rate === "string" && typeof o.settlement_interval_blocks === "bigint" && Coin.isAmino(o.min_fee_amount) && Coin.isAmino(o.max_fee_amount));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.allocationRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.allocationRate, 18).atomics);
    }
    if (message.settlementIntervalBlocks !== BigInt(0)) {
      writer.uint32(24).uint64(message.settlementIntervalBlocks);
    }
    if (message.minFeeAmount !== undefined) {
      Coin.encode(message.minFeeAmount, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxFeeAmount !== undefined) {
      Coin.encode(message.maxFeeAmount, writer.uint32(42).fork()).ldelim();
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
          message.enabled = reader.bool();
          break;
        case 2:
          message.allocationRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.settlementIntervalBlocks = reader.uint64();
          break;
        case 4:
          message.minFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxFeeAmount = Coin.decode(reader, reader.uint32());
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
    message.enabled = object.enabled ?? false;
    message.allocationRate = object.allocationRate ?? "";
    message.settlementIntervalBlocks = object.settlementIntervalBlocks !== undefined && object.settlementIntervalBlocks !== null ? BigInt(object.settlementIntervalBlocks.toString()) : BigInt(0);
    message.minFeeAmount = object.minFeeAmount !== undefined && object.minFeeAmount !== null ? Coin.fromPartial(object.minFeeAmount) : undefined;
    message.maxFeeAmount = object.maxFeeAmount !== undefined && object.maxFeeAmount !== null ? Coin.fromPartial(object.maxFeeAmount) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    if (object.allocation_rate !== undefined && object.allocation_rate !== null) {
      message.allocationRate = object.allocation_rate;
    }
    if (object.settlement_interval_blocks !== undefined && object.settlement_interval_blocks !== null) {
      message.settlementIntervalBlocks = BigInt(object.settlement_interval_blocks);
    }
    if (object.min_fee_amount !== undefined && object.min_fee_amount !== null) {
      message.minFeeAmount = Coin.fromAmino(object.min_fee_amount);
    }
    if (object.max_fee_amount !== undefined && object.max_fee_amount !== null) {
      message.maxFeeAmount = Coin.fromAmino(object.max_fee_amount);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    obj.allocation_rate = Decimal.fromUserInput(message.allocationRate, 18).atomics ?? "";
    obj.settlement_interval_blocks = message.settlementIntervalBlocks !== BigInt(0) ? message.settlementIntervalBlocks?.toString() : undefined;
    obj.min_fee_amount = message.minFeeAmount ? Coin.toAmino(message.minFeeAmount) : Coin.toAmino(Coin.fromPartial({}));
    obj.max_fee_amount = message.maxFeeAmount ? Coin.toAmino(message.maxFeeAmount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "xpladev/x/dynamicdeflation/Params",
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
      typeUrl: "/xpla.dynamicdeflation.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseCurrentPeriod(): CurrentPeriod {
  return {
    startHeight: BigInt(0),
    endHeight: BigInt(0),
    activeConfig: Params.fromPartial({}),
    grossAmount: "",
    allocatedAmount: ""
  };
}
/**
 * CurrentPeriod tracks the active observation period.
 * @name CurrentPeriod
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.CurrentPeriod
 */
export const CurrentPeriod = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.CurrentPeriod",
  is(o: any): o is CurrentPeriod {
    return o && (o.$typeUrl === CurrentPeriod.typeUrl || typeof o.startHeight === "bigint" && typeof o.endHeight === "bigint" && Params.is(o.activeConfig) && typeof o.grossAmount === "string" && typeof o.allocatedAmount === "string");
  },
  isAmino(o: any): o is CurrentPeriodAmino {
    return o && (o.$typeUrl === CurrentPeriod.typeUrl || typeof o.start_height === "bigint" && typeof o.end_height === "bigint" && Params.isAmino(o.active_config) && typeof o.gross_amount === "string" && typeof o.allocated_amount === "string");
  },
  encode(message: CurrentPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.startHeight);
    }
    if (message.endHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.endHeight);
    }
    if (message.activeConfig !== undefined) {
      Params.encode(message.activeConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.grossAmount !== "") {
      writer.uint32(34).string(message.grossAmount);
    }
    if (message.allocatedAmount !== "") {
      writer.uint32(42).string(message.allocatedAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrentPeriod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startHeight = reader.int64();
          break;
        case 2:
          message.endHeight = reader.int64();
          break;
        case 3:
          message.activeConfig = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.grossAmount = reader.string();
          break;
        case 5:
          message.allocatedAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CurrentPeriod>): CurrentPeriod {
    const message = createBaseCurrentPeriod();
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? BigInt(object.startHeight.toString()) : BigInt(0);
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? BigInt(object.endHeight.toString()) : BigInt(0);
    message.activeConfig = object.activeConfig !== undefined && object.activeConfig !== null ? Params.fromPartial(object.activeConfig) : undefined;
    message.grossAmount = object.grossAmount ?? "";
    message.allocatedAmount = object.allocatedAmount ?? "";
    return message;
  },
  fromAmino(object: CurrentPeriodAmino): CurrentPeriod {
    const message = createBaseCurrentPeriod();
    if (object.start_height !== undefined && object.start_height !== null) {
      message.startHeight = BigInt(object.start_height);
    }
    if (object.end_height !== undefined && object.end_height !== null) {
      message.endHeight = BigInt(object.end_height);
    }
    if (object.active_config !== undefined && object.active_config !== null) {
      message.activeConfig = Params.fromAmino(object.active_config);
    }
    if (object.gross_amount !== undefined && object.gross_amount !== null) {
      message.grossAmount = object.gross_amount;
    }
    if (object.allocated_amount !== undefined && object.allocated_amount !== null) {
      message.allocatedAmount = object.allocated_amount;
    }
    return message;
  },
  toAmino(message: CurrentPeriod): CurrentPeriodAmino {
    const obj: any = {};
    obj.start_height = message.startHeight !== BigInt(0) ? message.startHeight?.toString() : undefined;
    obj.end_height = message.endHeight !== BigInt(0) ? message.endHeight?.toString() : undefined;
    obj.active_config = message.activeConfig ? Params.toAmino(message.activeConfig) : Params.toAmino(Params.fromPartial({}));
    obj.gross_amount = message.grossAmount ?? "";
    obj.allocated_amount = message.allocatedAmount ?? "";
    return obj;
  },
  fromAminoMsg(object: CurrentPeriodAminoMsg): CurrentPeriod {
    return CurrentPeriod.fromAmino(object.value);
  },
  fromProtoMsg(message: CurrentPeriodProtoMsg): CurrentPeriod {
    return CurrentPeriod.decode(message.value);
  },
  toProto(message: CurrentPeriod): Uint8Array {
    return CurrentPeriod.encode(message).finish();
  },
  toProtoMsg(message: CurrentPeriod): CurrentPeriodProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.CurrentPeriod",
      value: CurrentPeriod.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CurrentPeriod.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};