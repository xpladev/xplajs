import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
export declare enum HashOp {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    NO_HASH = 0,
    SHA256 = 1,
    SHA512 = 2,
    KECCAK256 = 3,
    RIPEMD160 = 4,
    /** BITCOIN - ripemd160(sha256(x)) */
    BITCOIN = 5,
    SHA512_256 = 6,
    BLAKE2B_512 = 7,
    BLAKE2S_256 = 8,
    BLAKE3 = 9,
    UNRECOGNIZED = -1
}
export declare const HashOpAmino: typeof HashOp;
export declare function hashOpFromJSON(object: any): HashOp;
export declare function hashOpToJSON(object: HashOp): string;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export declare enum LengthOp {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    NO_PREFIX = 0,
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    VAR_PROTO = 1,
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    VAR_RLP = 2,
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    FIXED32_BIG = 3,
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    FIXED32_LITTLE = 4,
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    FIXED64_BIG = 5,
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    FIXED64_LITTLE = 6,
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    REQUIRE_32_BYTES = 7,
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    REQUIRE_64_BYTES = 8,
    UNRECOGNIZED = -1
}
export declare const LengthOpAmino: typeof LengthOp;
export declare function lengthOpFromJSON(object: any): LengthOp;
export declare function lengthOpToJSON(object: LengthOp): string;
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProof {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOp;
    path: InnerOp[];
}
export interface ExistenceProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.ExistenceProof";
    value: Uint8Array;
}
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProofAmino {
    key: string;
    value: string;
    leaf?: LeafOpAmino;
    path: InnerOpAmino[];
}
export interface ExistenceProofAminoMsg {
    type: "cosmos-sdk/ExistenceProof";
    value: ExistenceProofAmino;
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProof {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: Uint8Array;
    left?: ExistenceProof;
    right?: ExistenceProof;
}
export interface NonExistenceProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.NonExistenceProof";
    value: Uint8Array;
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProofAmino {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: string;
    left?: ExistenceProofAmino;
    right?: ExistenceProofAmino;
}
export interface NonExistenceProofAminoMsg {
    type: "cosmos-sdk/NonExistenceProof";
    value: NonExistenceProofAmino;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProof {
    exist?: ExistenceProof;
    nonexist?: NonExistenceProof;
    batch?: BatchProof;
    compressed?: CompressedBatchProof;
}
export interface CommitmentProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.CommitmentProof";
    value: Uint8Array;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProofAmino {
    exist?: ExistenceProofAmino;
    nonexist?: NonExistenceProofAmino;
    batch?: BatchProofAmino;
    compressed?: CompressedBatchProofAmino;
}
export interface CommitmentProofAminoMsg {
    type: "cosmos-sdk/CommitmentProof";
    value: CommitmentProofAmino;
}
/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOp {
    hash: HashOp;
    prehashKey: HashOp;
    prehashValue: HashOp;
    length: LengthOp;
    /**
     * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
     * a leaf node from an inner node.
     */
    prefix: Uint8Array;
}
export interface LeafOpProtoMsg {
    typeUrl: "/cosmos.ics23.v1.LeafOp";
    value: Uint8Array;
}
/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOpAmino {
    hash: HashOp;
    prehash_key: HashOp;
    prehash_value: HashOp;
    length: LengthOp;
    /**
     * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
     * a leaf node from an inner node.
     */
    prefix: string;
}
export interface LeafOpAminoMsg {
    type: "cosmos-sdk/LeafOp";
    value: LeafOpAmino;
}
/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOp {
    hash: HashOp;
    prefix: Uint8Array;
    suffix: Uint8Array;
}
export interface InnerOpProtoMsg {
    typeUrl: "/cosmos.ics23.v1.InnerOp";
    value: Uint8Array;
}
/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOpAmino {
    hash: HashOp;
    prefix: string;
    suffix: string;
}
export interface InnerOpAminoMsg {
    type: "cosmos-sdk/InnerOp";
    value: InnerOpAmino;
}
/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpec {
    /**
     * any field in the ExistenceProof must be the same as in this spec.
     * except Prefix, which is just the first bytes of prefix (spec can be longer)
     */
    leafSpec?: LeafOp;
    innerSpec?: InnerSpec;
    /**
     * max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries)
     * the max_depth is interpreted as 128 if set to 0
     */
    maxDepth: number;
    /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
    minDepth: number;
    /**
     * prehash_key_before_comparison is a flag that indicates whether to use the
     * prehash_key specified by LeafOp to compare lexical ordering of keys for
     * non-existence proofs.
     */
    prehashKeyBeforeComparison: boolean;
}
export interface ProofSpecProtoMsg {
    typeUrl: "/cosmos.ics23.v1.ProofSpec";
    value: Uint8Array;
}
/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpecAmino {
    /**
     * any field in the ExistenceProof must be the same as in this spec.
     * except Prefix, which is just the first bytes of prefix (spec can be longer)
     */
    leaf_spec?: LeafOpAmino;
    inner_spec?: InnerSpecAmino;
    /**
     * max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries)
     * the max_depth is interpreted as 128 if set to 0
     */
    max_depth: number;
    /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
    min_depth: number;
    /**
     * prehash_key_before_comparison is a flag that indicates whether to use the
     * prehash_key specified by LeafOp to compare lexical ordering of keys for
     * non-existence proofs.
     */
    prehash_key_before_comparison: boolean;
}
export interface ProofSpecAminoMsg {
    type: "cosmos-sdk/ProofSpec";
    value: ProofSpecAmino;
}
/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpec {
    /**
     * Child order is the ordering of the children node, must count from 0
     * iavl tree is [0, 1] (left then right)
     * merk is [0, 2, 1] (left, right, here)
     */
    childOrder: number[];
    childSize: number;
    minPrefixLength: number;
    /** the max prefix length must be less than the minimum prefix length + child size */
    maxPrefixLength: number;
    /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
    emptyChild: Uint8Array;
    /** hash is the algorithm that must be used for each InnerOp */
    hash: HashOp;
}
export interface InnerSpecProtoMsg {
    typeUrl: "/cosmos.ics23.v1.InnerSpec";
    value: Uint8Array;
}
/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpecAmino {
    /**
     * Child order is the ordering of the children node, must count from 0
     * iavl tree is [0, 1] (left then right)
     * merk is [0, 2, 1] (left, right, here)
     */
    child_order: number[];
    child_size: number;
    min_prefix_length: number;
    /** the max prefix length must be less than the minimum prefix length + child size */
    max_prefix_length: number;
    /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
    empty_child: string;
    /** hash is the algorithm that must be used for each InnerOp */
    hash: HashOp;
}
export interface InnerSpecAminoMsg {
    type: "cosmos-sdk/InnerSpec";
    value: InnerSpecAmino;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProof {
    entries: BatchEntry[];
}
export interface BatchProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.BatchProof";
    value: Uint8Array;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProofAmino {
    entries: BatchEntryAmino[];
}
export interface BatchProofAminoMsg {
    type: "cosmos-sdk/BatchProof";
    value: BatchProofAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntry {
    exist?: ExistenceProof;
    nonexist?: NonExistenceProof;
}
export interface BatchEntryProtoMsg {
    typeUrl: "/cosmos.ics23.v1.BatchEntry";
    value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntryAmino {
    exist?: ExistenceProofAmino;
    nonexist?: NonExistenceProofAmino;
}
export interface BatchEntryAminoMsg {
    type: "cosmos-sdk/BatchEntry";
    value: BatchEntryAmino;
}
export interface CompressedBatchProof {
    entries: CompressedBatchEntry[];
    lookupInners: InnerOp[];
}
export interface CompressedBatchProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchProof";
    value: Uint8Array;
}
export interface CompressedBatchProofAmino {
    entries: CompressedBatchEntryAmino[];
    lookup_inners: InnerOpAmino[];
}
export interface CompressedBatchProofAminoMsg {
    type: "cosmos-sdk/CompressedBatchProof";
    value: CompressedBatchProofAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntry {
    exist?: CompressedExistenceProof;
    nonexist?: CompressedNonExistenceProof;
}
export interface CompressedBatchEntryProtoMsg {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry";
    value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntryAmino {
    exist?: CompressedExistenceProofAmino;
    nonexist?: CompressedNonExistenceProofAmino;
}
export interface CompressedBatchEntryAminoMsg {
    type: "cosmos-sdk/CompressedBatchEntry";
    value: CompressedBatchEntryAmino;
}
export interface CompressedExistenceProof {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOp;
    /** these are indexes into the lookup_inners table in CompressedBatchProof */
    path: number[];
}
export interface CompressedExistenceProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof";
    value: Uint8Array;
}
export interface CompressedExistenceProofAmino {
    key: string;
    value: string;
    leaf?: LeafOpAmino;
    /** these are indexes into the lookup_inners table in CompressedBatchProof */
    path: number[];
}
export interface CompressedExistenceProofAminoMsg {
    type: "cosmos-sdk/CompressedExistenceProof";
    value: CompressedExistenceProofAmino;
}
export interface CompressedNonExistenceProof {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: Uint8Array;
    left?: CompressedExistenceProof;
    right?: CompressedExistenceProof;
}
export interface CompressedNonExistenceProofProtoMsg {
    typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof";
    value: Uint8Array;
}
export interface CompressedNonExistenceProofAmino {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: string;
    left?: CompressedExistenceProofAmino;
    right?: CompressedExistenceProofAmino;
}
export interface CompressedNonExistenceProofAminoMsg {
    type: "cosmos-sdk/CompressedNonExistenceProof";
    value: CompressedNonExistenceProofAmino;
}
export declare const ExistenceProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ExistenceProof;
    isAmino(o: any): o is ExistenceProofAmino;
    encode(message: ExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExistenceProof;
    fromPartial(object: DeepPartial<ExistenceProof>): ExistenceProof;
    fromAmino(object: ExistenceProofAmino): ExistenceProof;
    toAmino(message: ExistenceProof): ExistenceProofAmino;
    fromAminoMsg(object: ExistenceProofAminoMsg): ExistenceProof;
    toAminoMsg(message: ExistenceProof): ExistenceProofAminoMsg;
    fromProtoMsg(message: ExistenceProofProtoMsg): ExistenceProof;
    toProto(message: ExistenceProof): Uint8Array;
    toProtoMsg(message: ExistenceProof): ExistenceProofProtoMsg;
};
export declare const NonExistenceProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is NonExistenceProof;
    isAmino(o: any): o is NonExistenceProofAmino;
    encode(message: NonExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NonExistenceProof;
    fromPartial(object: DeepPartial<NonExistenceProof>): NonExistenceProof;
    fromAmino(object: NonExistenceProofAmino): NonExistenceProof;
    toAmino(message: NonExistenceProof): NonExistenceProofAmino;
    fromAminoMsg(object: NonExistenceProofAminoMsg): NonExistenceProof;
    toAminoMsg(message: NonExistenceProof): NonExistenceProofAminoMsg;
    fromProtoMsg(message: NonExistenceProofProtoMsg): NonExistenceProof;
    toProto(message: NonExistenceProof): Uint8Array;
    toProtoMsg(message: NonExistenceProof): NonExistenceProofProtoMsg;
};
export declare const CommitmentProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CommitmentProof;
    isAmino(o: any): o is CommitmentProofAmino;
    encode(message: CommitmentProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitmentProof;
    fromPartial(object: DeepPartial<CommitmentProof>): CommitmentProof;
    fromAmino(object: CommitmentProofAmino): CommitmentProof;
    toAmino(message: CommitmentProof): CommitmentProofAmino;
    fromAminoMsg(object: CommitmentProofAminoMsg): CommitmentProof;
    toAminoMsg(message: CommitmentProof): CommitmentProofAminoMsg;
    fromProtoMsg(message: CommitmentProofProtoMsg): CommitmentProof;
    toProto(message: CommitmentProof): Uint8Array;
    toProtoMsg(message: CommitmentProof): CommitmentProofProtoMsg;
};
export declare const LeafOp: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LeafOp;
    isAmino(o: any): o is LeafOpAmino;
    encode(message: LeafOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LeafOp;
    fromPartial(object: DeepPartial<LeafOp>): LeafOp;
    fromAmino(object: LeafOpAmino): LeafOp;
    toAmino(message: LeafOp): LeafOpAmino;
    fromAminoMsg(object: LeafOpAminoMsg): LeafOp;
    toAminoMsg(message: LeafOp): LeafOpAminoMsg;
    fromProtoMsg(message: LeafOpProtoMsg): LeafOp;
    toProto(message: LeafOp): Uint8Array;
    toProtoMsg(message: LeafOp): LeafOpProtoMsg;
};
export declare const InnerOp: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is InnerOp;
    isAmino(o: any): o is InnerOpAmino;
    encode(message: InnerOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InnerOp;
    fromPartial(object: DeepPartial<InnerOp>): InnerOp;
    fromAmino(object: InnerOpAmino): InnerOp;
    toAmino(message: InnerOp): InnerOpAmino;
    fromAminoMsg(object: InnerOpAminoMsg): InnerOp;
    toAminoMsg(message: InnerOp): InnerOpAminoMsg;
    fromProtoMsg(message: InnerOpProtoMsg): InnerOp;
    toProto(message: InnerOp): Uint8Array;
    toProtoMsg(message: InnerOp): InnerOpProtoMsg;
};
export declare const ProofSpec: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ProofSpec;
    isAmino(o: any): o is ProofSpecAmino;
    encode(message: ProofSpec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofSpec;
    fromPartial(object: DeepPartial<ProofSpec>): ProofSpec;
    fromAmino(object: ProofSpecAmino): ProofSpec;
    toAmino(message: ProofSpec): ProofSpecAmino;
    fromAminoMsg(object: ProofSpecAminoMsg): ProofSpec;
    toAminoMsg(message: ProofSpec): ProofSpecAminoMsg;
    fromProtoMsg(message: ProofSpecProtoMsg): ProofSpec;
    toProto(message: ProofSpec): Uint8Array;
    toProtoMsg(message: ProofSpec): ProofSpecProtoMsg;
};
export declare const InnerSpec: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is InnerSpec;
    isAmino(o: any): o is InnerSpecAmino;
    encode(message: InnerSpec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InnerSpec;
    fromPartial(object: DeepPartial<InnerSpec>): InnerSpec;
    fromAmino(object: InnerSpecAmino): InnerSpec;
    toAmino(message: InnerSpec): InnerSpecAmino;
    fromAminoMsg(object: InnerSpecAminoMsg): InnerSpec;
    toAminoMsg(message: InnerSpec): InnerSpecAminoMsg;
    fromProtoMsg(message: InnerSpecProtoMsg): InnerSpec;
    toProto(message: InnerSpec): Uint8Array;
    toProtoMsg(message: InnerSpec): InnerSpecProtoMsg;
};
export declare const BatchProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BatchProof;
    isAmino(o: any): o is BatchProofAmino;
    encode(message: BatchProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchProof;
    fromPartial(object: DeepPartial<BatchProof>): BatchProof;
    fromAmino(object: BatchProofAmino): BatchProof;
    toAmino(message: BatchProof): BatchProofAmino;
    fromAminoMsg(object: BatchProofAminoMsg): BatchProof;
    toAminoMsg(message: BatchProof): BatchProofAminoMsg;
    fromProtoMsg(message: BatchProofProtoMsg): BatchProof;
    toProto(message: BatchProof): Uint8Array;
    toProtoMsg(message: BatchProof): BatchProofProtoMsg;
};
export declare const BatchEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BatchEntry;
    isAmino(o: any): o is BatchEntryAmino;
    encode(message: BatchEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchEntry;
    fromPartial(object: DeepPartial<BatchEntry>): BatchEntry;
    fromAmino(object: BatchEntryAmino): BatchEntry;
    toAmino(message: BatchEntry): BatchEntryAmino;
    fromAminoMsg(object: BatchEntryAminoMsg): BatchEntry;
    toAminoMsg(message: BatchEntry): BatchEntryAminoMsg;
    fromProtoMsg(message: BatchEntryProtoMsg): BatchEntry;
    toProto(message: BatchEntry): Uint8Array;
    toProtoMsg(message: BatchEntry): BatchEntryProtoMsg;
};
export declare const CompressedBatchProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CompressedBatchProof;
    isAmino(o: any): o is CompressedBatchProofAmino;
    encode(message: CompressedBatchProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchProof;
    fromPartial(object: DeepPartial<CompressedBatchProof>): CompressedBatchProof;
    fromAmino(object: CompressedBatchProofAmino): CompressedBatchProof;
    toAmino(message: CompressedBatchProof): CompressedBatchProofAmino;
    fromAminoMsg(object: CompressedBatchProofAminoMsg): CompressedBatchProof;
    toAminoMsg(message: CompressedBatchProof): CompressedBatchProofAminoMsg;
    fromProtoMsg(message: CompressedBatchProofProtoMsg): CompressedBatchProof;
    toProto(message: CompressedBatchProof): Uint8Array;
    toProtoMsg(message: CompressedBatchProof): CompressedBatchProofProtoMsg;
};
export declare const CompressedBatchEntry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CompressedBatchEntry;
    isAmino(o: any): o is CompressedBatchEntryAmino;
    encode(message: CompressedBatchEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchEntry;
    fromPartial(object: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry;
    fromAmino(object: CompressedBatchEntryAmino): CompressedBatchEntry;
    toAmino(message: CompressedBatchEntry): CompressedBatchEntryAmino;
    fromAminoMsg(object: CompressedBatchEntryAminoMsg): CompressedBatchEntry;
    toAminoMsg(message: CompressedBatchEntry): CompressedBatchEntryAminoMsg;
    fromProtoMsg(message: CompressedBatchEntryProtoMsg): CompressedBatchEntry;
    toProto(message: CompressedBatchEntry): Uint8Array;
    toProtoMsg(message: CompressedBatchEntry): CompressedBatchEntryProtoMsg;
};
export declare const CompressedExistenceProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CompressedExistenceProof;
    isAmino(o: any): o is CompressedExistenceProofAmino;
    encode(message: CompressedExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedExistenceProof;
    fromPartial(object: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof;
    fromAmino(object: CompressedExistenceProofAmino): CompressedExistenceProof;
    toAmino(message: CompressedExistenceProof): CompressedExistenceProofAmino;
    fromAminoMsg(object: CompressedExistenceProofAminoMsg): CompressedExistenceProof;
    toAminoMsg(message: CompressedExistenceProof): CompressedExistenceProofAminoMsg;
    fromProtoMsg(message: CompressedExistenceProofProtoMsg): CompressedExistenceProof;
    toProto(message: CompressedExistenceProof): Uint8Array;
    toProtoMsg(message: CompressedExistenceProof): CompressedExistenceProofProtoMsg;
};
export declare const CompressedNonExistenceProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CompressedNonExistenceProof;
    isAmino(o: any): o is CompressedNonExistenceProofAmino;
    encode(message: CompressedNonExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedNonExistenceProof;
    fromPartial(object: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof;
    fromAmino(object: CompressedNonExistenceProofAmino): CompressedNonExistenceProof;
    toAmino(message: CompressedNonExistenceProof): CompressedNonExistenceProofAmino;
    fromAminoMsg(object: CompressedNonExistenceProofAminoMsg): CompressedNonExistenceProof;
    toAminoMsg(message: CompressedNonExistenceProof): CompressedNonExistenceProofAminoMsg;
    fromProtoMsg(message: CompressedNonExistenceProofProtoMsg): CompressedNonExistenceProof;
    toProto(message: CompressedNonExistenceProof): Uint8Array;
    toProtoMsg(message: CompressedNonExistenceProof): CompressedNonExistenceProofProtoMsg;
};
