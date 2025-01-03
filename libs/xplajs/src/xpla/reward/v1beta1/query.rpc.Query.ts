import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
/** Query defines the gRPC querier service for reward module. */
export interface Query {
  /** Params queries params of the reward module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Pool queries the reward module pool coins. */
  pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the reward module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Pool queries the reward module pool coins. */
  pool = async (request: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    }
  };
};