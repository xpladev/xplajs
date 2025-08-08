import { buildUseMutation } from "../../../../react-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/**
 * UpdateParams defined a governance operation for updating the x/feemarket
 * module parameters. The authority is hard-coded to the Cosmos SDK x/gov
 * module account
 * @name useUpdateParams
 * @package cosmos.evm.feemarket.v1
 * @see proto service: cosmos.evm.feemarket.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});