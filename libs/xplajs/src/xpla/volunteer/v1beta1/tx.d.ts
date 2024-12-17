import { Description, DescriptionAmino } from "../../../cosmos/staking/v1beta1/staking";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgRegisterVolunteerValidator defines a message to register a new volunteer
 * validator.
 */
export interface MsgRegisterVolunteerValidator {
    /** authority is the address of the governance account. */
    authority: string;
    validatorDescription: Description;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any | undefined;
    amount: Coin;
}
export interface MsgRegisterVolunteerValidatorProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidator";
    value: Uint8Array;
}
export type MsgRegisterVolunteerValidatorEncoded = Omit<MsgRegisterVolunteerValidator, "pubkey"> & {
    pubkey?: AnyProtoMsg | undefined;
};
/**
 * MsgRegisterVolunteerValidator defines a message to register a new volunteer
 * validator.
 */
export interface MsgRegisterVolunteerValidatorAmino {
    /** authority is the address of the governance account. */
    authority: string;
    validator_description: DescriptionAmino;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnyAmino;
    amount: CoinAmino;
}
export interface MsgRegisterVolunteerValidatorAminoMsg {
    type: "xpladev/MsgRegisterVolunteerValidator";
    value: MsgRegisterVolunteerValidatorAmino;
}
/**
 * MsgRegisterVolunteerValidatorResponse defines the RegisterVolunteerValidator
 * response.
 */
export interface MsgRegisterVolunteerValidatorResponse {
}
export interface MsgRegisterVolunteerValidatorResponseProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse";
    value: Uint8Array;
}
/**
 * MsgRegisterVolunteerValidatorResponse defines the RegisterVolunteerValidator
 * response.
 */
export interface MsgRegisterVolunteerValidatorResponseAmino {
}
export interface MsgRegisterVolunteerValidatorResponseAminoMsg {
    type: "/xpla.volunteer.v1beta1.MsgRegisterVolunteerValidatorResponse";
    value: MsgRegisterVolunteerValidatorResponseAmino;
}
/**
 * MsgUnregisterVolunteerValidator defines a message to unregister a volunteer
 * validator.
 */
export interface MsgUnregisterVolunteerValidator {
    /** authority is the address of the governance account. */
    authority: string;
    validatorAddress: string;
}
export interface MsgUnregisterVolunteerValidatorProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidator";
    value: Uint8Array;
}
/**
 * MsgUnregisterVolunteerValidator defines a message to unregister a volunteer
 * validator.
 */
export interface MsgUnregisterVolunteerValidatorAmino {
    /** authority is the address of the governance account. */
    authority: string;
    validator_address: string;
}
export interface MsgUnregisterVolunteerValidatorAminoMsg {
    type: "xpladev/MsgUnregisterVolunteerValidator";
    value: MsgUnregisterVolunteerValidatorAmino;
}
/**
 * MsgUnregisterVolunteerValidatorResponse defines the
 * UnregisterVolunteerValidator response.
 */
export interface MsgUnregisterVolunteerValidatorResponse {
}
export interface MsgUnregisterVolunteerValidatorResponseProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse";
    value: Uint8Array;
}
/**
 * MsgUnregisterVolunteerValidatorResponse defines the
 * UnregisterVolunteerValidator response.
 */
