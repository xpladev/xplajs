import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/**
 * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 * @name updateParams
 * @package ethermint.feemarket.v1
 * @see proto service: ethermint.feemarket.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});