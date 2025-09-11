import { buildTx } from "../../../../helper-func-types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 * @name createClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.CreateClient
 */
export const createClient = buildTx<MsgCreateClient>({
  msg: MsgCreateClient
});
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 * @name updateClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClient
 */
export const updateClient = buildTx<MsgUpdateClient>({
  msg: MsgUpdateClient
});
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 * @name upgradeClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpgradeClient
 */
export const upgradeClient = buildTx<MsgUpgradeClient>({
  msg: MsgUpgradeClient
});
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 * @name submitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.SubmitMisbehaviour
 */
export const submitMisbehaviour = buildTx<MsgSubmitMisbehaviour>({
  msg: MsgSubmitMisbehaviour
});
/**
 * RecoverClient defines a rpc handler method for MsgRecoverClient.
 * @name recoverClient
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.RecoverClient
 */
export const recoverClient = buildTx<MsgRecoverClient>({
  msg: MsgRecoverClient
});
/**
 * IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade.
 * @name iBCSoftwareUpgrade
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.IBCSoftwareUpgrade
 */
export const iBCSoftwareUpgrade = buildTx<MsgIBCSoftwareUpgrade>({
  msg: MsgIBCSoftwareUpgrade
});
/**
 * UpdateClientParams defines a rpc handler method for MsgUpdateParams.
 * @name updateClientParams
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.UpdateClientParams
 */
export const updateClientParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * DeleteClientCreator defines a rpc handler method for MsgDeleteClientCreator.
 * @name deleteClientCreator
 * @package ibc.core.client.v1
 * @see proto service: ibc.core.client.v1.DeleteClientCreator
 */
export const deleteClientCreator = buildTx<MsgDeleteClientCreator>({
  msg: MsgDeleteClientCreator
});