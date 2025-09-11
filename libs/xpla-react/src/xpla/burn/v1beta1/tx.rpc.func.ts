import { buildTx } from "../../../helper-func-types";
import { MsgBurn } from "./tx";
/**
 * Burn defines a method for burning coins from an account.
 * @name burn
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.Burn
 */
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn
});