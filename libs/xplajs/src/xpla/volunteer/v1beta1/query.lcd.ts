import { setPaginationParams } from "../../../helpers";
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
  volunteerValidators = async (params: QueryVolunteerValidatorsRequest = {
    pagination: undefined
  }): Promise<QueryVolunteerValidatorsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `xpla/volunteer/v1beta1/validators`;
    return await this.req.get<QueryVolunteerValidatorsResponse>(endpoint, options);
  };
}