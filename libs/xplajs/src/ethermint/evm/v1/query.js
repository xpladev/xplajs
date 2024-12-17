"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBaseFeeResponse = exports.QueryBaseFeeRequest = exports.QueryTraceBlockResponse = exports.QueryTraceBlockRequest = exports.QueryTraceTxResponse = exports.QueryTraceTxRequest = exports.EstimateGasResponse = exports.EthCallRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryTxLogsResponse = exports.QueryTxLogsRequest = exports.QueryCodeResponse = exports.QueryCodeRequest = exports.QueryStorageResponse = exports.QueryStorageRequest = exports.QueryBalanceResponse = exports.QueryBalanceRequest = exports.QueryValidatorAccountResponse = exports.QueryValidatorAccountRequest = exports.QueryCosmosAccountResponse = exports.QueryCosmosAccountRequest = exports.QueryAccountResponse = exports.QueryAccountRequest = void 0;
const tx_1 = require("./tx");
const evm_1 = require("./evm");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAccountRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAccountRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountRequest.typeUrl, exports.QueryAccountRequest);
function createBaseQueryAccountResponse() {
    return {
        balance: "",
        codeHash: "",
        nonce: BigInt(0)
    };
}
exports.QueryAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryAccountResponse.typeUrl || typeof o.balance === "string" && typeof o.codeHash === "string" && typeof o.nonce === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryAccountResponse.typeUrl || typeof o.balance === "string" && typeof o.code_hash === "string" && typeof o.nonce === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.codeHash !== "") {
            writer.uint32(18).string(message.codeHash);
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                case 2:
                    message.codeHash = reader.string();
                    break;
                case 3:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAccountResponse();
        message.balance = object.balance ?? "";
        message.codeHash = object.codeHash ?? "";
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAccountResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        if (object.code_hash !== undefined && object.code_hash !== null) {
            message.codeHash = object.code_hash;
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance === "" ? undefined : message.balance;
        obj.code_hash = message.codeHash === "" ? undefined : message.codeHash;
        obj.nonce = message.nonce !== BigInt(0) ? message.nonce?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryAccountResponse",
            value: exports.QueryAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryAccountResponse.typeUrl, exports.QueryAccountResponse);
function createBaseQueryCosmosAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryCosmosAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCosmosAccountRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCosmosAccountRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCosmosAccountRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCosmosAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCosmosAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCosmosAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCosmosAccountRequest",
            value: exports.QueryCosmosAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCosmosAccountRequest.typeUrl, exports.QueryCosmosAccountRequest);
