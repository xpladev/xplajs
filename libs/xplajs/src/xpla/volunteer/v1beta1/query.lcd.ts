import { LCDClient } from "@cosmology/lcd";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* VolunteerValidators */
  volunteerValidators = async (_params: QueryVolunteerValidatorsRequest = {}): Promise<QueryVolunteerValidatorsResponse> => {
    const endpoint = `xpla/volunteer/v1beta1/validators`;
    return await this.req.get<QueryVolunteerValidatorsResponse>(endpoint);
  };
}