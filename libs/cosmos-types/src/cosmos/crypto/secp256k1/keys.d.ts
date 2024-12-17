import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
    key: Uint8Array;
}
/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
    key: Uint8Array;
}
export declare const PubKey: {
    typeUrl: string;
    aminoType: string;
    encode(message: PubKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PubKey;
    fromPartial(object: DeepPartial<PubKey>): PubKey;
};
export declare const PrivKey: {
    typeUrl: string;
    aminoType: string;
    encode(message: PrivKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrivKey;
    fromPartial(object: DeepPartial<PrivKey>): PrivKey;
};
