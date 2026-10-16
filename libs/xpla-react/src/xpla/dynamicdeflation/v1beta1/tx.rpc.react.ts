import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/**
 * UpdateParams atomically replaces all module parameters.
 * @name useUpdateParams
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto service: xpla.dynamicdeflation.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});