"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryDepositsResponse = exports.QueryDepositsRequest = exports.QueryDepositResponse = exports.QueryDepositRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryVotesResponse = exports.QueryVotesRequest = exports.QueryVoteResponse = exports.QueryVoteRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = void 0;
var gov_1 = require("./gov");
var pagination_1 = require("../../base/query/v1beta1/pagination");
var binary_1 = require("../../../binary");
function createBaseQueryProposalRequest() {
    return {
        proposalId: BigInt(0)
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalRequest",
    aminoType: "cosmos-sdk/QueryProposalRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposalRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: gov_1.Proposal.fromPartial({})
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalResponse",
    aminoType: "cosmos-sdk/QueryProposalResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposal !== undefined) {
            gov_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = gov_1.Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? gov_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    }
};
function createBaseQueryProposalsRequest() {
    return {
        proposalStatus: 0,
        voter: "",
        depositor: "",
        pagination: undefined
    };
}
exports.QueryProposalsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsRequest",
    aminoType: "cosmos-sdk/QueryProposalsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalStatus !== 0) {
            writer.uint32(8).int32(message.proposalStatus);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalStatus = reader.int32();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
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
        var _a, _b, _c;
        var message = createBaseQueryProposalsRequest();
        message.proposalStatus = (_a = object.proposalStatus) !== null && _a !== void 0 ? _a : 0;
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.depositor = (_c = object.depositor) !== null && _c !== void 0 ? _c : "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryProposalsResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
exports.QueryProposalsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryProposalsResponse",
    aminoType: "cosmos-sdk/QueryProposalsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.proposals; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        var message = createBaseQueryProposalsResponse();
        message.proposals = ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_1.Proposal.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryVoteRequest() {
    return {
        proposalId: BigInt(0),
        voter: ""
    };
}
exports.QueryVoteRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteRequest",
    aminoType: "cosmos-sdk/QueryVoteRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
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
        var message = createBaseQueryVoteRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryVoteResponse() {
    return {
        vote: gov_1.Vote.fromPartial({})
    };
}
exports.QueryVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVoteResponse",
    aminoType: "cosmos-sdk/QueryVoteResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.vote !== undefined) {
            gov_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = gov_1.Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryVoteResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? gov_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    }
};
function createBaseQueryVotesRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryVotesRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesRequest",
    aminoType: "cosmos-sdk/QueryVotesRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
        var message = createBaseQueryVotesRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryVotesResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryVotesResponse",
    aminoType: "cosmos-sdk/QueryVotesResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.votes; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVotesResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        var message = createBaseQueryVotesResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_1.Vote.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryParamsRequest() {
    return {
        paramsType: ""
    };
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.paramsType !== "") {
            writer.uint32(10).string(message.paramsType);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paramsType = reader.string();
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
        var message = createBaseQueryParamsRequest();
        message.paramsType = (_a = object.paramsType) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return {
        votingParams: gov_1.VotingParams.fromPartial({}),
        depositParams: gov_1.DepositParams.fromPartial({}),
        tallyParams: gov_1.TallyParams.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? gov_1.VotingParams.fromPartial(object.votingParams) : undefined;
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? gov_1.DepositParams.fromPartial(object.depositParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? gov_1.TallyParams.fromPartial(object.tallyParams) : undefined;
        return message;
    }
};
function createBaseQueryDepositRequest() {
    return {
        proposalId: BigInt(0),
        depositor: ""
    };
}
exports.QueryDepositRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositRequest",
    aminoType: "cosmos-sdk/QueryDepositRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDepositRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
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
        var message = createBaseQueryDepositRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryDepositResponse() {
    return {
        deposit: gov_1.Deposit.fromPartial({})
    };
}
exports.QueryDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositResponse",
    aminoType: "cosmos-sdk/QueryDepositResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.deposit !== undefined) {
            gov_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = gov_1.Deposit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDepositResponse();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? gov_1.Deposit.fromPartial(object.deposit) : undefined;
        return message;
    }
};
function createBaseQueryDepositsRequest() {
    return {
        proposalId: BigInt(0),
        pagination: undefined
    };
}
exports.QueryDepositsRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsRequest",
    aminoType: "cosmos-sdk/QueryDepositsRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
        var message = createBaseQueryDepositsRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryDepositsResponse() {
    return {
        deposits: [],
        pagination: undefined
    };
}
exports.QueryDepositsResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryDepositsResponse",
    aminoType: "cosmos-sdk/QueryDepositsResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        for (var _i = 0, _a = message.deposits; _i < _a.length; _i++) {
            var v = _a[_i];
            gov_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDepositsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
                    break;
                case 2:
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
        var message = createBaseQueryDepositsResponse();
        message.deposits = ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map(function (e) { return gov_1.Deposit.fromPartial(e); })) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposalId: BigInt(0)
    };
}
exports.QueryTallyResultRequest = {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultRequest",
    aminoType: "cosmos-sdk/QueryTallyResultRequest",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryTallyResultRequest();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: gov_1.TallyResult.fromPartial({})
    };
}
exports.QueryTallyResultResponse = {
    typeUrl: "/cosmos.gov.v1beta1.QueryTallyResultResponse",
    aminoType: "cosmos-sdk/QueryTallyResultResponse",
    encode: function (message, writer) {
        if (writer === void 0) { writer = binary_1.BinaryWriter.create(); }
        if (message.tally !== undefined) {
            gov_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = gov_1.TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial: function (object) {
        var message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? gov_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    }
};
