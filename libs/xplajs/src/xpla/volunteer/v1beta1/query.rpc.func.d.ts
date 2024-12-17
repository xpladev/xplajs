import { RpcResolver } from "../../../helper-func-types";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
export declare const createGetVolunteerValidators: (clientResolver?: RpcResolver) => (request: QueryVolunteerValidatorsRequest) => Promise<QueryVolunteerValidatorsResponse>;
