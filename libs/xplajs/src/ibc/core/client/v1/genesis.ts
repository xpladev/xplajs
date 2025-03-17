import { IdentifiedClientState, IdentifiedClientStateAmino, ClientConsensusStates, ClientConsensusStatesAmino, Params, ParamsAmino } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clients_consensus: ClientConsensusStates[];
  /** metadata from each client */
  clients_metadata: IdentifiedGenesisMetadata[];
  params: Params;
  /**
   * Deprecated: create_localhost has been deprecated.
   * The localhost client is automatically created at genesis.
   */
  /** @deprecated */
  create_localhost: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence: bigint;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.core.client.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientStateAmino[];
  /** consensus states from each client */
  clients_consensus: ClientConsensusStatesAmino[];
  /** metadata from each client */
  clients_metadata: IdentifiedGenesisMetadataAmino[];
  params: ParamsAmino;
  /**
   * Deprecated: create_localhost has been deprecated.
   * The localhost client is automatically created at genesis.
   */
  /** @deprecated */
  create_localhost: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}
export interface GenesisMetadataProtoMsg {
  type_url: "/ibc.core.client.v1.GenesisMetadata";
  value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
  /** store key of metadata without clientID-prefix */
  key: string;
  /** metadata value */
  value: string;
}
export interface GenesisMetadataAminoMsg {
  type: "cosmos-sdk/GenesisMetadata";
  value: GenesisMetadataAmino;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  client_id: string;
  client_metadata: GenesisMetadata[];
}
export interface IdentifiedGenesisMetadataProtoMsg {
  type_url: "/ibc.core.client.v1.IdentifiedGenesisMetadata";
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
  client_id: string;
  client_metadata: GenesisMetadataAmino[];
}
export interface IdentifiedGenesisMetadataAminoMsg {
  type: "cosmos-sdk/IdentifiedGenesisMetadata";
  value: IdentifiedGenesisMetadataAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clients_consensus: [],
    clients_metadata: [],
    params: Params.fromPartial({}),
    create_localhost: false,
    next_client_sequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.client.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.clients) && (!o.clients.length || IdentifiedClientState.is(o.clients[0])) && Array.isArray(o.clients_consensus) && (!o.clients_consensus.length || ClientConsensusStates.is(o.clients_consensus[0])) && Array.isArray(o.clients_metadata) && (!o.clients_metadata.length || IdentifiedGenesisMetadata.is(o.clients_metadata[0])) && Params.is(o.params) && typeof o.create_localhost === "boolean" && typeof o.next_client_sequence === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.clients) && (!o.clients.length || IdentifiedClientState.isAmino(o.clients[0])) && Array.isArray(o.clients_consensus) && (!o.clients_consensus.length || ClientConsensusStates.isAmino(o.clients_consensus[0])) && Array.isArray(o.clients_metadata) && (!o.clients_metadata.length || IdentifiedGenesisMetadata.isAmino(o.clients_metadata[0])) && Params.isAmino(o.params) && typeof o.create_localhost === "boolean" && typeof o.next_client_sequence === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clients_consensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clients_metadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.create_localhost === true) {
      writer.uint32(40).bool(message.create_localhost);
    }
    if (message.next_client_sequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.next_client_sequence);
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
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clients_consensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clients_metadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.create_localhost = reader.bool();
          break;
        case 6:
          message.next_client_sequence = reader.uint64();
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
    message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clients_consensus = object.clients_consensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
    message.clients_metadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.create_localhost = object.create_localhost ?? false;
    message.next_client_sequence = object.next_client_sequence !== undefined && object.next_client_sequence !== null ? BigInt(object.next_client_sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map(e => IdentifiedClientState.fromAmino(e)) || [];
    message.clients_consensus = object.clients_consensus?.map(e => ClientConsensusStates.fromAmino(e)) || [];
    message.clients_metadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.create_localhost !== undefined && object.create_localhost !== null) {
      message.create_localhost = object.create_localhost;
    }
    if (object.next_client_sequence !== undefined && object.next_client_sequence !== null) {
      message.next_client_sequence = BigInt(object.next_client_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
    } else {
      obj.clients = message.clients;
    }
    if (message.clients_consensus) {
      obj.clients_consensus = message.clients_consensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
    } else {
      obj.clients_consensus = message.clients_consensus;
    }
    if (message.clients_metadata) {
      obj.clients_metadata = message.clients_metadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.clients_metadata = message.clients_metadata;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.create_localhost = message.create_localhost === false ? undefined : message.create_localhost;
    obj.next_client_sequence = message.next_client_sequence !== BigInt(0) ? message.next_client_sequence?.toString() : undefined;
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
      typeUrl: "/ibc.core.client.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedClientState.registerTypeUrl();
    ClientConsensusStates.registerTypeUrl();
    IdentifiedGenesisMetadata.registerTypeUrl();
    Params.registerTypeUrl();
  }
};
function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const GenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata",
  aminoType: "cosmos-sdk/GenesisMetadata",
  is(o: any): o is GenesisMetadata {
    return o && (o.$typeUrl === GenesisMetadata.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is GenesisMetadataAmino {
    return o && (o.$typeUrl === GenesisMetadata.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: GenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisMetadataAmino): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: GenesisMetadata): GenesisMetadataAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisMetadataAminoMsg): GenesisMetadata {
    return GenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisMetadata): GenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/GenesisMetadata",
      value: GenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisMetadataProtoMsg): GenesisMetadata {
    return GenesisMetadata.decode(message.value);
  },
  toProto(message: GenesisMetadata): Uint8Array {
    return GenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: GenesisMetadata): GenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisMetadata",
      value: GenesisMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    client_id: "",
    client_metadata: []
  };
}
export const IdentifiedGenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
  aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
  is(o: any): o is IdentifiedGenesisMetadata {
    return o && (o.$typeUrl === IdentifiedGenesisMetadata.typeUrl || typeof o.client_id === "string" && Array.isArray(o.client_metadata) && (!o.client_metadata.length || GenesisMetadata.is(o.client_metadata[0])));
  },
  isAmino(o: any): o is IdentifiedGenesisMetadataAmino {
    return o && (o.$typeUrl === IdentifiedGenesisMetadata.typeUrl || typeof o.client_id === "string" && Array.isArray(o.client_metadata) && (!o.client_metadata.length || GenesisMetadata.isAmino(o.client_metadata[0])));
  },
  encode(message: IdentifiedGenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.client_metadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_metadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.client_id = object.client_id ?? "";
    message.client_metadata = object.client_metadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    message.client_metadata = object.client_metadata?.map(e => GenesisMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino {
    const obj: any = {};
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    if (message.client_metadata) {
      obj.client_metadata = message.client_metadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.client_metadata = message.client_metadata;
    }
    return obj;
  },
  fromAminoMsg(object: IdentifiedGenesisMetadataAminoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedGenesisMetadataProtoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.decode(message.value);
  },
  toProto(message: IdentifiedGenesisMetadata): Uint8Array {
    return IdentifiedGenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GenesisMetadata.registerTypeUrl();
  }
};