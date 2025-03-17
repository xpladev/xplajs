import { MsgEthereumTxResponse } from "./tx";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountRequest, QueryAccountResponse, QueryCosmosAccountRequest, QueryCosmosAccountResponse, QueryValidatorAccountRequest, QueryValidatorAccountResponse, QueryBalanceRequest, QueryBalanceResponse, QueryStorageRequest, QueryStorageResponse, QueryCodeRequest, QueryCodeResponse, QueryParamsRequest, QueryParamsResponse, EthCallRequest, EstimateGasResponse, QueryTraceTxRequest, QueryTraceTxResponse, QueryTraceBlockRequest, QueryTraceBlockResponse, QueryBaseFeeRequest, QueryBaseFeeResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Account queries an Ethereum account. */
  account = async (params: QueryAccountRequest): Promise<QueryAccountResponse> => {
    const endpoint = `ethermint/evm/v1/account/${params.address}`;
    return await this.req.get<QueryAccountResponse>(endpoint);
  };
  /* CosmosAccount queries an Ethereum account's Cosmos Address. */
  cosmosAccount = async (params: QueryCosmosAccountRequest): Promise<QueryCosmosAccountResponse> => {
    const endpoint = `ethermint/evm/v1/cosmos_account/${params.address}`;
    return await this.req.get<QueryCosmosAccountResponse>(endpoint);
  };
  /* ValidatorAccount queries an Ethereum account's from a validator consensus
   Address. */
  validatorAccount = async (params: QueryValidatorAccountRequest): Promise<QueryValidatorAccountResponse> => {
    const endpoint = `ethermint/evm/v1/validator_account/${params.cons_address}`;
    return await this.req.get<QueryValidatorAccountResponse>(endpoint);
  };
  /* Balance queries the balance of a the EVM denomination for a single
   EthAccount. */
  balance = async (params: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const endpoint = `ethermint/evm/v1/balances/${params.address}`;
    return await this.req.get<QueryBalanceResponse>(endpoint);
  };
  /* Storage queries the balance of all coins for a single account. */
  storage = async (params: QueryStorageRequest): Promise<QueryStorageResponse> => {
    const endpoint = `ethermint/evm/v1/storage/${params.address}/${params.key}`;
    return await this.req.get<QueryStorageResponse>(endpoint);
  };
  /* Code queries the balance of all coins for a single account. */
  code = async (params: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const endpoint = `ethermint/evm/v1/codes/${params.address}`;
    return await this.req.get<QueryCodeResponse>(endpoint);
  };
  /* Params queries the parameters of x/evm module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const endpoint = `ethermint/evm/v1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  };
  /* EthCall implements the `eth_call` rpc api */
  ethCall = async (params: EthCallRequest): Promise<MsgEthereumTxResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.args !== "undefined") {
      options.params.args = params.args;
    }
    if (typeof params?.gas_cap !== "undefined") {
      options.params.gas_cap = params.gas_cap;
    }
    if (typeof params?.proposer_address !== "undefined") {
      options.params.proposer_address = params.proposer_address;
    }
    if (typeof params?.chain_id !== "undefined") {
      options.params.chain_id = params.chain_id;
    }
    const endpoint = `ethermint/evm/v1/eth_call`;
    return await this.req.get<MsgEthereumTxResponse>(endpoint, options);
  };
  /* EstimateGas implements the `eth_estimateGas` rpc api */
  estimateGas = async (params: EthCallRequest): Promise<EstimateGasResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.args !== "undefined") {
      options.params.args = params.args;
    }
    if (typeof params?.gas_cap !== "undefined") {
      options.params.gas_cap = params.gas_cap;
    }
    if (typeof params?.proposer_address !== "undefined") {
      options.params.proposer_address = params.proposer_address;
    }
    if (typeof params?.chain_id !== "undefined") {
      options.params.chain_id = params.chain_id;
    }
    const endpoint = `ethermint/evm/v1/estimate_gas`;
    return await this.req.get<EstimateGasResponse>(endpoint, options);
  };
  /* TraceTx implements the `debug_traceTransaction` rpc api */
  traceTx = async (params: QueryTraceTxRequest): Promise<QueryTraceTxResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.msg !== "undefined") {
      options.params.msg = params.msg;
    }
    if (typeof params?.trace_config !== "undefined") {
      options.params.trace_config = params.trace_config;
    }
    if (typeof params?.predecessors !== "undefined") {
      options.params.predecessors = params.predecessors;
    }
    if (typeof params?.block_number !== "undefined") {
      options.params.block_number = params.block_number;
    }
    if (typeof params?.block_hash !== "undefined") {
      options.params.block_hash = params.block_hash;
    }
    if (typeof params?.block_time !== "undefined") {
      options.params.block_time = params.block_time;
    }
    if (typeof params?.proposer_address !== "undefined") {
      options.params.proposer_address = params.proposer_address;
    }
    if (typeof params?.chain_id !== "undefined") {
      options.params.chain_id = params.chain_id;
    }
    const endpoint = `ethermint/evm/v1/trace_tx`;
    return await this.req.get<QueryTraceTxResponse>(endpoint, options);
  };
  /* TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api */
  traceBlock = async (params: QueryTraceBlockRequest): Promise<QueryTraceBlockResponse> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.txs !== "undefined") {
      options.params.txs = params.txs;
    }
    if (typeof params?.trace_config !== "undefined") {
      options.params.trace_config = params.trace_config;
    }
    if (typeof params?.block_number !== "undefined") {
      options.params.block_number = params.block_number;
    }
    if (typeof params?.block_hash !== "undefined") {
      options.params.block_hash = params.block_hash;
    }
    if (typeof params?.block_time !== "undefined") {
      options.params.block_time = params.block_time;
    }
    if (typeof params?.proposer_address !== "undefined") {
      options.params.proposer_address = params.proposer_address;
    }
    if (typeof params?.chain_id !== "undefined") {
      options.params.chain_id = params.chain_id;
    }
    const endpoint = `ethermint/evm/v1/trace_block`;
    return await this.req.get<QueryTraceBlockResponse>(endpoint, options);
  };
  /* BaseFee queries the base fee of the parent block of the current block,
   it's similar to feemarket module's method, but also checks london hardfork status. */
  baseFee = async (_params: QueryBaseFeeRequest = {}): Promise<QueryBaseFeeResponse> => {
    const endpoint = `ethermint/evm/v1/base_fee`;
    return await this.req.get<QueryBaseFeeResponse>(endpoint);
  };
}