import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentPeriodRequest, QueryCurrentPeriodResponse, QueryStatusRequest, QueryStatusResponse } from "./query";
import { getParams, getCurrentPeriod, getDynamicDeflationStatus } from "./query.rpc.func";
/**
 * Params queries the candidate parameters for the next period.
 * @name useGetParams
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "xpla.dynamicdeflation.v1beta1.Params"
});
/**
 * CurrentPeriod queries the active period, if one exists.
 * @name useGetCurrentPeriod
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.CurrentPeriod
 */
export const useGetCurrentPeriod = buildUseQuery<QueryCurrentPeriodRequest, QueryCurrentPeriodResponse>({
  builderQueryFn: getCurrentPeriod,
  queryKeyPrefix: "xpla.dynamicdeflation.v1beta1.CurrentPeriod"
});
/**
 * Status compares the Dynamic Deflation Pool balance with the allocated
 * amount.
 * @name useGetDynamicDeflationStatus
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.Status
 */
export const useGetDynamicDeflationStatus = buildUseQuery<QueryStatusRequest, QueryStatusResponse>({
  builderQueryFn: getDynamicDeflationStatus,
  queryKeyPrefix: "xpla.dynamicdeflation.v1beta1.Status"
});