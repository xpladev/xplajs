import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/xpla.dynamicdeflation.v1beta1.MsgUpdateParams": {
    aminoType: "xpladev/x/dynamicdeflation/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};