import { TelescopeGeneratedType } from "../../../../types";
import { MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.evm.feemarket.v1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.feemarket.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.feemarket.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.feemarket.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};