import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgRegisterCounterparty, MsgRegisterCounterpartyResponse, MsgUpdateClientConfig, MsgUpdateClientConfigResponse } from "./tx";
/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
  /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  registerCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
  /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  updateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  registerCounterparty = async (request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse> => {
    const data = MsgRegisterCounterparty.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "RegisterCounterparty", data);
    return promise.then(data => MsgRegisterCounterpartyResponse.decode(new BinaryReader(data)));
  };
  /* UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  updateClientConfig = async (request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse> => {
    const data = MsgUpdateClientConfig.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "UpdateClientConfig", data);
    return promise.then(data => MsgUpdateClientConfigResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};