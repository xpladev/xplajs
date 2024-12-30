import { Params } from "./feemarket";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of x/feemarket module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** BaseFee queries the base fee of the parent block of the current block. */
  BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse>;
  /** BlockGas queries the gas used at a given block height */
  BlockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries the parameters of x/feemarket module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.feemarket.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* BaseFee queries the base fee of the parent block of the current block. */
  BaseFee = async (request: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> => {
    const data = QueryBaseFeeRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BaseFee", data);
    return promise.then(data => QueryBaseFeeResponse.decode(new BinaryReader(data)));
  };
  /* BlockGas queries the gas used at a given block height */
  BlockGas = async (request: QueryBlockGasRequest = {}): Promise<QueryBlockGasResponse> => {
    const data = QueryBlockGasRequest.encode(request).finish();
    const promise = this.rpc.request("ethermint.feemarket.v1.Query", "BlockGas", data);
    return promise.then(data => QueryBlockGasResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    BaseFee(request?: QueryBaseFeeRequest): Promise<QueryBaseFeeResponse> {
      return queryService.BaseFee(request);
    },
    BlockGas(request?: QueryBlockGasRequest): Promise<QueryBlockGasResponse> {
      return queryService.BlockGas(request);
    }
  };
};