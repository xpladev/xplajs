import { MsgEthereumTx, MsgEthereumTxAmino } from "./tx";
import { TraceConfig, TraceConfigAmino, Log, LogAmino, Params, ParamsAmino } from "./evm";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
export interface QueryAccountRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryAccountRequest";
    value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
export interface QueryAccountRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryAccountRequest";
    value: QueryAccountRequestAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code_hash is the hex-formatted code bytes from the EOA. */
    codeHash: string;
    /** nonce is the account's sequence number. */
    nonce: bigint;
}
export interface QueryAccountResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryAccountResponse";
    value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
    /** balance is the balance of the EVM denomination. */
    balance: string;
    /** code_hash is the hex-formatted code bytes from the EOA. */
    code_hash: string;
    /** nonce is the account's sequence number. */
    nonce: string;
}
export interface QueryAccountResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryAccountResponse";
    value: QueryAccountResponseAmino;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequest {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
export interface QueryCosmosAccountRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest";
    value: Uint8Array;
}
/**
 * QueryCosmosAccountRequest is the request type for the Query/CosmosAccount RPC
 * method.
 */
export interface QueryCosmosAccountRequestAmino {
    /** address is the ethereum hex address to query the account for. */
    address: string;
}
export interface QueryCosmosAccountRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryCosmosAccountRequest";
    value: QueryCosmosAccountRequestAmino;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponse {
    /** cosmos_address is the cosmos address of the account. */
    cosmosAddress: string;
    /** sequence is the account's sequence number. */
    sequence: bigint;
    /** account_number is the account number */
    accountNumber: bigint;
}
export interface QueryCosmosAccountResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse";
    value: Uint8Array;
}
/**
 * QueryCosmosAccountResponse is the response type for the Query/CosmosAccount
 * RPC method.
 */
export interface QueryCosmosAccountResponseAmino {
    /** cosmos_address is the cosmos address of the account. */
    cosmos_address: string;
    /** sequence is the account's sequence number. */
    sequence: string;
    /** account_number is the account number */
    account_number: string;
}
export interface QueryCosmosAccountResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryCosmosAccountResponse";
    value: QueryCosmosAccountResponseAmino;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequest {
    /** cons_address is the validator cons address to query the account for. */
    consAddress: string;
}
export interface QueryValidatorAccountRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorAccountRequest is the request type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountRequestAmino {
    /** cons_address is the validator cons address to query the account for. */
    cons_address: string;
}
export interface QueryValidatorAccountRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryValidatorAccountRequest";
    value: QueryValidatorAccountRequestAmino;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponse {
    /** account_address is the cosmos address of the account in bech32 format. */
    accountAddress: string;
    /** sequence is the account's sequence number. */
    sequence: bigint;
    /** account_number is the account number */
    accountNumber: bigint;
}
export interface QueryValidatorAccountResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorAccountResponse is the response type for the
 * Query/ValidatorAccount RPC method.
 */
export interface QueryValidatorAccountResponseAmino {
    /** account_address is the cosmos address of the account in bech32 format. */
    account_address: string;
    /** sequence is the account's sequence number. */
    sequence: string;
    /** account_number is the account number */
    account_number: string;
}
export interface QueryValidatorAccountResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryValidatorAccountResponse";
    value: QueryValidatorAccountResponseAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
    /** address is the ethereum hex address to query the balance for. */
    address: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the EVM denomination. */
    balance: string;
}
export interface QueryBalanceResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
export interface QueryStorageRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryStorageRequest";
    value: Uint8Array;
}
/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequestAmino {
    /** address is the ethereum hex address to query the storage state for. */
    address: string;
    /** key defines the key of the storage state */
    key: string;
}
export interface QueryStorageRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryStorageRequest";
    value: QueryStorageRequestAmino;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
    /** value defines the storage state value hash associated with the given key. */
    value: string;
}
export interface QueryStorageResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryStorageResponse";
    value: Uint8Array;
}
/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponseAmino {
    /** value defines the storage state value hash associated with the given key. */
    value: string;
}
export interface QueryStorageResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryStorageResponse";
    value: QueryStorageResponseAmino;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
