import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryVerifyMembershipRequest, QueryVerifyMembershipResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
  /** Status queries the status of an IBC client. */
  ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client submodule. */
  ClientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /** VerifyMembership queries an IBC light client for proof verification of a value at a given key path. */
  VerifyMembership(request: QueryVerifyMembershipRequest): Promise<QueryVerifyMembershipResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ClientState queries an IBC light client. */
  ClientState = async (request: QueryClientStateRequest): Promise<QueryClientStateResponse> => {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new BinaryReader(data)));
  };
  /* ClientStates queries all the IBC light clients of a chain. */
  ClientStates = async (request: QueryClientStatesRequest = {
    pagination: undefined
  }): Promise<QueryClientStatesResponse> => {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new BinaryReader(data)));
  };
  /* ConsensusState queries a consensus state associated with a client state at
   a given height. */
  ConsensusState = async (request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> => {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* ConsensusStates queries all the consensus state associated with a given
   client. */
  ConsensusStates = async (request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> => {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new BinaryReader(data)));
  };
  /* ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  ConsensusStateHeights = async (request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse> => {
    const data = QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then(data => QueryConsensusStateHeightsResponse.decode(new BinaryReader(data)));
  };
  /* Status queries the status of an IBC client. */
  ClientStatus = async (request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> => {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new BinaryReader(data)));
  };
  /* ClientParams queries all parameters of the ibc client submodule. */
  ClientParams = async (request: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> => {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState = async (request: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponse> => {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new BinaryReader(data)));
  };
  /* UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState = async (request: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponse> => {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  };
  /* VerifyMembership queries an IBC light client for proof verification of a value at a given key path. */
  VerifyMembership = async (request: QueryVerifyMembershipRequest): Promise<QueryVerifyMembershipResponse> => {
    const data = QueryVerifyMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "VerifyMembership", data);
    return promise.then(data => QueryVerifyMembershipResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse> {
      return queryService.ClientState(request);
    },
    ClientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse> {
      return queryService.ClientStates(request);
    },
    ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
      return queryService.ConsensusState(request);
    },
    ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
      return queryService.ConsensusStates(request);
    },
    ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse> {
      return queryService.ConsensusStateHeights(request);
    },
    ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
      return queryService.ClientStatus(request);
    },
    ClientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse> {
      return queryService.ClientParams(request);
    },
    UpgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse> {
      return queryService.UpgradedClientState(request);
    },
    UpgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse> {
      return queryService.UpgradedConsensusState(request);
    },
    VerifyMembership(request: QueryVerifyMembershipRequest): Promise<QueryVerifyMembershipResponse> {
      return queryService.VerifyMembership(request);
    }
  };
};