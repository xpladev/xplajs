import { IdentifiedPacketFees, IdentifiedPacketFeesAmino } from "./fee";
import { PacketId, PacketIdAmino } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identified_fees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  fee_enabled_channels: FeeEnabledChannel[];
  /** list of registered payees */
  registered_payees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registered_counterparty_payees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forward_relayers: ForwardRelayerAddress[];
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.applications.fee.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateAmino {
  /** list of identified packet fees */
  identified_fees: IdentifiedPacketFeesAmino[];
  /** list of fee enabled channels */
  fee_enabled_channels: FeeEnabledChannelAmino[];
  /** list of registered payees */
  registered_payees: RegisteredPayeeAmino[];
  /** list of registered counterparty payees */
  registered_counterparty_payees: RegisteredCounterpartyPayeeAmino[];
  /** list of forward relayer addresses */
  forward_relayers: ForwardRelayerAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}
export interface FeeEnabledChannelProtoMsg {
  type_url: "/ibc.applications.fee.v1.FeeEnabledChannel";
  value: Uint8Array;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}
export interface FeeEnabledChannelAminoMsg {
  type: "cosmos-sdk/FeeEnabledChannel";
  value: FeeEnabledChannelAmino;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface RegisteredPayeeProtoMsg {
  type_url: "/ibc.applications.fee.v1.RegisteredPayee";
  value: Uint8Array;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeAmino {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface RegisteredPayeeAminoMsg {
  type: "cosmos-sdk/RegisteredPayee";
  value: RegisteredPayeeAmino;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterparty_payee: string;
}
export interface RegisteredCounterpartyPayeeProtoMsg {
  type_url: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee";
  value: Uint8Array;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeAmino {
  /** unique channel identifier */
  channel_id: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterparty_payee: string;
}
export interface RegisteredCounterpartyPayeeAminoMsg {
  type: "cosmos-sdk/RegisteredCounterpartyPayee";
  value: RegisteredCounterpartyPayeeAmino;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packet_id: PacketId;
}
export interface ForwardRelayerAddressProtoMsg {
  type_url: "/ibc.applications.fee.v1.ForwardRelayerAddress";
  value: Uint8Array;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressAmino {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packet_id: PacketIdAmino;
}
export interface ForwardRelayerAddressAminoMsg {
  type: "cosmos-sdk/ForwardRelayerAddress";
  value: ForwardRelayerAddressAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    identified_fees: [],
    fee_enabled_channels: [],
    registered_payees: [],
    registered_counterparty_payees: [],
    forward_relayers: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.fee.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.identified_fees) && (!o.identified_fees.length || IdentifiedPacketFees.is(o.identified_fees[0])) && Array.isArray(o.fee_enabled_channels) && (!o.fee_enabled_channels.length || FeeEnabledChannel.is(o.fee_enabled_channels[0])) && Array.isArray(o.registered_payees) && (!o.registered_payees.length || RegisteredPayee.is(o.registered_payees[0])) && Array.isArray(o.registered_counterparty_payees) && (!o.registered_counterparty_payees.length || RegisteredCounterpartyPayee.is(o.registered_counterparty_payees[0])) && Array.isArray(o.forward_relayers) && (!o.forward_relayers.length || ForwardRelayerAddress.is(o.forward_relayers[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.identified_fees) && (!o.identified_fees.length || IdentifiedPacketFees.isAmino(o.identified_fees[0])) && Array.isArray(o.fee_enabled_channels) && (!o.fee_enabled_channels.length || FeeEnabledChannel.isAmino(o.fee_enabled_channels[0])) && Array.isArray(o.registered_payees) && (!o.registered_payees.length || RegisteredPayee.isAmino(o.registered_payees[0])) && Array.isArray(o.registered_counterparty_payees) && (!o.registered_counterparty_payees.length || RegisteredCounterpartyPayee.isAmino(o.registered_counterparty_payees[0])) && Array.isArray(o.forward_relayers) && (!o.forward_relayers.length || ForwardRelayerAddress.isAmino(o.forward_relayers[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.identified_fees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fee_enabled_channels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registered_payees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registered_counterparty_payees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forward_relayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_fees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.fee_enabled_channels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registered_payees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registered_counterparty_payees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forward_relayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identified_fees = object.identified_fees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.fee_enabled_channels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.registered_payees = object.registered_payees?.map(e => RegisteredPayee.fromPartial(e)) || [];
    message.registered_counterparty_payees = object.registered_counterparty_payees?.map(e => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forward_relayers = object.forward_relayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.identified_fees = object.identified_fees?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
    message.fee_enabled_channels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromAmino(e)) || [];
    message.registered_payees = object.registered_payees?.map(e => RegisteredPayee.fromAmino(e)) || [];
    message.registered_counterparty_payees = object.registered_counterparty_payees?.map(e => RegisteredCounterpartyPayee.fromAmino(e)) || [];
    message.forward_relayers = object.forward_relayers?.map(e => ForwardRelayerAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.identified_fees) {
      obj.identified_fees = message.identified_fees.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.identified_fees = message.identified_fees;
    }
    if (message.fee_enabled_channels) {
      obj.fee_enabled_channels = message.fee_enabled_channels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
    } else {
      obj.fee_enabled_channels = message.fee_enabled_channels;
    }
    if (message.registered_payees) {
      obj.registered_payees = message.registered_payees.map(e => e ? RegisteredPayee.toAmino(e) : undefined);
    } else {
      obj.registered_payees = message.registered_payees;
    }
    if (message.registered_counterparty_payees) {
      obj.registered_counterparty_payees = message.registered_counterparty_payees.map(e => e ? RegisteredCounterpartyPayee.toAmino(e) : undefined);
    } else {
      obj.registered_counterparty_payees = message.registered_counterparty_payees;
    }
    if (message.forward_relayers) {
      obj.forward_relayers = message.forward_relayers.map(e => e ? ForwardRelayerAddress.toAmino(e) : undefined);
    } else {
      obj.forward_relayers = message.forward_relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedPacketFees.registerTypeUrl();
    FeeEnabledChannel.registerTypeUrl();
    RegisteredPayee.registerTypeUrl();
    RegisteredCounterpartyPayee.registerTypeUrl();
    ForwardRelayerAddress.registerTypeUrl();
  }
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const FeeEnabledChannel = {
  typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
  aminoType: "cosmos-sdk/FeeEnabledChannel",
  is(o: any): o is FeeEnabledChannel {
    return o && (o.$typeUrl === FeeEnabledChannel.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is FeeEnabledChannelAmino {
    return o && (o.$typeUrl === FeeEnabledChannel.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: FeeEnabledChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: FeeEnabledChannelAmino): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: FeeEnabledChannel): FeeEnabledChannelAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: FeeEnabledChannelAminoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.fromAmino(object.value);
  },
  toAminoMsg(message: FeeEnabledChannel): FeeEnabledChannelAminoMsg {
    return {
      type: "cosmos-sdk/FeeEnabledChannel",
      value: FeeEnabledChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: FeeEnabledChannelProtoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.decode(message.value);
  },
  toProto(message: FeeEnabledChannel): Uint8Array {
    return FeeEnabledChannel.encode(message).finish();
  },
  toProtoMsg(message: FeeEnabledChannel): FeeEnabledChannelProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
      value: FeeEnabledChannel.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channel_id: "",
    relayer: "",
    payee: ""
  };
}
export const RegisteredPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
  aminoType: "cosmos-sdk/RegisteredPayee",
  is(o: any): o is RegisteredPayee {
    return o && (o.$typeUrl === RegisteredPayee.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.payee === "string");
  },
  isAmino(o: any): o is RegisteredPayeeAmino {
    return o && (o.$typeUrl === RegisteredPayee.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.payee === "string");
  },
  encode(message: RegisteredPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel_id !== "") {
      writer.uint32(10).string(message.channel_id);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel_id = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisteredPayee>): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channel_id = object.channel_id ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: RegisteredPayeeAmino): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: RegisteredPayee): RegisteredPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: RegisteredPayeeAminoMsg): RegisteredPayee {
    return RegisteredPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredPayee): RegisteredPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredPayee",
      value: RegisteredPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredPayeeProtoMsg): RegisteredPayee {
    return RegisteredPayee.decode(message.value);
  },
  toProto(message: RegisteredPayee): Uint8Array {
    return RegisteredPayee.encode(message).finish();
  },
  toProtoMsg(message: RegisteredPayee): RegisteredPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
      value: RegisteredPayee.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channel_id: "",
    relayer: "",
    counterparty_payee: ""
  };
}
export const RegisteredCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
  aminoType: "cosmos-sdk/RegisteredCounterpartyPayee",
  is(o: any): o is RegisteredCounterpartyPayee {
    return o && (o.$typeUrl === RegisteredCounterpartyPayee.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.counterparty_payee === "string");
  },
  isAmino(o: any): o is RegisteredCounterpartyPayeeAmino {
    return o && (o.$typeUrl === RegisteredCounterpartyPayee.typeUrl || typeof o.channel_id === "string" && typeof o.relayer === "string" && typeof o.counterparty_payee === "string");
  },
  encode(message: RegisteredCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel_id !== "") {
      writer.uint32(10).string(message.channel_id);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterparty_payee !== "") {
      writer.uint32(26).string(message.counterparty_payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel_id = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterparty_payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channel_id = object.channel_id ?? "";
    message.relayer = object.relayer ?? "";
    message.counterparty_payee = object.counterparty_payee ?? "";
    return message;
  },
  fromAmino(object: RegisteredCounterpartyPayeeAmino): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterparty_payee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterparty_payee === "" ? undefined : message.counterparty_payee;
    return obj;
  },
  fromAminoMsg(object: RegisteredCounterpartyPayeeAminoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredCounterpartyPayeeProtoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.decode(message.value);
  },
  toProto(message: RegisteredCounterpartyPayee): Uint8Array {
    return RegisteredCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: "",
    packet_id: PacketId.fromPartial({})
  };
}
export const ForwardRelayerAddress = {
  typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
  aminoType: "cosmos-sdk/ForwardRelayerAddress",
  is(o: any): o is ForwardRelayerAddress {
    return o && (o.$typeUrl === ForwardRelayerAddress.typeUrl || typeof o.address === "string" && PacketId.is(o.packet_id));
  },
  isAmino(o: any): o is ForwardRelayerAddressAmino {
    return o && (o.$typeUrl === ForwardRelayerAddress.typeUrl || typeof o.address === "string" && PacketId.isAmino(o.packet_id));
  },
  encode(message: ForwardRelayerAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packet_id !== undefined) {
      PacketId.encode(message.packet_id, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.packet_id = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packet_id = object.packet_id !== undefined && object.packet_id !== null ? PacketId.fromPartial(object.packet_id) : undefined;
    return message;
  },
  fromAmino(object: ForwardRelayerAddressAmino): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packet_id = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: ForwardRelayerAddress): ForwardRelayerAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.packet_id = message.packet_id ? PacketId.toAmino(message.packet_id) : undefined;
    return obj;
  },
  fromAminoMsg(object: ForwardRelayerAddressAminoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressAminoMsg {
    return {
      type: "cosmos-sdk/ForwardRelayerAddress",
      value: ForwardRelayerAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: ForwardRelayerAddressProtoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.decode(message.value);
  },
  toProto(message: ForwardRelayerAddress): Uint8Array {
    return ForwardRelayerAddress.encode(message).finish();
  },
  toProtoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
      value: ForwardRelayerAddress.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PacketId.registerTypeUrl();
  }
};