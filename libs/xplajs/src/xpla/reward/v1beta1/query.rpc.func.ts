import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
/**
 * Params queries params of the reward module.
 * @name getParams
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "xpla.reward.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Pool queries the reward module pool coins.
 * @name getPool
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.Pool
 */
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "xpla.reward.v1beta1.Query",
  method: "Pool",
  deps: [QueryPoolRequest, QueryPoolResponse]
});