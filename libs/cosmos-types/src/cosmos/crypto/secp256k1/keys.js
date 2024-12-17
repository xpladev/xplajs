"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = void 0;
var binary_1 = require("../../../binary");
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PubKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    aminoType: "tendermint/PubKeySecp256k1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePubKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
        var message = createBasePubKey();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PrivKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
    aminoType: "tendermint/PrivKeySecp256k1",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrivKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
        var message = createBasePrivKey();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
