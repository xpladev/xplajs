import { SigningClientResolver } from "../../../helper-func-types";
import { MsgFundRewardPool, MsgUpdateParams } from "./tx";
export declare const createFundRewardPool: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgFundRewardPool, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
export declare const createUpdateParams: (clientResolver?: SigningClientResolver) => (signerAddress: string, message: MsgUpdateParams, fee: import("../../../helper-func-types").StdFee | "auto", memo: string) => Promise<import("../../../helper-func-types").DeliverTxResponse>;
