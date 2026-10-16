import { Params, ParamsAmino, CurrentPeriod, CurrentPeriodAmino } from "./dynamic_deflation";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is the request for Query/Params.
 * @name QueryParamsRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request for Query/Params.
 * @name QueryParamsRequestAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response for Query/Params.
 * @name QueryParamsResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response for Query/Params.
 * @name QueryParamsResponseAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryCurrentPeriodRequest is the request for Query/CurrentPeriod.
 * @name QueryCurrentPeriodRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest
 */
export interface QueryCurrentPeriodRequest {}
export interface QueryCurrentPeriodRequestProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentPeriodRequest is the request for Query/CurrentPeriod.
 * @name QueryCurrentPeriodRequestAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest
 */
export interface QueryCurrentPeriodRequestAmino {}
export interface QueryCurrentPeriodRequestAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest";
  value: QueryCurrentPeriodRequestAmino;
}
/**
 * QueryCurrentPeriodResponse is the response for Query/CurrentPeriod.
 * @name QueryCurrentPeriodResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse
 */
export interface QueryCurrentPeriodResponse {
  currentPeriod?: CurrentPeriod;
}
export interface QueryCurrentPeriodResponseProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentPeriodResponse is the response for Query/CurrentPeriod.
 * @name QueryCurrentPeriodResponseAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse
 */
export interface QueryCurrentPeriodResponseAmino {
  current_period?: CurrentPeriodAmino;
}
export interface QueryCurrentPeriodResponseAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse";
  value: QueryCurrentPeriodResponseAmino;
}
/**
 * QueryStatusRequest is the request for Query/Status.
 * @name QueryStatusRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusRequest
 */
export interface QueryStatusRequest {}
export interface QueryStatusRequestProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusRequest";
  value: Uint8Array;
}
/**
 * QueryStatusRequest is the request for Query/Status.
 * @name QueryStatusRequestAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusRequest
 */
export interface QueryStatusRequestAmino {}
export interface QueryStatusRequestAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryStatusRequest";
  value: QueryStatusRequestAmino;
}
/**
 * QueryStatusResponse reports the Dynamic Deflation Pool balance and allocated
 * amount. module_balance is retained for API compatibility.
 * @name QueryStatusResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusResponse
 */
export interface QueryStatusResponse {
  moduleBalance: Coin;
  allocatedAmount: Coin;
  surplusAmount: Coin;
  deficitAmount: Coin;
}
export interface QueryStatusResponseProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusResponse";
  value: Uint8Array;
}
/**
 * QueryStatusResponse reports the Dynamic Deflation Pool balance and allocated
 * amount. module_balance is retained for API compatibility.
 * @name QueryStatusResponseAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusResponse
 */
export interface QueryStatusResponseAmino {
  module_balance: CoinAmino;
  allocated_amount: CoinAmino;
  surplus_amount: CoinAmino;
  deficit_amount: CoinAmino;
}
export interface QueryStatusResponseAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.QueryStatusResponse";
  value: QueryStatusResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request for Query/Params.
 * @name QueryParamsRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response for Query/Params.
 * @name QueryParamsResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryCurrentPeriodRequest(): QueryCurrentPeriodRequest {
  return {};
}
/**
 * QueryCurrentPeriodRequest is the request for Query/CurrentPeriod.
 * @name QueryCurrentPeriodRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest
 */
