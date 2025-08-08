import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryOngoingProposalsRequest, QueryOngoingProposalsResponse, QueryOngoingProposalRequest, QueryOngoingProposalResponse } from "./query";
/** Query defines the gRPC querier service for burn module. */
export interface Query {
  /** Query all ongoing burn proposals */
  ongoingProposals(request?: QueryOngoingProposalsRequest): Promise<QueryOngoingProposalsResponse>;
  /** Query a specific ongoing burn proposal by ID */
  ongoingProposal(request: QueryOngoingProposalRequest): Promise<QueryOngoingProposalResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Query all ongoing burn proposals */
  ongoingProposals = async (request: QueryOngoingProposalsRequest = {}): Promise<QueryOngoingProposalsResponse> => {
    const data = QueryOngoingProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.burn.v1beta1.Query", "OngoingProposals", data);
    return promise.then(data => QueryOngoingProposalsResponse.decode(new BinaryReader(data)));
  };
  /* Query a specific ongoing burn proposal by ID */
  ongoingProposal = async (request: QueryOngoingProposalRequest): Promise<QueryOngoingProposalResponse> => {
    const data = QueryOngoingProposalRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.burn.v1beta1.Query", "OngoingProposal", data);
    return promise.then(data => QueryOngoingProposalResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    ongoingProposals(request?: QueryOngoingProposalsRequest): Promise<QueryOngoingProposalsResponse> {
      return queryService.ongoingProposals(request);
    },
    ongoingProposal(request: QueryOngoingProposalRequest): Promise<QueryOngoingProposalResponse> {
      return queryService.ongoingProposal(request);
    }
  };
};