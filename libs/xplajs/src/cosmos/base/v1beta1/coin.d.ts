import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
export interface CoinProtoMsg {
    typeUrl: "/cosmos.base.v1beta1.Coin";
    value: Uint8Array;
}
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CoinAmino {
    denom: string;
    amount: string;
}
export interface CoinAminoMsg {
    type: "cosmos-sdk/Coin";
    value: CoinAmino;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
    denom: string;
    amount: string;
}
export interface DecCoinProtoMsg {
    typeUrl: "/cosmos.base.v1beta1.DecCoin";
    value: Uint8Array;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoinAmino {
    denom: string;
    amount: string;
}
export interface DecCoinAminoMsg {
    type: "cosmos-sdk/DecCoin";
    value: DecCoinAmino;
}
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 * Deprecated: Prefer to use math.Int directly. It supports binary Marshal and Unmarshal.
 */
export interface IntProto {
    int: string;
}
export interface IntProtoProtoMsg {
    typeUrl: "/cosmos.base.v1beta1.IntProto";
    value: Uint8Array;
}
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 * Deprecated: Prefer to use math.Int directly. It supports binary Marshal and Unmarshal.
 */
export interface IntProtoAmino {
    int: string;
}
export interface IntProtoAminoMsg {
    type: "cosmos-sdk/IntProto";
    value: IntProtoAmino;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 * Deprecated: Prefer to use math.LegacyDec directly. It supports binary Marshal and Unmarshal.
 */
export interface DecProto {
    dec: string;
}
export interface DecProtoProtoMsg {
    typeUrl: "/cosmos.base.v1beta1.DecProto";
    value: Uint8Array;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 * Deprecated: Prefer to use math.LegacyDec directly. It supports binary Marshal and Unmarshal.
 */
export interface DecProtoAmino {
    dec: string;
}
export interface DecProtoAminoMsg {
    type: "cosmos-sdk/DecProto";
    value: DecProtoAmino;
}
export declare const Coin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Coin;
    isAmino(o: any): o is CoinAmino;
    encode(message: Coin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
    fromAmino(object: CoinAmino): Coin;
    toAmino(message: Coin): CoinAmino;
    fromAminoMsg(object: CoinAminoMsg): Coin;
    toAminoMsg(message: Coin): CoinAminoMsg;
    fromProtoMsg(message: CoinProtoMsg): Coin;
    toProto(message: Coin): Uint8Array;
    toProtoMsg(message: Coin): CoinProtoMsg;
};
export declare const DecCoin: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DecCoin;
    isAmino(o: any): o is DecCoinAmino;
    encode(message: DecCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecCoin;
    fromPartial(object: DeepPartial<DecCoin>): DecCoin;
    fromAmino(object: DecCoinAmino): DecCoin;
    toAmino(message: DecCoin): DecCoinAmino;
    fromAminoMsg(object: DecCoinAminoMsg): DecCoin;
    toAminoMsg(message: DecCoin): DecCoinAminoMsg;
    fromProtoMsg(message: DecCoinProtoMsg): DecCoin;
    toProto(message: DecCoin): Uint8Array;
    toProtoMsg(message: DecCoin): DecCoinProtoMsg;
};
export declare const IntProto: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is IntProto;
    isAmino(o: any): o is IntProtoAmino;
    encode(message: IntProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IntProto;
    fromPartial(object: DeepPartial<IntProto>): IntProto;
    fromAmino(object: IntProtoAmino): IntProto;
    toAmino(message: IntProto): IntProtoAmino;
    fromAminoMsg(object: IntProtoAminoMsg): IntProto;
    toAminoMsg(message: IntProto): IntProtoAminoMsg;
    fromProtoMsg(message: IntProtoProtoMsg): IntProto;
    toProto(message: IntProto): Uint8Array;
    toProtoMsg(message: IntProto): IntProtoProtoMsg;
};
export declare const DecProto: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DecProto;
    isAmino(o: any): o is DecProtoAmino;
    encode(message: DecProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecProto;
    fromPartial(object: DeepPartial<DecProto>): DecProto;
    fromAmino(object: DecProtoAmino): DecProto;
    toAmino(message: DecProto): DecProtoAmino;
    fromAminoMsg(object: DecProtoAminoMsg): DecProto;
    toAminoMsg(message: DecProto): DecProtoAminoMsg;
    fromProtoMsg(message: DecProtoProtoMsg): DecProto;
    toProto(message: DecProto): Uint8Array;
    toProtoMsg(message: DecProto): DecProtoProtoMsg;
};
