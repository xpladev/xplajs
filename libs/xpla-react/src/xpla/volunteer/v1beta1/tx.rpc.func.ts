import { buildTx } from "../../../helper-func-types";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
/**
 * RegisterVolunteerValidator defines a method to register a new volunteer
 * validator.
 * @name registerVolunteerValidator
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.RegisterVolunteerValidator
 */
export const registerVolunteerValidator = buildTx<MsgRegisterVolunteerValidator>({
  msg: MsgRegisterVolunteerValidator
});
/**
 * UnregisterVolunteerValidator defines a method to unregister a volunteer
 * @name unregisterVolunteerValidator
 * @package xpla.volunteer.v1beta1
 * @see proto service: xpla.volunteer.v1beta1.UnregisterVolunteerValidator
 */
export const unregisterVolunteerValidator = buildTx<MsgUnregisterVolunteerValidator>({
  msg: MsgUnregisterVolunteerValidator
});