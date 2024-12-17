import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Period, PeriodAmino } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    /** end of vesting as unix time (in seconds). */
    endTime: bigint;
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address: string;
    to_address: string;
    amount: CoinAmino[];
    /** end of vesting as unix time (in seconds). */
    end_time: string;
    delayed: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
export interface MsgCreatePermanentLockedAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
    value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountAmino {
    from_address: string;
    to_address: string;
    amount: CoinAmino[];
}
export interface MsgCreatePermanentLockedAccountAminoMsg {
    type: "cosmos-sdk/MsgCreatePermLockedAccount";
    value: MsgCreatePermanentLockedAccountAmino;
}
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponse {
}
export interface MsgCreatePermanentLockedAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponseAmino {
}
export interface MsgCreatePermanentLockedAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse";
    value: MsgCreatePermanentLockedAccountResponseAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccount {
    fromAddress: string;
    toAddress: string;
    /** start of vesting as unix time (in seconds). */
    startTime: bigint;
    vestingPeriods: Period[];
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountAmino {
    from_address: string;
    to_address: string;
    /** start of vesting as unix time (in seconds). */
    start_time: string;
    vesting_periods: PeriodAmino[];
}
export interface MsgCreatePeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodVestAccount";
    value: MsgCreatePeriodicVestingAccountAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponseAmino {
}
export interface MsgCreatePeriodicVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse";
    value: MsgCreatePeriodicVestingAccountResponseAmino;
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateVestingAccount;
    isAmino(o: any): o is MsgCreateVestingAccountAmino;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateVestingAccountResponse;
    isAmino(o: any): o is MsgCreateVestingAccountResponseAmino;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
export declare const MsgCreatePermanentLockedAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePermanentLockedAccount;
    isAmino(o: any): o is MsgCreatePermanentLockedAccountAmino;
    encode(message: MsgCreatePermanentLockedAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount;
    fromPartial(object: DeepPartial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount;
    fromAmino(object: MsgCreatePermanentLockedAccountAmino): MsgCreatePermanentLockedAccount;
    toAmino(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAmino;
    fromAminoMsg(object: MsgCreatePermanentLockedAccountAminoMsg): MsgCreatePermanentLockedAccount;
    toAminoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAminoMsg;
    fromProtoMsg(message: MsgCreatePermanentLockedAccountProtoMsg): MsgCreatePermanentLockedAccount;
    toProto(message: MsgCreatePermanentLockedAccount): Uint8Array;
    toProtoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountProtoMsg;
};
export declare const MsgCreatePermanentLockedAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePermanentLockedAccountResponse;
    isAmino(o: any): o is MsgCreatePermanentLockedAccountResponseAmino;
    encode(_: MsgCreatePermanentLockedAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse;
    fromPartial(_: DeepPartial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse;
    fromAmino(_: MsgCreatePermanentLockedAccountResponseAmino): MsgCreatePermanentLockedAccountResponse;
    toAmino(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAmino;
    fromAminoMsg(object: MsgCreatePermanentLockedAccountResponseAminoMsg): MsgCreatePermanentLockedAccountResponse;
    toAminoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePermanentLockedAccountResponseProtoMsg): MsgCreatePermanentLockedAccountResponse;
    toProto(message: MsgCreatePermanentLockedAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePeriodicVestingAccount;
    isAmino(o: any): o is MsgCreatePeriodicVestingAccountAmino;
    encode(message: MsgCreatePeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount;
    fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount;
    fromAmino(object: MsgCreatePeriodicVestingAccountAmino): MsgCreatePeriodicVestingAccount;
    toAmino(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountAminoMsg): MsgCreatePeriodicVestingAccount;
    toAminoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountProtoMsg): MsgCreatePeriodicVestingAccount;
    toProto(message: MsgCreatePeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountProtoMsg;
};
export declare const MsgCreatePeriodicVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreatePeriodicVestingAccountResponse;
    isAmino(o: any): o is MsgCreatePeriodicVestingAccountResponseAmino;
    encode(_: MsgCreatePeriodicVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse;
    fromPartial(_: DeepPartial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse;
    fromAmino(_: MsgCreatePeriodicVestingAccountResponseAmino): MsgCreatePeriodicVestingAccountResponse;
    toAmino(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreatePeriodicVestingAccountResponseAminoMsg): MsgCreatePeriodicVestingAccountResponse;
    toAminoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreatePeriodicVestingAccountResponseProtoMsg): MsgCreatePeriodicVestingAccountResponse;
    toProto(message: MsgCreatePeriodicVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseProtoMsg;
};
