import { buildUseMutation } from "../../../react-query";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
import { createFundRewardPool, createUpdateParams } from "./tx.rpc.func";
export const useFundRewardPool = buildUseMutation<MsgFundRewardPool, Error>({
  builderMutationFn: createFundRewardPool
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});