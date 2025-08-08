import { LCDClient } from "@cosmology/lcd";
import { QueryOngoingProposalsRequest, QueryOngoingProposalsResponse, QueryOngoingProposalRequest, QueryOngoingProposalResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Query all ongoing burn proposals */
  ongoingProposals = async (_params: QueryOngoingProposalsRequest = {}): Promise<QueryOngoingProposalsResponse> => {
    const endpoint = `xpla/burn/v1beta1/ongoing_proposals`;
    return await this.req.get<QueryOngoingProposalsResponse>(endpoint);
  };
  /* Query a specific ongoing burn proposal by ID */
  ongoingProposal = async (params: QueryOngoingProposalRequest): Promise<QueryOngoingProposalResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.proposalId !== "undefined") {
      options.params.proposal_id = params.proposalId;
    }
    const endpoint = `xpla/burn/v1beta1/ongoing_proposal`;
    return await this.req.get<QueryOngoingProposalResponse>(endpoint, options);
  };
}