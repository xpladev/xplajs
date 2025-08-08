import { buildQuery } from "../../../helper-func-types";
import { QueryOngoingProposalsRequest, QueryOngoingProposalsResponse, QueryOngoingProposalRequest, QueryOngoingProposalResponse } from "./query";
/**
 * Query all ongoing burn proposals
 * @name getOngoingProposals
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.OngoingProposals
 */
export const getOngoingProposals = buildQuery<QueryOngoingProposalsRequest, QueryOngoingProposalsResponse>({
  encode: QueryOngoingProposalsRequest.encode,
  decode: QueryOngoingProposalsResponse.decode,
  service: "xpla.burn.v1beta1.Query",
  method: "OngoingProposals",
  deps: [QueryOngoingProposalsRequest, QueryOngoingProposalsResponse]
});
/**
 * Query a specific ongoing burn proposal by ID
 * @name getOngoingProposal
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.OngoingProposal
 */
export const getOngoingProposal = buildQuery<QueryOngoingProposalRequest, QueryOngoingProposalResponse>({
  encode: QueryOngoingProposalRequest.encode,
  decode: QueryOngoingProposalResponse.decode,
  service: "xpla.burn.v1beta1.Query",
  method: "OngoingProposal",
  deps: [QueryOngoingProposalRequest, QueryOngoingProposalResponse]
});