"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolunteerValidator = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseVolunteerValidator() {
    return {
        address: "",
        power: BigInt(0)
    };
}
exports.VolunteerValidator = {
    typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator",
    is(o) {
        return o && (o.$typeUrl === exports.VolunteerValidator.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VolunteerValidator.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVolunteerValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVolunteerValidator();
        message.address = object.address ?? "";
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseVolunteerValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VolunteerValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VolunteerValidator.decode(message.value);
    },
    toProto(message) {
        return exports.VolunteerValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator",
            value: exports.VolunteerValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VolunteerValidator.typeUrl, exports.VolunteerValidator);
