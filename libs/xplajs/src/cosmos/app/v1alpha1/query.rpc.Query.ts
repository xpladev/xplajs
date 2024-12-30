import { Config } from "./config";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query is the app module query service. */
export interface Query {
  /** Config returns the current app config. */
  Config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Config returns the current app config. */
  Config = async (request: QueryConfigRequest = {}): Promise<QueryConfigResponse> => {
    const data = QueryConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
    return promise.then(data => QueryConfigResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Config(request?: QueryConfigRequest): Promise<QueryConfigResponse> {
      return queryService.Config(request);
    }
  };
};