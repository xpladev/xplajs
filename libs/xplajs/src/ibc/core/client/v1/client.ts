import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { Plan, PlanAmino } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
  /** client identifier */
  client_id: string;
  /** client state */
  client_state?: Any;
}
export interface IdentifiedClientStateProtoMsg {
  type_url: "/ibc.core.client.v1.IdentifiedClientState";
  value: Uint8Array;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateAmino {
  /** client identifier */
  client_id: string;
  /** client state */
  client_state?: AnyAmino;
}
export interface IdentifiedClientStateAminoMsg {
  type: "cosmos-sdk/IdentifiedClientState";
  value: IdentifiedClientStateAmino;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeight {
  /** consensus state height */
  height: Height;
  /** consensus state */
  consensus_state?: Any;
}
export interface ConsensusStateWithHeightProtoMsg {
  type_url: "/ibc.core.client.v1.ConsensusStateWithHeight";
  value: Uint8Array;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */
export interface ConsensusStateWithHeightAmino {
  /** consensus state height */
  height: HeightAmino;
  /** consensus state */
  consensus_state?: AnyAmino;
}
export interface ConsensusStateWithHeightAminoMsg {
  type: "cosmos-sdk/ConsensusStateWithHeight";
  value: ConsensusStateWithHeightAmino;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
  /** client identifier */
  client_id: string;
  /** consensus states and their heights associated with the client */
  consensus_states: ConsensusStateWithHeight[];
}
export interface ClientConsensusStatesProtoMsg {
  type_url: "/ibc.core.client.v1.ClientConsensusStates";
  value: Uint8Array;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesAmino {
  /** client identifier */
  client_id: string;
  /** consensus states and their heights associated with the client */
  consensus_states: ConsensusStateWithHeightAmino[];
}
export interface ClientConsensusStatesAminoMsg {
  type: "cosmos-sdk/ClientConsensusStates";
  value: ClientConsensusStatesAmino;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface Height {
  /** the revision that the client is currently on */
  revision_number: bigint;
  /** the height within the given revision */
  revision_height: bigint;
}
export interface HeightProtoMsg {
  type_url: "/ibc.core.client.v1.Height";
  value: Uint8Array;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export interface HeightAmino {
  /** the revision that the client is currently on */
  revision_number: string;
  /** the height within the given revision */
  revision_height: string;
}
export interface HeightAminoMsg {
  type: "cosmos-sdk/Height";
  value: HeightAmino;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
  /**
   * allowed_clients defines the list of allowed client state types which can be created
   * and interacted with. If a client type is removed from the allowed clients list, usage
   * of this client will be disabled until it is added again to the list.
   */
  allowed_clients: string[];
}
export interface ParamsProtoMsg {
  type_url: "/ibc.core.client.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsAmino {
  /**
   * allowed_clients defines the list of allowed client state types which can be created
   * and interacted with. If a client type is removed from the allowed clients list, usage
   * of this client will be disabled until it is added again to the list.
   */
  allowed_clients: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * ClientUpdateProposal is a legacy governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 * 
 * Deprecated: Please use MsgRecoverClient in favour of this message type.
 */
/** @deprecated */
export interface ClientUpdateProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  subject_client_id: string;
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   */
  substitute_client_id: string;
}
export interface ClientUpdateProposalProtoMsg {
  type_url: "/ibc.core.client.v1.ClientUpdateProposal";
  value: Uint8Array;
}
/**
 * ClientUpdateProposal is a legacy governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 * 
 * Deprecated: Please use MsgRecoverClient in favour of this message type.
 */
/** @deprecated */
export interface ClientUpdateProposalAmino {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the client identifier for the client to be updated if the proposal passes */
  subject_client_id: string;
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   */
  substitute_client_id: string;
}
export interface ClientUpdateProposalAminoMsg {
  type: "cosmos-sdk/ClientUpdateProposal";
  value: ClientUpdateProposalAmino;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 * 
 * Deprecated: Please use MsgIBCSoftwareUpgrade in favour of this message type.
 */
/** @deprecated */
export interface UpgradeProposal {
  title: string;
  description: string;
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   */
  upgraded_client_state?: Any;
}
export interface UpgradeProposalProtoMsg {
  type_url: "/ibc.core.client.v1.UpgradeProposal";
  value: Uint8Array;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 * 
 * Deprecated: Please use MsgIBCSoftwareUpgrade in favour of this message type.
 */
/** @deprecated */
export interface UpgradeProposalAmino {
  title: string;
  description: string;
  plan: PlanAmino;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   */
  upgraded_client_state?: AnyAmino;
}
export interface UpgradeProposalAminoMsg {
  type: "cosmos-sdk/UpgradeProposal";
  value: UpgradeProposalAmino;
}
function createBaseIdentifiedClientState(): IdentifiedClientState {
  return {
    client_id: "",
    client_state: undefined
  };
}
export const IdentifiedClientState = {
  typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
  aminoType: "cosmos-sdk/IdentifiedClientState",
  is(o: any): o is IdentifiedClientState {
    return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is IdentifiedClientStateAmino {
    return o && (o.$typeUrl === IdentifiedClientState.typeUrl || typeof o.client_id === "string");
  },
  encode(message: IdentifiedClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentifiedClientState>): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.client_id = object.client_id ?? "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    return message;
  },
  fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.client_state = Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino {
    const obj: any = {};
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState {
    return IdentifiedClientState.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedClientState",
      value: IdentifiedClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState {
    return IdentifiedClientState.decode(message.value);
  },
  toProto(message: IdentifiedClientState): Uint8Array {
    return IdentifiedClientState.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
      value: IdentifiedClientState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return {
    height: Height.fromPartial({}),
    consensus_state: undefined
  };
}
export const ConsensusStateWithHeight = {
  typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
  aminoType: "cosmos-sdk/ConsensusStateWithHeight",
  is(o: any): o is ConsensusStateWithHeight {
    return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.is(o.height));
  },
  isAmino(o: any): o is ConsensusStateWithHeightAmino {
    return o && (o.$typeUrl === ConsensusStateWithHeight.typeUrl || Height.isAmino(o.height));
  },
  encode(message: ConsensusStateWithHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateWithHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusStateWithHeight>): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    return message;
  },
  fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino {
    const obj: any = {};
    obj.height = message.height ? Height.toAmino(message.height) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.decode(message.value);
  },
  toProto(message: ConsensusStateWithHeight): Uint8Array {
    return ConsensusStateWithHeight.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseClientConsensusStates(): ClientConsensusStates {
  return {
    client_id: "",
    consensus_states: []
  };
}
export const ClientConsensusStates = {
  typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
  aminoType: "cosmos-sdk/ClientConsensusStates",
  is(o: any): o is ClientConsensusStates {
    return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.is(o.consensus_states[0])));
  },
  isAmino(o: any): o is ClientConsensusStatesAmino {
    return o && (o.$typeUrl === ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
  },
  encode(message: ClientConsensusStates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.consensus_states) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientConsensusStates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientConsensusStates>): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.client_id = object.client_id ?? "";
    message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino {
    const obj: any = {};
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    if (message.consensus_states) {
      obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
    } else {
      obj.consensus_states = message.consensus_states;
    }
    return obj;
  },
  fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates {
    return ClientConsensusStates.fromAmino(object.value);
  },
  toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg {
    return {
      type: "cosmos-sdk/ClientConsensusStates",
      value: ClientConsensusStates.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates {
    return ClientConsensusStates.decode(message.value);
  },
  toProto(message: ClientConsensusStates): Uint8Array {
    return ClientConsensusStates.encode(message).finish();
  },
  toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
      value: ClientConsensusStates.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ConsensusStateWithHeight.registerTypeUrl();
  }
};
function createBaseHeight(): Height {
  return {
    revision_number: BigInt(0),
    revision_height: BigInt(0)
  };
}
export const Height = {
  typeUrl: "/ibc.core.client.v1.Height",
  aminoType: "cosmos-sdk/Height",
  is(o: any): o is Height {
    return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isAmino(o: any): o is HeightAmino {
    return o && (o.$typeUrl === Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  encode(message: Height, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.revision_number !== BigInt(0)) {
      writer.uint32(8).uint64(message.revision_number);
    }
    if (message.revision_height !== BigInt(0)) {
      writer.uint32(16).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Height {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.revision_number = reader.uint64();
          break;
        case 2:
          message.revision_height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Height>): Height {
    const message = createBaseHeight();
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HeightAmino): Height {
    return {
      revision_number: BigInt(object.revision_number || "0"),
      revision_height: BigInt(object.revision_height || "0")
    };
  },
  toAmino(message: Height): HeightAmino {
    const obj: any = {};
    obj.revision_number = message.revision_number !== BigInt(0) ? message.revision_number?.toString() : undefined;
    obj.revision_height = message.revision_height !== BigInt(0) ? message.revision_height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HeightAminoMsg): Height {
    return Height.fromAmino(object.value);
  },
  toAminoMsg(message: Height): HeightAminoMsg {
    return {
      type: "cosmos-sdk/Height",
      value: Height.toAmino(message)
    };
  },
  fromProtoMsg(message: HeightProtoMsg): Height {
    return Height.decode(message.value);
  },
  toProto(message: Height): Uint8Array {
    return Height.encode(message).finish();
  },
  toProtoMsg(message: Height): HeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.Height",
      value: Height.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    allowed_clients: []
  };
}
export const Params = {
  typeUrl: "/ibc.core.client.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowed_clients) {
      writer.uint32(10).string(v!);
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
          message.allowed_clients.push(reader.string());
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
    message.allowed_clients = object.allowed_clients?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowed_clients = object.allowed_clients?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowed_clients) {
      obj.allowed_clients = message.allowed_clients.map(e => e);
    } else {
      obj.allowed_clients = message.allowed_clients;
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.core.client.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseClientUpdateProposal(): ClientUpdateProposal {
  return {
    title: "",
    description: "",
    subject_client_id: "",
    substitute_client_id: ""
  };
}
export const ClientUpdateProposal = {
  typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
  aminoType: "cosmos-sdk/ClientUpdateProposal",
  is(o: any): o is ClientUpdateProposal {
    return o && (o.$typeUrl === ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
  },
  isAmino(o: any): o is ClientUpdateProposalAmino {
    return o && (o.$typeUrl === ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
  },
  encode(message: ClientUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.subject_client_id !== "") {
      writer.uint32(26).string(message.subject_client_id);
    }
    if (message.substitute_client_id !== "") {
      writer.uint32(34).string(message.substitute_client_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientUpdateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();
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
          message.subject_client_id = reader.string();
          break;
        case 4:
          message.substitute_client_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientUpdateProposal>): ClientUpdateProposal {
    const message = createBaseClientUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subject_client_id = object.subject_client_id ?? "";
    message.substitute_client_id = object.substitute_client_id ?? "";
    return message;
  },
  fromAmino(object: ClientUpdateProposalAmino): ClientUpdateProposal {
    const message = createBaseClientUpdateProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
      message.subject_client_id = object.subject_client_id;
    }
    if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
      message.substitute_client_id = object.substitute_client_id;
    }
    return message;
  },
  toAmino(message: ClientUpdateProposal): ClientUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.subject_client_id = message.subject_client_id === "" ? undefined : message.subject_client_id;
    obj.substitute_client_id = message.substitute_client_id === "" ? undefined : message.substitute_client_id;
    return obj;
  },
  fromAminoMsg(object: ClientUpdateProposalAminoMsg): ClientUpdateProposal {
    return ClientUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ClientUpdateProposal): ClientUpdateProposalAminoMsg {
    return {
      type: "cosmos-sdk/ClientUpdateProposal",
      value: ClientUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientUpdateProposalProtoMsg): ClientUpdateProposal {
    return ClientUpdateProposal.decode(message.value);
  },
  toProto(message: ClientUpdateProposal): Uint8Array {
    return ClientUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: ClientUpdateProposal): ClientUpdateProposalProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
      value: ClientUpdateProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GlobalDecoderRegistry.register(ClientUpdateProposal.typeUrl, ClientUpdateProposal);
    GlobalDecoderRegistry.registerAminoProtoMapping(ClientUpdateProposal.aminoType, ClientUpdateProposal.typeUrl);
  }
};
function createBaseUpgradeProposal(): UpgradeProposal {
  return {
    title: "",
    description: "",
    plan: Plan.fromPartial({}),
    upgraded_client_state: undefined
  };
}
export const UpgradeProposal = {
  typeUrl: "/ibc.core.client.v1.UpgradeProposal",
  aminoType: "cosmos-sdk/UpgradeProposal",
  is(o: any): o is UpgradeProposal {
    return o && (o.$typeUrl === UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.is(o.plan));
  },
  isAmino(o: any): o is UpgradeProposalAmino {
    return o && (o.$typeUrl === UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.isAmino(o.plan));
  },
  encode(message: UpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();
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
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 4:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpgradeProposal>): UpgradeProposal {
    const message = createBaseUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  },
  fromAmino(object: UpgradeProposalAmino): UpgradeProposal {
    const message = createBaseUpgradeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgraded_client_state = Any.fromAmino(object.upgraded_client_state);
    }
    return message;
  },
  toAmino(message: UpgradeProposal): UpgradeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpgradeProposalAminoMsg): UpgradeProposal {
    return UpgradeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpgradeProposal): UpgradeProposalAminoMsg {
    return {
      type: "cosmos-sdk/UpgradeProposal",
      value: UpgradeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpgradeProposalProtoMsg): UpgradeProposal {
    return UpgradeProposal.decode(message.value);
  },
  toProto(message: UpgradeProposal): Uint8Array {
    return UpgradeProposal.encode(message).finish();
  },
  toProtoMsg(message: UpgradeProposal): UpgradeProposalProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.UpgradeProposal",
      value: UpgradeProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GlobalDecoderRegistry.register(UpgradeProposal.typeUrl, UpgradeProposal);
    GlobalDecoderRegistry.registerAminoProtoMapping(UpgradeProposal.aminoType, UpgradeProposal.typeUrl);
  }
};