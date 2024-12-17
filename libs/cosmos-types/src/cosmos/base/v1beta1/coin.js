"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
var binary_1 = require("../../../binary");
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.Coin = {
    typeUrl: "/cosmos.base.v1beta1.Coin",
    aminoType: "cosmos-sdk/Coin",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
        var message = createBaseCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.DecCoin = {
    typeUrl: "/cosmos.base.v1beta1.DecCoin",
    aminoType: "cosmos-sdk/DecCoin",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecCoin();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
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
        var message = createBaseDecCoin();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
exports.IntProto = {
    typeUrl: "/cosmos.base.v1beta1.IntProto",
    aminoType: "cosmos-sdk/IntProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIntProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
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
        var message = createBaseIntProto();
        message.int = (_a = object.int) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
exports.DecProto = {
    typeUrl: "/cosmos.base.v1beta1.DecProto",
    aminoType: "cosmos-sdk/DecProto",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDecProto();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
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
        var message = createBaseDecProto();
        message.dec = (_a = object.dec) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
