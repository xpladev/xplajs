import { VolunteerValidator, VolunteerValidatorAmino } from "./volunteervalidator";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the volunteer module's genesis state. */
export interface GenesisState {
  volunteer_validators: VolunteerValidator[];
}
export interface GenesisStateProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the volunteer module's genesis state. */
export interface GenesisStateAmino {
  volunteer_validators: VolunteerValidatorAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/xpla.volunteer.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    volunteer_validators: []
  };
}
export const GenesisState = {
  typeUrl: "/xpla.volunteer.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || VolunteerValidator.is(o.volunteer_validators[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || VolunteerValidator.isAmino(o.volunteer_validators[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volunteer_validators) {
      VolunteerValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volunteer_validators.push(VolunteerValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.volunteer_validators = object.volunteer_validators?.map(e => VolunteerValidator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.volunteer_validators = object.volunteer_validators?.map(e => VolunteerValidator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.volunteer_validators) {
      obj.volunteer_validators = message.volunteer_validators.map(e => e ? VolunteerValidator.toAmino(e) : undefined);
    } else {
      obj.volunteer_validators = message.volunteer_validators;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    VolunteerValidator.registerTypeUrl();
  }
};