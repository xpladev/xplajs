import { MsgEthereumTxResponse } from "./tx";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
import { createGetAccount, createGetCosmosAccount, createGetValidatorAccount, createGetBalance, createGetStorage, createGetCode, createGetParams, createGetEthCall, createGetEstimateGas, createGetTraceTx, createGetTraceBlock, createGetBaseFee } from "./query.rpc.func";
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetCosmosAccount = buildUseQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  builderQueryFn: createGetCosmosAccount,
  queryKeyPrefix: "CosmosAccountQuery"
});
export const useGetValidatorAccount = buildUseQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  builderQueryFn: createGetValidatorAccount,
  queryKeyPrefix: "ValidatorAccountQuery"
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetStorage = buildUseQuery<QueryStorageRequest, QueryStorageResponse>({
  builderQueryFn: createGetStorage,
  queryKeyPrefix: "StorageQuery"
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetEthCall = buildUseQuery<EthCallRequest, MsgEthereumTxResponse>({
  builderQueryFn: createGetEthCall,
  queryKeyPrefix: "EthCallQuery"
});
export const useGetEstimateGas = buildUseQuery<EthCallRequest, EstimateGasResponse>({
  builderQueryFn: createGetEstimateGas,
  queryKeyPrefix: "EstimateGasQuery"
});
export const useGetTraceTx = buildUseQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  builderQueryFn: createGetTraceTx,
  queryKeyPrefix: "TraceTxQuery"
});
export const useGetTraceBlock = buildUseQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  builderQueryFn: createGetTraceBlock,
  queryKeyPrefix: "TraceBlockQuery"
});
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: createGetBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});