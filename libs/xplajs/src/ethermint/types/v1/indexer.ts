import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** TxResult is the value stored in eth tx indexer */
export interface TxResult {
  /** height of the blockchain */
  height: bigint;
  /** tx_index of the cosmos transaction */
  tx_index: number;
  /** msg_index in a batch transaction */
  msg_index: number;
  /**
   * eth_tx_index is the index in the list of valid eth tx in the block,
   * aka. the transaction list returned by eth_getBlock api.
   */
  eth_tx_index: number;
  /** failed is true if the eth transaction did not go succeed */
  failed: boolean;
  /**
   * gas_used by the transaction. If it exceeds the block gas limit,
   * it's set to gas limit, which is what's actually deducted by ante handler.
   */
  gas_used: bigint;
  /**
   * cumulative_gas_used specifies the cumulated amount of gas used for all
   * processed messages within the current batch transaction.
   */
  cumulative_gas_used: bigint;
}
export interface TxResultProtoMsg {
  type_url: "/ethermint.types.v1.TxResult";
  value: Uint8Array;
}
/** TxResult is the value stored in eth tx indexer */
export interface TxResultAmino {
  /** height of the blockchain */
  height: string;
  /** tx_index of the cosmos transaction */
  tx_index: number;
  /** msg_index in a batch transaction */
  msg_index: number;
  /**
   * eth_tx_index is the index in the list of valid eth tx in the block,
   * aka. the transaction list returned by eth_getBlock api.
   */
  eth_tx_index: number;
  /** failed is true if the eth transaction did not go succeed */
  failed: boolean;
  /**
   * gas_used by the transaction. If it exceeds the block gas limit,
   * it's set to gas limit, which is what's actually deducted by ante handler.
   */
  gas_used: string;
  /**
   * cumulative_gas_used specifies the cumulated amount of gas used for all
   * processed messages within the current batch transaction.
   */
  cumulative_gas_used: string;
}
export interface TxResultAminoMsg {
  type: "/ethermint.types.v1.TxResult";
  value: TxResultAmino;
}
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    tx_index: 0,
    msg_index: 0,
    eth_tx_index: 0,
    failed: false,
    gas_used: BigInt(0),
    cumulative_gas_used: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/ethermint.types.v1.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.tx_index === "number" && typeof o.msg_index === "number" && typeof o.eth_tx_index === "number" && typeof o.failed === "boolean" && typeof o.gas_used === "bigint" && typeof o.cumulative_gas_used === "bigint");
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.tx_index === "number" && typeof o.msg_index === "number" && typeof o.eth_tx_index === "number" && typeof o.failed === "boolean" && typeof o.gas_used === "bigint" && typeof o.cumulative_gas_used === "bigint");
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.tx_index !== 0) {
      writer.uint32(16).uint32(message.tx_index);
    }
    if (message.msg_index !== 0) {
      writer.uint32(24).uint32(message.msg_index);
    }
    if (message.eth_tx_index !== 0) {
      writer.uint32(32).int32(message.eth_tx_index);
    }
    if (message.failed === true) {
      writer.uint32(40).bool(message.failed);
    }
    if (message.gas_used !== BigInt(0)) {
      writer.uint32(48).uint64(message.gas_used);
    }
    if (message.cumulative_gas_used !== BigInt(0)) {
      writer.uint32(56).uint64(message.cumulative_gas_used);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.tx_index = reader.uint32();
          break;
        case 3:
          message.msg_index = reader.uint32();
          break;
        case 4:
          message.eth_tx_index = reader.int32();
          break;
        case 5:
          message.failed = reader.bool();
          break;
        case 6:
          message.gas_used = reader.uint64();
          break;
        case 7:
          message.cumulative_gas_used = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.tx_index = object.tx_index ?? 0;
    message.msg_index = object.msg_index ?? 0;
    message.eth_tx_index = object.eth_tx_index ?? 0;
    message.failed = object.failed ?? false;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
    message.cumulative_gas_used = object.cumulative_gas_used !== undefined && object.cumulative_gas_used !== null ? BigInt(object.cumulative_gas_used.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.tx_index = object.tx_index;
    }
    if (object.msg_index !== undefined && object.msg_index !== null) {
      message.msg_index = object.msg_index;
    }
    if (object.eth_tx_index !== undefined && object.eth_tx_index !== null) {
      message.eth_tx_index = object.eth_tx_index;
    }
    if (object.failed !== undefined && object.failed !== null) {
      message.failed = object.failed;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = BigInt(object.gas_used);
    }
    if (object.cumulative_gas_used !== undefined && object.cumulative_gas_used !== null) {
      message.cumulative_gas_used = BigInt(object.cumulative_gas_used);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.tx_index = message.tx_index === 0 ? undefined : message.tx_index;
    obj.msg_index = message.msg_index === 0 ? undefined : message.msg_index;
    obj.eth_tx_index = message.eth_tx_index === 0 ? undefined : message.eth_tx_index;
    obj.failed = message.failed === false ? undefined : message.failed;
    obj.gas_used = message.gas_used !== BigInt(0) ? message.gas_used?.toString() : undefined;
    obj.cumulative_gas_used = message.cumulative_gas_used !== BigInt(0) ? message.cumulative_gas_used?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.TxResult",
      value: TxResult.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};