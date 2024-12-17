import { SigningClientResolver } from "../../../helper-func-types";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export declare const createGrant: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgGrant, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createExec: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgExec, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createRevoke: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgRevoke, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
