import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/**
 * UpdateParams atomically replaces all module parameters.
 * @name updateParams
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});