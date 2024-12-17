import { RpcResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export declare const createGetParams: (clientResolver?: RpcResolver) => (request: QueryParamsRequest) => Promise<QueryParamsResponse>;
export declare const createGetBaseFee: (clientResolver?: RpcResolver) => (request: QueryBaseFeeRequest) => Promise<QueryBaseFeeResponse>;
export declare const createGetBlockGas: (clientResolver?: RpcResolver) => (request: QueryBlockGasRequest) => Promise<QueryBlockGasResponse>;
