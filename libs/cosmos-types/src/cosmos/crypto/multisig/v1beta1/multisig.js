"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = void 0;
var binary_1 = require("../../../../binary");
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    aminoType: "cosmos-sdk/MultiSignature",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.signatures; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMultiSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
        var message = createBaseMultiSignature();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseCompactBitArray() {
    return {
        extraBitsStored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    aminoType: "cosmos-sdk/CompactBitArray",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.extraBitsStored !== 0) {
            writer.uint32(8).uint32(message.extraBitsStored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCompactBitArray();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extraBitsStored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
        var message = createBaseCompactBitArray();
        message.extraBitsStored = (_a = object.extraBitsStored) !== null && _a !== void 0 ? _a : 0;
        message.elems = (_b = object.elems) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    }
};
