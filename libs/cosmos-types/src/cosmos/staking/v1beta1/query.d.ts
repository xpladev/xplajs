import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the validator info. */
    validator: Validator;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse?: DelegationResponse;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond: UnbondingDelegation;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the validator info. */
    validator: Validator;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool: Pool;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export declare const QueryValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest;
};
export declare const QueryValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse;
};
export declare const QueryValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest;
    fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest;
};
export declare const QueryValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse;
    fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse;
};
export declare const QueryValidatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest;
};
export declare const QueryValidatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
};
export declare const QueryDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest;
    fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest;
};
export declare const QueryDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse;
    fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse;
};
export declare const QueryUnbondingDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest;
    fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest;
};
export declare const QueryUnbondingDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse;
    fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse;
};
export declare const QueryDelegatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest;
};
export declare const QueryDelegatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest;
    fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse;
    fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse;
};
export declare const QueryRedelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryRedelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest;
    fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest;
};
export declare const QueryRedelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryRedelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse;
    fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest;
};
export declare const QueryDelegatorValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDelegatorValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse;
};
export declare const QueryHistoricalInfoRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryHistoricalInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest;
};
export declare const QueryHistoricalInfoResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryHistoricalInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
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
