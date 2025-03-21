import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    address: string;
    pubKey?: Any;
    accountNumber: bigint;
    sequence: bigint;
}
export interface BaseAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount";
    value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccountAmino {
    address: string;
    pub_key?: AnyAmino;
    account_number: string;
    sequence: string;
}
export interface BaseAccountAminoMsg {
    type: "cosmos-sdk/BaseAccount";
    value: BaseAccountAmino;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    baseAccount?: BaseAccount;
    name: string;
    permissions: string[];
}
export interface ModuleAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount";
    value: Uint8Array;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccountAmino {
    base_account?: BaseAccountAmino;
    name: string;
    permissions: string[];
}
export interface ModuleAccountAminoMsg {
    type: "cosmos-sdk/ModuleAccount";
    value: ModuleAccountAmino;
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredential {
    /** module_name is the name of the module used for address derivation (passed into address.Module). */
    moduleName: string;
    /**
     * derivation_keys is for deriving a module account address (passed into address.Module)
     * adding more keys creates sub-account addresses (passed into address.Derive)
     */
    derivationKeys: Uint8Array[];
}
export interface ModuleCredentialProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.ModuleCredential";
    value: Uint8Array;
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 *
 * Since: cosmos-sdk 0.47
 */
export interface ModuleCredentialAmino {
    /** module_name is the name of the module used for address derivation (passed into address.Module). */
    module_name: string;
    /**
     * derivation_keys is for deriving a module account address (passed into address.Module)
     * adding more keys creates sub-account addresses (passed into address.Derive)
     */
    derivation_keys: string[];
}
export interface ModuleCredentialAminoMsg {
    type: "cosmos-sdk/GroupAccountCredential";
    value: ModuleCredentialAmino;
}
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: bigint;
    txSigLimit: bigint;
    txSizeCostPerByte: bigint;
    sigVerifyCostEd25519: bigint;
    sigVerifyCostSecp256k1: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.auth.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the auth module. */
export interface ParamsAmino {
    max_memo_characters: string;
    tx_sig_limit: string;
    tx_size_cost_per_byte: string;
    sig_verify_cost_ed25519: string;
    sig_verify_cost_secp256k1: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/x/auth/Params";
    value: ParamsAmino;
}
export declare const BaseAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is BaseAccount;
    isAmino(o: any): o is BaseAccountAmino;
    encode(message: BaseAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount;
    fromPartial(object: DeepPartial<BaseAccount>): BaseAccount;
    fromAmino(object: BaseAccountAmino): BaseAccount;
    toAmino(message: BaseAccount): BaseAccountAmino;
    fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount;
    toAminoMsg(message: BaseAccount): BaseAccountAminoMsg;
    fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount;
    toProto(message: BaseAccount): Uint8Array;
    toProtoMsg(message: BaseAccount): BaseAccountProtoMsg;
};
export declare const ModuleAccount: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleAccount;
    isAmino(o: any): o is ModuleAccountAmino;
    encode(message: ModuleAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount;
    fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount;
    fromAmino(object: ModuleAccountAmino): ModuleAccount;
    toAmino(message: ModuleAccount): ModuleAccountAmino;
    fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount;
    toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg;
    fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount;
    toProto(message: ModuleAccount): Uint8Array;
    toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg;
};
export declare const ModuleCredential: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleCredential;
    isAmino(o: any): o is ModuleCredentialAmino;
    encode(message: ModuleCredential, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleCredential;
    fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential;
    fromAmino(object: ModuleCredentialAmino): ModuleCredential;
    toAmino(message: ModuleCredential): ModuleCredentialAmino;
    fromAminoMsg(object: ModuleCredentialAminoMsg): ModuleCredential;
    toAminoMsg(message: ModuleCredential): ModuleCredentialAminoMsg;
    fromProtoMsg(message: ModuleCredentialProtoMsg): ModuleCredential;
    toProto(message: ModuleCredential): Uint8Array;
    toProtoMsg(message: ModuleCredential): ModuleCredentialProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
