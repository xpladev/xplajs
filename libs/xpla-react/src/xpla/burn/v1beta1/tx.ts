import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgBurn represents a message to burn coins from an account.
 * @name MsgBurn
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurn
 */
export interface MsgBurn {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  amount: Coin[];
}
export interface MsgBurnProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn represents a message to burn coins from an account.
 * @name MsgBurnAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurn
 */
export interface MsgBurnAmino {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  amount: CoinAmino[];
}
export interface MsgBurnAminoMsg {
  type: "xpladev/MsgBurn";
  value: MsgBurnAmino;
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * @name MsgBurnResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * @name MsgBurnResponseAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/xpla.burn.v1beta1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
function createBaseMsgBurn(): MsgBurn {
  return {
    authority: "",
    amount: []
  };
}
/**
 * MsgBurn represents a message to burn coins from an account.
 * @name MsgBurn
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/xpla.burn.v1beta1.MsgBurn",
  aminoType: "xpladev/MsgBurn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.authority === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is MsgBurnAmino {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.authority === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.authority = object.authority ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "xpladev/MsgBurn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgBurn.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
/**
 * MsgBurnResponse defines the Msg/Burn response type.
 * @name MsgBurnResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/xpla.burn.v1beta1.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};