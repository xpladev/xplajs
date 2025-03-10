import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./reward";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgFundRewardPool allows an account to directly
 * fund the reward pool.
 */
export interface MsgFundRewardPool {
  amount: Coin[];
  depositor: string;
}
export interface MsgFundRewardPoolProtoMsg {
  typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool";
  value: Uint8Array;
}
/**
 * MsgFundRewardPool allows an account to directly
 * fund the reward pool.
 */
export interface MsgFundRewardPoolAmino {
  amount: CoinAmino[];
  depositor: string;
}
export interface MsgFundRewardPoolAminoMsg {
  type: "xpladev/MsgFundRewardPool";
  value: MsgFundRewardPoolAmino;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponse {}
export interface MsgFundRewardPoolResponseProtoMsg {
  typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse";
  value: Uint8Array;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponseAmino {}
export interface MsgFundRewardPoolResponseAminoMsg {
  type: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse";
  value: MsgFundRewardPoolResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for reward parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for reward parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/evm parameters to update.
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "xpladev/x/reward/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/xpla.reward.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgFundRewardPool(): MsgFundRewardPool {
  return {
    amount: [],
    depositor: ""
  };
}
export const MsgFundRewardPool = {
  typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
  aminoType: "xpladev/MsgFundRewardPool",
  is(o: any): o is MsgFundRewardPool {
    return o && (o.$typeUrl === MsgFundRewardPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.depositor === "string");
  },
  isAmino(o: any): o is MsgFundRewardPoolAmino {
    return o && (o.$typeUrl === MsgFundRewardPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.depositor === "string");
  },
  encode(message: MsgFundRewardPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundRewardPool>): MsgFundRewardPool {
    const message = createBaseMsgFundRewardPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgFundRewardPoolAmino): MsgFundRewardPool {
    const message = createBaseMsgFundRewardPool();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: MsgFundRewardPool): MsgFundRewardPoolAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgFundRewardPoolAminoMsg): MsgFundRewardPool {
    return MsgFundRewardPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundRewardPool): MsgFundRewardPoolAminoMsg {
    return {
      type: "xpladev/MsgFundRewardPool",
      value: MsgFundRewardPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundRewardPoolProtoMsg): MsgFundRewardPool {
    return MsgFundRewardPool.decode(message.value);
  },
  toProto(message: MsgFundRewardPool): Uint8Array {
    return MsgFundRewardPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundRewardPool): MsgFundRewardPoolProtoMsg {
    return {
      typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
      value: MsgFundRewardPool.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseMsgFundRewardPoolResponse(): MsgFundRewardPoolResponse {
  return {};
}
export const MsgFundRewardPoolResponse = {
  typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse",
  is(o: any): o is MsgFundRewardPoolResponse {
    return o && o.$typeUrl === MsgFundRewardPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundRewardPoolResponseAmino {
    return o && o.$typeUrl === MsgFundRewardPoolResponse.typeUrl;
  },
  encode(_: MsgFundRewardPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundRewardPoolResponse();
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
  fromPartial(_: DeepPartial<MsgFundRewardPoolResponse>): MsgFundRewardPoolResponse {
    const message = createBaseMsgFundRewardPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundRewardPoolResponseAmino): MsgFundRewardPoolResponse {
    const message = createBaseMsgFundRewardPoolResponse();
    return message;
  },
  toAmino(_: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundRewardPoolResponseAminoMsg): MsgFundRewardPoolResponse {
    return MsgFundRewardPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgFundRewardPoolResponseProtoMsg): MsgFundRewardPoolResponse {
    return MsgFundRewardPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundRewardPoolResponse): Uint8Array {
    return MsgFundRewardPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseProtoMsg {
    return {
      typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse",
      value: MsgFundRewardPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
  aminoType: "xpladev/x/reward/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "xpladev/x/reward/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};