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
/**
 * IntProto defines a Protobuf wrapper around an Int object.
 * Deprecated: Prefer to use math.Int directly. It supports binary Marshal and Unmarshal.
 */
export interface IntProto {
    int: string;
}
/**
 * DecProto defines a Protobuf wrapper around a Dec object.
 * Deprecated: Prefer to use math.LegacyDec directly. It supports binary Marshal and Unmarshal.
 */
export interface DecProto {
    dec: string;
}
export declare const Coin: {
    typeUrl: string;
    aminoType: string;
    encode(message: Coin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Coin;
    fromPartial(object: DeepPartial<Coin>): Coin;
};
export declare const DecCoin: {
    typeUrl: string;
    aminoType: string;
    encode(message: DecCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecCoin;
    fromPartial(object: DeepPartial<DecCoin>): DecCoin;
};
export declare const IntProto: {
    typeUrl: string;
    aminoType: string;
    encode(message: IntProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IntProto;
    fromPartial(object: DeepPartial<IntProto>): IntProto;
};
export declare const DecProto: {
    typeUrl: string;
    aminoType: string;
    encode(message: DecProto, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecProto;
    fromPartial(object: DeepPartial<DecProto>): DecProto;
};
