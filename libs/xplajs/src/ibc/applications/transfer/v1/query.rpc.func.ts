import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export const createGetDenomTraces = (clientResolver?: RpcResolver) => buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encode: QueryDenomTracesRequest.encode,
  decode: QueryDenomTracesResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTraces",
  clientResolver,
  deps: [QueryDenomTracesRequest, QueryDenomTracesResponse]
});
export const createGetDenomTrace = (clientResolver?: RpcResolver) => buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encode: QueryDenomTraceRequest.encode,
  decode: QueryDenomTraceResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTrace",
  clientResolver,
  deps: [QueryDenomTraceRequest, QueryDenomTraceResponse]
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetDenomHash = (clientResolver?: RpcResolver) => buildQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  encode: QueryDenomHashRequest.encode,
  decode: QueryDenomHashResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomHash",
  clientResolver,
  deps: [QueryDenomHashRequest, QueryDenomHashResponse]
});
export const createGetEscrowAddress = (clientResolver?: RpcResolver) => buildQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  encode: QueryEscrowAddressRequest.encode,
  decode: QueryEscrowAddressResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "EscrowAddress",
  clientResolver,
  deps: [QueryEscrowAddressRequest, QueryEscrowAddressResponse]
});
export const createGetTotalEscrowForDenom = (clientResolver?: RpcResolver) => buildQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  encode: QueryTotalEscrowForDenomRequest.encode,
  decode: QueryTotalEscrowForDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "TotalEscrowForDenom",
  clientResolver,
  deps: [QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse]
});