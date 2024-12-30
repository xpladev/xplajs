import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GetNodeInfo queries the current node info. */
  getNodeInfo = async (_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get<GetNodeInfoResponse>(endpoint);
  };
  /* GetSyncing queries node syncing. */
  getSyncing = async (_params: GetSyncingRequest = {}): Promise<GetSyncingResponse> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get<GetSyncingResponse>(endpoint);
  };
  /* GetLatestBlock returns the latest block. */
  getLatestBlock = async (_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get<GetLatestBlockResponse>(endpoint);
  };
  /* GetBlockByHeight queries block for given height. */
  getBlockByHeight = async (params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get<GetBlockByHeightResponse>(endpoint);
  };
  /* GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet = async (params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get<GetLatestValidatorSetResponse>(endpoint, options);
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight = async (params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get<GetValidatorSetByHeightResponse>(endpoint, options);
  };
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */
  aBCIQuery = async (params: ABCIQueryRequest): Promise<ABCIQueryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.data !== "undefined") {
      options.params.data = params.data;
    }
    if (typeof params?.path !== "undefined") {
      options.params.path = params.path;
    }
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    if (typeof params?.prove !== "undefined") {
      options.params.prove = params.prove;
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/abci_query`;
    return await this.req.get<ABCIQueryResponse>(endpoint, options);
  };
}