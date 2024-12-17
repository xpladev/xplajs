"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryVolunteerValidatorsResponse = exports.QueryVolunteerValidatorsRequest = void 0;
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseQueryVolunteerValidatorsRequest() {
    return {};
}
exports.QueryVolunteerValidatorsRequest = {
    typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryVolunteerValidatorsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryVolunteerValidatorsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVolunteerValidatorsRequest();
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
        const message = createBaseQueryVolunteerValidatorsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryVolunteerValidatorsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVolunteerValidatorsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVolunteerValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVolunteerValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest",
            value: exports.QueryVolunteerValidatorsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVolunteerValidatorsRequest.typeUrl, exports.QueryVolunteerValidatorsRequest);
function createBaseQueryVolunteerValidatorsResponse() {
    return {
        volunteerValidators: []
    };
}
exports.QueryVolunteerValidatorsResponse = {
    typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteerValidators) && (!o.volunteerValidators.length || typeof o.volunteerValidators[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || typeof o.volunteer_validators[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.volunteerValidators) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVolunteerValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volunteerValidators.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVolunteerValidatorsResponse();
        message.volunteerValidators = object.volunteerValidators?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVolunteerValidatorsResponse();
        message.volunteerValidators = object.volunteer_validators?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.volunteerValidators) {
            obj.volunteer_validators = message.volunteerValidators.map(e => e);
        }
        else {
            obj.volunteer_validators = message.volunteerValidators;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVolunteerValidatorsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVolunteerValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVolunteerValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse",
            value: exports.QueryVolunteerValidatorsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryVolunteerValidatorsResponse.typeUrl, exports.QueryVolunteerValidatorsResponse);
