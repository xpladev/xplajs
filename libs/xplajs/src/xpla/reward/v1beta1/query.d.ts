import { Params, ParamsAmino } from "./reward";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/xpla.reward.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/xpla.reward.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryPoolRequest is the request type for the Query/Pool RPC
 * method.
 */
export interface QueryPoolRequest {
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/**
 * QueryPoolRequest is the request type for the Query/Pool RPC
 * method.
 */
export interface QueryPoolRequestAmino {
}
export interface QueryPoolRequestAminoMsg {
    type: "/xpla.reward.v1beta1.QueryPoolRequest";
    value: QueryPoolRequestAmino;
}
/**
 * QueryPoolResponse is the response type for the Query/Pool
 * RPC method.
 */
export interface QueryPoolResponse {
    /** pool defines reward pool's coins. */
    pool: Coin[];
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
/**
 * QueryPoolResponse is the response type for the Query/Pool
 * RPC method.
 */
export interface QueryPoolResponseAmino {
    /** pool defines reward pool's coins. */
    pool: CoinAmino[];
}
export interface QueryPoolResponseAminoMsg {
    type: "/xpla.reward.v1beta1.QueryPoolResponse";
    value: QueryPoolResponseAmino;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    is(o: any): o is QueryPoolRequest;
    isAmino(o: any): o is QueryPoolRequestAmino;
    encode(_: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(_: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    is(o: any): o is QueryPoolResponse;
    isAmino(o: any): o is QueryPoolResponseAmino;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
