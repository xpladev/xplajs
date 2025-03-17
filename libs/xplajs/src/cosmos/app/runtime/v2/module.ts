import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Module is the config object for the runtime module. */
export interface Module {
  /** app_name is the name of the app. */
  app_name: string;
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  pre_blockers: string[];
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers: string[];
  /**
   * tx_validators specifies the module names for tx validators
   * If this is left empty, no tx validation will be registered.
   */
  tx_validators: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis: string[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order (alphabetically).
   */
  order_migrations: string[];
  /** GasConfig is the config object for gas limits. */
  gas_config?: GasConfig;
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys: StoreKeyConfig[];
  /**
   * skip_store_keys is an optional list of store keys to skip when constructing the
   * module's keeper. This is useful when a module does not have a store key.
   * NOTE: the provided environment variable will have a fake store service.
   */
  skip_store_keys: string[];
}
export interface ModuleProtoMsg {
  type_url: "/cosmos.app.runtime.v2.Module";
  value: Uint8Array;
}
/** Module is the config object for the runtime module. */
export interface ModuleAmino {
  /** app_name is the name of the app. */
  app_name: string;
  /**
   * pre_blockers specifies the module names of pre blockers
   * to call in the order in which they should be called. If this is left empty
   * no pre blocker will be registered.
   */
  pre_blockers: string[];
  /**
   * begin_blockers specifies the module names of begin blockers
   * to call in the order in which they should be called. If this is left empty
   * no begin blocker will be registered.
   */
  begin_blockers: string[];
  /**
   * end_blockers specifies the module names of the end blockers
   * to call in the order in which they should be called. If this is left empty
   * no end blocker will be registered.
   */
  end_blockers: string[];
  /**
   * tx_validators specifies the module names for tx validators
   * If this is left empty, no tx validation will be registered.
   */
  tx_validators: string[];
  /**
   * init_genesis specifies the module names of init genesis functions
   * to call in the order in which they should be called. If this is left empty
   * no init genesis function will be registered.
   */
  init_genesis: string[];
  /**
   * export_genesis specifies the order in which to export module genesis data.
   * If this is left empty, the init_genesis order will be used for export genesis
   * if it is specified.
   */
  export_genesis: string[];
  /**
   * order_migrations defines the order in which module migrations are performed.
   * If this is left empty, it uses the default migration order (alphabetically).
   */
  order_migrations: string[];
  /** GasConfig is the config object for gas limits. */
  gas_config?: GasConfigAmino;
  /**
   * override_store_keys is an optional list of overrides for the module store keys
   * to be used in keeper construction.
   */
  override_store_keys: StoreKeyConfigAmino[];
  /**
   * skip_store_keys is an optional list of store keys to skip when constructing the
   * module's keeper. This is useful when a module does not have a store key.
   * NOTE: the provided environment variable will have a fake store service.
   */
  skip_store_keys: string[];
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
/** GasConfig is the config object for gas limits. */
export interface GasConfig {
  /** validate_tx_gas_limit is the gas limit for validating a tx. */
  validate_tx_gas_limit: bigint;
  /** query_gas_limit is the gas limit for querying. */
  query_gas_limit: bigint;
  /** simulation_gas_limit is the gas limit for simulation. */
  simulation_gas_limit: bigint;
}
export interface GasConfigProtoMsg {
  type_url: "/cosmos.app.runtime.v2.GasConfig";
  value: Uint8Array;
}
/** GasConfig is the config object for gas limits. */
export interface GasConfigAmino {
  /** validate_tx_gas_limit is the gas limit for validating a tx. */
  validate_tx_gas_limit: string;
  /** query_gas_limit is the gas limit for querying. */
  query_gas_limit: string;
  /** simulation_gas_limit is the gas limit for simulation. */
  simulation_gas_limit: string;
}
export interface GasConfigAminoMsg {
  type: "cosmos-sdk/GasConfig";
  value: GasConfigAmino;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
  /** name of the module to override the store key of */
  module_name: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key: string;
}
export interface StoreKeyConfigProtoMsg {
  type_url: "/cosmos.app.runtime.v2.StoreKeyConfig";
  value: Uint8Array;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigAmino {
  /** name of the module to override the store key of */
  module_name: string;
  /** the kv store key to use instead of the module name. */
  kv_store_key: string;
}
export interface StoreKeyConfigAminoMsg {
  type: "cosmos-sdk/StoreKeyConfig";
  value: StoreKeyConfigAmino;
}
function createBaseModule(): Module {
  return {
    app_name: "",
    pre_blockers: [],
    begin_blockers: [],
    end_blockers: [],
    tx_validators: [],
    init_genesis: [],
    export_genesis: [],
    order_migrations: [],
    gas_config: undefined,
    override_store_keys: [],
    skip_store_keys: []
  };
}
export const Module = {
  typeUrl: "/cosmos.app.runtime.v2.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.pre_blockers) && (!o.pre_blockers.length || typeof o.pre_blockers[0] === "string") && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.tx_validators) && (!o.tx_validators.length || typeof o.tx_validators[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.is(o.override_store_keys[0])) && Array.isArray(o.skip_store_keys) && (!o.skip_store_keys.length || typeof o.skip_store_keys[0] === "string"));
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.pre_blockers) && (!o.pre_blockers.length || typeof o.pre_blockers[0] === "string") && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.tx_validators) && (!o.tx_validators.length || typeof o.tx_validators[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isAmino(o.override_store_keys[0])) && Array.isArray(o.skip_store_keys) && (!o.skip_store_keys.length || typeof o.skip_store_keys[0] === "string"));
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.app_name !== "") {
      writer.uint32(10).string(message.app_name);
    }
    for (const v of message.pre_blockers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.begin_blockers) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.end_blockers) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.tx_validators) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.init_genesis) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.export_genesis) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.order_migrations) {
      writer.uint32(66).string(v!);
    }
    if (message.gas_config !== undefined) {
      GasConfig.encode(message.gas_config, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.override_store_keys) {
      StoreKeyConfig.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.skip_store_keys) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app_name = reader.string();
          break;
        case 2:
          message.pre_blockers.push(reader.string());
          break;
        case 3:
          message.begin_blockers.push(reader.string());
          break;
        case 4:
          message.end_blockers.push(reader.string());
          break;
        case 5:
          message.tx_validators.push(reader.string());
          break;
        case 6:
          message.init_genesis.push(reader.string());
          break;
        case 7:
          message.export_genesis.push(reader.string());
          break;
        case 8:
          message.order_migrations.push(reader.string());
          break;
        case 9:
          message.gas_config = GasConfig.decode(reader, reader.uint32());
          break;
        case 10:
          message.override_store_keys.push(StoreKeyConfig.decode(reader, reader.uint32()));
          break;
        case 11:
          message.skip_store_keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.app_name = object.app_name ?? "";
    message.pre_blockers = object.pre_blockers?.map(e => e) || [];
    message.begin_blockers = object.begin_blockers?.map(e => e) || [];
    message.end_blockers = object.end_blockers?.map(e => e) || [];
    message.tx_validators = object.tx_validators?.map(e => e) || [];
    message.init_genesis = object.init_genesis?.map(e => e) || [];
    message.export_genesis = object.export_genesis?.map(e => e) || [];
    message.order_migrations = object.order_migrations?.map(e => e) || [];
    message.gas_config = object.gas_config !== undefined && object.gas_config !== null ? GasConfig.fromPartial(object.gas_config) : undefined;
    message.override_store_keys = object.override_store_keys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
    message.skip_store_keys = object.skip_store_keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.app_name !== undefined && object.app_name !== null) {
      message.app_name = object.app_name;
    }
    message.pre_blockers = object.pre_blockers?.map(e => e) || [];
    message.begin_blockers = object.begin_blockers?.map(e => e) || [];
    message.end_blockers = object.end_blockers?.map(e => e) || [];
    message.tx_validators = object.tx_validators?.map(e => e) || [];
    message.init_genesis = object.init_genesis?.map(e => e) || [];
    message.export_genesis = object.export_genesis?.map(e => e) || [];
    message.order_migrations = object.order_migrations?.map(e => e) || [];
    if (object.gas_config !== undefined && object.gas_config !== null) {
      message.gas_config = GasConfig.fromAmino(object.gas_config);
    }
    message.override_store_keys = object.override_store_keys?.map(e => StoreKeyConfig.fromAmino(e)) || [];
    message.skip_store_keys = object.skip_store_keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.app_name = message.app_name === "" ? undefined : message.app_name;
    if (message.pre_blockers) {
      obj.pre_blockers = message.pre_blockers.map(e => e);
    } else {
      obj.pre_blockers = message.pre_blockers;
    }
    if (message.begin_blockers) {
      obj.begin_blockers = message.begin_blockers.map(e => e);
    } else {
      obj.begin_blockers = message.begin_blockers;
    }
    if (message.end_blockers) {
      obj.end_blockers = message.end_blockers.map(e => e);
    } else {
      obj.end_blockers = message.end_blockers;
    }
    if (message.tx_validators) {
      obj.tx_validators = message.tx_validators.map(e => e);
    } else {
      obj.tx_validators = message.tx_validators;
    }
    if (message.init_genesis) {
      obj.init_genesis = message.init_genesis.map(e => e);
    } else {
      obj.init_genesis = message.init_genesis;
    }
    if (message.export_genesis) {
      obj.export_genesis = message.export_genesis.map(e => e);
    } else {
      obj.export_genesis = message.export_genesis;
    }
    if (message.order_migrations) {
      obj.order_migrations = message.order_migrations.map(e => e);
    } else {
      obj.order_migrations = message.order_migrations;
    }
    obj.gas_config = message.gas_config ? GasConfig.toAmino(message.gas_config) : undefined;
    if (message.override_store_keys) {
      obj.override_store_keys = message.override_store_keys.map(e => e ? StoreKeyConfig.toAmino(e) : undefined);
    } else {
      obj.override_store_keys = message.override_store_keys;
    }
    if (message.skip_store_keys) {
      obj.skip_store_keys = message.skip_store_keys.map(e => e);
    } else {
      obj.skip_store_keys = message.skip_store_keys;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.Module",
      value: Module.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GasConfig.registerTypeUrl();
    StoreKeyConfig.registerTypeUrl();
  }
};
function createBaseGasConfig(): GasConfig {
  return {
    validate_tx_gas_limit: BigInt(0),
    query_gas_limit: BigInt(0),
    simulation_gas_limit: BigInt(0)
  };
}
export const GasConfig = {
  typeUrl: "/cosmos.app.runtime.v2.GasConfig",
  aminoType: "cosmos-sdk/GasConfig",
  is(o: any): o is GasConfig {
    return o && (o.$typeUrl === GasConfig.typeUrl || typeof o.validate_tx_gas_limit === "bigint" && typeof o.query_gas_limit === "bigint" && typeof o.simulation_gas_limit === "bigint");
  },
  isAmino(o: any): o is GasConfigAmino {
    return o && (o.$typeUrl === GasConfig.typeUrl || typeof o.validate_tx_gas_limit === "bigint" && typeof o.query_gas_limit === "bigint" && typeof o.simulation_gas_limit === "bigint");
  },
  encode(message: GasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validate_tx_gas_limit !== BigInt(0)) {
      writer.uint32(8).uint64(message.validate_tx_gas_limit);
    }
    if (message.query_gas_limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.query_gas_limit);
    }
    if (message.simulation_gas_limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.simulation_gas_limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validate_tx_gas_limit = reader.uint64();
          break;
        case 2:
          message.query_gas_limit = reader.uint64();
          break;
        case 3:
          message.simulation_gas_limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasConfig>): GasConfig {
    const message = createBaseGasConfig();
    message.validate_tx_gas_limit = object.validate_tx_gas_limit !== undefined && object.validate_tx_gas_limit !== null ? BigInt(object.validate_tx_gas_limit.toString()) : BigInt(0);
    message.query_gas_limit = object.query_gas_limit !== undefined && object.query_gas_limit !== null ? BigInt(object.query_gas_limit.toString()) : BigInt(0);
    message.simulation_gas_limit = object.simulation_gas_limit !== undefined && object.simulation_gas_limit !== null ? BigInt(object.simulation_gas_limit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GasConfigAmino): GasConfig {
    const message = createBaseGasConfig();
    if (object.validate_tx_gas_limit !== undefined && object.validate_tx_gas_limit !== null) {
      message.validate_tx_gas_limit = BigInt(object.validate_tx_gas_limit);
    }
    if (object.query_gas_limit !== undefined && object.query_gas_limit !== null) {
      message.query_gas_limit = BigInt(object.query_gas_limit);
    }
    if (object.simulation_gas_limit !== undefined && object.simulation_gas_limit !== null) {
      message.simulation_gas_limit = BigInt(object.simulation_gas_limit);
    }
    return message;
  },
  toAmino(message: GasConfig): GasConfigAmino {
    const obj: any = {};
    obj.validate_tx_gas_limit = message.validate_tx_gas_limit !== BigInt(0) ? message.validate_tx_gas_limit?.toString() : undefined;
    obj.query_gas_limit = message.query_gas_limit !== BigInt(0) ? message.query_gas_limit?.toString() : undefined;
    obj.simulation_gas_limit = message.simulation_gas_limit !== BigInt(0) ? message.simulation_gas_limit?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GasConfigAminoMsg): GasConfig {
    return GasConfig.fromAmino(object.value);
  },
  toAminoMsg(message: GasConfig): GasConfigAminoMsg {
    return {
      type: "cosmos-sdk/GasConfig",
      value: GasConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: GasConfigProtoMsg): GasConfig {
    return GasConfig.decode(message.value);
  },
  toProto(message: GasConfig): Uint8Array {
    return GasConfig.encode(message).finish();
  },
  toProtoMsg(message: GasConfig): GasConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.GasConfig",
      value: GasConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStoreKeyConfig(): StoreKeyConfig {
  return {
    module_name: "",
    kv_store_key: ""
  };
}
export const StoreKeyConfig = {
  typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig",
  aminoType: "cosmos-sdk/StoreKeyConfig",
  is(o: any): o is StoreKeyConfig {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  isAmino(o: any): o is StoreKeyConfigAmino {
    return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
  },
  encode(message: StoreKeyConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module_name !== "") {
      writer.uint32(10).string(message.module_name);
    }
    if (message.kv_store_key !== "") {
      writer.uint32(18).string(message.kv_store_key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKeyConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.module_name = reader.string();
          break;
        case 2:
          message.kv_store_key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreKeyConfig>): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    message.module_name = object.module_name ?? "";
    message.kv_store_key = object.kv_store_key ?? "";
    return message;
  },
  fromAmino(object: StoreKeyConfigAmino): StoreKeyConfig {
    const message = createBaseStoreKeyConfig();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.module_name = object.module_name;
    }
    if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
      message.kv_store_key = object.kv_store_key;
    }
    return message;
  },
  toAmino(message: StoreKeyConfig): StoreKeyConfigAmino {
    const obj: any = {};
    obj.module_name = message.module_name === "" ? undefined : message.module_name;
    obj.kv_store_key = message.kv_store_key === "" ? undefined : message.kv_store_key;
    return obj;
  },
  fromAminoMsg(object: StoreKeyConfigAminoMsg): StoreKeyConfig {
    return StoreKeyConfig.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKeyConfig): StoreKeyConfigAminoMsg {
    return {
      type: "cosmos-sdk/StoreKeyConfig",
      value: StoreKeyConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKeyConfigProtoMsg): StoreKeyConfig {
    return StoreKeyConfig.decode(message.value);
  },
  toProto(message: StoreKeyConfig): Uint8Array {
    return StoreKeyConfig.encode(message).finish();
  },
  toProtoMsg(message: StoreKeyConfig): StoreKeyConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.runtime.v2.StoreKeyConfig",
      value: StoreKeyConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};