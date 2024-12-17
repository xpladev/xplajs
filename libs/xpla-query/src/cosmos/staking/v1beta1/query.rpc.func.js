"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetParams = exports.createGetParams = exports.useGetPool = exports.createGetPool = exports.useGetHistoricalInfo = exports.createGetHistoricalInfo = exports.useGetDelegatorValidator = exports.createGetDelegatorValidator = exports.useGetDelegatorValidators = exports.createGetDelegatorValidators = exports.useGetRedelegations = exports.createGetRedelegations = exports.useGetDelegatorUnbondingDelegations = exports.createGetDelegatorUnbondingDelegations = exports.useGetDelegatorDelegations = exports.createGetDelegatorDelegations = exports.useGetUnbondingDelegation = exports.createGetUnbondingDelegation = exports.useGetDelegation = exports.createGetDelegation = exports.useGetValidatorUnbondingDelegations = exports.createGetValidatorUnbondingDelegations = exports.useGetValidatorDelegations = exports.createGetValidatorDelegations = exports.useGetValidator = exports.createGetValidator = exports.useGetValidators = exports.createGetValidators = void 0;
const helper_func_types_1 = require("../../../helper-func-types");
const react_query_1 = require("../../../react-query");
const query_1 = require("./query");
const createGetValidators = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorsRequest.encode,
    decode: query_1.QueryValidatorsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Validators",
    clientResolver
});
exports.createGetValidators = createGetValidators;
exports.useGetValidators = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetValidators,
    queryKeyPrefix: "ValidatorsQuery"
});
const createGetValidator = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorRequest.encode,
    decode: query_1.QueryValidatorResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Validator",
    clientResolver
});
exports.createGetValidator = createGetValidator;
exports.useGetValidator = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetValidator,
    queryKeyPrefix: "ValidatorQuery"
});
const createGetValidatorDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorDelegationsRequest.encode,
    decode: query_1.QueryValidatorDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "ValidatorDelegations",
    clientResolver
});
exports.createGetValidatorDelegations = createGetValidatorDelegations;
exports.useGetValidatorDelegations = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetValidatorDelegations,
    queryKeyPrefix: "ValidatorDelegationsQuery"
});
const createGetValidatorUnbondingDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryValidatorUnbondingDelegationsRequest.encode,
    decode: query_1.QueryValidatorUnbondingDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "ValidatorUnbondingDelegations",
    clientResolver
});
exports.createGetValidatorUnbondingDelegations = createGetValidatorUnbondingDelegations;
exports.useGetValidatorUnbondingDelegations = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetValidatorUnbondingDelegations,
    queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
const createGetDelegation = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegationRequest.encode,
    decode: query_1.QueryDelegationResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Delegation",
    clientResolver
});
exports.createGetDelegation = createGetDelegation;
exports.useGetDelegation = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDelegation,
    queryKeyPrefix: "DelegationQuery"
});
const createGetUnbondingDelegation = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryUnbondingDelegationRequest.encode,
    decode: query_1.QueryUnbondingDelegationResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "UnbondingDelegation",
    clientResolver
});
exports.createGetUnbondingDelegation = createGetUnbondingDelegation;
exports.useGetUnbondingDelegation = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetUnbondingDelegation,
    queryKeyPrefix: "UnbondingDelegationQuery"
});
const createGetDelegatorDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorDelegationsRequest.encode,
    decode: query_1.QueryDelegatorDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorDelegations",
    clientResolver
});
exports.createGetDelegatorDelegations = createGetDelegatorDelegations;
exports.useGetDelegatorDelegations = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDelegatorDelegations,
    queryKeyPrefix: "DelegatorDelegationsQuery"
});
const createGetDelegatorUnbondingDelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorUnbondingDelegationsRequest.encode,
    decode: query_1.QueryDelegatorUnbondingDelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorUnbondingDelegations",
    clientResolver
});
exports.createGetDelegatorUnbondingDelegations = createGetDelegatorUnbondingDelegations;
exports.useGetDelegatorUnbondingDelegations = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDelegatorUnbondingDelegations,
    queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
const createGetRedelegations = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryRedelegationsRequest.encode,
    decode: query_1.QueryRedelegationsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Redelegations",
    clientResolver
});
exports.createGetRedelegations = createGetRedelegations;
exports.useGetRedelegations = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetRedelegations,
    queryKeyPrefix: "RedelegationsQuery"
});
const createGetDelegatorValidators = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorValidatorsRequest.encode,
    decode: query_1.QueryDelegatorValidatorsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorValidators",
    clientResolver
});
exports.createGetDelegatorValidators = createGetDelegatorValidators;
exports.useGetDelegatorValidators = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDelegatorValidators,
    queryKeyPrefix: "DelegatorValidatorsQuery"
});
const createGetDelegatorValidator = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryDelegatorValidatorRequest.encode,
    decode: query_1.QueryDelegatorValidatorResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "DelegatorValidator",
    clientResolver
});
exports.createGetDelegatorValidator = createGetDelegatorValidator;
exports.useGetDelegatorValidator = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetDelegatorValidator,
    queryKeyPrefix: "DelegatorValidatorQuery"
});
const createGetHistoricalInfo = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryHistoricalInfoRequest.encode,
    decode: query_1.QueryHistoricalInfoResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "HistoricalInfo",
    clientResolver
});
exports.createGetHistoricalInfo = createGetHistoricalInfo;
exports.useGetHistoricalInfo = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetHistoricalInfo,
    queryKeyPrefix: "HistoricalInfoQuery"
});
const createGetPool = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryPoolRequest.encode,
    decode: query_1.QueryPoolResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Pool",
    clientResolver
});
exports.createGetPool = createGetPool;
exports.useGetPool = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetPool,
    queryKeyPrefix: "PoolQuery"
});
const createGetParams = (clientResolver) => (0, helper_func_types_1.buildQuery)({
    encode: query_1.QueryParamsRequest.encode,
    decode: query_1.QueryParamsResponse.decode,
    service: "cosmos.staking.v1beta1.Query",
    method: "Params",
    clientResolver
});
exports.createGetParams = createGetParams;
exports.useGetParams = (0, react_query_1.buildUseQuery)({
    builderQueryFn: exports.createGetParams,
    queryKeyPrefix: "ParamsQuery"
});
