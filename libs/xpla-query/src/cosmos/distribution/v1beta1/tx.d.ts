import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Params, ParamsAmino } from "./distribution";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegatorAddress: string;
    withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
    delegator_address: string;
    withdraw_address: string;
}
export interface MsgSetWithdrawAddressAminoMsg {
    type: "cosmos-sdk/MsgModifyWithdrawAddress";
    value: MsgSetWithdrawAddressAmino;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponse {
}
export interface MsgSetWithdrawAddressResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
    value: Uint8Array;
}
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 */
export interface MsgSetWithdrawAddressResponseAmino {
}
export interface MsgSetWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
    value: MsgSetWithdrawAddressResponseAmino;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegatorAddress: string;
    validatorAddress: string;
}
export interface MsgWithdrawDelegatorRewardProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
    delegator_address: string;
    validator_address: string;
}
export interface MsgWithdrawDelegatorRewardAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegationReward";
    value: MsgWithdrawDelegatorRewardAmino;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 */
export interface MsgWithdrawDelegatorRewardResponseAmino {
    /** Since: cosmos-sdk 0.46 */
    amount: CoinAmino[];
}
export interface MsgWithdrawDelegatorRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
    value: MsgWithdrawDelegatorRewardResponseAmino;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
    validator_address: string;
}
export interface MsgWithdrawValidatorCommissionAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommission";
    value: MsgWithdrawValidatorCommissionAmino;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
    /** Since: cosmos-sdk 0.46 */
    amount: Coin[];
}
export interface MsgWithdrawValidatorCommissionResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponseAmino {
    /** Since: cosmos-sdk 0.46 */
    amount: CoinAmino[];
}
export interface MsgWithdrawValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
    value: MsgWithdrawValidatorCommissionResponseAmino;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundCommunityPoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
    amount: CoinAmino[];
    depositor: string;
}
export interface MsgFundCommunityPoolAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: MsgFundCommunityPoolAmino;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export interface MsgFundCommunityPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
    value: Uint8Array;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {
}
export interface MsgFundCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPoolResponse";
    value: MsgFundCommunityPoolResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the x/distribution parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/distribution/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpend {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: Coin[];
}
export interface MsgCommunityPoolSpendProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
    value: Uint8Array;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    recipient: string;
    amount: CoinAmino[];
}
export interface MsgCommunityPoolSpendAminoMsg {
    type: "cosmos-sdk/distr/MsgCommunityPoolSpend";
    value: MsgCommunityPoolSpendAmino;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponse {
}
export interface MsgCommunityPoolSpendResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
    value: Uint8Array;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgCommunityPoolSpendResponseAmino {
}
export interface MsgCommunityPoolSpendResponseAminoMsg {
    type: "cosmos-sdk/MsgCommunityPoolSpendResponse";
    value: MsgCommunityPoolSpendResponseAmino;
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPool {
    depositor: string;
    validatorAddress: string;
    amount: Coin[];
}
export interface MsgDepositValidatorRewardsPoolProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool";
    value: Uint8Array;
}
/**
 * DepositValidatorRewardsPool defines the request structure to provide
 * additional rewards to delegators from a specific validator.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolAmino {
    depositor: string;
    validator_address: string;
    amount: CoinAmino[];
}
export interface MsgDepositValidatorRewardsPoolAminoMsg {
    type: "cosmos-sdk/distr/MsgDepositValRewards";
    value: MsgDepositValidatorRewardsPoolAmino;
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponse {
}
export interface MsgDepositValidatorRewardsPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse";
    value: Uint8Array;
}
/**
 * MsgDepositValidatorRewardsPoolResponse defines the response to executing a
 * MsgDepositValidatorRewardsPool message.
 *
 * Since: cosmos-sdk 0.50
 */
export interface MsgDepositValidatorRewardsPoolResponseAmino {
}
export interface MsgDepositValidatorRewardsPoolResponseAminoMsg {
    type: "cosmos-sdk/MsgDepositValidatorRewardsPoolResponse";
    value: MsgDepositValidatorRewardsPoolResponseAmino;
}
export declare const MsgSetWithdrawAddress: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetWithdrawAddress;
    isAmino(o: any): o is MsgSetWithdrawAddressAmino;
    encode(message: MsgSetWithdrawAddress, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress;
    fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress;
    fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress;
    toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress;
    toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress;
    toProto(message: MsgSetWithdrawAddress): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg;
};
export declare const MsgSetWithdrawAddressResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSetWithdrawAddressResponse;
    isAmino(o: any): o is MsgSetWithdrawAddressResponseAmino;
    encode(_: MsgSetWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse;
    fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse;
    fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse;
    toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino;
    fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse;
    toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse;
    toProto(message: MsgSetWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg;
};
export declare const MsgWithdrawDelegatorReward: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegatorReward;
    isAmino(o: any): o is MsgWithdrawDelegatorRewardAmino;
    encode(message: MsgWithdrawDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward;
    fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward;
    fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward;
    toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward;
    toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward;
    toProto(message: MsgWithdrawDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawDelegatorRewardResponse;
    isAmino(o: any): o is MsgWithdrawDelegatorRewardResponseAmino;
    encode(message: MsgWithdrawDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse;
    fromPartial(object: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse;
    fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse;
    toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse;
    toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse;
    toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg;
};
export declare const MsgWithdrawValidatorCommission: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawValidatorCommission;
    isAmino(o: any): o is MsgWithdrawValidatorCommissionAmino;
    encode(message: MsgWithdrawValidatorCommission, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission;
    fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission;
    fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission;
    toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission;
    toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission;
    toProto(message: MsgWithdrawValidatorCommission): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgWithdrawValidatorCommissionResponse;
    isAmino(o: any): o is MsgWithdrawValidatorCommissionResponseAmino;
    encode(message: MsgWithdrawValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse;
    fromPartial(object: DeepPartial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse;
    fromAmino(object: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse;
    toAmino(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino;
    fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse;
    toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse;
    toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg;
};
export declare const MsgFundCommunityPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgFundCommunityPool;
    isAmino(o: any): o is MsgFundCommunityPoolAmino;
    encode(message: MsgFundCommunityPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool;
    fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool;
    fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool;
    toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino;
    fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool;
    toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool;
    toProto(message: MsgFundCommunityPool): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg;
};
export declare const MsgFundCommunityPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgFundCommunityPoolResponse;
    isAmino(o: any): o is MsgFundCommunityPoolResponseAmino;
    encode(_: MsgFundCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse;
    fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse;
    fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse;
    toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino;
    fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse;
    toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse;
    toProto(message: MsgFundCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgCommunityPoolSpend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCommunityPoolSpend;
    isAmino(o: any): o is MsgCommunityPoolSpendAmino;
    encode(message: MsgCommunityPoolSpend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpend;
    fromPartial(object: DeepPartial<MsgCommunityPoolSpend>): MsgCommunityPoolSpend;
    fromAmino(object: MsgCommunityPoolSpendAmino): MsgCommunityPoolSpend;
    toAmino(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAmino;
    fromAminoMsg(object: MsgCommunityPoolSpendAminoMsg): MsgCommunityPoolSpend;
    toAminoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoMsg;
    fromProtoMsg(message: MsgCommunityPoolSpendProtoMsg): MsgCommunityPoolSpend;
    toProto(message: MsgCommunityPoolSpend): Uint8Array;
    toProtoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendProtoMsg;
};
export declare const MsgCommunityPoolSpendResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCommunityPoolSpendResponse;
    isAmino(o: any): o is MsgCommunityPoolSpendResponseAmino;
    encode(_: MsgCommunityPoolSpendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse;
    fromPartial(_: DeepPartial<MsgCommunityPoolSpendResponse>): MsgCommunityPoolSpendResponse;
    fromAmino(_: MsgCommunityPoolSpendResponseAmino): MsgCommunityPoolSpendResponse;
    toAmino(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAmino;
    fromAminoMsg(object: MsgCommunityPoolSpendResponseAminoMsg): MsgCommunityPoolSpendResponse;
    toAminoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAminoMsg;
    fromProtoMsg(message: MsgCommunityPoolSpendResponseProtoMsg): MsgCommunityPoolSpendResponse;
    toProto(message: MsgCommunityPoolSpendResponse): Uint8Array;
    toProtoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseProtoMsg;
};
export declare const MsgDepositValidatorRewardsPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDepositValidatorRewardsPool;
    isAmino(o: any): o is MsgDepositValidatorRewardsPoolAmino;
    encode(message: MsgDepositValidatorRewardsPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositValidatorRewardsPool;
    fromPartial(object: DeepPartial<MsgDepositValidatorRewardsPool>): MsgDepositValidatorRewardsPool;
    fromAmino(object: MsgDepositValidatorRewardsPoolAmino): MsgDepositValidatorRewardsPool;
    toAmino(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolAmino;
    fromAminoMsg(object: MsgDepositValidatorRewardsPoolAminoMsg): MsgDepositValidatorRewardsPool;
    toAminoMsg(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolAminoMsg;
    fromProtoMsg(message: MsgDepositValidatorRewardsPoolProtoMsg): MsgDepositValidatorRewardsPool;
    toProto(message: MsgDepositValidatorRewardsPool): Uint8Array;
    toProtoMsg(message: MsgDepositValidatorRewardsPool): MsgDepositValidatorRewardsPoolProtoMsg;
};
export declare const MsgDepositValidatorRewardsPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgDepositValidatorRewardsPoolResponse;
    isAmino(o: any): o is MsgDepositValidatorRewardsPoolResponseAmino;
    encode(_: MsgDepositValidatorRewardsPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositValidatorRewardsPoolResponse;
    fromPartial(_: DeepPartial<MsgDepositValidatorRewardsPoolResponse>): MsgDepositValidatorRewardsPoolResponse;
    fromAmino(_: MsgDepositValidatorRewardsPoolResponseAmino): MsgDepositValidatorRewardsPoolResponse;
    toAmino(_: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseAmino;
    fromAminoMsg(object: MsgDepositValidatorRewardsPoolResponseAminoMsg): MsgDepositValidatorRewardsPoolResponse;
    toAminoMsg(message: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseAminoMsg;
    fromProtoMsg(message: MsgDepositValidatorRewardsPoolResponseProtoMsg): MsgDepositValidatorRewardsPoolResponse;
    toProto(message: MsgDepositValidatorRewardsPoolResponse): Uint8Array;
    toProtoMsg(message: MsgDepositValidatorRewardsPoolResponse): MsgDepositValidatorRewardsPoolResponseProtoMsg;
};
