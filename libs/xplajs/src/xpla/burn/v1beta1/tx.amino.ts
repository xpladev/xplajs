import { MsgBurn } from "./tx";
export const AminoConverter = {
  "/xpla.burn.v1beta1.MsgBurn": {
    aminoType: "xpladev/MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  }
};