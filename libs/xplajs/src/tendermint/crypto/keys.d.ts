import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** PublicKey defines the keys available for use with Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export interface PublicKeyProtoMsg {
    typeUrl: "/tendermint.crypto.PublicKey";
    value: Uint8Array;
}
/** PublicKey defines the keys available for use with Validators */
export interface PublicKeyAmino {
    ed25519?: string;
    secp256k1?: string;
}
export interface PublicKeyAminoMsg {
    type: "/tendermint.crypto.PublicKey";
    value: PublicKeyAmino;
}
export declare const PublicKey: {
    typeUrl: string;
    is(o: any): o is PublicKey;
    isAmino(o: any): o is PublicKeyAmino;
    encode(message: PublicKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PublicKey;
    fromPartial(object: DeepPartial<PublicKey>): PublicKey;
    fromAmino(object: PublicKeyAmino): PublicKey;
    toAmino(message: PublicKey): PublicKeyAmino;
    fromAminoMsg(object: PublicKeyAminoMsg): PublicKey;
    fromProtoMsg(message: PublicKeyProtoMsg): PublicKey;
    toProto(message: PublicKey): Uint8Array;
    toProtoMsg(message: PublicKey): PublicKeyProtoMsg;
};
