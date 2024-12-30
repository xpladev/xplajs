import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Allowance returns granted allwance to the grantee by the granter. */
  allowance = async (params: QueryAllowanceRequest): Promise<QueryAllowanceResponse> => {
    const endpoint = `cosmos/feegrant/v1beta1/allowance/${params.granter}/${params.grantee}`;
    return await this.req.get<QueryAllowanceResponse>(endpoint);
  };
  /* Allowances returns all the grants for the given grantee address. */
  allowances = async (params: QueryAllowancesRequest): Promise<QueryAllowancesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/allowances/${params.grantee}`;
    return await this.req.get<QueryAllowancesResponse>(endpoint, options);
  };
  /* AllowancesByGranter returns all the grants given by an address
  
   Since: cosmos-sdk 0.46 */
  allowancesByGranter = async (params: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/feegrant/v1beta1/issued/${params.granter}`;
    return await this.req.get<QueryAllowancesByGranterResponse>(endpoint, options);
  };
}