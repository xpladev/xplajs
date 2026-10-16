import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentPeriodRequest, QueryCurrentPeriodResponse, QueryStatusRequest, QueryStatusResponse } from "./query";
/** Query defines the dynamic deflation gRPC query service. */
export interface Query {
  /** Params queries the candidate parameters for the next period. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** CurrentPeriod queries the active period, if one exists. */
  currentPeriod(request?: QueryCurrentPeriodRequest): Promise<QueryCurrentPeriodResponse>;
  /**
   * Status compares the Dynamic Deflation Pool balance with the allocated
   * amount.
   */
  status(request?: QueryStatusRequest): Promise<QueryStatusResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries the candidate parameters for the next period. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.dynamicdeflation.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* CurrentPeriod queries the active period, if one exists. */
  currentPeriod = async (request: QueryCurrentPeriodRequest = {}): Promise<QueryCurrentPeriodResponse> => {
    const data = QueryCurrentPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.dynamicdeflation.v1beta1.Query", "CurrentPeriod", data);
    return promise.then(data => QueryCurrentPeriodResponse.decode(new BinaryReader(data)));
  };
  /* Status compares the Dynamic Deflation Pool balance with the allocated
   amount. */
  status = async (request: QueryStatusRequest = {}): Promise<QueryStatusResponse> => {
    const data = QueryStatusRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.dynamicdeflation.v1beta1.Query", "Status", data);
    return promise.then(data => QueryStatusResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    currentPeriod(request?: QueryCurrentPeriodRequest): Promise<QueryCurrentPeriodResponse> {
      return queryService.currentPeriod(request);
    },
    status(request?: QueryStatusRequest): Promise<QueryStatusResponse> {
      return queryService.status(request);
    }
  };
};