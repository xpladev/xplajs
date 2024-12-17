import { MsgEthereumTxResponse } from "./tx";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
export const createGetAccount = (clientResolver?: RpcResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Account",
  clientResolver
});
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const createGetCosmosAccount = (clientResolver?: RpcResolver) => buildQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  encode: QueryCosmosAccountRequest.encode,
  decode: QueryCosmosAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "CosmosAccount",
  clientResolver
});
export const useGetCosmosAccount = buildUseQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  builderQueryFn: createGetCosmosAccount,
  queryKeyPrefix: "CosmosAccountQuery"
});
export const createGetValidatorAccount = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  encode: QueryValidatorAccountRequest.encode,
  decode: QueryValidatorAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "ValidatorAccount",
  clientResolver
});
export const useGetValidatorAccount = buildUseQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  builderQueryFn: createGetValidatorAccount,
  queryKeyPrefix: "ValidatorAccountQuery"
});
export const createGetBalance = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Balance",
  clientResolver
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetStorage = (clientResolver?: RpcResolver) => buildQuery<QueryStorageRequest, QueryStorageResponse>({
  encode: QueryStorageRequest.encode,
  decode: QueryStorageResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Storage",
  clientResolver
});
export const useGetStorage = buildUseQuery<QueryStorageRequest, QueryStorageResponse>({
  builderQueryFn: createGetStorage,
  queryKeyPrefix: "StorageQuery"
});
export const createGetCode = (clientResolver?: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Code",
  clientResolver
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetEthCall = (clientResolver?: RpcResolver) => buildQuery<EthCallRequest, MsgEthereumTxResponse>({
  encode: EthCallRequest.encode,
  decode: MsgEthereumTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EthCall",
  clientResolver
});
export const useGetEthCall = buildUseQuery<EthCallRequest, MsgEthereumTxResponse>({
  builderQueryFn: createGetEthCall,
  queryKeyPrefix: "EthCallQuery"
});
export const createGetEstimateGas = (clientResolver?: RpcResolver) => buildQuery<EthCallRequest, EstimateGasResponse>({
  encode: EthCallRequest.encode,
  decode: EstimateGasResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EstimateGas",
  clientResolver
});
export const useGetEstimateGas = buildUseQuery<EthCallRequest, EstimateGasResponse>({
  builderQueryFn: createGetEstimateGas,
  queryKeyPrefix: "EstimateGasQuery"
});
export const createGetTraceTx = (clientResolver?: RpcResolver) => buildQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  encode: QueryTraceTxRequest.encode,
  decode: QueryTraceTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceTx",
  clientResolver
});
export const useGetTraceTx = buildUseQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  builderQueryFn: createGetTraceTx,
  queryKeyPrefix: "TraceTxQuery"
});
export const createGetTraceBlock = (clientResolver?: RpcResolver) => buildQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  encode: QueryTraceBlockRequest.encode,
  decode: QueryTraceBlockResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceBlock",
  clientResolver
});
export const useGetTraceBlock = buildUseQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  builderQueryFn: createGetTraceBlock,
  queryKeyPrefix: "TraceBlockQuery"
});
export const createGetBaseFee = (clientResolver?: RpcResolver) => buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "BaseFee",
  clientResolver
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: createGetBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});