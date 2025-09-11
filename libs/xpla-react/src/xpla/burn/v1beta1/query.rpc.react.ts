import { buildUseQuery } from "../../../react-query";
import { QueryOngoingProposalsRequest, QueryOngoingProposalsResponse, QueryOngoingProposalRequest, QueryOngoingProposalResponse } from "./query";
import { getOngoingProposals, getOngoingProposal } from "./query.rpc.func";
/**
 * Query all ongoing burn proposals
 * @name useGetOngoingProposals
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.OngoingProposals
 */
export const useGetOngoingProposals = buildUseQuery<QueryOngoingProposalsRequest, QueryOngoingProposalsResponse>({
  builderQueryFn: getOngoingProposals,
  queryKeyPrefix: "OngoingProposalsQuery"
});
/**
 * Query a specific ongoing burn proposal by ID
 * @name useGetOngoingProposal
 * @package xpla.burn.v1beta1
 * @see proto service: xpla.burn.v1beta1.OngoingProposal
 */
export const useGetOngoingProposal = buildUseQuery<QueryOngoingProposalRequest, QueryOngoingProposalResponse>({
  builderQueryFn: getOngoingProposal,
  queryKeyPrefix: "OngoingProposalQuery"
});