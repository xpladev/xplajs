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
        /* Validators queries all validators that match the given status.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.validators = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryValidatorsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryValidatorsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Validator queries validator info for given validator address. */
        this.validator = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryValidatorRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryValidatorResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* ValidatorDelegations queries delegate info for given validator.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.validatorDelegations = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryValidatorDelegationsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryValidatorDelegationsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* ValidatorUnbondingDelegations queries unbonding delegations of a validator.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.validatorUnbondingDelegations = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryValidatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Delegation queries delegate info for given validator delegator pair. */
        this.delegation = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDelegationRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDelegationResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* UnbondingDelegation queries unbonding info for given validator delegator
         pair. */
        this.unbondingDelegation = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryUnbondingDelegationRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DelegatorDelegations queries all delegations of a given delegator address.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.delegatorDelegations = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDelegatorDelegationsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDelegatorDelegationsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
         delegator address.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.delegatorUnbondingDelegations = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDelegatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Redelegations queries redelegations of given address.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.redelegations = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryRedelegationsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryRedelegationsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DelegatorValidators queries all validators info for given delegator
         address.
        
         When called from another module, this query might consume a high amount of
         gas if the pagination field is incorrectly set. */
        this.delegatorValidators = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* DelegatorValidator queries validator info for given delegator validator
         pair. */
        this.delegatorValidator = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDelegatorValidatorRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDelegatorValidatorResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* HistoricalInfo queries the historical info for given height. */
        this.historicalInfo = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryHistoricalInfoRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryHistoricalInfoResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Pool queries the pool info. */
        this.pool = function () {
            var args_1 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args_1[_i] = arguments[_i];
            }
            return __awaiter(_this, __spreadArray([], args_1, true), void 0, function (request) {
                var data, promise;
                if (request === void 0) { request = {}; }
                return __generator(this, function (_a) {
                    data = query_1.QueryPoolRequest.encode(request).finish();
                    promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryPoolResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        /* Parameters queries the staking parameters. */
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
                    promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
                    return [2 /*return*/, promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); })];
                });
            });
        };
        this.rpc = rpc;
    }
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var createClientImpl = function (rpc) {
    return new QueryClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
