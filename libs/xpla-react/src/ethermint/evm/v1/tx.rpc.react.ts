import { buildUseMutation } from "../../../react-query";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
import { ethereumTx, updateParams } from "./tx.rpc.func";
/**
 * EthereumTx defines a method submitting Ethereum transactions.
 * @name useEthereumTx
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.EthereumTx
 */
export const useEthereumTx = buildUseMutation<MsgEthereumTx, Error>({
  builderMutationFn: ethereumTx
});
/**
 * UpdateParams defined a governance operation for updating the x/evm module parameters.
 * The authority is hard-coded to the Cosmos SDK x/gov module account
 * @name useUpdateParams
 * @package ethermint.evm.v1
 * @see proto service: ethermint.evm.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});