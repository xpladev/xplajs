import { MsgEthereumTxResponse } from "./tx";
import { buildUseQuery } from "../../../../react-query";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryConfigRequest, QueryConfigResponse, QueryGlobalMinGasPriceRequest, QueryGlobalMinGasPriceResponse } from "./query";
import { getAccount, getCosmosAccount, getValidatorAccount, getBalance, getStorage, getCode, getParams, getEthCall, getEstimateGas, getTraceTx, getTraceBlock, getBaseFee, getConfig, getGlobalMinGasPrice } from "./query.rpc.func";
/**
 * Account queries an Ethereum account.
 * @name useGetAccount
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Account
 */
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/**
 * CosmosAccount queries an Ethereum account's Cosmos Address.
 * @name useGetCosmosAccount
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.CosmosAccount
 */
export const useGetCosmosAccount = buildUseQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  builderQueryFn: getCosmosAccount,
  queryKeyPrefix: "CosmosAccountQuery"
});
/**
 * ValidatorAccount queries an Ethereum account's from a validator consensus
 * Address.
 * @name useGetValidatorAccount
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.ValidatorAccount
 */
export const useGetValidatorAccount = buildUseQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  builderQueryFn: getValidatorAccount,
  queryKeyPrefix: "ValidatorAccountQuery"
});
/**
 * Balance queries the balance of a the EVM denomination for a single
 * account.
 * @name useGetBalance
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Balance
 */
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/**
 * Storage queries the balance of all coins for a single account.
 * @name useGetStorage
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Storage
 */
export const useGetStorage = buildUseQuery<QueryStorageRequest, QueryStorageResponse>({
  builderQueryFn: getStorage,
  queryKeyPrefix: "StorageQuery"
});
/**
 * Code queries the balance of all coins for a single account.
 * @name useGetCode
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Code
 */
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: getCode,
  queryKeyPrefix: "CodeQuery"
});
/**
 * Params queries the parameters of x/vm module.
 * @name useGetParams
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * EthCall implements the `eth_call` rpc api
 * @name useGetEthCall
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.EthCall
 */
export const useGetEthCall = buildUseQuery<EthCallRequest, MsgEthereumTxResponse>({
  builderQueryFn: getEthCall,
  queryKeyPrefix: "EthCallQuery"
});
/**
 * EstimateGas implements the `eth_estimateGas` rpc api
 * @name useGetEstimateGas
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.EstimateGas
 */
export const useGetEstimateGas = buildUseQuery<EthCallRequest, EstimateGasResponse>({
  builderQueryFn: getEstimateGas,
  queryKeyPrefix: "EstimateGasQuery"
});
/**
 * TraceTx implements the `debug_traceTransaction` rpc api
 * @name useGetTraceTx
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.TraceTx
 */
export const useGetTraceTx = buildUseQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  builderQueryFn: getTraceTx,
  queryKeyPrefix: "TraceTxQuery"
});
/**
 * TraceBlock implements the `debug_traceBlockByNumber` and
 * `debug_traceBlockByHash` rpc api
 * @name useGetTraceBlock
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.TraceBlock
 */
export const useGetTraceBlock = buildUseQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  builderQueryFn: getTraceBlock,
  queryKeyPrefix: "TraceBlockQuery"
});
/**
 * BaseFee queries the base fee of the parent block of the current block,
 * it's similar to feemarket module's method, but also checks london hardfork
 * status.
 * @name useGetBaseFee
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.BaseFee
 */
export const useGetBaseFee = buildUseQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  builderQueryFn: getBaseFee,
  queryKeyPrefix: "BaseFeeQuery"
});
/**
 * Config queries the EVM configuration
 * @name useGetConfig
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.Config
 */
export const useGetConfig = buildUseQuery<QueryConfigRequest, QueryConfigResponse>({
  builderQueryFn: getConfig,
  queryKeyPrefix: "ConfigQuery"
});
/**
 * GlobalMinGasPrice queries the MinGasPrice
 * it's similar to feemarket module's method,
 * but makes the conversion to 18 decimals
 * when the evm denom is represented with a different precision.
 * @name useGetGlobalMinGasPrice
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.GlobalMinGasPrice
 */
export const useGetGlobalMinGasPrice = buildUseQuery<QueryGlobalMinGasPriceRequest, QueryGlobalMinGasPriceResponse>({
  builderQueryFn: getGlobalMinGasPrice,
  queryKeyPrefix: "GlobalMinGasPriceQuery"
});