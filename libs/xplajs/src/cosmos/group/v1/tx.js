"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgLeaveGroupResponse = exports.MsgLeaveGroup = exports.MsgExecResponse = exports.MsgExec = exports.MsgVoteResponse = exports.MsgVote = exports.MsgWithdrawProposalResponse = exports.MsgWithdrawProposal = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgUpdateGroupPolicyMetadataResponse = exports.MsgUpdateGroupPolicyMetadata = exports.MsgUpdateGroupPolicyDecisionPolicyResponse = exports.MsgUpdateGroupPolicyDecisionPolicy = exports.MsgCreateGroupWithPolicyResponse = exports.MsgCreateGroupWithPolicy = exports.MsgUpdateGroupPolicyAdminResponse = exports.MsgUpdateGroupPolicyAdmin = exports.MsgCreateGroupPolicyResponse = exports.MsgCreateGroupPolicy = exports.MsgUpdateGroupMetadataResponse = exports.MsgUpdateGroupMetadata = exports.MsgUpdateGroupAdminResponse = exports.MsgUpdateGroupAdmin = exports.MsgUpdateGroupMembersResponse = exports.MsgUpdateGroupMembers = exports.MsgCreateGroupResponse = exports.MsgCreateGroup = exports.ExecAmino = exports.Exec = void 0;
exports.execFromJSON = execFromJSON;
exports.execToJSON = execToJSON;
const types_1 = require("./types");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
/** Exec defines modes of execution of a proposal on creation or on new vote. */
var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (exports.Exec = Exec = {}));
exports.ExecAmino = Exec;
function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: ""
    };
}
exports.MsgCreateGroup = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroup",
    aminoType: "cosmos-sdk/MsgCreateGroup",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || types_1.MemberRequest.is(o.members[0])) && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || types_1.MemberRequest.isAmino(o.members[0])) && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => types_1.MemberRequest.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => types_1.MemberRequest.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroup",
            value: exports.MsgCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroup",
            value: exports.MsgCreateGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroup.typeUrl, exports.MsgCreateGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroup.aminoType, exports.MsgCreateGroup.typeUrl);
function createBaseMsgCreateGroupResponse() {
    return {
        groupId: BigInt(0)
    };
}
exports.MsgCreateGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupResponse.typeUrl || typeof o.groupId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupResponse",
            value: exports.MsgCreateGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
            value: exports.MsgCreateGroupResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupResponse.typeUrl, exports.MsgCreateGroupResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupResponse.aminoType, exports.MsgCreateGroupResponse.typeUrl);
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        groupId: BigInt(0),
        memberUpdates: []
    };
}
exports.MsgUpdateGroupMembers = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && Array.isArray(o.memberUpdates) && (!o.memberUpdates.length || types_1.MemberRequest.is(o.memberUpdates[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || types_1.MemberRequest.isAmino(o.member_updates[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            types_1.MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.memberUpdates.push(types_1.MemberRequest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.memberUpdates = object.memberUpdates?.map(e => types_1.MemberRequest.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMembers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        message.memberUpdates = object.member_updates?.map(e => types_1.MemberRequest.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        if (message.memberUpdates) {
            obj.member_updates = message.memberUpdates.map(e => e ? types_1.MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = message.memberUpdates;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMembers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembers",
            value: exports.MsgUpdateGroupMembers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
            value: exports.MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupMembers.typeUrl, exports.MsgUpdateGroupMembers);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupMembers.aminoType, exports.MsgUpdateGroupMembers.typeUrl);
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
exports.MsgUpdateGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupMembersResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupMembersResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupMembersResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
            value: exports.MsgUpdateGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
            value: exports.MsgUpdateGroupMembersResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupMembersResponse.typeUrl, exports.MsgUpdateGroupMembersResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupMembersResponse.aminoType, exports.MsgUpdateGroupMembersResponse.typeUrl);
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        groupId: BigInt(0),
        newAdmin: ""
    };
}
exports.MsgUpdateGroupAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.newAdmin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdmin",
            value: exports.MsgUpdateGroupAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
            value: exports.MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupAdmin.typeUrl, exports.MsgUpdateGroupAdmin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupAdmin.aminoType, exports.MsgUpdateGroupAdmin.typeUrl);
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
exports.MsgUpdateGroupAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupAdminResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupAdminResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
            value: exports.MsgUpdateGroupAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
            value: exports.MsgUpdateGroupAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupAdminResponse.typeUrl, exports.MsgUpdateGroupAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupAdminResponse.aminoType, exports.MsgUpdateGroupAdminResponse.typeUrl);
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        groupId: BigInt(0),
        metadata: ""
    };
}
exports.MsgUpdateGroupMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadata",
            value: exports.MsgUpdateGroupMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
            value: exports.MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupMetadata.typeUrl, exports.MsgUpdateGroupMetadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupMetadata.aminoType, exports.MsgUpdateGroupMetadata.typeUrl);
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupMetadataResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
            value: exports.MsgUpdateGroupMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
            value: exports.MsgUpdateGroupMetadataResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupMetadataResponse.typeUrl, exports.MsgUpdateGroupMetadataResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupMetadataResponse.aminoType, exports.MsgUpdateGroupMetadataResponse.typeUrl);
