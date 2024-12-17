import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the set of params for the reward module. */
export interface Params {
    feePoolRate: string;
    communityPoolRate: string;
    reserveRate: string;
    reserveAccount: string;
    rewardDistributeAccount: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/xpla.reward.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the set of params for the reward module. */
export interface ParamsAmino {
    fee_pool_rate: string;
    community_pool_rate: string;
    reserve_rate: string;
    reserve_account: string;
    reward_distribute_account: string;
}
export interface ParamsAminoMsg {
    type: "xpladev/x/reward/Params";
    value: ParamsAmino;
}
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
