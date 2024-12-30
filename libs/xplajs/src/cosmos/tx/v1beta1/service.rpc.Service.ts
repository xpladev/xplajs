import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  Simulate(request: SimulateRequest): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  GetTx(request: GetTxRequest): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
  /**
   * TxDecode decodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  TxDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
  /**
   * TxEncode encodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  TxEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
  /**
   * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
   * 
   * Since: cosmos-sdk 0.47
   */
  TxEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
  /**
   * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
   * 
   * Since: cosmos-sdk 0.47
   */
  TxDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Simulate simulates executing a transaction for estimating gas usage. */
  Simulate = async (request: SimulateRequest): Promise<SimulateResponse> => {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new BinaryReader(data)));
  };
  /* GetTx fetches a tx by hash. */
  GetTx = async (request: GetTxRequest): Promise<GetTxResponse> => {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new BinaryReader(data)));
  };
  /* BroadcastTx broadcast transaction. */
  BroadcastTx = async (request: BroadcastTxRequest): Promise<BroadcastTxResponse> => {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new BinaryReader(data)));
  };
  /* GetTxsEvent fetches txs by event. */
  GetTxsEvent = async (request: GetTxsEventRequest): Promise<GetTxsEventResponse> => {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new BinaryReader(data)));
  };
  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
  GetBlockWithTxs = async (request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> => {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new BinaryReader(data)));
  };
  /* TxDecode decodes the transaction.
  
   Since: cosmos-sdk 0.47 */
  TxDecode = async (request: TxDecodeRequest): Promise<TxDecodeResponse> => {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then(data => TxDecodeResponse.decode(new BinaryReader(data)));
  };
  /* TxEncode encodes the transaction.
  
   Since: cosmos-sdk 0.47 */
  TxEncode = async (request: TxEncodeRequest): Promise<TxEncodeResponse> => {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then(data => TxEncodeResponse.decode(new BinaryReader(data)));
  };
  /* TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
  
   Since: cosmos-sdk 0.47 */
  TxEncodeAmino = async (request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> => {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then(data => TxEncodeAminoResponse.decode(new BinaryReader(data)));
  };
  /* TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
  
   Since: cosmos-sdk 0.47 */
  TxDecodeAmino = async (request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> => {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then(data => TxDecodeAminoResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    Simulate(request: SimulateRequest): Promise<SimulateResponse> {
      return queryService.Simulate(request);
    },
    GetTx(request: GetTxRequest): Promise<GetTxResponse> {
      return queryService.GetTx(request);
    },
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
      return queryService.BroadcastTx(request);
    },
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
      return queryService.GetTxsEvent(request);
    },
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
      return queryService.GetBlockWithTxs(request);
    },
    TxDecode(request: TxDecodeRequest): Promise<TxDecodeResponse> {
      return queryService.TxDecode(request);
    },
    TxEncode(request: TxEncodeRequest): Promise<TxEncodeResponse> {
      return queryService.TxEncode(request);
    },
    TxEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> {
      return queryService.TxEncodeAmino(request);
    },
    TxDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> {
      return queryService.TxDecodeAmino(request);
    }
  };
};