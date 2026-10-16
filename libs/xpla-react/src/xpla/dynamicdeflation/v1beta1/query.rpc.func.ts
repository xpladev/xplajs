import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentPeriodRequest, QueryCurrentPeriodResponse, QueryStatusRequest, QueryStatusResponse } from "./query";
/**
 * Params queries the candidate parameters for the next period.
 * @name getParams
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "xpla.dynamicdeflation.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * CurrentPeriod queries the active period, if one exists.
 * @name getCurrentPeriod
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.CurrentPeriod
 */
export const getCurrentPeriod = buildQuery<QueryCurrentPeriodRequest, QueryCurrentPeriodResponse>({
  encode: QueryCurrentPeriodRequest.encode,
  decode: QueryCurrentPeriodResponse.decode,
  service: "xpla.dynamicdeflation.v1beta1.Query",
  method: "CurrentPeriod",
  deps: [QueryCurrentPeriodRequest, QueryCurrentPeriodResponse]
});
/**
 * Status compares the Dynamic Deflation Pool balance with the allocated
 * amount.
 * @name getDynamicDeflationStatus
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.Status
 */
export const getDynamicDeflationStatus = buildQuery<QueryStatusRequest, QueryStatusResponse>({
  encode: QueryStatusRequest.encode,
  decode: QueryStatusResponse.decode,
  service: "xpla.dynamicdeflation.v1beta1.Query",
  method: "Status",
  deps: [QueryStatusRequest, QueryStatusResponse]
});