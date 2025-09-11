import { TelescopeGeneratedType } from "../../../types";
import { MsgBurn } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/xpla.burn.v1beta1.MsgBurn", MsgBurn]];
export const MessageComposer = {
  encoded: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/xpla.burn.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/xpla.burn.v1beta1.MsgBurn",
        value
      };
    }
  },
  fromPartial: {
    burn(value: MsgBurn) {
      return {
        typeUrl: "/xpla.burn.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    }
  }
};