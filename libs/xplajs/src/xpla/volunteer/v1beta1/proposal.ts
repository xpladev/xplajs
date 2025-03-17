import { Description, DescriptionAmino } from "../../../cosmos/staking/v1beta1/staking";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@interchainjs/pubkey";
/** RegisterVolunteerValidatorProposal */
/** @deprecated */
export interface RegisterVolunteerValidatorProposal {
  title: string;
  description: string;
  validator_description: Description;
  delegator_address: string;
  validator_address: string;
  pubkey?: Any | undefined;
  amount: Coin;
}
export interface RegisterVolunteerValidatorProposalProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal";
  value: Uint8Array;
}
export type RegisterVolunteerValidatorProposalEncoded = Omit<RegisterVolunteerValidatorProposal, "pubkey"> & {
  pubkey?: AnyProtoMsg | undefined;
};
/** RegisterVolunteerValidatorProposal */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalAmino {
  title: string;
  description: string;
  validator_description: DescriptionAmino;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnyAmino;
  amount: CoinAmino;
}
export interface RegisterVolunteerValidatorProposalAminoMsg {
  type: "xpladev/RegisterVolunteerValidatorProposal";
  value: RegisterVolunteerValidatorProposalAmino;
}
/** RegisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalWithDeposit {
  title: string;
  description: string;
  validator_description: Description;
  delegator_address: string;
  validator_address: string;
  pubkey?: Any | undefined;
  amount: Coin;
  deposit: string;
}
export interface RegisterVolunteerValidatorProposalWithDepositProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit";
  value: Uint8Array;
}
export type RegisterVolunteerValidatorProposalWithDepositEncoded = Omit<RegisterVolunteerValidatorProposalWithDeposit, "pubkey"> & {
  pubkey?: AnyProtoMsg | undefined;
};
/** RegisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalWithDepositAmino {
  title: string;
  description: string;
  validator_description: DescriptionAmino;
  delegator_address: string;
  validator_address: string;
  pubkey?: AnyAmino;
  amount: CoinAmino;
  deposit: string;
}
export interface RegisterVolunteerValidatorProposalWithDepositAminoMsg {
  type: "xpladev/RegisterVolunteerValidatorProposalWithDeposit";
  value: RegisterVolunteerValidatorProposalWithDepositAmino;
}
/** UnregisterVolunteerValidatorProposal */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposal {
  title: string;
  description: string;
  validator_address: string;
}
export interface UnregisterVolunteerValidatorProposalProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal";
  value: Uint8Array;
}
/** UnregisterVolunteerValidatorProposal */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalAmino {
  title: string;
  description: string;
  validator_address: string;
}
export interface UnregisterVolunteerValidatorProposalAminoMsg {
  type: "xpladev/UnregisterVolunteerValidatorProposal";
  value: UnregisterVolunteerValidatorProposalAmino;
}
/** UnregisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalWithDeposit {
  title: string;
  description: string;
  validator_address: string;
  deposit: string;
}
export interface UnregisterVolunteerValidatorProposalWithDepositProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit";
  value: Uint8Array;
}
/** UnregisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalWithDepositAmino {
  title: string;
  description: string;
  validator_address: string;
  deposit: string;
}
export interface UnregisterVolunteerValidatorProposalWithDepositAminoMsg {
  type: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit";
  value: UnregisterVolunteerValidatorProposalWithDepositAmino;
}
function createBaseRegisterVolunteerValidatorProposal(): RegisterVolunteerValidatorProposal {
  return {
    title: "",
    description: "",
    validator_description: Description.fromPartial({}),
    delegator_address: "",
    validator_address: "",
    pubkey: undefined,
    amount: Coin.fromPartial({})
  };
}
export const RegisterVolunteerValidatorProposal = {
  typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal",
  aminoType: "xpladev/RegisterVolunteerValidatorProposal",
  is(o: any): o is RegisterVolunteerValidatorProposal {
    return o && (o.$typeUrl === RegisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Description.is(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is RegisterVolunteerValidatorProposalAmino {
    return o && (o.$typeUrl === RegisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: RegisterVolunteerValidatorProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.validator_description !== undefined) {
      Description.encode(message.validator_description, writer.uint32(26).fork()).ldelim();
    }
    if (message.delegator_address !== "") {
      writer.uint32(34).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(42).string(message.validator_address);
    }
    if (message.pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(50).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterVolunteerValidatorProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterVolunteerValidatorProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.validator_description = Description.decode(reader, reader.uint32());
          break;
        case 4:
          message.delegator_address = reader.string();
          break;
        case 5:
          message.validator_address = reader.string();
          break;
        case 6:
          message.pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 7:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterVolunteerValidatorProposal>): RegisterVolunteerValidatorProposal {
    const message = createBaseRegisterVolunteerValidatorProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.validator_description = object.validator_description !== undefined && object.validator_description !== null ? Description.fromPartial(object.validator_description) : undefined;
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: RegisterVolunteerValidatorProposalAmino): RegisterVolunteerValidatorProposal {
    const message = createBaseRegisterVolunteerValidatorProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
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
  toAmino(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.validator_description = message.validator_description ? Description.toAmino(message.validator_description) : Description.toAmino(Description.fromPartial({}));
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: RegisterVolunteerValidatorProposalAminoMsg): RegisterVolunteerValidatorProposal {
    return RegisterVolunteerValidatorProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalAminoMsg {
    return {
      type: "xpladev/RegisterVolunteerValidatorProposal",
      value: RegisterVolunteerValidatorProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisterVolunteerValidatorProposalProtoMsg): RegisterVolunteerValidatorProposal {
    return RegisterVolunteerValidatorProposal.decode(message.value);
  },
  toProto(message: RegisterVolunteerValidatorProposal): Uint8Array {
    return RegisterVolunteerValidatorProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal",
      value: RegisterVolunteerValidatorProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseRegisterVolunteerValidatorProposalWithDeposit(): RegisterVolunteerValidatorProposalWithDeposit {
  return {
    title: "",
    description: "",
    validator_description: Description.fromPartial({}),
    delegator_address: "",
    validator_address: "",
    pubkey: undefined,
    amount: Coin.fromPartial({}),
    deposit: ""
  };
}
export const RegisterVolunteerValidatorProposalWithDeposit = {
  typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit",
  aminoType: "xpladev/RegisterVolunteerValidatorProposalWithDeposit",
  is(o: any): o is RegisterVolunteerValidatorProposalWithDeposit {
    return o && (o.$typeUrl === RegisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Description.is(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.is(o.amount) && typeof o.deposit === "string");
  },
  isAmino(o: any): o is RegisterVolunteerValidatorProposalWithDepositAmino {
    return o && (o.$typeUrl === RegisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Description.isAmino(o.validator_description) && typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Coin.isAmino(o.amount) && typeof o.deposit === "string");
  },
  encode(message: RegisterVolunteerValidatorProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.validator_description !== undefined) {
      Description.encode(message.validator_description, writer.uint32(26).fork()).ldelim();
    }
    if (message.delegator_address !== "") {
      writer.uint32(34).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(42).string(message.validator_address);
    }
    if (message.pubkey !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.pubkey), writer.uint32(50).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(58).fork()).ldelim();
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterVolunteerValidatorProposalWithDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.validator_description = Description.decode(reader, reader.uint32());
          break;
        case 4:
          message.delegator_address = reader.string();
          break;
        case 5:
          message.validator_address = reader.string();
          break;
        case 6:
          message.pubkey = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 7:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisterVolunteerValidatorProposalWithDeposit>): RegisterVolunteerValidatorProposalWithDeposit {
    const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.validator_description = object.validator_description !== undefined && object.validator_description !== null ? Description.fromPartial(object.validator_description) : undefined;
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? GlobalDecoderRegistry.fromPartial(object.pubkey) : undefined;
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: RegisterVolunteerValidatorProposalWithDepositAmino): RegisterVolunteerValidatorProposalWithDeposit {
    const message = createBaseRegisterVolunteerValidatorProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
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
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.validator_description = message.validator_description ? Description.toAmino(message.validator_description) : Description.toAmino(Description.fromPartial({}));
    obj.delegator_address = message.delegator_address === "" ? undefined : message.delegator_address;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.pubkey = message.pubkey ? decodePubkey(message.pubkey) : undefined;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    return obj;
  },
  fromAminoMsg(object: RegisterVolunteerValidatorProposalWithDepositAminoMsg): RegisterVolunteerValidatorProposalWithDeposit {
    return RegisterVolunteerValidatorProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositAminoMsg {
    return {
      type: "xpladev/RegisterVolunteerValidatorProposalWithDeposit",
      value: RegisterVolunteerValidatorProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisterVolunteerValidatorProposalWithDepositProtoMsg): RegisterVolunteerValidatorProposalWithDeposit {
    return RegisterVolunteerValidatorProposalWithDeposit.decode(message.value);
  },
  toProto(message: RegisterVolunteerValidatorProposalWithDeposit): Uint8Array {
    return RegisterVolunteerValidatorProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit",
      value: RegisterVolunteerValidatorProposalWithDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Coin.registerTypeUrl();
  }
};
function createBaseUnregisterVolunteerValidatorProposal(): UnregisterVolunteerValidatorProposal {
  return {
    title: "",
    description: "",
    validator_address: ""
  };
}
export const UnregisterVolunteerValidatorProposal = {
  typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal",
  aminoType: "xpladev/UnregisterVolunteerValidatorProposal",
  is(o: any): o is UnregisterVolunteerValidatorProposal {
    return o && (o.$typeUrl === UnregisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string");
  },
  isAmino(o: any): o is UnregisterVolunteerValidatorProposalAmino {
    return o && (o.$typeUrl === UnregisterVolunteerValidatorProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string");
  },
  encode(message: UnregisterVolunteerValidatorProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.validator_address !== "") {
      writer.uint32(26).string(message.validator_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnregisterVolunteerValidatorProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnregisterVolunteerValidatorProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnregisterVolunteerValidatorProposal>): UnregisterVolunteerValidatorProposal {
    const message = createBaseUnregisterVolunteerValidatorProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  },
  fromAmino(object: UnregisterVolunteerValidatorProposalAmino): UnregisterVolunteerValidatorProposal {
    const message = createBaseUnregisterVolunteerValidatorProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    return message;
  },
  toAmino(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    return obj;
  },
  fromAminoMsg(object: UnregisterVolunteerValidatorProposalAminoMsg): UnregisterVolunteerValidatorProposal {
    return UnregisterVolunteerValidatorProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalAminoMsg {
    return {
      type: "xpladev/UnregisterVolunteerValidatorProposal",
      value: UnregisterVolunteerValidatorProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UnregisterVolunteerValidatorProposalProtoMsg): UnregisterVolunteerValidatorProposal {
    return UnregisterVolunteerValidatorProposal.decode(message.value);
  },
  toProto(message: UnregisterVolunteerValidatorProposal): Uint8Array {
    return UnregisterVolunteerValidatorProposal.encode(message).finish();
  },
  toProtoMsg(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal",
      value: UnregisterVolunteerValidatorProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseUnregisterVolunteerValidatorProposalWithDeposit(): UnregisterVolunteerValidatorProposalWithDeposit {
  return {
    title: "",
    description: "",
    validator_address: "",
    deposit: ""
  };
}
export const UnregisterVolunteerValidatorProposalWithDeposit = {
  typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit",
  aminoType: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit",
  is(o: any): o is UnregisterVolunteerValidatorProposalWithDeposit {
    return o && (o.$typeUrl === UnregisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string" && typeof o.deposit === "string");
  },
  isAmino(o: any): o is UnregisterVolunteerValidatorProposalWithDepositAmino {
    return o && (o.$typeUrl === UnregisterVolunteerValidatorProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.validator_address === "string" && typeof o.deposit === "string");
  },
  encode(message: UnregisterVolunteerValidatorProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.validator_address !== "") {
      writer.uint32(26).string(message.validator_address);
    }
    if (message.deposit !== "") {
      writer.uint32(34).string(message.deposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnregisterVolunteerValidatorProposalWithDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.validator_address = reader.string();
          break;
        case 4:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UnregisterVolunteerValidatorProposalWithDeposit>): UnregisterVolunteerValidatorProposalWithDeposit {
    const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.validator_address = object.validator_address ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromAmino(object: UnregisterVolunteerValidatorProposalWithDepositAmino): UnregisterVolunteerValidatorProposalWithDeposit {
    const message = createBaseUnregisterVolunteerValidatorProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = object.validator_address;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.validator_address = message.validator_address === "" ? undefined : message.validator_address;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    return obj;
  },
  fromAminoMsg(object: UnregisterVolunteerValidatorProposalWithDepositAminoMsg): UnregisterVolunteerValidatorProposalWithDeposit {
    return UnregisterVolunteerValidatorProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositAminoMsg {
    return {
      type: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit",
      value: UnregisterVolunteerValidatorProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: UnregisterVolunteerValidatorProposalWithDepositProtoMsg): UnregisterVolunteerValidatorProposalWithDeposit {
    return UnregisterVolunteerValidatorProposalWithDeposit.decode(message.value);
  },
  toProto(message: UnregisterVolunteerValidatorProposalWithDeposit): Uint8Array {
    return UnregisterVolunteerValidatorProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit",
      value: UnregisterVolunteerValidatorProposalWithDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};