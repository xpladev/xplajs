import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgBurn, MsgBurnResponse } from "./tx";
/** Msg defines the burn service. */
export interface Msg {
  /** Burn defines a method for burning coins from an account. */
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Burn defines a method for burning coins from an account. */
  burn = async (request: MsgBurn): Promise<MsgBurnResponse> => {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("xpla.burn.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};