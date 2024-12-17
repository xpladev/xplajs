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
exports.createClientImpl = exports.QueryClientImpl = void 0;
var binary_1 = require("../../../binary");
var query_1 = require("./query");
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        var _this = this;
        /* Proposal queries proposal details based on ProposalID. */
        this.proposal = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryProposalRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Proposals queries all proposals based on given status. */
        this.proposals = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryProposalsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryProposalsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Vote queries voted information based on proposalID, voterAddr. */
        this.vote = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryVoteRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryVoteResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Votes queries votes of a given proposal. */
        this.votes = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryVotesRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryVotesResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Params queries all parameters of the gov module. */
        this.params = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryParamsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Deposit queries single deposit information based on proposalID, depositor address. */
        this.deposit = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDepositRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDepositResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* Deposits queries all deposits of a single proposal. */
        this.deposits = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryDepositsRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryDepositsResponse.decode(new binary_1.BinaryReader(data)); })];
            });
        }); };
        /* TallyResult queries the tally of a proposal vote. */
        this.tallyResult = function (request) { return __awaiter(_this, void 0, void 0, function () {
            var data, promise;
            return __generator(this, function (_a) {
                data = query_1.QueryTallyResultRequest.encode(request).finish();
                promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
                return [2 /*return*/, promise.then(function (data) { return query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)); })];
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
