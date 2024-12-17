import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export const createEthereumTx = (clientResolver?: SigningClientResolver) => buildTx<MsgEthereumTx>({
  clientResolver,
  typeUrl: MsgEthereumTx.typeUrl,
  encoders: toEncoders(MsgEthereumTx),
  converters: toConverters(MsgEthereumTx)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});