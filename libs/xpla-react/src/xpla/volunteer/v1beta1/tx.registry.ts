import { TelescopeGeneratedType } from "../../../types";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator", MsgRegisterVolunteerValidator], ["/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator", MsgUnregisterVolunteerValidator]];
export const MessageComposer = {
  encoded: {
    registerVolunteerValidator(value: MsgRegisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
        value: MsgRegisterVolunteerValidator.encode(value).finish()
      };
    },
    unregisterVolunteerValidator(value: MsgUnregisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
        value: MsgUnregisterVolunteerValidator.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerVolunteerValidator(value: MsgRegisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
        value
      };
    },
    unregisterVolunteerValidator(value: MsgUnregisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
        value
      };
    }
  },
  fromPartial: {
    registerVolunteerValidator(value: MsgRegisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator",
        value: MsgRegisterVolunteerValidator.fromPartial(value)
      };
    },
    unregisterVolunteerValidator(value: MsgUnregisterVolunteerValidator) {
      return {
        typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator",
        value: MsgUnregisterVolunteerValidator.fromPartial(value)
      };
    }
  }
};