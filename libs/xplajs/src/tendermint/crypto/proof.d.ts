import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Proof {
    total: bigint;
    index: bigint;
    leafHash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ProofProtoMsg {
    typeUrl: "/tendermint.crypto.Proof";
    value: Uint8Array;
}
export interface ProofAmino {
    total: string;
    index: string;
    leaf_hash: string;
    aunts: string[];
}
export interface ProofAminoMsg {
    type: "/tendermint.crypto.Proof";
    value: ProofAmino;
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof;
}
export interface ValueOpProtoMsg {
    typeUrl: "/tendermint.crypto.ValueOp";
    value: Uint8Array;
}
export interface ValueOpAmino {
    /** Encoded in ProofOp.Key. */
    key: string;
    /** To encode in ProofOp.Data */
    proof?: ProofAmino;
}
export interface ValueOpAminoMsg {
    type: "/tendermint.crypto.ValueOp";
    value: ValueOpAmino;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
export interface DominoOpProtoMsg {
    typeUrl: "/tendermint.crypto.DominoOp";
    value: Uint8Array;
}
export interface DominoOpAmino {
    key: string;
    input: string;
    output: string;
}
export interface DominoOpAminoMsg {
    type: "/tendermint.crypto.DominoOp";
    value: DominoOpAmino;
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
export interface ProofOpProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOp";
    value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpAmino {
    type: string;
    key: string;
    data: string;
}
export interface ProofOpAminoMsg {
    type: "/tendermint.crypto.ProofOp";
    value: ProofOpAmino;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
    typeUrl: "/tendermint.crypto.ProofOps";
    value: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsAmino {
    ops: ProofOpAmino[];
}
export interface ProofOpsAminoMsg {
    type: "/tendermint.crypto.ProofOps";
    value: ProofOpsAmino;
}
export declare const Proof: {
    typeUrl: string;
    is(o: any): o is Proof;
    isAmino(o: any): o is ProofAmino;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proof;
    fromPartial(object: DeepPartial<Proof>): Proof;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
export declare const ValueOp: {
    typeUrl: string;
    is(o: any): o is ValueOp;
    isAmino(o: any): o is ValueOpAmino;
    encode(message: ValueOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValueOp;
    fromPartial(object: DeepPartial<ValueOp>): ValueOp;
    fromAmino(object: ValueOpAmino): ValueOp;
    toAmino(message: ValueOp): ValueOpAmino;
    fromAminoMsg(object: ValueOpAminoMsg): ValueOp;
    fromProtoMsg(message: ValueOpProtoMsg): ValueOp;
    toProto(message: ValueOp): Uint8Array;
    toProtoMsg(message: ValueOp): ValueOpProtoMsg;
};
export declare const DominoOp: {
    typeUrl: string;
    is(o: any): o is DominoOp;
    isAmino(o: any): o is DominoOpAmino;
    encode(message: DominoOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DominoOp;
    fromPartial(object: DeepPartial<DominoOp>): DominoOp;
    fromAmino(object: DominoOpAmino): DominoOp;
    toAmino(message: DominoOp): DominoOpAmino;
    fromAminoMsg(object: DominoOpAminoMsg): DominoOp;
    fromProtoMsg(message: DominoOpProtoMsg): DominoOp;
    toProto(message: DominoOp): Uint8Array;
    toProtoMsg(message: DominoOp): DominoOpProtoMsg;
};
export declare const ProofOp: {
    typeUrl: string;
    is(o: any): o is ProofOp;
    isAmino(o: any): o is ProofOpAmino;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromPartial(object: DeepPartial<ProofOp>): ProofOp;
    fromAmino(object: ProofOpAmino): ProofOp;
    toAmino(message: ProofOp): ProofOpAmino;
    fromAminoMsg(object: ProofOpAminoMsg): ProofOp;
    fromProtoMsg(message: ProofOpProtoMsg): ProofOp;
    toProto(message: ProofOp): Uint8Array;
    toProtoMsg(message: ProofOp): ProofOpProtoMsg;
};
export declare const ProofOps: {
    typeUrl: string;
    is(o: any): o is ProofOps;
    isAmino(o: any): o is ProofOpsAmino;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromPartial(object: DeepPartial<ProofOps>): ProofOps;
    fromAmino(object: ProofOpsAmino): ProofOps;
    toAmino(message: ProofOps): ProofOpsAmino;
    fromAminoMsg(object: ProofOpsAminoMsg): ProofOps;
    fromProtoMsg(message: ProofOpsProtoMsg): ProofOps;
    toProto(message: ProofOps): Uint8Array;
    toProtoMsg(message: ProofOps): ProofOpsProtoMsg;
};
