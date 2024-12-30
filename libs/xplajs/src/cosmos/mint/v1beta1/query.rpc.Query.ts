import { Params } from "./mint";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Inflation returns the current minting inflation value. */
  Inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse>;
  /** AnnualProvisions current minting annual provisions value. */
  AnnualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params returns the total set of minting parameters. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Inflation returns the current minting inflation value. */
  Inflation = async (request: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "Inflation", data);
    return promise.then(data => QueryInflationResponse.decode(new BinaryReader(data)));
  };
  /* AnnualProvisions current minting annual provisions value. */
  AnnualProvisions = async (request: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> => {
    const data = QueryAnnualProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.mint.v1beta1.Query", "AnnualProvisions", data);
    return promise.then(data => QueryAnnualProvisionsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    Inflation(request?: QueryInflationRequest): Promise<QueryInflationResponse> {
      return queryService.Inflation(request);
    },
    AnnualProvisions(request?: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse> {
      return queryService.AnnualProvisions(request);
    }
  };
};