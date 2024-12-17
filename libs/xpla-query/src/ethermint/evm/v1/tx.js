"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgEthereumTxResponse = exports.ExtensionOptionsEthereumTx = exports.DynamicFeeTx = exports.AccessListTx = exports.LegacyTx = exports.MsgEthereumTx = void 0;
const any_1 = require("../../../google/protobuf/any");
const evm_1 = require("./evm");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgEthereumTx() {
    return {
        data: undefined,
        size: 0,
        hash: "",
        from: ""
    };
}
exports.MsgEthereumTx = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
    aminoType: "ethermint/MsgEthereumTx",
    is(o) {
        return o && (o.$typeUrl === exports.MsgEthereumTx.typeUrl || typeof o.size === "number" && typeof o.hash === "string" && typeof o.from === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgEthereumTx.typeUrl || typeof o.size === "number" && typeof o.hash === "string" && typeof o.from === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(17).double(message.size);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.from !== "") {
            writer.uint32(34).string(message.from);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.size = reader.double();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.from = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTx();
        message.data = object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        message.size = object.size ?? 0;
        message.hash = object.hash ?? "";
        message.from = object.from ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEthereumTx();
        if (object.data !== undefined && object.data !== null) {
            message.data = any_1.Any.fromAmino(object.data);
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? any_1.Any.toAmino(message.data) : undefined;
        obj.size = message.size ?? 0;
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.from = message.from === "" ? undefined : message.from;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEthereumTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "ethermint/MsgEthereumTx",
            value: exports.MsgEthereumTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEthereumTx.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgEthereumTx",
            value: exports.MsgEthereumTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgEthereumTx.typeUrl, exports.MsgEthereumTx);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgEthereumTx.aminoType, exports.MsgEthereumTx.typeUrl);
function createBaseLegacyTx() {
    return {
        nonce: BigInt(0),
        gasPrice: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
exports.LegacyTx = {
    typeUrl: "/ethermint.evm.v1.LegacyTx",
    is(o) {
        return o && (o.$typeUrl === exports.LegacyTx.typeUrl || typeof o.nonce === "bigint" && typeof o.gasPrice === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LegacyTx.typeUrl || typeof o.nonce === "bigint" && typeof o.gas_price === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.nonce !== BigInt(0)) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(18).string(message.gasPrice);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(24).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(34).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(42).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.v.length !== 0) {
            writer.uint32(58).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(66).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(74).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.gasPrice = reader.string();
                    break;
                case 3:
                    message.gas = reader.uint64();
                    break;
                case 4:
                    message.to = reader.string();
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.v = reader.bytes();
                    break;
                case 8:
                    message.r = reader.bytes();
                    break;
                case 9:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLegacyTx();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.gasPrice = object.gasPrice ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseLegacyTx();
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gasPrice = object.gas_price;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, helpers_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, helpers_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, helpers_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
        obj.gas_price = message.gasPrice === "" ? undefined : message.gasPrice;
        obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
        obj.to = message.to === "" ? undefined : message.to;
        obj.value = message.value === "" ? undefined : message.value;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.v = message.v ? (0, helpers_1.base64FromBytes)(message.v) : undefined;
        obj.r = message.r ? (0, helpers_1.base64FromBytes)(message.r) : undefined;
        obj.s = message.s ? (0, helpers_1.base64FromBytes)(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LegacyTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LegacyTx.decode(message.value);
    },
    toProto(message) {
        return exports.LegacyTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.LegacyTx",
            value: exports.LegacyTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LegacyTx.typeUrl, exports.LegacyTx);
function createBaseAccessListTx() {
    return {
        chainId: "",
        nonce: BigInt(0),
        gasPrice: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
exports.AccessListTx = {
    typeUrl: "/ethermint.evm.v1.AccessListTx",
    is(o) {
        return o && (o.$typeUrl === exports.AccessListTx.typeUrl || typeof o.chainId === "string" && typeof o.nonce === "bigint" && typeof o.gasPrice === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Array.isArray(o.accesses) && (!o.accesses.length || evm_1.AccessTuple.is(o.accesses[0])) && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccessListTx.typeUrl || typeof o.chain_id === "string" && typeof o.nonce === "bigint" && typeof o.gas_price === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Array.isArray(o.accesses) && (!o.accesses.length || evm_1.AccessTuple.isAmino(o.accesses[0])) && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasPrice !== "") {
            writer.uint32(26).string(message.gasPrice);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(32).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(42).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(50).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(58).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(74).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(82).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(90).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessListTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasPrice = reader.string();
                    break;
                case 4:
                    message.gas = reader.uint64();
                    break;
                case 5:
                    message.to = reader.string();
                    break;
                case 6:
                    message.value = reader.string();
                    break;
                case 7:
                    message.data = reader.bytes();
                    break;
                case 8:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.v = reader.bytes();
                    break;
                case 10:
                    message.r = reader.bytes();
                    break;
                case 11:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessListTx();
        message.chainId = object.chainId ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.gasPrice = object.gasPrice ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map(e => evm_1.AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessListTx();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gasPrice = object.gas_price;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        message.accesses = object.accesses?.map(e => evm_1.AccessTuple.fromAmino(e)) || [];
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, helpers_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, helpers_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, helpers_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId ?? "";
        obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
        obj.gas_price = message.gasPrice === "" ? undefined : message.gasPrice;
        obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
        obj.to = message.to === "" ? undefined : message.to;
        obj.value = message.value === "" ? undefined : message.value;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? evm_1.AccessTuple.toAmino(e) : undefined);
        }
        else {
            obj.accesses = message.accesses;
        }
        obj.v = message.v ? (0, helpers_1.base64FromBytes)(message.v) : undefined;
        obj.r = message.r ? (0, helpers_1.base64FromBytes)(message.r) : undefined;
        obj.s = message.s ? (0, helpers_1.base64FromBytes)(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessListTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AccessListTx.decode(message.value);
    },
    toProto(message) {
        return exports.AccessListTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.AccessListTx",
            value: exports.AccessListTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccessListTx.typeUrl, exports.AccessListTx);
function createBaseDynamicFeeTx() {
    return {
        chainId: "",
        nonce: BigInt(0),
        gasTipCap: "",
        gasFeeCap: "",
        gas: BigInt(0),
        to: "",
        value: "",
        data: new Uint8Array(),
        accesses: [],
        v: new Uint8Array(),
        r: new Uint8Array(),
        s: new Uint8Array()
    };
}
exports.DynamicFeeTx = {
    typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
    is(o) {
        return o && (o.$typeUrl === exports.DynamicFeeTx.typeUrl || typeof o.chainId === "string" && typeof o.nonce === "bigint" && typeof o.gasTipCap === "string" && typeof o.gasFeeCap === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Array.isArray(o.accesses) && (!o.accesses.length || evm_1.AccessTuple.is(o.accesses[0])) && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DynamicFeeTx.typeUrl || typeof o.chain_id === "string" && typeof o.nonce === "bigint" && typeof o.gas_tip_cap === "string" && typeof o.gas_fee_cap === "string" && typeof o.gas === "bigint" && typeof o.to === "string" && typeof o.value === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Array.isArray(o.accesses) && (!o.accesses.length || evm_1.AccessTuple.isAmino(o.accesses[0])) && (o.v instanceof Uint8Array || typeof o.v === "string") && (o.r instanceof Uint8Array || typeof o.r === "string") && (o.s instanceof Uint8Array || typeof o.s === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.gasTipCap !== "") {
            writer.uint32(26).string(message.gasTipCap);
        }
        if (message.gasFeeCap !== "") {
            writer.uint32(34).string(message.gasFeeCap);
        }
        if (message.gas !== BigInt(0)) {
            writer.uint32(40).uint64(message.gas);
        }
        if (message.to !== "") {
            writer.uint32(50).string(message.to);
        }
        if (message.value !== "") {
            writer.uint32(58).string(message.value);
        }
        if (message.data.length !== 0) {
            writer.uint32(66).bytes(message.data);
        }
        for (const v of message.accesses) {
            evm_1.AccessTuple.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.v.length !== 0) {
            writer.uint32(82).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(90).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(98).bytes(message.s);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDynamicFeeTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.gasTipCap = reader.string();
                    break;
                case 4:
                    message.gasFeeCap = reader.string();
                    break;
                case 5:
                    message.gas = reader.uint64();
                    break;
                case 6:
                    message.to = reader.string();
                    break;
                case 7:
                    message.value = reader.string();
                    break;
                case 8:
                    message.data = reader.bytes();
                    break;
                case 9:
                    message.accesses.push(evm_1.AccessTuple.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.v = reader.bytes();
                    break;
                case 11:
                    message.r = reader.bytes();
                    break;
                case 12:
                    message.s = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDynamicFeeTx();
        message.chainId = object.chainId ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.gasTipCap = object.gasTipCap ?? "";
        message.gasFeeCap = object.gasFeeCap ?? "";
        message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
        message.to = object.to ?? "";
        message.value = object.value ?? "";
        message.data = object.data ?? new Uint8Array();
        message.accesses = object.accesses?.map(e => evm_1.AccessTuple.fromPartial(e)) || [];
        message.v = object.v ?? new Uint8Array();
        message.r = object.r ?? new Uint8Array();
        message.s = object.s ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseDynamicFeeTx();
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
            message.gasTipCap = object.gas_tip_cap;
        }
        if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
            message.gasFeeCap = object.gas_fee_cap;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas);
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        message.accesses = object.accesses?.map(e => evm_1.AccessTuple.fromAmino(e)) || [];
        if (object.v !== undefined && object.v !== null) {
            message.v = (0, helpers_1.bytesFromBase64)(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = (0, helpers_1.bytesFromBase64)(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = (0, helpers_1.bytesFromBase64)(object.s);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId ?? "";
        obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
        obj.gas_tip_cap = message.gasTipCap === "" ? undefined : message.gasTipCap;
        obj.gas_fee_cap = message.gasFeeCap === "" ? undefined : message.gasFeeCap;
        obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
        obj.to = message.to === "" ? undefined : message.to;
        obj.value = message.value === "" ? undefined : message.value;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        if (message.accesses) {
            obj.accesses = message.accesses.map(e => e ? evm_1.AccessTuple.toAmino(e) : undefined);
        }
        else {
            obj.accesses = message.accesses;
        }
        obj.v = message.v ? (0, helpers_1.base64FromBytes)(message.v) : undefined;
        obj.r = message.r ? (0, helpers_1.base64FromBytes)(message.r) : undefined;
        obj.s = message.s ? (0, helpers_1.base64FromBytes)(message.s) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DynamicFeeTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DynamicFeeTx.decode(message.value);
    },
    toProto(message) {
        return exports.DynamicFeeTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.DynamicFeeTx",
            value: exports.DynamicFeeTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DynamicFeeTx.typeUrl, exports.DynamicFeeTx);
function createBaseExtensionOptionsEthereumTx() {
    return {};
}
exports.ExtensionOptionsEthereumTx = {
    typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
    is(o) {
        return o && o.$typeUrl === exports.ExtensionOptionsEthereumTx.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ExtensionOptionsEthereumTx.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionOptionsEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseExtensionOptionsEthereumTx();
        return message;
    },
    fromAmino(_) {
        const message = createBaseExtensionOptionsEthereumTx();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtensionOptionsEthereumTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtensionOptionsEthereumTx.decode(message.value);
    },
    toProto(message) {
        return exports.ExtensionOptionsEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx",
            value: exports.ExtensionOptionsEthereumTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtensionOptionsEthereumTx.typeUrl, exports.ExtensionOptionsEthereumTx);
function createBaseMsgEthereumTxResponse() {
    return {
        hash: "",
        logs: [],
        ret: new Uint8Array(),
        vmError: "",
        gasUsed: BigInt(0)
    };
}
exports.MsgEthereumTxResponse = {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgEthereumTxResponse.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || evm_1.Log.is(o.logs[0])) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.vmError === "string" && typeof o.gasUsed === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgEthereumTxResponse.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || evm_1.Log.isAmino(o.logs[0])) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.vm_error === "string" && typeof o.gas_used === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(26).bytes(message.ret);
        }
        if (message.vmError !== "") {
            writer.uint32(34).string(message.vmError);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(40).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEthereumTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ret = reader.bytes();
                    break;
                case 4:
                    message.vmError = reader.string();
                    break;
                case 5:
                    message.gasUsed = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgEthereumTxResponse();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map(e => evm_1.Log.fromPartial(e)) || [];
        message.ret = object.ret ?? new Uint8Array();
        message.vmError = object.vmError ?? "";
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgEthereumTxResponse();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        message.logs = object.logs?.map(e => evm_1.Log.fromAmino(e)) || [];
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = (0, helpers_1.bytesFromBase64)(object.ret);
        }
        if (object.vm_error !== undefined && object.vm_error !== null) {
            message.vmError = object.vm_error;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? evm_1.Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = message.logs;
        }
        obj.ret = message.ret ? (0, helpers_1.base64FromBytes)(message.ret) : undefined;
        obj.vm_error = message.vmError === "" ? undefined : message.vmError;
        obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEthereumTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgEthereumTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEthereumTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse",
            value: exports.MsgEthereumTxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgEthereumTxResponse.typeUrl, exports.MsgEthereumTxResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: evm_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
    aminoType: "ethermint/x/evm/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && evm_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && evm_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
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
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? evm_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? evm_1.Params.toAmino(message.params) : evm_1.Params.toAmino(evm_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "ethermint/x/evm/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
