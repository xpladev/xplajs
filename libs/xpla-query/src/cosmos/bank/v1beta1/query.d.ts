import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, Metadata, MetadataAmino, SendEnabled, SendEnabledAmino } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
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
export interface QueryAllBalancesRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /**
     * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
     *
     * Since: cosmos-sdk 0.50
     */
    resolve_denom: boolean;
}
export interface QueryAllBalancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesRequest";
    value: QueryAllBalancesRequestAmino;
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
export interface QueryAllBalancesResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseAmino {
    /** balances is the balances of all the coins. */
    balances: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesResponse";
    value: QueryAllBalancesResponseAmino;
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
export interface QuerySpendableBalancesRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequestAmino {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QuerySpendableBalancesRequestAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesRequest";
    value: QuerySpendableBalancesRequestAmino;
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
export interface QuerySpendableBalancesResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponseAmino {
    /** balances is the spendable balances of all the coins. */
    balances: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QuerySpendableBalancesResponseAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesResponse";
    value: QuerySpendableBalancesResponseAmino;
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
export interface QuerySpendableBalanceByDenomRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
    value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySpendableBalanceByDenomRequestAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest";
    value: QuerySpendableBalanceByDenomRequestAmino;
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
export interface QuerySpendableBalanceByDenomResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
    value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino;
}
export interface QuerySpendableBalanceByDenomResponseAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse";
    value: QuerySpendableBalanceByDenomResponseAmino;
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
export interface QueryTotalSupplyRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
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
export interface QueryTotalSupplyResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseAmino {
    /** supply is the supply of the coins */
    supply: CoinAmino[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
    value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfRequest";
    value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
export interface QuerySupplyOfResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
    value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
    /** amount is the supply of the coin. */
    amount: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfResponse";
    value: QuerySupplyOfResponseAmino;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    /** params provides the parameters of the bank module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseAmino {
    /** params provides the parameters of the bank module. */
    params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDenomsMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomsMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataRequest";
    value: QueryDenomsMetadataRequestAmino;
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
export interface QueryDenomsMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseAmino {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: MetadataAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomsMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataResponse";
    value: QueryDenomsMetadataResponseAmino;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataRequest";
    value: QueryDenomMetadataRequestAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export interface QueryDenomMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: MetadataAmino;
}
export interface QueryDenomMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataResponse";
    value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataByQueryStringRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataByQueryStringRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest";
    value: QueryDenomMetadataByQueryStringRequestAmino;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export interface QueryDenomMetadataByQueryStringResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: MetadataAmino;
}
export interface QueryDenomMetadataByQueryStringResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse";
    value: QueryDenomMetadataByQueryStringResponseAmino;
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
export interface QueryDenomOwnersRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestAmino {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersRequest";
    value: QueryDenomOwnersRequestAmino;
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
export interface DenomOwnerProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.DenomOwner";
    value: Uint8Array;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwnerAmino {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: CoinAmino;
}
export interface DenomOwnerAminoMsg {
    type: "cosmos-sdk/DenomOwner";
    value: DenomOwnerAmino;
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
export interface QueryDenomOwnersResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponseAmino {
    denom_owners: DenomOwnerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersResponse";
    value: QueryDenomOwnersResponseAmino;
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
export interface QueryDenomOwnersByQueryRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryRequestAmino {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersByQueryRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersByQueryRequest";
    value: QueryDenomOwnersByQueryRequestAmino;
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
export interface QueryDenomOwnersByQueryResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 *
 * Since: cosmos-sdk 0.50.3
 */
export interface QueryDenomOwnersByQueryResponseAmino {
    denom_owners: DenomOwnerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersByQueryResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersByQueryResponse";
    value: QueryDenomOwnersByQueryResponseAmino;
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
export interface QuerySendEnabledRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest";
    value: Uint8Array;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequestAmino {
    /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     */
    pagination?: PageRequestAmino;
}
export interface QuerySendEnabledRequestAminoMsg {
    type: "cosmos-sdk/QuerySendEnabledRequest";
    value: QuerySendEnabledRequestAmino;
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
export interface QuerySendEnabledResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse";
    value: Uint8Array;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponseAmino {
    send_enabled: SendEnabledAmino[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     */
    pagination?: PageResponseAmino;
}
export interface QuerySendEnabledResponseAminoMsg {
    type: "cosmos-sdk/QuerySendEnabledResponse";
    value: QuerySendEnabledResponseAmino;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceRequest;
    isAmino(o: any): o is QueryBalanceRequestAmino;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryBalanceResponse;
    isAmino(o: any): o is QueryBalanceResponseAmino;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllBalancesRequest;
    isAmino(o: any): o is QueryAllBalancesRequestAmino;
    encode(message: QueryAllBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
    fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest;
    toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino;
    fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest;
    toAminoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest;
    toProto(message: QueryAllBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAllBalancesResponse;
    isAmino(o: any): o is QueryAllBalancesResponseAmino;
    encode(message: QueryAllBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
    fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse;
    toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino;
    fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse;
    toAminoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse;
    toProto(message: QueryAllBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg;
};
export declare const QuerySpendableBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalancesRequest;
    isAmino(o: any): o is QuerySpendableBalancesRequestAmino;
    encode(message: QuerySpendableBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromPartial(object: DeepPartial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest;
    fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest;
    toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino;
    fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest;
    toAminoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest;
    toProto(message: QuerySpendableBalancesRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg;
};
export declare const QuerySpendableBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalancesResponse;
    isAmino(o: any): o is QuerySpendableBalancesResponseAmino;
    encode(message: QuerySpendableBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromPartial(object: DeepPartial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse;
    fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse;
    toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino;
    fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse;
    toAminoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse;
    toProto(message: QuerySpendableBalancesResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg;
};
export declare const QuerySpendableBalanceByDenomRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalanceByDenomRequest;
    isAmino(o: any): o is QuerySpendableBalanceByDenomRequestAmino;
    encode(message: QuerySpendableBalanceByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest;
    fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomRequest>): QuerySpendableBalanceByDenomRequest;
    fromAmino(object: QuerySpendableBalanceByDenomRequestAmino): QuerySpendableBalanceByDenomRequest;
    toAmino(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAmino;
    fromAminoMsg(object: QuerySpendableBalanceByDenomRequestAminoMsg): QuerySpendableBalanceByDenomRequest;
    toAminoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAminoMsg;
    fromProtoMsg(message: QuerySpendableBalanceByDenomRequestProtoMsg): QuerySpendableBalanceByDenomRequest;
    toProto(message: QuerySpendableBalanceByDenomRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestProtoMsg;
};
export declare const QuerySpendableBalanceByDenomResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySpendableBalanceByDenomResponse;
    isAmino(o: any): o is QuerySpendableBalanceByDenomResponseAmino;
    encode(message: QuerySpendableBalanceByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse;
    fromPartial(object: DeepPartial<QuerySpendableBalanceByDenomResponse>): QuerySpendableBalanceByDenomResponse;
    fromAmino(object: QuerySpendableBalanceByDenomResponseAmino): QuerySpendableBalanceByDenomResponse;
    toAmino(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAmino;
    fromAminoMsg(object: QuerySpendableBalanceByDenomResponseAminoMsg): QuerySpendableBalanceByDenomResponse;
    toAminoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAminoMsg;
    fromProtoMsg(message: QuerySpendableBalanceByDenomResponseProtoMsg): QuerySpendableBalanceByDenomResponse;
    toProto(message: QuerySpendableBalanceByDenomResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalSupplyRequest;
    isAmino(o: any): o is QueryTotalSupplyRequestAmino;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    toAminoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryTotalSupplyResponse;
    isAmino(o: any): o is QueryTotalSupplyResponseAmino;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    toAminoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyOfRequest;
    isAmino(o: any): o is QuerySupplyOfRequestAmino;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
    fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest;
    toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino;
    fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest;
    toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest;
    toProto(message: QuerySupplyOfRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySupplyOfResponse;
    isAmino(o: any): o is QuerySupplyOfResponseAmino;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
    fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse;
    toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino;
    fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse;
    toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse;
    toProto(message: QuerySupplyOfResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsMetadataRequest;
    isAmino(o: any): o is QueryDenomsMetadataRequestAmino;
    encode(message: QueryDenomsMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
    fromAmino(object: QueryDenomsMetadataRequestAmino): QueryDenomsMetadataRequest;
    toAmino(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomsMetadataRequestAminoMsg): QueryDenomsMetadataRequest;
    toAminoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataRequestProtoMsg): QueryDenomsMetadataRequest;
    toProto(message: QueryDenomsMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestProtoMsg;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomsMetadataResponse;
    isAmino(o: any): o is QueryDenomsMetadataResponseAmino;
    encode(message: QueryDenomsMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
    fromAmino(object: QueryDenomsMetadataResponseAmino): QueryDenomsMetadataResponse;
    toAmino(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomsMetadataResponseAminoMsg): QueryDenomsMetadataResponse;
    toAminoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataResponseProtoMsg): QueryDenomsMetadataResponse;
    toProto(message: QueryDenomsMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataRequest;
    isAmino(o: any): o is QueryDenomMetadataRequestAmino;
    encode(message: QueryDenomMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
    fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest;
    toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest;
    toAminoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest;
    toProto(message: QueryDenomMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataResponse;
    isAmino(o: any): o is QueryDenomMetadataResponseAmino;
    encode(message: QueryDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
    fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse;
    toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse;
    toAminoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse;
    toProto(message: QueryDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataByQueryStringRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataByQueryStringRequest;
    isAmino(o: any): o is QueryDenomMetadataByQueryStringRequestAmino;
    encode(message: QueryDenomMetadataByQueryStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringRequest;
    fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringRequest>): QueryDenomMetadataByQueryStringRequest;
    fromAmino(object: QueryDenomMetadataByQueryStringRequestAmino): QueryDenomMetadataByQueryStringRequest;
    toAmino(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataByQueryStringRequestAminoMsg): QueryDenomMetadataByQueryStringRequest;
    toAminoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataByQueryStringRequestProtoMsg): QueryDenomMetadataByQueryStringRequest;
    toProto(message: QueryDenomMetadataByQueryStringRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestProtoMsg;
};
export declare const QueryDenomMetadataByQueryStringResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomMetadataByQueryStringResponse;
    isAmino(o: any): o is QueryDenomMetadataByQueryStringResponseAmino;
    encode(message: QueryDenomMetadataByQueryStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringResponse;
    fromPartial(object: DeepPartial<QueryDenomMetadataByQueryStringResponse>): QueryDenomMetadataByQueryStringResponse;
    fromAmino(object: QueryDenomMetadataByQueryStringResponseAmino): QueryDenomMetadataByQueryStringResponse;
    toAmino(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataByQueryStringResponseAminoMsg): QueryDenomMetadataByQueryStringResponse;
    toAminoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataByQueryStringResponseProtoMsg): QueryDenomMetadataByQueryStringResponse;
    toProto(message: QueryDenomMetadataByQueryStringResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseProtoMsg;
};
export declare const QueryDenomOwnersRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersRequest;
    isAmino(o: any): o is QueryDenomOwnersRequestAmino;
    encode(message: QueryDenomOwnersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromPartial(object: DeepPartial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest;
    fromAmino(object: QueryDenomOwnersRequestAmino): QueryDenomOwnersRequest;
    toAmino(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAmino;
    fromAminoMsg(object: QueryDenomOwnersRequestAminoMsg): QueryDenomOwnersRequest;
    toAminoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersRequestProtoMsg): QueryDenomOwnersRequest;
    toProto(message: QueryDenomOwnersRequest): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestProtoMsg;
};
export declare const DenomOwner: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DenomOwner;
    isAmino(o: any): o is DenomOwnerAmino;
    encode(message: DenomOwner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomOwner;
    fromPartial(object: DeepPartial<DenomOwner>): DenomOwner;
    fromAmino(object: DenomOwnerAmino): DenomOwner;
    toAmino(message: DenomOwner): DenomOwnerAmino;
    fromAminoMsg(object: DenomOwnerAminoMsg): DenomOwner;
    toAminoMsg(message: DenomOwner): DenomOwnerAminoMsg;
    fromProtoMsg(message: DenomOwnerProtoMsg): DenomOwner;
    toProto(message: DenomOwner): Uint8Array;
    toProtoMsg(message: DenomOwner): DenomOwnerProtoMsg;
};
export declare const QueryDenomOwnersResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersResponse;
    isAmino(o: any): o is QueryDenomOwnersResponseAmino;
    encode(message: QueryDenomOwnersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromPartial(object: DeepPartial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse;
    fromAmino(object: QueryDenomOwnersResponseAmino): QueryDenomOwnersResponse;
    toAmino(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAmino;
    fromAminoMsg(object: QueryDenomOwnersResponseAminoMsg): QueryDenomOwnersResponse;
    toAminoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersResponseProtoMsg): QueryDenomOwnersResponse;
    toProto(message: QueryDenomOwnersResponse): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseProtoMsg;
};
export declare const QueryDenomOwnersByQueryRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersByQueryRequest;
    isAmino(o: any): o is QueryDenomOwnersByQueryRequestAmino;
    encode(message: QueryDenomOwnersByQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryRequest;
    fromPartial(object: DeepPartial<QueryDenomOwnersByQueryRequest>): QueryDenomOwnersByQueryRequest;
    fromAmino(object: QueryDenomOwnersByQueryRequestAmino): QueryDenomOwnersByQueryRequest;
    toAmino(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestAmino;
    fromAminoMsg(object: QueryDenomOwnersByQueryRequestAminoMsg): QueryDenomOwnersByQueryRequest;
    toAminoMsg(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersByQueryRequestProtoMsg): QueryDenomOwnersByQueryRequest;
    toProto(message: QueryDenomOwnersByQueryRequest): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersByQueryRequest): QueryDenomOwnersByQueryRequestProtoMsg;
};
export declare const QueryDenomOwnersByQueryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDenomOwnersByQueryResponse;
    isAmino(o: any): o is QueryDenomOwnersByQueryResponseAmino;
    encode(message: QueryDenomOwnersByQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersByQueryResponse;
    fromPartial(object: DeepPartial<QueryDenomOwnersByQueryResponse>): QueryDenomOwnersByQueryResponse;
    fromAmino(object: QueryDenomOwnersByQueryResponseAmino): QueryDenomOwnersByQueryResponse;
    toAmino(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseAmino;
    fromAminoMsg(object: QueryDenomOwnersByQueryResponseAminoMsg): QueryDenomOwnersByQueryResponse;
    toAminoMsg(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersByQueryResponseProtoMsg): QueryDenomOwnersByQueryResponse;
    toProto(message: QueryDenomOwnersByQueryResponse): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersByQueryResponse): QueryDenomOwnersByQueryResponseProtoMsg;
};
export declare const QuerySendEnabledRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySendEnabledRequest;
    isAmino(o: any): o is QuerySendEnabledRequestAmino;
    encode(message: QuerySendEnabledRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledRequest;
    fromPartial(object: DeepPartial<QuerySendEnabledRequest>): QuerySendEnabledRequest;
    fromAmino(object: QuerySendEnabledRequestAmino): QuerySendEnabledRequest;
    toAmino(message: QuerySendEnabledRequest): QuerySendEnabledRequestAmino;
    fromAminoMsg(object: QuerySendEnabledRequestAminoMsg): QuerySendEnabledRequest;
    toAminoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestAminoMsg;
    fromProtoMsg(message: QuerySendEnabledRequestProtoMsg): QuerySendEnabledRequest;
    toProto(message: QuerySendEnabledRequest): Uint8Array;
    toProtoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestProtoMsg;
};
export declare const QuerySendEnabledResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QuerySendEnabledResponse;
    isAmino(o: any): o is QuerySendEnabledResponseAmino;
    encode(message: QuerySendEnabledResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledResponse;
    fromPartial(object: DeepPartial<QuerySendEnabledResponse>): QuerySendEnabledResponse;
    fromAmino(object: QuerySendEnabledResponseAmino): QuerySendEnabledResponse;
    toAmino(message: QuerySendEnabledResponse): QuerySendEnabledResponseAmino;
    fromAminoMsg(object: QuerySendEnabledResponseAminoMsg): QuerySendEnabledResponse;
    toAminoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseAminoMsg;
    fromProtoMsg(message: QuerySendEnabledResponseProtoMsg): QuerySendEnabledResponse;
    toProto(message: QuerySendEnabledResponse): Uint8Array;
    toProtoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseProtoMsg;
};