export const QueryCurrentPeriodRequest = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest",
  is(o: any): o is QueryCurrentPeriodRequest {
    return o && o.$typeUrl === QueryCurrentPeriodRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentPeriodRequestAmino {
    return o && o.$typeUrl === QueryCurrentPeriodRequest.typeUrl;
  },
  encode(_: QueryCurrentPeriodRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPeriodRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPeriodRequest();
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
  fromPartial(_: DeepPartial<QueryCurrentPeriodRequest>): QueryCurrentPeriodRequest {
    const message = createBaseQueryCurrentPeriodRequest();
    return message;
  },
  fromAmino(_: QueryCurrentPeriodRequestAmino): QueryCurrentPeriodRequest {
    const message = createBaseQueryCurrentPeriodRequest();
    return message;
  },
  toAmino(_: QueryCurrentPeriodRequest): QueryCurrentPeriodRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPeriodRequestAminoMsg): QueryCurrentPeriodRequest {
    return QueryCurrentPeriodRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentPeriodRequestProtoMsg): QueryCurrentPeriodRequest {
    return QueryCurrentPeriodRequest.decode(message.value);
  },
  toProto(message: QueryCurrentPeriodRequest): Uint8Array {
    return QueryCurrentPeriodRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentPeriodRequest): QueryCurrentPeriodRequestProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodRequest",
      value: QueryCurrentPeriodRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCurrentPeriodResponse(): QueryCurrentPeriodResponse {
  return {
    currentPeriod: undefined
  };
}
/**
 * QueryCurrentPeriodResponse is the response for Query/CurrentPeriod.
 * @name QueryCurrentPeriodResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse
 */
export const QueryCurrentPeriodResponse = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse",
  is(o: any): o is QueryCurrentPeriodResponse {
    return o && o.$typeUrl === QueryCurrentPeriodResponse.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentPeriodResponseAmino {
    return o && o.$typeUrl === QueryCurrentPeriodResponse.typeUrl;
  },
  encode(message: QueryCurrentPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentPeriod !== undefined) {
      CurrentPeriod.encode(message.currentPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentPeriod = CurrentPeriod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentPeriodResponse>): QueryCurrentPeriodResponse {
    const message = createBaseQueryCurrentPeriodResponse();
    message.currentPeriod = object.currentPeriod !== undefined && object.currentPeriod !== null ? CurrentPeriod.fromPartial(object.currentPeriod) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentPeriodResponseAmino): QueryCurrentPeriodResponse {
    const message = createBaseQueryCurrentPeriodResponse();
    if (object.current_period !== undefined && object.current_period !== null) {
      message.currentPeriod = CurrentPeriod.fromAmino(object.current_period);
    }
    return message;
  },
  toAmino(message: QueryCurrentPeriodResponse): QueryCurrentPeriodResponseAmino {
    const obj: any = {};
    obj.current_period = message.currentPeriod ? CurrentPeriod.toAmino(message.currentPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPeriodResponseAminoMsg): QueryCurrentPeriodResponse {
    return QueryCurrentPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentPeriodResponseProtoMsg): QueryCurrentPeriodResponse {
    return QueryCurrentPeriodResponse.decode(message.value);
  },
  toProto(message: QueryCurrentPeriodResponse): Uint8Array {
    return QueryCurrentPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentPeriodResponse): QueryCurrentPeriodResponseProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryCurrentPeriodResponse",
      value: QueryCurrentPeriodResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCurrentPeriodResponse.typeUrl)) {
      return;
    }
    CurrentPeriod.registerTypeUrl();
  }
};
function createBaseQueryStatusRequest(): QueryStatusRequest {
  return {};
}
/**
 * QueryStatusRequest is the request for Query/Status.
 * @name QueryStatusRequest
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusRequest
 */
