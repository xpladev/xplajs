import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
/**
 * Params returns the total set of minting parameters.
 * @name getParams
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Inflation returns the current minting inflation value.
 * @name getInflation
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.Inflation
 */
export const getInflation = buildQuery<QueryInflationRequest, QueryInflationResponse>({
  encode: QueryInflationRequest.encode,
  decode: QueryInflationResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "Inflation",
  deps: [QueryInflationRequest, QueryInflationResponse]
});
/**
 * AnnualProvisions current minting annual provisions value.
 * @name getAnnualProvisions
 * @package cosmos.mint.v1beta1
 * @see proto service: cosmos.mint.v1beta1.AnnualProvisions
 */
export const getAnnualProvisions = buildQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  encode: QueryAnnualProvisionsRequest.encode,
  decode: QueryAnnualProvisionsResponse.decode,
  service: "cosmos.mint.v1beta1.Query",
  method: "AnnualProvisions",
  deps: [QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse]
});