import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, IdentifiedConnection, IdentifiedConnectionAmino } from "./connection";
import { Height, HeightAmino, IdentifiedClientState, IdentifiedClientStateAmino, Params, ParamsAmino } from "../../client/v1/client";
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
  /** connection unique identifier */
  connection_id: string;
}
export interface QueryConnectionRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
  /** connection unique identifier */
  connection_id: string;
}
export interface QueryConnectionRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionRequest";
  value: QueryConnectionRequestAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
  /** connection associated with the request identifier */
  connection?: ConnectionEnd;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
  /** connection associated with the request identifier */
  connection?: ConnectionEndAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryConnectionResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionResponse";
  value: QueryConnectionResponseAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
  pagination?: PageRequest;
}
export interface QueryConnectionsRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionsRequest";
  value: QueryConnectionsRequestAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnection[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryConnectionsResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnectionAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height: HeightAmino;
}
export interface QueryConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionsResponse";
  value: QueryConnectionsResponseAmino;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
  /** client identifier associated with a connection */
  client_id: string;
}
export interface QueryClientConnectionsRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryClientConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
  /** client identifier associated with a connection */
  client_id: string;
}
export interface QueryClientConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsRequest";
  value: QueryClientConnectionsRequestAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connection_paths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proof_height: Height;
}
export interface QueryClientConnectionsResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryClientConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
  /** slice of all the connection paths associated with a client. */
  connection_paths: string[];
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was generated */
  proof_height: HeightAmino;
}
export interface QueryClientConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsResponse";
  value: QueryClientConnectionsResponseAmino;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
  /** connection identifier */
  connection_id: string;
}
export interface QueryConnectionClientStateRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
  /** connection identifier */
  connection_id: string;
}
export interface QueryConnectionClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateRequest";
  value: QueryConnectionClientStateRequestAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionClientStateResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryConnectionClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateResponse";
  value: QueryConnectionClientStateResponseAmino;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
  /** connection identifier */
  connection_id: string;
  revision_number: bigint;
  revision_height: bigint;
}
export interface QueryConnectionConsensusStateRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
  /** connection identifier */
  connection_id: string;
  revision_number: string;
  revision_height: string;
}
export interface QueryConnectionConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateRequest";
  value: QueryConnectionConsensusStateRequestAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
  /** consensus state associated with the channel */
  consensus_state?: Any;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionConsensusStateResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryConnectionConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateResponse";
  value: QueryConnectionConsensusStateResponseAmino;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequest {}
