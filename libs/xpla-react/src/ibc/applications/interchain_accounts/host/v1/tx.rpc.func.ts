import { buildTx } from "../../../../../helper-func-types";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
/**
 * UpdateParams defines a rpc handler for MsgUpdateParams.
 * @name updateParams
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto service: ibc.applications.interchain_accounts.host.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * ModuleQuerySafe defines a rpc handler for MsgModuleQuerySafe.
 * @name moduleQuerySafe
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto service: ibc.applications.interchain_accounts.host.v1.ModuleQuerySafe
 */
export const moduleQuerySafe = buildTx<MsgModuleQuerySafe>({
  msg: MsgModuleQuerySafe
});