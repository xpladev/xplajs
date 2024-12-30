import { FeeEnabledChannel } from "./genesis";
import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
  /** IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
  /** IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
  /** Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
  /** TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
  /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
  /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
  /** Payee returns the registered payee address for a specific channel given the relayer address */
  Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
  /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
  CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
  /** FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
  /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* IncentivizedPackets returns all incentivized packets and their associated fees */
  IncentivizedPackets = async (request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> => {
    const data = QueryIncentivizedPacketsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
    return promise.then(data => QueryIncentivizedPacketsResponse.decode(new BinaryReader(data)));
  };
  /* IncentivizedPacket returns all packet fees for a packet given its identifier */
  IncentivizedPacket = async (request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> => {
    const data = QueryIncentivizedPacketRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
    return promise.then(data => QueryIncentivizedPacketResponse.decode(new BinaryReader(data)));
  };
  /* Gets all incentivized packets for a specific channel */
  IncentivizedPacketsForChannel = async (request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse> => {
    const data = QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
    return promise.then(data => QueryIncentivizedPacketsForChannelResponse.decode(new BinaryReader(data)));
  };
  /* TotalRecvFees returns the total receive fees for a packet given its identifier */
  TotalRecvFees = async (request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> => {
    const data = QueryTotalRecvFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
    return promise.then(data => QueryTotalRecvFeesResponse.decode(new BinaryReader(data)));
  };
  /* TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
  TotalAckFees = async (request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> => {
    const data = QueryTotalAckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
    return promise.then(data => QueryTotalAckFeesResponse.decode(new BinaryReader(data)));
  };
  /* TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
  TotalTimeoutFees = async (request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> => {
    const data = QueryTotalTimeoutFeesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
    return promise.then(data => QueryTotalTimeoutFeesResponse.decode(new BinaryReader(data)));
  };
  /* Payee returns the registered payee address for a specific channel given the relayer address */
  Payee = async (request: QueryPayeeRequest): Promise<QueryPayeeResponse> => {
    const data = QueryPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
    return promise.then(data => QueryPayeeResponse.decode(new BinaryReader(data)));
  };
  /* CounterpartyPayee returns the registered counterparty payee for forward relaying */
  CounterpartyPayee = async (request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> => {
    const data = QueryCounterpartyPayeeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
    return promise.then(data => QueryCounterpartyPayeeResponse.decode(new BinaryReader(data)));
  };
  /* FeeEnabledChannels returns a list of all fee enabled channels */
  FeeEnabledChannels = async (request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> => {
    const data = QueryFeeEnabledChannelsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
    return promise.then(data => QueryFeeEnabledChannelsResponse.decode(new BinaryReader(data)));
  };
  /* FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
  FeeEnabledChannel = async (request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> => {
    const data = QueryFeeEnabledChannelRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
    return promise.then(data => QueryFeeEnabledChannelResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse> {
      return queryService.IncentivizedPackets(request);
    },
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse> {
      return queryService.IncentivizedPacket(request);
    },
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse> {
      return queryService.IncentivizedPacketsForChannel(request);
    },
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse> {
      return queryService.TotalRecvFees(request);
    },
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse> {
      return queryService.TotalAckFees(request);
    },
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse> {
      return queryService.TotalTimeoutFees(request);
    },
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse> {
      return queryService.Payee(request);
    },
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse> {
      return queryService.CounterpartyPayee(request);
    },
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse> {
      return queryService.FeeEnabledChannels(request);
    },
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse> {
      return queryService.FeeEnabledChannel(request);
    }
  };
};