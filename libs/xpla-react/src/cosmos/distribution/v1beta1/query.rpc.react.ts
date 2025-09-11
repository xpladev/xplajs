import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
import { getParams, getValidatorDistributionInfo, getValidatorOutstandingRewards, getValidatorCommission, getValidatorSlashes, getDelegationRewards, getDelegationTotalRewards, getDelegatorValidators, getDelegatorWithdrawAddress, getCommunityPool } from "./query.rpc.func";
/**
 * Params queries params of the distribution module.
 * @name useGetParams
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
 * @name useGetValidatorDistributionInfo
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.ValidatorDistributionInfo
 */
export const useGetValidatorDistributionInfo = buildUseQuery<QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse>({
  builderQueryFn: getValidatorDistributionInfo,
  queryKeyPrefix: "ValidatorDistributionInfoQuery"
});
/**
 * ValidatorOutstandingRewards queries rewards of a validator address.
 * @name useGetValidatorOutstandingRewards
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.ValidatorOutstandingRewards
 */
export const useGetValidatorOutstandingRewards = buildUseQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  builderQueryFn: getValidatorOutstandingRewards,
  queryKeyPrefix: "ValidatorOutstandingRewardsQuery"
});
/**
 * ValidatorCommission queries accumulated commission for a validator.
 * @name useGetValidatorCommission
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.ValidatorCommission
 */
export const useGetValidatorCommission = buildUseQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  builderQueryFn: getValidatorCommission,
  queryKeyPrefix: "ValidatorCommissionQuery"
});
/**
 * ValidatorSlashes queries slash events of a validator.
 * @name useGetValidatorSlashes
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.ValidatorSlashes
 */
export const useGetValidatorSlashes = buildUseQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  builderQueryFn: getValidatorSlashes,
  queryKeyPrefix: "ValidatorSlashesQuery"
});
/**
 * DelegationRewards queries the total rewards accrued by a delegation.
 * @name useGetDelegationRewards
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.DelegationRewards
 */
export const useGetDelegationRewards = buildUseQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  builderQueryFn: getDelegationRewards,
  queryKeyPrefix: "DelegationRewardsQuery"
});
/**
 * DelegationTotalRewards queries the total rewards accrued by each
 * validator.
 * @name useGetDelegationTotalRewards
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.DelegationTotalRewards
 */
export const useGetDelegationTotalRewards = buildUseQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  builderQueryFn: getDelegationTotalRewards,
  queryKeyPrefix: "DelegationTotalRewardsQuery"
});
/**
 * DelegatorValidators queries the validators of a delegator.
 * @name useGetDelegatorValidators
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.DelegatorValidators
 */
export const useGetDelegatorValidators = buildUseQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
/**
 * DelegatorWithdrawAddress queries withdraw address of a delegator.
 * @name useGetDelegatorWithdrawAddress
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.DelegatorWithdrawAddress
 */
export const useGetDelegatorWithdrawAddress = buildUseQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  builderQueryFn: getDelegatorWithdrawAddress,
  queryKeyPrefix: "DelegatorWithdrawAddressQuery"
});
/**
 * CommunityPool queries the community pool coins.
 * @name useGetCommunityPool
 * @package cosmos.distribution.v1beta1
 * @see proto service: cosmos.distribution.v1beta1.CommunityPool
 */
export const useGetCommunityPool = buildUseQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: getCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});