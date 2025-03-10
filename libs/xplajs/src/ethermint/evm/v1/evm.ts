import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evmDenom: string;
  /** enable_create toggles state transitions that use the vm.Create function */
  enableCreate: boolean;
  /** enable_call toggles state transitions that use the vm.Call function */
  enableCall: boolean;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extraEips: bigint[];
  /** chain_config defines the EVM chain configuration parameters */
  chainConfig: ChainConfig;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allowUnprotectedTxs: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/ethermint.evm.v1.Params";
  value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evm_denom: string;
  /** enable_create toggles state transitions that use the vm.Create function */
  enable_create: boolean;
  /** enable_call toggles state transitions that use the vm.Call function */
  enable_call: boolean;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extra_eips: string[];
  /** chain_config defines the EVM chain configuration parameters */
  chain_config: ChainConfigAmino;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allow_unprotected_txs: boolean;
}
export interface ParamsAminoMsg {
  type: "ethermint/x/evm/Params";
  value: ParamsAmino;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homesteadBlock: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  daoForkBlock: string;
  /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
  daoForkSupport: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150Block: string;
  /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
  eip150Hash: string;
  /** eip155_block: EIP155Block HF block */
  eip155Block: string;
  /** eip158_block: EIP158 HF block */
  eip158Block: string;
  /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
  byzantiumBlock: string;
  /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
  constantinopleBlock: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburgBlock: string;
  /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
  istanbulBlock: string;
  /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
  muirGlacierBlock: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlinBlock: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  londonBlock: string;
  /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  arrowGlacierBlock: string;
  /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  grayGlacierBlock: string;
  /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
  mergeNetsplitBlock: string;
  /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
  shanghaiBlock: string;
  /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
  cancunBlock: string;
}
export interface ChainConfigProtoMsg {
  typeUrl: "/ethermint.evm.v1.ChainConfig";
  value: Uint8Array;
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfigAmino {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homestead_block: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  dao_fork_block: string;
  /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
  dao_fork_support: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150_block: string;
  /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
  eip150_hash: string;
  /** eip155_block: EIP155Block HF block */
  eip155_block: string;
  /** eip158_block: EIP158 HF block */
  eip158_block: string;
  /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
  byzantium_block: string;
  /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
  constantinople_block: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburg_block: string;
  /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
  istanbul_block: string;
  /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
  muir_glacier_block: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlin_block: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  london_block: string;
  /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  arrow_glacier_block: string;
  /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  gray_glacier_block: string;
  /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
  merge_netsplit_block: string;
  /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
  shanghai_block: string;
  /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
  cancun_block: string;
}
export interface ChainConfigAminoMsg {
  type: "/ethermint.evm.v1.ChainConfig";
  value: ChainConfigAmino;
}
/** State represents a single Storage key value pair item. */
export interface State {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
export interface StateProtoMsg {
  typeUrl: "/ethermint.evm.v1.State";
  value: Uint8Array;
}
/** State represents a single Storage key value pair item. */
export interface StateAmino {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
export interface StateAminoMsg {
  type: "/ethermint.evm.v1.State";
  value: StateAmino;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: Log[];
}
export interface TransactionLogsProtoMsg {
  typeUrl: "/ethermint.evm.v1.TransactionLogs";
  value: Uint8Array;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogsAmino {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: LogAmino[];
}
export interface TransactionLogsAminoMsg {
  type: "/ethermint.evm.v1.TransactionLogs";
  value: TransactionLogsAmino;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  blockNumber: bigint;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: bigint;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: bigint;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
export interface LogProtoMsg {
  typeUrl: "/ethermint.evm.v1.Log";
  value: Uint8Array;
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 * 
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface LogAmino {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: string;
  /** block_number of the block in which the transaction was included */
  block_number: string;
  /** tx_hash is the transaction hash */
  tx_hash: string;
  /** tx_index of the transaction in the block */
  tx_index: string;
  /** block_hash of the block in which the transaction was included */
  block_hash: string;
  /** index of the log in the block */
  index: string;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
export interface LogAminoMsg {
  type: "/ethermint.evm.v1.Log";
  value: LogAmino;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contractAddress: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  txLogs: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gasUsed: bigint;
}
export interface TxResultProtoMsg {
  typeUrl: "/ethermint.evm.v1.TxResult";
  value: Uint8Array;
}
/** TxResult stores results of Tx execution. */
export interface TxResultAmino {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contract_address: string;
  /** bloom represents the bloom filter bytes */
  bloom: string;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  tx_logs: TransactionLogsAmino;
  /** ret defines the bytes from the execution. */
  ret: string;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gas_used: string;
}
export interface TxResultAminoMsg {
  type: "/ethermint.evm.v1.TxResult";
  value: TxResultAmino;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
}
export interface AccessTupleProtoMsg {
  typeUrl: "/ethermint.evm.v1.AccessTuple";
  value: Uint8Array;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTupleAmino {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storage_keys: string[];
}
export interface AccessTupleAminoMsg {
  type: "/ethermint.evm.v1.AccessTuple";
  value: AccessTupleAmino;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: bigint;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfig;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracerJsonConfig: string;
}
export interface TraceConfigProtoMsg {
  typeUrl: "/ethermint.evm.v1.TraceConfig";
  value: Uint8Array;
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfigAmino {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: string;
  /** disable_stack switches stack capture */
  disable_stack: boolean;
  /** disable_storage switches storage capture */
  disable_storage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfigAmino;
  /** enable_memory switches memory capture */
  enable_memory: boolean;
  /** enable_return_data switches the capture of return data */
  enable_return_data: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracer_json_config: string;
}
export interface TraceConfigAminoMsg {
  type: "/ethermint.evm.v1.TraceConfig";
  value: TraceConfigAmino;
}
function createBaseParams(): Params {
  return {
    evmDenom: "",
    enableCreate: false,
    enableCall: false,
    extraEips: [],
    chainConfig: ChainConfig.fromPartial({}),
    allowUnprotectedTxs: false
  };
}
export const Params = {
  typeUrl: "/ethermint.evm.v1.Params",
  aminoType: "ethermint/x/evm/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evmDenom === "string" && typeof o.enableCreate === "boolean" && typeof o.enableCall === "boolean" && Array.isArray(o.extraEips) && (!o.extraEips.length || typeof o.extraEips[0] === "bigint") && ChainConfig.is(o.chainConfig) && typeof o.allowUnprotectedTxs === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evm_denom === "string" && typeof o.enable_create === "boolean" && typeof o.enable_call === "boolean" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && ChainConfig.isAmino(o.chain_config) && typeof o.allow_unprotected_txs === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmDenom !== "") {
      writer.uint32(10).string(message.evmDenom);
    }
    if (message.enableCreate === true) {
      writer.uint32(16).bool(message.enableCreate);
    }
    if (message.enableCall === true) {
      writer.uint32(24).bool(message.enableCall);
    }
    writer.uint32(34).fork();
    for (const v of message.extraEips) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(message.chainConfig, writer.uint32(42).fork()).ldelim();
    }
    if (message.allowUnprotectedTxs === true) {
      writer.uint32(48).bool(message.allowUnprotectedTxs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evmDenom = reader.string();
          break;
        case 2:
          message.enableCreate = reader.bool();
          break;
        case 3:
          message.enableCall = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extraEips.push(reader.int64());
            }
          } else {
            message.extraEips.push(reader.int64());
          }
          break;
        case 5:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowUnprotectedTxs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.evmDenom = object.evmDenom ?? "";
    message.enableCreate = object.enableCreate ?? false;
    message.enableCall = object.enableCall ?? false;
    message.extraEips = object.extraEips?.map(e => BigInt(e.toString())) || [];
    message.chainConfig = object.chainConfig !== undefined && object.chainConfig !== null ? ChainConfig.fromPartial(object.chainConfig) : undefined;
    message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.evm_denom !== undefined && object.evm_denom !== null) {
      message.evmDenom = object.evm_denom;
    }
    if (object.enable_create !== undefined && object.enable_create !== null) {
      message.enableCreate = object.enable_create;
    }
    if (object.enable_call !== undefined && object.enable_call !== null) {
      message.enableCall = object.enable_call;
    }
    message.extraEips = object.extra_eips?.map(e => BigInt(e)) || [];
    if (object.chain_config !== undefined && object.chain_config !== null) {
      message.chainConfig = ChainConfig.fromAmino(object.chain_config);
    }
    if (object.allow_unprotected_txs !== undefined && object.allow_unprotected_txs !== null) {
      message.allowUnprotectedTxs = object.allow_unprotected_txs;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.evm_denom = message.evmDenom === "" ? undefined : message.evmDenom;
    obj.enable_create = message.enableCreate === false ? undefined : message.enableCreate;
    obj.enable_call = message.enableCall === false ? undefined : message.enableCall;
    if (message.extraEips) {
      obj.extra_eips = message.extraEips.map(e => e.toString());
    } else {
      obj.extra_eips = message.extraEips;
    }
    obj.chain_config = message.chainConfig ? ChainConfig.toAmino(message.chainConfig) : ChainConfig.toAmino(ChainConfig.fromPartial({}));
    obj.allow_unprotected_txs = message.allowUnprotectedTxs === false ? undefined : message.allowUnprotectedTxs;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "ethermint/x/evm/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ChainConfig.registerTypeUrl();
  }
};
function createBaseChainConfig(): ChainConfig {
  return {
    homesteadBlock: "",
    daoForkBlock: "",
    daoForkSupport: false,
    eip150Block: "",
    eip150Hash: "",
    eip155Block: "",
    eip158Block: "",
    byzantiumBlock: "",
    constantinopleBlock: "",
    petersburgBlock: "",
    istanbulBlock: "",
    muirGlacierBlock: "",
    berlinBlock: "",
    londonBlock: "",
    arrowGlacierBlock: "",
    grayGlacierBlock: "",
    mergeNetsplitBlock: "",
    shanghaiBlock: "",
    cancunBlock: ""
  };
}
export const ChainConfig = {
  typeUrl: "/ethermint.evm.v1.ChainConfig",
  is(o: any): o is ChainConfig {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homesteadBlock === "string" && typeof o.daoForkBlock === "string" && typeof o.daoForkSupport === "boolean" && typeof o.eip150Block === "string" && typeof o.eip150Hash === "string" && typeof o.eip155Block === "string" && typeof o.eip158Block === "string" && typeof o.byzantiumBlock === "string" && typeof o.constantinopleBlock === "string" && typeof o.petersburgBlock === "string" && typeof o.istanbulBlock === "string" && typeof o.muirGlacierBlock === "string" && typeof o.berlinBlock === "string" && typeof o.londonBlock === "string" && typeof o.arrowGlacierBlock === "string" && typeof o.grayGlacierBlock === "string" && typeof o.mergeNetsplitBlock === "string" && typeof o.shanghaiBlock === "string" && typeof o.cancunBlock === "string");
  },
  isAmino(o: any): o is ChainConfigAmino {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip150_hash === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.shanghai_block === "string" && typeof o.cancun_block === "string");
  },
  encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.homesteadBlock !== "") {
      writer.uint32(10).string(message.homesteadBlock);
    }
    if (message.daoForkBlock !== "") {
      writer.uint32(18).string(message.daoForkBlock);
    }
    if (message.daoForkSupport === true) {
      writer.uint32(24).bool(message.daoForkSupport);
    }
    if (message.eip150Block !== "") {
      writer.uint32(34).string(message.eip150Block);
    }
    if (message.eip150Hash !== "") {
      writer.uint32(42).string(message.eip150Hash);
    }
    if (message.eip155Block !== "") {
      writer.uint32(50).string(message.eip155Block);
    }
    if (message.eip158Block !== "") {
      writer.uint32(58).string(message.eip158Block);
    }
    if (message.byzantiumBlock !== "") {
      writer.uint32(66).string(message.byzantiumBlock);
    }
    if (message.constantinopleBlock !== "") {
      writer.uint32(74).string(message.constantinopleBlock);
    }
    if (message.petersburgBlock !== "") {
      writer.uint32(82).string(message.petersburgBlock);
    }
    if (message.istanbulBlock !== "") {
      writer.uint32(90).string(message.istanbulBlock);
    }
    if (message.muirGlacierBlock !== "") {
      writer.uint32(98).string(message.muirGlacierBlock);
    }
    if (message.berlinBlock !== "") {
      writer.uint32(106).string(message.berlinBlock);
    }
    if (message.londonBlock !== "") {
      writer.uint32(138).string(message.londonBlock);
    }
    if (message.arrowGlacierBlock !== "") {
      writer.uint32(146).string(message.arrowGlacierBlock);
    }
    if (message.grayGlacierBlock !== "") {
      writer.uint32(162).string(message.grayGlacierBlock);
    }
    if (message.mergeNetsplitBlock !== "") {
      writer.uint32(170).string(message.mergeNetsplitBlock);
    }
    if (message.shanghaiBlock !== "") {
      writer.uint32(178).string(message.shanghaiBlock);
    }
    if (message.cancunBlock !== "") {
      writer.uint32(186).string(message.cancunBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.homesteadBlock = reader.string();
          break;
        case 2:
          message.daoForkBlock = reader.string();
          break;
        case 3:
          message.daoForkSupport = reader.bool();
          break;
        case 4:
          message.eip150Block = reader.string();
          break;
        case 5:
          message.eip150Hash = reader.string();
          break;
        case 6:
          message.eip155Block = reader.string();
          break;
        case 7:
          message.eip158Block = reader.string();
          break;
        case 8:
          message.byzantiumBlock = reader.string();
          break;
        case 9:
          message.constantinopleBlock = reader.string();
          break;
        case 10:
          message.petersburgBlock = reader.string();
          break;
        case 11:
          message.istanbulBlock = reader.string();
          break;
        case 12:
          message.muirGlacierBlock = reader.string();
          break;
        case 13:
          message.berlinBlock = reader.string();
          break;
        case 17:
          message.londonBlock = reader.string();
          break;
        case 18:
          message.arrowGlacierBlock = reader.string();
          break;
        case 20:
          message.grayGlacierBlock = reader.string();
          break;
        case 21:
          message.mergeNetsplitBlock = reader.string();
          break;
        case 22:
          message.shanghaiBlock = reader.string();
          break;
        case 23:
          message.cancunBlock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ChainConfig>): ChainConfig {
    const message = createBaseChainConfig();
    message.homesteadBlock = object.homesteadBlock ?? "";
    message.daoForkBlock = object.daoForkBlock ?? "";
    message.daoForkSupport = object.daoForkSupport ?? false;
    message.eip150Block = object.eip150Block ?? "";
    message.eip150Hash = object.eip150Hash ?? "";
    message.eip155Block = object.eip155Block ?? "";
    message.eip158Block = object.eip158Block ?? "";
    message.byzantiumBlock = object.byzantiumBlock ?? "";
    message.constantinopleBlock = object.constantinopleBlock ?? "";
    message.petersburgBlock = object.petersburgBlock ?? "";
    message.istanbulBlock = object.istanbulBlock ?? "";
    message.muirGlacierBlock = object.muirGlacierBlock ?? "";
    message.berlinBlock = object.berlinBlock ?? "";
    message.londonBlock = object.londonBlock ?? "";
    message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
    message.grayGlacierBlock = object.grayGlacierBlock ?? "";
    message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
    message.shanghaiBlock = object.shanghaiBlock ?? "";
    message.cancunBlock = object.cancunBlock ?? "";
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    const message = createBaseChainConfig();
    if (object.homestead_block !== undefined && object.homestead_block !== null) {
      message.homesteadBlock = object.homestead_block;
    }
    if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
      message.daoForkBlock = object.dao_fork_block;
    }
    if (object.dao_fork_support !== undefined && object.dao_fork_support !== null) {
      message.daoForkSupport = object.dao_fork_support;
    }
    if (object.eip150_block !== undefined && object.eip150_block !== null) {
      message.eip150Block = object.eip150_block;
    }
    if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
      message.eip150Hash = object.eip150_hash;
    }
    if (object.eip155_block !== undefined && object.eip155_block !== null) {
      message.eip155Block = object.eip155_block;
    }
    if (object.eip158_block !== undefined && object.eip158_block !== null) {
      message.eip158Block = object.eip158_block;
    }
    if (object.byzantium_block !== undefined && object.byzantium_block !== null) {
      message.byzantiumBlock = object.byzantium_block;
    }
    if (object.constantinople_block !== undefined && object.constantinople_block !== null) {
      message.constantinopleBlock = object.constantinople_block;
    }
    if (object.petersburg_block !== undefined && object.petersburg_block !== null) {
      message.petersburgBlock = object.petersburg_block;
    }
    if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
      message.istanbulBlock = object.istanbul_block;
    }
    if (object.muir_glacier_block !== undefined && object.muir_glacier_block !== null) {
      message.muirGlacierBlock = object.muir_glacier_block;
    }
    if (object.berlin_block !== undefined && object.berlin_block !== null) {
      message.berlinBlock = object.berlin_block;
    }
    if (object.london_block !== undefined && object.london_block !== null) {
      message.londonBlock = object.london_block;
    }
    if (object.arrow_glacier_block !== undefined && object.arrow_glacier_block !== null) {
      message.arrowGlacierBlock = object.arrow_glacier_block;
    }
    if (object.gray_glacier_block !== undefined && object.gray_glacier_block !== null) {
      message.grayGlacierBlock = object.gray_glacier_block;
    }
    if (object.merge_netsplit_block !== undefined && object.merge_netsplit_block !== null) {
      message.mergeNetsplitBlock = object.merge_netsplit_block;
    }
    if (object.shanghai_block !== undefined && object.shanghai_block !== null) {
      message.shanghaiBlock = object.shanghai_block;
    }
    if (object.cancun_block !== undefined && object.cancun_block !== null) {
      message.cancunBlock = object.cancun_block;
    }
    return message;
  },
  toAmino(message: ChainConfig): ChainConfigAmino {
    const obj: any = {};
    obj.homestead_block = message.homesteadBlock === "" ? undefined : message.homesteadBlock;
    obj.dao_fork_block = message.daoForkBlock === "" ? undefined : message.daoForkBlock;
    obj.dao_fork_support = message.daoForkSupport === false ? undefined : message.daoForkSupport;
    obj.eip150_block = message.eip150Block === "" ? undefined : message.eip150Block;
    obj.eip150_hash = message.eip150Hash === "" ? undefined : message.eip150Hash;
    obj.eip155_block = message.eip155Block === "" ? undefined : message.eip155Block;
    obj.eip158_block = message.eip158Block === "" ? undefined : message.eip158Block;
    obj.byzantium_block = message.byzantiumBlock === "" ? undefined : message.byzantiumBlock;
    obj.constantinople_block = message.constantinopleBlock === "" ? undefined : message.constantinopleBlock;
    obj.petersburg_block = message.petersburgBlock === "" ? undefined : message.petersburgBlock;
    obj.istanbul_block = message.istanbulBlock === "" ? undefined : message.istanbulBlock;
    obj.muir_glacier_block = message.muirGlacierBlock === "" ? undefined : message.muirGlacierBlock;
    obj.berlin_block = message.berlinBlock === "" ? undefined : message.berlinBlock;
    obj.london_block = message.londonBlock === "" ? undefined : message.londonBlock;
    obj.arrow_glacier_block = message.arrowGlacierBlock === "" ? undefined : message.arrowGlacierBlock;
    obj.gray_glacier_block = message.grayGlacierBlock === "" ? undefined : message.grayGlacierBlock;
    obj.merge_netsplit_block = message.mergeNetsplitBlock === "" ? undefined : message.mergeNetsplitBlock;
    obj.shanghai_block = message.shanghaiBlock === "" ? undefined : message.shanghaiBlock;
    obj.cancun_block = message.cancunBlock === "" ? undefined : message.cancunBlock;
    return obj;
  },
  fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
    return ChainConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig {
    return ChainConfig.decode(message.value);
  },
  toProto(message: ChainConfig): Uint8Array {
    return ChainConfig.encode(message).finish();
  },
  toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.ChainConfig",
      value: ChainConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseState(): State {
  return {
    key: "",
    value: ""
  };
}
export const State = {
  typeUrl: "/ethermint.evm.v1.State",
  is(o: any): o is State {
    return o && (o.$typeUrl === State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is StateAmino {
    return o && (o.$typeUrl === State.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<State>): State {
    const message = createBaseState();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: StateAmino): State {
    const message = createBaseState();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.State",
      value: State.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTransactionLogs(): TransactionLogs {
  return {
    hash: "",
    logs: []
  };
}
export const TransactionLogs = {
  typeUrl: "/ethermint.evm.v1.TransactionLogs",
  is(o: any): o is TransactionLogs {
    return o && (o.$typeUrl === TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || Log.is(o.logs[0])));
  },
  isAmino(o: any): o is TransactionLogsAmino {
    return o && (o.$typeUrl === TransactionLogs.typeUrl || typeof o.hash === "string" && Array.isArray(o.logs) && (!o.logs.length || Log.isAmino(o.logs[0])));
  },
  encode(message: TransactionLogs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionLogs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransactionLogs>): TransactionLogs {
    const message = createBaseTransactionLogs();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map(e => Log.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransactionLogsAmino): TransactionLogs {
    const message = createBaseTransactionLogs();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    message.logs = object.logs?.map(e => Log.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TransactionLogs): TransactionLogsAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    if (message.logs) {
      obj.logs = message.logs.map(e => e ? Log.toAmino(e) : undefined);
    } else {
      obj.logs = message.logs;
    }
    return obj;
  },
  fromAminoMsg(object: TransactionLogsAminoMsg): TransactionLogs {
    return TransactionLogs.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionLogsProtoMsg): TransactionLogs {
    return TransactionLogs.decode(message.value);
  },
  toProto(message: TransactionLogs): Uint8Array {
    return TransactionLogs.encode(message).finish();
  },
  toProtoMsg(message: TransactionLogs): TransactionLogsProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TransactionLogs",
      value: TransactionLogs.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Log.registerTypeUrl();
  }
};
function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(),
    blockNumber: BigInt(0),
    txHash: "",
    txIndex: BigInt(0),
    blockHash: "",
    index: BigInt(0),
    removed: false
  };
}
export const Log = {
  typeUrl: "/ethermint.evm.v1.Log",
  is(o: any): o is Log {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.blockNumber === "bigint" && typeof o.txHash === "string" && typeof o.txIndex === "bigint" && typeof o.blockHash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
  },
  isAmino(o: any): o is LogAmino {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.block_number === "bigint" && typeof o.tx_hash === "string" && typeof o.tx_index === "bigint" && typeof o.block_hash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
  },
  encode(message: Log, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(64).uint64(message.index);
    }
    if (message.removed === true) {
      writer.uint32(72).bool(message.removed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Log {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.topics.push(reader.string());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.blockNumber = reader.uint64();
          break;
        case 5:
          message.txHash = reader.string();
          break;
        case 6:
          message.txIndex = reader.uint64();
          break;
        case 7:
          message.blockHash = reader.string();
          break;
        case 8:
          message.index = reader.uint64();
          break;
        case 9:
          message.removed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Log>): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map(e => e) || [];
    message.data = object.data ?? new Uint8Array();
    message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
    message.txHash = object.txHash ?? "";
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? BigInt(object.txIndex.toString()) : BigInt(0);
    message.blockHash = object.blockHash ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.removed = object.removed ?? false;
    return message;
  },
  fromAmino(object: LogAmino): Log {
    const message = createBaseLog();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.topics = object.topics?.map(e => e) || [];
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.block_number !== undefined && object.block_number !== null) {
      message.blockNumber = BigInt(object.block_number);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = object.tx_hash;
    }
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.txIndex = BigInt(object.tx_index);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.blockHash = object.block_hash;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.removed !== undefined && object.removed !== null) {
      message.removed = object.removed;
    }
    return message;
  },
  toAmino(message: Log): LogAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.topics) {
      obj.topics = message.topics.map(e => e);
    } else {
      obj.topics = message.topics;
    }
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.block_number = message.blockNumber ? message.blockNumber?.toString() : "0";
    obj.tx_hash = message.txHash ?? "";
    obj.tx_index = message.txIndex ? message.txIndex?.toString() : "0";
    obj.block_hash = message.blockHash ?? "";
    obj.index = message.index ? message.index?.toString() : "0";
    obj.removed = message.removed === false ? undefined : message.removed;
    return obj;
  },
  fromAminoMsg(object: LogAminoMsg): Log {
    return Log.fromAmino(object.value);
  },
  fromProtoMsg(message: LogProtoMsg): Log {
    return Log.decode(message.value);
  },
  toProto(message: Log): Uint8Array {
    return Log.encode(message).finish();
  },
  toProtoMsg(message: Log): LogProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.Log",
      value: Log.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxResult(): TxResult {
  return {
    contractAddress: "",
    bloom: new Uint8Array(),
    txLogs: TransactionLogs.fromPartial({}),
    ret: new Uint8Array(),
    reverted: false,
    gasUsed: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/ethermint.evm.v1.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contractAddress === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.is(o.txLogs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gasUsed === "bigint");
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.isAmino(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.bloom.length !== 0) {
      writer.uint32(18).bytes(message.bloom);
    }
    if (message.txLogs !== undefined) {
      TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(34).bytes(message.ret);
    }
    if (message.reverted === true) {
      writer.uint32(40).bool(message.reverted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.bloom = reader.bytes();
          break;
        case 3:
          message.txLogs = TransactionLogs.decode(reader, reader.uint32());
          break;
        case 4:
          message.ret = reader.bytes();
          break;
        case 5:
          message.reverted = reader.bool();
          break;
        case 6:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.contractAddress = object.contractAddress ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    message.txLogs = object.txLogs !== undefined && object.txLogs !== null ? TransactionLogs.fromPartial(object.txLogs) : undefined;
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = bytesFromBase64(object.bloom);
    }
    if (object.tx_logs !== undefined && object.tx_logs !== null) {
      message.txLogs = TransactionLogs.fromAmino(object.tx_logs);
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.reverted !== undefined && object.reverted !== null) {
      message.reverted = object.reverted;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.bloom = message.bloom ? base64FromBytes(message.bloom) : undefined;
    obj.tx_logs = message.txLogs ? TransactionLogs.toAmino(message.txLogs) : TransactionLogs.toAmino(TransactionLogs.fromPartial({}));
    obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
    obj.reverted = message.reverted === false ? undefined : message.reverted;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxResultAminoMsg): TxResult {
    return TxResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TxResultProtoMsg): TxResult {
    return TxResult.decode(message.value);
  },
  toProto(message: TxResult): Uint8Array {
    return TxResult.encode(message).finish();
  },
  toProtoMsg(message: TxResult): TxResultProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TxResult",
      value: TxResult.encode(message).finish()
    };
  },
  registerTypeUrl() {
    TransactionLogs.registerTypeUrl();
  }
};
function createBaseAccessTuple(): AccessTuple {
  return {
    address: "",
    storageKeys: []
  };
}
export const AccessTuple = {
  typeUrl: "/ethermint.evm.v1.AccessTuple",
  is(o: any): o is AccessTuple {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storageKeys) && (!o.storageKeys.length || typeof o.storageKeys[0] === "string"));
  },
  isAmino(o: any): o is AccessTupleAmino {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
  },
  encode(message: AccessTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storageKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessTuple {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.storageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AccessTuple>): AccessTuple {
    const message = createBaseAccessTuple();
    message.address = object.address ?? "";
    message.storageKeys = object.storageKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessTupleAmino): AccessTuple {
    const message = createBaseAccessTuple();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.storageKeys = object.storage_keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: AccessTuple): AccessTupleAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.storageKeys) {
      obj.storage_keys = message.storageKeys.map(e => e);
    } else {
      obj.storage_keys = message.storageKeys;
    }
    return obj;
  },
  fromAminoMsg(object: AccessTupleAminoMsg): AccessTuple {
    return AccessTuple.fromAmino(object.value);
  },
  fromProtoMsg(message: AccessTupleProtoMsg): AccessTuple {
    return AccessTuple.decode(message.value);
  },
  toProto(message: AccessTuple): Uint8Array {
    return AccessTuple.encode(message).finish();
  },
  toProtoMsg(message: AccessTuple): AccessTupleProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.AccessTuple",
      value: AccessTuple.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: BigInt(0),
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    overrides: undefined,
    enableMemory: false,
    enableReturnData: false,
    tracerJsonConfig: ""
  };
}
export const TraceConfig = {
  typeUrl: "/ethermint.evm.v1.TraceConfig",
  is(o: any): o is TraceConfig {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disableStack === "boolean" && typeof o.disableStorage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enableMemory === "boolean" && typeof o.enableReturnData === "boolean" && typeof o.tracerJsonConfig === "string");
  },
  isAmino(o: any): o is TraceConfigAmino {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disable_stack === "boolean" && typeof o.disable_storage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enable_memory === "boolean" && typeof o.enable_return_data === "boolean" && typeof o.tracer_json_config === "string");
  },
  encode(message: TraceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (message.reexec !== BigInt(0)) {
      writer.uint32(24).uint64(message.reexec);
    }
    if (message.disableStack === true) {
      writer.uint32(40).bool(message.disableStack);
    }
    if (message.disableStorage === true) {
      writer.uint32(48).bool(message.disableStorage);
    }
    if (message.debug === true) {
      writer.uint32(64).bool(message.debug);
    }
    if (message.limit !== 0) {
      writer.uint32(72).int32(message.limit);
    }
    if (message.overrides !== undefined) {
      ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
    }
    if (message.enableMemory === true) {
      writer.uint32(88).bool(message.enableMemory);
    }
    if (message.enableReturnData === true) {
      writer.uint32(96).bool(message.enableReturnData);
    }
    if (message.tracerJsonConfig !== "") {
      writer.uint32(106).string(message.tracerJsonConfig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TraceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracer = reader.string();
          break;
        case 2:
          message.timeout = reader.string();
          break;
        case 3:
          message.reexec = reader.uint64();
          break;
        case 5:
          message.disableStack = reader.bool();
          break;
        case 6:
          message.disableStorage = reader.bool();
          break;
        case 8:
          message.debug = reader.bool();
          break;
        case 9:
          message.limit = reader.int32();
          break;
        case 10:
          message.overrides = ChainConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.enableMemory = reader.bool();
          break;
        case 12:
          message.enableReturnData = reader.bool();
          break;
        case 13:
          message.tracerJsonConfig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TraceConfig>): TraceConfig {
    const message = createBaseTraceConfig();
    message.tracer = object.tracer ?? "";
    message.timeout = object.timeout ?? "";
    message.reexec = object.reexec !== undefined && object.reexec !== null ? BigInt(object.reexec.toString()) : BigInt(0);
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerJsonConfig = object.tracerJsonConfig ?? "";
    return message;
  },
  fromAmino(object: TraceConfigAmino): TraceConfig {
    const message = createBaseTraceConfig();
    if (object.tracer !== undefined && object.tracer !== null) {
      message.tracer = object.tracer;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = object.timeout;
    }
    if (object.reexec !== undefined && object.reexec !== null) {
      message.reexec = BigInt(object.reexec);
    }
    if (object.disable_stack !== undefined && object.disable_stack !== null) {
      message.disableStack = object.disable_stack;
    }
    if (object.disable_storage !== undefined && object.disable_storage !== null) {
      message.disableStorage = object.disable_storage;
    }
    if (object.debug !== undefined && object.debug !== null) {
      message.debug = object.debug;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    if (object.overrides !== undefined && object.overrides !== null) {
      message.overrides = ChainConfig.fromAmino(object.overrides);
    }
    if (object.enable_memory !== undefined && object.enable_memory !== null) {
      message.enableMemory = object.enable_memory;
    }
    if (object.enable_return_data !== undefined && object.enable_return_data !== null) {
      message.enableReturnData = object.enable_return_data;
    }
    if (object.tracer_json_config !== undefined && object.tracer_json_config !== null) {
      message.tracerJsonConfig = object.tracer_json_config;
    }
    return message;
  },
  toAmino(message: TraceConfig): TraceConfigAmino {
    const obj: any = {};
    obj.tracer = message.tracer === "" ? undefined : message.tracer;
    obj.timeout = message.timeout === "" ? undefined : message.timeout;
    obj.reexec = message.reexec !== BigInt(0) ? message.reexec?.toString() : undefined;
    obj.disable_stack = message.disableStack ?? false;
    obj.disable_storage = message.disableStorage ?? false;
    obj.debug = message.debug === false ? undefined : message.debug;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    obj.overrides = message.overrides ? ChainConfig.toAmino(message.overrides) : undefined;
    obj.enable_memory = message.enableMemory ?? false;
    obj.enable_return_data = message.enableReturnData ?? false;
    obj.tracer_json_config = message.tracerJsonConfig ?? "";
    return obj;
  },
  fromAminoMsg(object: TraceConfigAminoMsg): TraceConfig {
    return TraceConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: TraceConfigProtoMsg): TraceConfig {
    return TraceConfig.decode(message.value);
  },
  toProto(message: TraceConfig): Uint8Array {
    return TraceConfig.encode(message).finish();
  },
  toProtoMsg(message: TraceConfig): TraceConfigProtoMsg {
    return {
      typeUrl: "/ethermint.evm.v1.TraceConfig",
      value: TraceConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ChainConfig.registerTypeUrl();
  }
};