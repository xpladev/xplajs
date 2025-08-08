import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
/**
 * Params queries the parameters of x/feemarket module.
 * @name getParams
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * BaseFee queries the base fee of the parent block of the current block.
 * @name getBaseFee
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.BaseFee
 */
export const getBaseFee = buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BaseFee",
  deps: [QueryBaseFeeRequest, QueryBaseFeeResponse]
});
/**
 * BlockGas queries the gas used at a given block height
 * @name getBlockGas
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.BlockGas
 */
export const getBlockGas = buildQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  encode: QueryBlockGasRequest.encode,
  decode: QueryBlockGasResponse.decode,
  service: "ethermint.feemarket.v1.Query",
  method: "BlockGas",
  deps: [QueryBlockGasRequest, QueryBlockGasResponse]
});