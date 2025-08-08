import { buildUseMutation } from "../../../react-query";
import { MsgBurn } from "./tx";
import { burn } from "./tx.rpc.func";
/**
 * Burn defines a method for burning coins from an account.
 * @name useBurn
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.Burn
 */
export const useBurn = buildUseMutation<MsgBurn, Error>({
  builderMutationFn: burn
});