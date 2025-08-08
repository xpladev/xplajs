import { MsgEthereumTxResponse } from "./tx";
import { buildQuery } from "../../../helper-func-types";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
/**
 * Account queries an Ethereum account.
 * @name getAccount
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.Account
 */
export const getAccount = buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Account",
  deps: [QueryAccountRequest, QueryAccountResponse]
});
/**
 * CosmosAccount queries an Ethereum account's Cosmos Address.
 * @name getCosmosAccount
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.CosmosAccount
 */
export const getCosmosAccount = buildQuery<QueryCosmosAccountRequest, QueryCosmosAccountResponse>({
  encode: QueryCosmosAccountRequest.encode,
  decode: QueryCosmosAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "CosmosAccount",
  deps: [QueryCosmosAccountRequest, QueryCosmosAccountResponse]
});
/**
 * ValidatorAccount queries an Ethereum account's from a validator consensus
 * Address.
 * @name getValidatorAccount
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.ValidatorAccount
 */
export const getValidatorAccount = buildQuery<QueryValidatorAccountRequest, QueryValidatorAccountResponse>({
  encode: QueryValidatorAccountRequest.encode,
  decode: QueryValidatorAccountResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "ValidatorAccount",
  deps: [QueryValidatorAccountRequest, QueryValidatorAccountResponse]
});
/**
 * Balance queries the balance of a the EVM denomination for a single
 * EthAccount.
 * @name getBalance
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.Balance
 */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Balance",
  deps: [QueryBalanceRequest, QueryBalanceResponse]
});
/**
 * Storage queries the balance of all coins for a single account.
 * @name getStorage
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.Storage
 */
export const getStorage = buildQuery<QueryStorageRequest, QueryStorageResponse>({
  encode: QueryStorageRequest.encode,
  decode: QueryStorageResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Storage",
  deps: [QueryStorageRequest, QueryStorageResponse]
});
/**
 * Code queries the balance of all coins for a single account.
 * @name getCode
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.Code
 */
export const getCode = buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Code",
  deps: [QueryCodeRequest, QueryCodeResponse]
});
/**
 * Params queries the parameters of x/evm module.
 * @name getParams
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * EthCall implements the `eth_call` rpc api
 * @name getEthCall
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.EthCall
 */
export const getEthCall = buildQuery<EthCallRequest, MsgEthereumTxResponse>({
  encode: EthCallRequest.encode,
  decode: MsgEthereumTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EthCall",
  deps: [EthCallRequest, MsgEthereumTxResponse]
});
/**
 * EstimateGas implements the `eth_estimateGas` rpc api
 * @name getEstimateGas
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.EstimateGas
 */
export const getEstimateGas = buildQuery<EthCallRequest, EstimateGasResponse>({
  encode: EthCallRequest.encode,
  decode: EstimateGasResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "EstimateGas",
  deps: [EthCallRequest, EstimateGasResponse]
});
/**
 * TraceTx implements the `debug_traceTransaction` rpc api
 * @name getTraceTx
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.TraceTx
 */
export const getTraceTx = buildQuery<QueryTraceTxRequest, QueryTraceTxResponse>({
  encode: QueryTraceTxRequest.encode,
  decode: QueryTraceTxResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceTx",
  deps: [QueryTraceTxRequest, QueryTraceTxResponse]
});
/**
 * TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
 * @name getTraceBlock
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.TraceBlock
 */
export const getTraceBlock = buildQuery<QueryTraceBlockRequest, QueryTraceBlockResponse>({
  encode: QueryTraceBlockRequest.encode,
  decode: QueryTraceBlockResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "TraceBlock",
  deps: [QueryTraceBlockRequest, QueryTraceBlockResponse]
});
/**
 * BaseFee queries the base fee of the parent block of the current block,
 * it's similar to feemarket module's method, but also checks london hardfork status.
 * @name getBaseFee
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.BaseFee
 */
export const getBaseFee = buildQuery<QueryBaseFeeRequest, QueryBaseFeeResponse>({
  encode: QueryBaseFeeRequest.encode,
  decode: QueryBaseFeeResponse.decode,
  service: "ethermint.evm.v1.Query",
  method: "BaseFee",
  deps: [QueryBaseFeeRequest, QueryBaseFeeResponse]
});