import { Channel } from "./channel";
import { Upgrade } from "./upgrade";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Channel queries an IBC Channel. */
  Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
  /** Channels queries all the IBC channels of a chain. */
  Channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
  /** PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
  /** NextSequenceSend returns the next send sequence for a given channel. */
  NextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
  /** UpgradeError returns the error receipt if the upgrade handshake failed. */
  UpgradeError(request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse>;
  /** Upgrade returns the upgrade for a given port and channel id. */
  Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse>;
  /** ChannelParams queries all parameters of the ibc channel submodule. */
  ChannelParams(request?: QueryChannelParamsRequest): Promise<QueryChannelParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Channel queries an IBC Channel. */
  Channel = async (request: QueryChannelRequest): Promise<QueryChannelResponse> => {
    const data = QueryChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
    return promise.then(data => QueryChannelResponse.decode(new BinaryReader(data)));
  };
  /* Channels queries all the IBC channels of a chain. */
  Channels = async (request: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> => {
    const data = QueryChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
    return promise.then(data => QueryChannelsResponse.decode(new BinaryReader(data)));
  };
  /* ConnectionChannels queries all the channels associated with a connection
   end. */
  ConnectionChannels = async (request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> => {
    const data = QueryConnectionChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
    return promise.then(data => QueryConnectionChannelsResponse.decode(new BinaryReader(data)));
  };
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
  ChannelClientState = async (request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> => {
    const data = QueryChannelClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
    return promise.then(data => QueryChannelClientStateResponse.decode(new BinaryReader(data)));
  };
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
  ChannelConsensusState = async (request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> => {
    const data = QueryChannelConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
    return promise.then(data => QueryChannelConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* PacketCommitment queries a stored packet commitment hash. */
  PacketCommitment = async (request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> => {
    const data = QueryPacketCommitmentRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
    return promise.then(data => QueryPacketCommitmentResponse.decode(new BinaryReader(data)));
  };
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
  PacketCommitments = async (request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> => {
    const data = QueryPacketCommitmentsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
    return promise.then(data => QueryPacketCommitmentsResponse.decode(new BinaryReader(data)));
  };
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
  PacketReceipt = async (request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> => {
    const data = QueryPacketReceiptRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
    return promise.then(data => QueryPacketReceiptResponse.decode(new BinaryReader(data)));
  };
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  PacketAcknowledgement = async (request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> => {
    const data = QueryPacketAcknowledgementRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
    return promise.then(data => QueryPacketAcknowledgementResponse.decode(new BinaryReader(data)));
  };
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
  PacketAcknowledgements = async (request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> => {
    const data = QueryPacketAcknowledgementsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
    return promise.then(data => QueryPacketAcknowledgementsResponse.decode(new BinaryReader(data)));
  };
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
  UnreceivedPackets = async (request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> => {
    const data = QueryUnreceivedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
    return promise.then(data => QueryUnreceivedPacketsResponse.decode(new BinaryReader(data)));
  };
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
  UnreceivedAcks = async (request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> => {
    const data = QueryUnreceivedAcksRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
    return promise.then(data => QueryUnreceivedAcksResponse.decode(new BinaryReader(data)));
  };
  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  NextSequenceReceive = async (request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> => {
    const data = QueryNextSequenceReceiveRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
    return promise.then(data => QueryNextSequenceReceiveResponse.decode(new BinaryReader(data)));
  };
  /* NextSequenceSend returns the next send sequence for a given channel. */
  NextSequenceSend = async (request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> => {
    const data = QueryNextSequenceSendRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceSend", data);
    return promise.then(data => QueryNextSequenceSendResponse.decode(new BinaryReader(data)));
  };
  /* UpgradeError returns the error receipt if the upgrade handshake failed. */
  UpgradeError = async (request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse> => {
    const data = QueryUpgradeErrorRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "UpgradeError", data);
    return promise.then(data => QueryUpgradeErrorResponse.decode(new BinaryReader(data)));
  };
  /* Upgrade returns the upgrade for a given port and channel id. */
  Upgrade = async (request: QueryUpgradeRequest): Promise<QueryUpgradeResponse> => {
    const data = QueryUpgradeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "Upgrade", data);
    return promise.then(data => QueryUpgradeResponse.decode(new BinaryReader(data)));
  };
  /* ChannelParams queries all parameters of the ibc channel submodule. */
  ChannelParams = async (request: QueryChannelParamsRequest = {}): Promise<QueryChannelParamsResponse> => {
    const data = QueryChannelParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelParams", data);
    return promise.then(data => QueryChannelParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Channel(request: QueryChannelRequest): Promise<QueryChannelResponse> {
      return queryService.Channel(request);
    },
    Channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse> {
      return queryService.Channels(request);
    },
    ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> {
      return queryService.ConnectionChannels(request);
    },
    ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> {
      return queryService.ChannelClientState(request);
    },
    ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> {
      return queryService.ChannelConsensusState(request);
    },
    PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> {
      return queryService.PacketCommitment(request);
    },
    PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> {
      return queryService.PacketCommitments(request);
    },
    PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> {
      return queryService.PacketReceipt(request);
    },
    PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> {
      return queryService.PacketAcknowledgement(request);
    },
    PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> {
      return queryService.PacketAcknowledgements(request);
    },
    UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> {
      return queryService.UnreceivedPackets(request);
    },
    UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> {
      return queryService.UnreceivedAcks(request);
    },
    NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> {
      return queryService.NextSequenceReceive(request);
    },
    NextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> {
      return queryService.NextSequenceSend(request);
    },
    UpgradeError(request: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse> {
      return queryService.UpgradeError(request);
    },
    Upgrade(request: QueryUpgradeRequest): Promise<QueryUpgradeResponse> {
      return queryService.Upgrade(request);
    },
    ChannelParams(request?: QueryChannelParamsRequest): Promise<QueryChannelParamsResponse> {
      return queryService.ChannelParams(request);
    }
  };
};