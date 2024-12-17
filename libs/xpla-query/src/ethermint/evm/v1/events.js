"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBlockBloom = exports.EventMessage = exports.EventTxLog = exports.EventEthereumTx = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseEventEthereumTx() {
    return {
        amount: "",
        ethHash: "",
        index: "",
        gasUsed: "",
        hash: "",
        recipient: "",
        ethTxFailed: ""
    };
}
exports.EventEthereumTx = {
    typeUrl: "/ethermint.evm.v1.EventEthereumTx",
    is(o) {
        return o && (o.$typeUrl === exports.EventEthereumTx.typeUrl || typeof o.amount === "string" && typeof o.ethHash === "string" && typeof o.index === "string" && typeof o.gasUsed === "string" && typeof o.hash === "string" && typeof o.recipient === "string" && typeof o.ethTxFailed === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventEthereumTx.typeUrl || typeof o.amount === "string" && typeof o.eth_hash === "string" && typeof o.index === "string" && typeof o.gas_used === "string" && typeof o.hash === "string" && typeof o.recipient === "string" && typeof o.eth_tx_failed === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.ethHash !== "") {
            writer.uint32(18).string(message.ethHash);
        }
        if (message.index !== "") {
            writer.uint32(26).string(message.index);
        }
        if (message.gasUsed !== "") {
            writer.uint32(34).string(message.gasUsed);
        }
        if (message.hash !== "") {
            writer.uint32(42).string(message.hash);
        }
        if (message.recipient !== "") {
            writer.uint32(50).string(message.recipient);
        }
        if (message.ethTxFailed !== "") {
            writer.uint32(58).string(message.ethTxFailed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventEthereumTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.ethHash = reader.string();
                    break;
                case 3:
                    message.index = reader.string();
                    break;
                case 4:
                    message.gasUsed = reader.string();
                    break;
                case 5:
                    message.hash = reader.string();
                    break;
                case 6:
                    message.recipient = reader.string();
                    break;
                case 7:
                    message.ethTxFailed = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventEthereumTx();
        message.amount = object.amount ?? "";
        message.ethHash = object.ethHash ?? "";
        message.index = object.index ?? "";
        message.gasUsed = object.gasUsed ?? "";
        message.hash = object.hash ?? "";
        message.recipient = object.recipient ?? "";
        message.ethTxFailed = object.ethTxFailed ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventEthereumTx();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.eth_hash !== undefined && object.eth_hash !== null) {
            message.ethHash = object.eth_hash;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = object.gas_used;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.eth_tx_failed !== undefined && object.eth_tx_failed !== null) {
            message.ethTxFailed = object.eth_tx_failed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount === "" ? undefined : message.amount;
        obj.eth_hash = message.ethHash === "" ? undefined : message.ethHash;
        obj.index = message.index === "" ? undefined : message.index;
        obj.gas_used = message.gasUsed === "" ? undefined : message.gasUsed;
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.eth_tx_failed = message.ethTxFailed === "" ? undefined : message.ethTxFailed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventEthereumTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventEthereumTx.decode(message.value);
    },
    toProto(message) {
        return exports.EventEthereumTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventEthereumTx",
            value: exports.EventEthereumTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventEthereumTx.typeUrl, exports.EventEthereumTx);
function createBaseEventTxLog() {
    return {
        txLogs: []
    };
}
exports.EventTxLog = {
    typeUrl: "/ethermint.evm.v1.EventTxLog",
    is(o) {
        return o && (o.$typeUrl === exports.EventTxLog.typeUrl || Array.isArray(o.txLogs) && (!o.txLogs.length || typeof o.txLogs[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventTxLog.typeUrl || Array.isArray(o.tx_logs) && (!o.tx_logs.length || typeof o.tx_logs[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txLogs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventTxLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txLogs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventTxLog();
        message.txLogs = object.txLogs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTxLog();
        message.txLogs = object.tx_logs?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txLogs) {
            obj.tx_logs = message.txLogs.map(e => e);
        }
        else {
            obj.tx_logs = message.txLogs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventTxLog.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventTxLog.decode(message.value);
    },
    toProto(message) {
        return exports.EventTxLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventTxLog",
            value: exports.EventTxLog.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventTxLog.typeUrl, exports.EventTxLog);
function createBaseEventMessage() {
    return {
        module: "",
        sender: "",
        txType: ""
    };
}
exports.EventMessage = {
    typeUrl: "/ethermint.evm.v1.EventMessage",
    is(o) {
        return o && (o.$typeUrl === exports.EventMessage.typeUrl || typeof o.module === "string" && typeof o.sender === "string" && typeof o.txType === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventMessage.typeUrl || typeof o.module === "string" && typeof o.sender === "string" && typeof o.tx_type === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.txType !== "") {
            writer.uint32(26).string(message.txType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.txType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventMessage();
        message.module = object.module ?? "";
        message.sender = object.sender ?? "";
        message.txType = object.txType ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMessage();
        if (object.module !== undefined && object.module !== null) {
            message.module = object.module;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.tx_type !== undefined && object.tx_type !== null) {
            message.txType = object.tx_type;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module === "" ? undefined : message.module;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.tx_type = message.txType === "" ? undefined : message.txType;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventMessage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventMessage.decode(message.value);
    },
    toProto(message) {
        return exports.EventMessage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventMessage",
            value: exports.EventMessage.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventMessage.typeUrl, exports.EventMessage);
function createBaseEventBlockBloom() {
    return {
        bloom: ""
    };
}
exports.EventBlockBloom = {
    typeUrl: "/ethermint.evm.v1.EventBlockBloom",
    is(o) {
        return o && (o.$typeUrl === exports.EventBlockBloom.typeUrl || typeof o.bloom === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EventBlockBloom.typeUrl || typeof o.bloom === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.bloom !== "") {
            writer.uint32(10).string(message.bloom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBlockBloom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bloom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEventBlockBloom();
        message.bloom = object.bloom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventBlockBloom();
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = object.bloom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bloom = message.bloom === "" ? undefined : message.bloom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBlockBloom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EventBlockBloom.decode(message.value);
    },
    toProto(message) {
        return exports.EventBlockBloom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EventBlockBloom",
            value: exports.EventBlockBloom.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EventBlockBloom.typeUrl, exports.EventBlockBloom);
