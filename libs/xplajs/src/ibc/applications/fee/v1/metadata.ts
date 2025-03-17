import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
  /** fee_version defines the ICS29 fee version */
  fee_version: string;
  /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */
  app_version: string;
}
export interface MetadataProtoMsg {
  type_url: "/ibc.applications.fee.v1.Metadata";
  value: Uint8Array;
}
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataAmino {
  /** fee_version defines the ICS29 fee version */
  fee_version: string;
  /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */
  app_version: string;
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
function createBaseMetadata(): Metadata {
  return {
    fee_version: "",
    app_version: ""
  };
}
export const Metadata = {
  typeUrl: "/ibc.applications.fee.v1.Metadata",
  aminoType: "cosmos-sdk/Metadata",
  is(o: any): o is Metadata {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.fee_version === "string" && typeof o.app_version === "string");
  },
  isAmino(o: any): o is MetadataAmino {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.fee_version === "string" && typeof o.app_version === "string");
  },
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee_version !== "") {
      writer.uint32(10).string(message.fee_version);
    }
    if (message.app_version !== "") {
      writer.uint32(18).string(message.app_version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee_version = reader.string();
          break;
        case 2:
          message.app_version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.fee_version = object.fee_version ?? "";
    message.app_version = object.app_version ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.fee_version !== undefined && object.fee_version !== null) {
      message.fee_version = object.fee_version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.app_version = object.app_version;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.fee_version = message.fee_version === "" ? undefined : message.fee_version;
    obj.app_version = message.app_version === "" ? undefined : message.app_version;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};