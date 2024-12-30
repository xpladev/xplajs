import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GroupInfo queries group info based on group id. */
  groupInfo = async (params: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> => {
    const endpoint = `cosmos/group/v1/group_info/${params.groupId}`;
    return await this.req.get<QueryGroupInfoResponse>(endpoint);
  };
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo = async (params: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> => {
    const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
    return await this.req.get<QueryGroupPolicyInfoResponse>(endpoint);
  };
  /* GroupMembers queries members of a group by group id. */
  groupMembers = async (params: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_members/${params.groupId}`;
    return await this.req.get<QueryGroupMembersResponse>(endpoint, options);
  };
  /* GroupsByAdmin queries groups by admin address. */
  groupsByAdmin = async (params: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupsByAdminResponse>(endpoint, options);
  };
  /* GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup = async (params: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_group/${params.groupId}`;
    return await this.req.get<QueryGroupPoliciesByGroupResponse>(endpoint, options);
  };
  /* GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin = async (params: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
    return await this.req.get<QueryGroupPoliciesByAdminResponse>(endpoint, options);
  };
  /* Proposal queries a proposal based on proposal id. */
  proposal = async (params: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
    return await this.req.get<QueryProposalResponse>(endpoint);
  };
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy = async (params: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
    return await this.req.get<QueryProposalsByGroupPolicyResponse>(endpoint, options);
  };
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter = async (params: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> => {
    const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposalId}/${params.voter}`;
    return await this.req.get<QueryVoteByProposalVoterResponse>(endpoint);
  };
  /* VotesByProposal queries a vote by proposal id. */
  votesByProposal = async (params: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposalId}`;
    return await this.req.get<QueryVotesByProposalResponse>(endpoint, options);
  };
  /* VotesByVoter queries a vote by voter. */
  votesByVoter = async (params: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
    return await this.req.get<QueryVotesByVoterResponse>(endpoint, options);
  };
  /* GroupsByMember queries groups by member address. */
  groupsByMember = async (params: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
    return await this.req.get<QueryGroupsByMemberResponse>(endpoint, options);
  };
  /* TallyResult returns the tally result of a proposal. If the proposal is
   still in voting period, then this query computes the current tally state,
   which might not be final. On the other hand, if the proposal is final,
   then it simply returns the `final_tally_result` state stored in the
   proposal itself. */
  tallyResult = async (params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const endpoint = `cosmos/group/v1/proposals/${params.proposalId}/tally`;
    return await this.req.get<QueryTallyResultResponse>(endpoint);
  };
  /* Groups queries all groups in state.
  
   Since: cosmos-sdk 0.47.1 */
  groups = async (params: QueryGroupsRequest = {
    pagination: undefined
  }): Promise<QueryGroupsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/group/v1/groups`;
    return await this.req.get<QueryGroupsResponse>(endpoint, options);
  };
}