export interface QueryCodeRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryCodeRequest";
    value: Uint8Array;
}
/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequestAmino {
    /** address is the ethereum hex address to query the code for. */
    address: string;
}
export interface QueryCodeRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryCodeRequest";
    value: QueryCodeRequestAmino;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
    /** code represents the code bytes from an ethereum address. */
    code: Uint8Array;
}
export interface QueryCodeResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryCodeResponse";
    value: Uint8Array;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponseAmino {
    /** code represents the code bytes from an ethereum address. */
    code: string;
}
export interface QueryCodeResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryCodeResponse";
    value: QueryCodeResponseAmino;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryTxLogsRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest";
    value: Uint8Array;
}
/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequestAmino {
    /** hash is the ethereum transaction hex hash to query the logs for. */
    hash: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryTxLogsRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryTxLogsRequest";
    value: QueryTxLogsRequestAmino;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: Log[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryTxLogsResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse";
    value: Uint8Array;
}
/** QueryTxLogsResponse is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponseAmino {
    /** logs represents the ethereum logs generated from the given transaction. */
    logs: LogAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryTxLogsResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryTxLogsResponse";
    value: QueryTxLogsResponseAmino;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
    /** params define the evm module parameters. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponseAmino {
    /** params define the evm module parameters. */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequest {
    /** args uses the same json format as the json rpc api. */
    args: Uint8Array;
    /** gas_cap defines the default gas cap to be used */
    gasCap: bigint;
    /** proposer_address of the requested block in hex format */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: bigint;
}
export interface EthCallRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.EthCallRequest";
    value: Uint8Array;
}
/** EthCallRequest defines EthCall request */
export interface EthCallRequestAmino {
    /** args uses the same json format as the json rpc api. */
    args: string;
    /** gas_cap defines the default gas cap to be used */
    gas_cap: string;
    /** proposer_address of the requested block in hex format */
    proposer_address: string;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chain_id: string;
}
export interface EthCallRequestAminoMsg {
    type: "/ethermint.evm.v1.EthCallRequest";
    value: EthCallRequestAmino;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponse {
    /** gas returns the estimated gas */
    gas: bigint;
}
export interface EstimateGasResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.EstimateGasResponse";
    value: Uint8Array;
}
/** EstimateGasResponse defines EstimateGas response */
export interface EstimateGasResponseAmino {
    /** gas returns the estimated gas */
    gas: string;
}
export interface EstimateGasResponseAminoMsg {
    type: "/ethermint.evm.v1.EstimateGasResponse";
    value: EstimateGasResponseAmino;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequest {
    /** msg is the MsgEthereumTx for the requested transaction */
    msg?: MsgEthereumTx;
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /**
     * predecessors is an array of transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTx[];
    /** block_number of requested transaction */
    blockNumber: bigint;
    /** block_hash of requested transaction */
    blockHash: string;
    /** block_time of requested transaction */
    blockTime: Date;
    /** proposer_address is the proposer of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the the eip155 chain id parsed from the requested block header */
    chainId: bigint;
}
export interface QueryTraceTxRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest";
    value: Uint8Array;
}
/** QueryTraceTxRequest defines TraceTx request */
export interface QueryTraceTxRequestAmino {
    /** msg is the MsgEthereumTx for the requested transaction */
    msg?: MsgEthereumTxAmino;
    /** trace_config holds extra parameters to trace functions. */
    trace_config?: TraceConfigAmino;
    /**
     * predecessors is an array of transactions included in the same block
     * need to be replayed first to get correct context for tracing.
     */
    predecessors: MsgEthereumTxAmino[];
    /** block_number of requested transaction */
    block_number: string;
    /** block_hash of requested transaction */
    block_hash: string;
    /** block_time of requested transaction */
    block_time: string;
    /** proposer_address is the proposer of the requested block */
    proposer_address: string;
    /** chain_id is the the eip155 chain id parsed from the requested block header */
    chain_id: string;
}
export interface QueryTraceTxRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryTraceTxRequest";
    value: QueryTraceTxRequestAmino;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
