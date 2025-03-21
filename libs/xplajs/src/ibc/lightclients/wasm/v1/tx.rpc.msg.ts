import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgRemoveChecksum, MsgRemoveChecksumResponse, MsgMigrateContract, MsgMigrateContractResponse } from "./tx";
/** Msg defines the ibc/08-wasm Msg service. */
export interface Msg {
  /** StoreCode defines a rpc handler method for MsgStoreCode. */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
  removeChecksum(request: MsgRemoveChecksum): Promise<MsgRemoveChecksumResponse>;
  /** MigrateContract defines a rpc handler method for MsgMigrateContract. */
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode defines a rpc handler method for MsgStoreCode. */
  storeCode = async (request: MsgStoreCode): Promise<MsgStoreCodeResponse> => {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new BinaryReader(data)));
  };
  /* RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
  removeChecksum = async (request: MsgRemoveChecksum): Promise<MsgRemoveChecksumResponse> => {
    const data = MsgRemoveChecksum.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "RemoveChecksum", data);
    return promise.then(data => MsgRemoveChecksumResponse.decode(new BinaryReader(data)));
  };
  /* MigrateContract defines a rpc handler method for MsgMigrateContract. */
  migrateContract = async (request: MsgMigrateContract): Promise<MsgMigrateContractResponse> => {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};