import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
  address: string;
  /** Height at which validator was first a candidate OR was un-jailed */
  start_height: bigint;
  /**
   * Index which is incremented every time a validator is bonded in a block and
   * _may_ have signed a pre-commit or not. This in conjunction with the
   * signed_blocks_window param determines the index in the missed block bitmap.
   */
  index_offset: bigint;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailed_until: Date;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator
   * set). It is set once the validator commits an equivocation or for any other
   * configured misbehavior.
   */
  tombstoned: boolean;
  /**
   * A counter of missed (unsigned) blocks. It is used to avoid unnecessary
   * reads in the missed block bitmap.
   */
  missed_blocks_counter: bigint;
}
export interface ValidatorSigningInfoProtoMsg {
  type_url: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
  value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
  address: string;
  /** Height at which validator was first a candidate OR was un-jailed */
  start_height: string;
  /**
   * Index which is incremented every time a validator is bonded in a block and
   * _may_ have signed a pre-commit or not. This in conjunction with the
   * signed_blocks_window param determines the index in the missed block bitmap.
   */
  index_offset: string;
  /** Timestamp until which the validator is jailed due to liveness downtime. */
  jailed_until: string;
  /**
   * Whether or not a validator has been tombstoned (killed out of validator
   * set). It is set once the validator commits an equivocation or for any other
   * configured misbehavior.
   */
  tombstoned: boolean;
  /**
   * A counter of missed (unsigned) blocks. It is used to avoid unnecessary
   * reads in the missed block bitmap.
   */
  missed_blocks_counter: string;
}
export interface ValidatorSigningInfoAminoMsg {
  type: "cosmos-sdk/ValidatorSigningInfo";
  value: ValidatorSigningInfoAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
  signed_blocks_window: bigint;
  min_signed_per_window: Uint8Array;
  downtime_jail_duration: Duration;
  slash_fraction_double_sign: Uint8Array;
  slash_fraction_downtime: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.slashing.v1beta1.Params";
  value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
  signed_blocks_window: string;
  min_signed_per_window: string;
  downtime_jail_duration: DurationAmino;
  slash_fraction_double_sign: string;
  slash_fraction_downtime: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/slashing/Params";
  value: ParamsAmino;
}
function createBaseValidatorSigningInfo(): ValidatorSigningInfo {
  return {
    address: "",
    start_height: BigInt(0),
    index_offset: BigInt(0),
    jailed_until: new Date(),
    tombstoned: false,
    missed_blocks_counter: BigInt(0)
  };
}
export const ValidatorSigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
  aminoType: "cosmos-sdk/ValidatorSigningInfo",
  is(o: any): o is ValidatorSigningInfo {
    return o && (o.$typeUrl === ValidatorSigningInfo.typeUrl || typeof o.address === "string" && typeof o.start_height === "bigint" && typeof o.index_offset === "bigint" && Timestamp.is(o.jailed_until) && typeof o.tombstoned === "boolean" && typeof o.missed_blocks_counter === "bigint");
  },
  isAmino(o: any): o is ValidatorSigningInfoAmino {
    return o && (o.$typeUrl === ValidatorSigningInfo.typeUrl || typeof o.address === "string" && typeof o.start_height === "bigint" && typeof o.index_offset === "bigint" && Timestamp.isAmino(o.jailed_until) && typeof o.tombstoned === "boolean" && typeof o.missed_blocks_counter === "bigint");
  },
  encode(message: ValidatorSigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.start_height !== BigInt(0)) {
      writer.uint32(16).int64(message.start_height);
    }
    if (message.index_offset !== BigInt(0)) {
      writer.uint32(24).int64(message.index_offset);
    }
    if (message.jailed_until !== undefined) {
      Timestamp.encode(toTimestamp(message.jailed_until), writer.uint32(34).fork()).ldelim();
    }
    if (message.tombstoned === true) {
      writer.uint32(40).bool(message.tombstoned);
    }
    if (message.missed_blocks_counter !== BigInt(0)) {
      writer.uint32(48).int64(message.missed_blocks_counter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.start_height = reader.int64();
          break;
        case 3:
          message.index_offset = reader.int64();
          break;
        case 4:
          message.jailed_until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tombstoned = reader.bool();
          break;
        case 6:
          message.missed_blocks_counter = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    message.address = object.address ?? "";
    message.start_height = object.start_height !== undefined && object.start_height !== null ? BigInt(object.start_height.toString()) : BigInt(0);
    message.index_offset = object.index_offset !== undefined && object.index_offset !== null ? BigInt(object.index_offset.toString()) : BigInt(0);
    message.jailed_until = object.jailed_until ?? undefined;
    message.tombstoned = object.tombstoned ?? false;
    message.missed_blocks_counter = object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null ? BigInt(object.missed_blocks_counter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo {
    const message = createBaseValidatorSigningInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.start_height !== undefined && object.start_height !== null) {
      message.start_height = BigInt(object.start_height);
    }
    if (object.index_offset !== undefined && object.index_offset !== null) {
      message.index_offset = BigInt(object.index_offset);
    }
    if (object.jailed_until !== undefined && object.jailed_until !== null) {
      message.jailed_until = fromTimestamp(Timestamp.fromAmino(object.jailed_until));
    }
    if (object.tombstoned !== undefined && object.tombstoned !== null) {
      message.tombstoned = object.tombstoned;
    }
    if (object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null) {
      message.missed_blocks_counter = BigInt(object.missed_blocks_counter);
    }
    return message;
  },
  toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.start_height = message.start_height !== BigInt(0) ? message.start_height?.toString() : undefined;
    obj.index_offset = message.index_offset !== BigInt(0) ? message.index_offset?.toString() : undefined;
    obj.jailed_until = message.jailed_until ? Timestamp.toAmino(toTimestamp(message.jailed_until)) : new Date();
    obj.tombstoned = message.tombstoned === false ? undefined : message.tombstoned;
    obj.missed_blocks_counter = message.missed_blocks_counter !== BigInt(0) ? message.missed_blocks_counter?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSigningInfo",
      value: ValidatorSigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo {
    return ValidatorSigningInfo.decode(message.value);
  },
  toProto(message: ValidatorSigningInfo): Uint8Array {
    return ValidatorSigningInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
      value: ValidatorSigningInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    signed_blocks_window: BigInt(0),
    min_signed_per_window: new Uint8Array(),
    downtime_jail_duration: Duration.fromPartial({}),
    slash_fraction_double_sign: new Uint8Array(),
    slash_fraction_downtime: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/cosmos.slashing.v1beta1.Params",
  aminoType: "cosmos-sdk/x/slashing/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.signed_blocks_window === "bigint" && (o.min_signed_per_window instanceof Uint8Array || typeof o.min_signed_per_window === "string") && Duration.is(o.downtime_jail_duration) && (o.slash_fraction_double_sign instanceof Uint8Array || typeof o.slash_fraction_double_sign === "string") && (o.slash_fraction_downtime instanceof Uint8Array || typeof o.slash_fraction_downtime === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.signed_blocks_window === "bigint" && (o.min_signed_per_window instanceof Uint8Array || typeof o.min_signed_per_window === "string") && Duration.isAmino(o.downtime_jail_duration) && (o.slash_fraction_double_sign instanceof Uint8Array || typeof o.slash_fraction_double_sign === "string") && (o.slash_fraction_downtime instanceof Uint8Array || typeof o.slash_fraction_downtime === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signed_blocks_window !== BigInt(0)) {
      writer.uint32(8).int64(message.signed_blocks_window);
    }
    if (message.min_signed_per_window.length !== 0) {
      writer.uint32(18).bytes(message.min_signed_per_window);
    }
    if (message.downtime_jail_duration !== undefined) {
      Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.slash_fraction_double_sign.length !== 0) {
      writer.uint32(34).bytes(message.slash_fraction_double_sign);
    }
    if (message.slash_fraction_downtime.length !== 0) {
      writer.uint32(42).bytes(message.slash_fraction_downtime);
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
          message.signed_blocks_window = reader.int64();
          break;
        case 2:
          message.min_signed_per_window = reader.bytes();
          break;
        case 3:
          message.downtime_jail_duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.slash_fraction_double_sign = reader.bytes();
          break;
        case 5:
          message.slash_fraction_downtime = reader.bytes();
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
    message.signed_blocks_window = object.signed_blocks_window !== undefined && object.signed_blocks_window !== null ? BigInt(object.signed_blocks_window.toString()) : BigInt(0);
    message.min_signed_per_window = object.min_signed_per_window ?? new Uint8Array();
    message.downtime_jail_duration = object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null ? Duration.fromPartial(object.downtime_jail_duration) : undefined;
    message.slash_fraction_double_sign = object.slash_fraction_double_sign ?? new Uint8Array();
    message.slash_fraction_downtime = object.slash_fraction_downtime ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.signed_blocks_window !== undefined && object.signed_blocks_window !== null) {
      message.signed_blocks_window = BigInt(object.signed_blocks_window);
    }
    if (object.min_signed_per_window !== undefined && object.min_signed_per_window !== null) {
      message.min_signed_per_window = bytesFromBase64(object.min_signed_per_window);
    }
    if (object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null) {
      message.downtime_jail_duration = Duration.fromAmino(object.downtime_jail_duration);
    }
    if (object.slash_fraction_double_sign !== undefined && object.slash_fraction_double_sign !== null) {
      message.slash_fraction_double_sign = bytesFromBase64(object.slash_fraction_double_sign);
    }
    if (object.slash_fraction_downtime !== undefined && object.slash_fraction_downtime !== null) {
      message.slash_fraction_downtime = bytesFromBase64(object.slash_fraction_downtime);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.signed_blocks_window = message.signed_blocks_window !== BigInt(0) ? message.signed_blocks_window?.toString() : undefined;
    obj.min_signed_per_window = message.min_signed_per_window ? base64FromBytes(message.min_signed_per_window) : "";
    obj.downtime_jail_duration = message.downtime_jail_duration ? Duration.toAmino(message.downtime_jail_duration) : Duration.toAmino(Duration.fromPartial({}));
    obj.slash_fraction_double_sign = message.slash_fraction_double_sign ? base64FromBytes(message.slash_fraction_double_sign) : "";
    obj.slash_fraction_downtime = message.slash_fraction_downtime ? base64FromBytes(message.slash_fraction_downtime) : "";
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/slashing/Params",
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
      typeUrl: "/cosmos.slashing.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};