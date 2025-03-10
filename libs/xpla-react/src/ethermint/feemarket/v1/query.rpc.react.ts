import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
import { createGetParams, createGetBaseFee, createGetBlockGas } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: createGetBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
export const useGetBlockGas = buildUseQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  builderQueryFn: createGetBlockGas,
  queryKeyPrefix: "BlockGasQuery"
});