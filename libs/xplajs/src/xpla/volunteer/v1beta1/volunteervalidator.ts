import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** VolunteerValidator required for validator set update logic. */
export interface VolunteerValidator {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: bigint;
}
export interface VolunteerValidatorProtoMsg {
  typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator";
  value: Uint8Array;
}
/** VolunteerValidator required for validator set update logic. */
export interface VolunteerValidatorAmino {
  /** address is the address of the validator. */
  address: string;
  /** power defines the power of the validator. */
  power: string;
}
export interface VolunteerValidatorAminoMsg {
  type: "/xpla.volunteer.v1beta1.VolunteerValidator";
  value: VolunteerValidatorAmino;
}
function createBaseVolunteerValidator(): VolunteerValidator {
  return {
    address: "",
    power: BigInt(0)
  };
}
export const VolunteerValidator = {
  typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator",
  is(o: any): o is VolunteerValidator {
    return o && (o.$typeUrl === VolunteerValidator.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
  },
  isAmino(o: any): o is VolunteerValidatorAmino {
    return o && (o.$typeUrl === VolunteerValidator.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
  },
  encode(message: VolunteerValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VolunteerValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<VolunteerValidator>): VolunteerValidator {
    const message = createBaseVolunteerValidator();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: VolunteerValidatorAmino): VolunteerValidator {
    const message = createBaseVolunteerValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: VolunteerValidator): VolunteerValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: VolunteerValidatorAminoMsg): VolunteerValidator {
    return VolunteerValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: VolunteerValidatorProtoMsg): VolunteerValidator {
    return VolunteerValidator.decode(message.value);
  },
  toProto(message: VolunteerValidator): Uint8Array {
    return VolunteerValidator.encode(message).finish();
  },
  toProtoMsg(message: VolunteerValidator): VolunteerValidatorProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.VolunteerValidator",
      value: VolunteerValidator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(VolunteerValidator.typeUrl, VolunteerValidator);