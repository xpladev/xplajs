import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** PublicKey defines the keys available for use with Validators */
export interface PublicKey {
    ed25519?: Uint8Array;
    secp256k1?: Uint8Array;
}
export declare const PublicKey: {
    typeUrl: string;
    encode(message: PublicKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PublicKey;
    fromPartial(object: DeepPartial<PublicKey>): PublicKey;
};