export interface QueryConnectionParamsRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionParamsRequest";
  value: Uint8Array;
}
/** QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsRequestAmino {}
export interface QueryConnectionParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionParamsRequest";
  value: QueryConnectionParamsRequestAmino;
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryConnectionParamsResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionParamsResponse";
  value: Uint8Array;
}
/** QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method. */
export interface QueryConnectionParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryConnectionParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionParamsResponse";
  value: QueryConnectionParamsResponseAmino;
}
function createBaseQueryConnectionRequest(): QueryConnectionRequest {
  return {
    connection_id: ""
  };
}
export const QueryConnectionRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
  aminoType: "cosmos-sdk/QueryConnectionRequest",
  is(o: any): o is QueryConnectionRequest {
    return o && (o.$typeUrl === QueryConnectionRequest.typeUrl || typeof o.connection_id === "string");
  },
  isAmino(o: any): o is QueryConnectionRequestAmino {
    return o && (o.$typeUrl === QueryConnectionRequest.typeUrl || typeof o.connection_id === "string");
  },
  encode(message: QueryConnectionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionRequest>): QueryConnectionRequest {
    const message = createBaseQueryConnectionRequest();
    message.connection_id = object.connection_id ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest {
    const message = createBaseQueryConnectionRequest();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id === "" ? undefined : message.connection_id;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionRequest",
      value: QueryConnectionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.decode(message.value);
  },
  toProto(message: QueryConnectionRequest): Uint8Array {
    return QueryConnectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
      value: QueryConnectionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConnectionResponse(): QueryConnectionResponse {
  return {
    connection: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
  aminoType: "cosmos-sdk/QueryConnectionResponse",
  is(o: any): o is QueryConnectionResponse {
    return o && (o.$typeUrl === QueryConnectionResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryConnectionResponseAmino {
    return o && (o.$typeUrl === QueryConnectionResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryConnectionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionResponse>): QueryConnectionResponse {
    const message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse {
    const message = createBaseQueryConnectionResponse();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromAmino(object.connection);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino {
    const obj: any = {};
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionResponse",
      value: QueryConnectionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.decode(message.value);
  },
  toProto(message: QueryConnectionResponse): Uint8Array {
    return QueryConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
      value: QueryConnectionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ConnectionEnd.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryConnectionsRequest(): QueryConnectionsRequest {
  return {
    pagination: undefined
  };
}
export const QueryConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
  aminoType: "cosmos-sdk/QueryConnectionsRequest",
  is(o: any): o is QueryConnectionsRequest {
    return o && o.$typeUrl === QueryConnectionsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConnectionsRequestAmino {
    return o && o.$typeUrl === QueryConnectionsRequest.typeUrl;
  },
  encode(message: QueryConnectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionsRequest>): QueryConnectionsRequest {
    const message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest {
    const message = createBaseQueryConnectionsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsRequest",
      value: QueryConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionsRequest): Uint8Array {
    return QueryConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
      value: QueryConnectionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryConnectionsResponse(): QueryConnectionsResponse {
  return {
    connections: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
  aminoType: "cosmos-sdk/QueryConnectionsResponse",
  is(o: any): o is QueryConnectionsResponse {
    return o && (o.$typeUrl === QueryConnectionsResponse.typeUrl || Array.isArray(o.connections) && (!o.connections.length || IdentifiedConnection.is(o.connections[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryConnectionsResponseAmino {
    return o && (o.$typeUrl === QueryConnectionsResponse.typeUrl || Array.isArray(o.connections) && (!o.connections.length || IdentifiedConnection.isAmino(o.connections[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryConnectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionsResponse>): QueryConnectionsResponse {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
    } else {
      obj.connections = message.connections;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsResponse",
      value: QueryConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionsResponse): Uint8Array {
    return QueryConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
      value: QueryConnectionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedConnection.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryClientConnectionsRequest(): QueryClientConnectionsRequest {
  return {
    client_id: ""
  };
}
export const QueryClientConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
  aminoType: "cosmos-sdk/QueryClientConnectionsRequest",
  is(o: any): o is QueryClientConnectionsRequest {
    return o && (o.$typeUrl === QueryClientConnectionsRequest.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is QueryClientConnectionsRequestAmino {
    return o && (o.$typeUrl === QueryClientConnectionsRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientConnectionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientConnectionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest {
    const message = createBaseQueryClientConnectionsRequest();
    message.client_id = object.client_id ?? "";
    return message;
  },
  fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest {
    const message = createBaseQueryClientConnectionsRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino {
    const obj: any = {};
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryClientConnectionsRequest): Uint8Array {
    return QueryClientConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClientConnectionsResponse(): QueryClientConnectionsResponse {
  return {
    connection_paths: [],
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryClientConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
  aminoType: "cosmos-sdk/QueryClientConnectionsResponse",
  is(o: any): o is QueryClientConnectionsResponse {
    return o && (o.$typeUrl === QueryClientConnectionsResponse.typeUrl || Array.isArray(o.connection_paths) && (!o.connection_paths.length || typeof o.connection_paths[0] === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryClientConnectionsResponseAmino {
    return o && (o.$typeUrl === QueryClientConnectionsResponse.typeUrl || Array.isArray(o.connection_paths) && (!o.connection_paths.length || typeof o.connection_paths[0] === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryClientConnectionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.connection_paths) {
      writer.uint32(10).string(v!);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientConnectionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_paths.push(reader.string());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse {
    const message = createBaseQueryClientConnectionsResponse();
    message.connection_paths = object.connection_paths?.map(e => e) || [];
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse {
    const message = createBaseQueryClientConnectionsResponse();
    message.connection_paths = object.connection_paths?.map(e => e) || [];
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino {
    const obj: any = {};
    if (message.connection_paths) {
      obj.connection_paths = message.connection_paths.map(e => e);
    } else {
      obj.connection_paths = message.connection_paths;
    }
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryClientConnectionsResponse): Uint8Array {
    return QueryClientConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryConnectionClientStateRequest(): QueryConnectionClientStateRequest {
  return {
    connection_id: ""
  };
}
export const QueryConnectionClientStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
  aminoType: "cosmos-sdk/QueryConnectionClientStateRequest",
  is(o: any): o is QueryConnectionClientStateRequest {
    return o && (o.$typeUrl === QueryConnectionClientStateRequest.typeUrl || typeof o.connection_id === "string");
  },
  isAmino(o: any): o is QueryConnectionClientStateRequestAmino {
    return o && (o.$typeUrl === QueryConnectionClientStateRequest.typeUrl || typeof o.connection_id === "string");
  },
  encode(message: QueryConnectionClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest {
    const message = createBaseQueryConnectionClientStateRequest();
    message.connection_id = object.connection_id ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest {
    const message = createBaseQueryConnectionClientStateRequest();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id === "" ? undefined : message.connection_id;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateRequest): Uint8Array {
    return QueryConnectionClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConnectionClientStateResponse(): QueryConnectionClientStateResponse {
  return {
    identified_client_state: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionClientStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
  aminoType: "cosmos-sdk/QueryConnectionClientStateResponse",
  is(o: any): o is QueryConnectionClientStateResponse {
    return o && (o.$typeUrl === QueryConnectionClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryConnectionClientStateResponseAmino {
    return o && (o.$typeUrl === QueryConnectionClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryConnectionClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identified_client_state !== undefined) {
      IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse {
    const message = createBaseQueryConnectionClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse {
    const message = createBaseQueryConnectionClientStateResponse();
    if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
      message.identified_client_state = IdentifiedClientState.fromAmino(object.identified_client_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateResponse): Uint8Array {
    return QueryConnectionClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedClientState.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryConnectionConsensusStateRequest(): QueryConnectionConsensusStateRequest {
  return {
    connection_id: "",
    revision_number: BigInt(0),
    revision_height: BigInt(0)
  };
}
export const QueryConnectionConsensusStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryConnectionConsensusStateRequest",
  is(o: any): o is QueryConnectionConsensusStateRequest {
    return o && (o.$typeUrl === QueryConnectionConsensusStateRequest.typeUrl || typeof o.connection_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isAmino(o: any): o is QueryConnectionConsensusStateRequestAmino {
    return o && (o.$typeUrl === QueryConnectionConsensusStateRequest.typeUrl || typeof o.connection_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  encode(message: QueryConnectionConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.revision_number !== BigInt(0)) {
      writer.uint32(16).uint64(message.revision_number);
    }
    if (message.revision_height !== BigInt(0)) {
      writer.uint32(24).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.revision_number = reader.uint64();
          break;
        case 3:
          message.revision_height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest {
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connection_id = object.connection_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest {
    const message = createBaseQueryConnectionConsensusStateRequest();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    }
    if (object.revision_number !== undefined && object.revision_number !== null) {
      message.revision_number = BigInt(object.revision_number);
    }
    if (object.revision_height !== undefined && object.revision_height !== null) {
      message.revision_height = BigInt(object.revision_height);
    }
    return message;
  },
  toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id === "" ? undefined : message.connection_id;
    obj.revision_number = message.revision_number !== BigInt(0) ? message.revision_number?.toString() : undefined;
    obj.revision_height = message.revision_height !== BigInt(0) ? message.revision_height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateRequest): Uint8Array {
    return QueryConnectionConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConnectionConsensusStateResponse(): QueryConnectionConsensusStateResponse {
  return {
    consensus_state: undefined,
    client_id: "",
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionConsensusStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryConnectionConsensusStateResponse",
  is(o: any): o is QueryConnectionConsensusStateResponse {
    return o && (o.$typeUrl === QueryConnectionConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryConnectionConsensusStateResponseAmino {
    return o && (o.$typeUrl === QueryConnectionConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryConnectionConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse {
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = object.client_id ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse {
    const message = createBaseQueryConnectionConsensusStateResponse();
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = Any.fromAmino(object.consensus_state);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateResponse): Uint8Array {
    return QueryConnectionConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryConnectionParamsRequest(): QueryConnectionParamsRequest {
  return {};
}
export const QueryConnectionParamsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
  aminoType: "cosmos-sdk/QueryConnectionParamsRequest",
  is(o: any): o is QueryConnectionParamsRequest {
    return o && o.$typeUrl === QueryConnectionParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConnectionParamsRequestAmino {
    return o && o.$typeUrl === QueryConnectionParamsRequest.typeUrl;
  },
  encode(_: QueryConnectionParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsRequest();
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
  fromPartial(_: DeepPartial<QueryConnectionParamsRequest>): QueryConnectionParamsRequest {
    const message = createBaseQueryConnectionParamsRequest();
    return message;
  },
  fromAmino(_: QueryConnectionParamsRequestAmino): QueryConnectionParamsRequest {
    const message = createBaseQueryConnectionParamsRequest();
    return message;
  },
  toAmino(_: QueryConnectionParamsRequest): QueryConnectionParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionParamsRequestAminoMsg): QueryConnectionParamsRequest {
    return QueryConnectionParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionParamsRequest): QueryConnectionParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionParamsRequest",
      value: QueryConnectionParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionParamsRequestProtoMsg): QueryConnectionParamsRequest {
    return QueryConnectionParamsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionParamsRequest): Uint8Array {
    return QueryConnectionParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionParamsRequest): QueryConnectionParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
      value: QueryConnectionParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryConnectionParamsResponse(): QueryConnectionParamsResponse {
  return {
    params: undefined
  };
}
export const QueryConnectionParamsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
  aminoType: "cosmos-sdk/QueryConnectionParamsResponse",
  is(o: any): o is QueryConnectionParamsResponse {
    return o && o.$typeUrl === QueryConnectionParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryConnectionParamsResponseAmino {
    return o && o.$typeUrl === QueryConnectionParamsResponse.typeUrl;
  },
  encode(message: QueryConnectionParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionParamsResponse>): QueryConnectionParamsResponse {
    const message = createBaseQueryConnectionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionParamsResponseAmino): QueryConnectionParamsResponse {
    const message = createBaseQueryConnectionParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionParamsResponseAminoMsg): QueryConnectionParamsResponse {
    return QueryConnectionParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionParamsResponse",
      value: QueryConnectionParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionParamsResponseProtoMsg): QueryConnectionParamsResponse {
    return QueryConnectionParamsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionParamsResponse): Uint8Array {
    return QueryConnectionParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionParamsResponse): QueryConnectionParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
      value: QueryConnectionParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};