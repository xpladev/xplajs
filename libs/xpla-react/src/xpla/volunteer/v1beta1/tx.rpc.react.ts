import { buildUseMutation } from "../../../react-query";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
import { registerVolunteerValidator, unregisterVolunteerValidator } from "./tx.rpc.func";
/**
 * RegisterVolunteerValidator defines a method to register a new volunteer
 * validator.
 * @name useRegisterVolunteerValidator
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.RegisterVolunteerValidator
 */
export const useRegisterVolunteerValidator = buildUseMutation<MsgRegisterVolunteerValidator, Error>({
  builderMutationFn: registerVolunteerValidator
});
/**
 * UnregisterVolunteerValidator defines a method to unregister a volunteer
 * @name useUnregisterVolunteerValidator
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.UnregisterVolunteerValidator
 */
export const useUnregisterVolunteerValidator = buildUseMutation<MsgUnregisterVolunteerValidator, Error>({
  builderMutationFn: unregisterVolunteerValidator
});