import { SigningClientResolver } from "../../../helper-func-types";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export declare const createGrantAllowance: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgGrantAllowance, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createRevokeAllowance: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgRevokeAllowance, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createPruneAllowances: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgPruneAllowances, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
