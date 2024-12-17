import { Description, DescriptionAmino } from "../../../cosmos/staking/v1beta1/staking";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** RegisterVolunteerValidatorProposal */
/** @deprecated */
export interface RegisterVolunteerValidatorProposal {
    title: string;
    description: string;
    validatorDescription: Description;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any | undefined;
    amount: Coin;
}
export interface RegisterVolunteerValidatorProposalProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposal";
    value: Uint8Array;
}
export type RegisterVolunteerValidatorProposalEncoded = Omit<RegisterVolunteerValidatorProposal, "pubkey"> & {
    pubkey?: AnyProtoMsg | undefined;
};
/** RegisterVolunteerValidatorProposal */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalAmino {
    title: string;
    description: string;
    validator_description: DescriptionAmino;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnyAmino;
    amount: CoinAmino;
}
export interface RegisterVolunteerValidatorProposalAminoMsg {
    type: "xpladev/RegisterVolunteerValidatorProposal";
    value: RegisterVolunteerValidatorProposalAmino;
}
/** RegisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalWithDeposit {
    title: string;
    description: string;
    validatorDescription: Description;
    delegatorAddress: string;
    validatorAddress: string;
    pubkey?: Any | undefined;
    amount: Coin;
    deposit: string;
}
export interface RegisterVolunteerValidatorProposalWithDepositProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.RegisterVolunteerValidatorProposalWithDeposit";
    value: Uint8Array;
}
export type RegisterVolunteerValidatorProposalWithDepositEncoded = Omit<RegisterVolunteerValidatorProposalWithDeposit, "pubkey"> & {
    pubkey?: AnyProtoMsg | undefined;
};
/** RegisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface RegisterVolunteerValidatorProposalWithDepositAmino {
    title: string;
    description: string;
    validator_description: DescriptionAmino;
    delegator_address: string;
    validator_address: string;
    pubkey?: AnyAmino;
    amount: CoinAmino;
    deposit: string;
}
export interface RegisterVolunteerValidatorProposalWithDepositAminoMsg {
    type: "xpladev/RegisterVolunteerValidatorProposalWithDeposit";
    value: RegisterVolunteerValidatorProposalWithDepositAmino;
}
/** UnregisterVolunteerValidatorProposal */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposal {
    title: string;
    description: string;
    validatorAddress: string;
}
export interface UnregisterVolunteerValidatorProposalProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposal";
    value: Uint8Array;
}
/** UnregisterVolunteerValidatorProposal */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalAmino {
    title: string;
    description: string;
    validator_address: string;
}
export interface UnregisterVolunteerValidatorProposalAminoMsg {
    type: "xpladev/UnregisterVolunteerValidatorProposal";
    value: UnregisterVolunteerValidatorProposalAmino;
}
/** UnregisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalWithDeposit {
    title: string;
    description: string;
    validatorAddress: string;
    deposit: string;
}
export interface UnregisterVolunteerValidatorProposalWithDepositProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.UnregisterVolunteerValidatorProposalWithDeposit";
    value: Uint8Array;
}
/** UnregisterVolunteerValidatorProposalWithDeposit */
/** @deprecated */
export interface UnregisterVolunteerValidatorProposalWithDepositAmino {
    title: string;
    description: string;
    validator_address: string;
    deposit: string;
}
export interface UnregisterVolunteerValidatorProposalWithDepositAminoMsg {
    type: "xpladev/UnregisterVolunteerValidatorProposalWithDeposit";
    value: UnregisterVolunteerValidatorProposalWithDepositAmino;
}
export declare const RegisterVolunteerValidatorProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RegisterVolunteerValidatorProposal;
    isAmino(o: any): o is RegisterVolunteerValidatorProposalAmino;
    encode(message: RegisterVolunteerValidatorProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisterVolunteerValidatorProposal;
    fromPartial(object: DeepPartial<RegisterVolunteerValidatorProposal>): RegisterVolunteerValidatorProposal;
    fromAmino(object: RegisterVolunteerValidatorProposalAmino): RegisterVolunteerValidatorProposal;
    toAmino(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalAmino;
    fromAminoMsg(object: RegisterVolunteerValidatorProposalAminoMsg): RegisterVolunteerValidatorProposal;
    toAminoMsg(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalAminoMsg;
    fromProtoMsg(message: RegisterVolunteerValidatorProposalProtoMsg): RegisterVolunteerValidatorProposal;
    toProto(message: RegisterVolunteerValidatorProposal): Uint8Array;
    toProtoMsg(message: RegisterVolunteerValidatorProposal): RegisterVolunteerValidatorProposalProtoMsg;
};
export declare const RegisterVolunteerValidatorProposalWithDeposit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RegisterVolunteerValidatorProposalWithDeposit;
    isAmino(o: any): o is RegisterVolunteerValidatorProposalWithDepositAmino;
    encode(message: RegisterVolunteerValidatorProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisterVolunteerValidatorProposalWithDeposit;
    fromPartial(object: DeepPartial<RegisterVolunteerValidatorProposalWithDeposit>): RegisterVolunteerValidatorProposalWithDeposit;
    fromAmino(object: RegisterVolunteerValidatorProposalWithDepositAmino): RegisterVolunteerValidatorProposalWithDeposit;
    toAmino(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositAmino;
    fromAminoMsg(object: RegisterVolunteerValidatorProposalWithDepositAminoMsg): RegisterVolunteerValidatorProposalWithDeposit;
    toAminoMsg(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositAminoMsg;
    fromProtoMsg(message: RegisterVolunteerValidatorProposalWithDepositProtoMsg): RegisterVolunteerValidatorProposalWithDeposit;
    toProto(message: RegisterVolunteerValidatorProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RegisterVolunteerValidatorProposalWithDeposit): RegisterVolunteerValidatorProposalWithDepositProtoMsg;
};
export declare const UnregisterVolunteerValidatorProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UnregisterVolunteerValidatorProposal;
    isAmino(o: any): o is UnregisterVolunteerValidatorProposalAmino;
    encode(message: UnregisterVolunteerValidatorProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnregisterVolunteerValidatorProposal;
    fromPartial(object: DeepPartial<UnregisterVolunteerValidatorProposal>): UnregisterVolunteerValidatorProposal;
    fromAmino(object: UnregisterVolunteerValidatorProposalAmino): UnregisterVolunteerValidatorProposal;
    toAmino(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalAmino;
    fromAminoMsg(object: UnregisterVolunteerValidatorProposalAminoMsg): UnregisterVolunteerValidatorProposal;
    toAminoMsg(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalAminoMsg;
    fromProtoMsg(message: UnregisterVolunteerValidatorProposalProtoMsg): UnregisterVolunteerValidatorProposal;
    toProto(message: UnregisterVolunteerValidatorProposal): Uint8Array;
    toProtoMsg(message: UnregisterVolunteerValidatorProposal): UnregisterVolunteerValidatorProposalProtoMsg;
};
export declare const UnregisterVolunteerValidatorProposalWithDeposit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UnregisterVolunteerValidatorProposalWithDeposit;
    isAmino(o: any): o is UnregisterVolunteerValidatorProposalWithDepositAmino;
    encode(message: UnregisterVolunteerValidatorProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnregisterVolunteerValidatorProposalWithDeposit;
    fromPartial(object: DeepPartial<UnregisterVolunteerValidatorProposalWithDeposit>): UnregisterVolunteerValidatorProposalWithDeposit;
    fromAmino(object: UnregisterVolunteerValidatorProposalWithDepositAmino): UnregisterVolunteerValidatorProposalWithDeposit;
    toAmino(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositAmino;
    fromAminoMsg(object: UnregisterVolunteerValidatorProposalWithDepositAminoMsg): UnregisterVolunteerValidatorProposalWithDeposit;
    toAminoMsg(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositAminoMsg;
    fromProtoMsg(message: UnregisterVolunteerValidatorProposalWithDepositProtoMsg): UnregisterVolunteerValidatorProposalWithDeposit;
    toProto(message: UnregisterVolunteerValidatorProposalWithDeposit): Uint8Array;
    toProtoMsg(message: UnregisterVolunteerValidatorProposalWithDeposit): UnregisterVolunteerValidatorProposalWithDepositProtoMsg;
};
