import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryBuildAddressRequest, QueryBuildAddressResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ContractInfo gets the contract meta data */
  contractInfo = async (params: QueryContractInfoRequest): Promise<QueryContractInfoResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}`;
    return await this.req.get<QueryContractInfoResponse>(endpoint);
  };
  /* ContractHistory gets the contract code history */
  contractHistory = async (params: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/history`;
    return await this.req.get<QueryContractHistoryResponse>(endpoint, options);
  };
  /* ContractsByCode lists all smart contracts for a code id */
  contractsByCode = async (params: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}/contracts`;
    return await this.req.get<QueryContractsByCodeResponse>(endpoint, options);
  };
  /* AllContractState gets all raw store data for a single contract */
  allContractState = async (params: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/state`;
    return await this.req.get<QueryAllContractStateResponse>(endpoint, options);
  };
  /* RawContractState gets single key from the raw store data of a contract */
  rawContractState = async (params: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/raw/${params.query_data}`;
    return await this.req.get<QueryRawContractStateResponse>(endpoint);
  };
  /* SmartContractState get smart query result from the contract */
  smartContractState = async (params: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> => {
    const endpoint = `cosmwasm/wasm/v1/contract/${params.address}/smart/${params.query_data}`;
    return await this.req.get<QuerySmartContractStateResponse>(endpoint);
  };
  /* Code gets the binary code and metadata for a singe wasm code */
  code = async (params: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const endpoint = `cosmwasm/wasm/v1/code/${params.code_id}`;
    return await this.req.get<QueryCodeResponse>(endpoint);
  };
  /* Codes gets the metadata for all stored wasm codes */
  codes = async (params: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/code`;
    return await this.req.get<QueryCodesResponse>(endpoint, options);
  };
  /* PinnedCodes gets the pinned code ids */
  pinnedCodes = async (params: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/codes/pinned`;
    return await this.req.get<QueryPinnedCodesResponse>(endpoint, options);
  };
  /* Params gets the module params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmwasm/wasm/v1/codes/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* ContractsByCreator gets the contracts by creator */
  contractsByCreator = async (params: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmwasm/wasm/v1/contracts/creator/${params.creator_address}`;
    return await this.req.get<QueryContractsByCreatorResponse>(endpoint, options);
  };
  /* BuildAddress builds a contract address */
  buildAddress = async (params: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.code_hash !== "undefined") {
      options.params.code_hash = params.code_hash;
    }
    if (typeof params?.creator_address !== "undefined") {
      options.params.creator_address = params.creator_address;
    }
    if (typeof params?.salt !== "undefined") {
      options.params.salt = params.salt;
    }
    if (typeof params?.init_args !== "undefined") {
      options.params.init_args = params.init_args;
    }
    const endpoint = `cosmwasm/wasm/v1/contract/build_address`;
    return await this.req.get<QueryBuildAddressResponse>(endpoint, options);
  };
}