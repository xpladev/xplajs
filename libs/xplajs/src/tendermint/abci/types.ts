import { Timestamp } from "../../google/protobuf/timestamp";
import { ConsensusParams, ConsensusParamsAmino } from "../types/params";
import { ProofOps, ProofOpsAmino } from "../crypto/proof";
import { PublicKey, PublicKeyAmino } from "../crypto/keys";
import { BlockIDFlag } from "../types/validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes, isSet } from "../../helpers";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export const CheckTxTypeAmino = CheckTxType;
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;
    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";
    case CheckTxType.RECHECK:
      return "RECHECK";
    case CheckTxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,
  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,
  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export const ResponseOfferSnapshot_ResultAmino = ResponseOfferSnapshot_Result;
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;
    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;
    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;
    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";
    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";
    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";
    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";
    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";
    case ResponseOfferSnapshot_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,
  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,
  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,
  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,
  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,
  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export const ResponseApplySnapshotChunk_ResultAmino = ResponseApplySnapshotChunk_Result;
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;
    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;
    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;
    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;
    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";
    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";
    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";
    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";
    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";
    case ResponseApplySnapshotChunk_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseProcessProposal_ProposalStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export const ResponseProcessProposal_ProposalStatusAmino = ResponseProcessProposal_ProposalStatus;
