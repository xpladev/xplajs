"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const volunteervalidator_1 = require("./volunteervalidator");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        volunteerValidators: []
    };
}
exports.GenesisState = {
    typeUrl: "/xpla.volunteer.v1beta1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.volunteerValidators) && (!o.volunteerValidators.length || volunteervalidator_1.VolunteerValidator.is(o.volunteerValidators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || volunteervalidator_1.VolunteerValidator.isAmino(o.volunteer_validators[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.volunteerValidators) {
            volunteervalidator_1.VolunteerValidator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volunteerValidators.push(volunteervalidator_1.VolunteerValidator.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.volunteerValidators = object.volunteerValidators?.map(e => volunteervalidator_1.VolunteerValidator.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.volunteerValidators = object.volunteer_validators?.map(e => volunteervalidator_1.VolunteerValidator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.volunteerValidators) {
            obj.volunteer_validators = message.volunteerValidators.map(e => e ? volunteervalidator_1.VolunteerValidator.toAmino(e) : undefined);
        }
        else {
            obj.volunteer_validators = message.volunteerValidators;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/xpla.volunteer.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
