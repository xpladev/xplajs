"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.BlockIDFlag = void 0;
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
exports.blockIDFlagToJSON = blockIDFlagToJSON;
var keys_1 = require("../crypto/keys");
var binary_1 = require("../../binary");
/** BlockIdFlag indicates which BlockID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    /** BLOCK_ID_FLAG_NIL - voted for nil */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: undefined,
        totalVotingPower: BigInt(0)
    };
}
exports.ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.validators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.totalVotingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = reader.int64();
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
        var message = createBaseValidatorSet();
        message.validators = ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Validator.fromPartial(e); })) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? exports.Validator.fromPartial(object.proposer) : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? BigInt(object.totalVotingPower.toString()) : BigInt(0);
        return message;
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pubKey: keys_1.PublicKey.fromPartial({}),
        votingPower: BigInt(0),
        proposerPriority: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.types.Validator",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(24).int64(message.votingPower);
        }
        if (message.proposerPriority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposerPriority);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.votingPower = reader.int64();
                    break;
                case 4:
                    message.proposerPriority = reader.int64();
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
        var message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
        return message;
    }
};
function createBaseSimpleValidator() {
    return {
        pubKey: undefined,
        votingPower: BigInt(0)
    };
}
exports.SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.pubKey !== undefined) {
            keys_1.PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.votingPower !== BigInt(0)) {
            writer.uint32(16).int64(message.votingPower);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimpleValidator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKey = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.votingPower = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSimpleValidator();
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? keys_1.PublicKey.fromPartial(object.pubKey) : undefined;
        message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
        return message;
    }
};
