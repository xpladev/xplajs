import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount?: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    /** Vesting end time, as unix timestamp (in seconds). */
    endTime: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    /** Vesting start time, as unix timestamp (in seconds). */
    startTime: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    /** Period duration in seconds. */
    length: bigint;
    amount: Coin[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    startTime: bigint;
    vestingPeriods: Period[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    baseVestingAccount?: BaseVestingAccount;
}
export declare const BaseVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: BaseVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount;
    fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount;
};
export declare const ContinuousVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: ContinuousVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount;
    fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount;
};
export declare const DelayedVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: DelayedVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount;
    fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount;
};
export declare const Period: {
    typeUrl: string;
    aminoType: string;
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Period;
    fromPartial(object: DeepPartial<Period>): Period;
};
export declare const PeriodicVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: PeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount;
    fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount;
};
export declare const PermanentLockedAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: PermanentLockedAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount;
    fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount;
};
