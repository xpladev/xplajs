import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
import { getParams, getPool } from "./query.rpc.func";
/**
 * Params queries params of the reward module.
 * @name useGetParams
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Pool queries the reward module pool coins.
 * @name useGetPool
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.Pool
 */
export const useGetPool = buildUseQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});