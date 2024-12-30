import { MsgEthereumTxResponse } from "./tx";
import { Params } from "./evm";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Account queries an Ethereum account. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /** CosmosAccount queries an Ethereum account's Cosmos Address. */
  CosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse>;
  /**
   * ValidatorAccount queries an Ethereum account's from a validator consensus
   * Address.
   */
  ValidatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse>;
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Storage queries the balance of all coins for a single account. */
  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  /** Code queries the balance of all coins for a single account. */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Params queries the parameters of x/evm module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EthCall implements the `eth_call` rpc api */
  EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse>;
  /** EstimateGas implements the `eth_estimateGas` rpc api */
  EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse>;
  /** TraceTx implements the `debug_traceTransaction` rpc api */
  TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse>;
  /** TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse>;
  /**
   * BaseFee queries the base fee of the parent block of the current block,
   * it's similar to feemarket module's method, but also checks london hardfork status.
   */
  BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Account queries an Ethereum account. */
  Account = async (request: QueryAccountRequest): Promise<QueryAccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
  };
  /* CosmosAccount queries an Ethereum account's Cosmos Address. */
  CosmosAccount = async (request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse> => {
    const data = QueryCosmosAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "CosmosAccount", data);
    return promise.then(data => QueryCosmosAccountResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorAccount queries an Ethereum account's from a validator consensus
   Address. */
  ValidatorAccount = async (request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse> => {
    const data = QueryValidatorAccountRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "ValidatorAccount", data);
    return promise.then(data => QueryValidatorAccountResponse.decode(new BinaryReader(data)));
  };
  /* Balance queries the balance of a the EVM denomination for a single
   EthAccount. */
  Balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* Storage queries the balance of all coins for a single account. */
  Storage = async (request: QueryStorageRequest): Promise<QueryStorageResponse> => {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Storage", data);
    return promise.then(data => QueryStorageResponse.decode(new BinaryReader(data)));
  };
  /* Code queries the balance of all coins for a single account. */
  Code = async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  };
  /* Params queries the parameters of x/evm module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* EthCall implements the `eth_call` rpc api */
  EthCall = async (request: EthCallRequest): Promise<MsgEthereumTxResponse> => {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "EthCall", data);
    return promise.then(data => MsgEthereumTxResponse.decode(new BinaryReader(data)));
  };
  /* EstimateGas implements the `eth_estimateGas` rpc api */
  EstimateGas = async (request: EthCallRequest): Promise<EstimateGasResponse> => {
    const data = EthCallRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "EstimateGas", data);
    return promise.then(data => EstimateGasResponse.decode(new BinaryReader(data)));
  };
  /* TraceTx implements the `debug_traceTransaction` rpc api */
  TraceTx = async (request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> => {
    const data = QueryTraceTxRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceTx", data);
    return promise.then(data => QueryTraceTxResponse.decode(new BinaryReader(data)));
  };
  /* TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  TraceBlock = async (request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse> => {
    const data = QueryTraceBlockRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "TraceBlock", data);
    return promise.then(data => QueryTraceBlockResponse.decode(new BinaryReader(data)));
  };
  /* BaseFee queries the base fee of the parent block of the current block,
   it's similar to feemarket module's method, but also checks london hardfork status. */
  BaseFee = async (request: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> => {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Query", "BaseFee", data);
    return promise.then(data => QueryBaseFeeResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.Account(request);
    },
    CosmosAccount(request: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse> {
      return queryService.CosmosAccount(request);
    },
    ValidatorAccount(request: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse> {
      return queryService.ValidatorAccount(request);
    },
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.Balance(request);
    },
    Storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
      return queryService.Storage(request);
    },
    Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.Code(request);
    },
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    EthCall(request: EthCallRequest): Promise<MsgEthereumTxResponse> {
      return queryService.EthCall(request);
    },
    EstimateGas(request: EthCallRequest): Promise<EstimateGasResponse> {
      return queryService.EstimateGas(request);
    },
    TraceTx(request: QueryTraceTxRequest): Promise<QueryTraceTxResponse> {
      return queryService.TraceTx(request);
    },
    TraceBlock(request: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse> {
      return queryService.TraceBlock(request);
    },
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
      return queryService.BaseFee(request);
    }
  };
};