import { PublicKey, PublicKeyAmino } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** BlockIdFlag indicates which BlockID the signature is for */
export declare enum BlockIDFlag {
    /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
    BLOCK_ID_FLAG_UNKNOWN = 0,
    /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    /** BLOCK_ID_FLAG_NIL - voted for nil */
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare const BlockIDFlagAmino: typeof BlockIDFlag;
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    totalVotingPower: bigint;
}
export interface ValidatorSetProtoMsg {
    typeUrl: "/tendermint.types.ValidatorSet";
    value: Uint8Array;
}
export interface ValidatorSetAmino {
    validators: ValidatorAmino[];
    proposer?: ValidatorAmino;
    total_voting_power: string;
}
export interface ValidatorSetAminoMsg {
    type: "/tendermint.types.ValidatorSet";
    value: ValidatorSetAmino;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: bigint;
    proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.types.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    address: string;
    pub_key: PublicKeyAmino;
    voting_power: string;
    proposer_priority: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.types.Validator";
    value: ValidatorAmino;
}
export interface SimpleValidator {
    pubKey?: PublicKey;
    votingPower: bigint;
}
export interface SimpleValidatorProtoMsg {
    typeUrl: "/tendermint.types.SimpleValidator";
    value: Uint8Array;
}
export interface SimpleValidatorAmino {
    pub_key?: PublicKeyAmino;
    voting_power: string;
}
export interface SimpleValidatorAminoMsg {
    type: "/tendermint.types.SimpleValidator";
    value: SimpleValidatorAmino;
}
export declare const ValidatorSet: {
    typeUrl: string;
    is(o: any): o is ValidatorSet;
    isAmino(o: any): o is ValidatorSetAmino;
    encode(message: ValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
    fromAmino(object: ValidatorSetAmino): ValidatorSet;
    toAmino(message: ValidatorSet): ValidatorSetAmino;
    fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet;
    fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet;
    toProto(message: ValidatorSet): Uint8Array;
    toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    is(o: any): o is Validator;
    isAmino(o: any): o is ValidatorAmino;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const SimpleValidator: {
    typeUrl: string;
    is(o: any): o is SimpleValidator;
    isAmino(o: any): o is SimpleValidatorAmino;
    encode(message: SimpleValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
    fromAmino(object: SimpleValidatorAmino): SimpleValidator;
    toAmino(message: SimpleValidator): SimpleValidatorAmino;
    fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator;
    fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator;
    toProto(message: SimpleValidator): Uint8Array;
    toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg;
};
