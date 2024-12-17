import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    value: Uint8Array;
}
export type MsgGrantAllowanceEncoded = Omit<MsgGrantAllowance, "allowance"> & {
    /** allowance can be any of basic, periodic, allowed fee allowance. */ allowance?: AnyProtoMsg | undefined;
};
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: MsgGrantAllowanceAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
export interface MsgGrantAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
    value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {
}
export interface MsgGrantAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowanceResponse";
    value: MsgGrantAllowanceResponseAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
export interface MsgRevokeAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
    value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {
}
export interface MsgRevokeAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowanceResponse";
    value: MsgRevokeAllowanceResponseAmino;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
export interface MsgPruneAllowancesProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances";
    value: Uint8Array;
}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesAmino {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
export interface MsgPruneAllowancesAminoMsg {
    type: "cosmos-sdk/MsgPruneAllowances";
    value: MsgPruneAllowancesAmino;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {
}
export interface MsgPruneAllowancesResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse";
    value: Uint8Array;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponseAmino {
}
export interface MsgPruneAllowancesResponseAminoMsg {
    type: "cosmos-sdk/MsgPruneAllowancesResponse";
    value: MsgPruneAllowancesResponseAmino;
}
export declare const MsgGrantAllowance: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrantAllowance;
    isAmino(o: any): o is MsgGrantAllowanceAmino;
    encode(message: MsgGrantAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance;
    fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance;
    fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance;
    toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino;
    fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance;
    toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance;
    toProto(message: MsgGrantAllowance): Uint8Array;
    toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg;
};
export declare const MsgGrantAllowanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrantAllowanceResponse;
    isAmino(o: any): o is MsgGrantAllowanceResponseAmino;
    encode(_: MsgGrantAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse;
    toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino;
    fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse;
    toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse;
    toProto(message: MsgGrantAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg;
};
export declare const MsgRevokeAllowance: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevokeAllowance;
    isAmino(o: any): o is MsgRevokeAllowanceAmino;
    encode(message: MsgRevokeAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance;
    toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino;
    fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance;
    toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance;
    toProto(message: MsgRevokeAllowance): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg;
};
export declare const MsgRevokeAllowanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevokeAllowanceResponse;
    isAmino(o: any): o is MsgRevokeAllowanceResponseAmino;
    encode(_: MsgRevokeAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse;
    toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino;
    fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse;
    toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse;
    toProto(message: MsgRevokeAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg;
};
export declare const MsgPruneAllowances: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgPruneAllowances;
    isAmino(o: any): o is MsgPruneAllowancesAmino;
    encode(message: MsgPruneAllowances, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowances;
    fromPartial(object: DeepPartial<MsgPruneAllowances>): MsgPruneAllowances;
    fromAmino(object: MsgPruneAllowancesAmino): MsgPruneAllowances;
    toAmino(message: MsgPruneAllowances): MsgPruneAllowancesAmino;
    fromAminoMsg(object: MsgPruneAllowancesAminoMsg): MsgPruneAllowances;
    toAminoMsg(message: MsgPruneAllowances): MsgPruneAllowancesAminoMsg;
    fromProtoMsg(message: MsgPruneAllowancesProtoMsg): MsgPruneAllowances;
    toProto(message: MsgPruneAllowances): Uint8Array;
    toProtoMsg(message: MsgPruneAllowances): MsgPruneAllowancesProtoMsg;
};
export declare const MsgPruneAllowancesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgPruneAllowancesResponse;
    isAmino(o: any): o is MsgPruneAllowancesResponseAmino;
    encode(_: MsgPruneAllowancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowancesResponse;
    fromPartial(_: DeepPartial<MsgPruneAllowancesResponse>): MsgPruneAllowancesResponse;
    fromAmino(_: MsgPruneAllowancesResponseAmino): MsgPruneAllowancesResponse;
    toAmino(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAmino;
    fromAminoMsg(object: MsgPruneAllowancesResponseAminoMsg): MsgPruneAllowancesResponse;
    toAminoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAminoMsg;
    fromProtoMsg(message: MsgPruneAllowancesResponseProtoMsg): MsgPruneAllowancesResponse;
    toProto(message: MsgPruneAllowancesResponse): Uint8Array;
    toProtoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseProtoMsg;
};
