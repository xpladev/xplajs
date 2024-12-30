import { TelescopeGeneratedType } from "../../../types";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/xpla.reward.v1beta1.MsgFundRewardPool", MsgFundRewardPool], ["/xpla.reward.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
        value: MsgFundRewardPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    fundRewardPool(value: MsgFundRewardPool) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool",
        value: MsgFundRewardPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};