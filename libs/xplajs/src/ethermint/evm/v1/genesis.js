"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisAccount = exports.GenesisState = void 0;
const evm_1 = require("./evm");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        accounts: [],
        params: evm_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ethermint.evm.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || exports.GenesisAccount.is(o.accounts[0])) && evm_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || exports.GenesisAccount.isAmino(o.accounts[0])) && evm_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            exports.GenesisAccount.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.GenesisAccount.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = evm_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => exports.GenesisAccount.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? evm_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.accounts = object.accounts?.map(e => exports.GenesisAccount.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.GenesisAccount.toAmino(e) : undefined);
        }
        else {
            obj.accounts = message.accounts;
        }
        obj.params = message.params ? evm_1.Params.toAmino(message.params) : evm_1.Params.toAmino(evm_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
function createBaseGenesisAccount() {
    return {
        address: "",
        code: "",
        storage: []
    };
}
exports.GenesisAccount = {
    typeUrl: "/ethermint.evm.v1.GenesisAccount",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisAccount.typeUrl || typeof o.address === "string" && typeof o.code === "string" && Array.isArray(o.storage) && (!o.storage.length || evm_1.State.is(o.storage[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisAccount.typeUrl || typeof o.address === "string" && typeof o.code === "string" && Array.isArray(o.storage) && (!o.storage.length || evm_1.State.isAmino(o.storage[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        for (const v of message.storage) {
            evm_1.State.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.storage.push(evm_1.State.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisAccount();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.storage = object.storage?.map(e => evm_1.State.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        message.storage = object.storage?.map(e => evm_1.State.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.code = message.code === "" ? undefined : message.code;
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? evm_1.State.toAmino(e) : undefined);
        }
        else {
            obj.storage = message.storage;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisAccount.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisAccount.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.GenesisAccount",
            value: exports.GenesisAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisAccount.typeUrl, exports.GenesisAccount);
