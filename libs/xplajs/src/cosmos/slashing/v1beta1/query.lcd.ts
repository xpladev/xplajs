import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of slashing module */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* SigningInfo queries the signing info of given cons address */
  signingInfo = async (params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse> => {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.cons_address}`;
    return await this.req.get<QuerySigningInfoResponse>(endpoint);
  };
  /* SigningInfos queries signing info of all validators */
  signingInfos = async (params: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.req.get<QuerySigningInfosResponse>(endpoint, options);
  };
}