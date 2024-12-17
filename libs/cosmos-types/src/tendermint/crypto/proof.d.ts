import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Proof {
    total: bigint;
    index: bigint;
    leafHash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const Proof: {
    typeUrl: string;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proof;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
export declare const ValueOp: {
    typeUrl: string;
    encode(message: ValueOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValueOp;
    fromPartial(object: DeepPartial<ValueOp>): ValueOp;
};
export declare const DominoOp: {
    typeUrl: string;
    encode(message: DominoOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DominoOp;
    fromPartial(object: DeepPartial<DominoOp>): DominoOp;
};
export declare const ProofOp: {
    typeUrl: string;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromPartial(object: DeepPartial<ProofOp>): ProofOp;
};
export declare const ProofOps: {
    typeUrl: string;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromPartial(object: DeepPartial<ProofOps>): ProofOps;
};