export interface QueryTraceTxResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse";
    value: Uint8Array;
}
/** QueryTraceTxResponse defines TraceTx response */
export interface QueryTraceTxResponseAmino {
    /** data is the response serialized in bytes */
    data: string;
}
export interface QueryTraceTxResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryTraceTxResponse";
    value: QueryTraceTxResponseAmino;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequest {
    /** txs is an array of messages in the block */
    txs: MsgEthereumTx[];
    /** trace_config holds extra parameters to trace functions. */
    traceConfig?: TraceConfig;
    /** block_number of the traced block */
    blockNumber: bigint;
    /** block_hash (hex) of the traced block */
    blockHash: string;
    /** block_time of the traced block */
    blockTime: Date;
    /** proposer_address is the address of the requested block */
    proposerAddress: Uint8Array;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chainId: bigint;
}
export interface QueryTraceBlockRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest";
    value: Uint8Array;
}
/** QueryTraceBlockRequest defines TraceTx request */
export interface QueryTraceBlockRequestAmino {
    /** txs is an array of messages in the block */
    txs: MsgEthereumTxAmino[];
    /** trace_config holds extra parameters to trace functions. */
    trace_config?: TraceConfigAmino;
    /** block_number of the traced block */
    block_number: string;
    /** block_hash (hex) of the traced block */
    block_hash: string;
    /** block_time of the traced block */
    block_time: string;
    /** proposer_address is the address of the requested block */
    proposer_address: string;
    /** chain_id is the eip155 chain id parsed from the requested block header */
    chain_id: string;
}
export interface QueryTraceBlockRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryTraceBlockRequest";
    value: QueryTraceBlockRequestAmino;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponse {
    /** data is the response serialized in bytes */
    data: Uint8Array;
}
export interface QueryTraceBlockResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse";
    value: Uint8Array;
}
/** QueryTraceBlockResponse defines TraceBlock response */
export interface QueryTraceBlockResponseAmino {
    /** data is the response serialized in bytes */
    data: string;
}
export interface QueryTraceBlockResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryTraceBlockResponse";
    value: QueryTraceBlockResponseAmino;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequest {
}
export interface QueryBaseFeeRequestProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest";
    value: Uint8Array;
}
/**
 * QueryBaseFeeRequest defines the request type for querying the EIP1559 base
 * fee.
 */
