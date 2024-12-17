import { Params, ParamsAmino } from "./feemarket";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the feemarket module. */
    params: Params;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    blockGas: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the feemarket module. */
    params: ParamsAmino;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    block_gas: string;
}
export interface GenesisStateAminoMsg {
    type: "/ethermint.feemarket.v1.GenesisState";
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
