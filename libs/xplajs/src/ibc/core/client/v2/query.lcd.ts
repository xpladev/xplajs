import { LCDClient } from "@cosmology/lcd";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse, QueryConfigRequest, QueryConfigResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* CounterpartyInfo queries an IBC light counter party info. */
  counterpartyInfo = async (params: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse> => {
    const endpoint = `ibc/core/client/v2/counterparty_info/${params.clientId}`;
    return await this.req.get<QueryCounterpartyInfoResponse>(endpoint);
  };
  /* Config queries the IBC client v2 configuration for a given client. */
  config = async (params: QueryConfigRequest): Promise<QueryConfigResponse> => {
    const endpoint = `ibc/core/client/v2/config/${params.clientId}`;
    return await this.req.get<QueryConfigResponse>(endpoint);
  };
}