export const QueryStatusRequest = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusRequest",
  is(o: any): o is QueryStatusRequest {
    return o && o.$typeUrl === QueryStatusRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStatusRequestAmino {
    return o && o.$typeUrl === QueryStatusRequest.typeUrl;
  },
  encode(_: QueryStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatusRequest();
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
  fromPartial(_: DeepPartial<QueryStatusRequest>): QueryStatusRequest {
    const message = createBaseQueryStatusRequest();
    return message;
  },
  fromAmino(_: QueryStatusRequestAmino): QueryStatusRequest {
    const message = createBaseQueryStatusRequest();
    return message;
  },
  toAmino(_: QueryStatusRequest): QueryStatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStatusRequestAminoMsg): QueryStatusRequest {
    return QueryStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatusRequestProtoMsg): QueryStatusRequest {
    return QueryStatusRequest.decode(message.value);
  },
  toProto(message: QueryStatusRequest): Uint8Array {
    return QueryStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStatusRequest): QueryStatusRequestProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusRequest",
      value: QueryStatusRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryStatusResponse(): QueryStatusResponse {
  return {
    moduleBalance: Coin.fromPartial({}),
    allocatedAmount: Coin.fromPartial({}),
    surplusAmount: Coin.fromPartial({}),
    deficitAmount: Coin.fromPartial({})
  };
}
/**
 * QueryStatusResponse reports the Dynamic Deflation Pool balance and allocated
 * amount. module_balance is retained for API compatibility.
 * @name QueryStatusResponse
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.QueryStatusResponse
 */
export const QueryStatusResponse = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusResponse",
  is(o: any): o is QueryStatusResponse {
    return o && (o.$typeUrl === QueryStatusResponse.typeUrl || Coin.is(o.moduleBalance) && Coin.is(o.allocatedAmount) && Coin.is(o.surplusAmount) && Coin.is(o.deficitAmount));
  },
  isAmino(o: any): o is QueryStatusResponseAmino {
    return o && (o.$typeUrl === QueryStatusResponse.typeUrl || Coin.isAmino(o.module_balance) && Coin.isAmino(o.allocated_amount) && Coin.isAmino(o.surplus_amount) && Coin.isAmino(o.deficit_amount));
  },
  encode(message: QueryStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleBalance !== undefined) {
      Coin.encode(message.moduleBalance, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocatedAmount !== undefined) {
      Coin.encode(message.allocatedAmount, writer.uint32(18).fork()).ldelim();
    }
    if (message.surplusAmount !== undefined) {
      Coin.encode(message.surplusAmount, writer.uint32(26).fork()).ldelim();
    }
    if (message.deficitAmount !== undefined) {
      Coin.encode(message.deficitAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleBalance = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.allocatedAmount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.surplusAmount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.deficitAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStatusResponse>): QueryStatusResponse {
    const message = createBaseQueryStatusResponse();
    message.moduleBalance = object.moduleBalance !== undefined && object.moduleBalance !== null ? Coin.fromPartial(object.moduleBalance) : undefined;
    message.allocatedAmount = object.allocatedAmount !== undefined && object.allocatedAmount !== null ? Coin.fromPartial(object.allocatedAmount) : undefined;
    message.surplusAmount = object.surplusAmount !== undefined && object.surplusAmount !== null ? Coin.fromPartial(object.surplusAmount) : undefined;
    message.deficitAmount = object.deficitAmount !== undefined && object.deficitAmount !== null ? Coin.fromPartial(object.deficitAmount) : undefined;
    return message;
  },
  fromAmino(object: QueryStatusResponseAmino): QueryStatusResponse {
    const message = createBaseQueryStatusResponse();
    if (object.module_balance !== undefined && object.module_balance !== null) {
      message.moduleBalance = Coin.fromAmino(object.module_balance);
    }
    if (object.allocated_amount !== undefined && object.allocated_amount !== null) {
      message.allocatedAmount = Coin.fromAmino(object.allocated_amount);
    }
    if (object.surplus_amount !== undefined && object.surplus_amount !== null) {
      message.surplusAmount = Coin.fromAmino(object.surplus_amount);
    }
    if (object.deficit_amount !== undefined && object.deficit_amount !== null) {
      message.deficitAmount = Coin.fromAmino(object.deficit_amount);
    }
    return message;
  },
  toAmino(message: QueryStatusResponse): QueryStatusResponseAmino {
    const obj: any = {};
    obj.module_balance = message.moduleBalance ? Coin.toAmino(message.moduleBalance) : Coin.toAmino(Coin.fromPartial({}));
    obj.allocated_amount = message.allocatedAmount ? Coin.toAmino(message.allocatedAmount) : Coin.toAmino(Coin.fromPartial({}));
    obj.surplus_amount = message.surplusAmount ? Coin.toAmino(message.surplusAmount) : Coin.toAmino(Coin.fromPartial({}));
    obj.deficit_amount = message.deficitAmount ? Coin.toAmino(message.deficitAmount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryStatusResponseAminoMsg): QueryStatusResponse {
    return QueryStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStatusResponseProtoMsg): QueryStatusResponse {
    return QueryStatusResponse.decode(message.value);
  },
  toProto(message: QueryStatusResponse): Uint8Array {
    return QueryStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStatusResponse): QueryStatusResponseProtoMsg {
    return {
      typeUrl: "/xpla.dynamicdeflation.v1beta1.QueryStatusResponse",
      value: QueryStatusResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryStatusResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};