import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
    value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorizationAmino {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
export interface GenericAuthorizationAminoMsg {
    type: "cosmos-sdk/GenericAuthorization";
    value: GenericAuthorizationAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: GenericAuthorization | Any | undefined;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: Date;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.Grant";
    value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface GrantAmino {
    authorization?: AnyAmino;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: string;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: GenericAuthorization | Any | undefined;
    expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
    authorization?: GenericAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorizationAmino {
    granter: string;
    grantee: string;
    authorization?: AnyAmino;
    expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
    value: Uint8Array;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItemAmino {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msg_type_urls: string[];
}
export interface GrantQueueItemAminoMsg {
    type: "cosmos-sdk/GrantQueueItem";
    value: GrantQueueItemAmino;
}
export declare const GenericAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenericAuthorization;
    isAmino(o: any): o is GenericAuthorizationAmino;
    encode(message: GenericAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization;
    fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization;
    fromAmino(object: GenericAuthorizationAmino): GenericAuthorization;
    toAmino(message: GenericAuthorization): GenericAuthorizationAmino;
    fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization;
    toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg;
    fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization;
    toProto(message: GenericAuthorization): Uint8Array;
    toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Grant;
    isAmino(o: any): o is GrantAmino;
    encode(message: Grant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Grant;
    fromPartial(object: DeepPartial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const GrantAuthorization: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GrantAuthorization;
    isAmino(o: any): o is GrantAuthorizationAmino;
    encode(message: GrantAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization;
    fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
export declare const GrantQueueItem: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GrantQueueItem;
    isAmino(o: any): o is GrantQueueItemAmino;
    encode(message: GrantQueueItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem;
    fromPartial(object: DeepPartial<GrantQueueItem>): GrantQueueItem;
    fromAmino(object: GrantQueueItemAmino): GrantQueueItem;
    toAmino(message: GrantQueueItem): GrantQueueItemAmino;
    fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem;
    toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg;
    fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem;
    toProto(message: GrantQueueItem): Uint8Array;
    toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg;
};
