"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthAccount = void 0;
const auth_1 = require("../../../cosmos/auth/v1beta1/auth");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseEthAccount() {
    return {
        baseAccount: undefined,
        codeHash: ""
    };
}
exports.EthAccount = {
    typeUrl: "/ethermint.types.v1.EthAccount",
    is(o) {
        return o && (o.$typeUrl === exports.EthAccount.typeUrl || typeof o.codeHash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EthAccount.typeUrl || typeof o.code_hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseEthAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? auth_1.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.codeHash = object.codeHash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEthAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = auth_1.BaseAccount.fromAmino(object.base_account);
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = object.code_hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? auth_1.BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.code_hash = message.codeHash === "" ? undefined : message.codeHash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EthAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EthAccount.decode(message.value);
    },
    toProto(message) {
        return exports.EthAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.types.v1.EthAccount",
            value: exports.EthAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EthAccount.typeUrl, exports.EthAccount);
