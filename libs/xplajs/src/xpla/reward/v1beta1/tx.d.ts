import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./reward";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgFundRewardPool allows an account to directly
 * fund the reward pool.
 */
export interface MsgFundRewardPool {
    amount: Coin[];
    depositor: string;
}
export interface MsgFundRewardPoolProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPool";
    value: Uint8Array;
}
/**
 * MsgFundRewardPool allows an account to directly
 * fund the reward pool.
 */
export interface MsgFundRewardPoolAmino {
    amount: CoinAmino[];
    depositor: string;
}
export interface MsgFundRewardPoolAminoMsg {
    type: "xpladev/MsgFundRewardPool";
    value: MsgFundRewardPoolAmino;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponse {
}
export interface MsgFundRewardPoolResponseProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse";
    value: Uint8Array;
}
/** MsgFundRewardPoolResponse defines the Msg/FundRewardPool response type. */
export interface MsgFundRewardPoolResponseAmino {
}
export interface MsgFundRewardPoolResponseAminoMsg {
    type: "/xpla.reward.v1beta1.MsgFundRewardPoolResponse";
    value: MsgFundRewardPoolResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for reward parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type for reward parameters.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/evm parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "xpladev/x/reward/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/xpla.reward.v1beta1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export declare const MsgFundRewardPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgFundRewardPool;
    isAmino(o: any): o is MsgFundRewardPoolAmino;
    encode(message: MsgFundRewardPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPool;
    fromPartial(object: DeepPartial<MsgFundRewardPool>): MsgFundRewardPool;
    fromAmino(object: MsgFundRewardPoolAmino): MsgFundRewardPool;
    toAmino(message: MsgFundRewardPool): MsgFundRewardPoolAmino;
    fromAminoMsg(object: MsgFundRewardPoolAminoMsg): MsgFundRewardPool;
    toAminoMsg(message: MsgFundRewardPool): MsgFundRewardPoolAminoMsg;
    fromProtoMsg(message: MsgFundRewardPoolProtoMsg): MsgFundRewardPool;
    toProto(message: MsgFundRewardPool): Uint8Array;
    toProtoMsg(message: MsgFundRewardPool): MsgFundRewardPoolProtoMsg;
};
export declare const MsgFundRewardPoolResponse: {
    typeUrl: string;
    is(o: any): o is MsgFundRewardPoolResponse;
    isAmino(o: any): o is MsgFundRewardPoolResponseAmino;
    encode(_: MsgFundRewardPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgFundRewardPoolResponse;
    fromPartial(_: DeepPartial<MsgFundRewardPoolResponse>): MsgFundRewardPoolResponse;
    fromAmino(_: MsgFundRewardPoolResponseAmino): MsgFundRewardPoolResponse;
    toAmino(_: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseAmino;
    fromAminoMsg(object: MsgFundRewardPoolResponseAminoMsg): MsgFundRewardPoolResponse;
    fromProtoMsg(message: MsgFundRewardPoolResponseProtoMsg): MsgFundRewardPoolResponse;
    toProto(message: MsgFundRewardPoolResponse): Uint8Array;
    toProtoMsg(message: MsgFundRewardPoolResponse): MsgFundRewardPoolResponseProtoMsg;
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
    is(o: any): o is MsgUpdateParamsResponse;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
