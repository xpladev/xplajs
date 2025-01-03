import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgEthereumTx, MsgEthereumTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the evm Msg service. */
export interface Msg {
  /** EthereumTx defines a method submitting Ethereum transactions. */
  ethereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
  /**
   * UpdateParams defined a governance operation for updating the x/evm module parameters.
   * The authority is hard-coded to the Cosmos SDK x/gov module account
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* EthereumTx defines a method submitting Ethereum transactions. */
  ethereumTx = async (request: MsgEthereumTx): Promise<MsgEthereumTxResponse> => {
    const data = MsgEthereumTx.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Msg", "EthereumTx", data);
    return promise.then(data => MsgEthereumTxResponse.decode(new BinaryReader(data)));
  };
  /* UpdateParams defined a governance operation for updating the x/evm module parameters.
   The authority is hard-coded to the Cosmos SDK x/gov module account */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ethermint.evm.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};