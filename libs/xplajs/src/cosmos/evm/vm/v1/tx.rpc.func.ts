import { buildTx } from "../../../../helper-func-types";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
/**
 * EthereumTx defines a method submitting Ethereum transactions.
 * @name ethereumTx
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.EthereumTx
 */
export const ethereumTx = buildTx<MsgEthereumTx>({
  msg: MsgEthereumTx
});
/**
 * UpdateParams defined a governance operation for updating the x/vm module
 * parameters. The authority is hard-coded to the Cosmos SDK x/gov module
 * account
 * @name updateParams
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});