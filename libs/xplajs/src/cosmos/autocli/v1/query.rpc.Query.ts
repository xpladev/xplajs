import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions = async (request: AppOptionsRequest = {}): Promise<AppOptionsResponse> => {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
    return promise.then(data => AppOptionsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    AppOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse> {
      return queryService.AppOptions(request);
    }
  };
};