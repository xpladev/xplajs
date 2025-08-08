import { buildUseMutation } from "../../../react-query";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
import { fundRewardPool, updateParams } from "./tx.rpc.func";
/**
 * MsgFundRewardPool defines a method to allow an account to directly
 * fund the reward pool.
 * @name useFundRewardPool
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.FundRewardPool
 */
export const useFundRewardPool = buildUseMutation<MsgFundRewardPool, Error>({
  builderMutationFn: fundRewardPool
});
/**
 * UpdateParams defined a governance operation for updating the x/reward
 * module parameters. The authority is hard-coded to the Cosmos SDK x/gov
 * module account
 * @name useUpdateParams
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});