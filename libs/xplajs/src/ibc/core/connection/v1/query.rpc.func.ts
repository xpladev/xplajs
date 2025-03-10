import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export const createGetConnection = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionRequest, QueryConnectionResponse>({
  encode: QueryConnectionRequest.encode,
  decode: QueryConnectionResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connection",
  clientResolver,
  deps: [QueryConnectionRequest, QueryConnectionResponse]
});
export const createGetConnections = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionsRequest, QueryConnectionsResponse>({
  encode: QueryConnectionsRequest.encode,
  decode: QueryConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "Connections",
  clientResolver,
  deps: [QueryConnectionsRequest, QueryConnectionsResponse]
});
export const createGetClientConnections = (clientResolver?: RpcResolver) => buildQuery<QueryClientConnectionsRequest, QueryClientConnectionsResponse>({
  encode: QueryClientConnectionsRequest.encode,
  decode: QueryClientConnectionsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ClientConnections",
  clientResolver,
  deps: [QueryClientConnectionsRequest, QueryClientConnectionsResponse]
});
export const createGetConnectionClientState = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionClientStateRequest, QueryConnectionClientStateResponse>({
  encode: QueryConnectionClientStateRequest.encode,
  decode: QueryConnectionClientStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionClientState",
  clientResolver,
  deps: [QueryConnectionClientStateRequest, QueryConnectionClientStateResponse]
});
export const createGetConnectionConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse>({
  encode: QueryConnectionConsensusStateRequest.encode,
  decode: QueryConnectionConsensusStateResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionConsensusState",
  clientResolver,
  deps: [QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse]
});
export const createGetConnectionParams = (clientResolver?: RpcResolver) => buildQuery<QueryConnectionParamsRequest, QueryConnectionParamsResponse>({
  encode: QueryConnectionParamsRequest.encode,
  decode: QueryConnectionParamsResponse.decode,
  service: "ibc.core.connection.v1.Query",
  method: "ConnectionParams",
  clientResolver,
  deps: [QueryConnectionParamsRequest, QueryConnectionParamsResponse]
});