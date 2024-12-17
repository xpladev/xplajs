import { RpcResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const createGetPool: (clientResolver?: RpcResolver) => (request: QueryPoolRequest) => Promise<QueryPoolResponse>;
