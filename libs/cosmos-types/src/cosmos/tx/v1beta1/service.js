"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxDecodeAminoResponse = exports.TxDecodeAminoRequest = exports.TxEncodeAminoResponse = exports.TxEncodeAminoRequest = exports.TxEncodeResponse = exports.TxEncodeRequest = exports.TxDecodeResponse = exports.TxDecodeRequest = exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.BroadcastMode = exports.OrderBy = void 0;
exports.orderByFromJSON = orderByFromJSON;
exports.orderByToJSON = orderByToJSON;
exports.broadcastModeFromJSON = broadcastModeFromJSON;
exports.broadcastModeToJSON = broadcastModeToJSON;
var tx_1 = require("./tx");
var pagination_1 = require("../../base/query/v1beta1/pagination");
var abci_1 = require("../../base/abci/v1beta1/abci");
var types_1 = require("../../../tendermint/types/types");
var block_1 = require("../../../tendermint/types/block");
var binary_1 = require("../../../binary");
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /**
     * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
     * to ASC in this case.
     */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (exports.OrderBy = OrderBy = {}));
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
     * for a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
     * returns immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (exports.BroadcastMode = BroadcastMode = {}));
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetTxsEventRequest() {
    return {
        events: [],
        pagination: undefined,
        orderBy: 0,
        page: BigInt(0),
        limit: BigInt(0),
        query: ""
    };
}
exports.GetTxsEventRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
    aminoType: "cosmos-sdk/GetTxsEventRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.events; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.orderBy !== 0) {
            writer.uint32(24).int32(message.orderBy);
        }
        if (message.page !== BigInt(0)) {
            writer.uint32(32).uint64(message.page);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        if (message.query !== "") {
            writer.uint32(50).string(message.query);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderBy = reader.int32();
                    break;
                case 4:
                    message.page = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.query = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetTxsEventRequest();
        message.events = ((_a = object.events) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.orderBy = (_b = object.orderBy) !== null && _b !== void 0 ? _b : 0;
        message.page = object.page !== undefined && object.page !== null ? BigInt(object.page.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.query = (_c = object.query) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseGetTxsEventResponse() {
    return {
        txs: [],
        txResponses: [],
        pagination: undefined,
        total: BigInt(0)
    };
}
exports.GetTxsEventResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
    aminoType: "cosmos-sdk/GetTxsEventResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (var _b = 0, _c = message.txResponses; _b < _c.length; _b++) {
            var v = _c[_b];
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.txResponses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetTxsEventResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return tx_1.Tx.fromPartial(e); })) || [];
        message.txResponses = ((_b = object.txResponses) === null || _b === void 0 ? void 0 : _b.map(function (e) { return abci_1.TxResponse.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    }
};
function createBaseBroadcastTxRequest() {
    return {
        txBytes: new Uint8Array(),
        mode: 0
    };
}
exports.BroadcastTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
    aminoType: "cosmos-sdk/BroadcastTxRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txBytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseBroadcastTxRequest();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.mode = (_b = object.mode) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseBroadcastTxResponse() {
    return {
        txResponse: undefined
    };
}
exports.BroadcastTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
    aminoType: "cosmos-sdk/BroadcastTxResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseBroadcastTxResponse();
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? abci_1.TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    }
};
function createBaseSimulateRequest() {
    return {
        tx: undefined,
        txBytes: new Uint8Array()
    };
}
exports.SimulateRequest = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
    aminoType: "cosmos-sdk/SimulateRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(18).bytes(message.txBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txBytes = reader.bytes();
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
        var message = createBaseSimulateRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseSimulateResponse() {
    return {
        gasInfo: undefined,
        result: undefined
    };
}
exports.SimulateResponse = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
    aminoType: "cosmos-sdk/SimulateResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.gasInfo !== undefined) {
            abci_1.GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimulateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = abci_1.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseSimulateResponse();
        message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? abci_1.GasInfo.fromPartial(object.gasInfo) : undefined;
        message.result = object.result !== undefined && object.result !== null ? abci_1.Result.fromPartial(object.result) : undefined;
        return message;
    }
};
function createBaseGetTxRequest() {
    return {
        hash: ""
    };
}
exports.GetTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
    aminoType: "cosmos-sdk/GetTxRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
        var message = createBaseGetTxRequest();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseGetTxResponse() {
    return {
        tx: undefined,
        txResponse: undefined
    };
}
exports.GetTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
    aminoType: "cosmos-sdk/GetTxResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            abci_1.TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTxResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txResponse = abci_1.TxResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseGetTxResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? abci_1.TxResponse.fromPartial(object.txResponse) : undefined;
        return message;
    }
};
function createBaseGetBlockWithTxsRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
exports.GetBlockWithTxsRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
    aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
    fromPartial: function (object) {
        var message = createBaseGetBlockWithTxsRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseGetBlockWithTxsResponse() {
    return {
        txs: [],
        blockId: undefined,
        block: undefined,
        pagination: undefined
    };
}
exports.GetBlockWithTxsResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
    aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.txs; _i < _a.length; _i++) {
            var v = _a[_i];
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockId !== undefined) {
            types_1.BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.blockId = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        var message = createBaseGetBlockWithTxsResponse();
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map(function (e) { return tx_1.Tx.fromPartial(e); })) || [];
        message.blockId = object.blockId !== undefined && object.blockId !== null ? types_1.BlockID.fromPartial(object.blockId) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseTxDecodeRequest() {
    return {
        txBytes: new Uint8Array()
    };
}
exports.TxDecodeRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
    aminoType: "cosmos-sdk/TxDecodeRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDecodeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txBytes = reader.bytes();
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
        var message = createBaseTxDecodeRequest();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseTxDecodeResponse() {
    return {
        tx: undefined
    };
}
exports.TxDecodeResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
    aminoType: "cosmos-sdk/TxDecodeResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDecodeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseTxDecodeResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        return message;
    }
};
function createBaseTxEncodeRequest() {
    return {
        tx: undefined
    };
}
exports.TxEncodeRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
    aminoType: "cosmos-sdk/TxEncodeRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxEncodeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseTxEncodeRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        return message;
    }
};
function createBaseTxEncodeResponse() {
    return {
        txBytes: new Uint8Array()
    };
}
exports.TxEncodeResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
    aminoType: "cosmos-sdk/TxEncodeResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.txBytes.length !== 0) {
            writer.uint32(10).bytes(message.txBytes);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxEncodeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txBytes = reader.bytes();
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
        var message = createBaseTxEncodeResponse();
        message.txBytes = (_a = object.txBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseTxEncodeAminoRequest() {
    return {
        aminoJson: ""
    };
}
exports.TxEncodeAminoRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
    aminoType: "cosmos-sdk/TxEncodeAminoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxEncodeAminoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aminoJson = reader.string();
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
        var message = createBaseTxEncodeAminoRequest();
        message.aminoJson = (_a = object.aminoJson) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseTxEncodeAminoResponse() {
    return {
        aminoBinary: new Uint8Array()
    };
}
exports.TxEncodeAminoResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
    aminoType: "cosmos-sdk/TxEncodeAminoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxEncodeAminoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aminoBinary = reader.bytes();
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
        var message = createBaseTxEncodeAminoResponse();
        message.aminoBinary = (_a = object.aminoBinary) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseTxDecodeAminoRequest() {
    return {
        aminoBinary: new Uint8Array()
    };
}
exports.TxDecodeAminoRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
    aminoType: "cosmos-sdk/TxDecodeAminoRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.aminoBinary.length !== 0) {
            writer.uint32(10).bytes(message.aminoBinary);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDecodeAminoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aminoBinary = reader.bytes();
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
        var message = createBaseTxDecodeAminoRequest();
        message.aminoBinary = (_a = object.aminoBinary) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseTxDecodeAminoResponse() {
    return {
        aminoJson: ""
    };
}
exports.TxDecodeAminoResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
    aminoType: "cosmos-sdk/TxDecodeAminoResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.aminoJson !== "") {
            writer.uint32(10).string(message.aminoJson);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTxDecodeAminoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.aminoJson = reader.string();
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
        var message = createBaseTxDecodeAminoResponse();
        message.aminoJson = (_a = object.aminoJson) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
