import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgFundRewardPool, MsgFundRewardPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the reawrd Msg service. */
export interface Msg {
  /**
   * MsgFundRewardPool defines a method to allow an account to directly
   * fund the reward pool.
   */
  FundRewardPool(request: MsgFundRewardPool): Promise<MsgFundRewardPoolResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/reward
   * module parameters. The authority is hard-coded to the Cosmos SDK x/gov
   * module account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* MsgFundRewardPool defines a method to allow an account to directly
   fund the reward pool. */
  FundRewardPool = async (request: MsgFundRewardPool): Promise<MsgFundRewardPoolResponse> => {
    const data = MsgFundRewardPool.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Msg", "FundRewardPool", data);
    return promise.then(data => MsgFundRewardPoolResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defined a governance operation for updating the x/reward
   module parameters. The authority is hard-coded to the Cosmos SDK x/gov
   module account */
  UpdateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("xpla.reward.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};