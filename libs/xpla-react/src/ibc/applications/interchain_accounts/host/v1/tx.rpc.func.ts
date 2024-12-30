import { buildTx, SigningClientResolver } from "../../../../../helper-func-types";
import { buildUseMutation } from "../../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx";
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createModuleQuerySafe = (clientResolver?: SigningClientResolver) => buildTx<MsgModuleQuerySafe>({
  clientResolver,
  typeUrl: MsgModuleQuerySafe.typeUrl,
  encoders: toEncoders(MsgModuleQuerySafe),
  converters: toConverters(MsgModuleQuerySafe)
});
export const useModuleQuerySafe = buildUseMutation<MsgModuleQuerySafe, Error>({
  builderMutationFn: createModuleQuerySafe
});