"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthAccount = void 0;
var auth_1 = require("../../../cosmos/auth/v1beta1/auth");
var binary_1 = require("../../../binary");
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: ""
    };
}
exports.EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEthAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.codeHash = reader.string();
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
        var message = createBaseEthAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? auth_1.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.codeHash = (_a = object.codeHash) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
