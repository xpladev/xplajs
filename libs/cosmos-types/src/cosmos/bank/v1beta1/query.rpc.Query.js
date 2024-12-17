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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        var _this = this;
        /* Balance queries the balance of a single coin for a single account. */
        this.balance = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryBalanceRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* AllBalances queries the balance of all coins for a single account.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.allBalances = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryAllBalancesRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryAllBalancesResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* SpendableBalances queries the spendable balance of all coins for a single
         account.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set.
        
         Since: cosmos-sdk 0.46 */
        this.spendableBalances = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QuerySpendableBalancesRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QuerySpendableBalancesResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* SpendableBalanceByDenom queries the spendable balance of a single denom for
         a single account.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set.
        
         Since: cosmos-sdk 0.47 */
        this.spendableBalanceByDenom = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QuerySpendableBalanceByDenomRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QuerySpendableBalanceByDenomResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TotalSupply queries the total supply of all coins.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.totalSupply = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {
                    pagination: undefined
                }; }
                return __generator(this, function (_a) {
                    data = query_1.QueryTotalSupplyRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* SupplyOf queries the supply of a single coin.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.supplyOf = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QuerySupplyOfRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Params queries the parameters of x/bank module. */
        this.params = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {}; }
                return __generator(this, function (_a) {
                    data = query_1.QueryParamsRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* DenomMetadata queries the client metadata of a given coin denomination. */
        this.denomMetadata = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDenomMetadataRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDenomMetadataResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
        this.denomMetadataByQueryString = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDenomMetadataByQueryStringRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadataByQueryString", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDenomMetadataByQueryStringResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DenomsMetadata queries the client metadata for all registered coin
         denominations. */
        this.denomsMetadata = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {
                    pagination: undefined
                }; }
                return __generator(this, function (_a) {
                    data = query_1.QueryDenomsMetadataRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryDenomsMetadataResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* DenomOwners queries for all account addresses that own a particular token
         denomination.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set.
        
         Since: cosmos-sdk 0.46 */
        this.denomOwners = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDenomOwnersRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDenomOwnersResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DenomOwnersByQuery queries for all account addresses that own a particular token
         denomination.
        
         Since: cosmos-sdk 0.50.3 */
        this.denomOwnersByQuery = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDenomOwnersByQueryRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwnersByQuery", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDenomOwnersByQueryResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* SendEnabled queries for SendEnabled entries.
        
         This query only returns denominations that have specific SendEnabled settings.
         Any denomination that does not have a specific setting will use the default
         params.default_send_enabled, and will not be returned by this query.
        
         Since: cosmos-sdk 0.47 */
        this.sendEnabled = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QuerySendEnabledRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QuerySendEnabledResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        this.rpc = rpc;
    }
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createClientImpl = function (rpc) {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
