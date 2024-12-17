import { ConsensusParams } from "../types/params";
import { ProofOps } from "../crypto/proof";
import { PublicKey } from "../crypto/keys";
import { BlockIDFlag } from "../types/validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export declare enum CheckTxType {
    NEW = 0,
    RECHECK = 1,
    UNRECOGNIZED = -1
}
export declare function checkTxTypeFromJSON(object: any): CheckTxType;
export declare function checkTxTypeToJSON(object: CheckTxType): string;
export declare enum ResponseOfferSnapshot_Result {
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
    UNRECOGNIZED = -1
}
export declare function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result;
export declare function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string;
export declare enum ResponseApplySnapshotChunk_Result {
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
    UNRECOGNIZED = -1
}
export declare function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result;
export declare function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string;
export declare enum ResponseProcessProposal_ProposalStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare function responseProcessProposal_ProposalStatusFromJSON(object: any): ResponseProcessProposal_ProposalStatus;
export declare function responseProcessProposal_ProposalStatusToJSON(object: ResponseProcessProposal_ProposalStatus): string;
export declare enum ResponseVerifyVoteExtension_VerifyStatus {
    UNKNOWN = 0,
    ACCEPT = 1,
    /**
     * REJECT - Rejecting the vote extension will reject the entire precommit by the sender.
     * Incorrectly implementing this thus has liveness implications as it may affect
     * CometBFT's ability to receive 2/3+ valid votes to finalize the block.
     * Honest nodes should never be rejected.
     */
    REJECT = 2,
    UNRECOGNIZED = -1
}
export declare function responseVerifyVoteExtension_VerifyStatusFromJSON(object: any): ResponseVerifyVoteExtension_VerifyStatus;
export declare function responseVerifyVoteExtension_VerifyStatusToJSON(object: ResponseVerifyVoteExtension_VerifyStatus): string;
export declare enum MisbehaviorType {
    UNKNOWN = 0,
    DUPLICATE_VOTE = 1,
    LIGHT_CLIENT_ATTACK = 2,
    UNRECOGNIZED = -1
}
export declare function misbehaviorTypeFromJSON(object: any): MisbehaviorType;
export declare function misbehaviorTypeToJSON(object: MisbehaviorType): string;
export interface Request {
    echo?: RequestEcho;
    flush?: RequestFlush;
    info?: RequestInfo;
    initChain?: RequestInitChain;
    query?: RequestQuery;
    checkTx?: RequestCheckTx;
    commit?: RequestCommit;
    listSnapshots?: RequestListSnapshots;
    offerSnapshot?: RequestOfferSnapshot;
    loadSnapshotChunk?: RequestLoadSnapshotChunk;
    applySnapshotChunk?: RequestApplySnapshotChunk;
    prepareProposal?: RequestPrepareProposal;
    processProposal?: RequestProcessProposal;
    extendVote?: RequestExtendVote;
    verifyVoteExtension?: RequestVerifyVoteExtension;
    finalizeBlock?: RequestFinalizeBlock;
}
export interface RequestEcho {
    message: string;
}
export interface RequestFlush {
}
export interface RequestInfo {
    version: string;
    blockVersion: bigint;
    p2pVersion: bigint;
    abciVersion: string;
}
export interface RequestInitChain {
    time: Date;
    chainId: string;
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appStateBytes: Uint8Array;
    initialHeight: bigint;
}
export interface RequestQuery {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
export interface RequestCheckTx {
    tx: Uint8Array;
    type: CheckTxType;
}
export interface RequestCommit {
}
/** lists available snapshots */
export interface RequestListSnapshots {
}
/** offers a snapshot to the application */
export interface RequestOfferSnapshot {
    /** snapshot offered by peers */
    snapshot?: Snapshot;
    /** light client-verified app hash for snapshot height */
    appHash: Uint8Array;
}
/** loads a snapshot chunk */
export interface RequestLoadSnapshotChunk {
    height: bigint;
    format: number;
    chunk: number;
}
/** Applies a snapshot chunk */
export interface RequestApplySnapshotChunk {
    index: number;
    chunk: Uint8Array;
    sender: string;
}
export interface RequestPrepareProposal {
    /** the modified transactions cannot exceed this size. */
    maxTxBytes: bigint;
    /**
     * txs is an array of transactions that will be included in a block,
     * sent to the app for possible modifications.
     */
    txs: Uint8Array[];
    localLastCommit: ExtendedCommitInfo;
    misbehavior: Misbehavior[];
    height: bigint;
    time: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the validator proposing the block. */
    proposerAddress: Uint8Array;
}
export interface RequestProcessProposal {
    txs: Uint8Array[];
    proposedLastCommit: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the proposed block. */
    hash: Uint8Array;
    height: bigint;
    time: Date;
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
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
    proposedLastCommit: CommitInfo;
    misbehavior: Misbehavior[];
    nextValidatorsHash: Uint8Array;
    /** address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
/** Verify the vote extension */
export interface RequestVerifyVoteExtension {
    /** the hash of the block that this received vote corresponds to */
    hash: Uint8Array;
    /** the validator that signed the vote extension */
    validatorAddress: Uint8Array;
    height: bigint;
    voteExtension: Uint8Array;
}
export interface RequestFinalizeBlock {
    txs: Uint8Array[];
    decidedLastCommit: CommitInfo;
    misbehavior: Misbehavior[];
    /** hash is the merkle root hash of the fields of the decided block. */
    hash: Uint8Array;
    height: bigint;
    time: Date;
    nextValidatorsHash: Uint8Array;
    /** proposer_address is the address of the public key of the original proposer of the block. */
    proposerAddress: Uint8Array;
}
export interface Response {
    exception?: ResponseException;
    echo?: ResponseEcho;
    flush?: ResponseFlush;
    info?: ResponseInfo;
    initChain?: ResponseInitChain;
    query?: ResponseQuery;
    checkTx?: ResponseCheckTx;
    commit?: ResponseCommit;
    listSnapshots?: ResponseListSnapshots;
    offerSnapshot?: ResponseOfferSnapshot;
    loadSnapshotChunk?: ResponseLoadSnapshotChunk;
    applySnapshotChunk?: ResponseApplySnapshotChunk;
    prepareProposal?: ResponsePrepareProposal;
    processProposal?: ResponseProcessProposal;
    extendVote?: ResponseExtendVote;
    verifyVoteExtension?: ResponseVerifyVoteExtension;
    finalizeBlock?: ResponseFinalizeBlock;
}
/** nondeterministic */
export interface ResponseException {
    error: string;
}
export interface ResponseEcho {
    message: string;
}
export interface ResponseFlush {
}
export interface ResponseInfo {
    data: string;
    version: string;
    appVersion: bigint;
    lastBlockHeight: bigint;
    lastBlockAppHash: Uint8Array;
}
export interface ResponseInitChain {
    consensusParams?: ConsensusParams;
    validators: ValidatorUpdate[];
    appHash: Uint8Array;
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
    proofOps?: ProofOps;
    height: bigint;
    codespace: string;
}
export interface ResponseCheckTx {
    code: number;
    data: Uint8Array;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
}
export interface ResponseCommit {
    retainHeight: bigint;
}
export interface ResponseListSnapshots {
    snapshots: Snapshot[];
}
export interface ResponseOfferSnapshot {
    result: ResponseOfferSnapshot_Result;
}
export interface ResponseLoadSnapshotChunk {
    chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
    result: ResponseApplySnapshotChunk_Result;
    /** Chunks to refetch and reapply */
    refetchChunks: number[];
    /** Chunk senders to reject and ban */
    rejectSenders: string[];
}
export interface ResponsePrepareProposal {
    txs: Uint8Array[];
}
export interface ResponseProcessProposal {
    status: ResponseProcessProposal_ProposalStatus;
}
export interface ResponseExtendVote {
    voteExtension: Uint8Array;
}
export interface ResponseVerifyVoteExtension {
    status: ResponseVerifyVoteExtension_VerifyStatus;
}
export interface ResponseFinalizeBlock {
    /** set of block events emmitted as part of executing the block */
    events: Event[];
    /**
     * the result of executing each transaction including the events
     * the particular transction emitted. This should match the order
     * of the transactions delivered in the block itself
     */
    txResults: ExecTxResult[];
    /** a list of updates to the validator set. These will reflect the validator set at current height + 2. */
    validatorUpdates: ValidatorUpdate[];
    /** updates to the consensus params, if any. */
    consensusParamUpdates?: ConsensusParams;
    /**
     * app_hash is the hash of the applications' state which is used to confirm that execution of the transactions was
     * deterministic. It is up to the application to decide which algorithm to use.
     */
    appHash: Uint8Array;
}
export interface CommitInfo {
    round: number;
    votes: VoteInfo[];
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
/**
 * Event allows application developers to attach additional information to
 * ResponseFinalizeBlock and ResponseCheckTx.
 * Later, transactions may be queried using these events.
 */
export interface Event {
    type: string;
    attributes: EventAttribute[];
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
    key: string;
    value: string;
    /** nondeterministic */
    index: boolean;
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
    gasWanted: bigint;
    gasUsed: bigint;
    events: Event[];
    codespace: string;
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
export interface Validator {
    /** The first 20 bytes of SHA256(public key) */
    address: Uint8Array;
    /** PubKey pub_key = 2 [(gogoproto.nullable)=false]; */
    power: bigint;
}
export interface ValidatorUpdate {
    pubKey: PublicKey;
    power: bigint;
}
export interface VoteInfo {
    validator: Validator;
    blockIdFlag: BlockIDFlag;
}
export interface ExtendedVoteInfo {
    /** The validator that sent the vote. */
    validator: Validator;
    /** Non-deterministic extension provided by the sending validator's application. */
    voteExtension: Uint8Array;
    /** Vote extension signature created by CometBFT */
    extensionSignature: Uint8Array;
    /** block_id_flag indicates whether the validator voted for a block, nil, or did not vote at all */
    blockIdFlag: BlockIDFlag;
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
    totalVotingPower: bigint;
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
export declare const Request: {
    typeUrl: string;
    encode(message: Request, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Request;
    fromPartial(object: DeepPartial<Request>): Request;
};
export declare const RequestEcho: {
    typeUrl: string;
    encode(message: RequestEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho;
    fromPartial(object: DeepPartial<RequestEcho>): RequestEcho;
};
export declare const RequestFlush: {
    typeUrl: string;
    encode(_: RequestFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush;
    fromPartial(_: DeepPartial<RequestFlush>): RequestFlush;
};
export declare const RequestInfo: {
    typeUrl: string;
    encode(message: RequestInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo;
    fromPartial(object: DeepPartial<RequestInfo>): RequestInfo;
};
export declare const RequestInitChain: {
    typeUrl: string;
    encode(message: RequestInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain;
    fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain;
};
export declare const RequestQuery: {
    typeUrl: string;
    encode(message: RequestQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery;
    fromPartial(object: DeepPartial<RequestQuery>): RequestQuery;
};
export declare const RequestCheckTx: {
    typeUrl: string;
    encode(message: RequestCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx;
    fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx;
};
export declare const RequestCommit: {
    typeUrl: string;
    encode(_: RequestCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit;
    fromPartial(_: DeepPartial<RequestCommit>): RequestCommit;
};
export declare const RequestListSnapshots: {
    typeUrl: string;
    encode(_: RequestListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots;
    fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots;
};
export declare const RequestOfferSnapshot: {
    typeUrl: string;
    encode(message: RequestOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot;
    fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot;
};
export declare const RequestLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: RequestLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk;
    fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk;
};
export declare const RequestApplySnapshotChunk: {
    typeUrl: string;
    encode(message: RequestApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk;
    fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk;
};
export declare const RequestPrepareProposal: {
    typeUrl: string;
    encode(message: RequestPrepareProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestPrepareProposal;
    fromPartial(object: DeepPartial<RequestPrepareProposal>): RequestPrepareProposal;
};
export declare const RequestProcessProposal: {
    typeUrl: string;
    encode(message: RequestProcessProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestProcessProposal;
    fromPartial(object: DeepPartial<RequestProcessProposal>): RequestProcessProposal;
};
export declare const RequestExtendVote: {
    typeUrl: string;
    encode(message: RequestExtendVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestExtendVote;
    fromPartial(object: DeepPartial<RequestExtendVote>): RequestExtendVote;
};
export declare const RequestVerifyVoteExtension: {
    typeUrl: string;
    encode(message: RequestVerifyVoteExtension, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestVerifyVoteExtension;
    fromPartial(object: DeepPartial<RequestVerifyVoteExtension>): RequestVerifyVoteExtension;
};
export declare const RequestFinalizeBlock: {
    typeUrl: string;
    encode(message: RequestFinalizeBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RequestFinalizeBlock;
    fromPartial(object: DeepPartial<RequestFinalizeBlock>): RequestFinalizeBlock;
};
export declare const Response: {
    typeUrl: string;
    encode(message: Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Response;
    fromPartial(object: DeepPartial<Response>): Response;
};
export declare const ResponseException: {
    typeUrl: string;
    encode(message: ResponseException, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseException;
    fromPartial(object: DeepPartial<ResponseException>): ResponseException;
};
export declare const ResponseEcho: {
    typeUrl: string;
    encode(message: ResponseEcho, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho;
    fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho;
};
export declare const ResponseFlush: {
    typeUrl: string;
    encode(_: ResponseFlush, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush;
    fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush;
};
export declare const ResponseInfo: {
    typeUrl: string;
    encode(message: ResponseInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo;
    fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo;
};
export declare const ResponseInitChain: {
    typeUrl: string;
    encode(message: ResponseInitChain, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain;
    fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain;
};
export declare const ResponseQuery: {
    typeUrl: string;
    encode(message: ResponseQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery;
    fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery;
};
export declare const ResponseCheckTx: {
    typeUrl: string;
    encode(message: ResponseCheckTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx;
    fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx;
};
export declare const ResponseCommit: {
    typeUrl: string;
    encode(message: ResponseCommit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit;
    fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit;
};
export declare const ResponseListSnapshots: {
    typeUrl: string;
    encode(message: ResponseListSnapshots, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots;
    fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots;
};
export declare const ResponseOfferSnapshot: {
    typeUrl: string;
    encode(message: ResponseOfferSnapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot;
    fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot;
};
export declare const ResponseLoadSnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseLoadSnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk;
    fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk;
};
export declare const ResponseApplySnapshotChunk: {
    typeUrl: string;
    encode(message: ResponseApplySnapshotChunk, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk;
    fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk;
};
export declare const ResponsePrepareProposal: {
    typeUrl: string;
    encode(message: ResponsePrepareProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponsePrepareProposal;
    fromPartial(object: DeepPartial<ResponsePrepareProposal>): ResponsePrepareProposal;
};
export declare const ResponseProcessProposal: {
    typeUrl: string;
    encode(message: ResponseProcessProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseProcessProposal;
    fromPartial(object: DeepPartial<ResponseProcessProposal>): ResponseProcessProposal;
};
export declare const ResponseExtendVote: {
    typeUrl: string;
    encode(message: ResponseExtendVote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseExtendVote;
    fromPartial(object: DeepPartial<ResponseExtendVote>): ResponseExtendVote;
};
export declare const ResponseVerifyVoteExtension: {
    typeUrl: string;
    encode(message: ResponseVerifyVoteExtension, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseVerifyVoteExtension;
    fromPartial(object: DeepPartial<ResponseVerifyVoteExtension>): ResponseVerifyVoteExtension;
};
export declare const ResponseFinalizeBlock: {
    typeUrl: string;
    encode(message: ResponseFinalizeBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ResponseFinalizeBlock;
    fromPartial(object: DeepPartial<ResponseFinalizeBlock>): ResponseFinalizeBlock;
};
export declare const CommitInfo: {
    typeUrl: string;
    encode(message: CommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo;
    fromPartial(object: DeepPartial<CommitInfo>): CommitInfo;
};
export declare const ExtendedCommitInfo: {
    typeUrl: string;
    encode(message: ExtendedCommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitInfo;
    fromPartial(object: DeepPartial<ExtendedCommitInfo>): ExtendedCommitInfo;
};
export declare const Event: {
    typeUrl: string;
    encode(message: Event, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Event;
    fromPartial(object: DeepPartial<Event>): Event;
};
export declare const EventAttribute: {
    typeUrl: string;
    encode(message: EventAttribute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute;
    fromPartial(object: DeepPartial<EventAttribute>): EventAttribute;
};
export declare const ExecTxResult: {
    typeUrl: string;
    encode(message: ExecTxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult;
    fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult;
};
export declare const TxResult: {
    typeUrl: string;
    encode(message: TxResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxResult;
    fromPartial(object: DeepPartial<TxResult>): TxResult;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValidatorUpdate: {
    typeUrl: string;
    encode(message: ValidatorUpdate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate;
    fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate;
};
export declare const VoteInfo: {
    typeUrl: string;
    encode(message: VoteInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo;
    fromPartial(object: DeepPartial<VoteInfo>): VoteInfo;
};
export declare const ExtendedVoteInfo: {
    typeUrl: string;
    encode(message: ExtendedVoteInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtendedVoteInfo;
    fromPartial(object: DeepPartial<ExtendedVoteInfo>): ExtendedVoteInfo;
};
export declare const Misbehavior: {
    typeUrl: string;
    encode(message: Misbehavior, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Misbehavior;
    fromPartial(object: DeepPartial<Misbehavior>): Misbehavior;
};
export declare const Snapshot: {
    typeUrl: string;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Snapshot;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
