import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
  /**
   * typed_data_chain_id is used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typed_data_chain_id: bigint;
  /**
   * fee_payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  fee_payer: string;
  /**
   * fee_payer_sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  fee_payer_sig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxProtoMsg {
  type_url: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
  value: Uint8Array;
}
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3TxAmino {
  /**
   * typed_data_chain_id is used only in EIP712 Domain and should match
   * Ethereum network ID in a Web3 provider (e.g. Metamask).
   */
  typed_data_chain_id: string;
  /**
   * fee_payer is an account address for the fee payer. It will be validated
   * during EIP712 signature checking.
   */
  fee_payer: string;
  /**
   * fee_payer_sig is a signature data from the fee paying account,
   * allows to perform fee delegation when using EIP712 Domain.
   */
  fee_payer_sig: string;
}
export interface ExtensionOptionsWeb3TxAminoMsg {
  type: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
  value: ExtensionOptionsWeb3TxAmino;
}
function createBaseExtensionOptionsWeb3Tx(): ExtensionOptionsWeb3Tx {
  return {
    typed_data_chain_id: BigInt(0),
    fee_payer: "",
    fee_payer_sig: new Uint8Array()
  };
}
export const ExtensionOptionsWeb3Tx = {
  typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
  is(o: any): o is ExtensionOptionsWeb3Tx {
    return o && (o.$typeUrl === ExtensionOptionsWeb3Tx.typeUrl || typeof o.typed_data_chain_id === "bigint" && typeof o.fee_payer === "string" && (o.fee_payer_sig instanceof Uint8Array || typeof o.fee_payer_sig === "string"));
  },
  isAmino(o: any): o is ExtensionOptionsWeb3TxAmino {
    return o && (o.$typeUrl === ExtensionOptionsWeb3Tx.typeUrl || typeof o.typed_data_chain_id === "bigint" && typeof o.fee_payer === "string" && (o.fee_payer_sig instanceof Uint8Array || typeof o.fee_payer_sig === "string"));
  },
  encode(message: ExtensionOptionsWeb3Tx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.typed_data_chain_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.typed_data_chain_id);
    }
    if (message.fee_payer !== "") {
      writer.uint32(18).string(message.fee_payer);
    }
    if (message.fee_payer_sig.length !== 0) {
      writer.uint32(26).bytes(message.fee_payer_sig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionOptionsWeb3Tx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typed_data_chain_id = reader.uint64();
          break;
        case 2:
          message.fee_payer = reader.string();
          break;
        case 3:
          message.fee_payer_sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    message.typed_data_chain_id = object.typed_data_chain_id !== undefined && object.typed_data_chain_id !== null ? BigInt(object.typed_data_chain_id.toString()) : BigInt(0);
    message.fee_payer = object.fee_payer ?? "";
    message.fee_payer_sig = object.fee_payer_sig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ExtensionOptionsWeb3TxAmino): ExtensionOptionsWeb3Tx {
    const message = createBaseExtensionOptionsWeb3Tx();
    if (object.typed_data_chain_id !== undefined && object.typed_data_chain_id !== null) {
      message.typed_data_chain_id = BigInt(object.typed_data_chain_id);
    }
    if (object.fee_payer !== undefined && object.fee_payer !== null) {
      message.fee_payer = object.fee_payer;
    }
    if (object.fee_payer_sig !== undefined && object.fee_payer_sig !== null) {
      message.fee_payer_sig = bytesFromBase64(object.fee_payer_sig);
    }
    return message;
  },
  toAmino(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxAmino {
    const obj: any = {};
    obj.typed_data_chain_id = message.typed_data_chain_id !== BigInt(0) ? message.typed_data_chain_id?.toString() : undefined;
    obj.fee_payer = message.fee_payer === "" ? undefined : message.fee_payer;
    obj.fee_payer_sig = message.fee_payer_sig ? base64FromBytes(message.fee_payer_sig) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExtensionOptionsWeb3TxAminoMsg): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtensionOptionsWeb3TxProtoMsg): ExtensionOptionsWeb3Tx {
    return ExtensionOptionsWeb3Tx.decode(message.value);
  },
  toProto(message: ExtensionOptionsWeb3Tx): Uint8Array {
    return ExtensionOptionsWeb3Tx.encode(message).finish();
  },
  toProtoMsg(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx",
      value: ExtensionOptionsWeb3Tx.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};