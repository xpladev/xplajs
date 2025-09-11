import { Height, HeightAmino } from "../../client/v1/client";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN, or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A channel has just started the opening handshake. */
  STATE_INIT = 1,
  /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
  STATE_TRYOPEN = 2,
  /**
   * STATE_OPEN - A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   */
  STATE_OPEN = 3,
  /**
   * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
   * packets.
   */
  STATE_CLOSED = 4,
  UNRECOGNIZED = -1,
}
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.STATE_CLOSED:
      return "STATE_CLOSED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Order defines if a channel is ORDERED or UNORDERED */
export enum Order {
  /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
  ORDER_NONE_UNSPECIFIED = 0,
  /**
   * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   */
  ORDER_UNORDERED = 1,
  /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
  ORDER_ORDERED = 2,
  UNRECOGNIZED = -1,
}
export const OrderAmino = Order;
export function orderFromJSON(object: any): Order {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;
    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;
    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}
export function orderToJSON(object: Order): string {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";
    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";
    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";
    case Order.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 * @name Channel
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Channel
 */
export interface Channel {
  /**
   * current state of the channel end
   */
  state: State;
  /**
   * whether the channel is ordered or unordered
   */
  ordering: Order;
  /**
   * counterparty channel end
   */
  counterparty: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connectionHops: string[];
  /**
   * opaque channel version, which is agreed upon during the handshake
   */
  version: string;
}
export interface ChannelProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Channel";
  value: Uint8Array;
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 * @name ChannelAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Channel
 */
export interface ChannelAmino {
  /**
   * current state of the channel end
   */
  state: State;
  /**
   * whether the channel is ordered or unordered
   */
  ordering: Order;
  /**
   * counterparty channel end
   */
  counterparty: CounterpartyAmino;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops: string[];
  /**
   * opaque channel version, which is agreed upon during the handshake
   */
  version: string;
}
export interface ChannelAminoMsg {
  type: "cosmos-sdk/Channel";
  value: ChannelAmino;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 * @name IdentifiedChannel
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.IdentifiedChannel
 */
export interface IdentifiedChannel {
  /**
   * current state of the channel end
   */
  state: State;
  /**
   * whether the channel is ordered or unordered
   */
  ordering: Order;
  /**
   * counterparty channel end
   */
  counterparty: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connectionHops: string[];
  /**
   * opaque channel version, which is agreed upon during the handshake
   */
  version: string;
  /**
   * port identifier
   */
  portId: string;
  /**
   * channel identifier
   */
  channelId: string;
}
export interface IdentifiedChannelProtoMsg {
  typeUrl: "/ibc.core.channel.v1.IdentifiedChannel";
  value: Uint8Array;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 * @name IdentifiedChannelAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.IdentifiedChannel
 */
export interface IdentifiedChannelAmino {
  /**
   * current state of the channel end
   */
  state: State;
  /**
   * whether the channel is ordered or unordered
   */
  ordering: Order;
  /**
   * counterparty channel end
   */
  counterparty: CounterpartyAmino;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops: string[];
  /**
   * opaque channel version, which is agreed upon during the handshake
   */
  version: string;
  /**
   * port identifier
   */
  port_id: string;
  /**
   * channel identifier
   */
  channel_id: string;
}
export interface IdentifiedChannelAminoMsg {
  type: "cosmos-sdk/IdentifiedChannel";
  value: IdentifiedChannelAmino;
}
/**
 * Counterparty defines a channel end counterparty
 * @name Counterparty
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Counterparty
 */
export interface Counterparty {
  /**
   * port on the counterparty chain which owns the other end of the channel.
   */
  portId: string;
  /**
   * channel end on the counterparty chain
   */
  channelId: string;
}
export interface CounterpartyProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Counterparty";
  value: Uint8Array;
}
/**
 * Counterparty defines a channel end counterparty
 * @name CounterpartyAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Counterparty
 */
export interface CounterpartyAmino {
  /**
   * port on the counterparty chain which owns the other end of the channel.
   */
  port_id: string;
  /**
   * channel end on the counterparty chain
   */
  channel_id: string;
}
export interface CounterpartyAminoMsg {
  type: "cosmos-sdk/Counterparty";
  value: CounterpartyAmino;
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name Packet
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Packet
 */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: bigint;
  /**
   * identifies the port on the sending chain.
   */
  sourcePort: string;
  /**
   * identifies the channel end on the sending chain.
   */
  sourceChannel: string;
  /**
   * identifies the port on the receiving chain.
   */
  destinationPort: string;
  /**
   * identifies the channel end on the receiving chain.
   */
  destinationChannel: string;
  /**
   * actual opaque bytes transferred directly to the application module
   */
  data: Uint8Array;
  /**
   * block height after which the packet times out
   */
  timeoutHeight: Height;
  /**
   * block timestamp (in nanoseconds) after which the packet times out
   */
  timeoutTimestamp: bigint;
}
export interface PacketProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Packet";
  value: Uint8Array;
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name PacketAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Packet
 */
export interface PacketAmino {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: string;
  /**
   * identifies the port on the sending chain.
   */
  source_port: string;
  /**
   * identifies the channel end on the sending chain.
   */
  source_channel: string;
  /**
   * identifies the port on the receiving chain.
   */
  destination_port: string;
  /**
   * identifies the channel end on the receiving chain.
   */
  destination_channel: string;
  /**
   * actual opaque bytes transferred directly to the application module
   */
  data: string;
  /**
   * block height after which the packet times out
   */
  timeout_height: HeightAmino;
  /**
   * block timestamp (in nanoseconds) after which the packet times out
   */
  timeout_timestamp: string;
}
export interface PacketAminoMsg {
  type: "cosmos-sdk/Packet";
  value: PacketAmino;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 * @name PacketState
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketState
 */
export interface PacketState {
  /**
   * channel port identifier.
   */
  portId: string;
  /**
   * channel unique identifier.
   */
  channelId: string;
  /**
   * packet sequence.
   */
  sequence: bigint;
  /**
   * embedded data that represents packet state.
   */
  data: Uint8Array;
}
export interface PacketStateProtoMsg {
  typeUrl: "/ibc.core.channel.v1.PacketState";
  value: Uint8Array;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 * @name PacketStateAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketState
 */
export interface PacketStateAmino {
  /**
   * channel port identifier.
   */
  port_id: string;
  /**
   * channel unique identifier.
   */
  channel_id: string;
  /**
   * packet sequence.
   */
  sequence: string;
  /**
   * embedded data that represents packet state.
   */
  data: string;
}
export interface PacketStateAminoMsg {
  type: "cosmos-sdk/PacketState";
  value: PacketStateAmino;
}
/**
 * PacketId is an identifier for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 * @name PacketId
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketId
 */
export interface PacketId {
  /**
   * channel port identifier
   */
  portId: string;
  /**
   * channel unique identifier
   */
  channelId: string;
  /**
   * packet sequence
   */
  sequence: bigint;
}
export interface PacketIdProtoMsg {
  typeUrl: "/ibc.core.channel.v1.PacketId";
  value: Uint8Array;
}
/**
 * PacketId is an identifier for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 * @name PacketIdAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketId
 */
export interface PacketIdAmino {
  /**
   * channel port identifier
   */
  port_id: string;
  /**
   * channel unique identifier
   */
  channel_id: string;
  /**
   * packet sequence
   */
  sequence: string;
}
export interface PacketIdAminoMsg {
  type: "cosmos-sdk/PacketId";
  value: PacketIdAmino;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 * @name Acknowledgement
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Acknowledgement
 */
export interface Acknowledgement {
  result?: Uint8Array;
  error?: string;
}
export interface AcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Acknowledgement";
  value: Uint8Array;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 * @name AcknowledgementAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Acknowledgement
 */
export interface AcknowledgementAmino {
  result?: string;
  error?: string;
}
export interface AcknowledgementAminoMsg {
  type: "cosmos-sdk/Acknowledgement";
  value: AcknowledgementAmino;
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 * @name Timeout
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Timeout
 */
export interface Timeout {
  /**
   * block height after which the packet times out
   */
  height: Height;
  /**
   * block timestamp (in nanoseconds) after which the packet times out
   */
  timestamp: bigint;
}
export interface TimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v1.Timeout";
  value: Uint8Array;
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 * @name TimeoutAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Timeout
 */
export interface TimeoutAmino {
  /**
   * block height after which the packet times out
   */
  height: HeightAmino;
  /**
   * block timestamp (in nanoseconds) after which the packet times out
   */
  timestamp: string;
}
export interface TimeoutAminoMsg {
  type: "cosmos-sdk/Timeout";
  value: TimeoutAmino;
}
function createBaseChannel(): Channel {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connectionHops: [],
    version: ""
  };
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 * @name Channel
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Channel
 */
export const Channel = {
  typeUrl: "/ibc.core.channel.v1.Channel",
  aminoType: "cosmos-sdk/Channel",
  is(o: any): o is Channel {
    return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string");
  },
  isAmino(o: any): o is ChannelAmino {
    return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  encode(message: Channel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Channel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.ordering = reader.int32() as any;
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Channel>): Channel {
    const message = createBaseChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connectionHops = object.connectionHops?.map(e => e) || [];
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: ChannelAmino): Channel {
    const message = createBaseChannel();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connectionHops = object.connection_hops?.map(e => e) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: Channel): ChannelAmino {
    const obj: any = {};
    obj.state = message.state === 0 ? undefined : message.state;
    obj.ordering = message.ordering === 0 ? undefined : message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map(e => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: ChannelAminoMsg): Channel {
    return Channel.fromAmino(object.value);
  },
  toAminoMsg(message: Channel): ChannelAminoMsg {
    return {
      type: "cosmos-sdk/Channel",
      value: Channel.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelProtoMsg): Channel {
    return Channel.decode(message.value);
  },
  toProto(message: Channel): Uint8Array {
    return Channel.encode(message).finish();
  },
  toProtoMsg(message: Channel): ChannelProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Channel",
      value: Channel.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Channel.typeUrl)) {
      return;
    }
    Counterparty.registerTypeUrl();
  }
};
function createBaseIdentifiedChannel(): IdentifiedChannel {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connectionHops: [],
    version: "",
    portId: "",
    channelId: ""
  };
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 * @name IdentifiedChannel
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.IdentifiedChannel
 */
export const IdentifiedChannel = {
  typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
  aminoType: "cosmos-sdk/IdentifiedChannel",
  is(o: any): o is IdentifiedChannel {
    return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connectionHops) && (!o.connectionHops.length || typeof o.connectionHops[0] === "string") && typeof o.version === "string" && typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isAmino(o: any): o is IdentifiedChannelAmino {
    return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: IdentifiedChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connectionHops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.portId !== "") {
      writer.uint32(50).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(58).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.ordering = reader.int32() as any;
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connectionHops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.portId = reader.string();
          break;
        case 7:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentifiedChannel>): IdentifiedChannel {
    const message = createBaseIdentifiedChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connectionHops = object.connectionHops?.map(e => e) || [];
    message.version = object.version ?? "";
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: IdentifiedChannelAmino): IdentifiedChannel {
    const message = createBaseIdentifiedChannel();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = object.ordering;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connectionHops = object.connection_hops?.map(e => e) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: IdentifiedChannel): IdentifiedChannelAmino {
    const obj: any = {};
    obj.state = message.state === 0 ? undefined : message.state;
    obj.ordering = message.ordering === 0 ? undefined : message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    if (message.connectionHops) {
      obj.connection_hops = message.connectionHops.map(e => e);
    } else {
      obj.connection_hops = message.connectionHops;
    }
    obj.version = message.version === "" ? undefined : message.version;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: IdentifiedChannelAminoMsg): IdentifiedChannel {
    return IdentifiedChannel.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedChannel): IdentifiedChannelAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedChannel",
      value: IdentifiedChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedChannelProtoMsg): IdentifiedChannel {
    return IdentifiedChannel.decode(message.value);
  },
  toProto(message: IdentifiedChannel): Uint8Array {
    return IdentifiedChannel.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedChannel): IdentifiedChannelProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
      value: IdentifiedChannel.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(IdentifiedChannel.typeUrl)) {
      return;
    }
    Counterparty.registerTypeUrl();
  }
};
function createBaseCounterparty(): Counterparty {
  return {
    portId: "",
    channelId: ""
  };
}
/**
 * Counterparty defines a channel end counterparty
 * @name Counterparty
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Counterparty
 */
export const Counterparty = {
  typeUrl: "/ibc.core.channel.v1.Counterparty",
  aminoType: "cosmos-sdk/Counterparty",
  is(o: any): o is Counterparty {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isAmino(o: any): o is CounterpartyAmino {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: Counterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: CounterpartyAmino): Counterparty {
    const message = createBaseCounterparty();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: Counterparty): CounterpartyAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: CounterpartyAminoMsg): Counterparty {
    return Counterparty.fromAmino(object.value);
  },
  toAminoMsg(message: Counterparty): CounterpartyAminoMsg {
    return {
      type: "cosmos-sdk/Counterparty",
      value: Counterparty.toAmino(message)
    };
  },
  fromProtoMsg(message: CounterpartyProtoMsg): Counterparty {
    return Counterparty.decode(message.value);
  },
  toProto(message: Counterparty): Uint8Array {
    return Counterparty.encode(message).finish();
  },
  toProtoMsg(message: Counterparty): CounterpartyProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Counterparty",
      value: Counterparty.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePacket(): Packet {
  return {
    sequence: BigInt(0),
    sourcePort: "",
    sourceChannel: "",
    destinationPort: "",
    destinationChannel: "",
    data: new Uint8Array(),
    timeoutHeight: Height.fromPartial({}),
    timeoutTimestamp: BigInt(0)
  };
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name Packet
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Packet
 */
export const Packet = {
  typeUrl: "/ibc.core.channel.v1.Packet",
  aminoType: "cosmos-sdk/Packet",
  is(o: any): o is Packet {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && typeof o.destinationPort === "string" && typeof o.destinationChannel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.is(o.timeoutHeight) && typeof o.timeoutTimestamp === "bigint");
  },
  isAmino(o: any): o is PacketAmino {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
  },
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }
    if (message.destinationPort !== "") {
      writer.uint32(34).string(message.destinationPort);
    }
    if (message.destinationChannel !== "") {
      writer.uint32(42).string(message.destinationChannel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(64).uint64(message.timeoutTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.sourcePort = reader.string();
          break;
        case 3:
          message.sourceChannel = reader.string();
          break;
        case 4:
          message.destinationPort = reader.string();
          break;
        case 5:
          message.destinationChannel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeoutTimestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = createBasePacket();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.destinationPort = object.destinationPort ?? "";
    message.destinationChannel = object.destinationChannel ?? "";
    message.data = object.data ?? new Uint8Array();
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketAmino): Packet {
    const message = createBasePacket();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.source_port !== undefined && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    if (object.destination_port !== undefined && object.destination_port !== null) {
      message.destinationPort = object.destination_port;
    }
    if (object.destination_channel !== undefined && object.destination_channel !== null) {
      message.destinationChannel = object.destination_channel;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeoutHeight = Height.fromAmino(object.timeout_height);
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    return message;
  },
  toAmino(message: Packet): PacketAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
    obj.destination_port = message.destinationPort === "" ? undefined : message.destinationPort;
    obj.destination_channel = message.destinationChannel === "" ? undefined : message.destinationChannel;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAminoMsg): Packet {
    return Packet.fromAmino(object.value);
  },
  toAminoMsg(message: Packet): PacketAminoMsg {
    return {
      type: "cosmos-sdk/Packet",
      value: Packet.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketProtoMsg): Packet {
    return Packet.decode(message.value);
  },
  toProto(message: Packet): Uint8Array {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message: Packet): PacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Packet",
      value: Packet.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Packet.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBasePacketState(): PacketState {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0),
    data: new Uint8Array()
  };
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 * @name PacketState
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketState
 */
export const PacketState = {
  typeUrl: "/ibc.core.channel.v1.PacketState",
  aminoType: "cosmos-sdk/PacketState",
  is(o: any): o is PacketState {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is PacketStateAmino {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: PacketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketState>): PacketState {
    const message = createBasePacketState();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketStateAmino): PacketState {
    const message = createBasePacketState();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: PacketState): PacketStateAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketStateAminoMsg): PacketState {
    return PacketState.fromAmino(object.value);
  },
  toAminoMsg(message: PacketState): PacketStateAminoMsg {
    return {
      type: "cosmos-sdk/PacketState",
      value: PacketState.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketStateProtoMsg): PacketState {
    return PacketState.decode(message.value);
  },
  toProto(message: PacketState): Uint8Array {
    return PacketState.encode(message).finish();
  },
  toProtoMsg(message: PacketState): PacketStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketState",
      value: PacketState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePacketId(): PacketId {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
/**
 * PacketId is an identifier for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 * @name PacketId
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketId
 */
export const PacketId = {
  typeUrl: "/ibc.core.channel.v1.PacketId",
  aminoType: "cosmos-sdk/PacketId",
  is(o: any): o is PacketId {
    return o && (o.$typeUrl === PacketId.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is PacketIdAmino {
    return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: PacketId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketId>): PacketId {
    const message = createBasePacketId();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketIdAmino): PacketId {
    const message = createBasePacketId();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PacketId): PacketIdAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketIdAminoMsg): PacketId {
    return PacketId.fromAmino(object.value);
  },
  toAminoMsg(message: PacketId): PacketIdAminoMsg {
    return {
      type: "cosmos-sdk/PacketId",
      value: PacketId.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketIdProtoMsg): PacketId {
    return PacketId.decode(message.value);
  },
  toProto(message: PacketId): Uint8Array {
    return PacketId.encode(message).finish();
  },
  toProtoMsg(message: PacketId): PacketIdProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketId",
      value: PacketId.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAcknowledgement(): Acknowledgement {
  return {
    result: undefined,
    error: undefined
  };
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 * @name Acknowledgement
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Acknowledgement
 */
export const Acknowledgement = {
  typeUrl: "/ibc.core.channel.v1.Acknowledgement",
  aminoType: "cosmos-sdk/Acknowledgement",
  is(o: any): o is Acknowledgement {
    return o && o.$typeUrl === Acknowledgement.typeUrl;
  },
  isAmino(o: any): o is AcknowledgementAmino {
    return o && o.$typeUrl === Acknowledgement.typeUrl;
  },
  encode(message: Acknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Acknowledgement>): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.result = object.result ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
  fromAmino(object: AcknowledgementAmino): Acknowledgement {
    const message = createBaseAcknowledgement();
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Acknowledgement): AcknowledgementAmino {
    const obj: any = {};
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    obj.error = message.error === null ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: AcknowledgementAminoMsg): Acknowledgement {
    return Acknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: Acknowledgement): AcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/Acknowledgement",
      value: Acknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: AcknowledgementProtoMsg): Acknowledgement {
    return Acknowledgement.decode(message.value);
  },
  toProto(message: Acknowledgement): Uint8Array {
    return Acknowledgement.encode(message).finish();
  },
  toProtoMsg(message: Acknowledgement): AcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Acknowledgement",
      value: Acknowledgement.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTimeout(): Timeout {
  return {
    height: Height.fromPartial({}),
    timestamp: BigInt(0)
  };
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 * @name Timeout
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.Timeout
 */
export const Timeout = {
  typeUrl: "/ibc.core.channel.v1.Timeout",
  aminoType: "cosmos-sdk/Timeout",
  is(o: any): o is Timeout {
    return o && (o.$typeUrl === Timeout.typeUrl || Height.is(o.height) && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is TimeoutAmino {
    return o && (o.$typeUrl === Timeout.typeUrl || Height.isAmino(o.height) && typeof o.timestamp === "bigint");
  },
  encode(message: Timeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Timeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Timeout>): Timeout {
    const message = createBaseTimeout();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TimeoutAmino): Timeout {
    const message = createBaseTimeout();
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: Timeout): TimeoutAmino {
    const obj: any = {};
    obj.height = message.height ? Height.toAmino(message.height) : {};
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimeoutAminoMsg): Timeout {
    return Timeout.fromAmino(object.value);
  },
  toAminoMsg(message: Timeout): TimeoutAminoMsg {
    return {
      type: "cosmos-sdk/Timeout",
      value: Timeout.toAmino(message)
    };
  },
  fromProtoMsg(message: TimeoutProtoMsg): Timeout {
    return Timeout.decode(message.value);
  },
  toProto(message: Timeout): Uint8Array {
    return Timeout.encode(message).finish();
  },
  toProtoMsg(message: Timeout): TimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Timeout",
      value: Timeout.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Timeout.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};