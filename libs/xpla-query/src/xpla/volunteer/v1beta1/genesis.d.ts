import { VolunteerValidator, VolunteerValidatorAmino } from "./volunteervalidator";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the volunteer module's genesis state. */
export interface GenesisState {
    volunteerValidators: VolunteerValidator[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the volunteer module's genesis state. */
export interface GenesisStateAmino {
    volunteer_validators: VolunteerValidatorAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/xpla.volunteer.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
