import { RpcResolver } from "../../../helper-func-types";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
export declare const createGetVolunteerValidators: (clientResolver?: RpcResolver) => (request: QueryVolunteerValidatorsRequest) => Promise<QueryVolunteerValidatorsResponse>;
export declare const useGetVolunteerValidators: <TData = QueryVolunteerValidatorsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
