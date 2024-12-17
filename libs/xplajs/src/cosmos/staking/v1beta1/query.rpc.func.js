"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetParams = exports.createGetPool = exports.createGetHistoricalInfo = exports.createGetDelegatorValidator = exports.createGetDelegatorValidators = exports.createGetRedelegations = exports.createGetDelegatorUnbondingDelegations = exports.createGetDelegatorDelegations = exports.createGetUnbondingDelegation = exports.createGetDelegation = exports.createGetValidatorUnbondingDelegations = exports.createGetValidatorDelegations = exports.createGetValidator = exports.createGetValidators = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const query_1 = require("./query");
const createGetValidators = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorsRequest.encode,
    decode: query_1.QueryValidatorsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Validators",
    clientResolver
});
exports.createGetValidators = createGetValidators;
const createGetValidator = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorRequest.encode,
    decode: query_1.QueryValidatorResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Validator",
    clientResolver
});
exports.createGetValidator = createGetValidator;
const createGetValidatorDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorDelegationsRequest.encode,
    decode: query_1.QueryValidatorDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "ValidatorDelegations",
    clientResolver
});
exports.createGetValidatorDelegations = createGetValidatorDelegations;
const createGetValidatorUnbondingDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorUnbondingDelegationsRequest.encode,
    decode: query_1.QueryValidatorUnbondingDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "ValidatorUnbondingDelegations",
    clientResolver
});
exports.createGetValidatorUnbondingDelegations = createGetValidatorUnbondingDelegations;
const createGetDelegation = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegationRequest.encode,
    decode: query_1.QueryDelegationResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Delegation",
    clientResolver
});
exports.createGetDelegation = createGetDelegation;
const createGetUnbondingDelegation = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryUnbondingDelegationRequest.encode,
    decode: query_1.QueryUnbondingDelegationResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "UnbondingDelegation",
    clientResolver
});
exports.createGetUnbondingDelegation = createGetUnbondingDelegation;
const createGetDelegatorDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorDelegationsRequest.encode,
    decode: query_1.QueryDelegatorDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorDelegations",
    clientResolver
});
exports.createGetDelegatorDelegations = createGetDelegatorDelegations;
const createGetDelegatorUnbondingDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorUnbondingDelegationsRequest.encode,
    decode: query_1.QueryDelegatorUnbondingDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorUnbondingDelegations",
    clientResolver
});
exports.createGetDelegatorUnbondingDelegations = createGetDelegatorUnbondingDelegations;
const createGetRedelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryRedelegationsRequest.encode,
    decode: query_1.QueryRedelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Redelegations",
    clientResolver
});
exports.createGetRedelegations = createGetRedelegations;
const createGetDelegatorValidators = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorValidatorsRequest.encode,
    decode: query_1.QueryDelegatorValidatorsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorValidators",
    clientResolver
});
exports.createGetDelegatorValidators = createGetDelegatorValidators;
const createGetDelegatorValidator = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorValidatorRequest.encode,
    decode: query_1.QueryDelegatorValidatorResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorValidator",
    clientResolver
});
exports.createGetDelegatorValidator = createGetDelegatorValidator;
const createGetHistoricalInfo = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryHistoricalInfoRequest.encode,
    decode: query_1.QueryHistoricalInfoResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "HistoricalInfo",
    clientResolver
});
exports.createGetHistoricalInfo = createGetHistoricalInfo;
const createGetPool = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryPoolRequest.encode,
    decode: query_1.QueryPoolResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Pool",
    clientResolver
});
exports.createGetPool = createGetPool;
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
