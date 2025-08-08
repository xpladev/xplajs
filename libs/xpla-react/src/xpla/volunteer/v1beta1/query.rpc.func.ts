import { buildQuery } from "../../../helper-func-types";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
/**
 * VolunteerValidators
 * @name getVolunteerValidators
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.VolunteerValidators
 */
export const getVolunteerValidators = buildQuery<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse>({
  encode: QueryVolunteerValidatorsRequest.encode,
  decode: QueryVolunteerValidatorsResponse.decode,
  service: "xpla.volunteer.v1beta1.Query",
  method: "VolunteerValidators",
  deps: [QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse]
});