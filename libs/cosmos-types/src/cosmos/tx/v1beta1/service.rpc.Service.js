"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.ServiceClientImpl = void 0;
var binary_1 = require("../../../binary");
var service_1 = require("./service");
var ServiceClientImpl = /** @class */ (function () {
    function ServiceClientImpl(rpc) {
        var _this = this;
        /* Simulate simulates executing a transaction for estimating gas usage. */
        this.simulate = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.SimulateRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.SimulateResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* GetTx fetches a tx by hash. */
        this.getTx = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.GetTxRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.GetTxResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* BroadcastTx broadcast transaction. */
        this.broadcastTx = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.BroadcastTxRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.BroadcastTxResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* GetTxsEvent fetches txs by event. */
        this.getTxsEvent = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.GetTxsEventRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.GetTxsEventResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* GetBlockWithTxs fetches a block with decoded txs.
        
         Since: cosmos-sdk 0.45.2 */
        this.getBlockWithTxs = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.GetBlockWithTxsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.GetBlockWithTxsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TxDecode decodes the transaction.
        
         Since: cosmos-sdk 0.47 */
        this.txDecode = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.TxDecodeRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.TxDecodeResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TxEncode encodes the transaction.
        
         Since: cosmos-sdk 0.47 */
        this.txEncode = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.TxEncodeRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.TxEncodeResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
        
         Since: cosmos-sdk 0.47 */
        this.txEncodeAmino = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.TxEncodeAminoRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.TxEncodeAminoResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
        
         Since: cosmos-sdk 0.47 */
        this.txDecodeAmino = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = service_1.TxDecodeAminoRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
                return [2 /*return*/, promise.then(function (data) { return service_1.TxDecodeAminoResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        this.rpc = rpc;
    }
    return ServiceClientImpl;
}());
exports.ServiceClientImpl = ServiceClientImpl;
var createClientImpl = function (rpc) {
    return new ServiceClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
