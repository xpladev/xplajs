import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
export const createGetVolunteerValidators = (clientResolver?: RpcResolver) => buildQuery<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse>({
  encode: QueryVolunteerValidatorsRequest.encode,
  decode: QueryVolunteerValidatorsResponse.decode,
  service: "xpla.volunteer.v1beta1.Query",
  method: "VolunteerValidators",
  clientResolver
});
export const useGetVolunteerValidators = buildUseQuery<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse>({
  builderQueryFn: createGetVolunteerValidators,
  queryKeyPrefix: "VolunteerValidatorsQuery"
});