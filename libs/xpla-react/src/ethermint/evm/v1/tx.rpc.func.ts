import { buildTx } from "../../../helper-func-types";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
/**
 * EthereumTx defines a method submitting Ethereum transactions.
 * @name ethereumTx
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.EthereumTx
 */
export const ethereumTx = buildTx<MsgEthereumTx>({
  msg: MsgEthereumTx
});
/**
 * UpdateParams defined a governance operation for updating the x/evm module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 * @name updateParams
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});