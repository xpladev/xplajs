import { TelescopeGeneratedType } from "../../../../types";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/cosmos.evm.vm.v1.MsgEthereumTx", MsgEthereumTx], ["/cosmos.evm.vm.v1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgEthereumTx",
        value: MsgEthereumTx.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgEthereumTx",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    ethereumTx(value: MsgEthereumTx) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgEthereumTx",
        value: MsgEthereumTx.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/cosmos.evm.vm.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};