import { MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/ethermint.feemarket.v1.MsgUpdateParams": {
    aminoType: "ethermint/x/feemarket/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};