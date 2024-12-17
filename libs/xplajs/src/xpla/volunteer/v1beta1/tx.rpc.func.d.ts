import { SigningClientResolver } from "../../../helper-func-types";
import { MsgRegisterVolunteerValidator, MsgUnregisterVolunteerValidator } from "./tx";
export declare const createRegisterVolunteerValidator: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgRegisterVolunteerValidator, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createUnregisterVolunteerValidator: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUnregisterVolunteerValidator, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