export interface MsgUnregisterVolunteerValidatorResponseAmino {
}
export interface MsgUnregisterVolunteerValidatorResponseAminoMsg {
    type: "/xpla.volunteer.v1beta1.MsgUnregisterVolunteerValidatorResponse";
    value: MsgUnregisterVolunteerValidatorResponseAmino;
}
export declare const MsgRegisterVolunteerValidator: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRegisterVolunteerValidator;
    isAmino(o: any): o is MsgRegisterVolunteerValidatorAmino;
    encode(message: MsgRegisterVolunteerValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterVolunteerValidator;
    fromPartial(object: DeepPartial<MsgRegisterVolunteerValidator>): MsgRegisterVolunteerValidator;
    fromAmino(object: MsgRegisterVolunteerValidatorAmino): MsgRegisterVolunteerValidator;
    toAmino(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorAmino;
    fromAminoMsg(object: MsgRegisterVolunteerValidatorAminoMsg): MsgRegisterVolunteerValidator;
    toAminoMsg(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorAminoMsg;
    fromProtoMsg(message: MsgRegisterVolunteerValidatorProtoMsg): MsgRegisterVolunteerValidator;
    toProto(message: MsgRegisterVolunteerValidator): Uint8Array;
    toProtoMsg(message: MsgRegisterVolunteerValidator): MsgRegisterVolunteerValidatorProtoMsg;
};
export declare const MsgRegisterVolunteerValidatorResponse: {
    typeUrl: string;
    is(o: any): o is MsgRegisterVolunteerValidatorResponse;
    isAmino(o: any): o is MsgRegisterVolunteerValidatorResponseAmino;
    encode(_: MsgRegisterVolunteerValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterVolunteerValidatorResponse;
    fromPartial(_: DeepPartial<MsgRegisterVolunteerValidatorResponse>): MsgRegisterVolunteerValidatorResponse;
    fromAmino(_: MsgRegisterVolunteerValidatorResponseAmino): MsgRegisterVolunteerValidatorResponse;
    toAmino(_: MsgRegisterVolunteerValidatorResponse): MsgRegisterVolunteerValidatorResponseAmino;
    fromAminoMsg(object: MsgRegisterVolunteerValidatorResponseAminoMsg): MsgRegisterVolunteerValidatorResponse;
    fromProtoMsg(message: MsgRegisterVolunteerValidatorResponseProtoMsg): MsgRegisterVolunteerValidatorResponse;
    toProto(message: MsgRegisterVolunteerValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterVolunteerValidatorResponse): MsgRegisterVolunteerValidatorResponseProtoMsg;
};
export declare const MsgUnregisterVolunteerValidator: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnregisterVolunteerValidator;
    isAmino(o: any): o is MsgUnregisterVolunteerValidatorAmino;
    encode(message: MsgUnregisterVolunteerValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterVolunteerValidator;
    fromPartial(object: DeepPartial<MsgUnregisterVolunteerValidator>): MsgUnregisterVolunteerValidator;
    fromAmino(object: MsgUnregisterVolunteerValidatorAmino): MsgUnregisterVolunteerValidator;
    toAmino(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorAmino;
    fromAminoMsg(object: MsgUnregisterVolunteerValidatorAminoMsg): MsgUnregisterVolunteerValidator;
    toAminoMsg(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorAminoMsg;
    fromProtoMsg(message: MsgUnregisterVolunteerValidatorProtoMsg): MsgUnregisterVolunteerValidator;
    toProto(message: MsgUnregisterVolunteerValidator): Uint8Array;
    toProtoMsg(message: MsgUnregisterVolunteerValidator): MsgUnregisterVolunteerValidatorProtoMsg;
};
export declare const MsgUnregisterVolunteerValidatorResponse: {
    typeUrl: string;
    is(o: any): o is MsgUnregisterVolunteerValidatorResponse;
    isAmino(o: any): o is MsgUnregisterVolunteerValidatorResponseAmino;
    encode(_: MsgUnregisterVolunteerValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterVolunteerValidatorResponse;
    fromPartial(_: DeepPartial<MsgUnregisterVolunteerValidatorResponse>): MsgUnregisterVolunteerValidatorResponse;
    fromAmino(_: MsgUnregisterVolunteerValidatorResponseAmino): MsgUnregisterVolunteerValidatorResponse;
    toAmino(_: MsgUnregisterVolunteerValidatorResponse): MsgUnregisterVolunteerValidatorResponseAmino;
    fromAminoMsg(object: MsgUnregisterVolunteerValidatorResponseAminoMsg): MsgUnregisterVolunteerValidatorResponse;
    fromProtoMsg(message: MsgUnregisterVolunteerValidatorResponseProtoMsg): MsgUnregisterVolunteerValidatorResponse;
    toProto(message: MsgUnregisterVolunteerValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterVolunteerValidatorResponse): MsgUnregisterVolunteerValidatorResponseProtoMsg;
};
