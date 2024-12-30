import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
export const AminoConverter = {
  "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator": {
    aminoType: "xpladev/MsgRegisterVolunteerValidator",
    toAmino: MsgRegisterVolunteerValidator.toAmino,
    fromAmino: MsgRegisterVolunteerValidator.fromAmino
  },
  "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator": {
    aminoType: "xpladev/MsgUnregisterVolunteerValidator",
    toAmino: MsgUnregisterVolunteerValidator.toAmino,
    fromAmino: MsgUnregisterVolunteerValidator.fromAmino
  }
};