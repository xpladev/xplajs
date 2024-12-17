import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKey {
    /** key is the public key in byte form */
    key: Uint8Array;
}
export interface PubKeyProtoMsg {
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PubKey";
    value: Uint8Array;
}
/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 */
export interface PubKeyAmino {
    /** key is the public key in byte form */
    key: string;
}
export interface PubKeyAminoMsg {
    type: "/ethermint.crypto.v1.ethsecp256k1.PubKey";
    value: PubKeyAmino;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKey {
    /** key is the private key in byte form */
    key: Uint8Array;
}
export interface PrivKeyProtoMsg {
    typeUrl: "/ethermint.crypto.v1.ethsecp256k1.PrivKey";
    value: Uint8Array;
}
/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 */
export interface PrivKeyAmino {
    /** key is the private key in byte form */
    key: string;
}
export interface PrivKeyAminoMsg {
    type: "/ethermint.crypto.v1.ethsecp256k1.PrivKey";
    value: PrivKeyAmino;
}
export declare const PubKey: {
    typeUrl: string;
    is(o: any): o is PubKey;
    isAmino(o: any): o is PubKeyAmino;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromPartial(object: DeepPartial<PubKey>): PubKey;
    fromAmino(object: PubKeyAmino): PubKey;
    toAmino(message: PubKey): PubKeyAmino;
    fromAminoMsg(object: PubKeyAminoMsg): PubKey;
    fromProtoMsg(message: PubKeyProtoMsg): PubKey;
    toProto(message: PubKey): Uint8Array;
    toProtoMsg(message: PubKey): PubKeyProtoMsg;
};
export declare const PrivKey: {
    typeUrl: string;
    is(o: any): o is PrivKey;
    isAmino(o: any): o is PrivKeyAmino;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrivKey;
    fromPartial(object: DeepPartial<PrivKey>): PrivKey;
    fromAmino(object: PrivKeyAmino): PrivKey;
    toAmino(message: PrivKey): PrivKeyAmino;
    fromAminoMsg(object: PrivKeyAminoMsg): PrivKey;
    fromProtoMsg(message: PrivKeyProtoMsg): PrivKey;
    toProto(message: PrivKey): Uint8Array;
    toProtoMsg(message: PrivKey): PrivKeyProtoMsg;
};
