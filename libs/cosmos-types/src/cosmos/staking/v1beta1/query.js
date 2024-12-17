"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = void 0;
var pagination_1 = require("../../base/query/v1beta1/pagination");
var staking_1 = require("./staking");
var binary_1 = require("../../../binary");
function createBaseQueryValidatorsRequest() {
    return {
        status: "",
        pagination: undefined
    };
}
exports.QueryValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
    aminoType: "cosmos-sdk/QueryValidatorsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
    aminoType: "cosmos-sdk/QueryValidatorsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorsResponse();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorRequest() {
    return {
        validatorAddr: ""
    };
}
exports.QueryValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
    aminoType: "cosmos-sdk/QueryValidatorRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
    aminoType: "cosmos-sdk/QueryValidatorResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    }
};
function createBaseQueryValidatorDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
    aminoType: "cosmos-sdk/QueryValidatorDelegationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
    aminoType: "cosmos-sdk/QueryValidatorDelegationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.delegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorDelegationsResponse();
        message.delegationResponses = ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.DelegationResponse.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return {
        validatorAddr: "",
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
    aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validatorAddr !== "") {
            writer.uint32(10).string(message.validatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validatorAddr = (_a = object.validatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
    aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.unbondingResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbondingResponses = ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
    aminoType: "cosmos-sdk/QueryDelegationRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryDelegationResponse() {
    return {
        delegationResponse: undefined
    };
}
exports.QueryDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
    aminoType: "cosmos-sdk/QueryDelegationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegationResponse !== undefined) {
            staking_1.DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponse = staking_1.DelegationResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDelegationResponse();
        message.delegationResponse = object.delegationResponse !== undefined && object.delegationResponse !== null ? staking_1.DelegationResponse.fromPartial(object.delegationResponse) : undefined;
        return message;
    }
};
function createBaseQueryUnbondingDelegationRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryUnbondingDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
    aminoType: "cosmos-sdk/QueryUnbondingDelegationRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryUnbondingDelegationRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryUnbondingDelegationResponse() {
    return {
        unbond: staking_1.UnbondingDelegation.fromPartial({})
    };
}
exports.QueryUnbondingDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
    aminoType: "cosmos-sdk/QueryUnbondingDelegationResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.unbond !== undefined) {
            staking_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = staking_1.UnbondingDelegation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryUnbondingDelegationResponse();
        message.unbond = object.unbond !== undefined && object.unbond !== null ? staking_1.UnbondingDelegation.fromPartial(object.unbond) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorDelegationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorDelegationsResponse() {
    return {
        delegationResponses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorDelegationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.delegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegationResponses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorDelegationsResponse();
        message.delegationResponses = ((_a = object.delegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.DelegationResponse.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return {
        delegatorAddr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return {
        unbondingResponses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.unbondingResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondingResponses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbondingResponses = ((_a = object.unbondingResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.UnbondingDelegation.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegatorAddr: "",
        srcValidatorAddr: "",
        dstValidatorAddr: "",
        pagination: undefined
    };
}
exports.QueryRedelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
    aminoType: "cosmos-sdk/QueryRedelegationsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.srcValidatorAddr !== "") {
            writer.uint32(18).string(message.srcValidatorAddr);
        }
        if (message.dstValidatorAddr !== "") {
            writer.uint32(26).string(message.dstValidatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.srcValidatorAddr = reader.string();
                    break;
                case 3:
                    message.dstValidatorAddr = reader.string();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryRedelegationsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.srcValidatorAddr = (_b = object.srcValidatorAddr) !== null && _b !== void 0 ? _b : "";
        message.dstValidatorAddr = (_c = object.dstValidatorAddr) !== null && _c !== void 0 ? _c : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryRedelegationsResponse() {
    return {
        redelegationResponses: [],
        pagination: undefined
    };
}
exports.QueryRedelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
    aminoType: "cosmos-sdk/QueryRedelegationsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.redelegationResponses; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationResponses.push(staking_1.RedelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryRedelegationsResponse();
        message.redelegationResponses = ((_a = object.redelegationResponses) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.RedelegationResponse.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegatorAddr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return staking_1.Validator.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDelegatorValidatorRequest() {
    return {
        delegatorAddr: "",
        validatorAddr: ""
    };
}
exports.QueryDelegatorValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.delegatorAddr !== "") {
            writer.uint32(10).string(message.delegatorAddr);
        }
        if (message.validatorAddr !== "") {
            writer.uint32(18).string(message.validatorAddr);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddr = reader.string();
                    break;
                case 2:
                    message.validatorAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegatorValidatorRequest();
        message.delegatorAddr = (_a = object.delegatorAddr) !== null && _a !== void 0 ? _a : "";
        message.validatorAddr = (_b = object.validatorAddr) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryDelegatorValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryDelegatorValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDelegatorValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    }
};
function createBaseQueryHistoricalInfoRequest() {
    return {
        height: BigInt(0)
    };
}
exports.QueryHistoricalInfoRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
    aminoType: "cosmos-sdk/QueryHistoricalInfoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryHistoricalInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryHistoricalInfoRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryHistoricalInfoResponse() {
    return {
        hist: undefined
    };
}
exports.QueryHistoricalInfoResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
    aminoType: "cosmos-sdk/QueryHistoricalInfoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hist !== undefined) {
            staking_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = staking_1.HistoricalInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryHistoricalInfoResponse();
        message.hist = object.hist !== undefined && object.hist !== null ? staking_1.HistoricalInfo.fromPartial(object.hist) : undefined;
        return message;
    }
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
    aminoType: "cosmos-sdk/QueryPoolRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryPoolRequest();
        return message;
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: staking_1.Pool.fromPartial({})
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
    aminoType: "cosmos-sdk/QueryPoolResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pool !== undefined) {
            staking_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = staking_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? staking_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    encode: function (_, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (_) {
        var message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: staking_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
