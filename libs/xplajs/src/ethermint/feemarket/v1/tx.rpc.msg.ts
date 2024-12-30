import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the feemarket Msg service. */
export interface Msg {
  /**
   * UpdateParams defined a governance operation for updating the x/feemarket module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defined a governance operation for updating the x/feemarket module parameters.
   The authority is hard-coded to the Cosmos SDK x/gov module account */
  UpdateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ethermint.feemarket.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};