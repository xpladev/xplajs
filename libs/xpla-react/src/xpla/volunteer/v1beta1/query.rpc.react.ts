import { buildUseQuery } from "../../../react-query";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
import { createGetVolunteerValidators } from "./query.rpc.func";
export const useGetVolunteerValidators = buildUseQuery<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse>({
  builderQueryFn: createGetVolunteerValidators,
  queryKeyPrefix: "VolunteerValidatorsQuery"
});