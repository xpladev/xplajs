import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse, QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** CounterpartyInfo queries an IBC light counter party info. */
  counterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse>;
  /** Config queries the IBC client v2 configuration for a given client. */
  config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CounterpartyInfo queries an IBC light counter party info. */
  counterpartyInfo = async (request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse> => {
    const data = QueryCounterpartyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Query", "CounterpartyInfo", data);
    return promise.then(data => QueryCounterpartyInfoResponse.decode(new BinaryReader(data)));
  };
  /* Config queries the IBC client v2 configuration for a given client. */
  config = async (request: QueryConfigRequest): Promise<QueryConfigResponse> => {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    counterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse> {
      return queryService.counterpartyInfo(request);
    },
    config(request: QueryConfigRequest): Promise<QueryConfigResponse> {
      return queryService.config(request);
    }
  };
};