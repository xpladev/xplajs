import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
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
  extra_eips: bigint[];
  /** chain_config defines the EVM chain configuration parameters */
  chain_config: ChainConfig;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allow_unprotected_txs: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/ethermint.evm.v1.Params";
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
export interface ChainConfigProtoMsg {
  type_url: "/ethermint.evm.v1.ChainConfig";
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
  type_url: "/ethermint.evm.v1.State";
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
  type_url: "/ethermint.evm.v1.TransactionLogs";
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
  block_number: bigint;
  /** tx_hash is the transaction hash */
  tx_hash: string;
  /** tx_index of the transaction in the block */
  tx_index: bigint;
  /** block_hash of the block in which the transaction was included */
  block_hash: string;
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
  type_url: "/ethermint.evm.v1.Log";
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
  contract_address: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  tx_logs: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gas_used: bigint;
}
export interface TxResultProtoMsg {
  type_url: "/ethermint.evm.v1.TxResult";
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
  storage_keys: string[];
}
export interface AccessTupleProtoMsg {
  type_url: "/ethermint.evm.v1.AccessTuple";
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
  disable_stack: boolean;
  /** disable_storage switches storage capture */
  disable_storage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfig;
  /** enable_memory switches memory capture */
  enable_memory: boolean;
  /** enable_return_data switches the capture of return data */
  enable_return_data: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracer_json_config: string;
}
export interface TraceConfigProtoMsg {
  type_url: "/ethermint.evm.v1.TraceConfig";
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
    evm_denom: "",
    enable_create: false,
    enable_call: false,
    extra_eips: [],
    chain_config: ChainConfig.fromPartial({}),
    allow_unprotected_txs: false
  };
}
export const Params = {
  typeUrl: "/ethermint.evm.v1.Params",
  aminoType: "ethermint/x/evm/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evm_denom === "string" && typeof o.enable_create === "boolean" && typeof o.enable_call === "boolean" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && ChainConfig.is(o.chain_config) && typeof o.allow_unprotected_txs === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.evm_denom === "string" && typeof o.enable_create === "boolean" && typeof o.enable_call === "boolean" && Array.isArray(o.extra_eips) && (!o.extra_eips.length || typeof o.extra_eips[0] === "bigint") && ChainConfig.isAmino(o.chain_config) && typeof o.allow_unprotected_txs === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evm_denom !== "") {
      writer.uint32(10).string(message.evm_denom);
    }
    if (message.enable_create === true) {
      writer.uint32(16).bool(message.enable_create);
    }
    if (message.enable_call === true) {
      writer.uint32(24).bool(message.enable_call);
    }
    writer.uint32(34).fork();
    for (const v of message.extra_eips) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.chain_config !== undefined) {
      ChainConfig.encode(message.chain_config, writer.uint32(42).fork()).ldelim();
    }
    if (message.allow_unprotected_txs === true) {
      writer.uint32(48).bool(message.allow_unprotected_txs);
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
          message.evm_denom = reader.string();
          break;
        case 2:
          message.enable_create = reader.bool();
          break;
        case 3:
          message.enable_call = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.extra_eips.push(reader.int64());
            }
          } else {
            message.extra_eips.push(reader.int64());
          }
          break;
        case 5:
          message.chain_config = ChainConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.allow_unprotected_txs = reader.bool();
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
    message.evm_denom = object.evm_denom ?? "";
    message.enable_create = object.enable_create ?? false;
    message.enable_call = object.enable_call ?? false;
    message.extra_eips = object.extra_eips?.map(e => BigInt(e.toString())) || [];
    message.chain_config = object.chain_config !== undefined && object.chain_config !== null ? ChainConfig.fromPartial(object.chain_config) : undefined;
    message.allow_unprotected_txs = object.allow_unprotected_txs ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.evm_denom !== undefined && object.evm_denom !== null) {
      message.evm_denom = object.evm_denom;
    }
    if (object.enable_create !== undefined && object.enable_create !== null) {
      message.enable_create = object.enable_create;
    }
    if (object.enable_call !== undefined && object.enable_call !== null) {
      message.enable_call = object.enable_call;
    }
    message.extra_eips = object.extra_eips?.map(e => BigInt(e)) || [];
    if (object.chain_config !== undefined && object.chain_config !== null) {
      message.chain_config = ChainConfig.fromAmino(object.chain_config);
    }
    if (object.allow_unprotected_txs !== undefined && object.allow_unprotected_txs !== null) {
      message.allow_unprotected_txs = object.allow_unprotected_txs;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.evm_denom = message.evm_denom === "" ? undefined : message.evm_denom;
    obj.enable_create = message.enable_create === false ? undefined : message.enable_create;
    obj.enable_call = message.enable_call === false ? undefined : message.enable_call;
    if (message.extra_eips) {
      obj.extra_eips = message.extra_eips.map(e => e.toString());
    } else {
      obj.extra_eips = message.extra_eips;
    }
    obj.chain_config = message.chain_config ? ChainConfig.toAmino(message.chain_config) : ChainConfig.toAmino(ChainConfig.fromPartial({}));
    obj.allow_unprotected_txs = message.allow_unprotected_txs === false ? undefined : message.allow_unprotected_txs;
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
    homestead_block: "",
    dao_fork_block: "",
    dao_fork_support: false,
    eip150_block: "",
    eip150_hash: "",
    eip155_block: "",
    eip158_block: "",
    byzantium_block: "",
    constantinople_block: "",
    petersburg_block: "",
    istanbul_block: "",
    muir_glacier_block: "",
    berlin_block: "",
    london_block: "",
    arrow_glacier_block: "",
    gray_glacier_block: "",
    merge_netsplit_block: "",
    shanghai_block: "",
    cancun_block: ""
  };
}
export const ChainConfig = {
  typeUrl: "/ethermint.evm.v1.ChainConfig",
  is(o: any): o is ChainConfig {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip150_hash === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.shanghai_block === "string" && typeof o.cancun_block === "string");
  },
  isAmino(o: any): o is ChainConfigAmino {
    return o && (o.$typeUrl === ChainConfig.typeUrl || typeof o.homestead_block === "string" && typeof o.dao_fork_block === "string" && typeof o.dao_fork_support === "boolean" && typeof o.eip150_block === "string" && typeof o.eip150_hash === "string" && typeof o.eip155_block === "string" && typeof o.eip158_block === "string" && typeof o.byzantium_block === "string" && typeof o.constantinople_block === "string" && typeof o.petersburg_block === "string" && typeof o.istanbul_block === "string" && typeof o.muir_glacier_block === "string" && typeof o.berlin_block === "string" && typeof o.london_block === "string" && typeof o.arrow_glacier_block === "string" && typeof o.gray_glacier_block === "string" && typeof o.merge_netsplit_block === "string" && typeof o.shanghai_block === "string" && typeof o.cancun_block === "string");
  },
  encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.homestead_block !== "") {
      writer.uint32(10).string(message.homestead_block);
    }
    if (message.dao_fork_block !== "") {
      writer.uint32(18).string(message.dao_fork_block);
    }
    if (message.dao_fork_support === true) {
      writer.uint32(24).bool(message.dao_fork_support);
    }
    if (message.eip150_block !== "") {
      writer.uint32(34).string(message.eip150_block);
    }
    if (message.eip150_hash !== "") {
      writer.uint32(42).string(message.eip150_hash);
    }
    if (message.eip155_block !== "") {
      writer.uint32(50).string(message.eip155_block);
    }
    if (message.eip158_block !== "") {
      writer.uint32(58).string(message.eip158_block);
    }
    if (message.byzantium_block !== "") {
      writer.uint32(66).string(message.byzantium_block);
    }
    if (message.constantinople_block !== "") {
      writer.uint32(74).string(message.constantinople_block);
    }
    if (message.petersburg_block !== "") {
      writer.uint32(82).string(message.petersburg_block);
    }
    if (message.istanbul_block !== "") {
      writer.uint32(90).string(message.istanbul_block);
    }
    if (message.muir_glacier_block !== "") {
      writer.uint32(98).string(message.muir_glacier_block);
    }
    if (message.berlin_block !== "") {
      writer.uint32(106).string(message.berlin_block);
    }
    if (message.london_block !== "") {
      writer.uint32(138).string(message.london_block);
    }
    if (message.arrow_glacier_block !== "") {
      writer.uint32(146).string(message.arrow_glacier_block);
    }
    if (message.gray_glacier_block !== "") {
      writer.uint32(162).string(message.gray_glacier_block);
    }
    if (message.merge_netsplit_block !== "") {
      writer.uint32(170).string(message.merge_netsplit_block);
    }
    if (message.shanghai_block !== "") {
      writer.uint32(178).string(message.shanghai_block);
    }
    if (message.cancun_block !== "") {
      writer.uint32(186).string(message.cancun_block);
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
          message.homestead_block = reader.string();
          break;
        case 2:
          message.dao_fork_block = reader.string();
          break;
        case 3:
          message.dao_fork_support = reader.bool();
          break;
        case 4:
          message.eip150_block = reader.string();
          break;
        case 5:
          message.eip150_hash = reader.string();
          break;
        case 6:
          message.eip155_block = reader.string();
          break;
        case 7:
          message.eip158_block = reader.string();
          break;
        case 8:
          message.byzantium_block = reader.string();
          break;
        case 9:
          message.constantinople_block = reader.string();
          break;
        case 10:
          message.petersburg_block = reader.string();
          break;
        case 11:
          message.istanbul_block = reader.string();
          break;
        case 12:
          message.muir_glacier_block = reader.string();
          break;
        case 13:
          message.berlin_block = reader.string();
          break;
        case 17:
          message.london_block = reader.string();
          break;
        case 18:
          message.arrow_glacier_block = reader.string();
          break;
        case 20:
          message.gray_glacier_block = reader.string();
          break;
        case 21:
          message.merge_netsplit_block = reader.string();
          break;
        case 22:
          message.shanghai_block = reader.string();
          break;
        case 23:
          message.cancun_block = reader.string();
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
    message.homestead_block = object.homestead_block ?? "";
    message.dao_fork_block = object.dao_fork_block ?? "";
    message.dao_fork_support = object.dao_fork_support ?? false;
    message.eip150_block = object.eip150_block ?? "";
    message.eip150_hash = object.eip150_hash ?? "";
    message.eip155_block = object.eip155_block ?? "";
    message.eip158_block = object.eip158_block ?? "";
    message.byzantium_block = object.byzantium_block ?? "";
    message.constantinople_block = object.constantinople_block ?? "";
    message.petersburg_block = object.petersburg_block ?? "";
    message.istanbul_block = object.istanbul_block ?? "";
    message.muir_glacier_block = object.muir_glacier_block ?? "";
    message.berlin_block = object.berlin_block ?? "";
    message.london_block = object.london_block ?? "";
    message.arrow_glacier_block = object.arrow_glacier_block ?? "";
    message.gray_glacier_block = object.gray_glacier_block ?? "";
    message.merge_netsplit_block = object.merge_netsplit_block ?? "";
    message.shanghai_block = object.shanghai_block ?? "";
    message.cancun_block = object.cancun_block ?? "";
    return message;
  },
  fromAmino(object: ChainConfigAmino): ChainConfig {
    const message = createBaseChainConfig();
    if (object.homestead_block !== undefined && object.homestead_block !== null) {
      message.homestead_block = object.homestead_block;
    }
    if (object.dao_fork_block !== undefined && object.dao_fork_block !== null) {
      message.dao_fork_block = object.dao_fork_block;
    }
    if (object.dao_fork_support !== undefined && object.dao_fork_support !== null) {
      message.dao_fork_support = object.dao_fork_support;
    }
    if (object.eip150_block !== undefined && object.eip150_block !== null) {
      message.eip150_block = object.eip150_block;
    }
    if (object.eip150_hash !== undefined && object.eip150_hash !== null) {
      message.eip150_hash = object.eip150_hash;
    }
    if (object.eip155_block !== undefined && object.eip155_block !== null) {
      message.eip155_block = object.eip155_block;
    }
    if (object.eip158_block !== undefined && object.eip158_block !== null) {
      message.eip158_block = object.eip158_block;
    }
    if (object.byzantium_block !== undefined && object.byzantium_block !== null) {
      message.byzantium_block = object.byzantium_block;
    }
    if (object.constantinople_block !== undefined && object.constantinople_block !== null) {
      message.constantinople_block = object.constantinople_block;
    }
    if (object.petersburg_block !== undefined && object.petersburg_block !== null) {
      message.petersburg_block = object.petersburg_block;
    }
    if (object.istanbul_block !== undefined && object.istanbul_block !== null) {
      message.istanbul_block = object.istanbul_block;
    }
    if (object.muir_glacier_block !== undefined && object.muir_glacier_block !== null) {
      message.muir_glacier_block = object.muir_glacier_block;
    }
    if (object.berlin_block !== undefined && object.berlin_block !== null) {
      message.berlin_block = object.berlin_block;
    }
    if (object.london_block !== undefined && object.london_block !== null) {
      message.london_block = object.london_block;
    }
    if (object.arrow_glacier_block !== undefined && object.arrow_glacier_block !== null) {
      message.arrow_glacier_block = object.arrow_glacier_block;
    }
    if (object.gray_glacier_block !== undefined && object.gray_glacier_block !== null) {
      message.gray_glacier_block = object.gray_glacier_block;
    }
    if (object.merge_netsplit_block !== undefined && object.merge_netsplit_block !== null) {
      message.merge_netsplit_block = object.merge_netsplit_block;
    }
    if (object.shanghai_block !== undefined && object.shanghai_block !== null) {
      message.shanghai_block = object.shanghai_block;
    }
    if (object.cancun_block !== undefined && object.cancun_block !== null) {
      message.cancun_block = object.cancun_block;
    }
    return message;
  },
  toAmino(message: ChainConfig): ChainConfigAmino {
    const obj: any = {};
    obj.homestead_block = message.homestead_block === "" ? undefined : message.homestead_block;
    obj.dao_fork_block = message.dao_fork_block === "" ? undefined : message.dao_fork_block;
    obj.dao_fork_support = message.dao_fork_support === false ? undefined : message.dao_fork_support;
    obj.eip150_block = message.eip150_block === "" ? undefined : message.eip150_block;
    obj.eip150_hash = message.eip150_hash === "" ? undefined : message.eip150_hash;
    obj.eip155_block = message.eip155_block === "" ? undefined : message.eip155_block;
    obj.eip158_block = message.eip158_block === "" ? undefined : message.eip158_block;
    obj.byzantium_block = message.byzantium_block === "" ? undefined : message.byzantium_block;
    obj.constantinople_block = message.constantinople_block === "" ? undefined : message.constantinople_block;
    obj.petersburg_block = message.petersburg_block === "" ? undefined : message.petersburg_block;
    obj.istanbul_block = message.istanbul_block === "" ? undefined : message.istanbul_block;
    obj.muir_glacier_block = message.muir_glacier_block === "" ? undefined : message.muir_glacier_block;
    obj.berlin_block = message.berlin_block === "" ? undefined : message.berlin_block;
    obj.london_block = message.london_block === "" ? undefined : message.london_block;
    obj.arrow_glacier_block = message.arrow_glacier_block === "" ? undefined : message.arrow_glacier_block;
    obj.gray_glacier_block = message.gray_glacier_block === "" ? undefined : message.gray_glacier_block;
    obj.merge_netsplit_block = message.merge_netsplit_block === "" ? undefined : message.merge_netsplit_block;
    obj.shanghai_block = message.shanghai_block === "" ? undefined : message.shanghai_block;
    obj.cancun_block = message.cancun_block === "" ? undefined : message.cancun_block;
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
    block_number: BigInt(0),
    tx_hash: "",
    tx_index: BigInt(0),
    block_hash: "",
    index: BigInt(0),
    removed: false
  };
}
export const Log = {
  typeUrl: "/ethermint.evm.v1.Log",
  is(o: any): o is Log {
    return o && (o.$typeUrl === Log.typeUrl || typeof o.address === "string" && Array.isArray(o.topics) && (!o.topics.length || typeof o.topics[0] === "string") && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.block_number === "bigint" && typeof o.tx_hash === "string" && typeof o.tx_index === "bigint" && typeof o.block_hash === "string" && typeof o.index === "bigint" && typeof o.removed === "boolean");
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
    if (message.block_number !== BigInt(0)) {
      writer.uint32(32).uint64(message.block_number);
    }
    if (message.tx_hash !== "") {
      writer.uint32(42).string(message.tx_hash);
    }
    if (message.tx_index !== BigInt(0)) {
      writer.uint32(48).uint64(message.tx_index);
    }
    if (message.block_hash !== "") {
      writer.uint32(58).string(message.block_hash);
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
          message.block_number = reader.uint64();
          break;
        case 5:
          message.tx_hash = reader.string();
          break;
        case 6:
          message.tx_index = reader.uint64();
          break;
        case 7:
          message.block_hash = reader.string();
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
    message.block_number = object.block_number !== undefined && object.block_number !== null ? BigInt(object.block_number.toString()) : BigInt(0);
    message.tx_hash = object.tx_hash ?? "";
    message.tx_index = object.tx_index !== undefined && object.tx_index !== null ? BigInt(object.tx_index.toString()) : BigInt(0);
    message.block_hash = object.block_hash ?? "";
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
      message.block_number = BigInt(object.block_number);
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.tx_hash = object.tx_hash;
    }
    if (object.tx_index !== undefined && object.tx_index !== null) {
      message.tx_index = BigInt(object.tx_index);
    }
    if (object.block_hash !== undefined && object.block_hash !== null) {
      message.block_hash = object.block_hash;
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
    obj.block_number = message.block_number ? message.block_number?.toString() : "0";
    obj.tx_hash = message.tx_hash ?? "";
    obj.tx_index = message.tx_index ? message.tx_index?.toString() : "0";
    obj.block_hash = message.block_hash ?? "";
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
    contract_address: "",
    bloom: new Uint8Array(),
    tx_logs: TransactionLogs.fromPartial({}),
    ret: new Uint8Array(),
    reverted: false,
    gas_used: BigInt(0)
  };
}
export const TxResult = {
  typeUrl: "/ethermint.evm.v1.TxResult",
  is(o: any): o is TxResult {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.is(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
  },
  isAmino(o: any): o is TxResultAmino {
    return o && (o.$typeUrl === TxResult.typeUrl || typeof o.contract_address === "string" && (o.bloom instanceof Uint8Array || typeof o.bloom === "string") && TransactionLogs.isAmino(o.tx_logs) && (o.ret instanceof Uint8Array || typeof o.ret === "string") && typeof o.reverted === "boolean" && typeof o.gas_used === "bigint");
  },
  encode(message: TxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.bloom.length !== 0) {
      writer.uint32(18).bytes(message.bloom);
    }
    if (message.tx_logs !== undefined) {
      TransactionLogs.encode(message.tx_logs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(34).bytes(message.ret);
    }
    if (message.reverted === true) {
      writer.uint32(40).bool(message.reverted);
    }
    if (message.gas_used !== BigInt(0)) {
      writer.uint32(48).uint64(message.gas_used);
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
          message.contract_address = reader.string();
          break;
        case 2:
          message.bloom = reader.bytes();
          break;
        case 3:
          message.tx_logs = TransactionLogs.decode(reader, reader.uint32());
          break;
        case 4:
          message.ret = reader.bytes();
          break;
        case 5:
          message.reverted = reader.bool();
          break;
        case 6:
          message.gas_used = reader.uint64();
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
    message.contract_address = object.contract_address ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    message.tx_logs = object.tx_logs !== undefined && object.tx_logs !== null ? TransactionLogs.fromPartial(object.tx_logs) : undefined;
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxResultAmino): TxResult {
    const message = createBaseTxResult();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contract_address = object.contract_address;
    }
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = bytesFromBase64(object.bloom);
    }
    if (object.tx_logs !== undefined && object.tx_logs !== null) {
      message.tx_logs = TransactionLogs.fromAmino(object.tx_logs);
    }
    if (object.ret !== undefined && object.ret !== null) {
      message.ret = bytesFromBase64(object.ret);
    }
    if (object.reverted !== undefined && object.reverted !== null) {
      message.reverted = object.reverted;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gas_used = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: TxResult): TxResultAmino {
    const obj: any = {};
    obj.contract_address = message.contract_address === "" ? undefined : message.contract_address;
    obj.bloom = message.bloom ? base64FromBytes(message.bloom) : undefined;
    obj.tx_logs = message.tx_logs ? TransactionLogs.toAmino(message.tx_logs) : TransactionLogs.toAmino(TransactionLogs.fromPartial({}));
    obj.ret = message.ret ? base64FromBytes(message.ret) : undefined;
    obj.reverted = message.reverted === false ? undefined : message.reverted;
    obj.gas_used = message.gas_used !== BigInt(0) ? message.gas_used?.toString() : undefined;
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
    storage_keys: []
  };
}
export const AccessTuple = {
  typeUrl: "/ethermint.evm.v1.AccessTuple",
  is(o: any): o is AccessTuple {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
  },
  isAmino(o: any): o is AccessTupleAmino {
    return o && (o.$typeUrl === AccessTuple.typeUrl || typeof o.address === "string" && Array.isArray(o.storage_keys) && (!o.storage_keys.length || typeof o.storage_keys[0] === "string"));
  },
  encode(message: AccessTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storage_keys) {
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
          message.storage_keys.push(reader.string());
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
    message.storage_keys = object.storage_keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AccessTupleAmino): AccessTuple {
    const message = createBaseAccessTuple();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.storage_keys = object.storage_keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: AccessTuple): AccessTupleAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.storage_keys) {
      obj.storage_keys = message.storage_keys.map(e => e);
    } else {
      obj.storage_keys = message.storage_keys;
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
    disable_stack: false,
    disable_storage: false,
    debug: false,
    limit: 0,
    overrides: undefined,
    enable_memory: false,
    enable_return_data: false,
    tracer_json_config: ""
  };
}
export const TraceConfig = {
  typeUrl: "/ethermint.evm.v1.TraceConfig",
  is(o: any): o is TraceConfig {
    return o && (o.$typeUrl === TraceConfig.typeUrl || typeof o.tracer === "string" && typeof o.timeout === "string" && typeof o.reexec === "bigint" && typeof o.disable_stack === "boolean" && typeof o.disable_storage === "boolean" && typeof o.debug === "boolean" && typeof o.limit === "number" && typeof o.enable_memory === "boolean" && typeof o.enable_return_data === "boolean" && typeof o.tracer_json_config === "string");
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
    if (message.disable_stack === true) {
      writer.uint32(40).bool(message.disable_stack);
    }
    if (message.disable_storage === true) {
      writer.uint32(48).bool(message.disable_storage);
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
    if (message.enable_memory === true) {
      writer.uint32(88).bool(message.enable_memory);
    }
    if (message.enable_return_data === true) {
      writer.uint32(96).bool(message.enable_return_data);
    }
    if (message.tracer_json_config !== "") {
      writer.uint32(106).string(message.tracer_json_config);
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
          message.disable_stack = reader.bool();
          break;
        case 6:
          message.disable_storage = reader.bool();
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
          message.enable_memory = reader.bool();
          break;
        case 12:
          message.enable_return_data = reader.bool();
          break;
        case 13:
          message.tracer_json_config = reader.string();
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
    message.disable_stack = object.disable_stack ?? false;
    message.disable_storage = object.disable_storage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    message.overrides = object.overrides !== undefined && object.overrides !== null ? ChainConfig.fromPartial(object.overrides) : undefined;
    message.enable_memory = object.enable_memory ?? false;
    message.enable_return_data = object.enable_return_data ?? false;
    message.tracer_json_config = object.tracer_json_config ?? "";
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
      message.disable_stack = object.disable_stack;
    }
    if (object.disable_storage !== undefined && object.disable_storage !== null) {
      message.disable_storage = object.disable_storage;
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
      message.enable_memory = object.enable_memory;
    }
    if (object.enable_return_data !== undefined && object.enable_return_data !== null) {
      message.enable_return_data = object.enable_return_data;
    }
    if (object.tracer_json_config !== undefined && object.tracer_json_config !== null) {
      message.tracer_json_config = object.tracer_json_config;
    }
    return message;
  },
  toAmino(message: TraceConfig): TraceConfigAmino {
    const obj: any = {};
    obj.tracer = message.tracer === "" ? undefined : message.tracer;
    obj.timeout = message.timeout === "" ? undefined : message.timeout;
    obj.reexec = message.reexec !== BigInt(0) ? message.reexec?.toString() : undefined;
    obj.disable_stack = message.disable_stack ?? false;
    obj.disable_storage = message.disable_storage ?? false;
    obj.debug = message.debug === false ? undefined : message.debug;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    obj.overrides = message.overrides ? ChainConfig.toAmino(message.overrides) : undefined;
    obj.enable_memory = message.enable_memory ?? false;
    obj.enable_return_data = message.enable_return_data ?? false;
    obj.tracer_json_config = message.tracer_json_config ?? "";
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