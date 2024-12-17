import { Vote, LightBlock } from "./types";
import { Validator } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    lightClientAttackEvidence?: LightClientAttackEvidence;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    totalVotingPower: bigint;
    validatorPower: bigint;
    timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock;
    commonHeight: bigint;
    byzantineValidators: Validator[];
    totalVotingPower: bigint;
    timestamp: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export declare const Evidence: {
    typeUrl: string;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
};
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    encode(message: DuplicateVoteEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
};
export declare const LightClientAttackEvidence: {
    typeUrl: string;
    encode(message: LightClientAttackEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence;
};
export declare const EvidenceList: {
    typeUrl: string;
    encode(message: EvidenceList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList;
    fromPartial(object: DeepPartial<EvidenceList>): EvidenceList;
};
