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
        /* Accounts returns all the existing accounts.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set.
        
         Since: cosmos-sdk 0.43 */
        this.accounts = function () {
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
                    data = query_1.QueryAccountsRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryAccountsResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* Account returns account details based on address. */
        this.account = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryAccountRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryAccountResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* AccountAddressByID returns account address based on account number.
        
         Since: cosmos-sdk 0.46.2 */
        this.accountAddressByID = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryAccountAddressByIDRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryAccountAddressByIDResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Params queries all parameters. */
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
                    promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* ModuleAccounts returns all the existing module accounts.
        
         Since: cosmos-sdk 0.46 */
        this.moduleAccounts = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {}; }
                return __generator(this, function (_a) {
                    data = query_1.QueryModuleAccountsRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryModuleAccountsResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* ModuleAccountByName returns the module account info by module name */
        this.moduleAccountByName = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryModuleAccountByNameRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryModuleAccountByNameResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Bech32Prefix queries bech32Prefix
        
         Since: cosmos-sdk 0.46 */
        this.bech32Prefix = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {}; }
                return __generator(this, function (_a) {
                    data = query_1.Bech32PrefixRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.Bech32PrefixResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* AddressBytesToString converts Account Address bytes to string
        
         Since: cosmos-sdk 0.46 */
        this.addressBytesToString = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.AddressBytesToStringRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.AddressBytesToStringResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* AddressStringToBytes converts Address string to bytes
        
         Since: cosmos-sdk 0.46 */
        this.addressStringToBytes = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.AddressStringToBytesRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.AddressStringToBytesResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* AccountInfo queries account info which is common to all account types.
        
         Since: cosmos-sdk 0.47 */
        this.accountInfo = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryAccountInfoRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryAccountInfoResponse.decode(new binary_1.BinaryReader(data)); })];
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
