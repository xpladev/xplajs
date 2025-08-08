import { MsgEthereumTxResponse } from "./tx";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryConfigRequest, QueryConfigResponse, QueryGlobalMinGasPriceRequest, QueryGlobalMinGasPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Account queries an Ethereum account. */
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  cosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  validatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * account.
   */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Storage queries the balance of all coins for a single account. */
  storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  /** Code queries the balance of all coins for a single account. */
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Params queries the parameters of x/vm module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EthCall implements the `eth_call` rpc api */
  ethCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  estimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  traceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
  /**
   * TraceBlock implements the `debug_traceBlockByNumber` and
   * `debug_traceBlockByHash` rpc api
   */
  traceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork
   * status.
   */
  baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
  /** Config queries the EVM configuration */
  config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
  /**
   * GlobalMinGasPrice queries the MinGasPrice
   * it's similar to feemarket module's method,
   * but makes the conversion to 18 decimals
   * when the evm denom is represented with a different precision.
   */
  globalMinGasPrice(request?: QueryGlobalMinGasPriceRequest): Promise<QueryGlobalMinGasPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Account queries an Ethereum account. */
  account = async (request: QueryAccountRequest): Promise<QueryAccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
  };
  /* CosmosAccount queries an Ethereum account's Cosmos Address. */
  cosmosAccount = async (request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse> => {
    const data = QueryCosmosAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "CosmosAccount", data);
    return promise.then(data => QueryCosmosAccountResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorAccount queries an Ethereum account's from a validator consensus
   Address. */
  validatorAccount = async (request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse> => {
    const data = QueryValidatorAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "ValidatorAccount", data);
    return promise.then(data => QueryValidatorAccountResponse.decode(new BinaryReader(data)));
  };
  /* Balance queries the balance of a the EVM denomination for a single
   account. */
  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Storage queries the balance of all coins for a single account. */
  storage = async (request: QueryStorageRequest): Promise<QueryStorageResponse> => {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Storage", data);
    return promise.then(data => QueryStorageResponse.decode(new BinaryReader(data)));
  };
  /* Code queries the balance of all coins for a single account. */
  code = async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  };
  /* Params queries the parameters of x/vm module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* EthCall implements the `eth_call` rpc api */
  ethCall = async (request: EthCallRequest): Promise<MsgEthereumTxResponse> => {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "EthCall", data);
    return promise.then(data => MsgEthereumTxResponse.decode(new BinaryReader(data)));
  };
  /* EstimateGas implements the `eth_estimateGas` rpc api */
  estimateGas = async (request: EthCallRequest): Promise<EstimateGasResponse> => {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "EstimateGas", data);
    return promise.then(data => EstimateGasResponse.decode(new BinaryReader(data)));
  };
  /* TraceTx implements the `debug_traceTransaction` rpc api */
  traceTx = async (request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> => {
    const data = QueryTraceTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "TraceTx", data);
    return promise.then(data => QueryTraceTxResponse.decode(new BinaryReader(data)));
  };
  /* TraceBlock implements the `debug_traceBlockByNumber` and
   `debug_traceBlockByHash` rpc api */
  traceBlock = async (request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse> => {
    const data = QueryTraceBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "TraceBlock", data);
    return promise.then(data => QueryTraceBlockResponse.decode(new BinaryReader(data)));
  };
  /* BaseFee queries the base fee of the parent block of the current block,
   it's similar to feemarket module's method, but also checks london hardfork
   status. */
  baseFee = async (request: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> => {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "BaseFee", data);
    return promise.then(data => QueryBaseFeeResponse.decode(new BinaryReader(data)));
  };
  /* Config queries the EVM configuration */
  config = async (request: QueryConfigRequest = {}): Promise<QueryConfigResponse> => {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new BinaryReader(data)));
  };
  /* GlobalMinGasPrice queries the MinGasPrice
   it's similar to feemarket module's method,
   but makes the conversion to 18 decimals
   when the evm denom is represented with a different precision. */
  globalMinGasPrice = async (request: QueryGlobalMinGasPriceRequest = {}): Promise<QueryGlobalMinGasPriceResponse> => {
    const data = QueryGlobalMinGasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evm.vm.v1.Query", "GlobalMinGasPrice", data);
    return promise.then(data => QueryGlobalMinGasPriceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.account(request);
    },
    cosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse> {
      return queryService.cosmosAccount(request);
    },
    validatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse> {
      return queryService.validatorAccount(request);
    },
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
      return queryService.storage(request);
    },
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    ethCall(request: EthCallRequest): Promise<MsgEthereumTxResponse> {
      return queryService.ethCall(request);
    },
    estimateGas(request: EthCallRequest): Promise<EstimateGasResponse> {
      return queryService.estimateGas(request);
    },
    traceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> {
      return queryService.traceTx(request);
    },
    traceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse> {
      return queryService.traceBlock(request);
    },
    baseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
      return queryService.baseFee(request);
    },
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse> {
      return queryService.config(request);
    },
    globalMinGasPrice(request?: QueryGlobalMinGasPriceRequest): Promise<QueryGlobalMinGasPriceResponse> {
      return queryService.globalMinGasPrice(request);
    }
  };
};