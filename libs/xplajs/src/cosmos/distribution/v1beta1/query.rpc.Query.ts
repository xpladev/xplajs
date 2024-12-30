import { Params, ValidatorOutstandingRewards } from "./distribution";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by each
   * validator.
   */
  DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the distribution module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo = async (request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse> => {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then(data => QueryValidatorDistributionInfoResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards = async (request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> => {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission = async (request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> => {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes = async (request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> => {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  };
  /* DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards = async (request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> => {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegationTotalRewards queries the total rewards accrued by each
   validator. */
  DelegationTotalRewards = async (request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> => {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress = async (request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> => {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  };
  /* CommunityPool queries the community pool coins. */
  CommunityPool = async (request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> => {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    ValidatorDistributionInfo(request: QueryValidatorDistributionInfoRequest): Promise<QueryValidatorDistributionInfoResponse> {
      return queryService.ValidatorDistributionInfo(request);
    },
    ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
      return queryService.ValidatorOutstandingRewards(request);
    },
    ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
      return queryService.ValidatorCommission(request);
    },
    ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
      return queryService.ValidatorSlashes(request);
    },
    DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
      return queryService.DelegationRewards(request);
    },
    DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
      return queryService.DelegationTotalRewards(request);
    },
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.DelegatorValidators(request);
    },
    DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
      return queryService.DelegatorWithdrawAddress(request);
    },
    CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
      return queryService.CommunityPool(request);
    }
  };
};