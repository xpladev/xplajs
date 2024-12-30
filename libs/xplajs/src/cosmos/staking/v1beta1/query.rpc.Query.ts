import { Validator, UnbondingDelegation, HistoricalInfo, Pool, Params } from "./staking";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Validators queries all validators that match the given status.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /**
   * ValidatorDelegations queries delegate info for given validator.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /**
   * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /**
   * DelegatorDelegations queries all delegations of a given delegator address.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /**
   * Redelegations queries redelegations of given address.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Validators queries all validators that match the given status.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  Validators = async (request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> => {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* Validator queries validator info for given validator address. */
  Validator = async (request: QueryValidatorRequest): Promise<QueryValidatorResponse> => {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorDelegations queries delegate info for given validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  ValidatorDelegations = async (request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> => {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  ValidatorUnbondingDelegations = async (request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> => {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* Delegation queries delegate info for given validator delegator pair. */
  Delegation = async (request: QueryDelegationRequest): Promise<QueryDelegationResponse> => {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new BinaryReader(data)));
  };
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  UnbondingDelegation = async (request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> => {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorDelegations queries all delegations of a given delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  DelegatorDelegations = async (request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> => {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  DelegatorUnbondingDelegations = async (request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> => {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* Redelegations queries redelegations of given address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  Redelegations = async (request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> => {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidators queries all validators info for given delegator
   address.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  DelegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  DelegatorValidator = async (request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> => {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new BinaryReader(data)));
  };
  /* HistoricalInfo queries the historical info for given height. */
  HistoricalInfo = async (request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> => {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new BinaryReader(data)));
  };
  /* Pool queries the pool info. */
  Pool = async (request: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  };
  /* Parameters queries the staking parameters. */
  Params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
      return queryService.Validators(request);
    },
    Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
      return queryService.Validator(request);
    },
    ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
      return queryService.ValidatorDelegations(request);
    },
    ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
      return queryService.ValidatorUnbondingDelegations(request);
    },
    Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
      return queryService.Delegation(request);
    },
    UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
      return queryService.UnbondingDelegation(request);
    },
    DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
      return queryService.DelegatorDelegations(request);
    },
    DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
      return queryService.DelegatorUnbondingDelegations(request);
    },
    Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
      return queryService.Redelegations(request);
    },
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.DelegatorValidators(request);
    },
    DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
      return queryService.DelegatorValidator(request);
    },
    HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
      return queryService.HistoricalInfo(request);
    },
    Pool(request?: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.Pool(request);
    },
    Params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.Params(request);
    }
  };
};