function createBaseMsgCreateGroupPolicy() {
    return {
        admin: "",
        groupId: BigInt(0),
        metadata: "",
        decisionPolicy: undefined
    };
}
exports.MsgCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.groupId === "bigint" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decisionPolicy = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.metadata = object.metadata ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.decision_policy = message.decisionPolicy ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicy",
            value: exports.MsgCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
            value: exports.MsgCreateGroupPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupPolicy.typeUrl, exports.MsgCreateGroupPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupPolicy.aminoType, exports.MsgCreateGroupPolicy.typeUrl);
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
exports.MsgCreateGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
            value: exports.MsgCreateGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
            value: exports.MsgCreateGroupPolicyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupPolicyResponse.typeUrl, exports.MsgCreateGroupPolicyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupPolicyResponse.aminoType, exports.MsgCreateGroupPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        groupPolicyAddress: "",
        newAdmin: ""
    };
}
exports.MsgUpdateGroupPolicyAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.groupPolicyAddress === "string" && typeof o.newAdmin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.new_admin === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
            value: exports.MsgUpdateGroupPolicyAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
            value: exports.MsgUpdateGroupPolicyAdmin.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyAdmin.typeUrl, exports.MsgUpdateGroupPolicyAdmin);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyAdmin.aminoType, exports.MsgUpdateGroupPolicyAdmin.typeUrl);
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyAdminResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
            value: exports.MsgUpdateGroupPolicyAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
            value: exports.MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyAdminResponse.typeUrl, exports.MsgUpdateGroupPolicyAdminResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyAdminResponse.aminoType, exports.MsgUpdateGroupPolicyAdminResponse.typeUrl);
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined
    };
}
exports.MsgCreateGroupWithPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || types_1.MemberRequest.is(o.members[0])) && typeof o.groupMetadata === "string" && typeof o.groupPolicyMetadata === "string" && typeof o.groupPolicyAsAdmin === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || types_1.MemberRequest.isAmino(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            types_1.MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(types_1.MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMetadata = reader.string();
                    break;
                case 4:
                    message.groupPolicyMetadata = reader.string();
                    break;
                case 5:
                    message.groupPolicyAsAdmin = reader.bool();
                    break;
                case 6:
                    message.decisionPolicy = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => types_1.MemberRequest.fromPartial(e)) || [];
        message.groupMetadata = object.groupMetadata ?? "";
        message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
        message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => types_1.MemberRequest.fromAmino(e)) || [];
        if (object.group_metadata !== undefined && object.group_metadata !== null) {
            message.groupMetadata = object.group_metadata;
        }
        if (object.group_policy_metadata !== undefined && object.group_policy_metadata !== null) {
            message.groupPolicyMetadata = object.group_policy_metadata;
        }
        if (object.group_policy_as_admin !== undefined && object.group_policy_as_admin !== null) {
            message.groupPolicyAsAdmin = object.group_policy_as_admin;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        obj.group_metadata = message.groupMetadata === "" ? undefined : message.groupMetadata;
        obj.group_policy_metadata = message.groupPolicyMetadata === "" ? undefined : message.groupPolicyMetadata;
        obj.group_policy_as_admin = message.groupPolicyAsAdmin === false ? undefined : message.groupPolicyAsAdmin;
        obj.decision_policy = message.decisionPolicy ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupWithPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicy",
            value: exports.MsgCreateGroupWithPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupWithPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupWithPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
            value: exports.MsgCreateGroupWithPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupWithPolicy.typeUrl, exports.MsgCreateGroupWithPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupWithPolicy.aminoType, exports.MsgCreateGroupWithPolicy.typeUrl);
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        groupId: BigInt(0),
        groupPolicyAddress: ""
    };
}
exports.MsgCreateGroupWithPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.groupId === "bigint" && typeof o.groupPolicyAddress === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
            value: exports.MsgCreateGroupWithPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateGroupWithPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateGroupWithPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
            value: exports.MsgCreateGroupWithPolicyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateGroupWithPolicyResponse.typeUrl, exports.MsgCreateGroupWithPolicyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateGroupWithPolicyResponse.aminoType, exports.MsgCreateGroupWithPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        groupPolicyAddress: "",
        decisionPolicy: undefined
    };
}
exports.MsgUpdateGroupPolicyDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
    aminoType: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.groupPolicyAddress === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.decisionPolicy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = registry_1.GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
        obj.decision_policy = message.decisionPolicy ? registry_1.GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
            value: exports.MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
            value: exports.MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyDecisionPolicy.typeUrl, exports.MsgUpdateGroupPolicyDecisionPolicy);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyDecisionPolicy.aminoType, exports.MsgUpdateGroupPolicyDecisionPolicy.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyDecisionPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: exports.MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: exports.MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl, exports.MsgUpdateGroupPolicyDecisionPolicyResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyDecisionPolicyResponse.aminoType, exports.MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        groupPolicyAddress: "",
        metadata: ""
    };
}
exports.MsgUpdateGroupPolicyMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.groupPolicyAddress === "string" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.metadata === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
            value: exports.MsgUpdateGroupPolicyMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
            value: exports.MsgUpdateGroupPolicyMetadata.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyMetadata.typeUrl, exports.MsgUpdateGroupPolicyMetadata);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyMetadata.aminoType, exports.MsgUpdateGroupPolicyMetadata.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
exports.MsgUpdateGroupPolicyMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateGroupPolicyMetadataResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
            value: exports.MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
            value: exports.MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateGroupPolicyMetadataResponse.typeUrl, exports.MsgUpdateGroupPolicyMetadataResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateGroupPolicyMetadataResponse.aminoType, exports.MsgUpdateGroupPolicyMetadataResponse.typeUrl);
function createBaseMsgSubmitProposal() {
    return {
        groupPolicyAddress: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0,
        title: "",
        summary: ""
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || typeof o.groupPolicyAddress === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || any_1.Any.is(o.messages[0])) && (0, helpers_1.isSet)(o.exec) && typeof o.title === "string" && typeof o.summary === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposal.typeUrl || typeof o.group_policy_address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || any_1.Any.isAmino(o.messages[0])) && (0, helpers_1.isSet)(o.exec) && typeof o.title === "string" && typeof o.summary === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupPolicyAddress !== "") {
            writer.uint32(10).string(message.groupPolicyAddress);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        if (message.title !== "") {
            writer.uint32(50).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(58).string(message.summary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicyAddress = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.summary = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.groupPolicyAddress = object.groupPolicyAddress ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.groupPolicyAddress = object.group_policy_address;
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = object.exec;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_policy_address = message.groupPolicyAddress === "" ? undefined : message.groupPolicyAddress;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = message.proposers;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        obj.exec = message.exec === 0 ? undefined : message.exec;
        obj.title = message.title === "" ? undefined : message.title;
        obj.summary = message.summary === "" ? undefined : message.summary;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposal.typeUrl, exports.MsgSubmitProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposal.aminoType, exports.MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
    aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposalId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSubmitProposalResponse.typeUrl, exports.MsgSubmitProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSubmitProposalResponse.aminoType, exports.MsgSubmitProposalResponse.typeUrl);
function createBaseMsgWithdrawProposal() {
    return {
        proposalId: BigInt(0),
        address: ""
    };
}
exports.MsgWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawProposal.typeUrl || typeof o.proposalId === "bigint" && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgWithdrawProposal",
            value: exports.MsgWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
            value: exports.MsgWithdrawProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawProposal.typeUrl, exports.MsgWithdrawProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawProposal.aminoType, exports.MsgWithdrawProposal.typeUrl);
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
exports.MsgWithdrawProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
    aminoType: "cosmos-sdk/MsgWithdrawProposalResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgWithdrawProposalResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgWithdrawProposalResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawProposalResponse",
            value: exports.MsgWithdrawProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
            value: exports.MsgWithdrawProposalResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawProposalResponse.typeUrl, exports.MsgWithdrawProposalResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawProposalResponse.aminoType, exports.MsgWithdrawProposalResponse.typeUrl);
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        metadata: "",
        exec: 0
    };
}
exports.MsgVote = {
    typeUrl: "/cosmos.group.v1.MsgVote",
    aminoType: "cosmos-sdk/group/MsgVote",
    is(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && typeof o.metadata === "string" && (0, helpers_1.isSet)(o.exec));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && (0, helpers_1.isSet)(o.option) && typeof o.metadata === "string" && (0, helpers_1.isSet)(o.exec));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = object.exec;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.option = message.option === 0 ? undefined : message.option;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.exec = message.exec === 0 ? undefined : message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVote.typeUrl, exports.MsgVote);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVote.aminoType, exports.MsgVote.typeUrl);
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/cosmos.group.v1.MsgVoteResponse",
    aminoType: "cosmos-sdk/MsgVoteResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgVoteResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgVoteResponse.typeUrl, exports.MsgVoteResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgVoteResponse.aminoType, exports.MsgVoteResponse.typeUrl);
