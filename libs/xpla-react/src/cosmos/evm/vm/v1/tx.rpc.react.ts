import { buildUseMutation } from "../../../../react-query";
import { MsgEthereumTx, MsgUpdateParams, MsgRegisterPreinstalls } from "./tx";
import { ethereumTx, updateParams, registerPreinstalls } from "./tx.rpc.func";
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
/**
 * RegisterPreinstalls defines a governance operation for directly registering
 * preinstalled contracts in the EVM. The authority is the same as is used for
 * Params updates.
 * @name useRegisterPreinstalls
 * @package cosmos.evm.vm.v1
 * @see proto service: cosmos.evm.vm.v1.RegisterPreinstalls
 */
export const useRegisterPreinstalls = buildUseMutation<MsgRegisterPreinstalls, Error>({
  builderMutationFn: registerPreinstalls
});