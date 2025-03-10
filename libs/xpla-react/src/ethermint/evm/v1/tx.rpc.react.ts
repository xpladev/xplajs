import { buildUseMutation } from "../../../react-query";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
import { createEthereumTx, createUpdateParams } from "./tx.rpc.func";
export const useEthereumTx = buildUseMutation<MsgEthereumTx, Error>({
  builderMutationFn: createEthereumTx
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});