export function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseProcessProposal_ProposalStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseProcessProposal_ProposalStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseProcessProposal_ProposalStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseProcessProposal_ProposalStatus.UNRECOGNIZED;
  }
}
export function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string {
  switch (object) {
    case ResponseProcessProposal_ProposalStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseProcessProposal_ProposalStatus.ACCEPT:
      return "ACCEPT";
    case ResponseProcessProposal_ProposalStatus.REJECT:
      return "REJECT";
    case ResponseProcessProposal_ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ResponseVerifyVoteExtension_VerifyStatus {
  UNKNOWN = 0,
  ACCEPT = 1,
  /**
   * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
   * Incorrectly implementing this thus has liveness implications as it may affect
   * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
   * Honest nodes should never be rejected.
   */
  REJECT = 2,
  UNRECOGNIZED = -1,
}
export const ResponseVerifyVoteExtension_VerifyStatusAmino = ResponseVerifyVoteExtension_VerifyStatus;
export function responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): ResponseVerifyVoteExtension_VerifyStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN;
    case 1:
    case "ACCEPT":
      return ResponseVerifyVoteExtension_VerifyStatus.ACCEPT;
    case 2:
    case "REJECT":
      return ResponseVerifyVoteExtension_VerifyStatus.REJECT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED;
  }
}
export function responseVerifyVoteExtension_VerifyStatusToJSON(object: ResponseVerifyVoteExtension_VerifyStatus): string {
  switch (object) {
    case ResponseVerifyVoteExtension_VerifyStatus.UNKNOWN:
      return "UNKNOWN";
    case ResponseVerifyVoteExtension_VerifyStatus.ACCEPT:
      return "ACCEPT";
    case ResponseVerifyVoteExtension_VerifyStatus.REJECT:
      return "REJECT";
    case ResponseVerifyVoteExtension_VerifyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MisbehaviorType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export const MisbehaviorTypeAmino = MisbehaviorType;
export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return MisbehaviorType.UNKNOWN;
    case 1:
    case "DUPLICATE_VOTE":
      return MisbehaviorType.DUPLICATE_VOTE;
    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return MisbehaviorType.LIGHT_CLIENT_ATTACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MisbehaviorType.UNRECOGNIZED;
  }
}
export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
  switch (object) {
    case MisbehaviorType.UNKNOWN:
      return "UNKNOWN";
    case MisbehaviorType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";
    case MisbehaviorType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";
    case MisbehaviorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  init_chain?: RequestInitChain;
  query?: RequestQuery;
  check_tx?: RequestCheckTx;
  commit?: RequestCommit;
  list_snapshots?: RequestListSnapshots;
  offer_snapshot?: RequestOfferSnapshot;
  load_snapshot_chunk?: RequestLoadSnapshotChunk;
  apply_snapshot_chunk?: RequestApplySnapshotChunk;
  prepare_proposal?: RequestPrepareProposal;
  process_proposal?: RequestProcessProposal;
  extend_vote?: RequestExtendVote;
  verify_vote_extension?: RequestVerifyVoteExtension;
  finalize_block?: RequestFinalizeBlock;
}
export interface RequestProtoMsg {
  type_url: "/tendermint.abci.Request";
  value: Uint8Array;
}
export interface RequestAmino {
  echo?: RequestEchoAmino;
  flush?: RequestFlushAmino;
  info?: RequestInfoAmino;
  init_chain?: RequestInitChainAmino;
  query?: RequestQueryAmino;
  check_tx?: RequestCheckTxAmino;
  commit?: RequestCommitAmino;
  list_snapshots?: RequestListSnapshotsAmino;
  offer_snapshot?: RequestOfferSnapshotAmino;
  load_snapshot_chunk?: RequestLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: RequestApplySnapshotChunkAmino;
  prepare_proposal?: RequestPrepareProposalAmino;
  process_proposal?: RequestProcessProposalAmino;
  extend_vote?: RequestExtendVoteAmino;
  verify_vote_extension?: RequestVerifyVoteExtensionAmino;
  finalize_block?: RequestFinalizeBlockAmino;
}
export interface RequestAminoMsg {
  type: "/tendermint.abci.Request";
  value: RequestAmino;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoProtoMsg {
  type_url: "/tendermint.abci.RequestEcho";
  value: Uint8Array;
}
export interface RequestEchoAmino {
  message: string;
}
export interface RequestEchoAminoMsg {
  type: "/tendermint.abci.RequestEcho";
  value: RequestEchoAmino;
}
export interface RequestFlush {}
export interface RequestFlushProtoMsg {
  type_url: "/tendermint.abci.RequestFlush";
  value: Uint8Array;
}
export interface RequestFlushAmino {}
export interface RequestFlushAminoMsg {
  type: "/tendermint.abci.RequestFlush";
  value: RequestFlushAmino;
}
export interface RequestInfo {
  version: string;
  block_version: bigint;
  p2p_version: bigint;
  abci_version: string;
}
export interface RequestInfoProtoMsg {
  type_url: "/tendermint.abci.RequestInfo";
  value: Uint8Array;
}
export interface RequestInfoAmino {
  version: string;
  block_version: string;
  p2p_version: string;
  abci_version: string;
}
export interface RequestInfoAminoMsg {
  type: "/tendermint.abci.RequestInfo";
  value: RequestInfoAmino;
}
export interface RequestInitChain {
  time: Date;
  chain_id: string;
  consensus_params?: ConsensusParams;
  validators: ValidatorUpdate[];
  app_state_bytes: Uint8Array;
  initial_height: bigint;
}
export interface RequestInitChainProtoMsg {
  type_url: "/tendermint.abci.RequestInitChain";
  value: Uint8Array;
}
export interface RequestInitChainAmino {
  time: string;
  chain_id: string;
  consensus_params?: ConsensusParamsAmino;
  validators: ValidatorUpdateAmino[];
  app_state_bytes: string;
  initial_height: string;
}
export interface RequestInitChainAminoMsg {
  type: "/tendermint.abci.RequestInitChain";
  value: RequestInitChainAmino;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: bigint;
  prove: boolean;
}
export interface RequestQueryProtoMsg {
  type_url: "/tendermint.abci.RequestQuery";
  value: Uint8Array;
}
export interface RequestQueryAmino {
  data: string;
  path: string;
  height: string;
  prove: boolean;
}
export interface RequestQueryAminoMsg {
  type: "/tendermint.abci.RequestQuery";
  value: RequestQueryAmino;
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxProtoMsg {
  type_url: "/tendermint.abci.RequestCheckTx";
  value: Uint8Array;
}
export interface RequestCheckTxAmino {
  tx: string;
  type: CheckTxType;
}
export interface RequestCheckTxAminoMsg {
  type: "/tendermint.abci.RequestCheckTx";
  value: RequestCheckTxAmino;
}
export interface RequestCommit {}
export interface RequestCommitProtoMsg {
  type_url: "/tendermint.abci.RequestCommit";
  value: Uint8Array;
}
export interface RequestCommitAmino {}
export interface RequestCommitAminoMsg {
  type: "/tendermint.abci.RequestCommit";
  value: RequestCommitAmino;
}
/** lists available snapshots */
export interface RequestListSnapshots {}
export interface RequestListSnapshotsProtoMsg {
  type_url: "/tendermint.abci.RequestListSnapshots";
  value: Uint8Array;
}
/** lists available snapshots */
export interface RequestListSnapshotsAmino {}
export interface RequestListSnapshotsAminoMsg {
  type: "/tendermint.abci.RequestListSnapshots";
  value: RequestListSnapshotsAmino;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot?: Snapshot;
  /** light client-verified app hash for snapshot height */
  app_hash: Uint8Array;
}
export interface RequestOfferSnapshotProtoMsg {
  type_url: "/tendermint.abci.RequestOfferSnapshot";
  value: Uint8Array;
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshotAmino {
  /** snapshot offered by peers */
  snapshot?: SnapshotAmino;
  /** light client-verified app hash for snapshot height */
  app_hash: string;
}
export interface RequestOfferSnapshotAminoMsg {
  type: "/tendermint.abci.RequestOfferSnapshot";
  value: RequestOfferSnapshotAmino;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
  height: bigint;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkProtoMsg {
  type_url: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunkAmino {
  height: string;
  format: number;
  chunk: number;
}
export interface RequestLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestLoadSnapshotChunk";
  value: RequestLoadSnapshotChunkAmino;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface RequestApplySnapshotChunkProtoMsg {
  type_url: "/tendermint.abci.RequestApplySnapshotChunk";
  value: Uint8Array;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunkAmino {
  index: number;
  chunk: string;
  sender: string;
}
export interface RequestApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.RequestApplySnapshotChunk";
  value: RequestApplySnapshotChunkAmino;
}
export interface RequestPrepareProposal {
  /** the modified transactions cannot exceed this size. */
  max_tx_bytes: bigint;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: Uint8Array[];
  local_last_commit: ExtendedCommitInfo;
  misbehavior: Misbehavior[];
  height: bigint;
  time: Date;
  next_validators_hash: Uint8Array;
  /** address of the public key of the validator proposing the block. */
  proposer_address: Uint8Array;
}
export interface RequestPrepareProposalProtoMsg {
  type_url: "/tendermint.abci.RequestPrepareProposal";
  value: Uint8Array;
}
export interface RequestPrepareProposalAmino {
  /** the modified transactions cannot exceed this size. */
  max_tx_bytes: string;
  /**
   * txs is an array of transactions that will be included in a block,
   * sent to the app for possible modifications.
   */
  txs: string[];
  local_last_commit: ExtendedCommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  height: string;
  time: string;
  next_validators_hash: string;
  /** address of the public key of the validator proposing the block. */
  proposer_address: string;
}
export interface RequestPrepareProposalAminoMsg {
  type: "/tendermint.abci.RequestPrepareProposal";
  value: RequestPrepareProposalAmino;
}
export interface RequestProcessProposal {
  txs: Uint8Array[];
  proposed_last_commit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: Uint8Array;
  height: bigint;
  time: Date;
  next_validators_hash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposer_address: Uint8Array;
}
export interface RequestProcessProposalProtoMsg {
  type_url: "/tendermint.abci.RequestProcessProposal";
  value: Uint8Array;
}
export interface RequestProcessProposalAmino {
  txs: string[];
  proposed_last_commit: CommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  /** hash is the merkle root hash of the fields of the proposed block. */
  hash: string;
  height: string;
  time: string;
  next_validators_hash: string;
  /** address of the public key of the original proposer of the block. */
  proposer_address: string;
}
export interface RequestProcessProposalAminoMsg {
  type: "/tendermint.abci.RequestProcessProposal";
  value: RequestProcessProposalAmino;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVote {
  /** the hash of the block that this vote may be referring to */
  hash: Uint8Array;
  /** the height of the extended vote */
  height: bigint;
  /** info of the block that this vote may be referring to */
  time: Date;
  txs: Uint8Array[];
  proposed_last_commit: CommitInfo;
  misbehavior: Misbehavior[];
  next_validators_hash: Uint8Array;
  /** address of the public key of the original proposer of the block. */
  proposer_address: Uint8Array;
}
export interface RequestExtendVoteProtoMsg {
  type_url: "/tendermint.abci.RequestExtendVote";
  value: Uint8Array;
}
/** Extends a vote with application-injected data */
export interface RequestExtendVoteAmino {
  /** the hash of the block that this vote may be referring to */
  hash: string;
  /** the height of the extended vote */
  height: string;
  /** info of the block that this vote may be referring to */
  time: string;
  txs: string[];
  proposed_last_commit: CommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  next_validators_hash: string;
  /** address of the public key of the original proposer of the block. */
  proposer_address: string;
}
export interface RequestExtendVoteAminoMsg {
  type: "/tendermint.abci.RequestExtendVote";
  value: RequestExtendVoteAmino;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
  /** the hash of the block that this received vote corresponds to */
  hash: Uint8Array;
  /** the validator that signed the vote extension */
  validator_address: Uint8Array;
  height: bigint;
  vote_extension: Uint8Array;
}
export interface RequestVerifyVoteExtensionProtoMsg {
  type_url: "/tendermint.abci.RequestVerifyVoteExtension";
  value: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtensionAmino {
  /** the hash of the block that this received vote corresponds to */
  hash: string;
  /** the validator that signed the vote extension */
  validator_address: string;
  height: string;
  vote_extension: string;
}
export interface RequestVerifyVoteExtensionAminoMsg {
  type: "/tendermint.abci.RequestVerifyVoteExtension";
  value: RequestVerifyVoteExtensionAmino;
}
export interface RequestFinalizeBlock {
  txs: Uint8Array[];
  decided_last_commit: CommitInfo;
  misbehavior: Misbehavior[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: Uint8Array;
  height: bigint;
  time: Date;
  next_validators_hash: Uint8Array;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposer_address: Uint8Array;
}
export interface RequestFinalizeBlockProtoMsg {
  type_url: "/tendermint.abci.RequestFinalizeBlock";
  value: Uint8Array;
}
export interface RequestFinalizeBlockAmino {
  txs: string[];
  decided_last_commit: CommitInfoAmino;
  misbehavior: MisbehaviorAmino[];
  /** hash is the merkle root hash of the fields of the decided block. */
  hash: string;
  height: string;
  time: string;
  next_validators_hash: string;
  /** proposer_address is the address of the public key of the original proposer of the block. */
  proposer_address: string;
}
export interface RequestFinalizeBlockAminoMsg {
  type: "/tendermint.abci.RequestFinalizeBlock";
  value: RequestFinalizeBlockAmino;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  init_chain?: ResponseInitChain;
  query?: ResponseQuery;
  check_tx?: ResponseCheckTx;
  commit?: ResponseCommit;
  list_snapshots?: ResponseListSnapshots;
  offer_snapshot?: ResponseOfferSnapshot;
  load_snapshot_chunk?: ResponseLoadSnapshotChunk;
  apply_snapshot_chunk?: ResponseApplySnapshotChunk;
  prepare_proposal?: ResponsePrepareProposal;
  process_proposal?: ResponseProcessProposal;
  extend_vote?: ResponseExtendVote;
  verify_vote_extension?: ResponseVerifyVoteExtension;
  finalize_block?: ResponseFinalizeBlock;
}
export interface ResponseProtoMsg {
  type_url: "/tendermint.abci.Response";
  value: Uint8Array;
}
export interface ResponseAmino {
  exception?: ResponseExceptionAmino;
  echo?: ResponseEchoAmino;
  flush?: ResponseFlushAmino;
  info?: ResponseInfoAmino;
  init_chain?: ResponseInitChainAmino;
  query?: ResponseQueryAmino;
  check_tx?: ResponseCheckTxAmino;
  commit?: ResponseCommitAmino;
  list_snapshots?: ResponseListSnapshotsAmino;
  offer_snapshot?: ResponseOfferSnapshotAmino;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkAmino;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkAmino;
  prepare_proposal?: ResponsePrepareProposalAmino;
  process_proposal?: ResponseProcessProposalAmino;
  extend_vote?: ResponseExtendVoteAmino;
  verify_vote_extension?: ResponseVerifyVoteExtensionAmino;
  finalize_block?: ResponseFinalizeBlockAmino;
}
export interface ResponseAminoMsg {
  type: "/tendermint.abci.Response";
  value: ResponseAmino;
}
/** nondeterministic */
export interface ResponseException {
  error: string;
}
export interface ResponseExceptionProtoMsg {
  type_url: "/tendermint.abci.ResponseException";
  value: Uint8Array;
}
/** nondeterministic */
export interface ResponseExceptionAmino {
  error: string;
}
export interface ResponseExceptionAminoMsg {
  type: "/tendermint.abci.ResponseException";
  value: ResponseExceptionAmino;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoProtoMsg {
  type_url: "/tendermint.abci.ResponseEcho";
  value: Uint8Array;
}
export interface ResponseEchoAmino {
  message: string;
}
export interface ResponseEchoAminoMsg {
  type: "/tendermint.abci.ResponseEcho";
  value: ResponseEchoAmino;
}
export interface ResponseFlush {}
export interface ResponseFlushProtoMsg {
  type_url: "/tendermint.abci.ResponseFlush";
  value: Uint8Array;
}
export interface ResponseFlushAmino {}
export interface ResponseFlushAminoMsg {
  type: "/tendermint.abci.ResponseFlush";
  value: ResponseFlushAmino;
}
export interface ResponseInfo {
  data: string;
  version: string;
  app_version: bigint;
  last_block_height: bigint;
  last_block_app_hash: Uint8Array;
}
export interface ResponseInfoProtoMsg {
  type_url: "/tendermint.abci.ResponseInfo";
  value: Uint8Array;
}
export interface ResponseInfoAmino {
  data: string;
  version: string;
  app_version: string;
  last_block_height: string;
  last_block_app_hash: string;
}
export interface ResponseInfoAminoMsg {
  type: "/tendermint.abci.ResponseInfo";
  value: ResponseInfoAmino;
}
export interface ResponseInitChain {
  consensus_params?: ConsensusParams;
  validators: ValidatorUpdate[];
  app_hash: Uint8Array;
}
export interface ResponseInitChainProtoMsg {
  type_url: "/tendermint.abci.ResponseInitChain";
  value: Uint8Array;
}
export interface ResponseInitChainAmino {
  consensus_params?: ConsensusParamsAmino;
  validators: ValidatorUpdateAmino[];
  app_hash: string;
}
export interface ResponseInitChainAminoMsg {
  type: "/tendermint.abci.ResponseInitChain";
  value: ResponseInitChainAmino;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: bigint;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops?: ProofOps;
  height: bigint;
  codespace: string;
}
export interface ResponseQueryProtoMsg {
  type_url: "/tendermint.abci.ResponseQuery";
  value: Uint8Array;
}
export interface ResponseQueryAmino {
  code: number;
  /** bytes data = 2; // use "value" instead. */
  log: string;
  /** nondeterministic */
  info: string;
  index: string;
  key: string;
  value: string;
  proof_ops?: ProofOpsAmino;
  height: string;
  codespace: string;
}
export interface ResponseQueryAminoMsg {
  type: "/tendermint.abci.ResponseQuery";
  value: ResponseQueryAmino;
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: Event[];
  codespace: string;
}
export interface ResponseCheckTxProtoMsg {
  type_url: "/tendermint.abci.ResponseCheckTx";
  value: Uint8Array;
}
export interface ResponseCheckTxAmino {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: EventAmino[];
  codespace: string;
}
export interface ResponseCheckTxAminoMsg {
  type: "/tendermint.abci.ResponseCheckTx";
  value: ResponseCheckTxAmino;
}
export interface ResponseCommit {
  retain_height: bigint;
}
export interface ResponseCommitProtoMsg {
  type_url: "/tendermint.abci.ResponseCommit";
  value: Uint8Array;
}
export interface ResponseCommitAmino {
  retain_height: string;
}
export interface ResponseCommitAminoMsg {
  type: "/tendermint.abci.ResponseCommit";
  value: ResponseCommitAmino;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsProtoMsg {
  type_url: "/tendermint.abci.ResponseListSnapshots";
  value: Uint8Array;
}
export interface ResponseListSnapshotsAmino {
  snapshots: SnapshotAmino[];
}
export interface ResponseListSnapshotsAminoMsg {
  type: "/tendermint.abci.ResponseListSnapshots";
  value: ResponseListSnapshotsAmino;
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotProtoMsg {
  type_url: "/tendermint.abci.ResponseOfferSnapshot";
  value: Uint8Array;
}
export interface ResponseOfferSnapshotAmino {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotAminoMsg {
  type: "/tendermint.abci.ResponseOfferSnapshot";
  value: ResponseOfferSnapshotAmino;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkProtoMsg {
  type_url: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: Uint8Array;
}
export interface ResponseLoadSnapshotChunkAmino {
  chunk: string;
}
export interface ResponseLoadSnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseLoadSnapshotChunk";
  value: ResponseLoadSnapshotChunkAmino;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetch_chunks: number[];
  /** Chunk senders to reject and ban */
  reject_senders: string[];
}
export interface ResponseApplySnapshotChunkProtoMsg {
  type_url: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: Uint8Array;
}
export interface ResponseApplySnapshotChunkAmino {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */
  refetch_chunks: number[];
  /** Chunk senders to reject and ban */
  reject_senders: string[];
}
export interface ResponseApplySnapshotChunkAminoMsg {
  type: "/tendermint.abci.ResponseApplySnapshotChunk";
  value: ResponseApplySnapshotChunkAmino;
}
export interface ResponsePrepareProposal {
  txs: Uint8Array[];
}
export interface ResponsePrepareProposalProtoMsg {
  type_url: "/tendermint.abci.ResponsePrepareProposal";
  value: Uint8Array;
}
export interface ResponsePrepareProposalAmino {
  txs: string[];
}
export interface ResponsePrepareProposalAminoMsg {
  type: "/tendermint.abci.ResponsePrepareProposal";
  value: ResponsePrepareProposalAmino;
}
export interface ResponseProcessProposal {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalProtoMsg {
  type_url: "/tendermint.abci.ResponseProcessProposal";
  value: Uint8Array;
}
export interface ResponseProcessProposalAmino {
  status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseProcessProposalAminoMsg {
  type: "/tendermint.abci.ResponseProcessProposal";
  value: ResponseProcessProposalAmino;
}
export interface ResponseExtendVote {
  vote_extension: Uint8Array;
}
export interface ResponseExtendVoteProtoMsg {
  type_url: "/tendermint.abci.ResponseExtendVote";
  value: Uint8Array;
}
export interface ResponseExtendVoteAmino {
  vote_extension: string;
}
export interface ResponseExtendVoteAminoMsg {
  type: "/tendermint.abci.ResponseExtendVote";
  value: ResponseExtendVoteAmino;
}
export interface ResponseVerifyVoteExtension {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseVerifyVoteExtensionProtoMsg {
  type_url: "/tendermint.abci.ResponseVerifyVoteExtension";
  value: Uint8Array;
}
export interface ResponseVerifyVoteExtensionAmino {
  status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseVerifyVoteExtensionAminoMsg {
  type: "/tendermint.abci.ResponseVerifyVoteExtension";
  value: ResponseVerifyVoteExtensionAmino;
}
export interface ResponseFinalizeBlock {
  /** set of block events emmitted as part of executing the block */
  events: Event[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  tx_results: ExecTxResult[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validator_updates: ValidatorUpdate[];
  /** updates to the consensus params, if any. */
  consensus_param_updates?: ConsensusParams;
  /**
   * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
   * deterministic. It is up to the application to decide which algorithm to use.
   */
  app_hash: Uint8Array;
}
export interface ResponseFinalizeBlockProtoMsg {
  type_url: "/tendermint.abci.ResponseFinalizeBlock";
  value: Uint8Array;
}
export interface ResponseFinalizeBlockAmino {
  /** set of block events emmitted as part of executing the block */
  events: EventAmino[];
  /**
   * the result of executing each transaction including the events
   * the particular transction emitted. This should match the order
   * of the transactions delivered in the block itself
   */
  tx_results: ExecTxResultAmino[];
  /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
  validator_updates: ValidatorUpdateAmino[];
  /** updates to the consensus params, if any. */
  consensus_param_updates?: ConsensusParamsAmino;
  /**
   * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
   * deterministic. It is up to the application to decide which algorithm to use.
   */
  app_hash: string;
}
export interface ResponseFinalizeBlockAminoMsg {
  type: "/tendermint.abci.ResponseFinalizeBlock";
  value: ResponseFinalizeBlockAmino;
}
export interface CommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface CommitInfoProtoMsg {
  type_url: "/tendermint.abci.CommitInfo";
  value: Uint8Array;
}
export interface CommitInfoAmino {
  round: number;
  votes: VoteInfoAmino[];
}
export interface CommitInfoAminoMsg {
  type: "/tendermint.abci.CommitInfo";
  value: CommitInfoAmino;
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfo {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfo[];
}
export interface ExtendedCommitInfoProtoMsg {
  type_url: "/tendermint.abci.ExtendedCommitInfo";
  value: Uint8Array;
}
/**
 * ExtendedCommitInfo is similar to CommitInfo except that it is only used in
 * the PrepareProposal request such that CometBFT can provide vote extensions
 * to the application.
 */
export interface ExtendedCommitInfoAmino {
  /** The round at which the block proposer decided in the previous height. */
  round: number;
  /**
   * List of validators' addresses in the last validator set with their voting
   * information, including vote extensions.
   */
  votes: ExtendedVoteInfoAmino[];
}
export interface ExtendedCommitInfoAminoMsg {
  type: "/tendermint.abci.ExtendedCommitInfo";
  value: ExtendedCommitInfoAmino;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
export interface EventProtoMsg {
  type_url: "/tendermint.abci.Event";
  value: Uint8Array;
}
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface EventAmino {
  type: string;
  attributes: EventAttributeAmino[];
}
export interface EventAminoMsg {
  type: "/tendermint.abci.Event";
  value: EventAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeProtoMsg {
  type_url: "/tendermint.abci.EventAttribute";
  value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
  key: string;
  value: string;
  /** nondeterministic */
  index: boolean;
}
export interface EventAttributeAminoMsg {
  type: "/tendermint.abci.EventAttribute";
  value: EventAttributeAmino;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: bigint;
  gas_used: bigint;
  events: Event[];
  codespace: string;
}
export interface ExecTxResultProtoMsg {
  type_url: "/tendermint.abci.ExecTxResult";
  value: Uint8Array;
}
/**
 * ExecTxResult contains results of executing one individual transaction.
 * 
 * * Its structure is equivalent to #ResponseDeliverTx which will be deprecated/deleted
 */
export interface ExecTxResultAmino {
  code: number;
  data: string;
  /** nondeterministic */
  log: string;
  /** nondeterministic */
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: EventAmino[];
  codespace: string;
}
export interface ExecTxResultAminoMsg {
  type: "/tendermint.abci.ExecTxResult";
  value: ExecTxResultAmino;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResult {
  height: bigint;
  index: number;
  tx: Uint8Array;
  result: ExecTxResult;
}
export interface TxResultProtoMsg {
  type_url: "/tendermint.abci.TxResult";
  value: Uint8Array;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */
export interface TxResultAmino {
  height: string;
  index: number;
  tx: string;
  result: ExecTxResultAmino;
}
export interface TxResultAminoMsg {
  type: "/tendermint.abci.TxResult";
  value: TxResultAmino;
}
export interface Validator {
  /** The first 20 bytes of SHA256(public key) */
  address: Uint8Array;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: bigint;
}
export interface ValidatorProtoMsg {
  type_url: "/tendermint.abci.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  /** The first 20 bytes of SHA256(public key) */
  address: string;
  /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
  power: string;
}
export interface ValidatorAminoMsg {
  type: "/tendermint.abci.Validator";
  value: ValidatorAmino;
}
export interface ValidatorUpdate {
  pub_key: PublicKey;
  power: bigint;
}
export interface ValidatorUpdateProtoMsg {
  type_url: "/tendermint.abci.ValidatorUpdate";
  value: Uint8Array;
}
export interface ValidatorUpdateAmino {
  pub_key: PublicKeyAmino;
  power: string;
}
export interface ValidatorUpdateAminoMsg {
  type: "/tendermint.abci.ValidatorUpdate";
  value: ValidatorUpdateAmino;
}
export interface VoteInfo {
  validator: Validator;
  block_id_flag: BlockIDFlag;
}
export interface VoteInfoProtoMsg {
  type_url: "/tendermint.abci.VoteInfo";
  value: Uint8Array;
}
export interface VoteInfoAmino {
  validator: ValidatorAmino;
  block_id_flag: BlockIDFlag;
}
export interface VoteInfoAminoMsg {
  type: "/tendermint.abci.VoteInfo";
  value: VoteInfoAmino;
}
export interface ExtendedVoteInfo {
  /** The validator that sent the vote. */
  validator: Validator;
  /** Non-deterministic extension provided by the sending validator's application. */
  vote_extension: Uint8Array;
  /** Vote extension signature created by CometBFT */
  extension_signature: Uint8Array;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  block_id_flag: BlockIDFlag;
}
export interface ExtendedVoteInfoProtoMsg {
  type_url: "/tendermint.abci.ExtendedVoteInfo";
  value: Uint8Array;
}
export interface ExtendedVoteInfoAmino {
  /** The validator that sent the vote. */
  validator: ValidatorAmino;
  /** Non-deterministic extension provided by the sending validator's application. */
  vote_extension: string;
  /** Vote extension signature created by CometBFT */
  extension_signature: string;
  /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
  block_id_flag: BlockIDFlag;
}
export interface ExtendedVoteInfoAminoMsg {
  type: "/tendermint.abci.ExtendedVoteInfo";
  value: ExtendedVoteInfoAmino;
}
export interface Misbehavior {
  type: MisbehaviorType;
  /** The offending validator */
  validator: Validator;
  /** The height when the offense occurred */
  height: bigint;
  /** The corresponding time where the offense occurred */
  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  total_voting_power: bigint;
}
export interface MisbehaviorProtoMsg {
  type_url: "/tendermint.abci.Misbehavior";
  value: Uint8Array;
}
export interface MisbehaviorAmino {
  type: MisbehaviorType;
  /** The offending validator */
  validator: ValidatorAmino;
  /** The height when the offense occurred */
  height: string;
  /** The corresponding time where the offense occurred */
  time: string;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */
  total_voting_power: string;
}
export interface MisbehaviorAminoMsg {
  type: "/tendermint.abci.Misbehavior";
  value: MisbehaviorAmino;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: bigint;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: Uint8Array;
  /** Arbitrary application metadata */
  metadata: Uint8Array;
}
export interface SnapshotProtoMsg {
  type_url: "/tendermint.abci.Snapshot";
  value: Uint8Array;
}
export interface SnapshotAmino {
  /** The height at which the snapshot was taken */
  height: string;
  /** The application-specific snapshot format */
  format: number;
  /** Number of chunks in the snapshot */
  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */
  hash: string;
  /** Arbitrary application metadata */
  metadata: string;
}
export interface SnapshotAminoMsg {
  type: "/tendermint.abci.Snapshot";
  value: SnapshotAmino;
}
function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    init_chain: undefined,
    query: undefined,
    check_tx: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined,
    prepare_proposal: undefined,
    process_proposal: undefined,
    extend_vote: undefined,
    verify_vote_extension: undefined,
    finalize_block: undefined
  };
}
export const Request = {
  typeUrl: "/tendermint.abci.Request",
  is(o: any): o is Request {
    return o && o.$typeUrl === Request.typeUrl;
  },
  isAmino(o: any): o is RequestAmino {
    return o && o.$typeUrl === Request.typeUrl;
  },
  encode(message: Request, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }
    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }
    if (message.init_chain !== undefined) {
      RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }
    if (message.check_tx !== undefined) {
      RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }
    if (message.list_snapshots !== undefined) {
      RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
    }
    if (message.offer_snapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
    }
    if (message.load_snapshot_chunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
    }
    if (message.apply_snapshot_chunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.prepare_proposal !== undefined) {
      RequestPrepareProposal.encode(message.prepare_proposal, writer.uint32(130).fork()).ldelim();
    }
    if (message.process_proposal !== undefined) {
      RequestProcessProposal.encode(message.process_proposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.extend_vote !== undefined) {
      RequestExtendVote.encode(message.extend_vote, writer.uint32(146).fork()).ldelim();
    }
    if (message.verify_vote_extension !== undefined) {
      RequestVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(154).fork()).ldelim();
    }
    if (message.finalize_block !== undefined) {
      RequestFinalizeBlock.encode(message.finalize_block, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Request {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;
        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;
        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;
        case 5:
          message.init_chain = RequestInitChain.decode(reader, reader.uint32());
          break;
        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 8:
          message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
          break;
        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;
        case 12:
          message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;
        case 13:
          message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 14:
          message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 15:
          message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.prepare_proposal = RequestPrepareProposal.decode(reader, reader.uint32());
          break;
        case 17:
          message.process_proposal = RequestProcessProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.extend_vote = RequestExtendVote.decode(reader, reader.uint32());
          break;
        case 19:
          message.verify_vote_extension = RequestVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 20:
          message.finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? RequestPrepareProposal.fromPartial(object.prepare_proposal) : undefined;
    message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? RequestProcessProposal.fromPartial(object.process_proposal) : undefined;
    message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? RequestExtendVote.fromPartial(object.extend_vote) : undefined;
    message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? RequestVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
    message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? RequestFinalizeBlock.fromPartial(object.finalize_block) : undefined;
    return message;
  },
  fromAmino(object: RequestAmino): Request {
    const message = createBaseRequest();
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = RequestEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = RequestFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = RequestInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.init_chain = RequestInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = RequestQuery.fromAmino(object.query);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.check_tx = RequestCheckTx.fromAmino(object.check_tx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = RequestCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.list_snapshots = RequestListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offer_snapshot = RequestOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.load_snapshot_chunk = RequestLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.apply_snapshot_chunk = RequestApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepare_proposal = RequestPrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.process_proposal = RequestProcessProposal.fromAmino(object.process_proposal);
    }
    if (object.extend_vote !== undefined && object.extend_vote !== null) {
      message.extend_vote = RequestExtendVote.fromAmino(object.extend_vote);
    }
    if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
      message.verify_vote_extension = RequestVerifyVoteExtension.fromAmino(object.verify_vote_extension);
    }
    if (object.finalize_block !== undefined && object.finalize_block !== null) {
      message.finalize_block = RequestFinalizeBlock.fromAmino(object.finalize_block);
    }
    return message;
  },
  toAmino(message: Request): RequestAmino {
    const obj: any = {};
    obj.echo = message.echo ? RequestEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? RequestFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? RequestInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.init_chain ? RequestInitChain.toAmino(message.init_chain) : undefined;
    obj.query = message.query ? RequestQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.check_tx ? RequestCheckTx.toAmino(message.check_tx) : undefined;
    obj.commit = message.commit ? RequestCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.list_snapshots ? RequestListSnapshots.toAmino(message.list_snapshots) : undefined;
    obj.offer_snapshot = message.offer_snapshot ? RequestOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
    obj.load_snapshot_chunk = message.load_snapshot_chunk ? RequestLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
    obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? RequestApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
    obj.prepare_proposal = message.prepare_proposal ? RequestPrepareProposal.toAmino(message.prepare_proposal) : undefined;
    obj.process_proposal = message.process_proposal ? RequestProcessProposal.toAmino(message.process_proposal) : undefined;
    obj.extend_vote = message.extend_vote ? RequestExtendVote.toAmino(message.extend_vote) : undefined;
    obj.verify_vote_extension = message.verify_vote_extension ? RequestVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
    obj.finalize_block = message.finalize_block ? RequestFinalizeBlock.toAmino(message.finalize_block) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestAminoMsg): Request {
    return Request.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProtoMsg): Request {
    return Request.decode(message.value);
  },
  toProto(message: Request): Uint8Array {
    return Request.encode(message).finish();
  },
  toProtoMsg(message: Request): RequestProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Request",
      value: Request.encode(message).finish()
    };
  },
  registerTypeUrl() {
    RequestEcho.registerTypeUrl();
    RequestFlush.registerTypeUrl();
    RequestInfo.registerTypeUrl();
    RequestInitChain.registerTypeUrl();
    RequestQuery.registerTypeUrl();
    RequestCheckTx.registerTypeUrl();
    RequestCommit.registerTypeUrl();
    RequestListSnapshots.registerTypeUrl();
    RequestOfferSnapshot.registerTypeUrl();
    RequestLoadSnapshotChunk.registerTypeUrl();
    RequestApplySnapshotChunk.registerTypeUrl();
    RequestPrepareProposal.registerTypeUrl();
    RequestProcessProposal.registerTypeUrl();
    RequestExtendVote.registerTypeUrl();
    RequestVerifyVoteExtension.registerTypeUrl();
    RequestFinalizeBlock.registerTypeUrl();
  }
};
function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}
export const RequestEcho = {
  typeUrl: "/tendermint.abci.RequestEcho",
  is(o: any): o is RequestEcho {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  isAmino(o: any): o is RequestEchoAmino {
    return o && (o.$typeUrl === RequestEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: RequestEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: RequestEchoAmino): RequestEcho {
    const message = createBaseRequestEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: RequestEcho): RequestEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: RequestEchoAminoMsg): RequestEcho {
    return RequestEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestEchoProtoMsg): RequestEcho {
    return RequestEcho.decode(message.value);
  },
  toProto(message: RequestEcho): Uint8Array {
    return RequestEcho.encode(message).finish();
  },
  toProtoMsg(message: RequestEcho): RequestEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestEcho",
      value: RequestEcho.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestFlush(): RequestFlush {
  return {};
}
export const RequestFlush = {
  typeUrl: "/tendermint.abci.RequestFlush",
  is(o: any): o is RequestFlush {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  isAmino(o: any): o is RequestFlushAmino {
    return o && o.$typeUrl === RequestFlush.typeUrl;
  },
  encode(_: RequestFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  fromAmino(_: RequestFlushAmino): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  },
  toAmino(_: RequestFlush): RequestFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestFlushAminoMsg): RequestFlush {
    return RequestFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestFlushProtoMsg): RequestFlush {
    return RequestFlush.decode(message.value);
  },
  toProto(message: RequestFlush): Uint8Array {
    return RequestFlush.encode(message).finish();
  },
  toProtoMsg(message: RequestFlush): RequestFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFlush",
      value: RequestFlush.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    block_version: BigInt(0),
    p2p_version: BigInt(0),
    abci_version: ""
  };
}
export const RequestInfo = {
  typeUrl: "/tendermint.abci.RequestInfo",
  is(o: any): o is RequestInfo {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint" && typeof o.abci_version === "string");
  },
  isAmino(o: any): o is RequestInfoAmino {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.version === "string" && typeof o.block_version === "bigint" && typeof o.p2p_version === "bigint" && typeof o.abci_version === "string");
  },
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.block_version !== BigInt(0)) {
      writer.uint32(16).uint64(message.block_version);
    }
    if (message.p2p_version !== BigInt(0)) {
      writer.uint32(24).uint64(message.p2p_version);
    }
    if (message.abci_version !== "") {
      writer.uint32(34).string(message.abci_version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.block_version = reader.uint64();
          break;
        case 3:
          message.p2p_version = reader.uint64();
          break;
        case 4:
          message.abci_version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.block_version = object.block_version !== undefined && object.block_version !== null ? BigInt(object.block_version.toString()) : BigInt(0);
    message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? BigInt(object.p2p_version.toString()) : BigInt(0);
    message.abci_version = object.abci_version ?? "";
    return message;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    const message = createBaseRequestInfo();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.block_version !== undefined && object.block_version !== null) {
      message.block_version = BigInt(object.block_version);
    }
    if (object.p2p_version !== undefined && object.p2p_version !== null) {
      message.p2p_version = BigInt(object.p2p_version);
    }
    if (object.abci_version !== undefined && object.abci_version !== null) {
      message.abci_version = object.abci_version;
    }
    return message;
  },
  toAmino(message: RequestInfo): RequestInfoAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.block_version = message.block_version !== BigInt(0) ? message.block_version?.toString() : undefined;
    obj.p2p_version = message.p2p_version !== BigInt(0) ? message.p2p_version?.toString() : undefined;
    obj.abci_version = message.abci_version === "" ? undefined : message.abci_version;
    return obj;
  },
  fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: new Date(),
    chain_id: "",
    consensus_params: undefined,
    validators: [],
    app_state_bytes: new Uint8Array(),
    initial_height: BigInt(0)
  };
}
export const RequestInitChain = {
  typeUrl: "/tendermint.abci.RequestInitChain",
  is(o: any): o is RequestInitChain {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.is(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
  },
  isAmino(o: any): o is RequestInitChainAmino {
    return o && (o.$typeUrl === RequestInitChain.typeUrl || Timestamp.isAmino(o.time) && typeof o.chain_id === "string" && Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isAmino(o.validators[0])) && (o.app_state_bytes instanceof Uint8Array || typeof o.app_state_bytes === "string") && typeof o.initial_height === "bigint");
  },
  encode(message: RequestInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.app_state_bytes.length !== 0) {
      writer.uint32(42).bytes(message.app_state_bytes);
    }
    if (message.initial_height !== BigInt(0)) {
      writer.uint32(48).int64(message.initial_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.chain_id = reader.string();
          break;
        case 3:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 5:
          message.app_state_bytes = reader.bytes();
          break;
        case 6:
          message.initial_height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chain_id = object.chain_id ?? "";
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
    message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? BigInt(object.initial_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RequestInitChainAmino): RequestInitChain {
    const message = createBaseRequestInitChain();
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    }
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensus_params = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_state_bytes !== undefined && object.app_state_bytes !== null) {
      message.app_state_bytes = bytesFromBase64(object.app_state_bytes);
    }
    if (object.initial_height !== undefined && object.initial_height !== null) {
      message.initial_height = BigInt(object.initial_height);
    }
    return message;
  },
  toAmino(message: RequestInitChain): RequestInitChainAmino {
    const obj: any = {};
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_state_bytes = message.app_state_bytes ? base64FromBytes(message.app_state_bytes) : undefined;
    obj.initial_height = message.initial_height !== BigInt(0) ? message.initial_height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestInitChainAminoMsg): RequestInitChain {
    return RequestInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInitChainProtoMsg): RequestInitChain {
    return RequestInitChain.decode(message.value);
  },
  toProto(message: RequestInitChain): Uint8Array {
    return RequestInitChain.encode(message).finish();
  },
  toProtoMsg(message: RequestInitChain): RequestInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestInitChain",
      value: RequestInitChain.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ConsensusParams.registerTypeUrl();
    ValidatorUpdate.registerTypeUrl();
  }
};
function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: BigInt(0),
    prove: false
  };
}
export const RequestQuery = {
  typeUrl: "/tendermint.abci.RequestQuery",
  is(o: any): o is RequestQuery {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  isAmino(o: any): o is RequestQueryAmino {
    return o && (o.$typeUrl === RequestQuery.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.path === "string" && typeof o.height === "bigint" && typeof o.prove === "boolean");
  },
  encode(message: RequestQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.prove = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.prove = object.prove ?? false;
    return message;
  },
  fromAmino(object: RequestQueryAmino): RequestQuery {
    const message = createBaseRequestQuery();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.prove !== undefined && object.prove !== null) {
      message.prove = object.prove;
    }
    return message;
  },
  toAmino(message: RequestQuery): RequestQueryAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.path = message.path === "" ? undefined : message.path;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.prove = message.prove === false ? undefined : message.prove;
    return obj;
  },
  fromAminoMsg(object: RequestQueryAminoMsg): RequestQuery {
    return RequestQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestQueryProtoMsg): RequestQuery {
    return RequestQuery.decode(message.value);
  },
  toProto(message: RequestQuery): Uint8Array {
    return RequestQuery.encode(message).finish();
  },
  toProtoMsg(message: RequestQuery): RequestQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestQuery",
      value: RequestQuery.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}
export const RequestCheckTx = {
  typeUrl: "/tendermint.abci.RequestCheckTx",
  is(o: any): o is RequestCheckTx {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  isAmino(o: any): o is RequestCheckTxAmino {
    return o && (o.$typeUrl === RequestCheckTx.typeUrl || (o.tx instanceof Uint8Array || typeof o.tx === "string") && isSet(o.type));
  },
  encode(message: RequestCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: RequestCheckTxAmino): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: RequestCheckTx): RequestCheckTxAmino {
    const obj: any = {};
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: RequestCheckTxAminoMsg): RequestCheckTx {
    return RequestCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCheckTxProtoMsg): RequestCheckTx {
    return RequestCheckTx.decode(message.value);
  },
  toProto(message: RequestCheckTx): Uint8Array {
    return RequestCheckTx.encode(message).finish();
  },
  toProtoMsg(message: RequestCheckTx): RequestCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCheckTx",
      value: RequestCheckTx.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestCommit(): RequestCommit {
  return {};
}
export const RequestCommit = {
  typeUrl: "/tendermint.abci.RequestCommit",
  is(o: any): o is RequestCommit {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  isAmino(o: any): o is RequestCommitAmino {
    return o && o.$typeUrl === RequestCommit.typeUrl;
  },
  encode(_: RequestCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  fromAmino(_: RequestCommitAmino): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  },
  toAmino(_: RequestCommit): RequestCommitAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestCommitAminoMsg): RequestCommit {
    return RequestCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestCommitProtoMsg): RequestCommit {
    return RequestCommit.decode(message.value);
  },
  toProto(message: RequestCommit): Uint8Array {
    return RequestCommit.encode(message).finish();
  },
  toProtoMsg(message: RequestCommit): RequestCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestCommit",
      value: RequestCommit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}
export const RequestListSnapshots = {
  typeUrl: "/tendermint.abci.RequestListSnapshots",
  is(o: any): o is RequestListSnapshots {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  isAmino(o: any): o is RequestListSnapshotsAmino {
    return o && o.$typeUrl === RequestListSnapshots.typeUrl;
  },
  encode(_: RequestListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  fromAmino(_: RequestListSnapshotsAmino): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  },
  toAmino(_: RequestListSnapshots): RequestListSnapshotsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RequestListSnapshotsAminoMsg): RequestListSnapshots {
    return RequestListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestListSnapshotsProtoMsg): RequestListSnapshots {
    return RequestListSnapshots.decode(message.value);
  },
  toProto(message: RequestListSnapshots): Uint8Array {
    return RequestListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: RequestListSnapshots): RequestListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestListSnapshots",
      value: RequestListSnapshots.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    app_hash: new Uint8Array()
  };
}
export const RequestOfferSnapshot = {
  typeUrl: "/tendermint.abci.RequestOfferSnapshot",
  is(o: any): o is RequestOfferSnapshot {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
  },
  isAmino(o: any): o is RequestOfferSnapshotAmino {
    return o && (o.$typeUrl === RequestOfferSnapshot.typeUrl || o.app_hash instanceof Uint8Array || typeof o.app_hash === "string");
  },
  encode(message: RequestOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(18).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;
        case 2:
          message.app_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestOfferSnapshotAmino): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    if (object.snapshot !== undefined && object.snapshot !== null) {
      message.snapshot = Snapshot.fromAmino(object.snapshot);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: RequestOfferSnapshot): RequestOfferSnapshotAmino {
    const obj: any = {};
    obj.snapshot = message.snapshot ? Snapshot.toAmino(message.snapshot) : undefined;
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestOfferSnapshotAminoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestOfferSnapshotProtoMsg): RequestOfferSnapshot {
    return RequestOfferSnapshot.decode(message.value);
  },
  toProto(message: RequestOfferSnapshot): Uint8Array {
    return RequestOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: RequestOfferSnapshot): RequestOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestOfferSnapshot",
      value: RequestOfferSnapshot.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Snapshot.registerTypeUrl();
  }
};
function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: BigInt(0),
    format: 0,
    chunk: 0
  };
}
export const RequestLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
  is(o: any): o is RequestLoadSnapshotChunk {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  isAmino(o: any): o is RequestLoadSnapshotChunkAmino {
    return o && (o.$typeUrl === RequestLoadSnapshotChunk.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunk === "number");
  },
  encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunk = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  },
  fromAmino(object: RequestLoadSnapshotChunkAmino): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = object.chunk;
    }
    return message;
  },
  toAmino(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunk = message.chunk === 0 ? undefined : message.chunk;
    return obj;
  },
  fromAminoMsg(object: RequestLoadSnapshotChunkAminoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestLoadSnapshotChunkProtoMsg): RequestLoadSnapshotChunk {
    return RequestLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: RequestLoadSnapshotChunk): Uint8Array {
    return RequestLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestLoadSnapshotChunk): RequestLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestLoadSnapshotChunk",
      value: RequestLoadSnapshotChunk.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}
export const RequestApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
  is(o: any): o is RequestApplySnapshotChunk {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  isAmino(o: any): o is RequestApplySnapshotChunkAmino {
    return o && (o.$typeUrl === RequestApplySnapshotChunk.typeUrl || typeof o.index === "number" && (o.chunk instanceof Uint8Array || typeof o.chunk === "string") && typeof o.sender === "string");
  },
  encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }
    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;
        case 2:
          message.chunk = reader.bytes();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: RequestApplySnapshotChunkAmino): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkAmino {
    const obj: any = {};
    obj.index = message.index === 0 ? undefined : message.index;
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: RequestApplySnapshotChunkAminoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestApplySnapshotChunkProtoMsg): RequestApplySnapshotChunk {
    return RequestApplySnapshotChunk.decode(message.value);
  },
  toProto(message: RequestApplySnapshotChunk): Uint8Array {
    return RequestApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: RequestApplySnapshotChunk): RequestApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestApplySnapshotChunk",
      value: RequestApplySnapshotChunk.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestPrepareProposal(): RequestPrepareProposal {
  return {
    max_tx_bytes: BigInt(0),
    txs: [],
    local_last_commit: ExtendedCommitInfo.fromPartial({}),
    misbehavior: [],
    height: BigInt(0),
    time: new Date(),
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestPrepareProposal = {
  typeUrl: "/tendermint.abci.RequestPrepareProposal",
  is(o: any): o is RequestPrepareProposal {
    return o && (o.$typeUrl === RequestPrepareProposal.typeUrl || typeof o.max_tx_bytes === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && ExtendedCommitInfo.is(o.local_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && typeof o.height === "bigint" && Timestamp.is(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestPrepareProposalAmino {
    return o && (o.$typeUrl === RequestPrepareProposal.typeUrl || typeof o.max_tx_bytes === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && ExtendedCommitInfo.isAmino(o.local_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestPrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.max_tx_bytes !== BigInt(0)) {
      writer.uint32(8).int64(message.max_tx_bytes);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    if (message.local_last_commit !== undefined) {
      ExtendedCommitInfo.encode(message.local_last_commit, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestPrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPrepareProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_tx_bytes = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.local_last_commit = ExtendedCommitInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestPrepareProposal>): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    message.max_tx_bytes = object.max_tx_bytes !== undefined && object.max_tx_bytes !== null ? BigInt(object.max_tx_bytes.toString()) : BigInt(0);
    message.txs = object.txs?.map(e => e) || [];
    message.local_last_commit = object.local_last_commit !== undefined && object.local_last_commit !== null ? ExtendedCommitInfo.fromPartial(object.local_last_commit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestPrepareProposalAmino): RequestPrepareProposal {
    const message = createBaseRequestPrepareProposal();
    if (object.max_tx_bytes !== undefined && object.max_tx_bytes !== null) {
      message.max_tx_bytes = BigInt(object.max_tx_bytes);
    }
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.local_last_commit !== undefined && object.local_last_commit !== null) {
      message.local_last_commit = ExtendedCommitInfo.fromAmino(object.local_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposer_address = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestPrepareProposal): RequestPrepareProposalAmino {
    const obj: any = {};
    obj.max_tx_bytes = message.max_tx_bytes !== BigInt(0) ? message.max_tx_bytes?.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.local_last_commit = message.local_last_commit ? ExtendedCommitInfo.toAmino(message.local_last_commit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestPrepareProposalAminoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestPrepareProposalProtoMsg): RequestPrepareProposal {
    return RequestPrepareProposal.decode(message.value);
  },
  toProto(message: RequestPrepareProposal): Uint8Array {
    return RequestPrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestPrepareProposal): RequestPrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestPrepareProposal",
      value: RequestPrepareProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExtendedCommitInfo.registerTypeUrl();
    Misbehavior.registerTypeUrl();
  }
};
function createBaseRequestProcessProposal(): RequestProcessProposal {
  return {
    txs: [],
    proposed_last_commit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: new Date(),
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestProcessProposal = {
  typeUrl: "/tendermint.abci.RequestProcessProposal",
  is(o: any): o is RequestProcessProposal {
    return o && (o.$typeUrl === RequestProcessProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.is(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.is(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestProcessProposalAmino {
    return o && (o.$typeUrl === RequestProcessProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.isAmino(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.proposed_last_commit !== undefined) {
      CommitInfo.encode(message.proposed_last_commit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestProcessProposal>): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map(e => e) || [];
    message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestProcessProposalAmino): RequestProcessProposal {
    const message = createBaseRequestProcessProposal();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
      message.proposed_last_commit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposer_address = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestProcessProposal): RequestProcessProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toAmino(message.proposed_last_commit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestProcessProposalAminoMsg): RequestProcessProposal {
    return RequestProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestProcessProposalProtoMsg): RequestProcessProposal {
    return RequestProcessProposal.decode(message.value);
  },
  toProto(message: RequestProcessProposal): Uint8Array {
    return RequestProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: RequestProcessProposal): RequestProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestProcessProposal",
      value: RequestProcessProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CommitInfo.registerTypeUrl();
    Misbehavior.registerTypeUrl();
  }
};
function createBaseRequestExtendVote(): RequestExtendVote {
  return {
    hash: new Uint8Array(),
    height: BigInt(0),
    time: new Date(),
    txs: [],
    proposed_last_commit: CommitInfo.fromPartial({}),
    misbehavior: [],
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestExtendVote = {
  typeUrl: "/tendermint.abci.RequestExtendVote",
  is(o: any): o is RequestExtendVote {
    return o && (o.$typeUrl === RequestExtendVote.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.is(o.time) && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.is(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestExtendVoteAmino {
    return o && (o.$typeUrl === RequestExtendVote.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.isAmino(o.proposed_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestExtendVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txs) {
      writer.uint32(34).bytes(v!);
    }
    if (message.proposed_last_commit !== undefined) {
      CommitInfo.encode(message.proposed_last_commit, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestExtendVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.txs.push(reader.bytes());
          break;
        case 5:
          message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestExtendVote>): RequestExtendVote {
    const message = createBaseRequestExtendVote();
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.txs = object.txs?.map(e => e) || [];
    message.proposed_last_commit = object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestExtendVoteAmino): RequestExtendVote {
    const message = createBaseRequestExtendVote();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.proposed_last_commit !== undefined && object.proposed_last_commit !== null) {
      message.proposed_last_commit = CommitInfo.fromAmino(object.proposed_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposer_address = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestExtendVote): RequestExtendVoteAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.proposed_last_commit = message.proposed_last_commit ? CommitInfo.toAmino(message.proposed_last_commit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestExtendVoteAminoMsg): RequestExtendVote {
    return RequestExtendVote.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestExtendVoteProtoMsg): RequestExtendVote {
    return RequestExtendVote.decode(message.value);
  },
  toProto(message: RequestExtendVote): Uint8Array {
    return RequestExtendVote.encode(message).finish();
  },
  toProtoMsg(message: RequestExtendVote): RequestExtendVoteProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestExtendVote",
      value: RequestExtendVote.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CommitInfo.registerTypeUrl();
    Misbehavior.registerTypeUrl();
  }
};
function createBaseRequestVerifyVoteExtension(): RequestVerifyVoteExtension {
  return {
    hash: new Uint8Array(),
    validator_address: new Uint8Array(),
    height: BigInt(0),
    vote_extension: new Uint8Array()
  };
}
export const RequestVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
  is(o: any): o is RequestVerifyVoteExtension {
    return o && (o.$typeUrl === RequestVerifyVoteExtension.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.height === "bigint" && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string"));
  },
  isAmino(o: any): o is RequestVerifyVoteExtensionAmino {
    return o && (o.$typeUrl === RequestVerifyVoteExtension.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.height === "bigint" && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string"));
  },
  encode(message: RequestVerifyVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.validator_address.length !== 0) {
      writer.uint32(18).bytes(message.validator_address);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.vote_extension.length !== 0) {
      writer.uint32(34).bytes(message.vote_extension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestVerifyVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.validator_address = reader.bytes();
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.vote_extension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestVerifyVoteExtension>): RequestVerifyVoteExtension {
    const message = createBaseRequestVerifyVoteExtension();
    message.hash = object.hash ?? new Uint8Array();
    message.validator_address = object.validator_address ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.vote_extension = object.vote_extension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestVerifyVoteExtensionAmino): RequestVerifyVoteExtension {
    const message = createBaseRequestVerifyVoteExtension();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validator_address = bytesFromBase64(object.validator_address);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.vote_extension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message: RequestVerifyVoteExtension): RequestVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestVerifyVoteExtensionAminoMsg): RequestVerifyVoteExtension {
    return RequestVerifyVoteExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestVerifyVoteExtensionProtoMsg): RequestVerifyVoteExtension {
    return RequestVerifyVoteExtension.decode(message.value);
  },
  toProto(message: RequestVerifyVoteExtension): Uint8Array {
    return RequestVerifyVoteExtension.encode(message).finish();
  },
  toProtoMsg(message: RequestVerifyVoteExtension): RequestVerifyVoteExtensionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestVerifyVoteExtension",
      value: RequestVerifyVoteExtension.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestFinalizeBlock(): RequestFinalizeBlock {
  return {
    txs: [],
    decided_last_commit: CommitInfo.fromPartial({}),
    misbehavior: [],
    hash: new Uint8Array(),
    height: BigInt(0),
    time: new Date(),
    next_validators_hash: new Uint8Array(),
    proposer_address: new Uint8Array()
  };
}
export const RequestFinalizeBlock = {
  typeUrl: "/tendermint.abci.RequestFinalizeBlock",
  is(o: any): o is RequestFinalizeBlock {
    return o && (o.$typeUrl === RequestFinalizeBlock.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.is(o.decided_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.is(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.is(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  isAmino(o: any): o is RequestFinalizeBlockAmino {
    return o && (o.$typeUrl === RequestFinalizeBlock.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && CommitInfo.isAmino(o.decided_last_commit) && Array.isArray(o.misbehavior) && (!o.misbehavior.length || Misbehavior.isAmino(o.misbehavior[0])) && (o.hash instanceof Uint8Array || typeof o.hash === "string") && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
  },
  encode(message: RequestFinalizeBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.decided_last_commit !== undefined) {
      CommitInfo.encode(message.decided_last_commit, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.misbehavior) {
      Misbehavior.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(58).bytes(message.next_validators_hash);
    }
    if (message.proposer_address.length !== 0) {
      writer.uint32(66).bytes(message.proposer_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestFinalizeBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        case 2:
          message.decided_last_commit = CommitInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.misbehavior.push(Misbehavior.decode(reader, reader.uint32()));
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.height = reader.int64();
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.next_validators_hash = reader.bytes();
          break;
        case 8:
          message.proposer_address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RequestFinalizeBlock>): RequestFinalizeBlock {
    const message = createBaseRequestFinalizeBlock();
    message.txs = object.txs?.map(e => e) || [];
    message.decided_last_commit = object.decided_last_commit !== undefined && object.decided_last_commit !== null ? CommitInfo.fromPartial(object.decided_last_commit) : undefined;
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    message.proposer_address = object.proposer_address ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RequestFinalizeBlockAmino): RequestFinalizeBlock {
    const message = createBaseRequestFinalizeBlock();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    if (object.decided_last_commit !== undefined && object.decided_last_commit !== null) {
      message.decided_last_commit = CommitInfo.fromAmino(object.decided_last_commit);
    }
    message.misbehavior = object.misbehavior?.map(e => Misbehavior.fromAmino(e)) || [];
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposer_address = bytesFromBase64(object.proposer_address);
    }
    return message;
  },
  toAmino(message: RequestFinalizeBlock): RequestFinalizeBlockAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    obj.decided_last_commit = message.decided_last_commit ? CommitInfo.toAmino(message.decided_last_commit) : undefined;
    if (message.misbehavior) {
      obj.misbehavior = message.misbehavior.map(e => e ? Misbehavior.toAmino(e) : undefined);
    } else {
      obj.misbehavior = message.misbehavior;
    }
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
    return obj;
  },
  fromAminoMsg(object: RequestFinalizeBlockAminoMsg): RequestFinalizeBlock {
    return RequestFinalizeBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestFinalizeBlockProtoMsg): RequestFinalizeBlock {
    return RequestFinalizeBlock.decode(message.value);
  },
  toProto(message: RequestFinalizeBlock): Uint8Array {
    return RequestFinalizeBlock.encode(message).finish();
  },
  toProtoMsg(message: RequestFinalizeBlock): RequestFinalizeBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.RequestFinalizeBlock",
      value: RequestFinalizeBlock.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CommitInfo.registerTypeUrl();
    Misbehavior.registerTypeUrl();
  }
};
function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    init_chain: undefined,
    query: undefined,
    check_tx: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined,
    prepare_proposal: undefined,
    process_proposal: undefined,
    extend_vote: undefined,
    verify_vote_extension: undefined,
    finalize_block: undefined
  };
}
export const Response = {
  typeUrl: "/tendermint.abci.Response",
  is(o: any): o is Response {
    return o && o.$typeUrl === Response.typeUrl;
  },
  isAmino(o: any): o is ResponseAmino {
    return o && o.$typeUrl === Response.typeUrl;
  },
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }
    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }
    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    if (message.init_chain !== undefined) {
      ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }
    if (message.check_tx !== undefined) {
      ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }
    if (message.list_snapshots !== undefined) {
      ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
    }
    if (message.offer_snapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
    }
    if (message.load_snapshot_chunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }
    if (message.apply_snapshot_chunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
    }
    if (message.prepare_proposal !== undefined) {
      ResponsePrepareProposal.encode(message.prepare_proposal, writer.uint32(138).fork()).ldelim();
    }
    if (message.process_proposal !== undefined) {
      ResponseProcessProposal.encode(message.process_proposal, writer.uint32(146).fork()).ldelim();
    }
    if (message.extend_vote !== undefined) {
      ResponseExtendVote.encode(message.extend_vote, writer.uint32(154).fork()).ldelim();
    }
    if (message.verify_vote_extension !== undefined) {
      ResponseVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(162).fork()).ldelim();
    }
    if (message.finalize_block !== undefined) {
      ResponseFinalizeBlock.encode(message.finalize_block, writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Response {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;
        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;
        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;
        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;
        case 6:
          message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
          break;
        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 9:
          message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
          break;
        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 13:
          message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;
        case 14:
          message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;
        case 15:
          message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;
        case 16:
          message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;
        case 17:
          message.prepare_proposal = ResponsePrepareProposal.decode(reader, reader.uint32());
          break;
        case 18:
          message.process_proposal = ResponseProcessProposal.decode(reader, reader.uint32());
          break;
        case 19:
          message.extend_vote = ResponseExtendVote.decode(reader, reader.uint32());
          break;
        case 20:
          message.verify_vote_extension = ResponseVerifyVoteExtension.decode(reader, reader.uint32());
          break;
        case 21:
          message.finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    message.prepare_proposal = object.prepare_proposal !== undefined && object.prepare_proposal !== null ? ResponsePrepareProposal.fromPartial(object.prepare_proposal) : undefined;
    message.process_proposal = object.process_proposal !== undefined && object.process_proposal !== null ? ResponseProcessProposal.fromPartial(object.process_proposal) : undefined;
    message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? ResponseExtendVote.fromPartial(object.extend_vote) : undefined;
    message.verify_vote_extension = object.verify_vote_extension !== undefined && object.verify_vote_extension !== null ? ResponseVerifyVoteExtension.fromPartial(object.verify_vote_extension) : undefined;
    message.finalize_block = object.finalize_block !== undefined && object.finalize_block !== null ? ResponseFinalizeBlock.fromPartial(object.finalize_block) : undefined;
    return message;
  },
  fromAmino(object: ResponseAmino): Response {
    const message = createBaseResponse();
    if (object.exception !== undefined && object.exception !== null) {
      message.exception = ResponseException.fromAmino(object.exception);
    }
    if (object.echo !== undefined && object.echo !== null) {
      message.echo = ResponseEcho.fromAmino(object.echo);
    }
    if (object.flush !== undefined && object.flush !== null) {
      message.flush = ResponseFlush.fromAmino(object.flush);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = ResponseInfo.fromAmino(object.info);
    }
    if (object.init_chain !== undefined && object.init_chain !== null) {
      message.init_chain = ResponseInitChain.fromAmino(object.init_chain);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ResponseQuery.fromAmino(object.query);
    }
    if (object.check_tx !== undefined && object.check_tx !== null) {
      message.check_tx = ResponseCheckTx.fromAmino(object.check_tx);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = ResponseCommit.fromAmino(object.commit);
    }
    if (object.list_snapshots !== undefined && object.list_snapshots !== null) {
      message.list_snapshots = ResponseListSnapshots.fromAmino(object.list_snapshots);
    }
    if (object.offer_snapshot !== undefined && object.offer_snapshot !== null) {
      message.offer_snapshot = ResponseOfferSnapshot.fromAmino(object.offer_snapshot);
    }
    if (object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null) {
      message.load_snapshot_chunk = ResponseLoadSnapshotChunk.fromAmino(object.load_snapshot_chunk);
    }
    if (object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null) {
      message.apply_snapshot_chunk = ResponseApplySnapshotChunk.fromAmino(object.apply_snapshot_chunk);
    }
    if (object.prepare_proposal !== undefined && object.prepare_proposal !== null) {
      message.prepare_proposal = ResponsePrepareProposal.fromAmino(object.prepare_proposal);
    }
    if (object.process_proposal !== undefined && object.process_proposal !== null) {
      message.process_proposal = ResponseProcessProposal.fromAmino(object.process_proposal);
    }
    if (object.extend_vote !== undefined && object.extend_vote !== null) {
      message.extend_vote = ResponseExtendVote.fromAmino(object.extend_vote);
    }
    if (object.verify_vote_extension !== undefined && object.verify_vote_extension !== null) {
      message.verify_vote_extension = ResponseVerifyVoteExtension.fromAmino(object.verify_vote_extension);
    }
    if (object.finalize_block !== undefined && object.finalize_block !== null) {
      message.finalize_block = ResponseFinalizeBlock.fromAmino(object.finalize_block);
    }
    return message;
  },
  toAmino(message: Response): ResponseAmino {
    const obj: any = {};
    obj.exception = message.exception ? ResponseException.toAmino(message.exception) : undefined;
    obj.echo = message.echo ? ResponseEcho.toAmino(message.echo) : undefined;
    obj.flush = message.flush ? ResponseFlush.toAmino(message.flush) : undefined;
    obj.info = message.info ? ResponseInfo.toAmino(message.info) : undefined;
    obj.init_chain = message.init_chain ? ResponseInitChain.toAmino(message.init_chain) : undefined;
    obj.query = message.query ? ResponseQuery.toAmino(message.query) : undefined;
    obj.check_tx = message.check_tx ? ResponseCheckTx.toAmino(message.check_tx) : undefined;
    obj.commit = message.commit ? ResponseCommit.toAmino(message.commit) : undefined;
    obj.list_snapshots = message.list_snapshots ? ResponseListSnapshots.toAmino(message.list_snapshots) : undefined;
    obj.offer_snapshot = message.offer_snapshot ? ResponseOfferSnapshot.toAmino(message.offer_snapshot) : undefined;
    obj.load_snapshot_chunk = message.load_snapshot_chunk ? ResponseLoadSnapshotChunk.toAmino(message.load_snapshot_chunk) : undefined;
    obj.apply_snapshot_chunk = message.apply_snapshot_chunk ? ResponseApplySnapshotChunk.toAmino(message.apply_snapshot_chunk) : undefined;
    obj.prepare_proposal = message.prepare_proposal ? ResponsePrepareProposal.toAmino(message.prepare_proposal) : undefined;
    obj.process_proposal = message.process_proposal ? ResponseProcessProposal.toAmino(message.process_proposal) : undefined;
    obj.extend_vote = message.extend_vote ? ResponseExtendVote.toAmino(message.extend_vote) : undefined;
    obj.verify_vote_extension = message.verify_vote_extension ? ResponseVerifyVoteExtension.toAmino(message.verify_vote_extension) : undefined;
    obj.finalize_block = message.finalize_block ? ResponseFinalizeBlock.toAmino(message.finalize_block) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseAminoMsg): Response {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProtoMsg): Response {
    return Response.decode(message.value);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Response",
      value: Response.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ResponseException.registerTypeUrl();
    ResponseEcho.registerTypeUrl();
    ResponseFlush.registerTypeUrl();
    ResponseInfo.registerTypeUrl();
    ResponseInitChain.registerTypeUrl();
    ResponseQuery.registerTypeUrl();
    ResponseCheckTx.registerTypeUrl();
    ResponseCommit.registerTypeUrl();
    ResponseListSnapshots.registerTypeUrl();
    ResponseOfferSnapshot.registerTypeUrl();
    ResponseLoadSnapshotChunk.registerTypeUrl();
    ResponseApplySnapshotChunk.registerTypeUrl();
    ResponsePrepareProposal.registerTypeUrl();
    ResponseProcessProposal.registerTypeUrl();
    ResponseExtendVote.registerTypeUrl();
    ResponseVerifyVoteExtension.registerTypeUrl();
    ResponseFinalizeBlock.registerTypeUrl();
  }
};
function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}
export const ResponseException = {
  typeUrl: "/tendermint.abci.ResponseException",
  is(o: any): o is ResponseException {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  isAmino(o: any): o is ResponseExceptionAmino {
    return o && (o.$typeUrl === ResponseException.typeUrl || typeof o.error === "string");
  },
  encode(message: ResponseException, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: ResponseExceptionAmino): ResponseException {
    const message = createBaseResponseException();
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: ResponseException): ResponseExceptionAmino {
    const obj: any = {};
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: ResponseExceptionAminoMsg): ResponseException {
    return ResponseException.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseExceptionProtoMsg): ResponseException {
    return ResponseException.decode(message.value);
  },
  toProto(message: ResponseException): Uint8Array {
    return ResponseException.encode(message).finish();
  },
  toProtoMsg(message: ResponseException): ResponseExceptionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseException",
      value: ResponseException.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}
export const ResponseEcho = {
  typeUrl: "/tendermint.abci.ResponseEcho",
  is(o: any): o is ResponseEcho {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  isAmino(o: any): o is ResponseEchoAmino {
    return o && (o.$typeUrl === ResponseEcho.typeUrl || typeof o.message === "string");
  },
  encode(message: ResponseEcho, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: ResponseEchoAmino): ResponseEcho {
    const message = createBaseResponseEcho();
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: ResponseEcho): ResponseEchoAmino {
    const obj: any = {};
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: ResponseEchoAminoMsg): ResponseEcho {
    return ResponseEcho.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseEchoProtoMsg): ResponseEcho {
    return ResponseEcho.decode(message.value);
  },
  toProto(message: ResponseEcho): Uint8Array {
    return ResponseEcho.encode(message).finish();
  },
  toProtoMsg(message: ResponseEcho): ResponseEchoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseEcho",
      value: ResponseEcho.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseFlush(): ResponseFlush {
  return {};
}
export const ResponseFlush = {
  typeUrl: "/tendermint.abci.ResponseFlush",
  is(o: any): o is ResponseFlush {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  isAmino(o: any): o is ResponseFlushAmino {
    return o && o.$typeUrl === ResponseFlush.typeUrl;
  },
  encode(_: ResponseFlush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  fromAmino(_: ResponseFlushAmino): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  },
  toAmino(_: ResponseFlush): ResponseFlushAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ResponseFlushAminoMsg): ResponseFlush {
    return ResponseFlush.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseFlushProtoMsg): ResponseFlush {
    return ResponseFlush.decode(message.value);
  },
  toProto(message: ResponseFlush): Uint8Array {
    return ResponseFlush.encode(message).finish();
  },
  toProtoMsg(message: ResponseFlush): ResponseFlushProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFlush",
      value: ResponseFlush.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    app_version: BigInt(0),
    last_block_height: BigInt(0),
    last_block_app_hash: new Uint8Array()
  };
}
export const ResponseInfo = {
  typeUrl: "/tendermint.abci.ResponseInfo",
  is(o: any): o is ResponseInfo {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
  },
  isAmino(o: any): o is ResponseInfoAmino {
    return o && (o.$typeUrl === ResponseInfo.typeUrl || typeof o.data === "string" && typeof o.version === "string" && typeof o.app_version === "bigint" && typeof o.last_block_height === "bigint" && (o.last_block_app_hash instanceof Uint8Array || typeof o.last_block_app_hash === "string"));
  },
  encode(message: ResponseInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.app_version !== BigInt(0)) {
      writer.uint32(24).uint64(message.app_version);
    }
    if (message.last_block_height !== BigInt(0)) {
      writer.uint32(32).int64(message.last_block_height);
    }
    if (message.last_block_app_hash.length !== 0) {
      writer.uint32(42).bytes(message.last_block_app_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.app_version = reader.uint64();
          break;
        case 4:
          message.last_block_height = reader.int64();
          break;
        case 5:
          message.last_block_app_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.app_version = object.app_version !== undefined && object.app_version !== null ? BigInt(object.app_version.toString()) : BigInt(0);
    message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? BigInt(object.last_block_height.toString()) : BigInt(0);
    message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInfoAmino): ResponseInfo {
    const message = createBaseResponseInfo();
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.app_version = BigInt(object.app_version);
    }
    if (object.last_block_height !== undefined && object.last_block_height !== null) {
      message.last_block_height = BigInt(object.last_block_height);
    }
    if (object.last_block_app_hash !== undefined && object.last_block_app_hash !== null) {
      message.last_block_app_hash = bytesFromBase64(object.last_block_app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInfo): ResponseInfoAmino {
    const obj: any = {};
    obj.data = message.data === "" ? undefined : message.data;
    obj.version = message.version === "" ? undefined : message.version;
    obj.app_version = message.app_version !== BigInt(0) ? message.app_version?.toString() : undefined;
    obj.last_block_height = message.last_block_height !== BigInt(0) ? message.last_block_height?.toString() : undefined;
    obj.last_block_app_hash = message.last_block_app_hash ? base64FromBytes(message.last_block_app_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInfoAminoMsg): ResponseInfo {
    return ResponseInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInfoProtoMsg): ResponseInfo {
    return ResponseInfo.decode(message.value);
  },
  toProto(message: ResponseInfo): Uint8Array {
    return ResponseInfo.encode(message).finish();
  },
  toProtoMsg(message: ResponseInfo): ResponseInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInfo",
      value: ResponseInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensus_params: undefined,
    validators: [],
    app_hash: new Uint8Array()
  };
}
export const ResponseInitChain = {
  typeUrl: "/tendermint.abci.ResponseInitChain",
  is(o: any): o is ResponseInitChain {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.is(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  isAmino(o: any): o is ResponseInitChainAmino {
    return o && (o.$typeUrl === ResponseInitChain.typeUrl || Array.isArray(o.validators) && (!o.validators.length || ValidatorUpdate.isAmino(o.validators[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  encode(message: ResponseInitChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(26).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 3:
          message.app_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseInitChainAmino): ResponseInitChain {
    const message = createBaseResponseInitChain();
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensus_params = ConsensusParams.fromAmino(object.consensus_params);
    }
    message.validators = object.validators?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseInitChain): ResponseInitChainAmino {
    const obj: any = {};
    obj.consensus_params = message.consensus_params ? ConsensusParams.toAmino(message.consensus_params) : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseInitChainAminoMsg): ResponseInitChain {
    return ResponseInitChain.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseInitChainProtoMsg): ResponseInitChain {
    return ResponseInitChain.decode(message.value);
  },
  toProto(message: ResponseInitChain): Uint8Array {
    return ResponseInitChain.encode(message).finish();
  },
  toProtoMsg(message: ResponseInitChain): ResponseInitChainProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseInitChain",
      value: ResponseInitChain.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ConsensusParams.registerTypeUrl();
    ValidatorUpdate.registerTypeUrl();
  }
};
function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: BigInt(0),
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof_ops: undefined,
    height: BigInt(0),
    codespace: ""
  };
}
export const ResponseQuery = {
  typeUrl: "/tendermint.abci.ResponseQuery",
  is(o: any): o is ResponseQuery {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ResponseQueryAmino {
    return o && (o.$typeUrl === ResponseQuery.typeUrl || typeof o.code === "number" && typeof o.log === "string" && typeof o.info === "string" && typeof o.index === "bigint" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.height === "bigint" && typeof o.codespace === "string");
  },
  encode(message: ResponseQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(40).int64(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }
    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(72).int64(message.height);
    }
    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.index = reader.int64();
          break;
        case 6:
          message.key = reader.bytes();
          break;
        case 7:
          message.value = reader.bytes();
          break;
        case 8:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;
        case 9:
          message.height = reader.int64();
          break;
        case 10:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseQueryAmino): ResponseQuery {
    const message = createBaseResponseQuery();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.proof_ops !== undefined && object.proof_ops !== null) {
      message.proof_ops = ProofOps.fromAmino(object.proof_ops);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseQuery): ResponseQueryAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseQueryAminoMsg): ResponseQuery {
    return ResponseQuery.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseQueryProtoMsg): ResponseQuery {
    return ResponseQuery.decode(message.value);
  },
  toProto(message: ResponseQuery): Uint8Array {
    return ResponseQuery.encode(message).finish();
  },
  toProtoMsg(message: ResponseQuery): ResponseQueryProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseQuery",
      value: ResponseQuery.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ProofOps.registerTypeUrl();
  }
};
function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: BigInt(0),
    gas_used: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ResponseCheckTx = {
  typeUrl: "/tendermint.abci.ResponseCheckTx",
  is(o: any): o is ResponseCheckTx {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ResponseCheckTxAmino {
    return o && (o.$typeUrl === ResponseCheckTx.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ResponseCheckTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gas_wanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gas_wanted);
    }
    if (message.gas_used !== BigInt(0)) {
      writer.uint32(48).int64(message.gas_used);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gas_wanted = reader.int64();
          break;
        case 6:
          message.gas_used = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ResponseCheckTxAmino): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gas_wanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ResponseCheckTx): ResponseCheckTxAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gas_wanted !== BigInt(0) ? message.gas_wanted?.toString() : undefined;
    obj.gas_used = message.gas_used !== BigInt(0) ? message.gas_used?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ResponseCheckTxAminoMsg): ResponseCheckTx {
    return ResponseCheckTx.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCheckTxProtoMsg): ResponseCheckTx {
    return ResponseCheckTx.decode(message.value);
  },
  toProto(message: ResponseCheckTx): Uint8Array {
    return ResponseCheckTx.encode(message).finish();
  },
  toProtoMsg(message: ResponseCheckTx): ResponseCheckTxProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCheckTx",
      value: ResponseCheckTx.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Event.registerTypeUrl();
  }
};
function createBaseResponseCommit(): ResponseCommit {
  return {
    retain_height: BigInt(0)
  };
}
export const ResponseCommit = {
  typeUrl: "/tendermint.abci.ResponseCommit",
  is(o: any): o is ResponseCommit {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || typeof o.retain_height === "bigint");
  },
  isAmino(o: any): o is ResponseCommitAmino {
    return o && (o.$typeUrl === ResponseCommit.typeUrl || typeof o.retain_height === "bigint");
  },
  encode(message: ResponseCommit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.retain_height !== BigInt(0)) {
      writer.uint32(24).int64(message.retain_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.retain_height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? BigInt(object.retain_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ResponseCommitAmino): ResponseCommit {
    const message = createBaseResponseCommit();
    if (object.retain_height !== undefined && object.retain_height !== null) {
      message.retain_height = BigInt(object.retain_height);
    }
    return message;
  },
  toAmino(message: ResponseCommit): ResponseCommitAmino {
    const obj: any = {};
    obj.retain_height = message.retain_height !== BigInt(0) ? message.retain_height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseCommitAminoMsg): ResponseCommit {
    return ResponseCommit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseCommitProtoMsg): ResponseCommit {
    return ResponseCommit.decode(message.value);
  },
  toProto(message: ResponseCommit): Uint8Array {
    return ResponseCommit.encode(message).finish();
  },
  toProtoMsg(message: ResponseCommit): ResponseCommitProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseCommit",
      value: ResponseCommit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}
export const ResponseListSnapshots = {
  typeUrl: "/tendermint.abci.ResponseListSnapshots",
  is(o: any): o is ResponseListSnapshots {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.is(o.snapshots[0])));
  },
  isAmino(o: any): o is ResponseListSnapshotsAmino {
    return o && (o.$typeUrl === ResponseListSnapshots.typeUrl || Array.isArray(o.snapshots) && (!o.snapshots.length || Snapshot.isAmino(o.snapshots[0])));
  },
  encode(message: ResponseListSnapshots, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseListSnapshotsAmino): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ResponseListSnapshots): ResponseListSnapshotsAmino {
    const obj: any = {};
    if (message.snapshots) {
      obj.snapshots = message.snapshots.map(e => e ? Snapshot.toAmino(e) : undefined);
    } else {
      obj.snapshots = message.snapshots;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseListSnapshotsAminoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseListSnapshotsProtoMsg): ResponseListSnapshots {
    return ResponseListSnapshots.decode(message.value);
  },
  toProto(message: ResponseListSnapshots): Uint8Array {
    return ResponseListSnapshots.encode(message).finish();
  },
  toProtoMsg(message: ResponseListSnapshots): ResponseListSnapshotsProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseListSnapshots",
      value: ResponseListSnapshots.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Snapshot.registerTypeUrl();
  }
};
function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}
export const ResponseOfferSnapshot = {
  typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
  is(o: any): o is ResponseOfferSnapshot {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is ResponseOfferSnapshotAmino {
    return o && (o.$typeUrl === ResponseOfferSnapshot.typeUrl || isSet(o.result));
  },
  encode(message: ResponseOfferSnapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: ResponseOfferSnapshotAmino): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: ResponseOfferSnapshot): ResponseOfferSnapshotAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: ResponseOfferSnapshotAminoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseOfferSnapshotProtoMsg): ResponseOfferSnapshot {
    return ResponseOfferSnapshot.decode(message.value);
  },
  toProto(message: ResponseOfferSnapshot): Uint8Array {
    return ResponseOfferSnapshot.encode(message).finish();
  },
  toProtoMsg(message: ResponseOfferSnapshot): ResponseOfferSnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseOfferSnapshot",
      value: ResponseOfferSnapshot.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}
export const ResponseLoadSnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
  is(o: any): o is ResponseLoadSnapshotChunk {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  isAmino(o: any): o is ResponseLoadSnapshotChunkAmino {
    return o && (o.$typeUrl === ResponseLoadSnapshotChunk.typeUrl || o.chunk instanceof Uint8Array || typeof o.chunk === "string");
  },
  encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseLoadSnapshotChunkAmino): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    if (object.chunk !== undefined && object.chunk !== null) {
      message.chunk = bytesFromBase64(object.chunk);
    }
    return message;
  },
  toAmino(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkAmino {
    const obj: any = {};
    obj.chunk = message.chunk ? base64FromBytes(message.chunk) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseLoadSnapshotChunkAminoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseLoadSnapshotChunkProtoMsg): ResponseLoadSnapshotChunk {
    return ResponseLoadSnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseLoadSnapshotChunk): Uint8Array {
    return ResponseLoadSnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseLoadSnapshotChunk): ResponseLoadSnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseLoadSnapshotChunk",
      value: ResponseLoadSnapshotChunk.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetch_chunks: [],
    reject_senders: []
  };
}
export const ResponseApplySnapshotChunk = {
  typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
  is(o: any): o is ResponseApplySnapshotChunk {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
  },
  isAmino(o: any): o is ResponseApplySnapshotChunkAmino {
    return o && (o.$typeUrl === ResponseApplySnapshotChunk.typeUrl || isSet(o.result) && Array.isArray(o.refetch_chunks) && (!o.refetch_chunks.length || typeof o.refetch_chunks[0] === "number") && Array.isArray(o.reject_senders) && (!o.reject_senders.length || typeof o.reject_senders[0] === "string"));
  },
  encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    writer.uint32(18).fork();
    for (const v of message.refetch_chunks) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.reject_senders) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.refetch_chunks.push(reader.uint32());
            }
          } else {
            message.refetch_chunks.push(reader.uint32());
          }
          break;
        case 3:
          message.reject_senders.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
    message.reject_senders = object.reject_senders?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponseApplySnapshotChunkAmino): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
    message.reject_senders = object.reject_senders?.map(e => e) || [];
    return message;
  },
  toAmino(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    if (message.refetch_chunks) {
      obj.refetch_chunks = message.refetch_chunks.map(e => e);
    } else {
      obj.refetch_chunks = message.refetch_chunks;
    }
    if (message.reject_senders) {
      obj.reject_senders = message.reject_senders.map(e => e);
    } else {
      obj.reject_senders = message.reject_senders;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseApplySnapshotChunkAminoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseApplySnapshotChunkProtoMsg): ResponseApplySnapshotChunk {
    return ResponseApplySnapshotChunk.decode(message.value);
  },
  toProto(message: ResponseApplySnapshotChunk): Uint8Array {
    return ResponseApplySnapshotChunk.encode(message).finish();
  },
  toProtoMsg(message: ResponseApplySnapshotChunk): ResponseApplySnapshotChunkProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseApplySnapshotChunk",
      value: ResponseApplySnapshotChunk.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponsePrepareProposal(): ResponsePrepareProposal {
  return {
    txs: []
  };
}
export const ResponsePrepareProposal = {
  typeUrl: "/tendermint.abci.ResponsePrepareProposal",
  is(o: any): o is ResponsePrepareProposal {
    return o && (o.$typeUrl === ResponsePrepareProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  isAmino(o: any): o is ResponsePrepareProposalAmino {
    return o && (o.$typeUrl === ResponsePrepareProposal.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  encode(message: ResponsePrepareProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponsePrepareProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePrepareProposal();
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
  fromPartial(object: DeepPartial<ResponsePrepareProposal>): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ResponsePrepareProposalAmino): ResponsePrepareProposal {
    const message = createBaseResponsePrepareProposal();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: ResponsePrepareProposal): ResponsePrepareProposalAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: ResponsePrepareProposalAminoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponsePrepareProposalProtoMsg): ResponsePrepareProposal {
    return ResponsePrepareProposal.decode(message.value);
  },
  toProto(message: ResponsePrepareProposal): Uint8Array {
    return ResponsePrepareProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponsePrepareProposal): ResponsePrepareProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponsePrepareProposal",
      value: ResponsePrepareProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseProcessProposal(): ResponseProcessProposal {
  return {
    status: 0
  };
}
export const ResponseProcessProposal = {
  typeUrl: "/tendermint.abci.ResponseProcessProposal",
  is(o: any): o is ResponseProcessProposal {
    return o && (o.$typeUrl === ResponseProcessProposal.typeUrl || isSet(o.status));
  },
  isAmino(o: any): o is ResponseProcessProposalAmino {
    return o && (o.$typeUrl === ResponseProcessProposal.typeUrl || isSet(o.status));
  },
  encode(message: ResponseProcessProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseProcessProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseProcessProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseProcessProposal>): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseProcessProposalAmino): ResponseProcessProposal {
    const message = createBaseResponseProcessProposal();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ResponseProcessProposal): ResponseProcessProposalAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseProcessProposalAminoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProcessProposalProtoMsg): ResponseProcessProposal {
    return ResponseProcessProposal.decode(message.value);
  },
  toProto(message: ResponseProcessProposal): Uint8Array {
    return ResponseProcessProposal.encode(message).finish();
  },
  toProtoMsg(message: ResponseProcessProposal): ResponseProcessProposalProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseProcessProposal",
      value: ResponseProcessProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseExtendVote(): ResponseExtendVote {
  return {
    vote_extension: new Uint8Array()
  };
}
export const ResponseExtendVote = {
  typeUrl: "/tendermint.abci.ResponseExtendVote",
  is(o: any): o is ResponseExtendVote {
    return o && (o.$typeUrl === ResponseExtendVote.typeUrl || o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string");
  },
  isAmino(o: any): o is ResponseExtendVoteAmino {
    return o && (o.$typeUrl === ResponseExtendVote.typeUrl || o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string");
  },
  encode(message: ResponseExtendVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote_extension.length !== 0) {
      writer.uint32(10).bytes(message.vote_extension);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseExtendVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseExtendVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_extension = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseExtendVote>): ResponseExtendVote {
    const message = createBaseResponseExtendVote();
    message.vote_extension = object.vote_extension ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseExtendVoteAmino): ResponseExtendVote {
    const message = createBaseResponseExtendVote();
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.vote_extension = bytesFromBase64(object.vote_extension);
    }
    return message;
  },
  toAmino(message: ResponseExtendVote): ResponseExtendVoteAmino {
    const obj: any = {};
    obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseExtendVoteAminoMsg): ResponseExtendVote {
    return ResponseExtendVote.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseExtendVoteProtoMsg): ResponseExtendVote {
    return ResponseExtendVote.decode(message.value);
  },
  toProto(message: ResponseExtendVote): Uint8Array {
    return ResponseExtendVote.encode(message).finish();
  },
  toProtoMsg(message: ResponseExtendVote): ResponseExtendVoteProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseExtendVote",
      value: ResponseExtendVote.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseVerifyVoteExtension(): ResponseVerifyVoteExtension {
  return {
    status: 0
  };
}
export const ResponseVerifyVoteExtension = {
  typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
  is(o: any): o is ResponseVerifyVoteExtension {
    return o && (o.$typeUrl === ResponseVerifyVoteExtension.typeUrl || isSet(o.status));
  },
  isAmino(o: any): o is ResponseVerifyVoteExtensionAmino {
    return o && (o.$typeUrl === ResponseVerifyVoteExtension.typeUrl || isSet(o.status));
  },
  encode(message: ResponseVerifyVoteExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseVerifyVoteExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseVerifyVoteExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseVerifyVoteExtension>): ResponseVerifyVoteExtension {
    const message = createBaseResponseVerifyVoteExtension();
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: ResponseVerifyVoteExtensionAmino): ResponseVerifyVoteExtension {
    const message = createBaseResponseVerifyVoteExtension();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: ResponseVerifyVoteExtension): ResponseVerifyVoteExtensionAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: ResponseVerifyVoteExtensionAminoMsg): ResponseVerifyVoteExtension {
    return ResponseVerifyVoteExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseVerifyVoteExtensionProtoMsg): ResponseVerifyVoteExtension {
    return ResponseVerifyVoteExtension.decode(message.value);
  },
  toProto(message: ResponseVerifyVoteExtension): Uint8Array {
    return ResponseVerifyVoteExtension.encode(message).finish();
  },
  toProtoMsg(message: ResponseVerifyVoteExtension): ResponseVerifyVoteExtensionProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseVerifyVoteExtension",
      value: ResponseVerifyVoteExtension.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResponseFinalizeBlock(): ResponseFinalizeBlock {
  return {
    events: [],
    tx_results: [],
    validator_updates: [],
    consensus_param_updates: undefined,
    app_hash: new Uint8Array()
  };
}
export const ResponseFinalizeBlock = {
  typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
  is(o: any): o is ResponseFinalizeBlock {
    return o && (o.$typeUrl === ResponseFinalizeBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && Array.isArray(o.tx_results) && (!o.tx_results.length || ExecTxResult.is(o.tx_results[0])) && Array.isArray(o.validator_updates) && (!o.validator_updates.length || ValidatorUpdate.is(o.validator_updates[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  isAmino(o: any): o is ResponseFinalizeBlockAmino {
    return o && (o.$typeUrl === ResponseFinalizeBlock.typeUrl || Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && Array.isArray(o.tx_results) && (!o.tx_results.length || ExecTxResult.isAmino(o.tx_results[0])) && Array.isArray(o.validator_updates) && (!o.validator_updates.length || ValidatorUpdate.isAmino(o.validator_updates[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  encode(message: ResponseFinalizeBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tx_results) {
      ExecTxResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validator_updates) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.consensus_param_updates !== undefined) {
      ConsensusParams.encode(message.consensus_param_updates, writer.uint32(34).fork()).ldelim();
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(42).bytes(message.app_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResponseFinalizeBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFinalizeBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tx_results.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        case 3:
          message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 4:
          message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 5:
          message.app_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ResponseFinalizeBlock>): ResponseFinalizeBlock {
    const message = createBaseResponseFinalizeBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.tx_results = object.tx_results?.map(e => ExecTxResult.fromPartial(e)) || [];
    message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ResponseFinalizeBlockAmino): ResponseFinalizeBlock {
    const message = createBaseResponseFinalizeBlock();
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    message.tx_results = object.tx_results?.map(e => ExecTxResult.fromAmino(e)) || [];
    message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromAmino(e)) || [];
    if (object.consensus_param_updates !== undefined && object.consensus_param_updates !== null) {
      message.consensus_param_updates = ConsensusParams.fromAmino(object.consensus_param_updates);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ResponseFinalizeBlock): ResponseFinalizeBlockAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    if (message.tx_results) {
      obj.tx_results = message.tx_results.map(e => e ? ExecTxResult.toAmino(e) : undefined);
    } else {
      obj.tx_results = message.tx_results;
    }
    if (message.validator_updates) {
      obj.validator_updates = message.validator_updates.map(e => e ? ValidatorUpdate.toAmino(e) : undefined);
    } else {
      obj.validator_updates = message.validator_updates;
    }
    obj.consensus_param_updates = message.consensus_param_updates ? ConsensusParams.toAmino(message.consensus_param_updates) : undefined;
    obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResponseFinalizeBlockAminoMsg): ResponseFinalizeBlock {
    return ResponseFinalizeBlock.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseFinalizeBlockProtoMsg): ResponseFinalizeBlock {
    return ResponseFinalizeBlock.decode(message.value);
  },
  toProto(message: ResponseFinalizeBlock): Uint8Array {
    return ResponseFinalizeBlock.encode(message).finish();
  },
  toProtoMsg(message: ResponseFinalizeBlock): ResponseFinalizeBlockProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ResponseFinalizeBlock",
      value: ResponseFinalizeBlock.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Event.registerTypeUrl();
    ExecTxResult.registerTypeUrl();
    ValidatorUpdate.registerTypeUrl();
    ConsensusParams.registerTypeUrl();
  }
};
function createBaseCommitInfo(): CommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const CommitInfo = {
  typeUrl: "/tendermint.abci.CommitInfo",
  is(o: any): o is CommitInfo {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.is(o.votes[0])));
  },
  isAmino(o: any): o is CommitInfoAmino {
    return o && (o.$typeUrl === CommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || VoteInfo.isAmino(o.votes[0])));
  },
  encode(message: CommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitInfoAmino): CommitInfo {
    const message = createBaseCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map(e => VoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CommitInfo): CommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? VoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo {
    return CommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo {
    return CommitInfo.decode(message.value);
  },
  toProto(message: CommitInfo): Uint8Array {
    return CommitInfo.encode(message).finish();
  },
  toProtoMsg(message: CommitInfo): CommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.CommitInfo",
      value: CommitInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    VoteInfo.registerTypeUrl();
  }
};
function createBaseExtendedCommitInfo(): ExtendedCommitInfo {
  return {
    round: 0,
    votes: []
  };
}
export const ExtendedCommitInfo = {
  typeUrl: "/tendermint.abci.ExtendedCommitInfo",
  is(o: any): o is ExtendedCommitInfo {
    return o && (o.$typeUrl === ExtendedCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || ExtendedVoteInfo.is(o.votes[0])));
  },
  isAmino(o: any): o is ExtendedCommitInfoAmino {
    return o && (o.$typeUrl === ExtendedCommitInfo.typeUrl || typeof o.round === "number" && Array.isArray(o.votes) && (!o.votes.length || ExtendedVoteInfo.isAmino(o.votes[0])));
  },
  encode(message: ExtendedCommitInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }
    for (const v of message.votes) {
      ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;
        case 2:
          message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => ExtendedVoteInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ExtendedCommitInfoAmino): ExtendedCommitInfo {
    const message = createBaseExtendedCommitInfo();
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    message.votes = object.votes?.map(e => ExtendedVoteInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExtendedCommitInfo): ExtendedCommitInfoAmino {
    const obj: any = {};
    obj.round = message.round === 0 ? undefined : message.round;
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? ExtendedVoteInfo.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    return obj;
  },
  fromAminoMsg(object: ExtendedCommitInfoAminoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedCommitInfoProtoMsg): ExtendedCommitInfo {
    return ExtendedCommitInfo.decode(message.value);
  },
  toProto(message: ExtendedCommitInfo): Uint8Array {
    return ExtendedCommitInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedCommitInfo): ExtendedCommitInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedCommitInfo",
      value: ExtendedCommitInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExtendedVoteInfo.registerTypeUrl();
  }
};
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/tendermint.abci.Event",
  is(o: any): o is Event {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.is(o.attributes[0])));
  },
  isAmino(o: any): o is EventAmino {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.isAmino(o.attributes[0])));
  },
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map(e => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Event",
      value: Event.encode(message).finish()
    };
  },
  registerTypeUrl() {
    EventAttribute.registerTypeUrl();
  }
};
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: "",
    index: false
  };
}
export const EventAttribute = {
  typeUrl: "/tendermint.abci.EventAttribute",
  is(o: any): o is EventAttribute {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string" && typeof o.index === "boolean");
  },
  isAmino(o: any): o is EventAttributeAmino {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string" && typeof o.index === "boolean");
  },
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        case 3:
          message.index = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.index = object.index ?? false;
    return message;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    const message = createBaseEventAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    return message;
  },
  toAmino(message: EventAttribute): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    obj.index = message.index === false ? undefined : message.index;
    return obj;
  },
  fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute {
    return EventAttribute.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute {
    return EventAttribute.decode(message.value);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/tendermint.abci.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: BigInt(0),
    gas_used: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ExecTxResult = {
  typeUrl: "/tendermint.abci.ExecTxResult",
  is(o: any): o is ExecTxResult {
    return o && (o.$typeUrl === ExecTxResult.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ExecTxResultAmino {
    return o && (o.$typeUrl === ExecTxResult.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ExecTxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gas_wanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gas_wanted);
    }
    if (message.gas_used !== BigInt(0)) {
      writer.uint32(48).int64(message.gas_used);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gas_wanted = reader.int64();
          break;
        case 6:
          message.gas_used = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ExecTxResultAmino): ExecTxResult {
    const message = createBaseExecTxResult();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gas_wanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ExecTxResult): ExecTxResultAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gas_wanted !== BigInt(0) ? message.gas_wanted?.toString() : undefined;
    obj.gas_used = message.gas_used !== BigInt(0) ? message.gas_used?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ExecTxResultAminoMsg): ExecTxResult {
    return ExecTxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: ExecTxResultProtoMsg): ExecTxResult {
    return ExecTxResult.decode(message.value);
  },
  toProto(message: ExecTxResult): Uint8Array {
    return ExecTxResult.encode(message).finish();
  },
  toProtoMsg(message: ExecTxResult): ExecTxResultProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExecTxResult",
      value: ExecTxResult.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Event.registerTypeUrl();
  }
};
function createBaseTxResult(): TxResult {
  return {
    height: BigInt(0),
    index: 0,
    tx: new Uint8Array(),
    result: ExecTxResult.fromPartial({})
  };
}
export const TxResult = {
  typeUrl: "/tendermint.abci.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ExecTxResult.is(o.result));
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.height === "bigint" && typeof o.index === "number" && (o.tx instanceof Uint8Array || typeof o.tx === "string") && ExecTxResult.isAmino(o.result));
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }
    if (message.result !== undefined) {
      ExecTxResult.encode(message.result, writer.uint32(34).fork()).ldelim();
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
          message.index = reader.uint32();
          break;
        case 3:
          message.tx = reader.bytes();
          break;
        case 4:
          message.result = ExecTxResult.decode(reader, reader.uint32());
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
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ExecTxResult.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = ExecTxResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.tx = message.tx ? base64FromBytes(message.tx) : undefined;
    obj.result = message.result ? ExecTxResult.toAmino(message.result) : undefined;
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
      typeUrl: "/tendermint.abci.TxResult",
      value: TxResult.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExecTxResult.registerTypeUrl();
  }
};
function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/tendermint.abci.Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && typeof o.power === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Validator",
      value: Validator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pub_key: PublicKey.fromPartial({}),
    power: BigInt(0)
  };
}
export const ValidatorUpdate = {
  typeUrl: "/tendermint.abci.ValidatorUpdate",
  is(o: any): o is ValidatorUpdate {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.is(o.pub_key) && typeof o.power === "bigint");
  },
  isAmino(o: any): o is ValidatorUpdateAmino {
    return o && (o.$typeUrl === ValidatorUpdate.typeUrl || PublicKey.isAmino(o.pub_key) && typeof o.power === "bigint");
  },
  encode(message: ValidatorUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ValidatorUpdateAmino): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pub_key = PublicKey.fromAmino(object.pub_key);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: ValidatorUpdate): ValidatorUpdateAmino {
    const obj: any = {};
    obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorUpdateAminoMsg): ValidatorUpdate {
    return ValidatorUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorUpdateProtoMsg): ValidatorUpdate {
    return ValidatorUpdate.decode(message.value);
  },
  toProto(message: ValidatorUpdate): Uint8Array {
    return ValidatorUpdate.encode(message).finish();
  },
  toProtoMsg(message: ValidatorUpdate): ValidatorUpdateProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ValidatorUpdate",
      value: ValidatorUpdate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PublicKey.registerTypeUrl();
  }
};
function createBaseVoteInfo(): VoteInfo {
  return {
    validator: Validator.fromPartial({}),
    block_id_flag: 0
  };
}
export const VoteInfo = {
  typeUrl: "/tendermint.abci.VoteInfo",
  is(o: any): o is VoteInfo {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.is(o.validator) && isSet(o.block_id_flag));
  },
  isAmino(o: any): o is VoteInfoAmino {
    return o && (o.$typeUrl === VoteInfo.typeUrl || Validator.isAmino(o.validator) && isSet(o.block_id_flag));
  },
  encode(message: VoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.block_id_flag !== 0) {
      writer.uint32(24).int32(message.block_id_flag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.block_id_flag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.block_id_flag = object.block_id_flag ?? 0;
    return message;
  },
  fromAmino(object: VoteInfoAmino): VoteInfo {
    const message = createBaseVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.block_id_flag = object.block_id_flag;
    }
    return message;
  },
  toAmino(message: VoteInfo): VoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.block_id_flag = message.block_id_flag === 0 ? undefined : message.block_id_flag;
    return obj;
  },
  fromAminoMsg(object: VoteInfoAminoMsg): VoteInfo {
    return VoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteInfoProtoMsg): VoteInfo {
    return VoteInfo.decode(message.value);
  },
  toProto(message: VoteInfo): Uint8Array {
    return VoteInfo.encode(message).finish();
  },
  toProtoMsg(message: VoteInfo): VoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.VoteInfo",
      value: VoteInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
  }
};
function createBaseExtendedVoteInfo(): ExtendedVoteInfo {
  return {
    validator: Validator.fromPartial({}),
    vote_extension: new Uint8Array(),
    extension_signature: new Uint8Array(),
    block_id_flag: 0
  };
}
export const ExtendedVoteInfo = {
  typeUrl: "/tendermint.abci.ExtendedVoteInfo",
  is(o: any): o is ExtendedVoteInfo {
    return o && (o.$typeUrl === ExtendedVoteInfo.typeUrl || Validator.is(o.validator) && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string") && isSet(o.block_id_flag));
  },
  isAmino(o: any): o is ExtendedVoteInfoAmino {
    return o && (o.$typeUrl === ExtendedVoteInfo.typeUrl || Validator.isAmino(o.validator) && (o.vote_extension instanceof Uint8Array || typeof o.vote_extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string") && isSet(o.block_id_flag));
  },
  encode(message: ExtendedVoteInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote_extension.length !== 0) {
      writer.uint32(26).bytes(message.vote_extension);
    }
    if (message.extension_signature.length !== 0) {
      writer.uint32(34).bytes(message.extension_signature);
    }
    if (message.block_id_flag !== 0) {
      writer.uint32(40).int32(message.block_id_flag);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExtendedVoteInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtendedVoteInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.vote_extension = reader.bytes();
          break;
        case 4:
          message.extension_signature = reader.bytes();
          break;
        case 5:
          message.block_id_flag = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.vote_extension = object.vote_extension ?? new Uint8Array();
    message.extension_signature = object.extension_signature ?? new Uint8Array();
    message.block_id_flag = object.block_id_flag ?? 0;
    return message;
  },
  fromAmino(object: ExtendedVoteInfoAmino): ExtendedVoteInfo {
    const message = createBaseExtendedVoteInfo();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.vote_extension !== undefined && object.vote_extension !== null) {
      message.vote_extension = bytesFromBase64(object.vote_extension);
    }
    if (object.extension_signature !== undefined && object.extension_signature !== null) {
      message.extension_signature = bytesFromBase64(object.extension_signature);
    }
    if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
      message.block_id_flag = object.block_id_flag;
    }
    return message;
  },
  toAmino(message: ExtendedVoteInfo): ExtendedVoteInfoAmino {
    const obj: any = {};
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.vote_extension = message.vote_extension ? base64FromBytes(message.vote_extension) : undefined;
    obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
    obj.block_id_flag = message.block_id_flag === 0 ? undefined : message.block_id_flag;
    return obj;
  },
  fromAminoMsg(object: ExtendedVoteInfoAminoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ExtendedVoteInfoProtoMsg): ExtendedVoteInfo {
    return ExtendedVoteInfo.decode(message.value);
  },
  toProto(message: ExtendedVoteInfo): Uint8Array {
    return ExtendedVoteInfo.encode(message).finish();
  },
  toProtoMsg(message: ExtendedVoteInfo): ExtendedVoteInfoProtoMsg {
    return {
      typeUrl: "/tendermint.abci.ExtendedVoteInfo",
      value: ExtendedVoteInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
  }
};
function createBaseMisbehavior(): Misbehavior {
  return {
    type: 0,
    validator: Validator.fromPartial({}),
    height: BigInt(0),
    time: new Date(),
    total_voting_power: BigInt(0)
  };
}
export const Misbehavior = {
  typeUrl: "/tendermint.abci.Misbehavior",
  is(o: any): o is Misbehavior {
    return o && (o.$typeUrl === Misbehavior.typeUrl || isSet(o.type) && Validator.is(o.validator) && typeof o.height === "bigint" && Timestamp.is(o.time) && typeof o.total_voting_power === "bigint");
  },
  isAmino(o: any): o is MisbehaviorAmino {
    return o && (o.$typeUrl === Misbehavior.typeUrl || isSet(o.type) && Validator.isAmino(o.validator) && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && typeof o.total_voting_power === "bigint");
  },
  encode(message: Misbehavior, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }
    if (message.total_voting_power !== BigInt(0)) {
      writer.uint32(40).int64(message.total_voting_power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehavior {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehavior();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.total_voting_power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Misbehavior>): Misbehavior {
    const message = createBaseMisbehavior();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MisbehaviorAmino): Misbehavior {
    const message = createBaseMisbehavior();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromAmino(object.validator);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.total_voting_power = BigInt(object.total_voting_power);
    }
    return message;
  },
  toAmino(message: Misbehavior): MisbehaviorAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.validator = message.validator ? Validator.toAmino(message.validator) : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
    obj.total_voting_power = message.total_voting_power !== BigInt(0) ? message.total_voting_power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviorAminoMsg): Misbehavior {
    return Misbehavior.fromAmino(object.value);
  },
  fromProtoMsg(message: MisbehaviorProtoMsg): Misbehavior {
    return Misbehavior.decode(message.value);
  },
  toProto(message: Misbehavior): Uint8Array {
    return Misbehavior.encode(message).finish();
  },
  toProtoMsg(message: Misbehavior): MisbehaviorProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Misbehavior",
      value: Misbehavior.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Validator.registerTypeUrl();
  }
};
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}
export const Snapshot = {
  typeUrl: "/tendermint.abci.Snapshot",
  is(o: any): o is Snapshot {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  isAmino(o: any): o is SnapshotAmino {
    return o && (o.$typeUrl === Snapshot.typeUrl || typeof o.height === "bigint" && typeof o.format === "number" && typeof o.chunks === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string") && (o.metadata instanceof Uint8Array || typeof o.metadata === "string"));
  },
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/tendermint.abci.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};