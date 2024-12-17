import { RpcResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const useGetParams: <TData = QueryParamsResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryParamsRequest, QueryParamsResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetBaseFee: (clientResolver?: RpcResolver) => (request: QueryBaseFeeRequest) => Promise<QueryBaseFeeResponse>;
export declare const useGetBaseFee: <TData = QueryBaseFeeResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryBaseFeeRequest, QueryBaseFeeResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
export declare const createGetBlockGas: (clientResolver?: RpcResolver) => (request: QueryBlockGasRequest) => Promise<QueryBlockGasResponse>;
export declare const useGetBlockGas: <TData = QueryBlockGasResponse>({ request, options, clientResolver, customizedQueryKey, }: import("../../../react-query").UseQueryParams<QueryBlockGasRequest, QueryBlockGasResponse, TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
