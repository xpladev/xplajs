import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterVolunteerValidator, MsgRegisterVolunteerValidatorResponse, MsgUnregisterVolunteerValidator, MsgUnregisterVolunteerValidatorResponse } from "./tx";
/** Msg defines the volunteer Msg service. */
export interface Msg {
  /**
   * RegisterVolunteerValidator defines a method to register a new volunteer
   * validator.
   */
  RegisterVolunteerValidator(request: MsgRegisterVolunteerValidator): Promise<MsgRegisterVolunteerValidatorResponse>;
  /** UnregisterVolunteerValidator defines a method to unregister a volunteer */
  UnregisterVolunteerValidator(request: MsgUnregisterVolunteerValidator): Promise<MsgUnregisterVolunteerValidatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* RegisterVolunteerValidator defines a method to register a new volunteer
   validator. */
  RegisterVolunteerValidator = async (request: MsgRegisterVolunteerValidator): Promise<MsgRegisterVolunteerValidatorResponse> => {
    const data = MsgRegisterVolunteerValidator.encode(request).finish();
    const promise = this.rpc.request("xpla.volunteer.v1beta1.Msg", "RegisterVolunteerValidator", data);
    return promise.then(data => MsgRegisterVolunteerValidatorResponse.decode(new BinaryReader(data)));
  };
  /* UnregisterVolunteerValidator defines a method to unregister a volunteer */
  UnregisterVolunteerValidator = async (request: MsgUnregisterVolunteerValidator): Promise<MsgUnregisterVolunteerValidatorResponse> => {
    const data = MsgUnregisterVolunteerValidator.encode(request).finish();
    const promise = this.rpc.request("xpla.volunteer.v1beta1.Msg", "UnregisterVolunteerValidator", data);
    return promise.then(data => MsgUnregisterVolunteerValidatorResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};