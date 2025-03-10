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
function createBaseEventEthereumTx(): EventEthereumTx {
  return {
    amount: "",
    ethHash: "",
    index: "",
    gasUsed: "",
    hash: "",
    recipient: "",
    ethTxFailed: ""
  };
}
export const EventEthereumTx = {
  typeUrl: "/ethermint.evm.v1.EventEthereumTx",
  is(o: any): o is EventEthereumTx {
    return o && (o.$typeUrl === EventEthereumTx.typeUrl || typeof o.amount === "string" && typeof o.ethHash === "string" && typeof o.index === "string" && typeof o.gasUsed === "string" && typeof o.hash === "string" && typeof o.recipient === "string" && typeof o.ethTxFailed === "string");
  },
  isAmino(o: any): o is EventEthereumTxAmino {
    return o && (o.$typeUrl === EventEthereumTx.typeUrl || typeof o.amount === "string" && typeof o.eth_hash === "string" && typeof o.index === "string" && typeof o.gas_used === "string" && typeof o.hash === "string" && typeof o.recipient === "string" && typeof o.eth_tx_failed === "string");
  },
  encode(message: EventEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.ethHash !== "") {
      writer.uint32(18).string(message.ethHash);
    }
    if (message.index !== "") {
      writer.uint32(26).string(message.index);
    }
    if (message.gasUsed !== "") {
      writer.uint32(34).string(message.gasUsed);
    }
    if (message.hash !== "") {
      writer.uint32(42).string(message.hash);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.ethTxFailed !== "") {
      writer.uint32(58).string(message.ethTxFailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEthereumTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEthereumTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.ethHash = reader.string();
          break;
        case 3:
          message.index = reader.string();
          break;
        case 4:
          message.gasUsed = reader.string();
          break;
        case 5:
          message.hash = reader.string();
          break;
        case 6:
          message.recipient = reader.string();
          break;
        case 7:
          message.ethTxFailed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventEthereumTx>): EventEthereumTx {
    const message = createBaseEventEthereumTx();
    message.amount = object.amount ?? "";
    message.ethHash = object.ethHash ?? "";
    message.index = object.index ?? "";
    message.gasUsed = object.gasUsed ?? "";
    message.hash = object.hash ?? "";
    message.recipient = object.recipient ?? "";
    message.ethTxFailed = object.ethTxFailed ?? "";
    return message;
  },
  fromAmino(object: EventEthereumTxAmino): EventEthereumTx {
    const message = createBaseEventEthereumTx();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.eth_hash !== undefined && object.eth_hash !== null) {
      message.ethHash = object.eth_hash;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = object.gas_used;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.eth_tx_failed !== undefined && object.eth_tx_failed !== null) {
      message.ethTxFailed = object.eth_tx_failed;
    }
    return message;
  },
  toAmino(message: EventEthereumTx): EventEthereumTxAmino {
    const obj: any = {};
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.eth_hash = message.ethHash === "" ? undefined : message.ethHash;
    obj.index = message.index === "" ? undefined : message.index;
    obj.gas_used = message.gasUsed === "" ? undefined : message.gasUsed;
    obj.hash = message.hash === "" ? undefined : message.hash;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.eth_tx_failed = message.ethTxFailed === "" ? undefined : message.ethTxFailed;
    return obj;
  },
  fromAminoMsg(object: EventEthereumTxAminoMsg): EventEthereumTx {
    return EventEthereumTx.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEthereumTxProtoMsg): EventEthereumTx {
    return EventEthereumTx.decode(message.value);
  },
  toProto(message: EventEthereumTx): Uint8Array {
    return EventEthereumTx.encode(message).finish();
  },
  toProtoMsg(message: EventEthereumTx): EventEthereumTxProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventEthereumTx",
      value: EventEthereumTx.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventTxLog(): EventTxLog {
  return {
    txLogs: []
  };
}
export const EventTxLog = {
  typeUrl: "/ethermint.evm.v1.EventTxLog",
  is(o: any): o is EventTxLog {
    return o && (o.$typeUrl === EventTxLog.typeUrl || Array.isArray(o.txLogs) && (!o.txLogs.length || typeof o.txLogs[0] === "string"));
  },
  isAmino(o: any): o is EventTxLogAmino {
    return o && (o.$typeUrl === EventTxLog.typeUrl || Array.isArray(o.tx_logs) && (!o.tx_logs.length || typeof o.tx_logs[0] === "string"));
  },
  encode(message: EventTxLog, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txLogs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventTxLog {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTxLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txLogs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventTxLog>): EventTxLog {
    const message = createBaseEventTxLog();
    message.txLogs = object.txLogs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: EventTxLogAmino): EventTxLog {
    const message = createBaseEventTxLog();
    message.txLogs = object.tx_logs?.map(e => e) || [];
    return message;
  },
  toAmino(message: EventTxLog): EventTxLogAmino {
    const obj: any = {};
    if (message.txLogs) {
      obj.tx_logs = message.txLogs.map(e => e);
    } else {
      obj.tx_logs = message.txLogs;
    }
    return obj;
  },
  fromAminoMsg(object: EventTxLogAminoMsg): EventTxLog {
    return EventTxLog.fromAmino(object.value);
  },
  fromProtoMsg(message: EventTxLogProtoMsg): EventTxLog {
    return EventTxLog.decode(message.value);
  },
  toProto(message: EventTxLog): Uint8Array {
    return EventTxLog.encode(message).finish();
  },
  toProtoMsg(message: EventTxLog): EventTxLogProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventTxLog",
      value: EventTxLog.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventMessage(): EventMessage {
  return {
    module: "",
    sender: "",
    txType: ""
  };
}
export const EventMessage = {
  typeUrl: "/ethermint.evm.v1.EventMessage",
  is(o: any): o is EventMessage {
    return o && (o.$typeUrl === EventMessage.typeUrl || typeof o.module === "string" && typeof o.sender === "string" && typeof o.txType === "string");
  },
  isAmino(o: any): o is EventMessageAmino {
    return o && (o.$typeUrl === EventMessage.typeUrl || typeof o.module === "string" && typeof o.sender === "string" && typeof o.tx_type === "string");
  },
  encode(message: EventMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.txType !== "") {
      writer.uint32(26).string(message.txType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.txType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMessage>): EventMessage {
    const message = createBaseEventMessage();
    message.module = object.module ?? "";
    message.sender = object.sender ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
  fromAmino(object: EventMessageAmino): EventMessage {
    const message = createBaseEventMessage();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.tx_type !== undefined && object.tx_type !== null) {
      message.txType = object.tx_type;
    }
    return message;
  },
  toAmino(message: EventMessage): EventMessageAmino {
    const obj: any = {};
    obj.module = message.module === "" ? undefined : message.module;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.tx_type = message.txType === "" ? undefined : message.txType;
    return obj;
  },
  fromAminoMsg(object: EventMessageAminoMsg): EventMessage {
    return EventMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMessageProtoMsg): EventMessage {
    return EventMessage.decode(message.value);
  },
  toProto(message: EventMessage): Uint8Array {
    return EventMessage.encode(message).finish();
  },
  toProtoMsg(message: EventMessage): EventMessageProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventMessage",
      value: EventMessage.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBlockBloom(): EventBlockBloom {
  return {
    bloom: ""
  };
}
export const EventBlockBloom = {
  typeUrl: "/ethermint.evm.v1.EventBlockBloom",
  is(o: any): o is EventBlockBloom {
    return o && (o.$typeUrl === EventBlockBloom.typeUrl || typeof o.bloom === "string");
  },
  isAmino(o: any): o is EventBlockBloomAmino {
    return o && (o.$typeUrl === EventBlockBloom.typeUrl || typeof o.bloom === "string");
  },
  encode(message: EventBlockBloom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bloom !== "") {
      writer.uint32(10).string(message.bloom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBlockBloom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBlockBloom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bloom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBlockBloom>): EventBlockBloom {
    const message = createBaseEventBlockBloom();
    message.bloom = object.bloom ?? "";
    return message;
  },
  fromAmino(object: EventBlockBloomAmino): EventBlockBloom {
    const message = createBaseEventBlockBloom();
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = object.bloom;
    }
    return message;
  },
  toAmino(message: EventBlockBloom): EventBlockBloomAmino {
    const obj: any = {};
    obj.bloom = message.bloom === "" ? undefined : message.bloom;
    return obj;
  },
  fromAminoMsg(object: EventBlockBloomAminoMsg): EventBlockBloom {
    return EventBlockBloom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBlockBloomProtoMsg): EventBlockBloom {
    return EventBlockBloom.decode(message.value);
  },
  toProto(message: EventBlockBloom): Uint8Array {
    return EventBlockBloom.encode(message).finish();
  },
  toProtoMsg(message: EventBlockBloom): EventBlockBloomProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.EventBlockBloom",
      value: EventBlockBloom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};