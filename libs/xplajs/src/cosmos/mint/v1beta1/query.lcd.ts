import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns the total set of minting parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* Inflation returns the current minting inflation value. */
  inflation = async (_params: QueryInflationRequest = {}): Promise<QueryInflationResponse> => {
    const endpoint = `cosmos/mint/v1beta1/inflation`;
    return await this.req.get<QueryInflationResponse>(endpoint);
  };
  /* AnnualProvisions current minting annual provisions value. */
  annualProvisions = async (_params: QueryAnnualProvisionsRequest = {}): Promise<QueryAnnualProvisionsResponse> => {
    const endpoint = `cosmos/mint/v1beta1/annual_provisions`;
    return await this.req.get<QueryAnnualProvisionsResponse>(endpoint);
  };
}