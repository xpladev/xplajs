import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Account returns account permissions. */
  account = async (params: QueryAccountRequest): Promise<AccountResponse> => {
    const endpoint = `cosmos/circuit/v1/accounts/${params.address}`;
    return await this.req.get<AccountResponse>(endpoint);
  };
  /* Account returns account permissions. */
  accounts = async (params: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<AccountsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/circuit/v1/accounts`;
    return await this.req.get<AccountsResponse>(endpoint, options);
  };
  /* DisabledList returns a list of disabled message urls */
  disabledList = async (_params: QueryDisabledListRequest = {}): Promise<DisabledListResponse> => {
    const endpoint = `cosmos/circuit/v1/disable_list`;
    return await this.req.get<DisabledListResponse>(endpoint);
  };
}