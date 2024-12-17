"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = void 0;
var binary_1 = require("../../binary");
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
exports.PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePublicKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
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
        var message = createBasePublicKey();
        message.ed25519 = (_a = object.ed25519) !== null && _a !== void 0 ? _a : undefined;
        message.secp256k1 = (_b = object.secp256k1) !== null && _b !== void 0 ? _b : undefined;
        return message;
    }
};
