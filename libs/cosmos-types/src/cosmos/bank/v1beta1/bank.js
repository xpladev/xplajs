"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DenomUnit = exports.Supply = exports.Output = exports.Input = exports.SendEnabled = exports.Params = void 0;
var coin_1 = require("../../base/v1beta1/coin");
var binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        sendEnabled: [],
        defaultSendEnabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.bank.v1beta1.Params",
    aminoType: "cosmos-sdk/x/bank/Params",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.sendEnabled; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.SendEnabled.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.defaultSendEnabled === true) {
            writer.uint32(16).bool(message.defaultSendEnabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sendEnabled.push(exports.SendEnabled.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.defaultSendEnabled = reader.bool();
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
        var message = createBaseParams();
        message.sendEnabled = ((_a = object.sendEnabled) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SendEnabled.fromPartial(e); })) || [];
        message.defaultSendEnabled = (_b = object.defaultSendEnabled) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseSendEnabled() {
    return {
        denom: "",
        enabled: false
    };
}
exports.SendEnabled = {
    typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
    aminoType: "cosmos-sdk/SendEnabled",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.enabled === true) {
            writer.uint32(16).bool(message.enabled);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSendEnabled();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.enabled = reader.bool();
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
        var message = createBaseSendEnabled();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.enabled = (_b = object.enabled) !== null && _b !== void 0 ? _b : false;
        return message;
    }
};
function createBaseInput() {
    return {
        address: "",
        coins: []
    };
}
exports.Input = {
    typeUrl: "/cosmos.bank.v1beta1.Input",
    aminoType: "cosmos-sdk/Input",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.coins; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseInput();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseOutput() {
    return {
        address: "",
        coins: []
    };
}
exports.Output = {
    typeUrl: "/cosmos.bank.v1beta1.Output",
    aminoType: "cosmos-sdk/Output",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.coins; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseOutput();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.coins = ((_b = object.coins) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseSupply() {
    return {
        total: []
    };
}
exports.Supply = {
    typeUrl: "/cosmos.bank.v1beta1.Supply",
    aminoType: "cosmos-sdk/Supply",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.total; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSupply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        var message = createBaseSupply();
        message.total = ((_a = object.total) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseDenomUnit() {
    return {
        denom: "",
        exponent: 0,
        aliases: []
    };
}
exports.DenomUnit = {
    typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
    aminoType: "cosmos-sdk/DenomUnit",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.exponent !== 0) {
            writer.uint32(16).uint32(message.exponent);
        }
        for (var _i = 0, _a = message.aliases; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDenomUnit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.exponent = reader.uint32();
                    break;
                case 3:
                    message.aliases.push(reader.string());
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
        var message = createBaseDenomUnit();
        message.denom = (_a = object.denom) !== null && _a !== void 0 ? _a : "";
        message.exponent = (_b = object.exponent) !== null && _b !== void 0 ? _b : 0;
        message.aliases = ((_c = object.aliases) === null || _c === void 0 ? void 0 : _c.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseMetadata() {
    return {
        description: "",
        denomUnits: [],
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uriHash: ""
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.bank.v1beta1.Metadata",
    aminoType: "cosmos-sdk/Metadata",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        for (var _i = 0, _a = message.denomUnits; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DenomUnit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.base !== "") {
            writer.uint32(26).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(34).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(58).string(message.uri);
        }
        if (message.uriHash !== "") {
            writer.uint32(66).string(message.uriHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.denomUnits.push(exports.DenomUnit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.base = reader.string();
                    break;
                case 4:
                    message.display = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.uri = reader.string();
                    break;
                case 8:
                    message.uriHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseMetadata();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.denomUnits = ((_b = object.denomUnits) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.DenomUnit.fromPartial(e); })) || [];
        message.base = (_c = object.base) !== null && _c !== void 0 ? _c : "";
        message.display = (_d = object.display) !== null && _d !== void 0 ? _d : "";
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.symbol = (_f = object.symbol) !== null && _f !== void 0 ? _f : "";
        message.uri = (_g = object.uri) !== null && _g !== void 0 ? _g : "";
        message.uriHash = (_h = object.uriHash) !== null && _h !== void 0 ? _h : "";
        return message;
    }
};
