import { PublicKey } from "../crypto/keys";
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
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    totalVotingPower: bigint;
}
export interface Validator {
    address: Uint8Array;
    pubKey: PublicKey;
    votingPower: bigint;
    proposerPriority: bigint;
}
export interface SimpleValidator {
    pubKey?: PublicKey;
    votingPower: bigint;
}
export declare const ValidatorSet: {
    typeUrl: string;
    encode(message: ValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const SimpleValidator: {
    typeUrl: string;
    encode(message: SimpleValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
};
