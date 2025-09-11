import { BurnProposal, BurnProposalAmino } from "./burn";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryOngoingProposalsRequest is the request type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsRequest
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsRequest
 */
export interface QueryOngoingProposalsRequest {}
export interface QueryOngoingProposalsRequestProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsRequest";
  value: Uint8Array;
}
/**
 * QueryOngoingProposalsRequest is the request type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsRequestAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsRequest
 */
export interface QueryOngoingProposalsRequestAmino {}
export interface QueryOngoingProposalsRequestAminoMsg {
  type: "/xpla.burn.v1beta1.QueryOngoingProposalsRequest";
  value: QueryOngoingProposalsRequestAmino;
}
/**
 * QueryOngoingProposalsResponse is the response type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsResponse
 */
export interface QueryOngoingProposalsResponse {
  proposals: BurnProposal[];
}
export interface QueryOngoingProposalsResponseProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryOngoingProposalsResponse is the response type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsResponseAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsResponse
 */
export interface QueryOngoingProposalsResponseAmino {
  proposals: BurnProposalAmino[];
}
export interface QueryOngoingProposalsResponseAminoMsg {
  type: "/xpla.burn.v1beta1.QueryOngoingProposalsResponse";
  value: QueryOngoingProposalsResponseAmino;
}
/**
 * QueryOngoingProposalRequest is the request type for the Query/OngoingProposal
 * RPC method.
 * @name QueryOngoingProposalRequest
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalRequest
 */
export interface QueryOngoingProposalRequest {
  proposalId: bigint;
}
export interface QueryOngoingProposalRequestProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalRequest";
  value: Uint8Array;
}
/**
 * QueryOngoingProposalRequest is the request type for the Query/OngoingProposal
 * RPC method.
 * @name QueryOngoingProposalRequestAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalRequest
 */
export interface QueryOngoingProposalRequestAmino {
  proposal_id: string;
}
export interface QueryOngoingProposalRequestAminoMsg {
  type: "/xpla.burn.v1beta1.QueryOngoingProposalRequest";
  value: QueryOngoingProposalRequestAmino;
}
/**
 * QueryOngoingProposalResponse is the response type for the
 * Query/OngoingProposal RPC method.
 * @name QueryOngoingProposalResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalResponse
 */
export interface QueryOngoingProposalResponse {
  proposer: string;
  amount: Coin[];
}
export interface QueryOngoingProposalResponseProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalResponse";
  value: Uint8Array;
}
/**
 * QueryOngoingProposalResponse is the response type for the
 * Query/OngoingProposal RPC method.
 * @name QueryOngoingProposalResponseAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalResponse
 */
export interface QueryOngoingProposalResponseAmino {
  proposer: string;
  amount: CoinAmino[];
}
export interface QueryOngoingProposalResponseAminoMsg {
  type: "/xpla.burn.v1beta1.QueryOngoingProposalResponse";
  value: QueryOngoingProposalResponseAmino;
}
function createBaseQueryOngoingProposalsRequest(): QueryOngoingProposalsRequest {
  return {};
}
/**
 * QueryOngoingProposalsRequest is the request type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsRequest
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsRequest
 */
