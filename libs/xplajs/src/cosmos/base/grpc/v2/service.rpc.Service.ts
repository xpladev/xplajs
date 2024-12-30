import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
/** Service defines the gRPC service for query server for v2 */
export interface Service {
  /** Query queries the server with a request, the request can be any sdk Msg. */
  Query(request: QueryRequest): Promise<QueryResponse>;
  /** ListQueryHandlers lists all the available query handlers. */
  ListQueryHandlers(request?: ListQueryHandlersRequest): Promise<ListQueryHandlersResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Query queries the server with a request, the request can be any sdk Msg. */
  Query = async (request: QueryRequest): Promise<QueryResponse> => {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.grpc.v2.Service", "Query", data);
    return promise.then(data => QueryResponse.decode(new BinaryReader(data)));
  };
  /* ListQueryHandlers lists all the available query handlers. */
  ListQueryHandlers = async (request: ListQueryHandlersRequest = {}): Promise<ListQueryHandlersResponse> => {
    const data = ListQueryHandlersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.grpc.v2.Service", "ListQueryHandlers", data);
    return promise.then(data => ListQueryHandlersResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    Query(request: QueryRequest): Promise<QueryResponse> {
      return queryService.Query(request);
    },
    ListQueryHandlers(request?: ListQueryHandlersRequest): Promise<ListQueryHandlersResponse> {
      return queryService.ListQueryHandlers(request);
    }
  };
};