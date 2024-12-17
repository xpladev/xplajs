import { Any } from "../../../google/protobuf/any";
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
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    baseAccount?: BaseAccount;
    name: string;
    permissions: string[];
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
/** Params defines the parameters for the auth module. */
export interface Params {
    maxMemoCharacters: bigint;
    txSigLimit: bigint;
    txSizeCostPerByte: bigint;
    sigVerifyCostEd25519: bigint;
    sigVerifyCostSecp256k1: bigint;
}
export declare const BaseAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: BaseAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount;
    fromPartial(object: DeepPartial<BaseAccount>): BaseAccount;
};
export declare const ModuleAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: ModuleAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount;
    fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount;
};
export declare const ModuleCredential: {
    typeUrl: string;
    aminoType: string;
    encode(message: ModuleCredential, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleCredential;
    fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