export const QueryOngoingProposalsRequest = {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsRequest",
  is(o: any): o is QueryOngoingProposalsRequest {
    return o && o.$typeUrl === QueryOngoingProposalsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOngoingProposalsRequestAmino {
    return o && o.$typeUrl === QueryOngoingProposalsRequest.typeUrl;
  },
  encode(_: QueryOngoingProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOngoingProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOngoingProposalsRequest();
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
  fromPartial(_: DeepPartial<QueryOngoingProposalsRequest>): QueryOngoingProposalsRequest {
    const message = createBaseQueryOngoingProposalsRequest();
    return message;
  },
  fromAmino(_: QueryOngoingProposalsRequestAmino): QueryOngoingProposalsRequest {
    const message = createBaseQueryOngoingProposalsRequest();
    return message;
  },
  toAmino(_: QueryOngoingProposalsRequest): QueryOngoingProposalsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOngoingProposalsRequestAminoMsg): QueryOngoingProposalsRequest {
    return QueryOngoingProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingProposalsRequestProtoMsg): QueryOngoingProposalsRequest {
    return QueryOngoingProposalsRequest.decode(message.value);
  },
  toProto(message: QueryOngoingProposalsRequest): Uint8Array {
    return QueryOngoingProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingProposalsRequest): QueryOngoingProposalsRequestProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsRequest",
      value: QueryOngoingProposalsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOngoingProposalsResponse(): QueryOngoingProposalsResponse {
  return {
    proposals: []
  };
}
/**
 * QueryOngoingProposalsResponse is the response type for the
 * Query/OngoingProposals RPC method.
 * @name QueryOngoingProposalsResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalsResponse
 */
export const QueryOngoingProposalsResponse = {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsResponse",
  is(o: any): o is QueryOngoingProposalsResponse {
    return o && (o.$typeUrl === QueryOngoingProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || BurnProposal.is(o.proposals[0])));
  },
  isAmino(o: any): o is QueryOngoingProposalsResponseAmino {
    return o && (o.$typeUrl === QueryOngoingProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || BurnProposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryOngoingProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      BurnProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOngoingProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOngoingProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(BurnProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOngoingProposalsResponse>): QueryOngoingProposalsResponse {
    const message = createBaseQueryOngoingProposalsResponse();
    message.proposals = object.proposals?.map(e => BurnProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOngoingProposalsResponseAmino): QueryOngoingProposalsResponse {
    const message = createBaseQueryOngoingProposalsResponse();
    message.proposals = object.proposals?.map(e => BurnProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOngoingProposalsResponse): QueryOngoingProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? BurnProposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOngoingProposalsResponseAminoMsg): QueryOngoingProposalsResponse {
    return QueryOngoingProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingProposalsResponseProtoMsg): QueryOngoingProposalsResponse {
    return QueryOngoingProposalsResponse.decode(message.value);
  },
  toProto(message: QueryOngoingProposalsResponse): Uint8Array {
    return QueryOngoingProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingProposalsResponse): QueryOngoingProposalsResponseProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalsResponse",
      value: QueryOngoingProposalsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOngoingProposalsResponse.typeUrl)) {
      return;
    }
    BurnProposal.registerTypeUrl();
  }
};
function createBaseQueryOngoingProposalRequest(): QueryOngoingProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
/**
 * QueryOngoingProposalRequest is the request type for the Query/OngoingProposal
 * RPC method.
 * @name QueryOngoingProposalRequest
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalRequest
 */
export const QueryOngoingProposalRequest = {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalRequest",
  is(o: any): o is QueryOngoingProposalRequest {
    return o && (o.$typeUrl === QueryOngoingProposalRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is QueryOngoingProposalRequestAmino {
    return o && (o.$typeUrl === QueryOngoingProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryOngoingProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOngoingProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOngoingProposalRequest();
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
  fromPartial(object: DeepPartial<QueryOngoingProposalRequest>): QueryOngoingProposalRequest {
    const message = createBaseQueryOngoingProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOngoingProposalRequestAmino): QueryOngoingProposalRequest {
    const message = createBaseQueryOngoingProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryOngoingProposalRequest): QueryOngoingProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOngoingProposalRequestAminoMsg): QueryOngoingProposalRequest {
    return QueryOngoingProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingProposalRequestProtoMsg): QueryOngoingProposalRequest {
    return QueryOngoingProposalRequest.decode(message.value);
  },
  toProto(message: QueryOngoingProposalRequest): Uint8Array {
    return QueryOngoingProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingProposalRequest): QueryOngoingProposalRequestProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalRequest",
      value: QueryOngoingProposalRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOngoingProposalResponse(): QueryOngoingProposalResponse {
  return {
    proposer: "",
    amount: []
  };
}
/**
 * QueryOngoingProposalResponse is the response type for the
 * Query/OngoingProposal RPC method.
 * @name QueryOngoingProposalResponse
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.QueryOngoingProposalResponse
 */
export const QueryOngoingProposalResponse = {
  typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalResponse",
  is(o: any): o is QueryOngoingProposalResponse {
    return o && (o.$typeUrl === QueryOngoingProposalResponse.typeUrl || typeof o.proposer === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is QueryOngoingProposalResponseAmino {
    return o && (o.$typeUrl === QueryOngoingProposalResponse.typeUrl || typeof o.proposer === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: QueryOngoingProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposer !== "") {
      writer.uint32(10).string(message.proposer);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOngoingProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOngoingProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposer = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOngoingProposalResponse>): QueryOngoingProposalResponse {
    const message = createBaseQueryOngoingProposalResponse();
    message.proposer = object.proposer ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOngoingProposalResponseAmino): QueryOngoingProposalResponse {
    const message = createBaseQueryOngoingProposalResponse();
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOngoingProposalResponse): QueryOngoingProposalResponseAmino {
    const obj: any = {};
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOngoingProposalResponseAminoMsg): QueryOngoingProposalResponse {
    return QueryOngoingProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOngoingProposalResponseProtoMsg): QueryOngoingProposalResponse {
    return QueryOngoingProposalResponse.decode(message.value);
  },
  toProto(message: QueryOngoingProposalResponse): Uint8Array {
    return QueryOngoingProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOngoingProposalResponse): QueryOngoingProposalResponseProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.QueryOngoingProposalResponse",
      value: QueryOngoingProposalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryOngoingProposalResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};