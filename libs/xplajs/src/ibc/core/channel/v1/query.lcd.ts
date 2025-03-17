import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryUpgradeErrorRequest, QueryUpgradeErrorResponse, QueryUpgradeRequest, QueryUpgradeResponse, QueryChannelParamsRequest, QueryChannelParamsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Channel queries an IBC Channel. */
  channel = async (params: QueryChannelRequest): Promise<QueryChannelResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}`;
    return await this.req.get<QueryChannelResponse>(endpoint);
  };
  /* Channels queries all the IBC channels of a chain. */
  channels = async (params: QueryChannelsRequest = {
    pagination: undefined
  }): Promise<QueryChannelsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels`;
    return await this.req.get<QueryChannelsResponse>(endpoint, options);
  };
  /* ConnectionChannels queries all the channels associated with a connection
   end. */
  connectionChannels = async (params: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/connections/${params.connection}/channels`;
    return await this.req.get<QueryConnectionChannelsResponse>(endpoint, options);
  };
  /* ChannelClientState queries for the client state for the channel associated
   with the provided channel identifiers. */
  channelClientState = async (params: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/client_state`;
    return await this.req.get<QueryChannelClientStateResponse>(endpoint);
  };
  /* ChannelConsensusState queries for the consensus state for the channel
   associated with the provided channel identifiers. */
  channelConsensusState = async (params: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/consensus_state/revision/${params.revision_number}/height/${params.revision_height}`;
    return await this.req.get<QueryChannelConsensusStateResponse>(endpoint);
  };
  /* PacketCommitment queries a stored packet commitment hash. */
  packetCommitment = async (params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.sequence}`;
    return await this.req.get<QueryPacketCommitmentResponse>(endpoint);
  };
  /* PacketCommitments returns all the packet commitments hashes associated
   with a channel. */
  packetCommitments = async (params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments`;
    return await this.req.get<QueryPacketCommitmentsResponse>(endpoint, options);
  };
  /* PacketReceipt queries if a given packet sequence has been received on the
   queried chain */
  packetReceipt = async (params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_receipts/${params.sequence}`;
    return await this.req.get<QueryPacketReceiptResponse>(endpoint);
  };
  /* PacketAcknowledgement queries a stored packet acknowledgement hash. */
  packetAcknowledgement = async (params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acks/${params.sequence}`;
    return await this.req.get<QueryPacketAcknowledgementResponse>(endpoint);
  };
  /* PacketAcknowledgements returns all the packet acknowledgements associated
   with a channel. */
  packetAcknowledgements = async (params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.packet_commitment_sequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packet_commitment_sequences;
    }
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_acknowledgements`;
    return await this.req.get<QueryPacketAcknowledgementsResponse>(endpoint, options);
  };
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a
   channel and sequences. */
  unreceivedPackets = async (params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_commitment_sequences}/unreceived_packets`;
    return await this.req.get<QueryUnreceivedPacketsResponse>(endpoint);
  };
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   with a channel and sequences. */
  unreceivedAcks = async (params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/packet_commitments/${params.packet_ack_sequences}/unreceived_acks`;
    return await this.req.get<QueryUnreceivedAcksResponse>(endpoint);
  };
  /* NextSequenceReceive returns the next receive sequence for a given channel. */
  nextSequenceReceive = async (params: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence`;
    return await this.req.get<QueryNextSequenceReceiveResponse>(endpoint);
  };
  /* NextSequenceSend returns the next send sequence for a given channel. */
  nextSequenceSend = async (params: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/next_sequence_send`;
    return await this.req.get<QueryNextSequenceSendResponse>(endpoint);
  };
  /* UpgradeError returns the error receipt if the upgrade handshake failed. */
  upgradeError = async (params: QueryUpgradeErrorRequest): Promise<QueryUpgradeErrorResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/upgrade_error`;
    return await this.req.get<QueryUpgradeErrorResponse>(endpoint);
  };
  /* Upgrade returns the upgrade for a given port and channel id. */
  upgrade = async (params: QueryUpgradeRequest): Promise<QueryUpgradeResponse> => {
    const endpoint = `ibc/core/channel/v1/channels/${params.channel_id}/ports/${params.port_id}/upgrade`;
    return await this.req.get<QueryUpgradeResponse>(endpoint);
  };
  /* ChannelParams queries all parameters of the ibc channel submodule. */
  channelParams = async (_params: QueryChannelParamsRequest = {}): Promise<QueryChannelParamsResponse> => {
    const endpoint = `ibc/core/channel/v1/params`;
    return await this.req.get<QueryChannelParamsResponse>(endpoint);
  };
}