import { DenomTrace, Params } from "./transfer";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTraces queries all denomination traces. */
  DenomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
  /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* DenomTraces queries all denomination traces. */
  DenomTraces = async (request: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> => {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new BinaryReader(data)));
  };
  /* DenomTrace queries a denomination trace information. */
  DenomTrace = async (request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> => {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters of the ibc-transfer module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* DenomHash queries a denomination hash information. */
  DenomHash = async (request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> => {
    const data = QueryDenomHashRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
    return promise.then(data => QueryDenomHashResponse.decode(new BinaryReader(data)));
  };
  /* EscrowAddress returns the escrow address for a particular port and channel id. */
  EscrowAddress = async (request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> => {
    const data = QueryEscrowAddressRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
    return promise.then(data => QueryEscrowAddressResponse.decode(new BinaryReader(data)));
  };
  /* TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
  TotalEscrowForDenom = async (request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse> => {
    const data = QueryTotalEscrowForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "TotalEscrowForDenom", data);
    return promise.then(data => QueryTotalEscrowForDenomResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    DenomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
      return queryService.DenomTraces(request);
    },
    DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
      return queryService.DenomTrace(request);
    },
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse> {
      return queryService.DenomHash(request);
    },
    EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse> {
      return queryService.EscrowAddress(request);
    },
    TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse> {
      return queryService.TotalEscrowForDenom(request);
    }
  };
};