function createBaseQueryCosmosAccountResponse() {
    return {
        cosmosAddress: "",
        sequence: BigInt(0),
        accountNumber: BigInt(0)
    };
}
exports.QueryCosmosAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCosmosAccountResponse.typeUrl || typeof o.cosmosAddress === "string" && typeof o.sequence === "bigint" && typeof o.accountNumber === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCosmosAccountResponse.typeUrl || typeof o.cosmos_address === "string" && typeof o.sequence === "bigint" && typeof o.account_number === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.cosmosAddress !== "") {
            writer.uint32(10).string(message.cosmosAddress);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCosmosAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCosmosAccountResponse();
        message.cosmosAddress = object.cosmosAddress ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCosmosAccountResponse();
        if (object.cosmos_address !== undefined && object.cosmos_address !== null) {
            message.cosmosAddress = object.cosmos_address;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cosmos_address = message.cosmosAddress === "" ? undefined : message.cosmosAddress;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCosmosAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCosmosAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCosmosAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCosmosAccountResponse",
            value: exports.QueryCosmosAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCosmosAccountResponse.typeUrl, exports.QueryCosmosAccountResponse);
function createBaseQueryValidatorAccountRequest() {
    return {
        consAddress: ""
    };
}
exports.QueryValidatorAccountRequest = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorAccountRequest.typeUrl || typeof o.consAddress === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorAccountRequest.typeUrl || typeof o.cons_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consAddress !== "") {
            writer.uint32(10).string(message.consAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountRequest();
        message.consAddress = object.consAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorAccountRequest();
        if (object.cons_address !== undefined && object.cons_address !== null) {
            message.consAddress = object.cons_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.cons_address = message.consAddress === "" ? undefined : message.consAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorAccountRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryValidatorAccountRequest",
            value: exports.QueryValidatorAccountRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorAccountRequest.typeUrl, exports.QueryValidatorAccountRequest);
function createBaseQueryValidatorAccountResponse() {
    return {
        accountAddress: "",
        sequence: BigInt(0),
        accountNumber: BigInt(0)
    };
}
exports.QueryValidatorAccountResponse = {
    typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorAccountResponse.typeUrl || typeof o.accountAddress === "string" && typeof o.sequence === "bigint" && typeof o.accountNumber === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorAccountResponse.typeUrl || typeof o.account_address === "string" && typeof o.sequence === "bigint" && typeof o.account_number === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.accountAddress !== "") {
            writer.uint32(10).string(message.accountAddress);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountAddress = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorAccountResponse();
        message.accountAddress = object.accountAddress ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorAccountResponse();
        if (object.account_address !== undefined && object.account_address !== null) {
            message.accountAddress = object.account_address;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.account_address = message.accountAddress === "" ? undefined : message.accountAddress;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorAccountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryValidatorAccountResponse",
            value: exports.QueryValidatorAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorAccountResponse.typeUrl, exports.QueryValidatorAccountResponse);
function createBaseQueryBalanceRequest() {
    return {
        address: ""
    };
}
exports.QueryBalanceRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBalanceRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBalanceRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBalanceRequest",
            value: exports.QueryBalanceRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBalanceRequest.typeUrl, exports.QueryBalanceRequest);
function createBaseQueryBalanceResponse() {
    return {
        balance: ""
    };
}
exports.QueryBalanceResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBalanceResponse.typeUrl || typeof o.balance === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBalanceResponse.typeUrl || typeof o.balance === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = object.balance ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBalanceResponse();
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance === "" ? undefined : message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBalanceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBalanceResponse",
            value: exports.QueryBalanceResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBalanceResponse.typeUrl, exports.QueryBalanceResponse);
function createBaseQueryStorageRequest() {
    return {
        address: "",
        key: ""
    };
}
exports.QueryStorageRequest = {
    typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStorageRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStorageRequest.typeUrl || typeof o.address === "string" && typeof o.key === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageRequest();
        message.address = object.address ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStorageRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.key = message.key === "" ? undefined : message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStorageRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryStorageRequest",
            value: exports.QueryStorageRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStorageRequest.typeUrl, exports.QueryStorageRequest);
function createBaseQueryStorageResponse() {
    return {
        value: ""
    };
}
exports.QueryStorageResponse = {
    typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryStorageResponse.typeUrl || typeof o.value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryStorageResponse.typeUrl || typeof o.value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageResponse();
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStorageResponse();
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value === "" ? undefined : message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryStorageResponse",
            value: exports.QueryStorageResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryStorageResponse.typeUrl, exports.QueryStorageResponse);
function createBaseQueryCodeRequest() {
    return {
        address: ""
    };
}
exports.QueryCodeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCodeRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCodeRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCodeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCodeRequest",
            value: exports.QueryCodeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodeRequest.typeUrl, exports.QueryCodeRequest);
function createBaseQueryCodeResponse() {
    return {
        code: new Uint8Array()
    };
}
exports.QueryCodeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryCodeResponse.typeUrl || o.code instanceof Uint8Array || typeof o.code === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryCodeResponse.typeUrl || o.code instanceof Uint8Array || typeof o.code === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.code.length !== 0) {
            writer.uint32(10).bytes(message.code);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCodeResponse();
        message.code = object.code ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCodeResponse();
        if (object.code !== undefined && object.code !== null) {
            message.code = (0, helpers_1.bytesFromBase64)(object.code);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.code = message.code ? (0, helpers_1.base64FromBytes)(message.code) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCodeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCodeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryCodeResponse",
            value: exports.QueryCodeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryCodeResponse.typeUrl, exports.QueryCodeResponse);
function createBaseQueryTxLogsRequest() {
    return {
        hash: "",
        pagination: undefined
    };
}
exports.QueryTxLogsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTxLogsRequest.typeUrl || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTxLogsRequest.typeUrl || typeof o.hash === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsRequest();
        message.hash = object.hash ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTxLogsRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTxLogsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTxLogsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTxLogsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTxLogsRequest",
            value: exports.QueryTxLogsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTxLogsRequest.typeUrl, exports.QueryTxLogsRequest);
