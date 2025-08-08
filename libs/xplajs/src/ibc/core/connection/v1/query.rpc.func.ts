import { buildQuery } from "../../../../helper-func-types";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
/**
 * Connection queries an IBC connection end.
 * @name getConnection
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.Connection
 */
export const getConnection = buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection",
  deps: [QueryConnectionRequest, QueryConnectionResponse]
});
/**
 * Connections queries all the IBC connections of a chain.
 * @name getConnections
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.Connections
 */
export const getConnections = buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections",
  deps: [QueryConnectionsRequest, QueryConnectionsResponse]
});
/**
 * ClientConnections queries the connection paths associated with a client
 * state.
 * @name getClientConnections
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ClientConnections
 */
export const getClientConnections = buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections",
  deps: [QueryClientConnectionsRequest, QueryClientConnectionsResponse]
});
/**
 * ConnectionClientState queries the client state associated with the
 * connection.
 * @name getConnectionClientState
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionClientState
 */
export const getConnectionClientState = buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState",
  deps: [QueryConnectionClientStateRequest, QueryConnectionClientStateResponse]
});
/**
 * ConnectionConsensusState queries the consensus state associated with the
 * connection.
 * @name getConnectionConsensusState
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionConsensusState
 */
export const getConnectionConsensusState = buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState",
  deps: [QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse]
});
/**
 * ConnectionParams queries all parameters of the ibc connection submodule.
 * @name getConnectionParams
 * @package ibc.core.connection.v1
 * @see proto service: ibc.core.connection.v1.ConnectionParams
 */
export const getConnectionParams = buildQuery<QueryConnectionParamsRequest, QueryConnectionParamsResponse>({
  encode: QueryConnectionParamsRequest.encode,
  decode: QueryConnectionParamsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionParams",
  deps: [QueryConnectionParamsRequest, QueryConnectionParamsResponse]
});