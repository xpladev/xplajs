import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarket {
    /** base_fee for EIP-1559 blocks */
    baseFee: string;
}
export interface EventFeeMarketProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.EventFeeMarket";
    value: Uint8Array;
}
/** EventFeeMarket is the event type for the fee market module */
export interface EventFeeMarketAmino {
    /** base_fee for EIP-1559 blocks */
    base_fee: string;
}
export interface EventFeeMarketAminoMsg {
    type: "/ethermint.feemarket.v1.EventFeeMarket";
    value: EventFeeMarketAmino;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGas {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
export interface EventBlockGasProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.EventBlockGas";
    value: Uint8Array;
}
/** EventBlockGas defines an Ethereum block gas event */
export interface EventBlockGasAmino {
    /** height of the block */
    height: string;
    /** amount of gas wanted by the block */
    amount: string;
}
export interface EventBlockGasAminoMsg {
    type: "/ethermint.feemarket.v1.EventBlockGas";
    value: EventBlockGasAmino;
}
export declare const EventFeeMarket: {
    typeUrl: string;
    is(o: any): o is EventFeeMarket;
    isAmino(o: any): o is EventFeeMarketAmino;
    encode(message: EventFeeMarket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventFeeMarket;
    fromPartial(object: DeepPartial<EventFeeMarket>): EventFeeMarket;
    fromAmino(object: EventFeeMarketAmino): EventFeeMarket;
    toAmino(message: EventFeeMarket): EventFeeMarketAmino;
    fromAminoMsg(object: EventFeeMarketAminoMsg): EventFeeMarket;
    fromProtoMsg(message: EventFeeMarketProtoMsg): EventFeeMarket;
    toProto(message: EventFeeMarket): Uint8Array;
    toProtoMsg(message: EventFeeMarket): EventFeeMarketProtoMsg;
};
export declare const EventBlockGas: {
    typeUrl: string;
    is(o: any): o is EventBlockGas;
    isAmino(o: any): o is EventBlockGasAmino;
    encode(message: EventBlockGas, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBlockGas;
    fromPartial(object: DeepPartial<EventBlockGas>): EventBlockGas;
    fromAmino(object: EventBlockGasAmino): EventBlockGas;
    toAmino(message: EventBlockGas): EventBlockGasAmino;
    fromAminoMsg(object: EventBlockGasAminoMsg): EventBlockGas;
    fromProtoMsg(message: EventBlockGasProtoMsg): EventBlockGas;
    toProto(message: EventBlockGas): Uint8Array;
    toProtoMsg(message: EventBlockGas): EventBlockGasProtoMsg;
};
