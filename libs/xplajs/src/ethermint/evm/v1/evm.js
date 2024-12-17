"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceConfig = exports.AccessTuple = exports.TxResult = exports.Log = exports.TransactionLogs = exports.State = exports.ChainConfig = exports.Params = void 0;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        evmDenom: "",
        enableCreate: false,
        enableCall: false,
        extraEips: [],
        chainConfig: exports.ChainConfig.fromPartial({}),
        allowUnprotectedTxs: false
    };
}
exports.Params = {
    typeUrl: "/ethermint.evm.v1.Params",
    aminoType: "ethermint/x/evm/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.evmDenom === "string" && typeof o.enableCreate === "boolean" && typeof o.enableCall === "boolean" && Array.isArray(o.extraEips) && (!o.extraEips.length || typeof o.extraEips[0] === "bigint") && exports.ChainConfig.is(o.chainConfig) && typeof o.allowUnprotectedTxs === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.evm_denom === "string" && typeof o.enable_create === "boolean" && typeof o.enable_call === "boolean" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && exports.ChainConfig.isAmino(o.chain_config) && typeof o.allow_unprotected_txs === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.evmDenom !== "") {
            writer.uint32(10).string(message.evmDenom);
        }
        if (message.enableCreate === true) {
            writer.uint32(16).bool(message.enableCreate);
        }
        if (message.enableCall === true) {
            writer.uint32(24).bool(message.enableCall);
        }
        writer.uint32(34).fork();
        for (const v of message.extraEips) {
            writer.int64(v);
        }
        writer.ldelim();
        if (message.chainConfig !== undefined) {
            exports.ChainConfig.encode(message.chainConfig, writer.uint32(42).fork()).ldelim();
        }
        if (message.allowUnprotectedTxs === true) {
            writer.uint32(48).bool(message.allowUnprotectedTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evmDenom = reader.string();
                    break;
                case 2:
                    message.enableCreate = reader.bool();
                    break;
                case 3:
                    message.enableCall = reader.bool();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extraEips.push(reader.int64());
                        }
                    }
                    else {
                        message.extraEips.push(reader.int64());
                    }
                    break;
                case 5:
                    message.chainConfig = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.allowUnprotectedTxs = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.evmDenom = object.evmDenom ?? "";
        message.enableCreate = object.enableCreate ?? false;
        message.enableCall = object.enableCall ?? false;
        message.extraEips = object.extraEips?.map(e => BigInt(e.toString())) || [];
        message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? exports.ChainConfig.fromPartial(object.chainConfig) : undefined;
        message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.evm_denom !== undefined && object.evm_denom !== null) {
            message.evmDenom = object.evm_denom;
        }
        if (object.enable_create !== undefined && object.enable_create !== null) {
            message.enableCreate = object.enable_create;
        }
        if (object.enable_call !== undefined && object.enable_call !== null) {
            message.enableCall = object.enable_call;
        }
        message.extraEips = object.extra_eips?.map(e => BigInt(e)) || [];
        if (object.chain_config !== undefined && object.chain_config !== null) {
            message.chainConfig = exports.ChainConfig.fromAmino(object.chain_config);
        }
        if (object.allow_unprotected_txs !== undefined && object.allow_unprotected_txs !== null) {
            message.allowUnprotectedTxs = object.allow_unprotected_txs;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.evm_denom = message.evmDenom === "" ? undefined : message.evmDenom;
        obj.enable_create = message.enableCreate === false ? undefined : message.enableCreate;
        obj.enable_call = message.enableCall === false ? undefined : message.enableCall;
        if (message.extraEips) {
            obj.extra_eips = message.extraEips.map(e => e.toString());
        }
        else {
            obj.extra_eips = message.extraEips;
        }
        obj.chain_config = message.chainConfig ? exports.ChainConfig.toAmino(message.chainConfig) : exports.ChainConfig.toAmino(exports.ChainConfig.fromPartial({}));
        obj.allow_unprotected_txs = message.allowUnprotectedTxs === false ? undefined : message.allowUnprotectedTxs;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "ethermint/x/evm/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseChainConfig() {
    return {
        homesteadBlock: "",
        daoForkBlock: "",
        daoForkSupport: false,
        eip150Block: "",
        eip150Hash: "",
        eip155Block: "",
        eip158Block: "",
        byzantiumBlock: "",
        constantinopleBlock: "",
        petersburgBlock: "",
        istanbulBlock: "",
        muirGlacierBlock: "",
        berlinBlock: "",
        londonBlock: "",
        arrowGlacierBlock: "",
        grayGlacierBlock: "",
        mergeNetsplitBlock: "",
        shanghaiBlock: "",
        cancunBlock: ""
    };
}
exports.ChainConfig = {
    typeUrl: "/ethermint.evm.v1.ChainConfig",
    is(o) {
        return o && (o.$typeUrl === exports.ChainConfig.typeUrl || typeof o.homesteadBlock === "string" && typeof o.daoForkBlock === "string" && typeof o.daoForkSupport === "boolean" && typeof o.eip150Block === "string" && typeof o.eip150Hash === "string" && typeof o.eip155Block === "string" && typeof o.eip158Block === "string" && typeof o.byzantiumBlock === "string" && typeof o.constantinopleBlock === "string" && typeof o.petersburgBlock === "string" && typeof o.istanbulBlock === "string" && typeof o.muirGlacierBlock === "string" && typeof o.berlinBlock === "string" && typeof o.londonBlock === "string" && typeof o.arrowGlacierBlock === "string" && typeof o.grayGlacierBlock === "string" && typeof o.mergeNetsplitBlock === "string" && typeof o.shanghaiBlock === "string" && typeof o.cancunBlock === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip150_hash === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.shanghai_block === "string" && typeof o.cancun_block === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.homesteadBlock !== "") {
            writer.uint32(10).string(message.homesteadBlock);
        }
        if (message.daoForkBlock !== "") {
            writer.uint32(18).string(message.daoForkBlock);
        }
        if (message.daoForkSupport === true) {
            writer.uint32(24).bool(message.daoForkSupport);
        }
        if (message.eip150Block !== "") {
            writer.uint32(34).string(message.eip150Block);
        }
        if (message.eip150Hash !== "") {
            writer.uint32(42).string(message.eip150Hash);
        }
        if (message.eip155Block !== "") {
            writer.uint32(50).string(message.eip155Block);
        }
        if (message.eip158Block !== "") {
            writer.uint32(58).string(message.eip158Block);
        }
        if (message.byzantiumBlock !== "") {
            writer.uint32(66).string(message.byzantiumBlock);
        }
        if (message.constantinopleBlock !== "") {
            writer.uint32(74).string(message.constantinopleBlock);
        }
        if (message.petersburgBlock !== "") {
            writer.uint32(82).string(message.petersburgBlock);
        }
        if (message.istanbulBlock !== "") {
            writer.uint32(90).string(message.istanbulBlock);
        }
        if (message.muirGlacierBlock !== "") {
            writer.uint32(98).string(message.muirGlacierBlock);
        }
        if (message.berlinBlock !== "") {
            writer.uint32(106).string(message.berlinBlock);
        }
        if (message.londonBlock !== "") {
            writer.uint32(138).string(message.londonBlock);
        }
        if (message.arrowGlacierBlock !== "") {
            writer.uint32(146).string(message.arrowGlacierBlock);
        }
        if (message.grayGlacierBlock !== "") {
            writer.uint32(162).string(message.grayGlacierBlock);
        }
        if (message.mergeNetsplitBlock !== "") {
            writer.uint32(170).string(message.mergeNetsplitBlock);
        }
        if (message.shanghaiBlock !== "") {
            writer.uint32(178).string(message.shanghaiBlock);
        }
        if (message.cancunBlock !== "") {
            writer.uint32(186).string(message.cancunBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.homesteadBlock = reader.string();
                    break;
                case 2:
                    message.daoForkBlock = reader.string();
                    break;
                case 3:
                    message.daoForkSupport = reader.bool();
                    break;
                case 4:
                    message.eip150Block = reader.string();
                    break;
                case 5:
                    message.eip150Hash = reader.string();
                    break;
                case 6:
                    message.eip155Block = reader.string();
                    break;
                case 7:
                    message.eip158Block = reader.string();
                    break;
                case 8:
                    message.byzantiumBlock = reader.string();
                    break;
                case 9:
                    message.constantinopleBlock = reader.string();
                    break;
                case 10:
                    message.petersburgBlock = reader.string();
                    break;
                case 11:
                    message.istanbulBlock = reader.string();
                    break;
                case 12:
                    message.muirGlacierBlock = reader.string();
                    break;
                case 13:
                    message.berlinBlock = reader.string();
                    break;
                case 17:
                    message.londonBlock = reader.string();
                    break;
                case 18:
                    message.arrowGlacierBlock = reader.string();
                    break;
                case 20:
                    message.grayGlacierBlock = reader.string();
                    break;
                case 21:
                    message.mergeNetsplitBlock = reader.string();
                    break;
                case 22:
                    message.shanghaiBlock = reader.string();
                    break;
                case 23:
                    message.cancunBlock = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseChainConfig();
        message.homesteadBlock = object.homesteadBlock ?? "";
        message.daoForkBlock = object.daoForkBlock ?? "";
        message.daoForkSupport = object.daoForkSupport ?? false;
        message.eip150Block = object.eip150Block ?? "";
        message.eip150Hash = object.eip150Hash ?? "";
        message.eip155Block = object.eip155Block ?? "";
        message.eip158Block = object.eip158Block ?? "";
        message.byzantiumBlock = object.byzantiumBlock ?? "";
        message.constantinopleBlock = object.constantinopleBlock ?? "";
        message.petersburgBlock = object.petersburgBlock ?? "";
        message.istanbulBlock = object.istanbulBlock ?? "";
        message.muirGlacierBlock = object.muirGlacierBlock ?? "";
        message.berlinBlock = object.berlinBlock ?? "";
        message.londonBlock = object.londonBlock ?? "";
        message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
        message.grayGlacierBlock = object.grayGlacierBlock ?? "";
        message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
        message.shanghaiBlock = object.shanghaiBlock ?? "";
        message.cancunBlock = object.cancunBlock ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseChainConfig();
        if (object.homestead_block !== undefined && object.homestead_block !== null) {
            message.homesteadBlock = object.homestead_block;
        }
        if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
            message.daoForkBlock = object.dao_fork_block;
        }
        if (object.dao_fork_support !== undefined && object.dao_fork_support !== null) {
            message.daoForkSupport = object.dao_fork_support;
        }
        if (object.eip150_block !== undefined && object.eip150_block !== null) {
            message.eip150Block = object.eip150_block;
        }
        if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
            message.eip150Hash = object.eip150_hash;
        }
        if (object.eip155_block !== undefined && object.eip155_block !== null) {
            message.eip155Block = object.eip155_block;
        }
        if (object.eip158_block !== undefined && object.eip158_block !== null) {
            message.eip158Block = object.eip158_block;
        }
        if (object.byzantium_block !== undefined && object.byzantium_block !== null) {
            message.byzantiumBlock = object.byzantium_block;
        }
        if (object.constantinople_block !== undefined && object.constantinople_block !== null) {
            message.constantinopleBlock = object.constantinople_block;
        }
        if (object.petersburg_block !== undefined && object.petersburg_block !== null) {
            message.petersburgBlock = object.petersburg_block;
        }
        if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
            message.istanbulBlock = object.istanbul_block;
        }
        if (object.muir_glacier_block !== undefined && object.muir_glacier_block !== null) {
            message.muirGlacierBlock = object.muir_glacier_block;
        }
        if (object.berlin_block !== undefined && object.berlin_block !== null) {
            message.berlinBlock = object.berlin_block;
        }
        if (object.london_block !== undefined && object.london_block !== null) {
            message.londonBlock = object.london_block;
        }
        if (object.arrow_glacier_block !== undefined && object.arrow_glacier_block !== null) {
            message.arrowGlacierBlock = object.arrow_glacier_block;
        }
        if (object.gray_glacier_block !== undefined && object.gray_glacier_block !== null) {
            message.grayGlacierBlock = object.gray_glacier_block;
        }
        if (object.merge_netsplit_block !== undefined && object.merge_netsplit_block !== null) {
            message.mergeNetsplitBlock = object.merge_netsplit_block;
        }
        if (object.shanghai_block !== undefined && object.shanghai_block !== null) {
            message.shanghaiBlock = object.shanghai_block;
        }
        if (object.cancun_block !== undefined && object.cancun_block !== null) {
            message.cancunBlock = object.cancun_block;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.homestead_block = message.homesteadBlock === "" ? undefined : message.homesteadBlock;
        obj.dao_fork_block = message.daoForkBlock === "" ? undefined : message.daoForkBlock;
        obj.dao_fork_support = message.daoForkSupport === false ? undefined : message.daoForkSupport;
        obj.eip150_block = message.eip150Block === "" ? undefined : message.eip150Block;
        obj.eip150_hash = message.eip150Hash === "" ? undefined : message.eip150Hash;
        obj.eip155_block = message.eip155Block === "" ? undefined : message.eip155Block;
        obj.eip158_block = message.eip158Block === "" ? undefined : message.eip158Block;
        obj.byzantium_block = message.byzantiumBlock === "" ? undefined : message.byzantiumBlock;
        obj.constantinople_block = message.constantinopleBlock === "" ? undefined : message.constantinopleBlock;
        obj.petersburg_block = message.petersburgBlock === "" ? undefined : message.petersburgBlock;
        obj.istanbul_block = message.istanbulBlock === "" ? undefined : message.istanbulBlock;
        obj.muir_glacier_block = message.muirGlacierBlock === "" ? undefined : message.muirGlacierBlock;
        obj.berlin_block = message.berlinBlock === "" ? undefined : message.berlinBlock;
        obj.london_block = message.londonBlock === "" ? undefined : message.londonBlock;
        obj.arrow_glacier_block = message.arrowGlacierBlock === "" ? undefined : message.arrowGlacierBlock;
        obj.gray_glacier_block = message.grayGlacierBlock === "" ? undefined : message.grayGlacierBlock;
        obj.merge_netsplit_block = message.mergeNetsplitBlock === "" ? undefined : message.mergeNetsplitBlock;
        obj.shanghai_block = message.shanghaiBlock === "" ? undefined : message.shanghaiBlock;
        obj.cancun_block = message.cancunBlock === "" ? undefined : message.cancunBlock;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ChainConfig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ChainConfig.decode(message.value);
    },
    toProto(message) {
        return exports.ChainConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.ChainConfig",
            value: exports.ChainConfig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ChainConfig.typeUrl, exports.ChainConfig);
function createBaseState() {
    return {
        key: "",
        value: ""
    };
}
exports.State = {
    typeUrl: "/ethermint.evm.v1.State",
    is(o) {
        return o && (o.$typeUrl === exports.State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
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
        const message = createBaseState();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseState();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value === "" ? undefined : message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.State.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.State.decode(message.value);
    },
    toProto(message) {
        return exports.State.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.State",
            value: exports.State.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.State.typeUrl, exports.State);
function createBaseTransactionLogs() {
    return {
        hash: "",
        logs: []
    };
}
exports.TransactionLogs = {
    typeUrl: "/ethermint.evm.v1.TransactionLogs",
    is(o) {
        return o && (o.$typeUrl === exports.TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || exports.Log.is(o.logs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || exports.Log.isAmino(o.logs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            exports.Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransactionLogs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(exports.Log.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTransactionLogs();
        message.hash = object.hash ?? "";
        message.logs = object.logs?.map(e => exports.Log.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransactionLogs();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        message.logs = object.logs?.map(e => exports.Log.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === "" ? undefined : message.hash;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.Log.toAmino(e) : undefined);
        }
        else {
            obj.logs = message.logs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TransactionLogs.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TransactionLogs.decode(message.value);
    },
    toProto(message) {
        return exports.TransactionLogs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TransactionLogs",
            value: exports.TransactionLogs.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TransactionLogs.typeUrl, exports.TransactionLogs);
function createBaseLog() {
    return {
        address: "",
        topics: [],
        data: new Uint8Array(),
        blockNumber: BigInt(0),
        txHash: "",
        txIndex: BigInt(0),
        blockHash: "",
        index: BigInt(0),
        removed: false
    };
}
exports.Log = {
    typeUrl: "/ethermint.evm.v1.Log",
    is(o) {
        return o && (o.$typeUrl === exports.Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.blockNumber === "bigint" && typeof o.txHash === "string" && typeof o.txIndex === "bigint" && typeof o.blockHash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.block_number === "bigint" && typeof o.tx_hash === "string" && typeof o.tx_index === "bigint" && typeof o.block_hash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.topics) {
            writer.uint32(18).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.blockNumber !== BigInt(0)) {
            writer.uint32(32).uint64(message.blockNumber);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (message.txIndex !== BigInt(0)) {
            writer.uint32(48).uint64(message.txIndex);
        }
        if (message.blockHash !== "") {
            writer.uint32(58).string(message.blockHash);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(64).uint64(message.index);
        }
        if (message.removed === true) {
            writer.uint32(72).bool(message.removed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.topics.push(reader.string());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.blockNumber = reader.uint64();
                    break;
                case 5:
                    message.txHash = reader.string();
                    break;
                case 6:
                    message.txIndex = reader.uint64();
                    break;
                case 7:
                    message.blockHash = reader.string();
                    break;
                case 8:
                    message.index = reader.uint64();
                    break;
                case 9:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLog();
        message.address = object.address ?? "";
        message.topics = object.topics?.map(e => e) || [];
        message.data = object.data ?? new Uint8Array();
        message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
        message.txHash = object.txHash ?? "";
        message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
        message.blockHash = object.blockHash ?? "";
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.removed = object.removed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLog();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.topics = object.topics?.map(e => e) || [];
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.block_number !== undefined && object.block_number !== null) {
            message.blockNumber = BigInt(object.block_number);
        }
        if (object.tx_hash !== undefined && object.tx_hash !== null) {
            message.txHash = object.tx_hash;
        }
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.txIndex = BigInt(object.tx_index);
        }
        if (object.block_hash !== undefined && object.block_hash !== null) {
            message.blockHash = object.block_hash;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = object.removed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.topics) {
            obj.topics = message.topics.map(e => e);
        }
        else {
            obj.topics = message.topics;
        }
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.block_number = message.blockNumber ? message.blockNumber?.toString() : "0";
        obj.tx_hash = message.txHash ?? "";
        obj.tx_index = message.txIndex ? message.txIndex?.toString() : "0";
        obj.block_hash = message.blockHash ?? "";
        obj.index = message.index ? message.index?.toString() : "0";
        obj.removed = message.removed === false ? undefined : message.removed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Log.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Log.decode(message.value);
    },
    toProto(message) {
        return exports.Log.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.Log",
            value: exports.Log.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Log.typeUrl, exports.Log);
function createBaseTxResult() {
    return {
        contractAddress: "",
        bloom: new Uint8Array(),
        txLogs: exports.TransactionLogs.fromPartial({}),
        ret: new Uint8Array(),
        reverted: false,
        gasUsed: BigInt(0)
    };
}
exports.TxResult = {
    typeUrl: "/ethermint.evm.v1.TxResult",
    is(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.contractAddress === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && exports.TransactionLogs.is(o.txLogs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gasUsed === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && exports.TransactionLogs.isAmino(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.bloom.length !== 0) {
            writer.uint32(18).bytes(message.bloom);
        }
        if (message.txLogs !== undefined) {
            exports.TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(34).bytes(message.ret);
        }
        if (message.reverted === true) {
            writer.uint32(40).bool(message.reverted);
        }
        if (message.gasUsed !== BigInt(0)) {
            writer.uint32(48).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.bloom = reader.bytes();
                    break;
                case 3:
                    message.txLogs = exports.TransactionLogs.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ret = reader.bytes();
                    break;
                case 5:
                    message.reverted = reader.bool();
                    break;
                case 6:
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
        const message = createBaseTxResult();
        message.contractAddress = object.contractAddress ?? "";
        message.bloom = object.bloom ?? new Uint8Array();
        message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? exports.TransactionLogs.fromPartial(object.txLogs) : undefined;
        message.ret = object.ret ?? new Uint8Array();
        message.reverted = object.reverted ?? false;
        message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResult();
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = (0, helpers_1.bytesFromBase64)(object.bloom);
        }
        if (object.tx_logs !== undefined && object.tx_logs !== null) {
            message.txLogs = exports.TransactionLogs.fromAmino(object.tx_logs);
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = (0, helpers_1.bytesFromBase64)(object.ret);
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = object.reverted;
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gasUsed = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
        obj.bloom = message.bloom ? (0, helpers_1.base64FromBytes)(message.bloom) : undefined;
        obj.tx_logs = message.txLogs ? exports.TransactionLogs.toAmino(message.txLogs) : exports.TransactionLogs.toAmino(exports.TransactionLogs.fromPartial({}));
        obj.ret = message.ret ? (0, helpers_1.base64FromBytes)(message.ret) : undefined;
        obj.reverted = message.reverted === false ? undefined : message.reverted;
        obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResult.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxResult.decode(message.value);
    },
    toProto(message) {
        return exports.TxResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TxResult",
            value: exports.TxResult.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxResult.typeUrl, exports.TxResult);
function createBaseAccessTuple() {
    return {
        address: "",
        storageKeys: []
    };
}
exports.AccessTuple = {
    typeUrl: "/ethermint.evm.v1.AccessTuple",
    is(o) {
        return o && (o.$typeUrl === exports.AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storageKeys) && (!o.storageKeys.length || typeof o.storageKeys[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.storageKeys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTuple();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.storageKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseAccessTuple();
        message.address = object.address ?? "";
        message.storageKeys = object.storageKeys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAccessTuple();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.storageKeys = object.storage_keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        if (message.storageKeys) {
            obj.storage_keys = message.storageKeys.map(e => e);
        }
        else {
            obj.storage_keys = message.storageKeys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccessTuple.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AccessTuple.decode(message.value);
    },
    toProto(message) {
        return exports.AccessTuple.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.AccessTuple",
            value: exports.AccessTuple.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.AccessTuple.typeUrl, exports.AccessTuple);
function createBaseTraceConfig() {
    return {
        tracer: "",
        timeout: "",
        reexec: BigInt(0),
        disableStack: false,
        disableStorage: false,
        debug: false,
        limit: 0,
        overrides: undefined,
        enableMemory: false,
        enableReturnData: false,
        tracerJsonConfig: ""
    };
}
exports.TraceConfig = {
    typeUrl: "/ethermint.evm.v1.TraceConfig",
    is(o) {
        return o && (o.$typeUrl === exports.TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disableStack === "boolean" && typeof o.disableStorage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enableMemory === "boolean" && typeof o.enableReturnData === "boolean" && typeof o.tracerJsonConfig === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disable_stack === "boolean" && typeof o.disable_storage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enable_memory === "boolean" && typeof o.enable_return_data === "boolean" && typeof o.tracer_json_config === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tracer !== "") {
            writer.uint32(10).string(message.tracer);
        }
        if (message.timeout !== "") {
            writer.uint32(18).string(message.timeout);
        }
        if (message.reexec !== BigInt(0)) {
            writer.uint32(24).uint64(message.reexec);
        }
        if (message.disableStack === true) {
            writer.uint32(40).bool(message.disableStack);
        }
        if (message.disableStorage === true) {
            writer.uint32(48).bool(message.disableStorage);
        }
        if (message.debug === true) {
            writer.uint32(64).bool(message.debug);
        }
        if (message.limit !== 0) {
            writer.uint32(72).int32(message.limit);
        }
        if (message.overrides !== undefined) {
            exports.ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
        }
        if (message.enableMemory === true) {
            writer.uint32(88).bool(message.enableMemory);
        }
        if (message.enableReturnData === true) {
            writer.uint32(96).bool(message.enableReturnData);
        }
        if (message.tracerJsonConfig !== "") {
            writer.uint32(106).string(message.tracerJsonConfig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTraceConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tracer = reader.string();
                    break;
                case 2:
                    message.timeout = reader.string();
                    break;
                case 3:
                    message.reexec = reader.uint64();
                    break;
                case 5:
                    message.disableStack = reader.bool();
                    break;
                case 6:
                    message.disableStorage = reader.bool();
                    break;
                case 8:
                    message.debug = reader.bool();
                    break;
                case 9:
                    message.limit = reader.int32();
                    break;
                case 10:
                    message.overrides = exports.ChainConfig.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.enableMemory = reader.bool();
                    break;
                case 12:
                    message.enableReturnData = reader.bool();
                    break;
                case 13:
                    message.tracerJsonConfig = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTraceConfig();
        message.tracer = object.tracer ?? "";
        message.timeout = object.timeout ?? "";
        message.reexec = object.reexec !== undefined && object.reexec !== null ? BigInt(object.reexec.toString()) : BigInt(0);
        message.disableStack = object.disableStack ?? false;
        message.disableStorage = object.disableStorage ?? false;
        message.debug = object.debug ?? false;
        message.limit = object.limit ?? 0;
        message.overrides = object.overrides !== undefined && object.overrides !== null ? exports.ChainConfig.fromPartial(object.overrides) : undefined;
        message.enableMemory = object.enableMemory ?? false;
        message.enableReturnData = object.enableReturnData ?? false;
        message.tracerJsonConfig = object.tracerJsonConfig ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTraceConfig();
        if (object.tracer !== undefined && object.tracer !== null) {
            message.tracer = object.tracer;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = object.timeout;
        }
        if (object.reexec !== undefined && object.reexec !== null) {
            message.reexec = BigInt(object.reexec);
        }
        if (object.disable_stack !== undefined && object.disable_stack !== null) {
            message.disableStack = object.disable_stack;
        }
        if (object.disable_storage !== undefined && object.disable_storage !== null) {
            message.disableStorage = object.disable_storage;
        }
        if (object.debug !== undefined && object.debug !== null) {
            message.debug = object.debug;
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = object.limit;
        }
        if (object.overrides !== undefined && object.overrides !== null) {
            message.overrides = exports.ChainConfig.fromAmino(object.overrides);
        }
        if (object.enable_memory !== undefined && object.enable_memory !== null) {
            message.enableMemory = object.enable_memory;
        }
        if (object.enable_return_data !== undefined && object.enable_return_data !== null) {
            message.enableReturnData = object.enable_return_data;
        }
        if (object.tracer_json_config !== undefined && object.tracer_json_config !== null) {
            message.tracerJsonConfig = object.tracer_json_config;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tracer = message.tracer === "" ? undefined : message.tracer;
        obj.timeout = message.timeout === "" ? undefined : message.timeout;
        obj.reexec = message.reexec !== BigInt(0) ? message.reexec?.toString() : undefined;
        obj.disable_stack = message.disableStack ?? false;
        obj.disable_storage = message.disableStorage ?? false;
        obj.debug = message.debug === false ? undefined : message.debug;
        obj.limit = message.limit === 0 ? undefined : message.limit;
        obj.overrides = message.overrides ? exports.ChainConfig.toAmino(message.overrides) : undefined;
        obj.enable_memory = message.enableMemory ?? false;
        obj.enable_return_data = message.enableReturnData ?? false;
        obj.tracer_json_config = message.tracerJsonConfig ?? "";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TraceConfig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TraceConfig.decode(message.value);
    },
    toProto(message) {
        return exports.TraceConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ethermint.evm.v1.TraceConfig",
            value: exports.TraceConfig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TraceConfig.typeUrl, exports.TraceConfig);
