import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/xpla.reward.v1beta1.MsgFundRewardPool": {
    aminoType: "xpladev/MsgFundRewardPool",
    toAmino: MsgFundRewardPool.toAmino,
    fromAmino: MsgFundRewardPool.fromAmino
  },
  "/xpla.reward.v1beta1.MsgUpdateParams": {
    aminoType: "xpladev/x/reward/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};