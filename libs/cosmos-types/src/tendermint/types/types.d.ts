import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { BlockIDFlag, ValidatorSet } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader;
}
/** Header defines the structure of a block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chainId: string;
    height: bigint;
    time: Date;
    /** prev block info */
    lastBlockId: BlockID;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    /** transactions */
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: bigint;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID;
    timestamp: Date;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    /**
     * Vote signature by the validator if they participated in consensus for the
     * associated block.
     */
    signature: Uint8Array;
    /**
     * Vote extension provided by the application. Only valid for precommit
     * messages.
     */
    extension: Uint8Array;
    /**
     * Vote extension signature by the validator if they participated in
     * consensus for the associated block.
     * Only valid for precommit messages.
     */
    extensionSignature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: bigint;
    round: number;
    blockId: BlockID;
    signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface ExtendedCommit {
    height: bigint;
    round: number;
    blockId: BlockID;
    extendedSignatures: ExtendedCommitSig[];
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
    /** Vote extension data */
    extension: Uint8Array;
    /** Vote extension signature */
    extensionSignature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: bigint;
    round: number;
    polRound: number;
    blockId: BlockID;
    timestamp: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header;
    commit?: Commit;
}
export interface LightBlock {
    signedHeader?: SignedHeader;
    validatorSet?: ValidatorSet;
}
export interface BlockMeta {
    blockId: BlockID;
    blockSize: bigint;
    header: Header;
    numTxs: bigint;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof?: Proof;
}
export declare const PartSetHeader: {
    typeUrl: string;
    encode(message: PartSetHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader;
    fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader;
};
export declare const Part: {
    typeUrl: string;
    encode(message: Part, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Part;
    fromPartial(object: DeepPartial<Part>): Part;
};
export declare const BlockID: {
    typeUrl: string;
    encode(message: BlockID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockID;
    fromPartial(object: DeepPartial<BlockID>): BlockID;
};
export declare const Header: {
    typeUrl: string;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromPartial(object: DeepPartial<Header>): Header;
};
export declare const Data: {
    typeUrl: string;
    encode(message: Data, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Data;
    fromPartial(object: DeepPartial<Data>): Data;
};
export declare const Vote: {
    typeUrl: string;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vote;
    fromPartial(object: DeepPartial<Vote>): Vote;
};
export declare const Commit: {
    typeUrl: string;
    encode(message: Commit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commit;
    fromPartial(object: DeepPartial<Commit>): Commit;
};
export declare const CommitSig: {
    typeUrl: string;
    encode(message: CommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitSig;
    fromPartial(object: DeepPartial<CommitSig>): CommitSig;
};
export declare const ExtendedCommit: {
    typeUrl: string;
    encode(message: ExtendedCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommit;
    fromPartial(object: DeepPartial<ExtendedCommit>): ExtendedCommit;
};
export declare const ExtendedCommitSig: {
    typeUrl: string;
    encode(message: ExtendedCommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitSig;
    fromPartial(object: DeepPartial<ExtendedCommitSig>): ExtendedCommitSig;
};
export declare const Proposal: {
    typeUrl: string;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proposal;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
};
export declare const SignedHeader: {
    typeUrl: string;
    encode(message: SignedHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader;
    fromPartial(object: DeepPartial<SignedHeader>): SignedHeader;
};
export declare const LightBlock: {
    typeUrl: string;
    encode(message: LightBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightBlock;
    fromPartial(object: DeepPartial<LightBlock>): LightBlock;
};
export declare const BlockMeta: {
    typeUrl: string;
    encode(message: BlockMeta, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta;
    fromPartial(object: DeepPartial<BlockMeta>): BlockMeta;
};
export declare const TxProof: {
    typeUrl: string;
    encode(message: TxProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxProof;
    fromPartial(object: DeepPartial<TxProof>): TxProof;
};
