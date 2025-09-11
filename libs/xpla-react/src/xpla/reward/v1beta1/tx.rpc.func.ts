import { buildTx } from "../../../helper-func-types";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
/**
 * MsgFundRewardPool defines a method to allow an account to directly
 * fund the reward pool.
 * @name fundRewardPool
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.FundRewardPool
 */
export const fundRewardPool = buildTx<MsgFundRewardPool>({
  msg: MsgFundRewardPool
});
/**
 * UpdateParams defined a governance operation for updating the x/reward
 * module parameters. The authority is hard-coded to the Cosmos SDK x/gov
 * module account
 * @name updateParams
 * @package xpla.reward.v1beta1
 * @see proto service: xpla.reward.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});