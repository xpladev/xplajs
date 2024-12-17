import { BaseAccount, BaseAccountAmino } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EthAccount implements the sdk.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
    /** base_account is an authtypes.BaseAccount */
    baseAccount?: BaseAccount;
    /** code_hash is the hash calculated from the code contents */
    codeHash: string;
}
export interface EthAccountProtoMsg {
    typeUrl: "/ethermint.types.v1.EthAccount";
    value: Uint8Array;
}
/**
 * EthAccount implements the sdk.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
    /** base_account is an authtypes.BaseAccount */
    base_account?: BaseAccountAmino;
    /** code_hash is the hash calculated from the code contents */
    code_hash: string;
}
export interface EthAccountAminoMsg {
    type: "/ethermint.types.v1.EthAccount";
    value: EthAccountAmino;
}
export declare const EthAccount: {
    typeUrl: string;
    is(o: any): o is EthAccount;
    isAmino(o: any): o is EthAccountAmino;
    encode(message: EthAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthAccount;
    fromPartial(object: DeepPartial<EthAccount>): EthAccount;
    fromAmino(object: EthAccountAmino): EthAccount;
    toAmino(message: EthAccount): EthAccountAmino;
    fromAminoMsg(object: EthAccountAminoMsg): EthAccount;
    fromProtoMsg(message: EthAccountProtoMsg): EthAccount;
    toProto(message: EthAccount): Uint8Array;
    toProtoMsg(message: EthAccount): EthAccountProtoMsg;
};
