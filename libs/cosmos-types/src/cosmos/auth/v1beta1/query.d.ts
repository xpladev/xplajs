import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Any } from "../../../google/protobuf/any";
import { Params, BaseAccount } from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
    /** accounts are the existing accounts */
    accounts: Any[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
    /** address defines the address to query for. */
    address: string;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
    /** account defines the account of the corresponding address. */
    account?: Any;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
    accounts: Any[];
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
    name: string;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
    account?: Any;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
    bech32Prefix: string;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
    addressBytes: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
    addressString: string;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
    addressString: string;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
    addressBytes: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
    /**
     * Deprecated, use account_id instead
     *
     * id is the account number of the address to be queried. This field
     * should have been an uint64 (like all account numbers), and will be
     * updated to uint64 in a future version of the auth query.
     */
    /** @deprecated */
    id: bigint;
    /**
     * account_id is the account number of the address to be queried.
     *
     * Since: cosmos-sdk 0.47
     */
    accountId: bigint;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
    accountAddress: string;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
    /** address is the account address string. */
    address: string;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
    /** info is the account info which is represented by BaseAccount. */
    info?: BaseAccount;
}
export declare const QueryAccountsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest;
    fromPartial(object: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryAccountRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest;
    fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest;
};
export declare const QueryAccountResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse;
    fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryModuleAccountsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryModuleAccountsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest;
    fromPartial(_: DeepPartial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest;
};
export declare const QueryModuleAccountsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryModuleAccountsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse;
    fromPartial(object: DeepPartial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse;
};
export declare const QueryModuleAccountByNameRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryModuleAccountByNameRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameRequest;
    fromPartial(object: DeepPartial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest;
};
export declare const QueryModuleAccountByNameResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryModuleAccountByNameResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameResponse;
    fromPartial(object: DeepPartial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse;
};
export declare const Bech32PrefixRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: Bech32PrefixRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest;
    fromPartial(_: DeepPartial<Bech32PrefixRequest>): Bech32PrefixRequest;
};
export declare const Bech32PrefixResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: Bech32PrefixResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse;
    fromPartial(object: DeepPartial<Bech32PrefixResponse>): Bech32PrefixResponse;
};
export declare const AddressBytesToStringRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: AddressBytesToStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest;
    fromPartial(object: DeepPartial<AddressBytesToStringRequest>): AddressBytesToStringRequest;
};
export declare const AddressBytesToStringResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: AddressBytesToStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse;
    fromPartial(object: DeepPartial<AddressBytesToStringResponse>): AddressBytesToStringResponse;
};
export declare const AddressStringToBytesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: AddressStringToBytesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest;
    fromPartial(object: DeepPartial<AddressStringToBytesRequest>): AddressStringToBytesRequest;
};
export declare const AddressStringToBytesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: AddressStringToBytesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse;
    fromPartial(object: DeepPartial<AddressStringToBytesResponse>): AddressStringToBytesResponse;
};
export declare const QueryAccountAddressByIDRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountAddressByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDRequest;
    fromPartial(object: DeepPartial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest;
};
export declare const QueryAccountAddressByIDResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountAddressByIDResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDResponse;
    fromPartial(object: DeepPartial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse;
};
export declare const QueryAccountInfoRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoRequest;
    fromPartial(object: DeepPartial<QueryAccountInfoRequest>): QueryAccountInfoRequest;
};
export declare const QueryAccountInfoResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAccountInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse;
    fromPartial(object: DeepPartial<QueryAccountInfoResponse>): QueryAccountInfoResponse;
};