function createBaseMsgExec() {
    return {
        proposalId: BigInt(0),
        executor: ""
    };
}
exports.MsgExec = {
    typeUrl: "/cosmos.group.v1.MsgExec",
    aminoType: "cosmos-sdk/group/MsgExec",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExec.typeUrl || typeof o.proposalId === "bigint" && typeof o.executor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.executor === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.executor = object.executor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
        obj.executor = message.executor === "" ? undefined : message.executor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgExec",
            value: exports.MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExec.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExec",
            value: exports.MsgExec.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExec.typeUrl, exports.MsgExec);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExec.aminoType, exports.MsgExec.typeUrl);
function createBaseMsgExecResponse() {
    return {
        result: 0
    };
}
exports.MsgExecResponse = {
    typeUrl: "/cosmos.group.v1.MsgExecResponse",
    aminoType: "cosmos-sdk/MsgExecResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgExecResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgExecResponse.typeUrl || (0, helpers_1.isSet)(o.result));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result === 0 ? undefined : message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: exports.MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExecResponse",
            value: exports.MsgExecResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgExecResponse.typeUrl, exports.MsgExecResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgExecResponse.aminoType, exports.MsgExecResponse.typeUrl);
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        groupId: BigInt(0)
    };
}
exports.MsgLeaveGroup = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    is(o) {
        return o && (o.$typeUrl === exports.MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.groupId === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLeaveGroup();
        message.address = object.address ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLeaveGroup();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.group_id = message.groupId !== BigInt(0) ? message.groupId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgLeaveGroup",
            value: exports.MsgLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
            value: exports.MsgLeaveGroup.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLeaveGroup.typeUrl, exports.MsgLeaveGroup);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLeaveGroup.aminoType, exports.MsgLeaveGroup.typeUrl);
function createBaseMsgLeaveGroupResponse() {
    return {};
}
exports.MsgLeaveGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
    aminoType: "cosmos-sdk/MsgLeaveGroupResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgLeaveGroupResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgLeaveGroupResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLeaveGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgLeaveGroupResponse",
            value: exports.MsgLeaveGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLeaveGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLeaveGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
            value: exports.MsgLeaveGroupResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgLeaveGroupResponse.typeUrl, exports.MsgLeaveGroupResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgLeaveGroupResponse.aminoType, exports.MsgLeaveGroupResponse.typeUrl);
