import { SigningClientResolver } from "../../../../helper-func-types";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export declare const createTransfer: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgTransfer, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateParams: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateParams, fee: import("../../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../../helper-func-types").DeliverTxResponse>;