function createBaseQueryTxLogsResponse() {
    return {
        logs: [],
        pagination: undefined
    };
}
exports.QueryTxLogsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTxLogsResponse.typeUrl || Array.isArray(o.logs) && (!o.logs.length || evm_1.Log.is(o.logs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTxLogsResponse.typeUrl || Array.isArray(o.logs) && (!o.logs.length || evm_1.Log.isAmino(o.logs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.logs) {
            evm_1.Log.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTxLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logs.push(evm_1.Log.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTxLogsResponse();
        message.logs = object.logs?.map(e => evm_1.Log.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTxLogsResponse();
        message.logs = object.logs?.map(e => evm_1.Log.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? evm_1.Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = message.logs;
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTxLogsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTxLogsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTxLogsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTxLogsResponse",
            value: exports.QueryTxLogsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTxLogsResponse.typeUrl, exports.QueryTxLogsResponse);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: evm_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || evm_1.Params.is(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || evm_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            evm_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? evm_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = evm_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? evm_1.Params.toAmino(message.params) : evm_1.Params.toAmino(evm_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
function createBaseEthCallRequest() {
    return {
        args: new Uint8Array(),
        gasCap: BigInt(0),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0)
    };
}
exports.EthCallRequest = {
    typeUrl: "/ethermint.evm.v1.EthCallRequest",
    is(o) {
        return o && (o.$typeUrl === exports.EthCallRequest.typeUrl || (o.args instanceof Uint8Array || typeof o.args === "string") && typeof o.gasCap === "bigint" && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EthCallRequest.typeUrl || (o.args instanceof Uint8Array || typeof o.args === "string") && typeof o.gas_cap === "bigint" && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.args.length !== 0) {
            writer.uint32(10).bytes(message.args);
        }
        if (message.gasCap !== BigInt(0)) {
            writer.uint32(16).uint64(message.gasCap);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(26).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(32).int64(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEthCallRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.args = reader.bytes();
                    break;
                case 2:
                    message.gasCap = reader.uint64();
                    break;
                case 3:
                    message.proposerAddress = reader.bytes();
                    break;
                case 4:
                    message.chainId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEthCallRequest();
        message.args = object.args ?? new Uint8Array();
        message.gasCap = object.gasCap !== undefined && object.gasCap !== null ? BigInt(object.gasCap.toString()) : BigInt(0);
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEthCallRequest();
        if (object.args !== undefined && object.args !== null) {
            message.args = (0, helpers_1.bytesFromBase64)(object.args);
        }
        if (object.gas_cap !== undefined && object.gas_cap !== null) {
            message.gasCap = BigInt(object.gas_cap);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = BigInt(object.chain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.args = message.args ? (0, helpers_1.base64FromBytes)(message.args) : undefined;
        obj.gas_cap = message.gasCap !== BigInt(0) ? message.gasCap?.toString() : undefined;
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EthCallRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EthCallRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EthCallRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EthCallRequest",
            value: exports.EthCallRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EthCallRequest.typeUrl, exports.EthCallRequest);
function createBaseEstimateGasResponse() {
    return {
        gas: BigInt(0)
    };
}
exports.EstimateGasResponse = {
    typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
    is(o) {
        return o && (o.$typeUrl === exports.EstimateGasResponse.typeUrl || typeof o.gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EstimateGasResponse.typeUrl || typeof o.gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas !== BigInt(0)) {
            writer.uint32(8).uint64(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateGasResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEstimateGasResponse();
        message.gas = object.gas !== undefined && object.gas !== null ? BigInt(object.gas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEstimateGasResponse();
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = BigInt(object.gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas = message.gas !== BigInt(0) ? message.gas?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateGasResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EstimateGasResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateGasResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.EstimateGasResponse",
            value: exports.EstimateGasResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EstimateGasResponse.typeUrl, exports.EstimateGasResponse);
function createBaseQueryTraceTxRequest() {
    return {
        msg: undefined,
        traceConfig: undefined,
        predecessors: [],
        blockNumber: BigInt(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0)
    };
}
exports.QueryTraceTxRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTraceTxRequest.typeUrl || Array.isArray(o.predecessors) && (!o.predecessors.length || tx_1.MsgEthereumTx.is(o.predecessors[0])) && typeof o.blockNumber === "bigint" && typeof o.blockHash === "string" && timestamp_1.Timestamp.is(o.blockTime) && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTraceTxRequest.typeUrl || Array.isArray(o.predecessors) && (!o.predecessors.length || tx_1.MsgEthereumTx.isAmino(o.predecessors[0])) && typeof o.block_number === "bigint" && typeof o.block_hash === "string" && timestamp_1.Timestamp.isAmino(o.block_time) && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg !== undefined) {
            tx_1.MsgEthereumTx.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            evm_1.TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.predecessors) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.blockTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(72).int64(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = tx_1.MsgEthereumTx.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.traceConfig = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.predecessors.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxRequest();
        message.msg = object.msg !== undefined && object.msg !== null ? tx_1.MsgEthereumTx.fromPartial(object.msg) : undefined;
        message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? evm_1.TraceConfig.fromPartial(object.traceConfig) : undefined;
        message.predecessors = object.predecessors?.map(e => tx_1.MsgEthereumTx.fromPartial(e)) || [];
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
        message.blockHash = object.blockHash ?? "";
        message.blockTime = object.blockTime ?? undefined;
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceTxRequest();
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = tx_1.MsgEthereumTx.fromAmino(object.msg);
        }
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.traceConfig = evm_1.TraceConfig.fromAmino(object.trace_config);
        }
        message.predecessors = object.predecessors?.map(e => tx_1.MsgEthereumTx.fromAmino(e)) || [];
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = BigInt(object.block_number);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.blockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.block_time));
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = BigInt(object.chain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg ? tx_1.MsgEthereumTx.toAmino(message.msg) : undefined;
        obj.trace_config = message.traceConfig ? evm_1.TraceConfig.toAmino(message.traceConfig) : undefined;
        if (message.predecessors) {
            obj.predecessors = message.predecessors.map(e => e ? tx_1.MsgEthereumTx.toAmino(e) : undefined);
        }
        else {
            obj.predecessors = message.predecessors;
        }
        obj.block_number = message.blockNumber !== BigInt(0) ? message.blockNumber?.toString() : undefined;
        obj.block_hash = message.blockHash === "" ? undefined : message.blockHash;
        obj.block_time = message.blockTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.blockTime)) : new Date();
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraceTxRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraceTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraceTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceTxRequest",
            value: exports.QueryTraceTxRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTraceTxRequest.typeUrl, exports.QueryTraceTxRequest);
function createBaseQueryTraceTxResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QueryTraceTxResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTraceTxResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTraceTxResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceTxResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceTxResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraceTxResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraceTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraceTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceTxResponse",
            value: exports.QueryTraceTxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTraceTxResponse.typeUrl, exports.QueryTraceTxResponse);
function createBaseQueryTraceBlockRequest() {
    return {
        txs: [],
        traceConfig: undefined,
        blockNumber: BigInt(0),
        blockHash: "",
        blockTime: new Date(),
        proposerAddress: new Uint8Array(),
        chainId: BigInt(0)
    };
}
exports.QueryTraceBlockRequest = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTraceBlockRequest.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.MsgEthereumTx.is(o.txs[0])) && typeof o.blockNumber === "bigint" && typeof o.blockHash === "string" && timestamp_1.Timestamp.is(o.blockTime) && (o.proposerAddress instanceof Uint8Array || typeof o.proposerAddress === "string") && typeof o.chainId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTraceBlockRequest.typeUrl || Array.isArray(o.txs) && (!o.txs.length || tx_1.MsgEthereumTx.isAmino(o.txs[0])) && typeof o.block_number === "bigint" && typeof o.block_hash === "string" && timestamp_1.Timestamp.isAmino(o.block_time) && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string") && typeof o.chain_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            tx_1.MsgEthereumTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.traceConfig !== undefined) {
            evm_1.TraceConfig.encode(message.traceConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(40).int64(message.blockNumber);
        }
        if (message.blockHash !== "") {
            writer.uint32(50).string(message.blockHash);
        }
        if (message.blockTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.blockTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(66).bytes(message.proposerAddress);
        }
        if (message.chainId !== BigInt(0)) {
            writer.uint32(72).int64(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.MsgEthereumTx.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.traceConfig = evm_1.TraceConfig.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockNumber = reader.int64();
                    break;
                case 6:
                    message.blockHash = reader.string();
                    break;
                case 7:
                    message.blockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.proposerAddress = reader.bytes();
                    break;
                case 9:
                    message.chainId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockRequest();
        message.txs = object.txs?.map(e => tx_1.MsgEthereumTx.fromPartial(e)) || [];
        message.traceConfig = object.traceConfig !== undefined && object.traceConfig !== null ? evm_1.TraceConfig.fromPartial(object.traceConfig) : undefined;
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
        message.blockHash = object.blockHash ?? "";
        message.blockTime = object.blockTime ?? undefined;
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceBlockRequest();
        message.txs = object.txs?.map(e => tx_1.MsgEthereumTx.fromAmino(e)) || [];
        if (object.trace_config !== undefined && object.trace_config !== null) {
            message.traceConfig = evm_1.TraceConfig.fromAmino(object.trace_config);
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = BigInt(object.block_number);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.block_time !== undefined && object.block_time !== null) {
            message.blockTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.block_time));
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = BigInt(object.chain_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.MsgEthereumTx.toAmino(e) : undefined);
        }
        else {
            obj.txs = message.txs;
        }
        obj.trace_config = message.traceConfig ? evm_1.TraceConfig.toAmino(message.traceConfig) : undefined;
        obj.block_number = message.blockNumber !== BigInt(0) ? message.blockNumber?.toString() : undefined;
        obj.block_hash = message.blockHash === "" ? undefined : message.blockHash;
        obj.block_time = message.blockTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.blockTime)) : new Date();
        obj.proposer_address = message.proposerAddress ? (0, helpers_1.base64FromBytes)(message.proposerAddress) : undefined;
        obj.chain_id = message.chainId !== BigInt(0) ? message.chainId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraceBlockRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraceBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraceBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceBlockRequest",
            value: exports.QueryTraceBlockRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTraceBlockRequest.typeUrl, exports.QueryTraceBlockRequest);
function createBaseQueryTraceBlockResponse() {
    return {
        data: new Uint8Array()
    };
}
exports.QueryTraceBlockResponse = {
    typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryTraceBlockResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryTraceBlockResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTraceBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryTraceBlockResponse();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTraceBlockResponse();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTraceBlockResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryTraceBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTraceBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryTraceBlockResponse",
            value: exports.QueryTraceBlockResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryTraceBlockResponse.typeUrl, exports.QueryTraceBlockResponse);
function createBaseQueryBaseFeeRequest() {
    return {};
}
exports.QueryBaseFeeRequest = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryBaseFeeRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryBaseFeeRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeRequest();
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
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryBaseFeeRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBaseFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBaseFeeRequest",
            value: exports.QueryBaseFeeRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBaseFeeRequest.typeUrl, exports.QueryBaseFeeRequest);
function createBaseQueryBaseFeeResponse() {
    return {
        baseFee: ""
    };
}
exports.QueryBaseFeeResponse = {
    typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryBaseFeeResponse.typeUrl || typeof o.baseFee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryBaseFeeResponse.typeUrl || typeof o.base_fee === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.baseFee !== "") {
            writer.uint32(10).string(message.baseFee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseFee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseFeeResponse();
        message.baseFee = object.baseFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBaseFeeResponse();
        if (object.base_fee !== undefined && object.base_fee !== null) {
            message.baseFee = object.base_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_fee = message.baseFee === "" ? undefined : message.baseFee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBaseFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBaseFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBaseFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.QueryBaseFeeResponse",
            value: exports.QueryBaseFeeResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryBaseFeeResponse.typeUrl, exports.QueryBaseFeeResponse);
