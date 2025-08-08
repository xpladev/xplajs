import { buildUseMutation } from "../../../../react-query";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
import { ethereumTx, updateParams } from "./tx.rpc.func";
/**
 * EthereumTx defines a method submitting Ethereum transactions.
 * @name useEthereumTx
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.EthereumTx
 */
export const useEthereumTx = buildUseMutation<MsgEthereumTx, Error>({
  builderMutationFn: ethereumTx
});
/**
 * UpdateParams defined a governance operation for updating the x/vm module
 * parameters. The authority is hard-coded to the Cosmos SDK x/gov module
 * account
 * @name useUpdateParams
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});