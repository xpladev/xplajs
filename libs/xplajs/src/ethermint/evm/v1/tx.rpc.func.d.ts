import { SigningClientResolver } from "../../../helper-func-types";
import { MsgEthereumTx, MsgUpdateParams } from "./tx";
export declare const createEthereumTx: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgEthereumTx, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateParams: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateParams, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
