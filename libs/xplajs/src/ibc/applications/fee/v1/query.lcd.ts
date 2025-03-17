import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* IncentivizedPackets returns all incentivized packets and their associated fees */
  incentivizedPackets = async (params: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.query_height !== "undefined") {
      options.params.query_height = params.query_height;
    }
    const endpoint = `ibc/apps/fee/v1/incentivized_packets`;
    return await this.req.get<QueryIncentivizedPacketsResponse>(endpoint, options);
  };
  /* IncentivizedPacket returns all packet fees for a packet given its identifier */
  incentivizedPacket = async (params: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.packet_id !== "undefined") {
      options.params.packet_id = params.packet_id;
    }
    if (typeof params?.query_height !== "undefined") {
      options.params.query_height = params.query_height;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/incentivized_packet`;
    return await this.req.get<QueryIncentivizedPacketResponse>(endpoint, options);
  };
  /* Gets all incentivized packets for a specific channel */
  incentivizedPacketsForChannel = async (params: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.query_height !== "undefined") {
      options.params.query_height = params.query_height;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.channel_id}/ports/${params.port_id}/incentivized_packets`;
    return await this.req.get<QueryIncentivizedPacketsForChannelResponse>(endpoint, options);
  };
  /* TotalRecvFees returns the total receive fees for a packet given its identifier */
  totalRecvFees = async (params: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.packet_id !== "undefined") {
      options.params.packet_id = params.packet_id;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_recv_fees`;
    return await this.req.get<QueryTotalRecvFeesResponse>(endpoint, options);
  };
  /* TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  totalAckFees = async (params: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.packet_id !== "undefined") {
      options.params.packet_id = params.packet_id;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_ack_fees`;
    return await this.req.get<QueryTotalAckFeesResponse>(endpoint, options);
  };
  /* TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  totalTimeoutFees = async (params: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.packet_id !== "undefined") {
      options.params.packet_id = params.packet_id;
    }
    const endpoint = `ibc/apps/fee/v1/channels/${params.packet_id.channel_id}/ports/${params.packet_id.port_id}/sequences/${params.packet_id.sequence}/total_timeout_fees`;
    return await this.req.get<QueryTotalTimeoutFeesResponse>(endpoint, options);
  };
  /* Payee returns the registered payee address for a specific channel given the relayer address */
  payee = async (params: QueryPayeeRequest): Promise<QueryPayeeResponse> => {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channel_id}/relayers/${params.relayer}/payee`;
    return await this.req.get<QueryPayeeResponse>(endpoint);
  };
  /* CounterpartyPayee returns the registered counterparty payee for forward relaying */
  counterpartyPayee = async (params: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> => {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channel_id}/relayers/${params.relayer}/counterparty_payee`;
    return await this.req.get<QueryCounterpartyPayeeResponse>(endpoint);
  };
  /* FeeEnabledChannels returns a list of all fee enabled channels */
  feeEnabledChannels = async (params: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    if (typeof params?.query_height !== "undefined") {
      options.params.query_height = params.query_height;
    }
    const endpoint = `ibc/apps/fee/v1/fee_enabled`;
    return await this.req.get<QueryFeeEnabledChannelsResponse>(endpoint, options);
  };
  /* FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  feeEnabledChannel = async (params: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> => {
    const endpoint = `ibc/apps/fee/v1/channels/${params.channel_id}/ports/${params.port_id}/fee_enabled`;
    return await this.req.get<QueryFeeEnabledChannelResponse>(endpoint);
  };
}