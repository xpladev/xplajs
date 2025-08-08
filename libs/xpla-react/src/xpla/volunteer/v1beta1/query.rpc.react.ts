import { buildUseQuery } from "../../../react-query";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
import { getVolunteerValidators } from "./query.rpc.func";
/**
 * VolunteerValidators
 * @name useGetVolunteerValidators
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.VolunteerValidators
 */
export const useGetVolunteerValidators = buildUseQuery<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse>({
  builderQueryFn: getVolunteerValidators,
  queryKeyPrefix: "VolunteerValidatorsQuery"
});