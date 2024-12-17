"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseParams() {
    return {
        feePoolRate: "",
        communityPoolRate: "",
        reserveRate: "",
        reserveAccount: "",
        rewardDistributeAccount: ""
    };
}
exports.Params = {
    typeUrl: "/xpla.reward.v1beta1.Params",
    aminoType: "xpladev/x/reward/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.feePoolRate === "string" && typeof o.communityPoolRate === "string" && typeof o.reserveRate === "string" && typeof o.reserveAccount === "string" && typeof o.rewardDistributeAccount === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.fee_pool_rate === "string" && typeof o.community_pool_rate === "string" && typeof o.reserve_rate === "string" && typeof o.reserve_account === "string" && typeof o.reward_distribute_account === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.feePoolRate !== "") {
            writer.uint32(10).string(message.feePoolRate);
        }
        if (message.communityPoolRate !== "") {
            writer.uint32(18).string(message.communityPoolRate);
        }
        if (message.reserveRate !== "") {
            writer.uint32(26).string(message.reserveRate);
        }
        if (message.reserveAccount !== "") {
            writer.uint32(34).string(message.reserveAccount);
        }
        if (message.rewardDistributeAccount !== "") {
            writer.uint32(42).string(message.rewardDistributeAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feePoolRate = reader.string();
                    break;
                case 2:
                    message.communityPoolRate = reader.string();
                    break;
                case 3:
                    message.reserveRate = reader.string();
                    break;
                case 4:
                    message.reserveAccount = reader.string();
                    break;
                case 5:
                    message.rewardDistributeAccount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.feePoolRate = object.feePoolRate ?? "";
        message.communityPoolRate = object.communityPoolRate ?? "";
        message.reserveRate = object.reserveRate ?? "";
        message.reserveAccount = object.reserveAccount ?? "";
        message.rewardDistributeAccount = object.rewardDistributeAccount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.fee_pool_rate !== undefined && object.fee_pool_rate !== null) {
            message.feePoolRate = object.fee_pool_rate;
        }
        if (object.community_pool_rate !== undefined && object.community_pool_rate !== null) {
            message.communityPoolRate = object.community_pool_rate;
        }
        if (object.reserve_rate !== undefined && object.reserve_rate !== null) {
            message.reserveRate = object.reserve_rate;
        }
        if (object.reserve_account !== undefined && object.reserve_account !== null) {
            message.reserveAccount = object.reserve_account;
        }
        if (object.reward_distribute_account !== undefined && object.reward_distribute_account !== null) {
            message.rewardDistributeAccount = object.reward_distribute_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.fee_pool_rate = message.feePoolRate ?? "";
        obj.community_pool_rate = message.communityPoolRate ?? "";
        obj.reserve_rate = message.reserveRate ?? "";
        obj.reserve_account = message.reserveAccount === "" ? undefined : message.reserveAccount;
        obj.reward_distribute_account = message.rewardDistributeAccount === "" ? undefined : message.rewardDistributeAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "xpladev/x/reward/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.reward.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
