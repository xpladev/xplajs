import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
import { getParams, getBaseFee, getBlockGas } from "./query.rpc.func";
/**
 * Params queries the parameters of x/feemarket module.
 * @name useGetParams
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * BaseFee queries the base fee of the parent block of the current block.
 * @name useGetBaseFee
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.BaseFee
 */
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
/**
 * BlockGas queries the gas used at a given block height
 * @name useGetBlockGas
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.BlockGas
 */
export const useGetBlockGas = buildUseQuery<QueryBlockGasRequest, QueryBlockGasResponse>({
  builderQueryFn: getBlockGas,
  queryKeyPrefix: "BlockGasQuery"
});