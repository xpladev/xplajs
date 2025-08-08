import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** NextSequenceSend returns the next send sequence for a given channel. */
  nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */
  packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
  /** PacketCommitments queries a stored packet commitment hash. */
  packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
  /** PacketAcknowledgement queries a stored acknowledgement commitment hash. */
  packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
  /** PacketAcknowledgements returns all packet acknowledgements associated with a channel. */
  packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
  /** PacketReceipt queries a stored packet receipt. */
  packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
  /** UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. */
  unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
  /** UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. */
  unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* NextSequenceSend returns the next send sequence for a given channel. */
  nextSequenceSend = async (request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> => {
    const data = QueryNextSequenceSendRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "NextSequenceSend", data);
    return promise.then(data => QueryNextSequenceSendResponse.decode(new BinaryReader(data)));
  };
  /* PacketCommitment queries a stored packet commitment hash. */
  packetCommitment = async (request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> => {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketCommitment", data);
    return promise.then(data => QueryPacketCommitmentResponse.decode(new BinaryReader(data)));
  };
  /* PacketCommitments queries a stored packet commitment hash. */
  packetCommitments = async (request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> => {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketCommitments", data);
    return promise.then(data => QueryPacketCommitmentsResponse.decode(new BinaryReader(data)));
  };
  /* PacketAcknowledgement queries a stored acknowledgement commitment hash. */
  packetAcknowledgement = async (request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> => {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketAcknowledgement", data);
    return promise.then(data => QueryPacketAcknowledgementResponse.decode(new BinaryReader(data)));
  };
  /* PacketAcknowledgements returns all packet acknowledgements associated with a channel. */
  packetAcknowledgements = async (request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> => {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketAcknowledgements", data);
    return promise.then(data => QueryPacketAcknowledgementsResponse.decode(new BinaryReader(data)));
  };
  /* PacketReceipt queries a stored packet receipt. */
  packetReceipt = async (request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> => {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "PacketReceipt", data);
    return promise.then(data => QueryPacketReceiptResponse.decode(new BinaryReader(data)));
  };
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. */
  unreceivedPackets = async (request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> => {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "UnreceivedPackets", data);
    return promise.then(data => QueryUnreceivedPacketsResponse.decode(new BinaryReader(data)));
  };
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. */
  unreceivedAcks = async (request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> => {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Query", "UnreceivedAcks", data);
    return promise.then(data => QueryUnreceivedAcksResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> {
      return queryService.nextSequenceSend(request);
    },
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
      return queryService.packetCommitment(request);
    },
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
      return queryService.packetCommitments(request);
    },
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
      return queryService.packetAcknowledgements(request);
    },
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
      return queryService.packetReceipt(request);
    },
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
      return queryService.unreceivedAcks(request);
    }
  };
};