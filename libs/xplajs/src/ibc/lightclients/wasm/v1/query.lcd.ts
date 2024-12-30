import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Get all Wasm checksums */
  checksums = async (params: QueryChecksumsRequest = {
    pagination: undefined
  }): Promise<QueryChecksumsResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ibc/lightclients/wasm/v1/checksums`;
    return await this.req.get<QueryChecksumsResponse>(endpoint, options);
  };
  /* Get Wasm code for given checksum */
  code = async (params: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const endpoint = `ibc/lightclients/wasm/v1/checksums/${params.checksum}/code`;
    return await this.req.get<QueryCodeResponse>(endpoint);
  };
}