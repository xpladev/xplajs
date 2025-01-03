import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryVolunteerValidatorsRequest, QueryVolunteerValidatorsResponse } from "./query";
/** Query defines the gRPC querier service for volunteer module. */
export interface Query {
  /** VolunteerValidators */
  volunteerValidators(request?: QueryVolunteerValidatorsRequest): Promise<QueryVolunteerValidatorsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* VolunteerValidators */
  volunteerValidators = async (request: QueryVolunteerValidatorsRequest = {}): Promise<QueryVolunteerValidatorsResponse> => {
    const data = QueryVolunteerValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("xpla.volunteer.v1beta1.Query", "VolunteerValidators", data);
    return promise.then(data => QueryVolunteerValidatorsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    volunteerValidators(request?: QueryVolunteerValidatorsRequest): Promise<QueryVolunteerValidatorsResponse> {
      return queryService.volunteerValidators(request);
    }
  };
};