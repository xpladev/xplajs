import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, IdentifiedChannel, IdentifiedChannelAmino, PacketState, PacketStateAmino } from "./channel";
import { Height, HeightAmino, IdentifiedClientState, IdentifiedClientStateAmino, Params, ParamsAmino } from "../../client/v1/client";
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { ErrorReceipt, ErrorReceiptAmino, Upgrade, UpgradeAmino } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelRequest";
  value: Uint8Array;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelRequest";
  value: QueryChannelRequestAmino;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel?: Channel;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelResponse";
  value: Uint8Array;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseAmino {
  /** channel associated with the request identifiers */
  channel?: ChannelAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryChannelResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelResponse";
  value: QueryChannelResponseAmino;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryChannelsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelsRequest";
  value: Uint8Array;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestAmino {
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelsRequest";
  value: QueryChannelsRequestAmino;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryChannelsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelsResponse";
  value: Uint8Array;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseAmino {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannelAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height: HeightAmino;
}
export interface QueryChannelsResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelsResponse";
  value: QueryChannelsResponseAmino;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryConnectionChannelsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryConnectionChannelsRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestAmino {
  /** connection unique identifier */
  connection: string;
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryConnectionChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionChannelsRequest";
  value: QueryConnectionChannelsRequestAmino;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryConnectionChannelsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryConnectionChannelsResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseAmino {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannelAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height: HeightAmino;
}
export interface QueryConnectionChannelsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionChannelsResponse";
  value: QueryConnectionChannelsResponseAmino;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelClientStateRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelClientStateRequest";
  value: QueryChannelClientStateRequestAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelClientStateResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryChannelClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelClientStateResponse";
  value: QueryChannelClientStateResponseAmino;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** revision number of the consensus state */
  revision_number: bigint;
  /** revision height of the consensus state */
  revision_height: bigint;
}
export interface QueryChannelConsensusStateRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** revision number of the consensus state */
  revision_number: string;
  /** revision height of the consensus state */
  revision_height: string;
}
export interface QueryChannelConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelConsensusStateRequest";
  value: QueryChannelConsensusStateRequestAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensus_state?: Any;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelConsensusStateResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryChannelConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelConsensusStateResponse";
  value: QueryChannelConsensusStateResponseAmino;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketCommitmentRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: string;
}
export interface QueryPacketCommitmentRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentRequest";
  value: QueryPacketCommitmentRequestAmino;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketCommitmentResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseAmino {
  /** packet associated with the request fields */
  commitment: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryPacketCommitmentResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentResponse";
  value: QueryPacketCommitmentResponseAmino;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryPacketCommitmentsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryPacketCommitmentsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsRequest";
  value: QueryPacketCommitmentsRequestAmino;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryPacketCommitmentsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseAmino {
  commitments: PacketStateAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height: HeightAmino;
}
export interface QueryPacketCommitmentsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsResponse";
  value: QueryPacketCommitmentsResponseAmino;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketReceiptRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketReceiptRequest";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: string;
}
export interface QueryPacketReceiptRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptRequest";
  value: QueryPacketReceiptRequestAmino;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketReceiptResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketReceiptResponse";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseAmino {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryPacketReceiptResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptResponse";
  value: QueryPacketReceiptResponseAmino;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketAcknowledgementRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: string;
}
export interface QueryPacketAcknowledgementRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementRequest";
  value: QueryPacketAcknowledgementRequestAmino;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketAcknowledgementResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseAmino {
  /** packet associated with the request fields */
  acknowledgement: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryPacketAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementResponse";
  value: QueryPacketAcknowledgementResponseAmino;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequest;
  /** list of packet sequences */
  packet_commitment_sequences: bigint[];
}
export interface QueryPacketAcknowledgementsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequestAmino;
  /** list of packet sequences */
  packet_commitment_sequences: string[];
}
export interface QueryPacketAcknowledgementsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsRequest";
  value: QueryPacketAcknowledgementsRequestAmino;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryPacketAcknowledgementsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseAmino {
  acknowledgements: PacketStateAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height: HeightAmino;
}
export interface QueryPacketAcknowledgementsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsResponse";
  value: QueryPacketAcknowledgementsResponseAmino;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of packet sequences */
  packet_commitment_sequences: bigint[];
}
export interface QueryUnreceivedPacketsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of packet sequences */
  packet_commitment_sequences: string[];
}
export interface QueryUnreceivedPacketsRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsRequest";
  value: QueryUnreceivedPacketsRequestAmino;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: bigint[];
  /** query block height */
  height: Height;
}
export interface QueryUnreceivedPacketsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseAmino {
  /** list of unreceived packet sequences */
  sequences: string[];
  /** query block height */
  height: HeightAmino;
}
export interface QueryUnreceivedPacketsResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsResponse";
  value: QueryUnreceivedPacketsResponseAmino;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of acknowledgement sequences */
  packet_ack_sequences: bigint[];
}
export interface QueryUnreceivedAcksRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of acknowledgement sequences */
  packet_ack_sequences: string[];
}
export interface QueryUnreceivedAcksRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksRequest";
  value: QueryUnreceivedAcksRequestAmino;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: bigint[];
  /** query block height */
  height: Height;
}
export interface QueryUnreceivedAcksResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseAmino {
  /** list of unreceived acknowledgement sequences */
  sequences: string[];
  /** query block height */
  height: HeightAmino;
}
export interface QueryUnreceivedAcksResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksResponse";
  value: QueryUnreceivedAcksResponseAmino;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceReceiveRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest";
  value: Uint8Array;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceReceiveRequestAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceReceiveRequest";
  value: QueryNextSequenceReceiveRequestAmino;
}
/**
 * QuerySequenceResponse is the response type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  next_sequence_receive: bigint;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryNextSequenceReceiveResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse";
  value: Uint8Array;
}
/**
 * QuerySequenceResponse is the response type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseAmino {
  /** next sequence receive number */
  next_sequence_receive: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryNextSequenceReceiveResponseAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceReceiveResponse";
  value: QueryNextSequenceReceiveResponseAmino;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceSendRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceSendRequest";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequestAmino {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceSendRequestAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendRequest";
  value: QueryNextSequenceSendRequestAmino;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
  /** next sequence send number */
  next_sequence_send: bigint;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryNextSequenceSendResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceSendResponse";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponseAmino {
  /** next sequence send number */
  next_sequence_send: string;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryNextSequenceSendResponseAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendResponse";
  value: QueryNextSequenceSendResponseAmino;
}
/** QueryUpgradeErrorRequest is the request type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorRequest {
  port_id: string;
  channel_id: string;
}
export interface QueryUpgradeErrorRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUpgradeErrorRequest";
  value: Uint8Array;
}
/** QueryUpgradeErrorRequest is the request type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorRequestAmino {
  port_id: string;
  channel_id: string;
}
export interface QueryUpgradeErrorRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradeErrorRequest";
  value: QueryUpgradeErrorRequestAmino;
}
/** QueryUpgradeErrorResponse is the response type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorResponse {
  error_receipt: ErrorReceipt;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryUpgradeErrorResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUpgradeErrorResponse";
  value: Uint8Array;
}
/** QueryUpgradeErrorResponse is the response type for the Query/QueryUpgradeError RPC method */
export interface QueryUpgradeErrorResponseAmino {
  error_receipt: ErrorReceiptAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryUpgradeErrorResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradeErrorResponse";
  value: QueryUpgradeErrorResponseAmino;
}
/** QueryUpgradeRequest is the request type for the QueryUpgradeRequest RPC method */
export interface QueryUpgradeRequest {
  port_id: string;
  channel_id: string;
}
export interface QueryUpgradeRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUpgradeRequest";
  value: Uint8Array;
}
/** QueryUpgradeRequest is the request type for the QueryUpgradeRequest RPC method */
export interface QueryUpgradeRequestAmino {
  port_id: string;
  channel_id: string;
}
export interface QueryUpgradeRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradeRequest";
  value: QueryUpgradeRequestAmino;
}
/** QueryUpgradeResponse is the response type for the QueryUpgradeResponse RPC method */
export interface QueryUpgradeResponse {
  upgrade: Upgrade;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryUpgradeResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUpgradeResponse";
  value: Uint8Array;
}
/** QueryUpgradeResponse is the response type for the QueryUpgradeResponse RPC method */
export interface QueryUpgradeResponseAmino {
  upgrade: UpgradeAmino;
  /** merkle proof of existence */
  proof: string;
  /** height at which the proof was retrieved */
  proof_height: HeightAmino;
}
export interface QueryUpgradeResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradeResponse";
  value: QueryUpgradeResponseAmino;
}
/** QueryChannelParamsRequest is the request type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsRequest {}
export interface QueryChannelParamsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelParamsRequest";
  value: Uint8Array;
}
/** QueryChannelParamsRequest is the request type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsRequestAmino {}
export interface QueryChannelParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelParamsRequest";
  value: QueryChannelParamsRequestAmino;
}
/** QueryChannelParamsResponse is the response type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryChannelParamsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelParamsResponse";
  value: Uint8Array;
}
/** QueryChannelParamsResponse is the response type for the Query/ChannelParams RPC method. */
export interface QueryChannelParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryChannelParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelParamsResponse";
  value: QueryChannelParamsResponseAmino;
}
function createBaseQueryChannelRequest(): QueryChannelRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryChannelRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
  aminoType: "cosmos-sdk/QueryChannelRequest",
  is(o: any): o is QueryChannelRequest {
    return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryChannelRequestAmino {
    return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryChannelRequest): QueryChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryChannelRequestAminoMsg): QueryChannelRequest {
    return QueryChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelRequest): QueryChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelRequest",
      value: QueryChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelRequestProtoMsg): QueryChannelRequest {
    return QueryChannelRequest.decode(message.value);
  },
  toProto(message: QueryChannelRequest): Uint8Array {
    return QueryChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelRequest): QueryChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
      value: QueryChannelRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryChannelResponse(): QueryChannelResponse {
  return {
    channel: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
  aminoType: "cosmos-sdk/QueryChannelResponse",
  is(o: any): o is QueryChannelResponse {
    return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelResponseAmino {
    return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelResponse): QueryChannelResponseAmino {
    const obj: any = {};
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelResponseAminoMsg): QueryChannelResponse {
    return QueryChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelResponse): QueryChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelResponse",
      value: QueryChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelResponseProtoMsg): QueryChannelResponse {
    return QueryChannelResponse.decode(message.value);
  },
  toProto(message: QueryChannelResponse): Uint8Array {
    return QueryChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelResponse): QueryChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
      value: QueryChannelResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Channel.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryChannelsRequest(): QueryChannelsRequest {
  return {
    pagination: undefined
  };
}
export const QueryChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
  aminoType: "cosmos-sdk/QueryChannelsRequest",
  is(o: any): o is QueryChannelsRequest {
    return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryChannelsRequestAmino {
    return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
  },
  encode(message: QueryChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();
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
  fromPartial(object: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChannelsRequestAminoMsg): QueryChannelsRequest {
    return QueryChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelsRequest): QueryChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelsRequest",
      value: QueryChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelsRequestProtoMsg): QueryChannelsRequest {
    return QueryChannelsRequest.decode(message.value);
  },
  toProto(message: QueryChannelsRequest): Uint8Array {
    return QueryChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelsRequest): QueryChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
      value: QueryChannelsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryChannelsResponse(): QueryChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
  aminoType: "cosmos-sdk/QueryChannelsResponse",
  is(o: any): o is QueryChannelsResponse {
    return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryChannelsResponseAmino {
    return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelsResponse>): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = message.channels;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelsResponseAminoMsg): QueryChannelsResponse {
    return QueryChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelsResponse): QueryChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelsResponse",
      value: QueryChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelsResponseProtoMsg): QueryChannelsResponse {
    return QueryChannelsResponse.decode(message.value);
  },
  toProto(message: QueryChannelsResponse): Uint8Array {
    return QueryChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelsResponse): QueryChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
      value: QueryChannelsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedChannel.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryConnectionChannelsRequest(): QueryConnectionChannelsRequest {
  return {
    connection: "",
    pagination: undefined
  };
}
export const QueryConnectionChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
  aminoType: "cosmos-sdk/QueryConnectionChannelsRequest",
  is(o: any): o is QueryConnectionChannelsRequest {
    return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
  },
  isAmino(o: any): o is QueryConnectionChannelsRequestAmino {
    return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
  },
  encode(message: QueryConnectionChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = object.connection;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino {
    const obj: any = {};
    obj.connection = message.connection === "" ? undefined : message.connection;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionChannelsRequestAminoMsg): QueryConnectionChannelsRequest {
    return QueryConnectionChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionChannelsRequestProtoMsg): QueryConnectionChannelsRequest {
    return QueryConnectionChannelsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionChannelsRequest): Uint8Array {
    return QueryConnectionChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryConnectionChannelsResponse(): QueryConnectionChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryConnectionChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
  aminoType: "cosmos-sdk/QueryConnectionChannelsResponse",
  is(o: any): o is QueryConnectionChannelsResponse {
    return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryConnectionChannelsResponseAmino {
    return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryConnectionChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = message.channels;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionChannelsResponseAminoMsg): QueryConnectionChannelsResponse {
    return QueryConnectionChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionChannelsResponseProtoMsg): QueryConnectionChannelsResponse {
    return QueryConnectionChannelsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionChannelsResponse): Uint8Array {
    return QueryConnectionChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedChannel.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryChannelClientStateRequest(): QueryChannelClientStateRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryChannelClientStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
  aminoType: "cosmos-sdk/QueryChannelClientStateRequest",
  is(o: any): o is QueryChannelClientStateRequest {
    return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryChannelClientStateRequestAmino {
    return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryChannelClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryChannelClientStateRequestAminoMsg): QueryChannelClientStateRequest {
    return QueryChannelClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelClientStateRequestProtoMsg): QueryChannelClientStateRequest {
    return QueryChannelClientStateRequest.decode(message.value);
  },
  toProto(message: QueryChannelClientStateRequest): Uint8Array {
    return QueryChannelClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryChannelClientStateResponse(): QueryChannelClientStateResponse {
  return {
    identified_client_state: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelClientStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
  aminoType: "cosmos-sdk/QueryChannelClientStateResponse",
  is(o: any): o is QueryChannelClientStateResponse {
    return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelClientStateResponseAmino {
    return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identified_client_state !== undefined) {
      IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
      message.identified_client_state = IdentifiedClientState.fromAmino(object.identified_client_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelClientStateResponseAminoMsg): QueryChannelClientStateResponse {
    return QueryChannelClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelClientStateResponseProtoMsg): QueryChannelClientStateResponse {
    return QueryChannelClientStateResponse.decode(message.value);
  },
  toProto(message: QueryChannelClientStateResponse): Uint8Array {
    return QueryChannelClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    IdentifiedClientState.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryChannelConsensusStateRequest(): QueryChannelConsensusStateRequest {
  return {
    port_id: "",
    channel_id: "",
    revision_number: BigInt(0),
    revision_height: BigInt(0)
  };
}
export const QueryChannelConsensusStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryChannelConsensusStateRequest",
  is(o: any): o is QueryChannelConsensusStateRequest {
    return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isAmino(o: any): o is QueryChannelConsensusStateRequestAmino {
    return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  encode(message: QueryChannelConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.revision_number !== BigInt(0)) {
      writer.uint32(24).uint64(message.revision_number);
    }
    if (message.revision_height !== BigInt(0)) {
      writer.uint32(32).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.revision_number = reader.uint64();
          break;
        case 4:
          message.revision_height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.revision_number !== undefined && object.revision_number !== null) {
      message.revision_number = BigInt(object.revision_number);
    }
    if (object.revision_height !== undefined && object.revision_height !== null) {
      message.revision_height = BigInt(object.revision_height);
    }
    return message;
  },
  toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.revision_number = message.revision_number !== BigInt(0) ? message.revision_number?.toString() : undefined;
    obj.revision_height = message.revision_height !== BigInt(0) ? message.revision_height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChannelConsensusStateRequestAminoMsg): QueryChannelConsensusStateRequest {
    return QueryChannelConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelConsensusStateRequestProtoMsg): QueryChannelConsensusStateRequest {
    return QueryChannelConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryChannelConsensusStateRequest): Uint8Array {
    return QueryChannelConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryChannelConsensusStateResponse(): QueryChannelConsensusStateResponse {
  return {
    consensus_state: undefined,
    client_id: "",
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelConsensusStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryChannelConsensusStateResponse",
  is(o: any): o is QueryChannelConsensusStateResponse {
    return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelConsensusStateResponseAmino {
    return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = object.client_id ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = Any.fromAmino(object.consensus_state);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelConsensusStateResponseAminoMsg): QueryChannelConsensusStateResponse {
    return QueryChannelConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelConsensusStateResponseProtoMsg): QueryChannelConsensusStateResponse {
    return QueryChannelConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryChannelConsensusStateResponse): Uint8Array {
    return QueryChannelConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketCommitmentRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
  is(o: any): o is QueryPacketCommitmentRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketCommitmentRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketCommitmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentRequestAminoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentRequestProtoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentRequest): Uint8Array {
    return QueryPacketCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketCommitmentResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
  is(o: any): o is QueryPacketCommitmentResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketCommitmentResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketCommitmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino {
    const obj: any = {};
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentResponseAminoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentResponseProtoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentResponse): Uint8Array {
    return QueryPacketCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined
  };
}
export const QueryPacketCommitmentsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
  is(o: any): o is QueryPacketCommitmentsRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryPacketCommitmentsRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryPacketCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsRequestAminoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsRequestProtoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsRequest): Uint8Array {
    return QueryPacketCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return {
    commitments: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryPacketCommitmentsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
  is(o: any): o is QueryPacketCommitmentsResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryPacketCommitmentsResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsResponseAminoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsResponseProtoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsResponse): Uint8Array {
    return QueryPacketCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PacketState.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketReceiptRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
  aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
  is(o: any): o is QueryPacketReceiptRequest {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketReceiptRequestAmino {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketReceiptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptRequestAminoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptRequestProtoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.decode(message.value);
  },
  toProto(message: QueryPacketReceiptRequest): Uint8Array {
    return QueryPacketReceiptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return {
    received: false,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketReceiptResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
  aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
  is(o: any): o is QueryPacketReceiptResponse {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketReceiptResponseAmino {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketReceiptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino {
    const obj: any = {};
    obj.received = message.received === false ? undefined : message.received;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptResponseAminoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptResponseProtoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.decode(message.value);
  },
  toProto(message: QueryPacketReceiptResponse): Uint8Array {
    return QueryPacketReceiptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketAcknowledgementRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
  is(o: any): o is QueryPacketAcknowledgementRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketAcknowledgementRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketAcknowledgementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementRequestAminoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementRequestProtoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementRequest): Uint8Array {
    return QueryPacketAcknowledgementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
  is(o: any): o is QueryPacketAcknowledgementResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino {
    const obj: any = {};
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementResponseAminoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementResponseProtoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementResponse): Uint8Array {
    return QueryPacketAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined,
    packet_commitment_sequences: []
  };
}
export const QueryPacketAcknowledgementsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
  is(o: any): o is QueryPacketAcknowledgementsRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  encode(message: QueryPacketAcknowledgementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
    } else {
      obj.packet_commitment_sequences = message.packet_commitment_sequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsRequestAminoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsRequestProtoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsRequest): Uint8Array {
    return QueryPacketAcknowledgementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryPacketAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
  is(o: any): o is QueryPacketAcknowledgementsResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Height.is(o.height));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketAcknowledgementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsResponseAminoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsResponseProtoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsResponse): Uint8Array {
    return QueryPacketAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PacketState.registerTypeUrl();
    PageResponse.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_commitment_sequences: []
  };
}
export const QueryUnreceivedPacketsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
  is(o: any): o is QueryUnreceivedPacketsRequest {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
    } else {
      obj.packet_commitment_sequences = message.packet_commitment_sequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsRequestAminoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsRequestProtoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsRequest): Uint8Array {
    return QueryUnreceivedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
export const QueryUnreceivedPacketsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
  is(o: any): o is QueryUnreceivedPacketsResponse {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsResponseAminoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsResponseProtoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsResponse): Uint8Array {
    return QueryUnreceivedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_ack_sequences: []
  };
}
export const QueryUnreceivedAcksRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
  is(o: any): o is QueryUnreceivedAcksRequest {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedAcksRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedAcksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    for (const v of message.packet_ack_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_ack_sequences.push(reader.uint64());
            }
          } else {
            message.packet_ack_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_ack_sequences = object.packet_ack_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    message.packet_ack_sequences = object.packet_ack_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    if (message.packet_ack_sequences) {
      obj.packet_ack_sequences = message.packet_ack_sequences.map(e => e.toString());
    } else {
      obj.packet_ack_sequences = message.packet_ack_sequences;
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksRequestAminoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksRequestProtoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksRequest): Uint8Array {
    return QueryUnreceivedAcksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
export const QueryUnreceivedAcksResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
  is(o: any): o is QueryUnreceivedAcksResponse {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedAcksResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedAcksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = message.sequences;
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksResponseAminoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksResponseProtoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksResponse): Uint8Array {
    return QueryUnreceivedAcksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryNextSequenceReceiveRequest(): QueryNextSequenceReceiveRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryNextSequenceReceiveRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
  aminoType: "cosmos-sdk/QueryNextSequenceReceiveRequest",
  is(o: any): o is QueryNextSequenceReceiveRequest {
    return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryNextSequenceReceiveRequestAmino {
    return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryNextSequenceReceiveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceReceiveRequestAminoMsg): QueryNextSequenceReceiveRequest {
    return QueryNextSequenceReceiveRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceReceiveRequestProtoMsg): QueryNextSequenceReceiveRequest {
    return QueryNextSequenceReceiveRequest.decode(message.value);
  },
  toProto(message: QueryNextSequenceReceiveRequest): Uint8Array {
    return QueryNextSequenceReceiveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNextSequenceReceiveResponse(): QueryNextSequenceReceiveResponse {
  return {
    next_sequence_receive: BigInt(0),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryNextSequenceReceiveResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
  aminoType: "cosmos-sdk/QueryNextSequenceReceiveResponse",
  is(o: any): o is QueryNextSequenceReceiveResponse {
    return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryNextSequenceReceiveResponseAmino {
    return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryNextSequenceReceiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.next_sequence_receive !== BigInt(0)) {
      writer.uint32(8).uint64(message.next_sequence_receive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_receive = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? BigInt(object.next_sequence_receive.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    if (object.next_sequence_receive !== undefined && object.next_sequence_receive !== null) {
      message.next_sequence_receive = BigInt(object.next_sequence_receive);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino {
    const obj: any = {};
    obj.next_sequence_receive = message.next_sequence_receive !== BigInt(0) ? message.next_sequence_receive?.toString() : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceReceiveResponseAminoMsg): QueryNextSequenceReceiveResponse {
    return QueryNextSequenceReceiveResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceReceiveResponseProtoMsg): QueryNextSequenceReceiveResponse {
    return QueryNextSequenceReceiveResponse.decode(message.value);
  },
  toProto(message: QueryNextSequenceReceiveResponse): Uint8Array {
    return QueryNextSequenceReceiveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryNextSequenceSendRequest(): QueryNextSequenceSendRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryNextSequenceSendRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
  aminoType: "cosmos-sdk/QueryNextSequenceSendRequest",
  is(o: any): o is QueryNextSequenceSendRequest {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryNextSequenceSendRequestAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryNextSequenceSendRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryNextSequenceSendRequestAmino): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendRequestAminoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendRequestProtoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendRequest): Uint8Array {
    return QueryNextSequenceSendRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNextSequenceSendResponse(): QueryNextSequenceSendResponse {
  return {
    next_sequence_send: BigInt(0),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryNextSequenceSendResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
  aminoType: "cosmos-sdk/QueryNextSequenceSendResponse",
  is(o: any): o is QueryNextSequenceSendResponse {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryNextSequenceSendResponseAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryNextSequenceSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.next_sequence_send !== BigInt(0)) {
      writer.uint32(8).uint64(message.next_sequence_send);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_send = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    message.next_sequence_send = object.next_sequence_send !== undefined && object.next_sequence_send !== null ? BigInt(object.next_sequence_send.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryNextSequenceSendResponseAmino): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    if (object.next_sequence_send !== undefined && object.next_sequence_send !== null) {
      message.next_sequence_send = BigInt(object.next_sequence_send);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAmino {
    const obj: any = {};
    obj.next_sequence_send = message.next_sequence_send !== BigInt(0) ? message.next_sequence_send?.toString() : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendResponseAminoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendResponseProtoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendResponse): Uint8Array {
    return QueryNextSequenceSendResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Height.registerTypeUrl();
  }
};
function createBaseQueryUpgradeErrorRequest(): QueryUpgradeErrorRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryUpgradeErrorRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUpgradeErrorRequest",
  aminoType: "cosmos-sdk/QueryUpgradeErrorRequest",
  is(o: any): o is QueryUpgradeErrorRequest {
    return o && (o.$typeUrl === QueryUpgradeErrorRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryUpgradeErrorRequestAmino {
    return o && (o.$typeUrl === QueryUpgradeErrorRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryUpgradeErrorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradeErrorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradeErrorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUpgradeErrorRequest>): QueryUpgradeErrorRequest {
    const message = createBaseQueryUpgradeErrorRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryUpgradeErrorRequestAmino): QueryUpgradeErrorRequest {
    const message = createBaseQueryUpgradeErrorRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryUpgradeErrorRequest): QueryUpgradeErrorRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradeErrorRequestAminoMsg): QueryUpgradeErrorRequest {
    return QueryUpgradeErrorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradeErrorRequest): QueryUpgradeErrorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradeErrorRequest",
      value: QueryUpgradeErrorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradeErrorRequestProtoMsg): QueryUpgradeErrorRequest {
    return QueryUpgradeErrorRequest.decode(message.value);
  },
  toProto(message: QueryUpgradeErrorRequest): Uint8Array {
    return QueryUpgradeErrorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradeErrorRequest): QueryUpgradeErrorRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUpgradeErrorRequest",
      value: QueryUpgradeErrorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUpgradeErrorResponse(): QueryUpgradeErrorResponse {
  return {
    error_receipt: ErrorReceipt.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryUpgradeErrorResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUpgradeErrorResponse",
  aminoType: "cosmos-sdk/QueryUpgradeErrorResponse",
  is(o: any): o is QueryUpgradeErrorResponse {
    return o && (o.$typeUrl === QueryUpgradeErrorResponse.typeUrl || ErrorReceipt.is(o.error_receipt) && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryUpgradeErrorResponseAmino {
    return o && (o.$typeUrl === QueryUpgradeErrorResponse.typeUrl || ErrorReceipt.isAmino(o.error_receipt) && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryUpgradeErrorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error_receipt !== undefined) {
      ErrorReceipt.encode(message.error_receipt, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradeErrorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradeErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error_receipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUpgradeErrorResponse>): QueryUpgradeErrorResponse {
    const message = createBaseQueryUpgradeErrorResponse();
    message.error_receipt = object.error_receipt !== undefined && object.error_receipt !== null ? ErrorReceipt.fromPartial(object.error_receipt) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryUpgradeErrorResponseAmino): QueryUpgradeErrorResponse {
    const message = createBaseQueryUpgradeErrorResponse();
    if (object.error_receipt !== undefined && object.error_receipt !== null) {
      message.error_receipt = ErrorReceipt.fromAmino(object.error_receipt);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryUpgradeErrorResponse): QueryUpgradeErrorResponseAmino {
    const obj: any = {};
    obj.error_receipt = message.error_receipt ? ErrorReceipt.toAmino(message.error_receipt) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradeErrorResponseAminoMsg): QueryUpgradeErrorResponse {
    return QueryUpgradeErrorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradeErrorResponse): QueryUpgradeErrorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradeErrorResponse",
      value: QueryUpgradeErrorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradeErrorResponseProtoMsg): QueryUpgradeErrorResponse {
    return QueryUpgradeErrorResponse.decode(message.value);
  },
  toProto(message: QueryUpgradeErrorResponse): Uint8Array {
    return QueryUpgradeErrorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradeErrorResponse): QueryUpgradeErrorResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUpgradeErrorResponse",
      value: QueryUpgradeErrorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ErrorReceipt.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryUpgradeRequest(): QueryUpgradeRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryUpgradeRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUpgradeRequest",
  aminoType: "cosmos-sdk/QueryUpgradeRequest",
  is(o: any): o is QueryUpgradeRequest {
    return o && (o.$typeUrl === QueryUpgradeRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryUpgradeRequestAmino {
    return o && (o.$typeUrl === QueryUpgradeRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryUpgradeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUpgradeRequest>): QueryUpgradeRequest {
    const message = createBaseQueryUpgradeRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryUpgradeRequestAmino): QueryUpgradeRequest {
    const message = createBaseQueryUpgradeRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryUpgradeRequest): QueryUpgradeRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id === "" ? undefined : message.port_id;
    obj.channel_id = message.channel_id === "" ? undefined : message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradeRequestAminoMsg): QueryUpgradeRequest {
    return QueryUpgradeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradeRequest): QueryUpgradeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradeRequest",
      value: QueryUpgradeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradeRequestProtoMsg): QueryUpgradeRequest {
    return QueryUpgradeRequest.decode(message.value);
  },
  toProto(message: QueryUpgradeRequest): Uint8Array {
    return QueryUpgradeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradeRequest): QueryUpgradeRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUpgradeRequest",
      value: QueryUpgradeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryUpgradeResponse(): QueryUpgradeResponse {
  return {
    upgrade: Upgrade.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryUpgradeResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUpgradeResponse",
  aminoType: "cosmos-sdk/QueryUpgradeResponse",
  is(o: any): o is QueryUpgradeResponse {
    return o && (o.$typeUrl === QueryUpgradeResponse.typeUrl || Upgrade.is(o.upgrade) && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isAmino(o: any): o is QueryUpgradeResponseAmino {
    return o && (o.$typeUrl === QueryUpgradeResponse.typeUrl || Upgrade.isAmino(o.upgrade) && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUpgradeResponse>): QueryUpgradeResponse {
    const message = createBaseQueryUpgradeResponse();
    message.upgrade = object.upgrade !== undefined && object.upgrade !== null ? Upgrade.fromPartial(object.upgrade) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryUpgradeResponseAmino): QueryUpgradeResponse {
    const message = createBaseQueryUpgradeResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryUpgradeResponse): QueryUpgradeResponseAmino {
    const obj: any = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradeResponseAminoMsg): QueryUpgradeResponse {
    return QueryUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradeResponse): QueryUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradeResponse",
      value: QueryUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradeResponseProtoMsg): QueryUpgradeResponse {
    return QueryUpgradeResponse.decode(message.value);
  },
  toProto(message: QueryUpgradeResponse): Uint8Array {
    return QueryUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradeResponse): QueryUpgradeResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUpgradeResponse",
      value: QueryUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Upgrade.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseQueryChannelParamsRequest(): QueryChannelParamsRequest {
  return {};
}
export const QueryChannelParamsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelParamsRequest",
  aminoType: "cosmos-sdk/QueryChannelParamsRequest",
  is(o: any): o is QueryChannelParamsRequest {
    return o && o.$typeUrl === QueryChannelParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryChannelParamsRequestAmino {
    return o && o.$typeUrl === QueryChannelParamsRequest.typeUrl;
  },
  encode(_: QueryChannelParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelParamsRequest();
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
  fromPartial(_: DeepPartial<QueryChannelParamsRequest>): QueryChannelParamsRequest {
    const message = createBaseQueryChannelParamsRequest();
    return message;
  },
  fromAmino(_: QueryChannelParamsRequestAmino): QueryChannelParamsRequest {
    const message = createBaseQueryChannelParamsRequest();
    return message;
  },
  toAmino(_: QueryChannelParamsRequest): QueryChannelParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelParamsRequestAminoMsg): QueryChannelParamsRequest {
    return QueryChannelParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelParamsRequest): QueryChannelParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelParamsRequest",
      value: QueryChannelParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelParamsRequestProtoMsg): QueryChannelParamsRequest {
    return QueryChannelParamsRequest.decode(message.value);
  },
  toProto(message: QueryChannelParamsRequest): Uint8Array {
    return QueryChannelParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelParamsRequest): QueryChannelParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelParamsRequest",
      value: QueryChannelParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryChannelParamsResponse(): QueryChannelParamsResponse {
  return {
    params: undefined
  };
}
export const QueryChannelParamsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelParamsResponse",
  aminoType: "cosmos-sdk/QueryChannelParamsResponse",
  is(o: any): o is QueryChannelParamsResponse {
    return o && o.$typeUrl === QueryChannelParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryChannelParamsResponseAmino {
    return o && o.$typeUrl === QueryChannelParamsResponse.typeUrl;
  },
  encode(message: QueryChannelParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelParamsResponse();
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
  fromPartial(object: DeepPartial<QueryChannelParamsResponse>): QueryChannelParamsResponse {
    const message = createBaseQueryChannelParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelParamsResponseAmino): QueryChannelParamsResponse {
    const message = createBaseQueryChannelParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryChannelParamsResponse): QueryChannelParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChannelParamsResponseAminoMsg): QueryChannelParamsResponse {
    return QueryChannelParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelParamsResponse): QueryChannelParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelParamsResponse",
      value: QueryChannelParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelParamsResponseProtoMsg): QueryChannelParamsResponse {
    return QueryChannelParamsResponse.decode(message.value);
  },
  toProto(message: QueryChannelParamsResponse): Uint8Array {
    return QueryChannelParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelParamsResponse): QueryChannelParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelParamsResponse",
      value: QueryChannelParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
  }
};