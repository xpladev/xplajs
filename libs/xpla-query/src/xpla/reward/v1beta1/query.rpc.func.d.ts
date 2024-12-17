import { RpcResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const useGetParams: <TData = QueryParamsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryParamsRequest, QueryParamsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetPool: (clientResolver?: RpcResolver) => (request: QueryPoolRequest) => Promise<QueryPoolResponse>;
export declare const useGetPool: <TData = QueryPoolResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryPoolRequest, QueryPoolResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
