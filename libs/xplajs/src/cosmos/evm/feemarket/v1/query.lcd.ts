import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryBaseFeeRequest, QueryBaseFeeResponse, QueryBlockGasRequest, QueryBlockGasResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of x/feemarket module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `cosmos/evm/feemarket/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* BaseFee queries the base fee of the parent block of the current block. */
  baseFee = async (_params: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> => {
    const endpoint = `cosmos/evm/feemarket/v1/base_fee`;
    return await this.req.get<QueryBaseFeeResponse>(endpoint);
  };
  /* BlockGas queries the gas used at a given block height */
  blockGas = async (_params: QueryBlockGasRequest = {}): Promise<QueryBlockGasResponse> => {
    const endpoint = `cosmos/evm/feemarket/v1/block_gas`;
    return await this.req.get<QueryBlockGasResponse>(endpoint);
  };
}