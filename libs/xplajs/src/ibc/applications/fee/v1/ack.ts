import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
  /** the underlying app acknowledgement bytes */
  app_acknowledgement: Uint8Array;
  /** the relayer address which submits the recv packet message */
  forward_relayer_address: string;
  /** success flag of the base application callback */
  underlying_app_success: boolean;
}
export interface IncentivizedAcknowledgementProtoMsg {
  type_url: "/ibc.applications.fee.v1.IncentivizedAcknowledgement";
  value: Uint8Array;
}
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgementAmino {
  /** the underlying app acknowledgement bytes */
  app_acknowledgement: string;
  /** the relayer address which submits the recv packet message */
  forward_relayer_address: string;
  /** success flag of the base application callback */
  underlying_app_success: boolean;
}
export interface IncentivizedAcknowledgementAminoMsg {
  type: "cosmos-sdk/IncentivizedAcknowledgement";
  value: IncentivizedAcknowledgementAmino;
}
function createBaseIncentivizedAcknowledgement(): IncentivizedAcknowledgement {
  return {
    app_acknowledgement: new Uint8Array(),
    forward_relayer_address: "",
    underlying_app_success: false
  };
}
export const IncentivizedAcknowledgement = {
  typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
  aminoType: "cosmos-sdk/IncentivizedAcknowledgement",
  is(o: any): o is IncentivizedAcknowledgement {
    return o && (o.$typeUrl === IncentivizedAcknowledgement.typeUrl || (o.app_acknowledgement instanceof Uint8Array || typeof o.app_acknowledgement === "string") && typeof o.forward_relayer_address === "string" && typeof o.underlying_app_success === "boolean");
  },
  isAmino(o: any): o is IncentivizedAcknowledgementAmino {
    return o && (o.$typeUrl === IncentivizedAcknowledgement.typeUrl || (o.app_acknowledgement instanceof Uint8Array || typeof o.app_acknowledgement === "string") && typeof o.forward_relayer_address === "string" && typeof o.underlying_app_success === "boolean");
  },
  encode(message: IncentivizedAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.app_acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.app_acknowledgement);
    }
    if (message.forward_relayer_address !== "") {
      writer.uint32(18).string(message.forward_relayer_address);
    }
    if (message.underlying_app_success === true) {
      writer.uint32(24).bool(message.underlying_app_success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app_acknowledgement = reader.bytes();
          break;
        case 2:
          message.forward_relayer_address = reader.string();
          break;
        case 3:
          message.underlying_app_success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IncentivizedAcknowledgement>): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    message.app_acknowledgement = object.app_acknowledgement ?? new Uint8Array();
    message.forward_relayer_address = object.forward_relayer_address ?? "";
    message.underlying_app_success = object.underlying_app_success ?? false;
    return message;
  },
  fromAmino(object: IncentivizedAcknowledgementAmino): IncentivizedAcknowledgement {
    const message = createBaseIncentivizedAcknowledgement();
    if (object.app_acknowledgement !== undefined && object.app_acknowledgement !== null) {
      message.app_acknowledgement = bytesFromBase64(object.app_acknowledgement);
    }
    if (object.forward_relayer_address !== undefined && object.forward_relayer_address !== null) {
      message.forward_relayer_address = object.forward_relayer_address;
    }
    if (object.underlying_app_success !== undefined && object.underlying_app_success !== null) {
      message.underlying_app_success = object.underlying_app_success;
    }
    return message;
  },
  toAmino(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAmino {
    const obj: any = {};
    obj.app_acknowledgement = message.app_acknowledgement ? base64FromBytes(message.app_acknowledgement) : undefined;
    obj.forward_relayer_address = message.forward_relayer_address === "" ? undefined : message.forward_relayer_address;
    obj.underlying_app_success = message.underlying_app_success === false ? undefined : message.underlying_app_success;
    return obj;
  },
  fromAminoMsg(object: IncentivizedAcknowledgementAminoMsg): IncentivizedAcknowledgement {
    return IncentivizedAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/IncentivizedAcknowledgement",
      value: IncentivizedAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentivizedAcknowledgementProtoMsg): IncentivizedAcknowledgement {
    return IncentivizedAcknowledgement.decode(message.value);
  },
  toProto(message: IncentivizedAcknowledgement): Uint8Array {
    return IncentivizedAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: IncentivizedAcknowledgement): IncentivizedAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.IncentivizedAcknowledgement",
      value: IncentivizedAcknowledgement.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};