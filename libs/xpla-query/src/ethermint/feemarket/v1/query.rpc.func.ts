import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetBaseFee = (clientResolver?: RpcResolver) => buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BaseFee",
  clientResolver
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: createGetBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
export const createGetBlockGas = (clientResolver?: RpcResolver) => buildQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  encode: QueryBlockGasRequest.encode,
  decode: QueryBlockGasResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BlockGas",
  clientResolver
});
export const useGetBlockGas = buildUseQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  builderQueryFn: createGetBlockGas,
  queryKeyPrefix: "BlockGasQuery"
});