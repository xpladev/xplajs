import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryChecksumsRequest, QueryChecksumsResponse, QueryCodeRequest, QueryCodeResponse } from "./query";
export const createGetChecksums = (clientResolver?: RpcResolver) => buildQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  encode: QueryChecksumsRequest.encode,
  decode: QueryChecksumsResponse.decode,
  service: "ibc.lightclients.wasm.v1.Query",
  method: "Checksums",
  clientResolver
});
export const useGetChecksums = buildUseQuery<QueryChecksumsRequest, QueryChecksumsResponse>({
  builderQueryFn: createGetChecksums,
  queryKeyPrefix: "ChecksumsQuery"
});
export const createGetCode = (clientResolver?: RpcResolver) => buildQuery<QueryCodeRequest, QueryCodeResponse>({
  encode: QueryCodeRequest.encode,
  decode: QueryCodeResponse.decode,
  service: "ibc.lightclients.wasm.v1.Query",
  method: "Code",
  clientResolver
});
export const useGetCode = buildUseQuery<QueryCodeRequest, QueryCodeResponse>({
  builderQueryFn: createGetCode,
  queryKeyPrefix: "CodeQuery"
});