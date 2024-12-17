import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTx {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    ethHash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gasUsed: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    ethTxFailed: string;
}
export interface EventEthereumTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventEthereumTx";
    value: Uint8Array;
}
/** EventEthereumTx defines the event for an Ethereum transaction */
export interface EventEthereumTxAmino {
    /** amount */
    amount: string;
    /** eth_hash is the Ethereum hash of the transaction */
    eth_hash: string;
    /** index of the transaction in the block */
    index: string;
    /** gas_used is the amount of gas used by the transaction */
    gas_used: string;
    /** hash is the Tendermint hash of the transaction */
    hash: string;
    /** recipient of the transaction */
    recipient: string;
    /** eth_tx_failed contains a VM error should it occur */
    eth_tx_failed: string;
}
export interface EventEthereumTxAminoMsg {
    type: "/ethermint.evm.v1.EventEthereumTx";
    value: EventEthereumTxAmino;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLog {
    /** tx_logs is an array of transaction logs */
    txLogs: string[];
}
export interface EventTxLogProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventTxLog";
    value: Uint8Array;
}
/** EventTxLog defines the event for an Ethereum transaction log */
export interface EventTxLogAmino {
    /** tx_logs is an array of transaction logs */
    tx_logs: string[];
}
export interface EventTxLogAminoMsg {
    type: "/ethermint.evm.v1.EventTxLog";
    value: EventTxLogAmino;
}
/** EventMessage */
export interface EventMessage {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    txType: string;
}
export interface EventMessageProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventMessage";
    value: Uint8Array;
}
/** EventMessage */
export interface EventMessageAmino {
    /** module which emits the event */
    module: string;
    /** sender of the message */
    sender: string;
    /** tx_type is the type of the message */
    tx_type: string;
}
export interface EventMessageAminoMsg {
    type: "/ethermint.evm.v1.EventMessage";
    value: EventMessageAmino;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloom {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
export interface EventBlockBloomProtoMsg {
    typeUrl: "/ethermint.evm.v1.EventBlockBloom";
    value: Uint8Array;
}
/** EventBlockBloom defines an Ethereum block bloom filter event */
export interface EventBlockBloomAmino {
    /** bloom is the bloom filter of the block */
    bloom: string;
}
export interface EventBlockBloomAminoMsg {
    type: "/ethermint.evm.v1.EventBlockBloom";
    value: EventBlockBloomAmino;
}
export declare const EventEthereumTx: {
    typeUrl: string;
    is(o: any): o is EventEthereumTx;
    isAmino(o: any): o is EventEthereumTxAmino;
    encode(message: EventEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventEthereumTx;
    fromPartial(object: DeepPartial<EventEthereumTx>): EventEthereumTx;
    fromAmino(object: EventEthereumTxAmino): EventEthereumTx;
    toAmino(message: EventEthereumTx): EventEthereumTxAmino;
    fromAminoMsg(object: EventEthereumTxAminoMsg): EventEthereumTx;
    fromProtoMsg(message: EventEthereumTxProtoMsg): EventEthereumTx;
    toProto(message: EventEthereumTx): Uint8Array;
    toProtoMsg(message: EventEthereumTx): EventEthereumTxProtoMsg;
};
export declare const EventTxLog: {
    typeUrl: string;
    is(o: any): o is EventTxLog;
    isAmino(o: any): o is EventTxLogAmino;
    encode(message: EventTxLog, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventTxLog;
    fromPartial(object: DeepPartial<EventTxLog>): EventTxLog;
    fromAmino(object: EventTxLogAmino): EventTxLog;
    toAmino(message: EventTxLog): EventTxLogAmino;
    fromAminoMsg(object: EventTxLogAminoMsg): EventTxLog;
    fromProtoMsg(message: EventTxLogProtoMsg): EventTxLog;
    toProto(message: EventTxLog): Uint8Array;
    toProtoMsg(message: EventTxLog): EventTxLogProtoMsg;
};
export declare const EventMessage: {
    typeUrl: string;
    is(o: any): o is EventMessage;
    isAmino(o: any): o is EventMessageAmino;
    encode(message: EventMessage, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventMessage;
    fromPartial(object: DeepPartial<EventMessage>): EventMessage;
    fromAmino(object: EventMessageAmino): EventMessage;
    toAmino(message: EventMessage): EventMessageAmino;
    fromAminoMsg(object: EventMessageAminoMsg): EventMessage;
    fromProtoMsg(message: EventMessageProtoMsg): EventMessage;
    toProto(message: EventMessage): Uint8Array;
    toProtoMsg(message: EventMessage): EventMessageProtoMsg;
};
export declare const EventBlockBloom: {
    typeUrl: string;
    is(o: any): o is EventBlockBloom;
    isAmino(o: any): o is EventBlockBloomAmino;
    encode(message: EventBlockBloom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventBlockBloom;
    fromPartial(object: DeepPartial<EventBlockBloom>): EventBlockBloom;
    fromAmino(object: EventBlockBloomAmino): EventBlockBloom;
    toAmino(message: EventBlockBloom): EventBlockBloomAmino;
    fromAminoMsg(object: EventBlockBloomAminoMsg): EventBlockBloom;
    fromProtoMsg(message: EventBlockBloomProtoMsg): EventBlockBloom;
    toProto(message: EventBlockBloom): Uint8Array;
    toProtoMsg(message: EventBlockBloom): EventBlockBloomProtoMsg;
};
