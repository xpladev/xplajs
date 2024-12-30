import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
export const createGetIncentivizedPackets = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  encode: QueryIncentivizedPacketsRequest.encode,
  decode: QueryIncentivizedPacketsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPackets",
  clientResolver
});
export const useGetIncentivizedPackets = buildUseQuery<QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse>({
  builderQueryFn: createGetIncentivizedPackets,
  queryKeyPrefix: "IncentivizedPacketsQuery"
});
export const createGetIncentivizedPacket = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  encode: QueryIncentivizedPacketRequest.encode,
  decode: QueryIncentivizedPacketResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacket",
  clientResolver
});
export const useGetIncentivizedPacket = buildUseQuery<QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse>({
  builderQueryFn: createGetIncentivizedPacket,
  queryKeyPrefix: "IncentivizedPacketQuery"
});
export const createGetIncentivizedPacketsForChannel = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  encode: QueryIncentivizedPacketsForChannelRequest.encode,
  decode: QueryIncentivizedPacketsForChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "IncentivizedPacketsForChannel",
  clientResolver
});
export const useGetIncentivizedPacketsForChannel = buildUseQuery<QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse>({
  builderQueryFn: createGetIncentivizedPacketsForChannel,
  queryKeyPrefix: "IncentivizedPacketsForChannelQuery"
});
export const createGetTotalRecvFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  encode: QueryTotalRecvFeesRequest.encode,
  decode: QueryTotalRecvFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalRecvFees",
  clientResolver
});
export const useGetTotalRecvFees = buildUseQuery<QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse>({
  builderQueryFn: createGetTotalRecvFees,
  queryKeyPrefix: "TotalRecvFeesQuery"
});
export const createGetTotalAckFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  encode: QueryTotalAckFeesRequest.encode,
  decode: QueryTotalAckFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalAckFees",
  clientResolver
});
export const useGetTotalAckFees = buildUseQuery<QueryTotalAckFeesRequest, QueryTotalAckFeesResponse>({
  builderQueryFn: createGetTotalAckFees,
  queryKeyPrefix: "TotalAckFeesQuery"
});
export const createGetTotalTimeoutFees = (clientResolver?: RpcResolver) => buildQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  encode: QueryTotalTimeoutFeesRequest.encode,
  decode: QueryTotalTimeoutFeesResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "TotalTimeoutFees",
  clientResolver
});
export const useGetTotalTimeoutFees = buildUseQuery<QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse>({
  builderQueryFn: createGetTotalTimeoutFees,
  queryKeyPrefix: "TotalTimeoutFeesQuery"
});
export const createGetPayee = (clientResolver?: RpcResolver) => buildQuery<QueryPayeeRequest, QueryPayeeResponse>({
  encode: QueryPayeeRequest.encode,
  decode: QueryPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "Payee",
  clientResolver
});
export const useGetPayee = buildUseQuery<QueryPayeeRequest, QueryPayeeResponse>({
  builderQueryFn: createGetPayee,
  queryKeyPrefix: "PayeeQuery"
});
export const createGetCounterpartyPayee = (clientResolver?: RpcResolver) => buildQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  encode: QueryCounterpartyPayeeRequest.encode,
  decode: QueryCounterpartyPayeeResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "CounterpartyPayee",
  clientResolver
});
export const useGetCounterpartyPayee = buildUseQuery<QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse>({
  builderQueryFn: createGetCounterpartyPayee,
  queryKeyPrefix: "CounterpartyPayeeQuery"
});
export const createGetFeeEnabledChannels = (clientResolver?: RpcResolver) => buildQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  encode: QueryFeeEnabledChannelsRequest.encode,
  decode: QueryFeeEnabledChannelsResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannels",
  clientResolver
});
export const useGetFeeEnabledChannels = buildUseQuery<QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse>({
  builderQueryFn: createGetFeeEnabledChannels,
  queryKeyPrefix: "FeeEnabledChannelsQuery"
});
export const createGetFeeEnabledChannel = (clientResolver?: RpcResolver) => buildQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  encode: QueryFeeEnabledChannelRequest.encode,
  decode: QueryFeeEnabledChannelResponse.decode,
  service: "ibc.applications.fee.v1.Query",
  method: "FeeEnabledChannel",
  clientResolver
});
export const useGetFeeEnabledChannel = buildUseQuery<QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse>({
  builderQueryFn: createGetFeeEnabledChannel,
  queryKeyPrefix: "FeeEnabledChannelQuery"
});