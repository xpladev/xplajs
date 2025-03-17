import { Proof, ProofAmino } from "../crypto/proof";
import { Consensus, ConsensusAmino } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BlockIDFlag, ValidatorSet, ValidatorSetAmino } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, isSet } from "../../helpers";
/** SignedMsgType is a type of signed message in the consensus. */
export enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = 0,
  /** SIGNED_MSG_TYPE_PREVOTE - Votes */
  SIGNED_MSG_TYPE_PREVOTE = 1,
  SIGNED_MSG_TYPE_PRECOMMIT = 2,
  /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
  SIGNED_MSG_TYPE_PROPOSAL = 32,
  UNRECOGNIZED = -1,
}
export const SignedMsgTypeAmino = SignedMsgType;
export function signedMsgTypeFromJSON(object: any): SignedMsgType {
  switch (object) {
    case 0:
    case "SIGNED_MSG_TYPE_UNKNOWN":
      return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
    case 1:
    case "SIGNED_MSG_TYPE_PREVOTE":
      return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
    case 2:
    case "SIGNED_MSG_TYPE_PRECOMMIT":
      return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
    case 32:
    case "SIGNED_MSG_TYPE_PROPOSAL":
      return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignedMsgType.UNRECOGNIZED;
  }
}
export function signedMsgTypeToJSON(object: SignedMsgType): string {
  switch (object) {
    case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
      return "SIGNED_MSG_TYPE_UNKNOWN";
    case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
      return "SIGNED_MSG_TYPE_PREVOTE";
    case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
      return "SIGNED_MSG_TYPE_PRECOMMIT";
    case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
      return "SIGNED_MSG_TYPE_PROPOSAL";
    case SignedMsgType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** PartsetHeader */
export interface PartSetHeader {
  total: number;
  hash: Uint8Array;
}
export interface PartSetHeaderProtoMsg {
  type_url: "/tendermint.types.PartSetHeader";
  value: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderAmino {
  total: number;
  hash: string;
}
export interface PartSetHeaderAminoMsg {
  type: "/tendermint.types.PartSetHeader";
  value: PartSetHeaderAmino;
}
export interface Part {
  index: number;
  bytes: Uint8Array;
  proof: Proof;
}
export interface PartProtoMsg {
  type_url: "/tendermint.types.Part";
  value: Uint8Array;
}
export interface PartAmino {
  index: number;
  bytes: string;
  proof: ProofAmino;
}
export interface PartAminoMsg {
  type: "/tendermint.types.Part";
  value: PartAmino;
}
/** BlockID */
export interface BlockID {
  hash: Uint8Array;
  part_set_header: PartSetHeader;
}
export interface BlockIDProtoMsg {
  type_url: "/tendermint.types.BlockID";
  value: Uint8Array;
}
/** BlockID */
export interface BlockIDAmino {
  hash: string;
  part_set_header: PartSetHeaderAmino;
}
export interface BlockIDAminoMsg {
  type: "/tendermint.types.BlockID";
  value: BlockIDAmino;
}
/** Header defines the structure of a block header. */
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
  /** original proposer of the block */
  proposer_address: Uint8Array;
}
export interface HeaderProtoMsg {
  type_url: "/tendermint.types.Header";
  value: Uint8Array;
}
/** Header defines the structure of a block header. */
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
  /** original proposer of the block */
  proposer_address: string;
}
export interface HeaderAminoMsg {
  type: "/tendermint.types.Header";
  value: HeaderAmino;
}
/** Data contains the set of transactions included in the block */
export interface Data {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: Uint8Array[];
}
export interface DataProtoMsg {
  type_url: "/tendermint.types.Data";
  value: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface DataAmino {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs: string[];
}
export interface DataAminoMsg {
  type: "/tendermint.types.Data";
  value: DataAmino;
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface Vote {
  type: SignedMsgType;
  height: bigint;
  round: number;
  /** zero if vote is nil. */
  block_id: BlockID;
  timestamp: Date;
  validator_address: Uint8Array;
  validator_index: number;
  /**
   * Vote signature by the validator if they participated in consensus for the
   * associated block.
   */
  signature: Uint8Array;
  /**
   * Vote extension provided by the application. Only valid for precommit
   * messages.
   */
  extension: Uint8Array;
  /**
   * Vote extension signature by the validator if they participated in
   * consensus for the associated block.
   * Only valid for precommit messages.
   */
  extension_signature: Uint8Array;
}
export interface VoteProtoMsg {
  type_url: "/tendermint.types.Vote";
  value: Uint8Array;
}
/**
 * Vote represents a prevote or precommit vote from validators for
 * consensus.
 */
export interface VoteAmino {
  type: SignedMsgType;
  height: string;
  round: number;
  /** zero if vote is nil. */
  block_id: BlockIDAmino;
  timestamp: string;
  validator_address: string;
  validator_index: number;
  /**
   * Vote signature by the validator if they participated in consensus for the
   * associated block.
   */
  signature: string;
  /**
   * Vote extension provided by the application. Only valid for precommit
   * messages.
   */
  extension: string;
  /**
   * Vote extension signature by the validator if they participated in
   * consensus for the associated block.
   * Only valid for precommit messages.
   */
  extension_signature: string;
}
export interface VoteAminoMsg {
  type: "/tendermint.types.Vote";
  value: VoteAmino;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
  height: bigint;
  round: number;
  block_id: BlockID;
  signatures: CommitSig[];
}
export interface CommitProtoMsg {
  type_url: "/tendermint.types.Commit";
  value: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitAmino {
  height: string;
  round: number;
  block_id: BlockIDAmino;
  signatures: CommitSigAmino[];
}
export interface CommitAminoMsg {
  type: "/tendermint.types.Commit";
  value: CommitAmino;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
  block_id_flag: BlockIDFlag;
  validator_address: Uint8Array;
  timestamp: Date;
  signature: Uint8Array;
}
export interface CommitSigProtoMsg {
  type_url: "/tendermint.types.CommitSig";
  value: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigAmino {
  block_id_flag: BlockIDFlag;
  validator_address: string;
  timestamp: string;
  signature: string;
}
export interface CommitSigAminoMsg {
  type: "/tendermint.types.CommitSig";
  value: CommitSigAmino;
}
export interface ExtendedCommit {
  height: bigint;
  round: number;
  block_id: BlockID;
  extended_signatures: ExtendedCommitSig[];
}
export interface ExtendedCommitProtoMsg {
  type_url: "/tendermint.types.ExtendedCommit";
  value: Uint8Array;
}
export interface ExtendedCommitAmino {
  height: string;
  round: number;
  block_id: BlockIDAmino;
  extended_signatures: ExtendedCommitSigAmino[];
}
export interface ExtendedCommitAminoMsg {
  type: "/tendermint.types.ExtendedCommit";
  value: ExtendedCommitAmino;
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSig {
  block_id_flag: BlockIDFlag;
  validator_address: Uint8Array;
  timestamp: Date;
  signature: Uint8Array;
  /** Vote extension data */
  extension: Uint8Array;
  /** Vote extension signature */
  extension_signature: Uint8Array;
}
export interface ExtendedCommitSigProtoMsg {
  type_url: "/tendermint.types.ExtendedCommitSig";
  value: Uint8Array;
}
/**
 * ExtendedCommitSig retains all the same fields as CommitSig but adds vote
 * extension-related fields. We use two signatures to ensure backwards compatibility.
 * That is the digest of the original signature is still the same in prior versions
 */
export interface ExtendedCommitSigAmino {
  block_id_flag: BlockIDFlag;
  validator_address: string;
  timestamp: string;
  signature: string;
  /** Vote extension data */
  extension: string;
  /** Vote extension signature */
  extension_signature: string;
}
export interface ExtendedCommitSigAminoMsg {
  type: "/tendermint.types.ExtendedCommitSig";
  value: ExtendedCommitSigAmino;
}
export interface Proposal {
  type: SignedMsgType;
  height: bigint;
  round: number;
  pol_round: number;
  block_id: BlockID;
  timestamp: Date;
  signature: Uint8Array;
}
export interface ProposalProtoMsg {
  type_url: "/tendermint.types.Proposal";
  value: Uint8Array;
}
export interface ProposalAmino {
  type: SignedMsgType;
  height: string;
  round: number;
  pol_round: number;
  block_id: BlockIDAmino;
  timestamp: string;
  signature: string;
}
export interface ProposalAminoMsg {
  type: "/tendermint.types.Proposal";
  value: ProposalAmino;
}
export interface SignedHeader {
  header?: Header;
  commit?: Commit;
}
export interface SignedHeaderProtoMsg {
  type_url: "/tendermint.types.SignedHeader";
  value: Uint8Array;
}
export interface SignedHeaderAmino {
  header?: HeaderAmino;
  commit?: CommitAmino;
}
export interface SignedHeaderAminoMsg {
  type: "/tendermint.types.SignedHeader";
  value: SignedHeaderAmino;
}
export interface LightBlock {
  signed_header?: SignedHeader;
  validator_set?: ValidatorSet;
}
export interface LightBlockProtoMsg {
  type_url: "/tendermint.types.LightBlock";
  value: Uint8Array;
}
export interface LightBlockAmino {
  signed_header?: SignedHeaderAmino;
  validator_set?: ValidatorSetAmino;
}
export interface LightBlockAminoMsg {
  type: "/tendermint.types.LightBlock";
  value: LightBlockAmino;
}
export interface BlockMeta {
  block_id: BlockID;
  block_size: bigint;
  header: Header;
  num_txs: bigint;
}
export interface BlockMetaProtoMsg {
  type_url: "/tendermint.types.BlockMeta";
  value: Uint8Array;
}
export interface BlockMetaAmino {
  block_id: BlockIDAmino;
  block_size: string;
  header: HeaderAmino;
  num_txs: string;
}
export interface BlockMetaAminoMsg {
  type: "/tendermint.types.BlockMeta";
  value: BlockMetaAmino;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
  root_hash: Uint8Array;
  data: Uint8Array;
  proof?: Proof;
}
export interface TxProofProtoMsg {
  type_url: "/tendermint.types.TxProof";
  value: Uint8Array;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofAmino {
  root_hash: string;
  data: string;
  proof?: ProofAmino;
}
export interface TxProofAminoMsg {
  type: "/tendermint.types.TxProof";
  value: TxProofAmino;
}
function createBasePartSetHeader(): PartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const PartSetHeader = {
  typeUrl: "/tendermint.types.PartSetHeader",
  is(o: any): o is PartSetHeader {
    return o && (o.$typeUrl === PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isAmino(o: any): o is PartSetHeaderAmino {
    return o && (o.$typeUrl === PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  encode(message: PartSetHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PartSetHeaderAmino): PartSetHeader {
    const message = createBasePartSetHeader();
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: PartSetHeader): PartSetHeaderAmino {
    const obj: any = {};
    obj.total = message.total === 0 ? undefined : message.total;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: PartSetHeaderAminoMsg): PartSetHeader {
    return PartSetHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: PartSetHeaderProtoMsg): PartSetHeader {
    return PartSetHeader.decode(message.value);
  },
  toProto(message: PartSetHeader): Uint8Array {
    return PartSetHeader.encode(message).finish();
  },
  toProtoMsg(message: PartSetHeader): PartSetHeaderProtoMsg {
    return {
      typeUrl: "/tendermint.types.PartSetHeader",
      value: PartSetHeader.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePart(): Part {
  return {
    index: 0,
    bytes: new Uint8Array(),
    proof: Proof.fromPartial({})
  };
}
export const Part = {
  typeUrl: "/tendermint.types.Part",
  is(o: any): o is Part {
    return o && (o.$typeUrl === Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && Proof.is(o.proof));
  },
  isAmino(o: any): o is PartAmino {
    return o && (o.$typeUrl === Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && Proof.isAmino(o.proof));
  },
  encode(message: Part, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.bytes.length !== 0) {
      writer.uint32(18).bytes(message.bytes);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Part {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.bytes = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Part>): Part {
    const message = createBasePart();
    message.index = object.index ?? 0;
    message.bytes = object.bytes ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: PartAmino): Part {
    const message = createBasePart();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.bytes !== undefined && object.bytes !== null) {
      message.bytes = bytesFromBase64(object.bytes);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: Part): PartAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: PartAminoMsg): Part {
    return Part.fromAmino(object.value);
  },
  fromProtoMsg(message: PartProtoMsg): Part {
    return Part.decode(message.value);
  },
  toProto(message: Part): Uint8Array {
    return Part.encode(message).finish();
  },
  toProtoMsg(message: Part): PartProtoMsg {
    return {
      typeUrl: "/tendermint.types.Part",
      value: Part.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Proof.registerTypeUrl();
  }
};
function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    part_set_header: PartSetHeader.fromPartial({})
  };
}
export const BlockID = {
  typeUrl: "/tendermint.types.BlockID",
  is(o: any): o is BlockID {
    return o && (o.$typeUrl === BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && PartSetHeader.is(o.part_set_header));
  },
  isAmino(o: any): o is BlockIDAmino {
    return o && (o.$typeUrl === BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && PartSetHeader.isAmino(o.part_set_header));
  },
  encode(message: BlockID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.part_set_header !== undefined) {
      PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.part_set_header = PartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? PartSetHeader.fromPartial(object.part_set_header) : undefined;
    return message;
  },
  fromAmino(object: BlockIDAmino): BlockID {
    const message = createBaseBlockID();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.part_set_header !== undefined && object.part_set_header !== null) {
      message.part_set_header = PartSetHeader.fromAmino(object.part_set_header);
    }
    return message;
  },
  toAmino(message: BlockID): BlockIDAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.part_set_header = message.part_set_header ? PartSetHeader.toAmino(message.part_set_header) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockIDAminoMsg): BlockID {
    return BlockID.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockIDProtoMsg): BlockID {
    return BlockID.decode(message.value);
  },
  toProto(message: BlockID): Uint8Array {
    return BlockID.encode(message).finish();
  },
  toProtoMsg(message: BlockID): BlockIDProtoMsg {
    return {
      typeUrl: "/tendermint.types.BlockID",
      value: BlockID.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PartSetHeader.registerTypeUrl();
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
    proposer_address: new Uint8Array()
  };
}
export const Header = {
  typeUrl: "/tendermint.types.Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || Consensus.is(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && Timestamp.is(o.time) && BlockID.is(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || Consensus.isAmino(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && BlockID.isAmino(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
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
    if (message.proposer_address.length !== 0) {
      writer.uint32(114).bytes(message.proposer_address);
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
          message.proposer_address = reader.bytes();
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
    message.proposer_address = object.proposer_address ?? new Uint8Array();
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
      message.proposer_address = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.version = message.version ? Consensus.toAmino(message.version) : undefined;
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.last_block_id = message.last_block_id ? BlockID.toAmino(message.last_block_id) : undefined;
    obj.last_commit_hash = message.last_commit_hash ? base64FromBytes(message.last_commit_hash) : undefined;
    obj.data_hash = message.data_hash ? base64FromBytes(message.data_hash) : undefined;
    obj.validators_hash = message.validators_hash ? base64FromBytes(message.validators_hash) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.consensus_hash = message.consensus_hash ? base64FromBytes(message.consensus_hash) : undefined;
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    obj.last_results_hash = message.last_results_hash ? base64FromBytes(message.last_results_hash) : undefined;
    obj.evidence_hash = message.evidence_hash ? base64FromBytes(message.evidence_hash) : undefined;
    obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/tendermint.types.Header",
      value: Header.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Consensus.registerTypeUrl();
    BlockID.registerTypeUrl();
  }
};
function createBaseData(): Data {
  return {
    txs: []
  };
}
export const Data = {
  typeUrl: "/tendermint.types.Data",
  is(o: any): o is Data {
    return o && (o.$typeUrl === Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  isAmino(o: any): o is DataAmino {
    return o && (o.$typeUrl === Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  encode(message: Data, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Data {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DataAmino): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Data): DataAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: DataAminoMsg): Data {
    return Data.fromAmino(object.value);
  },
  fromProtoMsg(message: DataProtoMsg): Data {
    return Data.decode(message.value);
  },
  toProto(message: Data): Uint8Array {
    return Data.encode(message).finish();
  },
  toProtoMsg(message: Data): DataProtoMsg {
    return {
      typeUrl: "/tendermint.types.Data",
      value: Data.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseVote(): Vote {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    block_id: BlockID.fromPartial({}),
    timestamp: new Date(),
    validator_address: new Uint8Array(),
    validator_index: 0,
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extension_signature: new Uint8Array()
  };
}
export const Vote = {
  typeUrl: "/tendermint.types.Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || isSet(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && BlockID.is(o.block_id) && Timestamp.is(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || isSet(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && BlockID.isAmino(o.block_id) && Timestamp.isAmino(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(50).bytes(message.validator_address);
    }
    if (message.validator_index !== 0) {
      writer.uint32(56).int32(message.validator_index);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(74).bytes(message.extension);
    }
    if (message.extension_signature.length !== 0) {
      writer.uint32(82).bytes(message.extension_signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.validator_address = reader.bytes();
          break;
        case 7:
          message.validator_index = reader.int32();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        case 9:
          message.extension = reader.bytes();
          break;
        case 10:
          message.extension_signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.validator_address = object.validator_address ?? new Uint8Array();
    message.validator_index = object.validator_index ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extension_signature = object.extension_signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.block_id = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = bytesFromBase64(object.validator_address);
    }
    if (object.validator_index !== undefined && object.validator_index !== null) {
      message.validator_index = object.validator_index;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = bytesFromBase64(object.extension);
    }
    if (object.extension_signature !== undefined && object.extension_signature !== null) {
      message.extension_signature = bytesFromBase64(object.extension_signature);
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
    obj.validator_index = message.validator_index === 0 ? undefined : message.validator_index;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.extension = message.extension ? base64FromBytes(message.extension) : undefined;
    obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/tendermint.types.Vote",
      value: Vote.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BlockID.registerTypeUrl();
  }
};
function createBaseCommit(): Commit {
  return {
    height: BigInt(0),
    round: 0,
    block_id: BlockID.fromPartial({}),
    signatures: []
  };
}
export const Commit = {
  typeUrl: "/tendermint.types.Commit",
  is(o: any): o is Commit {
    return o && (o.$typeUrl === Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && BlockID.is(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || CommitSig.is(o.signatures[0])));
  },
  isAmino(o: any): o is CommitAmino {
    return o && (o.$typeUrl === Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && BlockID.isAmino(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || CommitSig.isAmino(o.signatures[0])));
  },
  encode(message: Commit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.signatures) {
      CommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatures.push(CommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Commit>): Commit {
    const message = createBaseCommit();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitAmino): Commit {
    const message = createBaseCommit();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.block_id = BlockID.fromAmino(object.block_id);
    }
    message.signatures = object.signatures?.map(e => CommitSig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Commit): CommitAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => e ? CommitSig.toAmino(e) : undefined);
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: CommitAminoMsg): Commit {
    return Commit.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitProtoMsg): Commit {
    return Commit.decode(message.value);
  },
  toProto(message: Commit): Uint8Array {
    return Commit.encode(message).finish();
  },
  toProtoMsg(message: Commit): CommitProtoMsg {
    return {
      typeUrl: "/tendermint.types.Commit",
      value: Commit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BlockID.registerTypeUrl();
    CommitSig.registerTypeUrl();
  }
};
function createBaseCommitSig(): CommitSig {
  return {
    block_id_flag: 0,
    validator_address: new Uint8Array(),
    timestamp: new Date(),
    signature: new Uint8Array()
  };
}
export const CommitSig = {
  typeUrl: "/tendermint.types.CommitSig",
  is(o: any): o is CommitSig {
    return o && (o.$typeUrl === CommitSig.typeUrl || isSet(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  isAmino(o: any): o is CommitSigAmino {
    return o && (o.$typeUrl === CommitSig.typeUrl || isSet(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  encode(message: CommitSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block_id_flag !== 0) {
      writer.uint32(8).int32(message.block_id_flag);
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(18).bytes(message.validator_address);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id_flag = reader.int32() as any;
          break;
        case 2:
          message.validator_address = reader.bytes();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.block_id_flag = object.block_id_flag ?? 0;
    message.validator_address = object.validator_address ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CommitSigAmino): CommitSig {
    const message = createBaseCommitSig();
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.block_id_flag = object.block_id_flag;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = bytesFromBase64(object.validator_address);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: CommitSig): CommitSigAmino {
    const obj: any = {};
    obj.block_id_flag = message.block_id_flag === 0 ? undefined : message.block_id_flag;
    obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitSigAminoMsg): CommitSig {
    return CommitSig.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitSigProtoMsg): CommitSig {
    return CommitSig.decode(message.value);
  },
  toProto(message: CommitSig): Uint8Array {
    return CommitSig.encode(message).finish();
  },
  toProtoMsg(message: CommitSig): CommitSigProtoMsg {
    return {
      typeUrl: "/tendermint.types.CommitSig",
      value: CommitSig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseExtendedCommit(): ExtendedCommit {
  return {
    height: BigInt(0),
    round: 0,
    block_id: BlockID.fromPartial({}),
    extended_signatures: []
  };
}
export const ExtendedCommit = {
  typeUrl: "/tendermint.types.ExtendedCommit",
  is(o: any): o is ExtendedCommit {
    return o && (o.$typeUrl === ExtendedCommit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && BlockID.is(o.block_id) && Array.isArray(o.extended_signatures) && (!o.extended_signatures.length || ExtendedCommitSig.is(o.extended_signatures[0])));
  },
  isAmino(o: any): o is ExtendedCommitAmino {
    return o && (o.$typeUrl === ExtendedCommit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && BlockID.isAmino(o.block_id) && Array.isArray(o.extended_signatures) && (!o.extended_signatures.length || ExtendedCommitSig.isAmino(o.extended_signatures[0])));
  },
  encode(message: ExtendedCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.extended_signatures) {
      ExtendedCommitSig.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 4:
          message.extended_signatures.push(ExtendedCommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedCommit>): ExtendedCommit {
    const message = createBaseExtendedCommit();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.extended_signatures = object.extended_signatures?.map(e => ExtendedCommitSig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtendedCommitAmino): ExtendedCommit {
    const message = createBaseExtendedCommit();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.block_id = BlockID.fromAmino(object.block_id);
    }
    message.extended_signatures = object.extended_signatures?.map(e => ExtendedCommitSig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtendedCommit): ExtendedCommitAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
    if (message.extended_signatures) {
      obj.extended_signatures = message.extended_signatures.map(e => e ? ExtendedCommitSig.toAmino(e) : undefined);
    } else {
      obj.extended_signatures = message.extended_signatures;
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitAminoMsg): ExtendedCommit {
    return ExtendedCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedCommitProtoMsg): ExtendedCommit {
    return ExtendedCommit.decode(message.value);
  },
  toProto(message: ExtendedCommit): Uint8Array {
    return ExtendedCommit.encode(message).finish();
  },
  toProtoMsg(message: ExtendedCommit): ExtendedCommitProtoMsg {
    return {
      typeUrl: "/tendermint.types.ExtendedCommit",
      value: ExtendedCommit.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BlockID.registerTypeUrl();
    ExtendedCommitSig.registerTypeUrl();
  }
};
function createBaseExtendedCommitSig(): ExtendedCommitSig {
  return {
    block_id_flag: 0,
    validator_address: new Uint8Array(),
    timestamp: new Date(),
    signature: new Uint8Array(),
    extension: new Uint8Array(),
    extension_signature: new Uint8Array()
  };
}
export const ExtendedCommitSig = {
  typeUrl: "/tendermint.types.ExtendedCommitSig",
  is(o: any): o is ExtendedCommitSig {
    return o && (o.$typeUrl === ExtendedCommitSig.typeUrl || isSet(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
  },
  isAmino(o: any): o is ExtendedCommitSigAmino {
    return o && (o.$typeUrl === ExtendedCommitSig.typeUrl || isSet(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
  },
  encode(message: ExtendedCommitSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block_id_flag !== 0) {
      writer.uint32(8).int32(message.block_id_flag);
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(18).bytes(message.validator_address);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }
    if (message.extension.length !== 0) {
      writer.uint32(42).bytes(message.extension);
    }
    if (message.extension_signature.length !== 0) {
      writer.uint32(50).bytes(message.extension_signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id_flag = reader.int32() as any;
          break;
        case 2:
          message.validator_address = reader.bytes();
          break;
        case 3:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signature = reader.bytes();
          break;
        case 5:
          message.extension = reader.bytes();
          break;
        case 6:
          message.extension_signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedCommitSig>): ExtendedCommitSig {
    const message = createBaseExtendedCommitSig();
    message.block_id_flag = object.block_id_flag ?? 0;
    message.validator_address = object.validator_address ?? new Uint8Array();
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    message.extension = object.extension ?? new Uint8Array();
    message.extension_signature = object.extension_signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ExtendedCommitSigAmino): ExtendedCommitSig {
    const message = createBaseExtendedCommitSig();
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.block_id_flag = object.block_id_flag;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = bytesFromBase64(object.validator_address);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = bytesFromBase64(object.extension);
    }
    if (object.extension_signature !== undefined && object.extension_signature !== null) {
      message.extension_signature = bytesFromBase64(object.extension_signature);
    }
    return message;
  },
  toAmino(message: ExtendedCommitSig): ExtendedCommitSigAmino {
    const obj: any = {};
    obj.block_id_flag = message.block_id_flag === 0 ? undefined : message.block_id_flag;
    obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.extension = message.extension ? base64FromBytes(message.extension) : undefined;
    obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitSigAminoMsg): ExtendedCommitSig {
    return ExtendedCommitSig.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedCommitSigProtoMsg): ExtendedCommitSig {
    return ExtendedCommitSig.decode(message.value);
  },
  toProto(message: ExtendedCommitSig): Uint8Array {
    return ExtendedCommitSig.encode(message).finish();
  },
  toProtoMsg(message: ExtendedCommitSig): ExtendedCommitSigProtoMsg {
    return {
      typeUrl: "/tendermint.types.ExtendedCommitSig",
      value: ExtendedCommitSig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseProposal(): Proposal {
  return {
    type: 0,
    height: BigInt(0),
    round: 0,
    pol_round: 0,
    block_id: BlockID.fromPartial({}),
    timestamp: new Date(),
    signature: new Uint8Array()
  };
}
export const Proposal = {
  typeUrl: "/tendermint.types.Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || isSet(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && BlockID.is(o.block_id) && Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || isSet(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && BlockID.isAmino(o.block_id) && Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.pol_round !== 0) {
      writer.uint32(32).int32(message.pol_round);
    }
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(58).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.pol_round = reader.int32();
          break;
        case 5:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.round = object.round ?? 0;
    message.pol_round = object.pol_round ?? 0;
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.pol_round !== undefined && object.pol_round !== null) {
      message.pol_round = object.pol_round;
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.block_id = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round === 0 ? undefined : message.round;
    obj.pol_round = message.pol_round === 0 ? undefined : message.pol_round;
    obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/tendermint.types.Proposal",
      value: Proposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BlockID.registerTypeUrl();
  }
};
function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined
  };
}
export const SignedHeader = {
  typeUrl: "/tendermint.types.SignedHeader",
  is(o: any): o is SignedHeader {
    return o && o.$typeUrl === SignedHeader.typeUrl;
  },
  isAmino(o: any): o is SignedHeaderAmino {
    return o && o.$typeUrl === SignedHeader.typeUrl;
  },
  encode(message: SignedHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
    return message;
  },
  fromAmino(object: SignedHeaderAmino): SignedHeader {
    const message = createBaseSignedHeader();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = Commit.fromAmino(object.commit);
    }
    return message;
  },
  toAmino(message: SignedHeader): SignedHeaderAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignedHeaderAminoMsg): SignedHeader {
    return SignedHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: SignedHeaderProtoMsg): SignedHeader {
    return SignedHeader.decode(message.value);
  },
  toProto(message: SignedHeader): Uint8Array {
    return SignedHeader.encode(message).finish();
  },
  toProtoMsg(message: SignedHeader): SignedHeaderProtoMsg {
    return {
      typeUrl: "/tendermint.types.SignedHeader",
      value: SignedHeader.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Header.registerTypeUrl();
    Commit.registerTypeUrl();
  }
};
function createBaseLightBlock(): LightBlock {
  return {
    signed_header: undefined,
    validator_set: undefined
  };
}
export const LightBlock = {
  typeUrl: "/tendermint.types.LightBlock",
  is(o: any): o is LightBlock {
    return o && o.$typeUrl === LightBlock.typeUrl;
  },
  isAmino(o: any): o is LightBlockAmino {
    return o && o.$typeUrl === LightBlock.typeUrl;
  },
  encode(message: LightBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signed_header !== undefined) {
      SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_set !== undefined) {
      ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_header = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_set = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
    return message;
  },
  fromAmino(object: LightBlockAmino): LightBlock {
    const message = createBaseLightBlock();
    if (object.signed_header !== undefined && object.signed_header !== null) {
      message.signed_header = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validator_set = ValidatorSet.fromAmino(object.validator_set);
    }
    return message;
  },
  toAmino(message: LightBlock): LightBlockAmino {
    const obj: any = {};
    obj.signed_header = message.signed_header ? SignedHeader.toAmino(message.signed_header) : undefined;
    obj.validator_set = message.validator_set ? ValidatorSet.toAmino(message.validator_set) : undefined;
    return obj;
  },
  fromAminoMsg(object: LightBlockAminoMsg): LightBlock {
    return LightBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: LightBlockProtoMsg): LightBlock {
    return LightBlock.decode(message.value);
  },
  toProto(message: LightBlock): Uint8Array {
    return LightBlock.encode(message).finish();
  },
  toProtoMsg(message: LightBlock): LightBlockProtoMsg {
    return {
      typeUrl: "/tendermint.types.LightBlock",
      value: LightBlock.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SignedHeader.registerTypeUrl();
    ValidatorSet.registerTypeUrl();
  }
};
function createBaseBlockMeta(): BlockMeta {
  return {
    block_id: BlockID.fromPartial({}),
    block_size: BigInt(0),
    header: Header.fromPartial({}),
    num_txs: BigInt(0)
  };
}
export const BlockMeta = {
  typeUrl: "/tendermint.types.BlockMeta",
  is(o: any): o is BlockMeta {
    return o && (o.$typeUrl === BlockMeta.typeUrl || BlockID.is(o.block_id) && typeof o.block_size === "bigint" && Header.is(o.header) && typeof o.num_txs === "bigint");
  },
  isAmino(o: any): o is BlockMetaAmino {
    return o && (o.$typeUrl === BlockMeta.typeUrl || BlockID.isAmino(o.block_id) && typeof o.block_size === "bigint" && Header.isAmino(o.header) && typeof o.num_txs === "bigint");
  },
  encode(message: BlockMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
    }
    if (message.block_size !== BigInt(0)) {
      writer.uint32(16).int64(message.block_size);
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(26).fork()).ldelim();
    }
    if (message.num_txs !== BigInt(0)) {
      writer.uint32(32).int64(message.num_txs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block_size = reader.int64();
          break;
        case 3:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 4:
          message.num_txs = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlockMeta>): BlockMeta {
    const message = createBaseBlockMeta();
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block_size = object.block_size !== undefined && object.block_size !== null ? BigInt(object.block_size.toString()) : BigInt(0);
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.num_txs = object.num_txs !== undefined && object.num_txs !== null ? BigInt(object.num_txs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockMetaAmino): BlockMeta {
    const message = createBaseBlockMeta();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.block_id = BlockID.fromAmino(object.block_id);
    }
    if (object.block_size !== undefined && object.block_size !== null) {
      message.block_size = BigInt(object.block_size);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.num_txs !== undefined && object.num_txs !== null) {
      message.num_txs = BigInt(object.num_txs);
    }
    return message;
  },
  toAmino(message: BlockMeta): BlockMetaAmino {
    const obj: any = {};
    obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
    obj.block_size = message.block_size !== BigInt(0) ? message.block_size?.toString() : undefined;
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.num_txs = message.num_txs !== BigInt(0) ? message.num_txs?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockMetaAminoMsg): BlockMeta {
    return BlockMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockMetaProtoMsg): BlockMeta {
    return BlockMeta.decode(message.value);
  },
  toProto(message: BlockMeta): Uint8Array {
    return BlockMeta.encode(message).finish();
  },
  toProtoMsg(message: BlockMeta): BlockMetaProtoMsg {
    return {
      typeUrl: "/tendermint.types.BlockMeta",
      value: BlockMeta.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BlockID.registerTypeUrl();
    Header.registerTypeUrl();
  }
};
function createBaseTxProof(): TxProof {
  return {
    root_hash: new Uint8Array(),
    data: new Uint8Array(),
    proof: undefined
  };
}
export const TxProof = {
  typeUrl: "/tendermint.types.TxProof",
  is(o: any): o is TxProof {
    return o && (o.$typeUrl === TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is TxProofAmino {
    return o && (o.$typeUrl === TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: TxProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.root_hash.length !== 0) {
      writer.uint32(10).bytes(message.root_hash);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.root_hash = reader.bytes();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxProof>): TxProof {
    const message = createBaseTxProof();
    message.root_hash = object.root_hash ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
  fromAmino(object: TxProofAmino): TxProof {
    const message = createBaseTxProof();
    if (object.root_hash !== undefined && object.root_hash !== null) {
      message.root_hash = bytesFromBase64(object.root_hash);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: TxProof): TxProofAmino {
    const obj: any = {};
    obj.root_hash = message.root_hash ? base64FromBytes(message.root_hash) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxProofAminoMsg): TxProof {
    return TxProof.fromAmino(object.value);
  },
  fromProtoMsg(message: TxProofProtoMsg): TxProof {
    return TxProof.decode(message.value);
  },
  toProto(message: TxProof): Uint8Array {
    return TxProof.encode(message).finish();
  },
  toProtoMsg(message: TxProof): TxProofProtoMsg {
    return {
      typeUrl: "/tendermint.types.TxProof",
      value: TxProof.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Proof.registerTypeUrl();
  }
};