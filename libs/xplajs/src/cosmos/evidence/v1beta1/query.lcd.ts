import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryEvidenceRequest, QueryEvidenceResponse, QueryAllEvidenceRequest, QueryAllEvidenceResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Evidence queries evidence based on evidence hash. */
  evidence = async (params: QueryEvidenceRequest): Promise<QueryEvidenceResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.evidence_hash !== "undefined") {
      options.params.evidence_hash = params.evidence_hash;
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence/${params.hash}`;
    return await this.req.get<QueryEvidenceResponse>(endpoint, options);
  };
  /* AllEvidence queries all evidence. */
  allEvidence = async (params: QueryAllEvidenceRequest = {
    pagination: undefined
  }): Promise<QueryAllEvidenceResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/evidence/v1beta1/evidence`;
    return await this.req.get<QueryAllEvidenceResponse>(endpoint, options);
  };
}