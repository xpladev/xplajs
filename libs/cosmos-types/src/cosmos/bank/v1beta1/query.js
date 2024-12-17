"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySendEnabledResponse = exports.QuerySendEnabledRequest = exports.QueryDenomOwnersByQueryResponse = exports.QueryDenomOwnersByQueryRequest = exports.QueryDenomOwnersResponse = exports.DenomOwner = exports.QueryDenomOwnersRequest = exports.QueryDenomMetadataByQueryStringResponse = exports.QueryDenomMetadataByQueryStringRequest = exports.QueryDenomMetadataResponse = exports.QueryDenomMetadataRequest = exports.QueryDenomsMetadataResponse = exports.QueryDenomsMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QuerySupplyOfResponse = exports.QuerySupplyOfRequest = exports.QueryTotalSupplyResponse = exports.QueryTotalSupplyRequest = exports.QuerySpendableBalanceByDenomResponse = exports.QuerySpendableBalanceByDenomRequest = exports.QuerySpendableBalancesResponse = exports.QuerySpendableBalancesRequest = exports.QueryAllBalancesResponse = exports.QueryAllBalancesRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = void 0;
var pagination_1 = require("../../base/query/v1beta1/pagination");
var coin_1 = require("../../base/v1beta1/coin");
var bank_1 = require("./bank");
var binary_1 = require("../../../binary");
function createBaseQueryBalanceRequest() {
    return {
        address: "",
        denom: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
    aminoType: "cosmos-sdk/QueryBalanceRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
        var message = createBaseQueryBalanceRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryBalanceResponse() {
    return {
        balance: undefined
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
    aminoType: "cosmos-sdk/QueryBalanceResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryBalanceResponse();
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    }
};
function createBaseQueryAllBalancesRequest() {
    return {
        address: "",
        pagination: undefined,
        resolveDenom: false
    };
}
exports.QueryAllBalancesRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
    aminoType: "cosmos-sdk/QueryAllBalancesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.resolveDenom === true) {
            writer.uint32(24).bool(message.resolveDenom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllBalancesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.resolveDenom = reader.bool();
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
        var message = createBaseQueryAllBalancesRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.resolveDenom = (_b = object.resolveDenom) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseQueryAllBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
exports.QueryAllBalancesResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
    aminoType: "cosmos-sdk/QueryAllBalancesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.balances; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseQueryAllBalancesResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySpendableBalancesRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QuerySpendableBalancesRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest",
    aminoType: "cosmos-sdk/QuerySpendableBalancesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySpendableBalancesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
        var message = createBaseQuerySpendableBalancesRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySpendableBalancesResponse() {
    return {
        balances: [],
        pagination: undefined
    };
}
exports.QuerySpendableBalancesResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse",
    aminoType: "cosmos-sdk/QuerySpendableBalancesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.balances; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySpendableBalancesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseQuerySpendableBalancesResponse();
        message.balances = ((_a = object.balances) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySpendableBalanceByDenomRequest() {
    return {
        address: "",
        denom: ""
    };
}
exports.QuerySpendableBalanceByDenomRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest",
    aminoType: "cosmos-sdk/QuerySpendableBalanceByDenomRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySpendableBalanceByDenomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
        var message = createBaseQuerySpendableBalanceByDenomRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.denom = (_b = object.denom) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQuerySpendableBalanceByDenomResponse() {
    return {
        balance: undefined
    };
}
exports.QuerySpendableBalanceByDenomResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse",
    aminoType: "cosmos-sdk/QuerySpendableBalanceByDenomResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySpendableBalanceByDenomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySpendableBalanceByDenomResponse();
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    }
};
function createBaseQueryTotalSupplyRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryTotalSupplyRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
    aminoType: "cosmos-sdk/QueryTotalSupplyRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTotalSupplyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryTotalSupplyRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryTotalSupplyResponse() {
    return {
        supply: [],
        pagination: undefined
    };
}
exports.QueryTotalSupplyResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
    aminoType: "cosmos-sdk/QueryTotalSupplyResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.supply; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseQueryTotalSupplyResponse();
        message.supply = ((_a = object.supply) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySupplyOfRequest() {
    return {
        denom: ""
    };
}
exports.QuerySupplyOfRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
    aminoType: "cosmos-sdk/QuerySupplyOfRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyOfRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQuerySupplyOfRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQuerySupplyOfResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QuerySupplyOfResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
    aminoType: "cosmos-sdk/QuerySupplyOfResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQuerySupplyOfResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
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
        params: bank_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = bank_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? bank_1.Params.fromPartial(object.params) : undefined;
        return message;
    }
};
function createBaseQueryDenomsMetadataRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryDenomsMetadataRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
    aminoType: "cosmos-sdk/QueryDenomsMetadataRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomsMetadataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        var message = createBaseQueryDenomsMetadataRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDenomsMetadataResponse() {
    return {
        metadatas: [],
        pagination: undefined
    };
}
exports.QueryDenomsMetadataResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
    aminoType: "cosmos-sdk/QueryDenomsMetadataResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.metadatas; _i < _a.length; _i++) {
            var v = _a[_i];
            bank_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomsMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadatas.push(bank_1.Metadata.decode(reader, reader.uint32()));
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
        var message = createBaseQueryDenomsMetadataResponse();
        message.metadatas = ((_a = object.metadatas) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bank_1.Metadata.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDenomMetadataRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomMetadataRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
    aminoType: "cosmos-sdk/QueryDenomMetadataRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQueryDenomMetadataRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryDenomMetadataResponse() {
    return {
        metadata: bank_1.Metadata.fromPartial({})
    };
}
exports.QueryDenomMetadataResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
    aminoType: "cosmos-sdk/QueryDenomMetadataResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDenomMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    }
};
function createBaseQueryDenomMetadataByQueryStringRequest() {
    return {
        denom: ""
    };
}
exports.QueryDenomMetadataByQueryStringRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest",
    aminoType: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataByQueryStringRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQueryDenomMetadataByQueryStringRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryDenomMetadataByQueryStringResponse() {
    return {
        metadata: bank_1.Metadata.fromPartial({})
    };
}
exports.QueryDenomMetadataByQueryStringResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse",
    aminoType: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomMetadataByQueryStringResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDenomMetadataByQueryStringResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    }
};
function createBaseQueryDenomOwnersRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.QueryDenomOwnersRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest",
    aminoType: "cosmos-sdk/QueryDenomOwnersRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomOwnersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQueryDenomOwnersRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseDenomOwner() {
    return {
        address: "",
        balance: coin_1.Coin.fromPartial({})
    };
}
exports.DenomOwner = {
    typeUrl: "/cosmos.bank.v1beta1.DenomOwner",
    aminoType: "cosmos-sdk/DenomOwner",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomOwner();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
        var message = createBaseDenomOwner();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    }
};
function createBaseQueryDenomOwnersResponse() {
    return {
        denomOwners: [],
        pagination: undefined
    };
}
exports.QueryDenomOwnersResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse",
    aminoType: "cosmos-sdk/QueryDenomOwnersResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.denomOwners; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomOwnersResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomOwners.push(exports.DenomOwner.decode(reader, reader.uint32()));
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
        var message = createBaseQueryDenomOwnersResponse();
        message.denomOwners = ((_a = object.denomOwners) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DenomOwner.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDenomOwnersByQueryRequest() {
    return {
        denom: "",
        pagination: undefined
    };
}
exports.QueryDenomOwnersByQueryRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest",
    aminoType: "cosmos-sdk/QueryDenomOwnersByQueryRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomOwnersByQueryRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
        var message = createBaseQueryDenomOwnersByQueryRequest();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDenomOwnersByQueryResponse() {
    return {
        denomOwners: [],
        pagination: undefined
    };
}
exports.QueryDenomOwnersByQueryResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse",
    aminoType: "cosmos-sdk/QueryDenomOwnersByQueryResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.denomOwners; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DenomOwner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDenomOwnersByQueryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomOwners.push(exports.DenomOwner.decode(reader, reader.uint32()));
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
        var message = createBaseQueryDenomOwnersByQueryResponse();
        message.denomOwners = ((_a = object.denomOwners) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DenomOwner.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySendEnabledRequest() {
    return {
        denoms: [],
        pagination: undefined
    };
}
exports.QuerySendEnabledRequest = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledRequest",
    aminoType: "cosmos-sdk/QuerySendEnabledRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.denoms; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(794).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySendEnabledRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                case 99:
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
        var message = createBaseQuerySendEnabledRequest();
        message.denoms = ((_a = object.denoms) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQuerySendEnabledResponse() {
    return {
        sendEnabled: [],
        pagination: undefined
    };
}
exports.QuerySendEnabledResponse = {
    typeUrl: "/cosmos.bank.v1beta1.QuerySendEnabledResponse",
    aminoType: "cosmos-sdk/QuerySendEnabledResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.sendEnabled; _i < _a.length; _i++) {
            var v = _a[_i];
            bank_1.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(794).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQuerySendEnabledResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendEnabled.push(bank_1.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 99:
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
        var message = createBaseQuerySendEnabledResponse();
        message.sendEnabled = ((_a = object.sendEnabled) === null || _a === void 0 ? void 0 : _a.map(function (e) { return bank_1.SendEnabled.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
