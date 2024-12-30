import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries params of the reward module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `xpla/reward/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Pool queries the reward module pool coins. */
  pool = async (_params: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
    const endpoint = `xpla/reward/v1beta1/pool`;
    return await this.req.get<QueryPoolResponse>(endpoint);
  };
}