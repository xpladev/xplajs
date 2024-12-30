import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export const createGetDenomTraces = (clientResolver?: RpcResolver) => buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encode: QueryDenomTracesRequest.encode,
  decode: QueryDenomTracesResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTraces",
  clientResolver
});
export const useGetDenomTraces = buildUseQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: createGetDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
});
export const createGetDenomTrace = (clientResolver?: RpcResolver) => buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encode: QueryDenomTraceRequest.encode,
  decode: QueryDenomTraceResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomTrace",
  clientResolver
});
export const useGetDenomTrace = buildUseQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: createGetDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDenomHash = (clientResolver?: RpcResolver) => buildQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  encode: QueryDenomHashRequest.encode,
  decode: QueryDenomHashResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomHash",
  clientResolver
});
export const useGetDenomHash = buildUseQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: createGetDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
export const createGetEscrowAddress = (clientResolver?: RpcResolver) => buildQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  encode: QueryEscrowAddressRequest.encode,
  decode: QueryEscrowAddressResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "EscrowAddress",
  clientResolver
});
export const useGetEscrowAddress = buildUseQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: createGetEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
export const createGetTotalEscrowForDenom = (clientResolver?: RpcResolver) => buildQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  encode: QueryTotalEscrowForDenomRequest.encode,
  decode: QueryTotalEscrowForDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "TotalEscrowForDenom",
  clientResolver
});
export const useGetTotalEscrowForDenom = buildUseQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: createGetTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});