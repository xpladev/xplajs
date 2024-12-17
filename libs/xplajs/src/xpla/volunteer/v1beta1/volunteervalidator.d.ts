import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** VolunteerValidator required for validator set update logic. */
export interface VolunteerValidator {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: bigint;
}
export interface VolunteerValidatorProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator";
    value: Uint8Array;
}
/** VolunteerValidator required for validator set update logic. */
export interface VolunteerValidatorAmino {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: string;
}
export interface VolunteerValidatorAminoMsg {
    type: "/xpla.volunteer.v1beta1.VolunteerValidator";
    value: VolunteerValidatorAmino;
}
export declare const VolunteerValidator: {
    typeUrl: string;
    is(o: any): o is VolunteerValidator;
    isAmino(o: any): o is VolunteerValidatorAmino;
    encode(message: VolunteerValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VolunteerValidator;
    fromPartial(object: DeepPartial<VolunteerValidator>): VolunteerValidator;
    fromAmino(object: VolunteerValidatorAmino): VolunteerValidator;
    toAmino(message: VolunteerValidator): VolunteerValidatorAmino;
    fromAminoMsg(object: VolunteerValidatorAminoMsg): VolunteerValidator;
    fromProtoMsg(message: VolunteerValidatorProtoMsg): VolunteerValidator;
    toProto(message: VolunteerValidator): Uint8Array;
    toProtoMsg(message: VolunteerValidator): VolunteerValidatorProtoMsg;
};
