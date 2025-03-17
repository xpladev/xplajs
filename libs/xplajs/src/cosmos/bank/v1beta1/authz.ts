import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
  spend_limit: Coin[];
  /**
   * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
   * granter. If omitted, any recipient is allowed.
   * 
   * Since: cosmos-sdk 0.47
   */
  allow_list: string[];
}
export interface SendAuthorizationProtoMsg {
  type_url: "/cosmos.bank.v1beta1.SendAuthorization";
  value: Uint8Array;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationAmino {
  spend_limit: CoinAmino[];
  /**
   * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
   * granter. If omitted, any recipient is allowed.
   * 
   * Since: cosmos-sdk 0.47
   */
  allow_list: string[];
}
export interface SendAuthorizationAminoMsg {
  type: "cosmos-sdk/SendAuthorization";
  value: SendAuthorizationAmino;
}
function createBaseSendAuthorization(): SendAuthorization {
  return {
    spend_limit: [],
    allow_list: []
  };
}
export const SendAuthorization = {
  typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
  aminoType: "cosmos-sdk/SendAuthorization",
  is(o: any): o is SendAuthorization {
    return o && (o.$typeUrl === SendAuthorization.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.is(o.spend_limit[0])) && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string"));
  },
  isAmino(o: any): o is SendAuthorizationAmino {
    return o && (o.$typeUrl === SendAuthorization.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])) && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string"));
  },
  encode(message: SendAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spend_limit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allow_list) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spend_limit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.allow_list.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SendAuthorization>): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
    message.allow_list = object.allow_list?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SendAuthorizationAmino): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spend_limit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
    message.allow_list = object.allow_list?.map(e => e) || [];
    return message;
  },
  toAmino(message: SendAuthorization): SendAuthorizationAmino {
    const obj: any = {};
    if (message.spend_limit) {
      obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = message.spend_limit;
    }
    if (message.allow_list) {
      obj.allow_list = message.allow_list.map(e => e);
    } else {
      obj.allow_list = message.allow_list;
    }
    return obj;
  },
  fromAminoMsg(object: SendAuthorizationAminoMsg): SendAuthorization {
    return SendAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: SendAuthorization): SendAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/SendAuthorization",
      value: SendAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: SendAuthorizationProtoMsg): SendAuthorization {
    return SendAuthorization.decode(message.value);
  },
  toProto(message: SendAuthorization): Uint8Array {
    return SendAuthorization.encode(message).finish();
  },
  toProtoMsg(message: SendAuthorization): SendAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
      value: SendAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GlobalDecoderRegistry.register(SendAuthorization.typeUrl, SendAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(SendAuthorization.aminoType, SendAuthorization.typeUrl);
    Coin.registerTypeUrl();
  }
};