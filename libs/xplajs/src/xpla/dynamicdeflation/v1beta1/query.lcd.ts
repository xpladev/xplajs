import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentPeriodRequest, QueryCurrentPeriodResponse, QueryStatusRequest, QueryStatusResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the candidate parameters for the next period. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `xpla/dynamicdeflation/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* CurrentPeriod queries the active period, if one exists. */
  currentPeriod = async (_params: QueryCurrentPeriodRequest = {}): Promise<QueryCurrentPeriodResponse> => {
    const endpoint = `xpla/dynamicdeflation/v1beta1/current_period`;
    return await this.req.get<QueryCurrentPeriodResponse>(endpoint);
  };
  /* Status compares the Dynamic Deflation Pool balance with the allocated
   amount. */
  status = async (_params: QueryStatusRequest = {}): Promise<QueryStatusResponse> => {
    const endpoint = `xpla/dynamicdeflation/v1beta1/status`;
    return await this.req.get<QueryStatusResponse>(endpoint);
  };
}