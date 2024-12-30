import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
  /**
   * Returns the account with authority to conduct upgrades
   * 
   * Since: cosmos-sdk 0.46
   */
  Authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CurrentPlan queries the current upgrade plan. */
  CurrentPlan = async (request: QueryCurrentPlanRequest = {}): Promise<QueryCurrentPlanResponse> => {
    const data = QueryCurrentPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
    return promise.then(data => QueryCurrentPlanResponse.decode(new BinaryReader(data)));
  };
  /* AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan = async (request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> => {
    const data = QueryAppliedPlanRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
    return promise.then(data => QueryAppliedPlanResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedConsensusState queries the consensus state that will serve
   as a trusted kernel for the next version of this chain. It will only be
   stored at the last height of this chain.
   UpgradedConsensusState RPC not supported with legacy querier
   This rpc is deprecated now that IBC has its own replacement
   (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54) */
  UpgradedConsensusState = async (request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> => {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ModuleVersions queries the list of module versions from state.
  
   Since: cosmos-sdk 0.43 */
  ModuleVersions = async (request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> => {
    const data = QueryModuleVersionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
    return promise.then(data => QueryModuleVersionsResponse.decode(new BinaryReader(data)));
  };
  /* Returns the account with authority to conduct upgrades
  
   Since: cosmos-sdk 0.46 */
  Authority = async (request: QueryAuthorityRequest = {}): Promise<QueryAuthorityResponse> => {
    const data = QueryAuthorityRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "Authority", data);
    return promise.then(data => QueryAuthorityResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    CurrentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse> {
      return queryService.CurrentPlan(request);
    },
    AppliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse> {
      return queryService.AppliedPlan(request);
    },
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
      return queryService.UpgradedConsensusState(request);
    },
    ModuleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse> {
      return queryService.ModuleVersions(request);
    },
    Authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse> {
      return queryService.Authority(request);
    }
  };
};