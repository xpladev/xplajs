import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
export const createFundRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundRewardPool>({
  clientResolver,
  typeUrl: MsgFundRewardPool.typeUrl,
  encoders: toEncoders(MsgFundRewardPool),
  converters: toConverters(MsgFundRewardPool)
});
export const useFundRewardPool = buildUseMutation<MsgFundRewardPool, Error>({
  builderMutationFn: createFundRewardPool
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});