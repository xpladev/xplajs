"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.LengthOpAmino = exports.LengthOp = exports.HashOpAmino = exports.HashOp = void 0;
exports.hashOpFromJSON = hashOpFromJSON;
exports.hashOpToJSON = hashOpToJSON;
exports.lengthOpFromJSON = lengthOpFromJSON;
exports.lengthOpToJSON = lengthOpToJSON;
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK256"] = 3] = "KECCAK256";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["SHA512_256"] = 6] = "SHA512_256";
    HashOp[HashOp["BLAKE2B_512"] = 7] = "BLAKE2B_512";
    HashOp[HashOp["BLAKE2S_256"] = 8] = "BLAKE2S_256";
    HashOp[HashOp["BLAKE3"] = 9] = "BLAKE3";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (exports.HashOp = HashOp = {}));
exports.HashOpAmino = HashOp;
function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK256":
            return HashOp.KECCAK256;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case 6:
        case "SHA512_256":
            return HashOp.SHA512_256;
        case 7:
        case "BLAKE2B_512":
            return HashOp.BLAKE2B_512;
        case 8:
        case "BLAKE2S_256":
            return HashOp.BLAKE2S_256;
        case 9:
        case "BLAKE3":
            return HashOp.BLAKE3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK256:
            return "KECCAK256";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        case HashOp.SHA512_256:
            return "SHA512_256";
        case HashOp.BLAKE2B_512:
            return "BLAKE2B_512";
        case HashOp.BLAKE2S_256:
            return "BLAKE2S_256";
        case HashOp.BLAKE3:
            return "BLAKE3";
        case HashOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (exports.LengthOp = LengthOp = {}));
