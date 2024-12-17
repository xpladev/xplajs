import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
export const createFundRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundRewardPool>({
  clientResolver,
  typeUrl: MsgFundRewardPool.typeUrl,
  encoders: toEncoders(MsgFundRewardPool),
  converters: toConverters(MsgFundRewardPool)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});