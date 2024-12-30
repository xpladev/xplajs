import { Params, SendEnabled } from "./bank";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all coins for a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.47
   */
  SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
  /**
   * TotalSupply queries the total supply of all coins.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf queries the supply of a single coin.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /** DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
  DenomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  DenomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  DenomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
  /**
   * DenomOwnersByQuery queries for all account addresses that own a particular token
   * denomination.
   * 
   * Since: cosmos-sdk 0.50.3
   */
  DenomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse>;
  /**
   * SendEnabled queries for SendEnabled entries.
   * 
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   * 
   * Since: cosmos-sdk 0.47
   */
  SendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Balance queries the balance of a single coin for a single account. */
  Balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  AllBalances = async (request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> => {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new BinaryReader(data)));
  };
  /* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  SpendableBalances = async (request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> => {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new BinaryReader(data)));
  };
  /* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */
  SpendableBalanceByDenom = async (request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> => {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then(data => QuerySpendableBalanceByDenomResponse.decode(new BinaryReader(data)));
  };
  /* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  TotalSupply = async (request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> => {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  };
  /* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  SupplyOf = async (request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> => {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  };
  /* Params queries the parameters of x/bank module. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* DenomMetadata queries the client metadata of a given coin denomination. */
  DenomMetadata = async (request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> => {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new BinaryReader(data)));
  };
  /* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
  DenomMetadataByQueryString = async (request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse> => {
    const data = QueryDenomMetadataByQueryStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadataByQueryString", data);
    return promise.then(data => QueryDenomMetadataByQueryStringResponse.decode(new BinaryReader(data)));
  };
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
  DenomsMetadata = async (request: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> => {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new BinaryReader(data)));
  };
  /* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  DenomOwners = async (request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> => {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new BinaryReader(data)));
  };
  /* DenomOwnersByQuery queries for all account addresses that own a particular token
   denomination.
  
   Since: cosmos-sdk 0.50.3 */
  DenomOwnersByQuery = async (request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse> => {
    const data = QueryDenomOwnersByQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwnersByQuery", data);
    return promise.then(data => QueryDenomOwnersByQueryResponse.decode(new BinaryReader(data)));
  };
  /* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */
  SendEnabled = async (request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> => {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then(data => QuerySendEnabledResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.Balance(request);
    },
    AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
      return queryService.AllBalances(request);
    },
    SpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
      return queryService.SpendableBalances(request);
    },
    SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> {
      return queryService.SpendableBalanceByDenom(request);
    },
    TotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.TotalSupply(request);
    },
    SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.SupplyOf(request);
    },
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    },
    DenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
      return queryService.DenomMetadata(request);
    },
    DenomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse> {
      return queryService.DenomMetadataByQueryString(request);
    },
    DenomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
      return queryService.DenomsMetadata(request);
    },
    DenomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
      return queryService.DenomOwners(request);
    },
    DenomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse> {
      return queryService.DenomOwnersByQuery(request);
    },
    SendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> {
      return queryService.SendEnabled(request);
    }
  };
};