export interface QueryBaseFeeRequestAmino {
}
export interface QueryBaseFeeRequestAminoMsg {
    type: "/ethermint.evm.v1.QueryBaseFeeRequest";
    value: QueryBaseFeeRequestAmino;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponse {
    /** base_fee is the EIP1559 base fee */
    baseFee: string;
}
export interface QueryBaseFeeResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse";
    value: Uint8Array;
}
/** QueryBaseFeeResponse returns the EIP1559 base fee. */
export interface QueryBaseFeeResponseAmino {
    /** base_fee is the EIP1559 base fee */
    base_fee: string;
}
export interface QueryBaseFeeResponseAminoMsg {
    type: "/ethermint.evm.v1.QueryBaseFeeResponse";
    value: QueryBaseFeeResponseAmino;
}
export declare const QueryAccountRequest: {
    typeUrl: string;
    is(o: any): o is QueryAccountRequest;
    isAmino(o: any): o is QueryAccountRequestAmino;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
    fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest;
    toAmino(message: QueryAccountRequest): QueryAccountRequestAmino;
    fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest;
    fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest;
    toProto(message: QueryAccountRequest): Uint8Array;
    toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg;
};
export declare const QueryAccountResponse: {
    typeUrl: string;
    is(o: any): o is QueryAccountResponse;
    isAmino(o: any): o is QueryAccountResponseAmino;
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
    fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse;
    toAmino(message: QueryAccountResponse): QueryAccountResponseAmino;
    fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse;
    fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse;
    toProto(message: QueryAccountResponse): Uint8Array;
    toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg;
};
export declare const QueryCosmosAccountRequest: {
    typeUrl: string;
    is(o: any): o is QueryCosmosAccountRequest;
    isAmino(o: any): o is QueryCosmosAccountRequestAmino;
    encode(message: QueryCosmosAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountRequest;
    fromPartial(object: DeepPartial<QueryCosmosAccountRequest>): QueryCosmosAccountRequest;
    fromAmino(object: QueryCosmosAccountRequestAmino): QueryCosmosAccountRequest;
    toAmino(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestAmino;
    fromAminoMsg(object: QueryCosmosAccountRequestAminoMsg): QueryCosmosAccountRequest;
    fromProtoMsg(message: QueryCosmosAccountRequestProtoMsg): QueryCosmosAccountRequest;
    toProto(message: QueryCosmosAccountRequest): Uint8Array;
    toProtoMsg(message: QueryCosmosAccountRequest): QueryCosmosAccountRequestProtoMsg;
};
export declare const QueryCosmosAccountResponse: {
    typeUrl: string;
    is(o: any): o is QueryCosmosAccountResponse;
    isAmino(o: any): o is QueryCosmosAccountResponseAmino;
    encode(message: QueryCosmosAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCosmosAccountResponse;
    fromPartial(object: DeepPartial<QueryCosmosAccountResponse>): QueryCosmosAccountResponse;
    fromAmino(object: QueryCosmosAccountResponseAmino): QueryCosmosAccountResponse;
    toAmino(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseAmino;
    fromAminoMsg(object: QueryCosmosAccountResponseAminoMsg): QueryCosmosAccountResponse;
    fromProtoMsg(message: QueryCosmosAccountResponseProtoMsg): QueryCosmosAccountResponse;
    toProto(message: QueryCosmosAccountResponse): Uint8Array;
    toProtoMsg(message: QueryCosmosAccountResponse): QueryCosmosAccountResponseProtoMsg;
};
export declare const QueryValidatorAccountRequest: {
    typeUrl: string;
    is(o: any): o is QueryValidatorAccountRequest;
    isAmino(o: any): o is QueryValidatorAccountRequestAmino;
    encode(message: QueryValidatorAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountRequest;
    fromPartial(object: DeepPartial<QueryValidatorAccountRequest>): QueryValidatorAccountRequest;
    fromAmino(object: QueryValidatorAccountRequestAmino): QueryValidatorAccountRequest;
    toAmino(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestAmino;
    fromAminoMsg(object: QueryValidatorAccountRequestAminoMsg): QueryValidatorAccountRequest;
    fromProtoMsg(message: QueryValidatorAccountRequestProtoMsg): QueryValidatorAccountRequest;
    toProto(message: QueryValidatorAccountRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorAccountRequest): QueryValidatorAccountRequestProtoMsg;
};
export declare const QueryValidatorAccountResponse: {
    typeUrl: string;
    is(o: any): o is QueryValidatorAccountResponse;
    isAmino(o: any): o is QueryValidatorAccountResponseAmino;
    encode(message: QueryValidatorAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorAccountResponse;
    fromPartial(object: DeepPartial<QueryValidatorAccountResponse>): QueryValidatorAccountResponse;
    fromAmino(object: QueryValidatorAccountResponseAmino): QueryValidatorAccountResponse;
    toAmino(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseAmino;
    fromAminoMsg(object: QueryValidatorAccountResponseAminoMsg): QueryValidatorAccountResponse;
    fromProtoMsg(message: QueryValidatorAccountResponseProtoMsg): QueryValidatorAccountResponse;
    toProto(message: QueryValidatorAccountResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorAccountResponse): QueryValidatorAccountResponseProtoMsg;
};
export declare const QueryBalanceRequest: {
    typeUrl: string;
    is(o: any): o is QueryBalanceRequest;
    isAmino(o: any): o is QueryBalanceRequestAmino;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    is(o: any): o is QueryBalanceResponse;
    isAmino(o: any): o is QueryBalanceResponseAmino;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryStorageRequest: {
    typeUrl: string;
    is(o: any): o is QueryStorageRequest;
    isAmino(o: any): o is QueryStorageRequestAmino;
    encode(message: QueryStorageRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageRequest;
    fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest;
    fromAmino(object: QueryStorageRequestAmino): QueryStorageRequest;
    toAmino(message: QueryStorageRequest): QueryStorageRequestAmino;
    fromAminoMsg(object: QueryStorageRequestAminoMsg): QueryStorageRequest;
    fromProtoMsg(message: QueryStorageRequestProtoMsg): QueryStorageRequest;
    toProto(message: QueryStorageRequest): Uint8Array;
    toProtoMsg(message: QueryStorageRequest): QueryStorageRequestProtoMsg;
};
export declare const QueryStorageResponse: {
    typeUrl: string;
    is(o: any): o is QueryStorageResponse;
    isAmino(o: any): o is QueryStorageResponseAmino;
    encode(message: QueryStorageResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageResponse;
    fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse;
    fromAmino(object: QueryStorageResponseAmino): QueryStorageResponse;
    toAmino(message: QueryStorageResponse): QueryStorageResponseAmino;
    fromAminoMsg(object: QueryStorageResponseAminoMsg): QueryStorageResponse;
    fromProtoMsg(message: QueryStorageResponseProtoMsg): QueryStorageResponse;
    toProto(message: QueryStorageResponse): Uint8Array;
    toProtoMsg(message: QueryStorageResponse): QueryStorageResponseProtoMsg;
};
export declare const QueryCodeRequest: {
    typeUrl: string;
    is(o: any): o is QueryCodeRequest;
    isAmino(o: any): o is QueryCodeRequestAmino;
    encode(message: QueryCodeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeRequest;
    fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest;
    fromAmino(object: QueryCodeRequestAmino): QueryCodeRequest;
    toAmino(message: QueryCodeRequest): QueryCodeRequestAmino;
    fromAminoMsg(object: QueryCodeRequestAminoMsg): QueryCodeRequest;
    fromProtoMsg(message: QueryCodeRequestProtoMsg): QueryCodeRequest;
    toProto(message: QueryCodeRequest): Uint8Array;
    toProtoMsg(message: QueryCodeRequest): QueryCodeRequestProtoMsg;
};
export declare const QueryCodeResponse: {
    typeUrl: string;
    is(o: any): o is QueryCodeResponse;
    isAmino(o: any): o is QueryCodeResponseAmino;
    encode(message: QueryCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCodeResponse;
    fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse;
    fromAmino(object: QueryCodeResponseAmino): QueryCodeResponse;
    toAmino(message: QueryCodeResponse): QueryCodeResponseAmino;
    fromAminoMsg(object: QueryCodeResponseAminoMsg): QueryCodeResponse;
    fromProtoMsg(message: QueryCodeResponseProtoMsg): QueryCodeResponse;
    toProto(message: QueryCodeResponse): Uint8Array;
    toProtoMsg(message: QueryCodeResponse): QueryCodeResponseProtoMsg;
};
export declare const QueryTxLogsRequest: {
    typeUrl: string;
    is(o: any): o is QueryTxLogsRequest;
    isAmino(o: any): o is QueryTxLogsRequestAmino;
    encode(message: QueryTxLogsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsRequest;
    fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest;
    fromAmino(object: QueryTxLogsRequestAmino): QueryTxLogsRequest;
    toAmino(message: QueryTxLogsRequest): QueryTxLogsRequestAmino;
    fromAminoMsg(object: QueryTxLogsRequestAminoMsg): QueryTxLogsRequest;
    fromProtoMsg(message: QueryTxLogsRequestProtoMsg): QueryTxLogsRequest;
    toProto(message: QueryTxLogsRequest): Uint8Array;
    toProtoMsg(message: QueryTxLogsRequest): QueryTxLogsRequestProtoMsg;
};
export declare const QueryTxLogsResponse: {
    typeUrl: string;
    is(o: any): o is QueryTxLogsResponse;
    isAmino(o: any): o is QueryTxLogsResponseAmino;
    encode(message: QueryTxLogsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTxLogsResponse;
    fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse;
    fromAmino(object: QueryTxLogsResponseAmino): QueryTxLogsResponse;
    toAmino(message: QueryTxLogsResponse): QueryTxLogsResponseAmino;
    fromAminoMsg(object: QueryTxLogsResponseAminoMsg): QueryTxLogsResponse;
    fromProtoMsg(message: QueryTxLogsResponseProtoMsg): QueryTxLogsResponse;
    toProto(message: QueryTxLogsResponse): Uint8Array;
    toProtoMsg(message: QueryTxLogsResponse): QueryTxLogsResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    is(o: any): o is QueryParamsRequest;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    is(o: any): o is QueryParamsResponse;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const EthCallRequest: {
    typeUrl: string;
    is(o: any): o is EthCallRequest;
    isAmino(o: any): o is EthCallRequestAmino;
    encode(message: EthCallRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EthCallRequest;
    fromPartial(object: DeepPartial<EthCallRequest>): EthCallRequest;
    fromAmino(object: EthCallRequestAmino): EthCallRequest;
    toAmino(message: EthCallRequest): EthCallRequestAmino;
    fromAminoMsg(object: EthCallRequestAminoMsg): EthCallRequest;
    fromProtoMsg(message: EthCallRequestProtoMsg): EthCallRequest;
    toProto(message: EthCallRequest): Uint8Array;
    toProtoMsg(message: EthCallRequest): EthCallRequestProtoMsg;
};
export declare const EstimateGasResponse: {
    typeUrl: string;
    is(o: any): o is EstimateGasResponse;
    isAmino(o: any): o is EstimateGasResponseAmino;
    encode(message: EstimateGasResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateGasResponse;
    fromPartial(object: DeepPartial<EstimateGasResponse>): EstimateGasResponse;
    fromAmino(object: EstimateGasResponseAmino): EstimateGasResponse;
    toAmino(message: EstimateGasResponse): EstimateGasResponseAmino;
    fromAminoMsg(object: EstimateGasResponseAminoMsg): EstimateGasResponse;
    fromProtoMsg(message: EstimateGasResponseProtoMsg): EstimateGasResponse;
    toProto(message: EstimateGasResponse): Uint8Array;
    toProtoMsg(message: EstimateGasResponse): EstimateGasResponseProtoMsg;
};
export declare const QueryTraceTxRequest: {
    typeUrl: string;
    is(o: any): o is QueryTraceTxRequest;
    isAmino(o: any): o is QueryTraceTxRequestAmino;
    encode(message: QueryTraceTxRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxRequest;
    fromPartial(object: DeepPartial<QueryTraceTxRequest>): QueryTraceTxRequest;
    fromAmino(object: QueryTraceTxRequestAmino): QueryTraceTxRequest;
    toAmino(message: QueryTraceTxRequest): QueryTraceTxRequestAmino;
    fromAminoMsg(object: QueryTraceTxRequestAminoMsg): QueryTraceTxRequest;
    fromProtoMsg(message: QueryTraceTxRequestProtoMsg): QueryTraceTxRequest;
    toProto(message: QueryTraceTxRequest): Uint8Array;
    toProtoMsg(message: QueryTraceTxRequest): QueryTraceTxRequestProtoMsg;
};
export declare const QueryTraceTxResponse: {
    typeUrl: string;
    is(o: any): o is QueryTraceTxResponse;
    isAmino(o: any): o is QueryTraceTxResponseAmino;
    encode(message: QueryTraceTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceTxResponse;
    fromPartial(object: DeepPartial<QueryTraceTxResponse>): QueryTraceTxResponse;
    fromAmino(object: QueryTraceTxResponseAmino): QueryTraceTxResponse;
    toAmino(message: QueryTraceTxResponse): QueryTraceTxResponseAmino;
    fromAminoMsg(object: QueryTraceTxResponseAminoMsg): QueryTraceTxResponse;
    fromProtoMsg(message: QueryTraceTxResponseProtoMsg): QueryTraceTxResponse;
    toProto(message: QueryTraceTxResponse): Uint8Array;
    toProtoMsg(message: QueryTraceTxResponse): QueryTraceTxResponseProtoMsg;
};
export declare const QueryTraceBlockRequest: {
    typeUrl: string;
    is(o: any): o is QueryTraceBlockRequest;
    isAmino(o: any): o is QueryTraceBlockRequestAmino;
    encode(message: QueryTraceBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockRequest;
    fromPartial(object: DeepPartial<QueryTraceBlockRequest>): QueryTraceBlockRequest;
    fromAmino(object: QueryTraceBlockRequestAmino): QueryTraceBlockRequest;
    toAmino(message: QueryTraceBlockRequest): QueryTraceBlockRequestAmino;
    fromAminoMsg(object: QueryTraceBlockRequestAminoMsg): QueryTraceBlockRequest;
    fromProtoMsg(message: QueryTraceBlockRequestProtoMsg): QueryTraceBlockRequest;
    toProto(message: QueryTraceBlockRequest): Uint8Array;
    toProtoMsg(message: QueryTraceBlockRequest): QueryTraceBlockRequestProtoMsg;
};
export declare const QueryTraceBlockResponse: {
    typeUrl: string;
    is(o: any): o is QueryTraceBlockResponse;
    isAmino(o: any): o is QueryTraceBlockResponseAmino;
    encode(message: QueryTraceBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTraceBlockResponse;
    fromPartial(object: DeepPartial<QueryTraceBlockResponse>): QueryTraceBlockResponse;
    fromAmino(object: QueryTraceBlockResponseAmino): QueryTraceBlockResponse;
    toAmino(message: QueryTraceBlockResponse): QueryTraceBlockResponseAmino;
    fromAminoMsg(object: QueryTraceBlockResponseAminoMsg): QueryTraceBlockResponse;
    fromProtoMsg(message: QueryTraceBlockResponseProtoMsg): QueryTraceBlockResponse;
    toProto(message: QueryTraceBlockResponse): Uint8Array;
    toProtoMsg(message: QueryTraceBlockResponse): QueryTraceBlockResponseProtoMsg;
};
export declare const QueryBaseFeeRequest: {
    typeUrl: string;
    is(o: any): o is QueryBaseFeeRequest;
    isAmino(o: any): o is QueryBaseFeeRequestAmino;
    encode(_: QueryBaseFeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeRequest;
    fromPartial(_: DeepPartial<QueryBaseFeeRequest>): QueryBaseFeeRequest;
    fromAmino(_: QueryBaseFeeRequestAmino): QueryBaseFeeRequest;
    toAmino(_: QueryBaseFeeRequest): QueryBaseFeeRequestAmino;
    fromAminoMsg(object: QueryBaseFeeRequestAminoMsg): QueryBaseFeeRequest;
    fromProtoMsg(message: QueryBaseFeeRequestProtoMsg): QueryBaseFeeRequest;
    toProto(message: QueryBaseFeeRequest): Uint8Array;
    toProtoMsg(message: QueryBaseFeeRequest): QueryBaseFeeRequestProtoMsg;
};
export declare const QueryBaseFeeResponse: {
    typeUrl: string;
    is(o: any): o is QueryBaseFeeResponse;
    isAmino(o: any): o is QueryBaseFeeResponseAmino;
    encode(message: QueryBaseFeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseFeeResponse;
    fromPartial(object: DeepPartial<QueryBaseFeeResponse>): QueryBaseFeeResponse;
    fromAmino(object: QueryBaseFeeResponseAmino): QueryBaseFeeResponse;
    toAmino(message: QueryBaseFeeResponse): QueryBaseFeeResponseAmino;
    fromAminoMsg(object: QueryBaseFeeResponseAminoMsg): QueryBaseFeeResponse;
    fromProtoMsg(message: QueryBaseFeeResponseProtoMsg): QueryBaseFeeResponse;
    toProto(message: QueryBaseFeeResponse): Uint8Array;
    toProtoMsg(message: QueryBaseFeeResponse): QueryBaseFeeResponseProtoMsg;
};
