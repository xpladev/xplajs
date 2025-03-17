import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryVolunteerValidatorsRequest */
export interface QueryVolunteerValidatorsRequest {}
export interface QueryVolunteerValidatorsRequestProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
  value: Uint8Array;
}
/** QueryVolunteerValidatorsRequest */
export interface QueryVolunteerValidatorsRequestAmino {}
export interface QueryVolunteerValidatorsRequestAminoMsg {
  type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
  value: QueryVolunteerValidatorsRequestAmino;
}
/** QueryVolunteerValidatorsResponse */
export interface QueryVolunteerValidatorsResponse {
  volunteer_validators: string[];
}
export interface QueryVolunteerValidatorsResponseProtoMsg {
  type_url: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
  value: Uint8Array;
}
/** QueryVolunteerValidatorsResponse */
export interface QueryVolunteerValidatorsResponseAmino {
  volunteer_validators: string[];
}
export interface QueryVolunteerValidatorsResponseAminoMsg {
  type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
  value: QueryVolunteerValidatorsResponseAmino;
}
function createBaseQueryVolunteerValidatorsRequest(): QueryVolunteerValidatorsRequest {
  return {};
}
export const QueryVolunteerValidatorsRequest = {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest",
  is(o: any): o is QueryVolunteerValidatorsRequest {
    return o && o.$typeUrl === QueryVolunteerValidatorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVolunteerValidatorsRequestAmino {
    return o && o.$typeUrl === QueryVolunteerValidatorsRequest.typeUrl;
  },
  encode(_: QueryVolunteerValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVolunteerValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(_: DeepPartial<QueryVolunteerValidatorsRequest>): QueryVolunteerValidatorsRequest {
    const message = createBaseQueryVolunteerValidatorsRequest();
    return message;
  },
  fromAmino(_: QueryVolunteerValidatorsRequestAmino): QueryVolunteerValidatorsRequest {
    const message = createBaseQueryVolunteerValidatorsRequest();
    return message;
  },
  toAmino(_: QueryVolunteerValidatorsRequest): QueryVolunteerValidatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVolunteerValidatorsRequestAminoMsg): QueryVolunteerValidatorsRequest {
    return QueryVolunteerValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVolunteerValidatorsRequestProtoMsg): QueryVolunteerValidatorsRequest {
    return QueryVolunteerValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryVolunteerValidatorsRequest): Uint8Array {
    return QueryVolunteerValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVolunteerValidatorsRequest): QueryVolunteerValidatorsRequestProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest",
      value: QueryVolunteerValidatorsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVolunteerValidatorsResponse(): QueryVolunteerValidatorsResponse {
  return {
    volunteer_validators: []
  };
}
export const QueryVolunteerValidatorsResponse = {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse",
  is(o: any): o is QueryVolunteerValidatorsResponse {
    return o && (o.$typeUrl === QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || typeof o.volunteer_validators[0] === "string"));
  },
  isAmino(o: any): o is QueryVolunteerValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || typeof o.volunteer_validators[0] === "string"));
  },
  encode(message: QueryVolunteerValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volunteer_validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVolunteerValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolunteerValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volunteer_validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVolunteerValidatorsResponse>): QueryVolunteerValidatorsResponse {
    const message = createBaseQueryVolunteerValidatorsResponse();
    message.volunteer_validators = object.volunteer_validators?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryVolunteerValidatorsResponseAmino): QueryVolunteerValidatorsResponse {
    const message = createBaseQueryVolunteerValidatorsResponse();
    message.volunteer_validators = object.volunteer_validators?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryVolunteerValidatorsResponse): QueryVolunteerValidatorsResponseAmino {
    const obj: any = {};
    if (message.volunteer_validators) {
      obj.volunteer_validators = message.volunteer_validators.map(e => e);
    } else {
      obj.volunteer_validators = message.volunteer_validators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVolunteerValidatorsResponseAminoMsg): QueryVolunteerValidatorsResponse {
    return QueryVolunteerValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVolunteerValidatorsResponseProtoMsg): QueryVolunteerValidatorsResponse {
    return QueryVolunteerValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryVolunteerValidatorsResponse): Uint8Array {
    return QueryVolunteerValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVolunteerValidatorsResponse): QueryVolunteerValidatorsResponseProtoMsg {
    return {
      typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse",
      value: QueryVolunteerValidatorsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};