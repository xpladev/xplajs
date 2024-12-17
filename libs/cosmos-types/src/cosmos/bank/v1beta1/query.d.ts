import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata, SendEnabled } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /**
     * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
     *
     * Since: cosmos-sdk 0.50
     */
    resolveDenom: boolean;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
    /** balances is the spendable balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequest;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponse;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    /** params provides the parameters of the bank module. */
    params: Params;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: Coin;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryResponse {
    denomOwners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequest {
    /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     */
    pagination?: PageRequest;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponse {
    sendEnabled: SendEnabled[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     */
    pagination?: PageResponse;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
};
export declare const QuerySpendableBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySpendableBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest;
};
export declare const QuerySpendableBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySpendableBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse;
};
export declare const QuerySpendableBalanceByDenomRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySpendableBalanceByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest;
    fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomRequest>): QuerySpendableBalanceByDenomRequest;
};
export declare const QuerySpendableBalanceByDenomResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySpendableBalanceByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse;
    fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomResponse>): QuerySpendableBalanceByDenomResponse;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
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
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomsMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomsMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
};
export declare const QueryDenomMetadataByQueryStringRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataByQueryStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringRequest;
    fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringRequest>): QueryDenomMetadataByQueryStringRequest;
};
export declare const QueryDenomMetadataByQueryStringResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataByQueryStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringResponse;
    fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringResponse>): QueryDenomMetadataByQueryStringResponse;
};
export declare const QueryDenomOwnersRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomOwnersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest;
};
export declare const DenomOwner: {
    typeUrl: string;
    aminoType: string;
    encode(message: DenomOwner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomOwner;
    fromPartial(object: DeepPartial<DenomOwner>): DenomOwner;
};
export declare const QueryDenomOwnersResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomOwnersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse;
};
export declare const QueryDenomOwnersByQueryRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomOwnersByQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryRequest;
    fromPartial(object: DeepPartial<QueryDenomOwnersByQueryRequest>): QueryDenomOwnersByQueryRequest;
};
export declare const QueryDenomOwnersByQueryResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomOwnersByQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryResponse;
    fromPartial(object: DeepPartial<QueryDenomOwnersByQueryResponse>): QueryDenomOwnersByQueryResponse;
};
export declare const QuerySendEnabledRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySendEnabledRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledRequest;
    fromPartial(object: DeepPartial<QuerySendEnabledRequest>): QuerySendEnabledRequest;
};
export declare const QuerySendEnabledResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySendEnabledResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledResponse;
    fromPartial(object: DeepPartial<QuerySendEnabledResponse>): QuerySendEnabledResponse;
};
