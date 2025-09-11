import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryNextSequenceSendRequest, QueryNextSequenceSendResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* NextSequenceSend returns the next send sequence for a given channel. */
  nextSequenceSend = async (params: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/next_sequence_send`;
    return await this.req.get<QueryNextSequenceSendResponse>(endpoint);
  };
  /* PacketCommitment queries a stored packet commitment hash. */
  packetCommitment = async (params: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.sequence}`;
    return await this.req.get<QueryPacketCommitmentResponse>(endpoint);
  };
  /* PacketCommitments queries a stored packet commitment hash. */
  packetCommitments = async (params: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments`;
    return await this.req.get<QueryPacketCommitmentsResponse>(endpoint, options);
  };
  /* PacketAcknowledgement queries a stored acknowledgement commitment hash. */
  packetAcknowledgement = async (params: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_acks/${params.sequence}`;
    return await this.req.get<QueryPacketAcknowledgementResponse>(endpoint);
  };
  /* PacketAcknowledgements returns all packet acknowledgements associated with a channel. */
  packetAcknowledgements = async (params: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.packetCommitmentSequences !== "undefined") {
      options.params.packet_commitment_sequences = params.packetCommitmentSequences;
    }
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_acknowledgements`;
    return await this.req.get<QueryPacketAcknowledgementsResponse>(endpoint, options);
  };
  /* PacketReceipt queries a stored packet receipt. */
  packetReceipt = async (params: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_receipts/${params.sequence}`;
    return await this.req.get<QueryPacketReceiptResponse>(endpoint);
  };
  /* UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences. */
  unreceivedPackets = async (params: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.sequences}/unreceived_packets`;
    return await this.req.get<QueryUnreceivedPacketsResponse>(endpoint);
  };
  /* UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences. */
  unreceivedAcks = async (params: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse> => {
    const endpoint = `ibc/core/channel/v2/clients/${params.clientId}/packet_commitments/${params.packetAckSequences}/unreceived_acks`;
    return await this.req.get<QueryUnreceivedAcksResponse>(endpoint);
  };
}