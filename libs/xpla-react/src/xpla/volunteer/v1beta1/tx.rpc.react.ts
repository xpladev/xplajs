import { buildUseMutation } from "../../../react-query";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
import { createRegisterVolunteerValidator, createUnregisterVolunteerValidator } from "./tx.rpc.func";
export const useRegisterVolunteerValidator = buildUseMutation<MsgRegisterVolunteerValidator, Error>({
  builderMutationFn: createRegisterVolunteerValidator
});
export const useUnregisterVolunteerValidator = buildUseMutation<MsgUnregisterVolunteerValidator, Error>({
  builderMutationFn: createUnregisterVolunteerValidator
});