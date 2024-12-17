import { Vote, VoteAmino, LightBlock, LightBlockAmino } from "./types";
import { Validator, ValidatorAmino } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence;
    lightClientAttackEvidence?: LightClientAttackEvidence;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    duplicate_vote_evidence?: DuplicateVoteEvidenceAmino;
    light_client_attack_evidence?: LightClientAttackEvidenceAmino;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.types.Evidence";
    value: EvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote;
    voteB?: Vote;
    totalVotingPower: bigint;
    validatorPower: bigint;
    timestamp: Date;
}
export interface DuplicateVoteEvidenceProtoMsg {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
    vote_a?: VoteAmino;
    vote_b?: VoteAmino;
    total_voting_power: string;
    validator_power: string;
    timestamp: string;
}
export interface DuplicateVoteEvidenceAminoMsg {
    type: "/tendermint.types.DuplicateVoteEvidence";
    value: DuplicateVoteEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock;
    commonHeight: bigint;
    byzantineValidators: Validator[];
    totalVotingPower: bigint;
    timestamp: Date;
}
export interface LightClientAttackEvidenceProtoMsg {
    typeUrl: "/tendermint.types.LightClientAttackEvidence";
    value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
    conflicting_block?: LightBlockAmino;
    common_height: string;
    byzantine_validators: ValidatorAmino[];
    total_voting_power: string;
    timestamp: string;
}
export interface LightClientAttackEvidenceAminoMsg {
    type: "/tendermint.types.LightClientAttackEvidence";
    value: LightClientAttackEvidenceAmino;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
    typeUrl: "/tendermint.types.EvidenceList";
    value: Uint8Array;
}
export interface EvidenceListAmino {
    evidence: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
    type: "/tendermint.types.EvidenceList";
    value: EvidenceListAmino;
}
export declare const Evidence: {
    typeUrl: string;
    is(o: any): o is Evidence;
    isAmino(o: any): o is EvidenceAmino;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    is(o: any): o is DuplicateVoteEvidence;
    isAmino(o: any): o is DuplicateVoteEvidenceAmino;
    encode(message: DuplicateVoteEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
    fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence;
    toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino;
    fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence;
    fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence;
    toProto(message: DuplicateVoteEvidence): Uint8Array;
    toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg;
};
export declare const LightClientAttackEvidence: {
    typeUrl: string;
    is(o: any): o is LightClientAttackEvidence;
    isAmino(o: any): o is LightClientAttackEvidenceAmino;
    encode(message: LightClientAttackEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence;
    fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence;
    toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino;
    fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence;
    fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence;
    toProto(message: LightClientAttackEvidence): Uint8Array;
    toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg;
};
export declare const EvidenceList: {
    typeUrl: string;
    is(o: any): o is EvidenceList;
    isAmino(o: any): o is EvidenceListAmino;
    encode(message: EvidenceList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList;
    fromPartial(object: DeepPartial<EvidenceList>): EvidenceList;
    fromAmino(object: EvidenceListAmino): EvidenceList;
    toAmino(message: EvidenceList): EvidenceListAmino;
    fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList;
    fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList;
    toProto(message: EvidenceList): Uint8Array;
    toProtoMsg(message: EvidenceList): EvidenceListProtoMsg;
};
