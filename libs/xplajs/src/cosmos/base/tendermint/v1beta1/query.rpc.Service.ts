import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  GetSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   * 
   * Since: cosmos-sdk 0.46
   */
  ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GetNodeInfo queries the current node info. */
  GetNodeInfo = async (request: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> => {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then(data => GetNodeInfoResponse.decode(new BinaryReader(data)));
  };
  /* GetSyncing queries node syncing. */
  GetSyncing = async (request: GetSyncingRequest = {}): Promise<GetSyncingResponse> => {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then(data => GetSyncingResponse.decode(new BinaryReader(data)));
  };
  /* GetLatestBlock returns the latest block. */
  GetLatestBlock = async (request: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> => {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then(data => GetLatestBlockResponse.decode(new BinaryReader(data)));
  };
  /* GetBlockByHeight queries block for given height. */
  GetBlockByHeight = async (request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> => {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then(data => GetBlockByHeightResponse.decode(new BinaryReader(data)));
  };
  /* GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet = async (request: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponse> => {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then(data => GetLatestValidatorSetResponse.decode(new BinaryReader(data)));
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight = async (request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> => {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then(data => GetValidatorSetByHeightResponse.decode(new BinaryReader(data)));
  };
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */
  ABCIQuery = async (request: ABCIQueryRequest): Promise<ABCIQueryResponse> => {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then(data => ABCIQueryResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    GetNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse> {
      return queryService.GetNodeInfo(request);
    },
    GetSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse> {
      return queryService.GetSyncing(request);
    },
    GetLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse> {
      return queryService.GetLatestBlock(request);
    },
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
      return queryService.GetBlockByHeight(request);
    },
    GetLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse> {
      return queryService.GetLatestValidatorSet(request);
    },
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
      return queryService.GetValidatorSetByHeight(request);
    },
    ABCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse> {
      return queryService.ABCIQuery(request);
    }
  };
};