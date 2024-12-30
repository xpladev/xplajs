import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */
  Connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  ConnectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  ConnectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
  /** ConnectionParams queries all parameters of the ibc connection submodule. */
  ConnectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Connection queries an IBC connection end. */
  Connection = async (request: QueryConnectionRequest): Promise<QueryConnectionResponse> => {
    const data = QueryConnectionRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
    return promise.then(data => QueryConnectionResponse.decode(new BinaryReader(data)));
  };
  /* Connections queries all the IBC connections of a chain. */
  Connections = async (request: QueryConnectionsRequest = {
    pagination: undefined
  }): Promise<QueryConnectionsResponse> => {
    const data = QueryConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
    return promise.then(data => QueryConnectionsResponse.decode(new BinaryReader(data)));
  };
  /* ClientConnections queries the connection paths associated with a client
   state. */
  ClientConnections = async (request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> => {
    const data = QueryClientConnectionsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
    return promise.then(data => QueryClientConnectionsResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionClientState queries the client state associated with the
   connection. */
  ConnectionClientState = async (request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> => {
    const data = QueryConnectionClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
    return promise.then(data => QueryConnectionClientStateResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionConsensusState queries the consensus state associated with the
   connection. */
  ConnectionConsensusState = async (request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> => {
    const data = QueryConnectionConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
    return promise.then(data => QueryConnectionConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionParams queries all parameters of the ibc connection submodule. */
  ConnectionParams = async (request: QueryConnectionParamsRequest = {}): Promise<QueryConnectionParamsResponse> => {
    const data = QueryConnectionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionParams", data);
    return promise.then(data => QueryConnectionParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse> {
      return queryService.Connection(request);
    },
    Connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse> {
      return queryService.Connections(request);
    },
    ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse> {
      return queryService.ClientConnections(request);
    },
    ConnectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse> {
      return queryService.ConnectionClientState(request);
    },
    ConnectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse> {
      return queryService.ConnectionConsensusState(request);
    },
    ConnectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse> {
      return queryService.ConnectionParams(request);
    }
  };
};