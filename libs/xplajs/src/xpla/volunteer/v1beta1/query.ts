import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * QueryVolunteerValidatorsRequest
 * @name QueryVolunteerValidatorsRequest
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest
 */
export interface QueryVolunteerValidatorsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryVolunteerValidatorsRequestProtoMsg {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryVolunteerValidatorsRequest
 * @name QueryVolunteerValidatorsRequestAmino
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest
 */
export interface QueryVolunteerValidatorsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryVolunteerValidatorsRequestAminoMsg {
  type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
  value: QueryVolunteerValidatorsRequestAmino;
}
/**
 * QueryVolunteerValidatorsResponse
 * @name QueryVolunteerValidatorsResponse
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse
 */
export interface QueryVolunteerValidatorsResponse {
  volunteerValidators: string[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryVolunteerValidatorsResponseProtoMsg {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryVolunteerValidatorsResponse
 * @name QueryVolunteerValidatorsResponseAmino
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse
 */
export interface QueryVolunteerValidatorsResponseAmino {
  volunteer_validators: string[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryVolunteerValidatorsResponseAminoMsg {
  type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
  value: QueryVolunteerValidatorsResponseAmino;
}
function createBaseQueryVolunteerValidatorsRequest(): QueryVolunteerValidatorsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryVolunteerValidatorsRequest
 * @name QueryVolunteerValidatorsRequest
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest
 */
export const QueryVolunteerValidatorsRequest = {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest",
  is(o: any): o is QueryVolunteerValidatorsRequest {
    return o && o.$typeUrl === QueryVolunteerValidatorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryVolunteerValidatorsRequestAmino {
    return o && o.$typeUrl === QueryVolunteerValidatorsRequest.typeUrl;
  },
  encode(message: QueryVolunteerValidatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVolunteerValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVolunteerValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVolunteerValidatorsRequest>): QueryVolunteerValidatorsRequest {
    const message = createBaseQueryVolunteerValidatorsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVolunteerValidatorsRequestAmino): QueryVolunteerValidatorsRequest {
    const message = createBaseQueryVolunteerValidatorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVolunteerValidatorsRequest): QueryVolunteerValidatorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
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
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryVolunteerValidatorsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryVolunteerValidatorsResponse(): QueryVolunteerValidatorsResponse {
  return {
    volunteerValidators: [],
    pagination: undefined
  };
}
/**
 * QueryVolunteerValidatorsResponse
 * @name QueryVolunteerValidatorsResponse
 * @package xpla.volunteer.v1beta1
 * @see proto type: xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse
 */
export const QueryVolunteerValidatorsResponse = {
  typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse",
  is(o: any): o is QueryVolunteerValidatorsResponse {
    return o && (o.$typeUrl === QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteerValidators) && (!o.volunteerValidators.length || typeof o.volunteerValidators[0] === "string"));
  },
  isAmino(o: any): o is QueryVolunteerValidatorsResponseAmino {
    return o && (o.$typeUrl === QueryVolunteerValidatorsResponse.typeUrl || Array.isArray(o.volunteer_validators) && (!o.volunteer_validators.length || typeof o.volunteer_validators[0] === "string"));
  },
  encode(message: QueryVolunteerValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.volunteerValidators) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
          message.volunteerValidators.push(reader.string());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
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
    message.volunteerValidators = object.volunteerValidators?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryVolunteerValidatorsResponseAmino): QueryVolunteerValidatorsResponse {
    const message = createBaseQueryVolunteerValidatorsResponse();
    message.volunteerValidators = object.volunteer_validators?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVolunteerValidatorsResponse): QueryVolunteerValidatorsResponseAmino {
    const obj: any = {};
    if (message.volunteerValidators) {
      obj.volunteer_validators = message.volunteerValidators.map(e => e);
    } else {
      obj.volunteer_validators = message.volunteerValidators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
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
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryVolunteerValidatorsResponse.typeUrl)) {
      return;
    }
    PageResponse.registerTypeUrl();
  }
};