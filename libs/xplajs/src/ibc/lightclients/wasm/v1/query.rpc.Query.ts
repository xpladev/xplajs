import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
/** Query service for wasm module */
export interface Query {
  /** Get all Wasm checksums */
  Checksums(request?: QueryChecksumsRequest): Promise<QueryChecksumsResponse>;
  /** Get Wasm code for given checksum */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Get all Wasm checksums */
  Checksums = async (request: QueryChecksumsRequest = {
    pagination: undefined
  }): Promise<QueryChecksumsResponse> => {
    const data = QueryChecksumsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Checksums", data);
    return promise.then(data => QueryChecksumsResponse.decode(new BinaryReader(data)));
  };
  /* Get Wasm code for given checksum */
  Code = async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    Checksums(request?: QueryChecksumsRequest): Promise<QueryChecksumsResponse> {
      return queryService.Checksums(request);
    },
    Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.Code(request);
    }
  };
};