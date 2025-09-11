import { buildTx } from "../../../helper-func-types";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate, MsgCancelUnbondingDelegation, MsgUpdateParams } from "./tx";
/**
 * CreateValidator defines a method for creating a new validator.
 * @name createValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.CreateValidator
 */
export const createValidator = buildTx<MsgCreateValidator>({
  msg: MsgCreateValidator
});
/**
 * EditValidator defines a method for editing an existing validator.
 * @name editValidator
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.EditValidator
 */
export const editValidator = buildTx<MsgEditValidator>({
  msg: MsgEditValidator
});
/**
 * Delegate defines a method for performing a delegation of coins
 * from a delegator to a validator.
 * @name delegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Delegate
 */
export const delegate = buildTx<MsgDelegate>({
  msg: MsgDelegate
});
/**
 * BeginRedelegate defines a method for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 * @name beginRedelegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.BeginRedelegate
 */
export const beginRedelegate = buildTx<MsgBeginRedelegate>({
  msg: MsgBeginRedelegate
});
/**
 * Undelegate defines a method for performing an undelegation from a
 * delegate and a validator.
 * @name undelegate
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.Undelegate
 */
export const undelegate = buildTx<MsgUndelegate>({
  msg: MsgUndelegate
});
/**
 * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
 * and delegate back to previous validator.
 * 
 * Since: cosmos-sdk 0.46
 * @name cancelUnbondingDelegation
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.CancelUnbondingDelegation
 */
export const cancelUnbondingDelegation = buildTx<MsgCancelUnbondingDelegation>({
  msg: MsgCancelUnbondingDelegation
});
/**
 * UpdateParams defines an operation for updating the x/staking module
 * parameters.
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package cosmos.staking.v1beta1
 * @see proto service: cosmos.staking.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});