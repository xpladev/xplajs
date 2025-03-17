import { Duration, DurationAmino } from "../../../../google/protobuf/duration";
import { Height, HeightAmino } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino } from "../../../../cosmos/ics23/v1/proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootAmino } from "../../../core/commitment/v1/commitment";
import { SignedHeader, SignedHeaderAmino } from "../../../../tendermint/types/types";
import { ValidatorSet, ValidatorSetAmino } from "../../../../tendermint/types/validator";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
  chain_id: string;
  trust_level: Fraction;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period: Duration;
  /** duration of the staking unbonding period */
  unbonding_period: Duration;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift: Duration;
  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height: Height;
  /** Latest height the client was updated to */
  latest_height: Height;
  /** Proof specifications used in verifying counterparty state */
  proof_specs: ProofSpec[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path: string[];
  /** allow_update_after_expiry is deprecated */
  /** @deprecated */
  allow_update_after_expiry: boolean;
  /** allow_update_after_misbehaviour is deprecated */
  /** @deprecated */
  allow_update_after_misbehaviour: boolean;
}
export interface ClientStateProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientStateAmino {
  chain_id: string;
  trust_level: FractionAmino;
  /**
   * duration of the period since the LastestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period: DurationAmino;
  /** duration of the staking unbonding period */
  unbonding_period: DurationAmino;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  max_clock_drift: DurationAmino;
  /** Block height when the client was frozen due to a misbehaviour */
  frozen_height: HeightAmino;
  /** Latest height the client was updated to */
  latest_height: HeightAmino;
  /** Proof specifications used in verifying counterparty state */
  proof_specs: ProofSpecAmino[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path: string[];
  /** allow_update_after_expiry is deprecated */
  /** @deprecated */
  allow_update_after_expiry: boolean;
  /** allow_update_after_misbehaviour is deprecated */
  /** @deprecated */
  allow_update_after_misbehaviour: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: Date;
  /** commitment root (i.e app hash) */
  root: MerkleRoot;
  next_validators_hash: Uint8Array;
}
export interface ConsensusStateProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.ConsensusState";
  value: Uint8Array;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusStateAmino {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: string;
  /** commitment root (i.e app hash) */
  root: MerkleRootAmino;
  next_validators_hash: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  /** ClientID is deprecated */
  /** @deprecated */
  client_id: string;
  header1?: Header;
  header2?: Header;
}
export interface MisbehaviourProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface MisbehaviourAmino {
  /** ClientID is deprecated */
  /** @deprecated */
  client_id: string;
  header_1?: HeaderAmino;
  header_2?: HeaderAmino;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
  signed_header?: SignedHeader;
  validator_set?: ValidatorSet;
  trusted_height: Height;
  trusted_validators?: ValidatorSet;
}
export interface HeaderProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Header";
  value: Uint8Array;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface HeaderAmino {
  signed_header?: SignedHeaderAmino;
  validator_set?: ValidatorSetAmino;
  trusted_height: HeightAmino;
  trusted_validators?: ValidatorSetAmino;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
  numerator: bigint;
  denominator: bigint;
}
export interface FractionProtoMsg {
  type_url: "/ibc.lightclients.tendermint.v1.Fraction";
  value: Uint8Array;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface FractionAmino {
  numerator: string;
  denominator: string;
}
export interface FractionAminoMsg {
  type: "cosmos-sdk/Fraction";
  value: FractionAmino;
}
function createBaseClientState(): ClientState {
  return {
    chain_id: "",
    trust_level: Fraction.fromPartial({}),
    trusting_period: Duration.fromPartial({}),
    unbonding_period: Duration.fromPartial({}),
    max_clock_drift: Duration.fromPartial({}),
    frozen_height: Height.fromPartial({}),
    latest_height: Height.fromPartial({}),
    proof_specs: [],
    upgrade_path: [],
    allow_update_after_expiry: false,
    allow_update_after_misbehaviour: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Fraction.is(o.trust_level) && Duration.is(o.trusting_period) && Duration.is(o.unbonding_period) && Duration.is(o.max_clock_drift) && Height.is(o.frozen_height) && Height.is(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || ProofSpec.is(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Fraction.isAmino(o.trust_level) && Duration.isAmino(o.trusting_period) && Duration.isAmino(o.unbonding_period) && Duration.isAmino(o.max_clock_drift) && Height.isAmino(o.frozen_height) && Height.isAmino(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || ProofSpec.isAmino(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean");
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.trust_level !== undefined) {
      Fraction.encode(message.trust_level, writer.uint32(18).fork()).ldelim();
    }
    if (message.trusting_period !== undefined) {
      Duration.encode(message.trusting_period, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbonding_period !== undefined) {
      Duration.encode(message.unbonding_period, writer.uint32(34).fork()).ldelim();
    }
    if (message.max_clock_drift !== undefined) {
      Duration.encode(message.max_clock_drift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozen_height !== undefined) {
      Height.encode(message.frozen_height, writer.uint32(50).fork()).ldelim();
    }
    if (message.latest_height !== undefined) {
      Height.encode(message.latest_height, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proof_specs) {
      ProofSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgrade_path) {
      writer.uint32(74).string(v!);
    }
    if (message.allow_update_after_expiry === true) {
      writer.uint32(80).bool(message.allow_update_after_expiry);
    }
    if (message.allow_update_after_misbehaviour === true) {
      writer.uint32(88).bool(message.allow_update_after_misbehaviour);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.trust_level = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trusting_period = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbonding_period = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.max_clock_drift = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozen_height = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latest_height = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proof_specs.push(ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgrade_path.push(reader.string());
          break;
        case 10:
          message.allow_update_after_expiry = reader.bool();
          break;
        case 11:
          message.allow_update_after_misbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chain_id = object.chain_id ?? "";
    message.trust_level = object.trust_level !== undefined && object.trust_level !== null ? Fraction.fromPartial(object.trust_level) : undefined;
    message.trusting_period = object.trusting_period !== undefined && object.trusting_period !== null ? Duration.fromPartial(object.trusting_period) : undefined;
    message.unbonding_period = object.unbonding_period !== undefined && object.unbonding_period !== null ? Duration.fromPartial(object.unbonding_period) : undefined;
    message.max_clock_drift = object.max_clock_drift !== undefined && object.max_clock_drift !== null ? Duration.fromPartial(object.max_clock_drift) : undefined;
    message.frozen_height = object.frozen_height !== undefined && object.frozen_height !== null ? Height.fromPartial(object.frozen_height) : undefined;
    message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? Height.fromPartial(object.latest_height) : undefined;
    message.proof_specs = object.proof_specs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgrade_path = object.upgrade_path?.map(e => e) || [];
    message.allow_update_after_expiry = object.allow_update_after_expiry ?? false;
    message.allow_update_after_misbehaviour = object.allow_update_after_misbehaviour ?? false;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id;
    }
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trust_level = Fraction.fromAmino(object.trust_level);
    }
    if (object.trusting_period !== undefined && object.trusting_period !== null) {
      message.trusting_period = Duration.fromAmino(object.trusting_period);
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbonding_period = Duration.fromAmino(object.unbonding_period);
    }
    if (object.max_clock_drift !== undefined && object.max_clock_drift !== null) {
      message.max_clock_drift = Duration.fromAmino(object.max_clock_drift);
    }
    if (object.frozen_height !== undefined && object.frozen_height !== null) {
      message.frozen_height = Height.fromAmino(object.frozen_height);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latest_height = Height.fromAmino(object.latest_height);
    }
    message.proof_specs = object.proof_specs?.map(e => ProofSpec.fromAmino(e)) || [];
    message.upgrade_path = object.upgrade_path?.map(e => e) || [];
    if (object.allow_update_after_expiry !== undefined && object.allow_update_after_expiry !== null) {
      message.allow_update_after_expiry = object.allow_update_after_expiry;
    }
    if (object.allow_update_after_misbehaviour !== undefined && object.allow_update_after_misbehaviour !== null) {
      message.allow_update_after_misbehaviour = object.allow_update_after_misbehaviour;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id === "" ? undefined : message.chain_id;
    obj.trust_level = message.trust_level ? Fraction.toAmino(message.trust_level) : undefined;
    obj.trusting_period = message.trusting_period ? Duration.toAmino(message.trusting_period) : undefined;
    obj.unbonding_period = message.unbonding_period ? Duration.toAmino(message.unbonding_period) : undefined;
    obj.max_clock_drift = message.max_clock_drift ? Duration.toAmino(message.max_clock_drift) : undefined;
    obj.frozen_height = message.frozen_height ? Height.toAmino(message.frozen_height) : {};
    obj.latest_height = message.latest_height ? Height.toAmino(message.latest_height) : {};
    if (message.proof_specs) {
      obj.proof_specs = message.proof_specs.map(e => e ? ProofSpec.toAmino(e) : undefined);
    } else {
      obj.proof_specs = message.proof_specs;
    }
    if (message.upgrade_path) {
      obj.upgrade_path = message.upgrade_path.map(e => e);
    } else {
      obj.upgrade_path = message.upgrade_path;
    }
    obj.allow_update_after_expiry = message.allow_update_after_expiry === false ? undefined : message.allow_update_after_expiry;
    obj.allow_update_after_misbehaviour = message.allow_update_after_misbehaviour === false ? undefined : message.allow_update_after_misbehaviour;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Fraction.registerTypeUrl();
    Height.registerTypeUrl();
    ProofSpec.registerTypeUrl();
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: new Date(),
    root: MerkleRoot.fromPartial({}),
    next_validators_hash: new Uint8Array()
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  is(o: any): o is ConsensusState {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.is(o.timestamp) && MerkleRoot.is(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
  },
  isAmino(o: any): o is ConsensusStateAmino {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.isAmino(o.timestamp) && MerkleRoot.isAmino(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string"));
  },
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(26).bytes(message.next_validators_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.next_validators_hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.timestamp = object.timestamp ?? undefined;
    message.root = object.root !== undefined && object.root !== null ? MerkleRoot.fromPartial(object.root) : undefined;
    message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromAmino(object.root);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
    obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    MerkleRoot.registerTypeUrl();
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    client_id: "",
    header1: undefined,
    header2: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  is(o: any): o is Misbehaviour {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string");
  },
  isAmino(o: any): o is MisbehaviourAmino {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string");
  },
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.client_id = object.client_id ?? "";
    message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
    message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
    return message;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.header_1 !== undefined && object.header_1 !== null) {
      message.header_1 = Header.fromAmino(object.header_1);
    }
    if (object.header_2 !== undefined && object.header_2 !== null) {
      message.header_2 = Header.fromAmino(object.header_2);
    }
    return message;
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.client_id === "" ? undefined : message.client_id;
    obj.header_1 = message.header_1 ? Header.toAmino(message.header_1) : undefined;
    obj.header_2 = message.header_2 ? Header.toAmino(message.header_2) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Header.registerTypeUrl();
  }
};
function createBaseHeader(): Header {
  return {
    signed_header: undefined,
    validator_set: undefined,
    trusted_height: Height.fromPartial({}),
    trusted_validators: undefined
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Header",
  aminoType: "cosmos-sdk/Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || Height.is(o.trusted_height));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || Height.isAmino(o.trusted_height));
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signed_header !== undefined) {
      SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
    }
    if (message.validator_set !== undefined) {
      ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
    }
    if (message.trusted_height !== undefined) {
      Height.encode(message.trusted_height, writer.uint32(26).fork()).ldelim();
    }
    if (message.trusted_validators !== undefined) {
      ValidatorSet.encode(message.trusted_validators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signed_header = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validator_set = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trusted_height = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trusted_validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
    message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
    message.trusted_height = object.trusted_height !== undefined && object.trusted_height !== null ? Height.fromPartial(object.trusted_height) : undefined;
    message.trusted_validators = object.trusted_validators !== undefined && object.trusted_validators !== null ? ValidatorSet.fromPartial(object.trusted_validators) : undefined;
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.signed_header !== undefined && object.signed_header !== null) {
      message.signed_header = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validator_set = ValidatorSet.fromAmino(object.validator_set);
    }
    if (object.trusted_height !== undefined && object.trusted_height !== null) {
      message.trusted_height = Height.fromAmino(object.trusted_height);
    }
    if (object.trusted_validators !== undefined && object.trusted_validators !== null) {
      message.trusted_validators = ValidatorSet.fromAmino(object.trusted_validators);
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.signed_header = message.signed_header ? SignedHeader.toAmino(message.signed_header) : undefined;
    obj.validator_set = message.validator_set ? ValidatorSet.toAmino(message.validator_set) : undefined;
    obj.trusted_height = message.trusted_height ? Height.toAmino(message.trusted_height) : {};
    obj.trusted_validators = message.trusted_validators ? ValidatorSet.toAmino(message.trusted_validators) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Header",
      value: Header.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SignedHeader.registerTypeUrl();
    ValidatorSet.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseFraction(): Fraction {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Fraction = {
  typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
  aminoType: "cosmos-sdk/Fraction",
  is(o: any): o is Fraction {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  isAmino(o: any): o is FractionAmino {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  encode(message: Fraction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Fraction>): Fraction {
    const message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? BigInt(object.numerator.toString()) : BigInt(0);
    message.denominator = object.denominator !== undefined && object.denominator !== null ? BigInt(object.denominator.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FractionAmino): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator);
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator);
    }
    return message;
  },
  toAmino(message: Fraction): FractionAmino {
    const obj: any = {};
    obj.numerator = message.numerator !== BigInt(0) ? message.numerator?.toString() : undefined;
    obj.denominator = message.denominator !== BigInt(0) ? message.denominator?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FractionAminoMsg): Fraction {
    return Fraction.fromAmino(object.value);
  },
  toAminoMsg(message: Fraction): FractionAminoMsg {
    return {
      type: "cosmos-sdk/Fraction",
      value: Fraction.toAmino(message)
    };
  },
  fromProtoMsg(message: FractionProtoMsg): Fraction {
    return Fraction.decode(message.value);
  },
  toProto(message: Fraction): Uint8Array {
    return Fraction.encode(message).finish();
  },
  toProtoMsg(message: Fraction): FractionProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.tendermint.v1.Fraction",
      value: Fraction.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};