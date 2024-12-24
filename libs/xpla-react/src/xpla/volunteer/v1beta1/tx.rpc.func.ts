import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
export const createRegisterVolunteerValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgRegisterVolunteerValidator>({
  clientResolver,
  typeUrl: MsgRegisterVolunteerValidator.typeUrl,
  encoders: toEncoders(MsgRegisterVolunteerValidator),
  converters: toConverters(MsgRegisterVolunteerValidator)
});
export const useRegisterVolunteerValidator = buildUseMutation<MsgRegisterVolunteerValidator, Error>({
  builderMutationFn: createRegisterVolunteerValidator
});
export const createUnregisterVolunteerValidator = (clientResolver?: SigningClientResolver) => buildTx<MsgUnregisterVolunteerValidator>({
  clientResolver,
  typeUrl: MsgUnregisterVolunteerValidator.typeUrl,
  encoders: toEncoders(MsgUnregisterVolunteerValidator),
  converters: toConverters(MsgUnregisterVolunteerValidator)
});
export const useUnregisterVolunteerValidator = buildUseMutation<MsgUnregisterVolunteerValidator, Error>({
  builderMutationFn: createUnregisterVolunteerValidator
});