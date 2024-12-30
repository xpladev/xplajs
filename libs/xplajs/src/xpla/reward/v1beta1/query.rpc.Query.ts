import { Params } from "./reward";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
/** Query defines the gRPC querier service for reward module. */
export interface Query {
  /** Params queries params of the reward module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Pool queries the reward module pool coins. */
  Pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the reward module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Pool queries the reward module pool coins. */
  Pool = async (request: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    Pool(request?: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.Pool(request);
    }
  };
};