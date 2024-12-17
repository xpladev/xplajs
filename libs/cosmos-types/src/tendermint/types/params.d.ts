import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
    abci?: ABCIParams;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    maxBytes: bigint;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    maxGas: bigint;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    maxAgeNumBlocks: bigint;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    maxAgeDuration: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    maxBytes: bigint;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pubKeyTypes: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app: bigint;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    blockMaxBytes: bigint;
    blockMaxGas: bigint;
}
/** ABCIParams configure functionality specific to the Application Blockchain Interface. */
export interface ABCIParams {
    /**
     * vote_extensions_enable_height configures the first height during which
     * vote extensions will be enabled. During this specified height, and for all
     * subsequent heights, precommit messages that do not contain valid extension data
     * will be considered invalid. Prior to this height, vote extensions will not
     * be used or accepted by validators on the network.
     *
     * Once enabled, vote extensions will be created by the application in ExtendVote,
     * passed to the application for validation in VerifyVoteExtension and given
     * to the application to use when proposing a block during PrepareProposal.
     */
    voteExtensionsEnableHeight: bigint;
}
export declare const ConsensusParams: {
    typeUrl: string;
    encode(message: ConsensusParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams;
    fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams;
};
export declare const BlockParams: {
    typeUrl: string;
    encode(message: BlockParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockParams;
    fromPartial(object: DeepPartial<BlockParams>): BlockParams;
};
export declare const EvidenceParams: {
    typeUrl: string;
    encode(message: EvidenceParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceParams;
    fromPartial(object: DeepPartial<EvidenceParams>): EvidenceParams;
};
export declare const ValidatorParams: {
    typeUrl: string;
    encode(message: ValidatorParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorParams;
    fromPartial(object: DeepPartial<ValidatorParams>): ValidatorParams;
};
export declare const VersionParams: {
    typeUrl: string;
    encode(message: VersionParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VersionParams;
    fromPartial(object: DeepPartial<VersionParams>): VersionParams;
};
export declare const HashedParams: {
    typeUrl: string;
    encode(message: HashedParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HashedParams;
    fromPartial(object: DeepPartial<HashedParams>): HashedParams;
};
export declare const ABCIParams: {
    typeUrl: string;
    encode(message: ABCIParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ABCIParams;
    fromPartial(object: DeepPartial<ABCIParams>): ABCIParams;
};