exports.LengthOpAmino = LengthOp;
function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        case LengthOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: []
    };
}
exports.ExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.ExistenceProof",
    aminoType: "cosmos-sdk/ExistenceProof",
    is(o) {
        return o && (o.$typeUrl === exports.ExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || exports.InnerOp.is(o.path[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || exports.InnerOp.isAmino(o.path[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExistenceProof();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = exports.LeafOp.fromAmino(object.leaf);
        }
        message.path = object.path?.map(e => exports.InnerOp.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.path = message.path;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ExistenceProof",
            value: exports.ExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.ExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.ExistenceProof",
            value: exports.ExistenceProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExistenceProof.typeUrl, exports.ExistenceProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ExistenceProof.aminoType, exports.ExistenceProof.typeUrl);
function createBaseNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: undefined,
        right: undefined
    };
}
exports.NonExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
    aminoType: "cosmos-sdk/NonExistenceProof",
    is(o) {
        return o && (o.$typeUrl === exports.NonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.NonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.ExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.ExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseNonExistenceProof();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = exports.ExistenceProof.fromAmino(object.left);
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = exports.ExistenceProof.fromAmino(object.right);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.left = message.left ? exports.ExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.ExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NonExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NonExistenceProof",
            value: exports.NonExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.NonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.NonExistenceProof",
            value: exports.NonExistenceProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.NonExistenceProof.typeUrl, exports.NonExistenceProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.NonExistenceProof.aminoType, exports.NonExistenceProof.typeUrl);
function createBaseCommitmentProof() {
    return {
        exist: undefined,
        nonexist: undefined,
        batch: undefined,
        compressed: undefined
    };
}
exports.CommitmentProof = {
    typeUrl: "/cosmos.ics23.v1.CommitmentProof",
    aminoType: "cosmos-sdk/CommitmentProof",
    is(o) {
        return o && o.$typeUrl === exports.CommitmentProof.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.CommitmentProof.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = exports.BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? exports.BatchProof.fromPartial(object.batch) : undefined;
        message.compressed = object.compressed !== undefined && object.compressed !== null ? exports.CompressedBatchProof.fromPartial(object.compressed) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitmentProof();
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = exports.ExistenceProof.fromAmino(object.exist);
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = exports.NonExistenceProof.fromAmino(object.nonexist);
        }
        if (object.batch !== undefined && object.batch !== null) {
            message.batch = exports.BatchProof.fromAmino(object.batch);
        }
        if (object.compressed !== undefined && object.compressed !== null) {
            message.compressed = exports.CompressedBatchProof.fromAmino(object.compressed);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        obj.batch = message.batch ? exports.BatchProof.toAmino(message.batch) : undefined;
        obj.compressed = message.compressed ? exports.CompressedBatchProof.toAmino(message.compressed) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitmentProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitmentProof",
            value: exports.CommitmentProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitmentProof.decode(message.value);
    },
    toProto(message) {
        return exports.CommitmentProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CommitmentProof",
            value: exports.CommitmentProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommitmentProof.typeUrl, exports.CommitmentProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommitmentProof.aminoType, exports.CommitmentProof.typeUrl);
function createBaseLeafOp() {
    return {
        hash: 0,
        prehashKey: 0,
        prehashValue: 0,
        length: 0,
        prefix: new Uint8Array()
    };
}
exports.LeafOp = {
    typeUrl: "/cosmos.ics23.v1.LeafOp",
    aminoType: "cosmos-sdk/LeafOp",
    is(o) {
        return o && (o.$typeUrl === exports.LeafOp.typeUrl || (0, helpers_1.isSet)(o.hash) && (0, helpers_1.isSet)(o.prehashKey) && (0, helpers_1.isSet)(o.prehashValue) && (0, helpers_1.isSet)(o.length) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LeafOp.typeUrl || (0, helpers_1.isSet)(o.hash) && (0, helpers_1.isSet)(o.prehash_key) && (0, helpers_1.isSet)(o.prehash_value) && (0, helpers_1.isSet)(o.length) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehashKey !== 0) {
            writer.uint32(16).int32(message.prehashKey);
        }
        if (message.prehashValue !== 0) {
            writer.uint32(24).int32(message.prehashValue);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prehashKey = reader.int32();
                    break;
                case 3:
                    message.prehashValue = reader.int32();
                    break;
                case 4:
                    message.length = reader.int32();
                    break;
                case 5:
                    message.prefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLeafOp();
        message.hash = object.hash ?? 0;
        message.prehashKey = object.prehashKey ?? 0;
        message.prehashValue = object.prehashValue ?? 0;
        message.length = object.length ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseLeafOp();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.prehash_key !== undefined && object.prehash_key !== null) {
            message.prehashKey = object.prehash_key;
        }
        if (object.prehash_value !== undefined && object.prehash_value !== null) {
            message.prehashValue = object.prehash_value;
        }
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = (0, helpers_1.bytesFromBase64)(object.prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === 0 ? undefined : message.hash;
        obj.prehash_key = message.prehashKey === 0 ? undefined : message.prehashKey;
        obj.prehash_value = message.prehashValue === 0 ? undefined : message.prehashValue;
        obj.length = message.length === 0 ? undefined : message.length;
        obj.prefix = message.prefix ? (0, helpers_1.base64FromBytes)(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LeafOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LeafOp",
            value: exports.LeafOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LeafOp.decode(message.value);
    },
    toProto(message) {
        return exports.LeafOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.LeafOp",
            value: exports.LeafOp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LeafOp.typeUrl, exports.LeafOp);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LeafOp.aminoType, exports.LeafOp.typeUrl);
function createBaseInnerOp() {
    return {
        hash: 0,
        prefix: new Uint8Array(),
        suffix: new Uint8Array()
    };
}
exports.InnerOp = {
    typeUrl: "/cosmos.ics23.v1.InnerOp",
    aminoType: "cosmos-sdk/InnerOp",
    is(o) {
        return o && (o.$typeUrl === exports.InnerOp.typeUrl || (0, helpers_1.isSet)(o.hash) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string") && (o.suffix instanceof Uint8Array || typeof o.suffix === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InnerOp.typeUrl || (0, helpers_1.isSet)(o.hash) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string") && (o.suffix instanceof Uint8Array || typeof o.suffix === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                case 3:
                    message.suffix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInnerOp();
        message.hash = object.hash ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        message.suffix = object.suffix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseInnerOp();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = (0, helpers_1.bytesFromBase64)(object.prefix);
        }
        if (object.suffix !== undefined && object.suffix !== null) {
            message.suffix = (0, helpers_1.bytesFromBase64)(object.suffix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash === 0 ? undefined : message.hash;
        obj.prefix = message.prefix ? (0, helpers_1.base64FromBytes)(message.prefix) : undefined;
        obj.suffix = message.suffix ? (0, helpers_1.base64FromBytes)(message.suffix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerOp.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InnerOp",
            value: exports.InnerOp.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InnerOp.decode(message.value);
    },
    toProto(message) {
        return exports.InnerOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.InnerOp",
            value: exports.InnerOp.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InnerOp.typeUrl, exports.InnerOp);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InnerOp.aminoType, exports.InnerOp.typeUrl);
function createBaseProofSpec() {
    return {
        leafSpec: undefined,
        innerSpec: undefined,
        maxDepth: 0,
        minDepth: 0,
        prehashKeyBeforeComparison: false
    };
}
exports.ProofSpec = {
    typeUrl: "/cosmos.ics23.v1.ProofSpec",
    aminoType: "cosmos-sdk/ProofSpec",
    is(o) {
        return o && (o.$typeUrl === exports.ProofSpec.typeUrl || typeof o.maxDepth === "number" && typeof o.minDepth === "number" && typeof o.prehashKeyBeforeComparison === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ProofSpec.typeUrl || typeof o.max_depth === "number" && typeof o.min_depth === "number" && typeof o.prehash_key_before_comparison === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.leafSpec !== undefined) {
            exports.LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerSpec !== undefined) {
            exports.InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxDepth !== 0) {
            writer.uint32(24).int32(message.maxDepth);
        }
        if (message.minDepth !== 0) {
            writer.uint32(32).int32(message.minDepth);
        }
        if (message.prehashKeyBeforeComparison === true) {
            writer.uint32(40).bool(message.prehashKeyBeforeComparison);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leafSpec = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.innerSpec = exports.InnerSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxDepth = reader.int32();
                    break;
                case 4:
                    message.minDepth = reader.int32();
                    break;
                case 5:
                    message.prehashKeyBeforeComparison = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofSpec();
        message.leafSpec = object.leafSpec !== undefined && object.leafSpec !== null ? exports.LeafOp.fromPartial(object.leafSpec) : undefined;
        message.innerSpec = object.innerSpec !== undefined && object.innerSpec !== null ? exports.InnerSpec.fromPartial(object.innerSpec) : undefined;
        message.maxDepth = object.maxDepth ?? 0;
        message.minDepth = object.minDepth ?? 0;
        message.prehashKeyBeforeComparison = object.prehashKeyBeforeComparison ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProofSpec();
        if (object.leaf_spec !== undefined && object.leaf_spec !== null) {
            message.leafSpec = exports.LeafOp.fromAmino(object.leaf_spec);
        }
        if (object.inner_spec !== undefined && object.inner_spec !== null) {
            message.innerSpec = exports.InnerSpec.fromAmino(object.inner_spec);
        }
        if (object.max_depth !== undefined && object.max_depth !== null) {
            message.maxDepth = object.max_depth;
        }
        if (object.min_depth !== undefined && object.min_depth !== null) {
            message.minDepth = object.min_depth;
        }
        if (object.prehash_key_before_comparison !== undefined && object.prehash_key_before_comparison !== null) {
            message.prehashKeyBeforeComparison = object.prehash_key_before_comparison;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.leaf_spec = message.leafSpec ? exports.LeafOp.toAmino(message.leafSpec) : undefined;
        obj.inner_spec = message.innerSpec ? exports.InnerSpec.toAmino(message.innerSpec) : undefined;
        obj.max_depth = message.maxDepth === 0 ? undefined : message.maxDepth;
        obj.min_depth = message.minDepth === 0 ? undefined : message.minDepth;
        obj.prehash_key_before_comparison = message.prehashKeyBeforeComparison === false ? undefined : message.prehashKeyBeforeComparison;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofSpec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ProofSpec",
            value: exports.ProofSpec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ProofSpec.decode(message.value);
    },
    toProto(message) {
        return exports.ProofSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.ProofSpec",
            value: exports.ProofSpec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ProofSpec.typeUrl, exports.ProofSpec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ProofSpec.aminoType, exports.ProofSpec.typeUrl);
function createBaseInnerSpec() {
    return {
        childOrder: [],
        childSize: 0,
        minPrefixLength: 0,
        maxPrefixLength: 0,
        emptyChild: new Uint8Array(),
        hash: 0
    };
}
exports.InnerSpec = {
    typeUrl: "/cosmos.ics23.v1.InnerSpec",
    aminoType: "cosmos-sdk/InnerSpec",
    is(o) {
        return o && (o.$typeUrl === exports.InnerSpec.typeUrl || Array.isArray(o.childOrder) && (!o.childOrder.length || typeof o.childOrder[0] === "number") && typeof o.childSize === "number" && typeof o.minPrefixLength === "number" && typeof o.maxPrefixLength === "number" && (o.emptyChild instanceof Uint8Array || typeof o.emptyChild === "string") && (0, helpers_1.isSet)(o.hash));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InnerSpec.typeUrl || Array.isArray(o.child_order) && (!o.child_order.length || typeof o.child_order[0] === "number") && typeof o.child_size === "number" && typeof o.min_prefix_length === "number" && typeof o.max_prefix_length === "number" && (o.empty_child instanceof Uint8Array || typeof o.empty_child === "string") && (0, helpers_1.isSet)(o.hash));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.childOrder) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.childSize !== 0) {
            writer.uint32(16).int32(message.childSize);
        }
        if (message.minPrefixLength !== 0) {
            writer.uint32(24).int32(message.minPrefixLength);
        }
        if (message.maxPrefixLength !== 0) {
            writer.uint32(32).int32(message.maxPrefixLength);
        }
        if (message.emptyChild.length !== 0) {
            writer.uint32(42).bytes(message.emptyChild);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childOrder.push(reader.int32());
                        }
                    }
                    else {
                        message.childOrder.push(reader.int32());
                    }
                    break;
                case 2:
                    message.childSize = reader.int32();
                    break;
                case 3:
                    message.minPrefixLength = reader.int32();
                    break;
                case 4:
                    message.maxPrefixLength = reader.int32();
                    break;
                case 5:
                    message.emptyChild = reader.bytes();
                    break;
                case 6:
                    message.hash = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInnerSpec();
        message.childOrder = object.childOrder?.map(e => e) || [];
        message.childSize = object.childSize ?? 0;
        message.minPrefixLength = object.minPrefixLength ?? 0;
        message.maxPrefixLength = object.maxPrefixLength ?? 0;
        message.emptyChild = object.emptyChild ?? new Uint8Array();
        message.hash = object.hash ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseInnerSpec();
        message.childOrder = object.child_order?.map(e => e) || [];
        if (object.child_size !== undefined && object.child_size !== null) {
            message.childSize = object.child_size;
        }
        if (object.min_prefix_length !== undefined && object.min_prefix_length !== null) {
            message.minPrefixLength = object.min_prefix_length;
        }
        if (object.max_prefix_length !== undefined && object.max_prefix_length !== null) {
            message.maxPrefixLength = object.max_prefix_length;
        }
        if (object.empty_child !== undefined && object.empty_child !== null) {
            message.emptyChild = (0, helpers_1.bytesFromBase64)(object.empty_child);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.childOrder) {
            obj.child_order = message.childOrder.map(e => e);
        }
        else {
            obj.child_order = message.childOrder;
        }
        obj.child_size = message.childSize === 0 ? undefined : message.childSize;
        obj.min_prefix_length = message.minPrefixLength === 0 ? undefined : message.minPrefixLength;
        obj.max_prefix_length = message.maxPrefixLength === 0 ? undefined : message.maxPrefixLength;
        obj.empty_child = message.emptyChild ? (0, helpers_1.base64FromBytes)(message.emptyChild) : undefined;
        obj.hash = message.hash === 0 ? undefined : message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerSpec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InnerSpec",
            value: exports.InnerSpec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InnerSpec.decode(message.value);
    },
    toProto(message) {
        return exports.InnerSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.InnerSpec",
            value: exports.InnerSpec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InnerSpec.typeUrl, exports.InnerSpec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InnerSpec.aminoType, exports.InnerSpec.typeUrl);
function createBaseBatchProof() {
    return {
        entries: []
    };
}
exports.BatchProof = {
    typeUrl: "/cosmos.ics23.v1.BatchProof",
    aminoType: "cosmos-sdk/BatchProof",
    is(o) {
        return o && (o.$typeUrl === exports.BatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || exports.BatchEntry.is(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || exports.BatchEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchProof();
        message.entries = object.entries?.map(e => exports.BatchEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchProof();
        message.entries = object.entries?.map(e => exports.BatchEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.BatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BatchProof",
            value: exports.BatchProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.BatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.BatchProof",
            value: exports.BatchProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BatchProof.typeUrl, exports.BatchProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BatchProof.aminoType, exports.BatchProof.typeUrl);
function createBaseBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.BatchEntry = {
    typeUrl: "/cosmos.ics23.v1.BatchEntry",
    aminoType: "cosmos-sdk/BatchEntry",
    is(o) {
        return o && o.$typeUrl === exports.BatchEntry.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.BatchEntry.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchEntry();
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = exports.ExistenceProof.fromAmino(object.exist);
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = exports.NonExistenceProof.fromAmino(object.nonexist);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BatchEntry",
            value: exports.BatchEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.BatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.BatchEntry",
            value: exports.BatchEntry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BatchEntry.typeUrl, exports.BatchEntry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BatchEntry.aminoType, exports.BatchEntry.typeUrl);
function createBaseCompressedBatchProof() {
    return {
        entries: [],
        lookupInners: []
    };
}
exports.CompressedBatchProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
    aminoType: "cosmos-sdk/CompressedBatchProof",
    is(o) {
        return o && (o.$typeUrl === exports.CompressedBatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || exports.CompressedBatchEntry.is(o.entries[0])) && Array.isArray(o.lookupInners) && (!o.lookupInners.length || exports.InnerOp.is(o.lookupInners[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CompressedBatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || exports.CompressedBatchEntry.isAmino(o.entries[0])) && Array.isArray(o.lookup_inners) && (!o.lookup_inners.length || exports.InnerOp.isAmino(o.lookup_inners[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.entries) {
            exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookupInners) {
            exports.InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookupInners.push(exports.InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchProof();
        message.entries = object.entries?.map(e => exports.CompressedBatchEntry.fromPartial(e)) || [];
        message.lookupInners = object.lookupInners?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompressedBatchProof();
        message.entries = object.entries?.map(e => exports.CompressedBatchEntry.fromAmino(e)) || [];
        message.lookupInners = object.lookup_inners?.map(e => exports.InnerOp.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.CompressedBatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = message.entries;
        }
        if (message.lookupInners) {
            obj.lookup_inners = message.lookupInners.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.lookup_inners = message.lookupInners;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedBatchProof",
            value: exports.CompressedBatchProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedBatchProof",
            value: exports.CompressedBatchProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CompressedBatchProof.typeUrl, exports.CompressedBatchProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CompressedBatchProof.aminoType, exports.CompressedBatchProof.typeUrl);
function createBaseCompressedBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.CompressedBatchEntry = {
    typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
    aminoType: "cosmos-sdk/CompressedBatchEntry",
    is(o) {
        return o && o.$typeUrl === exports.CompressedBatchEntry.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.CompressedBatchEntry.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.exist !== undefined) {
            exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.CompressedExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompressedBatchEntry();
        if (object.exist !== undefined && object.exist !== null) {
            message.exist = exports.CompressedExistenceProof.fromAmino(object.exist);
        }
        if (object.nonexist !== undefined && object.nonexist !== null) {
            message.nonexist = exports.CompressedNonExistenceProof.fromAmino(object.nonexist);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.CompressedExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedBatchEntry",
            value: exports.CompressedBatchEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedBatchEntry",
            value: exports.CompressedBatchEntry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CompressedBatchEntry.typeUrl, exports.CompressedBatchEntry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CompressedBatchEntry.aminoType, exports.CompressedBatchEntry.typeUrl);
function createBaseCompressedExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: []
    };
}
exports.CompressedExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
    aminoType: "cosmos-sdk/CompressedExistenceProof",
    is(o) {
        return o && (o.$typeUrl === exports.CompressedExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CompressedExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompressedExistenceProof();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = (0, helpers_1.bytesFromBase64)(object.value);
        }
        if (object.leaf !== undefined && object.leaf !== null) {
            message.leaf = exports.LeafOp.fromAmino(object.leaf);
        }
        message.path = object.path?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.value = message.value ? (0, helpers_1.base64FromBytes)(message.value) : undefined;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = message.path;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedExistenceProof",
            value: exports.CompressedExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedExistenceProof",
            value: exports.CompressedExistenceProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CompressedExistenceProof.typeUrl, exports.CompressedExistenceProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CompressedExistenceProof.aminoType, exports.CompressedExistenceProof.typeUrl);
function createBaseCompressedNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: undefined,
        right: undefined
    };
}
exports.CompressedNonExistenceProof = {
    typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
    aminoType: "cosmos-sdk/CompressedNonExistenceProof",
    is(o) {
        return o && (o.$typeUrl === exports.CompressedNonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CompressedNonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.CompressedExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.CompressedExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCompressedNonExistenceProof();
        if (object.key !== undefined && object.key !== null) {
            message.key = (0, helpers_1.bytesFromBase64)(object.key);
        }
        if (object.left !== undefined && object.left !== null) {
            message.left = exports.CompressedExistenceProof.fromAmino(object.left);
        }
        if (object.right !== undefined && object.right !== null) {
            message.right = exports.CompressedExistenceProof.fromAmino(object.right);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? (0, helpers_1.base64FromBytes)(message.key) : undefined;
        obj.left = message.left ? exports.CompressedExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.CompressedExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedNonExistenceProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompressedNonExistenceProof",
            value: exports.CompressedNonExistenceProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompressedNonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedNonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.ics23.v1.CompressedNonExistenceProof",
            value: exports.CompressedNonExistenceProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CompressedNonExistenceProof.typeUrl, exports.CompressedNonExistenceProof);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CompressedNonExistenceProof.aminoType, exports.CompressedNonExistenceProof.typeUrl);
