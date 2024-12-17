import { Header } from "../../../tendermint/types/types";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/** Infraction indicates the infraction a validator commited. */
export declare enum Infraction {
    /** INFRACTION_UNSPECIFIED - UNSPECIFIED defines an empty infraction. */
    INFRACTION_UNSPECIFIED = 0,
    /** INFRACTION_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
    INFRACTION_DOUBLE_SIGN = 1,
    /** INFRACTION_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
    INFRACTION_DOWNTIME = 2,
    UNRECOGNIZED = -1
}
export declare function infractionFromJSON(object: any): Infraction;
export declare function infractionToJSON(object: Infraction): string;
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
    header: Header;
    valset: Validator[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    maxRate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    maxChangeRate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commissionRates: CommissionRates;
    /** update_time is the last time the commission rate was changed. */
    updateTime: Date;
}
/** Description defines a validator description. */
export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    securityContact: string;
    /** details define other optional details. */
    details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operatorAddress: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensusPubkey?: Any;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegatorShares: string;
    /** description defines the description terms for the validator. */
    description: Description;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbondingHeight: bigint;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbondingTime: Date;
    /** commission defines the commission parameters. */
    commission: Commission;
    /**
     * min_self_delegation is the validator's self declared minimum self delegation.
     *
     * Since: cosmos-sdk 0.46
     */
    minSelfDelegation: string;
    /** strictly positive if this validator's unbonding has been stopped by external modules */
    unbondingOnHoldRefCount: bigint;
    /** list of unbonding ids, each uniquely identifing an unbonding of this validator */
    unbondingIds: bigint[];
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
    addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
    delegatorAddress: string;
    validatorAddress: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
    pairs: DVPair[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
    delegatorAddress: string;
    validatorSrcAddress: string;
    validatorDstAddress: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
    triplets: DVVTriplet[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
    /** delegator_address is the encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the encoded address of the validator. */
    validatorAddress: string;
    /** shares define the delegation shares received. */
    shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** delegator_address is the encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_address is the encoded address of the validator. */
    validatorAddress: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** creation_height is the height which the unbonding took place. */
    creationHeight: bigint;
    /** completion_time is the unix time for unbonding completion. */
    completionTime: Date;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initialBalance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
    /** Incrementing id that uniquely identifies this entry */
    unbondingId: bigint;
    /** Strictly positive if this entry's unbonding has been stopped by external modules */
    unbondingOnHoldRefCount: bigint;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
    /** creation_height  defines the height which the redelegation took place. */
    creationHeight: bigint;
    /** completion_time defines the unix time for redelegation completion. */
    completionTime: Date;
    /** initial_balance defines the initial balance when redelegation started. */
    initialBalance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    sharesDst: string;
    /** Incrementing id that uniquely identifies this entry */
    unbondingId: bigint;
    /** Strictly positive if this entry's unbonding has been stopped by external modules */
    unbondingOnHoldRefCount: bigint;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegatorAddress: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validatorSrcAddress: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validatorDstAddress: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntry[];
}
/** Params defines the parameters for the x/staking module. */
export interface Params {
    /** unbonding_time is the time duration of unbonding. */
    unbondingTime: Duration;
    /** max_validators is the maximum number of validators. */
    maxValidators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    maxEntries: number;
    /** historical_entries is the number of historical entries to persist. */
    historicalEntries: number;
    /** bond_denom defines the bondable coin denomination. */
    bondDenom: string;
    /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
    minCommissionRate: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation: Delegation;
    balance: Coin;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
    redelegationEntry: RedelegationEntry;
    balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
    redelegation: Redelegation;
    entries: RedelegationEntryResponse[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
    notBondedTokens: string;
    bondedTokens: string;
}
/**
 * ValidatorUpdates defines an array of abci.ValidatorUpdate objects.
 * TODO: explore moving this to proto/cosmos/base to separate modules from tendermint dependence
 */
export interface ValidatorUpdates {
    updates: ValidatorUpdate[];
}
export declare const HistoricalInfo: {
    typeUrl: string;
    aminoType: string;
    encode(message: HistoricalInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo;
    fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo;
};
export declare const CommissionRates: {
    typeUrl: string;
    aminoType: string;
    encode(message: CommissionRates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates;
    fromPartial(object: DeepPartial<CommissionRates>): CommissionRates;
};
export declare const Commission: {
    typeUrl: string;
    aminoType: string;
    encode(message: Commission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commission;
    fromPartial(object: DeepPartial<Commission>): Commission;
};
export declare const Description: {
    typeUrl: string;
    aminoType: string;
    encode(message: Description, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Description;
    fromPartial(object: DeepPartial<Description>): Description;
};
export declare const Validator: {
    typeUrl: string;
    aminoType: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromPartial(object: DeepPartial<Validator>): Validator;
};
export declare const ValAddresses: {
    typeUrl: string;
    aminoType: string;
    encode(message: ValAddresses, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses;
    fromPartial(object: DeepPartial<ValAddresses>): ValAddresses;
};
export declare const DVPair: {
    typeUrl: string;
    aminoType: string;
    encode(message: DVPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVPair;
    fromPartial(object: DeepPartial<DVPair>): DVPair;
};
export declare const DVPairs: {
    typeUrl: string;
    aminoType: string;
    encode(message: DVPairs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVPairs;
    fromPartial(object: DeepPartial<DVPairs>): DVPairs;
};
export declare const DVVTriplet: {
    typeUrl: string;
    aminoType: string;
    encode(message: DVVTriplet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet;
    fromPartial(object: DeepPartial<DVVTriplet>): DVVTriplet;
};
export declare const DVVTriplets: {
    typeUrl: string;
    aminoType: string;
    encode(message: DVVTriplets, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets;
    fromPartial(object: DeepPartial<DVVTriplets>): DVVTriplets;
};
export declare const Delegation: {
    typeUrl: string;
    aminoType: string;
    encode(message: Delegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Delegation;
    fromPartial(object: DeepPartial<Delegation>): Delegation;
};
export declare const UnbondingDelegation: {
    typeUrl: string;
    aminoType: string;
    encode(message: UnbondingDelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation;
    fromPartial(object: DeepPartial<UnbondingDelegation>): UnbondingDelegation;
};
export declare const UnbondingDelegationEntry: {
    typeUrl: string;
    aminoType: string;
    encode(message: UnbondingDelegationEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry;
    fromPartial(object: DeepPartial<UnbondingDelegationEntry>): UnbondingDelegationEntry;
};
export declare const RedelegationEntry: {
    typeUrl: string;
    aminoType: string;
    encode(message: RedelegationEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry;
    fromPartial(object: DeepPartial<RedelegationEntry>): RedelegationEntry;
};
export declare const Redelegation: {
    typeUrl: string;
    aminoType: string;
    encode(message: Redelegation, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Redelegation;
    fromPartial(object: DeepPartial<Redelegation>): Redelegation;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const DelegationResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: DelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse;
    fromPartial(object: DeepPartial<DelegationResponse>): DelegationResponse;
};
export declare const RedelegationEntryResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: RedelegationEntryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse;
    fromPartial(object: DeepPartial<RedelegationEntryResponse>): RedelegationEntryResponse;
};
export declare const RedelegationResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: RedelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse;
    fromPartial(object: DeepPartial<RedelegationResponse>): RedelegationResponse;
};
export declare const Pool: {
    typeUrl: string;
    aminoType: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
};
export declare const ValidatorUpdates: {
    typeUrl: string;
    aminoType: string;
    encode(message: ValidatorUpdates, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdates;
    fromPartial(object: DeepPartial<ValidatorUpdates>): ValidatorUpdates;
};
