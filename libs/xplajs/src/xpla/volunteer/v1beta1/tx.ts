import { Description, DescriptionAmino } from "../../../cosmos/staking/v1beta1/staking";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@interchainjs/pubkey";
/**
 * MsgRegisterVolunteerValidator defines a message to register a new volunteer
 * validator.
 */
export interface MsgRegisterVolunteerValidator {
  /** authority is the address of the governance account. */
  authority: string;
  validator_description: Description;
  delegator_address: string;
  validator_address: string;
  pubkey?: Any | undefined;
  amount: Coin;
}
export interface MsgRegisterVolunteerValidatorProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator";
  value: Uint8Array;
}
export type MsgRegisterVolunteerValidatorEncoded = Omit<MsgRegisterVolunteerValidator, "pubkey"> & {
  pubkey?: AnyProtoMsg | undefined;
};
/**
 * MsgRegisterVolunteerValidator defines a message to register a new volunteer
 * validator.
 */
export interface MsgRegisterVolunteerValidatorAmino {
  /** authority is the address of the governance account. */
  authority: string;
  validator_description: DescriptionAmino;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnyAmino;
  amount: CoinAmino;
}
export interface MsgRegisterVolunteerValidatorAminoMsg {
  type: "xpladev/MsgRegisterVolunteerValidator";
  value: MsgRegisterVolunteerValidatorAmino;
}
/**
 * MsgRegisterVolunteerValidatorResponse defines the RegisterVolunteerValidator
 * response.
 */
export interface MsgRegisterVolunteerValidatorResponse {}
export interface MsgRegisterVolunteerValidatorResponseProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterVolunteerValidatorResponse defines the RegisterVolunteerValidator
 * response.
 */
export interface MsgRegisterVolunteerValidatorResponseAmino {}
export interface MsgRegisterVolunteerValidatorResponseAminoMsg {
  type: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse";
  value: MsgRegisterVolunteerValidatorResponseAmino;
}
/**
 * MsgUnregisterVolunteerValidator defines a message to unregister a volunteer
 * validator.
 */
export interface MsgUnregisterVolunteerValidator {
  /** authority is the address of the governance account. */
  authority: string;
  validator_address: string;
}
export interface MsgUnregisterVolunteerValidatorProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator";
  value: Uint8Array;
}
/**
 * MsgUnregisterVolunteerValidator defines a message to unregister a volunteer
 * validator.
 */
export interface MsgUnregisterVolunteerValidatorAmino {
  /** authority is the address of the governance account. */
  authority: string;
  validator_address: string;
}
export interface MsgUnregisterVolunteerValidatorAminoMsg {
  type: "xpladev/MsgUnregisterVolunteerValidator";
  value: MsgUnregisterVolunteerValidatorAmino;
}
/**
 * MsgUnregisterVolunteerValidatorResponse defines the
 * UnregisterVolunteerValidator response.
 */
export interface MsgUnregisterVolunteerValidatorResponse {}
export interface MsgUnregisterVolunteerValidatorResponseProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse";
  value: Uint8Array;
}
/**
 * MsgUnregisterVolunteerValidatorResponse defines the
 * UnregisterVolunteerValidator response.
 */
