import { Params, ParamsAmino } from "./reward";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the reward module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the reward module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/xpla.reward.v1beta1.GenesisState";
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
