import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTx {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    maxPriorityPrice: string;
}
export interface ExtensionOptionDynamicFeeTxProtoMsg {
    typeUrl: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
    value: Uint8Array;
}
/** ExtensionOptionDynamicFeeTx is an extension option that specifies the maxPrioPrice for cosmos tx */
export interface ExtensionOptionDynamicFeeTxAmino {
    /** max_priority_price is the same as `max_priority_fee_per_gas` in eip-1559 spec */
    max_priority_price: string;
}
export interface ExtensionOptionDynamicFeeTxAminoMsg {
    type: "/ethermint.types.v1.ExtensionOptionDynamicFeeTx";
    value: ExtensionOptionDynamicFeeTxAmino;
}
export declare const ExtensionOptionDynamicFeeTx: {
    typeUrl: string;
    is(o: any): o is ExtensionOptionDynamicFeeTx;
    isAmino(o: any): o is ExtensionOptionDynamicFeeTxAmino;
    encode(message: ExtensionOptionDynamicFeeTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionDynamicFeeTx;
    fromPartial(object: DeepPartial<ExtensionOptionDynamicFeeTx>): ExtensionOptionDynamicFeeTx;
    fromAmino(object: ExtensionOptionDynamicFeeTxAmino): ExtensionOptionDynamicFeeTx;
    toAmino(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxAmino;
    fromAminoMsg(object: ExtensionOptionDynamicFeeTxAminoMsg): ExtensionOptionDynamicFeeTx;
    fromProtoMsg(message: ExtensionOptionDynamicFeeTxProtoMsg): ExtensionOptionDynamicFeeTx;
    toProto(message: ExtensionOptionDynamicFeeTx): Uint8Array;
    toProtoMsg(message: ExtensionOptionDynamicFeeTx): ExtensionOptionDynamicFeeTxProtoMsg;
};
