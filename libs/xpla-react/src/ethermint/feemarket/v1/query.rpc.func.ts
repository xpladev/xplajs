import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetBaseFee = (clientResolver?: RpcResolver) => buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BaseFee",
  clientResolver,
  deps: [QueryBaseFeeRequest, QueryBaseFeeResponse]
});
export const createGetBlockGas = (clientResolver?: RpcResolver) => buildQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  encode: QueryBlockGasRequest.encode,
  decode: QueryBlockGasResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BlockGas",
  clientResolver,
  deps: [QueryBlockGasRequest, QueryBlockGasResponse]
});