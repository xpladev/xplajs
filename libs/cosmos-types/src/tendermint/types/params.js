"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABCIParams = exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = void 0;
var duration_1 = require("../../google/protobuf/duration");
var binary_1 = require("../../binary");
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined,
        abci: undefined
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        if (message.abci !== undefined) {
            exports.ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseConsensusParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.abci = exports.ABCIParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        message.abci = object.abci !== undefined && object.abci !== null ? exports.ABCIParams.fromPartial(object.abci) : undefined;
        return message;
    }
};
function createBaseBlockParams() {
    return {
        maxBytes: BigInt(0),
        maxGas: BigInt(0)
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.maxBytes);
        }
        if (message.maxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.maxGas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBlockParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBytes = reader.int64();
                    break;
                case 2:
                    message.maxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseBlockParams();
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
        return message;
    }
};
function createBaseEvidenceParams() {
    return {
        maxAgeNumBlocks: BigInt(0),
        maxAgeDuration: duration_1.Duration.fromPartial({}),
        maxBytes: BigInt(0)
    };
}
exports.EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.maxAgeNumBlocks !== BigInt(0)) {
            writer.uint32(8).int64(message.maxAgeNumBlocks);
        }
        if (message.maxAgeDuration !== undefined) {
            duration_1.Duration.encode(message.maxAgeDuration, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxBytes !== BigInt(0)) {
            writer.uint32(24).int64(message.maxBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEvidenceParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxAgeNumBlocks = reader.int64();
                    break;
                case 2:
                    message.maxAgeDuration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxBytes = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseEvidenceParams();
        message.maxAgeNumBlocks = object.maxAgeNumBlocks !== undefined && object.maxAgeNumBlocks !== null ? BigInt(object.maxAgeNumBlocks.toString()) : BigInt(0);
        message.maxAgeDuration = object.maxAgeDuration !== undefined && object.maxAgeDuration !== null ? duration_1.Duration.fromPartial(object.maxAgeDuration) : undefined;
        message.maxBytes = object.maxBytes !== undefined && object.maxBytes !== null ? BigInt(object.maxBytes.toString()) : BigInt(0);
        return message;
    }
};
function createBaseValidatorParams() {
    return {
        pubKeyTypes: []
    };
}
exports.ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.pubKeyTypes; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeyTypes.push(reader.string());
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
        var message = createBaseValidatorParams();
        message.pubKeyTypes = ((_a = object.pubKeyTypes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseVersionParams() {
    return {
        app: BigInt(0)
    };
}
exports.VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.app !== BigInt(0)) {
            writer.uint32(8).uint64(message.app);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVersionParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseVersionParams();
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    }
};
function createBaseHashedParams() {
    return {
        blockMaxBytes: BigInt(0),
        blockMaxGas: BigInt(0)
    };
}
exports.HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.blockMaxBytes !== BigInt(0)) {
            writer.uint32(8).int64(message.blockMaxBytes);
        }
        if (message.blockMaxGas !== BigInt(0)) {
            writer.uint32(16).int64(message.blockMaxGas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseHashedParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockMaxBytes = reader.int64();
                    break;
                case 2:
                    message.blockMaxGas = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseHashedParams();
        message.blockMaxBytes = object.blockMaxBytes !== undefined && object.blockMaxBytes !== null ? BigInt(object.blockMaxBytes.toString()) : BigInt(0);
        message.blockMaxGas = object.blockMaxGas !== undefined && object.blockMaxGas !== null ? BigInt(object.blockMaxGas.toString()) : BigInt(0);
        return message;
    }
};
function createBaseABCIParams() {
    return {
        voteExtensionsEnableHeight: BigInt(0)
    };
}
exports.ABCIParams = {
    typeUrl: "/tendermint.types.ABCIParams",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.voteExtensionsEnableHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.voteExtensionsEnableHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseABCIParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteExtensionsEnableHeight = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseABCIParams();
        message.voteExtensionsEnableHeight = object.voteExtensionsEnableHeight !== undefined && object.voteExtensionsEnableHeight !== null ? BigInt(object.voteExtensionsEnableHeight.toString()) : BigInt(0);
        return message;
    }
};
