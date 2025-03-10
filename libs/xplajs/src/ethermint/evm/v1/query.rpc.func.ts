import { MsgEthereumTxResponse } from "./tx";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
export const createGetAccount = (clientResolver?: RpcResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Account",
  clientResolver,
  deps: [QueryAccountRequest, QueryAccountResponse]
});
export const createGetCosmosAccount = (clientResolver?: RpcResolver) => buildQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  encode: QueryCosmosAccountRequest.encode,
  decode: QueryCosmosAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "CosmosAccount",
  clientResolver,
  deps: [QueryCosmosAccountRequest, QueryCosmosAccountResponse]
});
export const createGetValidatorAccount = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  encode: QueryValidatorAccountRequest.encode,
  decode: QueryValidatorAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "ValidatorAccount",
  clientResolver,
  deps: [QueryValidatorAccountRequest, QueryValidatorAccountResponse]
});
export const createGetBalance = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Balance",
  clientResolver,
  deps: [QueryBalanceRequest, QueryBalanceResponse]
});
export const createGetStorage = (clientResolver?: RpcResolver) => buildQuery<QueryStorageRequest, QueryStorageResponse>({
  encode: QueryStorageRequest.encode,
  decode: QueryStorageResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Storage",
  clientResolver,
  deps: [QueryStorageRequest, QueryStorageResponse]
});
export const createGetCode = (clientResolver?: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Code",
  clientResolver,
  deps: [QueryCodeRequest, QueryCodeResponse]
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetEthCall = (clientResolver?: RpcResolver) => buildQuery<EthCallRequest, MsgEthereumTxResponse>({
  encode: EthCallRequest.encode,
  decode: MsgEthereumTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EthCall",
  clientResolver,
  deps: [EthCallRequest, MsgEthereumTxResponse]
});
export const createGetEstimateGas = (clientResolver?: RpcResolver) => buildQuery<EthCallRequest, EstimateGasResponse>({
  encode: EthCallRequest.encode,
  decode: EstimateGasResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EstimateGas",
  clientResolver,
  deps: [EthCallRequest, EstimateGasResponse]
});
export const createGetTraceTx = (clientResolver?: RpcResolver) => buildQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  encode: QueryTraceTxRequest.encode,
  decode: QueryTraceTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceTx",
  clientResolver,
  deps: [QueryTraceTxRequest, QueryTraceTxResponse]
});
export const createGetTraceBlock = (clientResolver?: RpcResolver) => buildQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  encode: QueryTraceBlockRequest.encode,
  decode: QueryTraceBlockResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceBlock",
  clientResolver,
  deps: [QueryTraceBlockRequest, QueryTraceBlockResponse]
});
export const createGetBaseFee = (clientResolver?: RpcResolver) => buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "BaseFee",
  clientResolver,
  deps: [QueryBaseFeeRequest, QueryBaseFeeResponse]
});