export interface MsgUnregisterVolunteerValidatorResponseAmino {}
export interface MsgUnregisterVolunteerValidatorResponseAminoMsg {
  type: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse";
  value: MsgUnregisterVolunteerValidatorResponseAmino;
}
function createBaseMsgRegisterVolunteerValidator(): MsgRegisterVolunteerValidator {
  return {
    authority: "",
    validator_description: Description.fromPartial({}),
    delegator_address: "",
    validator_address: "",
    pubkey: undefined,
    amount: Coin.fromPartial({})
  };
}
export const MsgRegisterVolunteerValidator = {
  typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
  aminoType: "xpladev/MsgRegisterVolunteerValidator",
  is(o: any): o is MsgRegisterVolunteerValidator {
    return o && (o.$typeUrl === MsgRegisterVolunteerValidator.typeUrl || typeof o.authority === "string" && Description.is(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is MsgRegisterVolunteerValidatorAmino {
    return o && (o.$typeUrl === MsgRegisterVolunteerValidator.typeUrl || typeof o.authority === "string" && Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgRegisterVolunteerValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.validator_description !== undefined) {
      Description.encode(message.validator_description, writer.uint32(18).fork()).ldelim();
    }
    if (message.delegator_address !== "") {
      writer.uint32(26).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(34).string(message.validator_address);
    }
    if (message.pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(42).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterVolunteerValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterVolunteerValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.validator_description = Description.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegator_address = reader.string();
          break;
        case 4:
          message.validator_address = reader.string();
          break;
        case 5:
          message.pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterVolunteerValidator>): MsgRegisterVolunteerValidator {
    const message = createBaseMsgRegisterVolunteerValidator();
    message.authority = object.authority ?? "";
    message.validator_description = object.validator_description !== undefined && object.validator_description !== null ? Description.fromPartial(object.validator_description) : undefined;
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterVolunteerValidatorAmino): MsgRegisterVolunteerValidator {
    const message = createBaseMsgRegisterVolunteerValidator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.validator_description !== undefined && object.validator_description !== null) {
      message.validator_description = Description.fromAmino(object.validator_description);
    }
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegator_address = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = encodePubkey(object.pubkey);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.validator_description = message.validator_description ? Description.toAmino(message.validator_description) : Description.toAmino(Description.fromPartial({}));
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgRegisterVolunteerValidatorAminoMsg): MsgRegisterVolunteerValidator {
    return MsgRegisterVolunteerValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorAminoMsg {
    return {
      type: "xpladev/MsgRegisterVolunteerValidator",
      value: MsgRegisterVolunteerValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterVolunteerValidatorProtoMsg): MsgRegisterVolunteerValidator {
    return MsgRegisterVolunteerValidator.decode(message.value);
  },
  toProto(message: MsgRegisterVolunteerValidator): Uint8Array {
    return MsgRegisterVolunteerValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
      value: MsgRegisterVolunteerValidator.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseMsgRegisterVolunteerValidatorResponse(): MsgRegisterVolunteerValidatorResponse {
  return {};
}
export const MsgRegisterVolunteerValidatorResponse = {
  typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse",
  is(o: any): o is MsgRegisterVolunteerValidatorResponse {
    return o && o.$typeUrl === MsgRegisterVolunteerValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterVolunteerValidatorResponseAmino {
    return o && o.$typeUrl === MsgRegisterVolunteerValidatorResponse.typeUrl;
  },
  encode(_: MsgRegisterVolunteerValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterVolunteerValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterVolunteerValidatorResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterVolunteerValidatorResponse>): MsgRegisterVolunteerValidatorResponse {
    const message = createBaseMsgRegisterVolunteerValidatorResponse();
    return message;
  },
  fromAmino(_: MsgRegisterVolunteerValidatorResponseAmino): MsgRegisterVolunteerValidatorResponse {
    const message = createBaseMsgRegisterVolunteerValidatorResponse();
    return message;
  },
  toAmino(_: MsgRegisterVolunteerValidatorResponse): MsgRegisterVolunteerValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterVolunteerValidatorResponseAminoMsg): MsgRegisterVolunteerValidatorResponse {
    return MsgRegisterVolunteerValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterVolunteerValidatorResponseProtoMsg): MsgRegisterVolunteerValidatorResponse {
    return MsgRegisterVolunteerValidatorResponse.decode(message.value);
  },
  toProto(message: MsgRegisterVolunteerValidatorResponse): Uint8Array {
    return MsgRegisterVolunteerValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterVolunteerValidatorResponse): MsgRegisterVolunteerValidatorResponseProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse",
      value: MsgRegisterVolunteerValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnregisterVolunteerValidator(): MsgUnregisterVolunteerValidator {
  return {
    authority: "",
    validator_address: ""
  };
}
export const MsgUnregisterVolunteerValidator = {
  typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
  aminoType: "xpladev/MsgUnregisterVolunteerValidator",
  is(o: any): o is MsgUnregisterVolunteerValidator {
    return o && (o.$typeUrl === MsgUnregisterVolunteerValidator.typeUrl || typeof o.authority === "string" && typeof o.validator_address === "string");
  },
  isAmino(o: any): o is MsgUnregisterVolunteerValidatorAmino {
    return o && (o.$typeUrl === MsgUnregisterVolunteerValidator.typeUrl || typeof o.authority === "string" && typeof o.validator_address === "string");
  },
  encode(message: MsgUnregisterVolunteerValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterVolunteerValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterVolunteerValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnregisterVolunteerValidator>): MsgUnregisterVolunteerValidator {
    const message = createBaseMsgUnregisterVolunteerValidator();
    message.authority = object.authority ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterVolunteerValidatorAmino): MsgUnregisterVolunteerValidator {
    const message = createBaseMsgUnregisterVolunteerValidator();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterVolunteerValidatorAminoMsg): MsgUnregisterVolunteerValidator {
    return MsgUnregisterVolunteerValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorAminoMsg {
    return {
      type: "xpladev/MsgUnregisterVolunteerValidator",
      value: MsgUnregisterVolunteerValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnregisterVolunteerValidatorProtoMsg): MsgUnregisterVolunteerValidator {
    return MsgUnregisterVolunteerValidator.decode(message.value);
  },
  toProto(message: MsgUnregisterVolunteerValidator): Uint8Array {
    return MsgUnregisterVolunteerValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
      value: MsgUnregisterVolunteerValidator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnregisterVolunteerValidatorResponse(): MsgUnregisterVolunteerValidatorResponse {
  return {};
}
export const MsgUnregisterVolunteerValidatorResponse = {
  typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse",
  is(o: any): o is MsgUnregisterVolunteerValidatorResponse {
    return o && o.$typeUrl === MsgUnregisterVolunteerValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnregisterVolunteerValidatorResponseAmino {
    return o && o.$typeUrl === MsgUnregisterVolunteerValidatorResponse.typeUrl;
  },
  encode(_: MsgUnregisterVolunteerValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterVolunteerValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterVolunteerValidatorResponse();
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
  fromPartial(_: DeepPartial<MsgUnregisterVolunteerValidatorResponse>): MsgUnregisterVolunteerValidatorResponse {
    const message = createBaseMsgUnregisterVolunteerValidatorResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterVolunteerValidatorResponseAmino): MsgUnregisterVolunteerValidatorResponse {
    const message = createBaseMsgUnregisterVolunteerValidatorResponse();
    return message;
  },
  toAmino(_: MsgUnregisterVolunteerValidatorResponse): MsgUnregisterVolunteerValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterVolunteerValidatorResponseAminoMsg): MsgUnregisterVolunteerValidatorResponse {
    return MsgUnregisterVolunteerValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterVolunteerValidatorResponseProtoMsg): MsgUnregisterVolunteerValidatorResponse {
    return MsgUnregisterVolunteerValidatorResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterVolunteerValidatorResponse): Uint8Array {
    return MsgUnregisterVolunteerValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterVolunteerValidatorResponse): MsgUnregisterVolunteerValidatorResponseProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse",
      value: MsgUnregisterVolunteerValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};