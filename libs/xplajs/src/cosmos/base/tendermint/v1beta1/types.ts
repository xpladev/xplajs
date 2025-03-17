import { Data, DataAmino, Commit, CommitAmino, BlockID, BlockIDAmino } from "../../../../tendermint/types/types";
import { EvidenceList, EvidenceListAmino } from "../../../../tendermint/types/evidence";
import { Consensus, ConsensusAmino } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
  header: Header;
  data: Data;
  evidence: EvidenceList;
  last_commit?: Commit;
}
export interface BlockProtoMsg {
  type_url: "/cosmos.base.tendermint.v1beta1.Block";
  value: Uint8Array;
}
/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface BlockAmino {
  header: HeaderAmino;
  data: DataAmino;
  evidence: EvidenceListAmino;
  last_commit?: CommitAmino;
}
export interface BlockAminoMsg {
  type: "cosmos-sdk/Block";
  value: BlockAmino;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version: Consensus;
  chain_id: string;
  height: bigint;
  time: Date;
  /** prev block info */
  last_block_id: BlockID;
  /** hashes of block data */
  last_commit_hash: Uint8Array;
  /** transactions */
  data_hash: Uint8Array;
  /** hashes from the app output from the prev block */
  validators_hash: Uint8Array;
  /** validators for the next block */
  next_validators_hash: Uint8Array;
  /** consensus params for current block */
  consensus_hash: Uint8Array;
  /** state after txs from the previous block */
  app_hash: Uint8Array;
  /** root hash of all results from the txs from the previous block */
  last_results_hash: Uint8Array;
  /** consensus info */
  evidence_hash: Uint8Array;
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposer_address: string;
}
export interface HeaderProtoMsg {
  type_url: "/cosmos.base.tendermint.v1beta1.Header";
  value: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderAmino {
  /** basic block info */
  version: ConsensusAmino;
  chain_id: string;
  height: string;
  time: string;
  /** prev block info */
  last_block_id: BlockIDAmino;
  /** hashes of block data */
  last_commit_hash: string;
  /** transactions */
  data_hash: string;
  /** hashes from the app output from the prev block */
  validators_hash: string;
  /** validators for the next block */
  next_validators_hash: string;
  /** consensus params for current block */
  consensus_hash: string;
  /** state after txs from the previous block */
  app_hash: string;
  /** root hash of all results from the txs from the previous block */
  last_results_hash: string;
  /** consensus info */
  evidence_hash: string;
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposer_address: string;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
function createBaseBlock(): Block {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    last_commit: undefined
  };
}
export const Block = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
  aminoType: "cosmos-sdk/Block",
  is(o: any): o is Block {
    return o && (o.$typeUrl === Block.typeUrl || Header.is(o.header) && Data.is(o.data) && EvidenceList.is(o.evidence));
  },
  isAmino(o: any): o is BlockAmino {
    return o && (o.$typeUrl === Block.typeUrl || Header.isAmino(o.header) && Data.isAmino(o.data) && EvidenceList.isAmino(o.evidence));
  },
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.last_commit !== undefined) {
      Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.last_commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
    message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? Commit.fromPartial(object.last_commit) : undefined;
    return message;
  },
  fromAmino(object: BlockAmino): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromAmino(object.data);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromAmino(object.evidence);
    }
    if (object.last_commit !== undefined && object.last_commit !== null) {
      message.last_commit = Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message: Block): BlockAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : Header.toAmino(Header.fromPartial({}));
    obj.data = message.data ? Data.toAmino(message.data) : Data.toAmino(Data.fromPartial({}));
    obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : EvidenceList.toAmino(EvidenceList.fromPartial({}));
    obj.last_commit = message.last_commit ? Commit.toAmino(message.last_commit) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockAminoMsg): Block {
    return Block.fromAmino(object.value);
  },
  toAminoMsg(message: Block): BlockAminoMsg {
    return {
      type: "cosmos-sdk/Block",
      value: Block.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockProtoMsg): Block {
    return Block.decode(message.value);
  },
  toProto(message: Block): Uint8Array {
    return Block.encode(message).finish();
  },
  toProtoMsg(message: Block): BlockProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
      value: Block.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Header.registerTypeUrl();
    Data.registerTypeUrl();
    EvidenceList.registerTypeUrl();
    Commit.registerTypeUrl();
  }
};
function createBaseHeader(): Header {
  return {
    version: Consensus.fromPartial({}),
    chain_id: "",
    height: BigInt(0),
    time: new Date(),
    last_block_id: BlockID.fromPartial({}),
    last_commit_hash: new Uint8Array(),
    data_hash: new Uint8Array(),
    validators_hash: new Uint8Array(),
    next_validators_hash: new Uint8Array(),
    consensus_hash: new Uint8Array(),
    app_hash: new Uint8Array(),
    last_results_hash: new Uint8Array(),
    evidence_hash: new Uint8Array(),
    proposer_address: ""
  };
}
export const Header = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
  aminoType: "cosmos-sdk/Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || Consensus.is(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && Timestamp.is(o.time) && BlockID.is(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && typeof o.proposer_address === "string");
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || Consensus.isAmino(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && BlockID.isAmino(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && typeof o.proposer_address === "string");
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.last_block_id !== undefined) {
      BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.last_commit_hash.length !== 0) {
      writer.uint32(50).bytes(message.last_commit_hash);
    }
    if (message.data_hash.length !== 0) {
      writer.uint32(58).bytes(message.data_hash);
    }
    if (message.validators_hash.length !== 0) {
      writer.uint32(66).bytes(message.validators_hash);
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(74).bytes(message.next_validators_hash);
    }
    if (message.consensus_hash.length !== 0) {
      writer.uint32(82).bytes(message.consensus_hash);
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(90).bytes(message.app_hash);
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash);
    }
    if (message.evidence_hash.length !== 0) {
      writer.uint32(106).bytes(message.evidence_hash);
    }
    if (message.proposer_address !== "") {
      writer.uint32(114).string(message.proposer_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.last_block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.last_commit_hash = reader.bytes();
          break;
        case 7:
          message.data_hash = reader.bytes();
          break;
        case 8:
          message.validators_hash = reader.bytes();
          break;
        case 9:
          message.next_validators_hash = reader.bytes();
          break;
        case 10:
          message.consensus_hash = reader.bytes();
          break;
        case 11:
          message.app_hash = reader.bytes();
          break;
        case 12:
          message.last_results_hash = reader.bytes();
          break;
        case 13:
          message.evidence_hash = reader.bytes();
          break;
        case 14:
          message.proposer_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
    message.chain_id = object.chain_id ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? BlockID.fromPartial(object.last_block_id) : undefined;
    message.last_commit_hash = object.last_commit_hash ?? new Uint8Array();
    message.data_hash = object.data_hash ?? new Uint8Array();
    message.validators_hash = object.validators_hash ?? new Uint8Array();
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.consensus_hash = object.consensus_hash ?? new Uint8Array();
    message.app_hash = object.app_hash ?? new Uint8Array();
    message.last_results_hash = object.last_results_hash ?? new Uint8Array();
    message.evidence_hash = object.evidence_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? "";
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.version !== undefined && object.version !== null) {
      message.version = Consensus.fromAmino(object.version);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.last_block_id !== undefined && object.last_block_id !== null) {
      message.last_block_id = BlockID.fromAmino(object.last_block_id);
    }
    if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
      message.last_commit_hash = bytesFromBase64(object.last_commit_hash);
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.data_hash = bytesFromBase64(object.data_hash);
    }
    if (object.validators_hash !== undefined && object.validators_hash !== null) {
      message.validators_hash = bytesFromBase64(object.validators_hash);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
      message.consensus_hash = bytesFromBase64(object.consensus_hash);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash);
    }
    if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
      message.last_results_hash = bytesFromBase64(object.last_results_hash);
    }
    if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
      message.evidence_hash = bytesFromBase64(object.evidence_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposer_address = object.proposer_address;
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.version = message.version ? Consensus.toAmino(message.version) : Consensus.toAmino(Consensus.fromPartial({}));
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : new Date();
    obj.last_block_id = message.last_block_id ? BlockID.toAmino(message.last_block_id) : BlockID.toAmino(BlockID.fromPartial({}));
    obj.last_commit_hash = message.last_commit_hash ? base64FromBytes(message.last_commit_hash) : undefined;
    obj.data_hash = message.data_hash ? base64FromBytes(message.data_hash) : undefined;
    obj.validators_hash = message.validators_hash ? base64FromBytes(message.validators_hash) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.consensus_hash = message.consensus_hash ? base64FromBytes(message.consensus_hash) : undefined;
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    obj.last_results_hash = message.last_results_hash ? base64FromBytes(message.last_results_hash) : undefined;
    obj.evidence_hash = message.evidence_hash ? base64FromBytes(message.evidence_hash) : undefined;
    obj.proposer_address = message.proposer_address === "" ? undefined : message.proposer_address;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
      value: Header.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Consensus.registerTypeUrl();
    BlockID.registerTypeUrl();
  }
};