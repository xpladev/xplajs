import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
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
function createBaseParams(): Params {
  return {
    feePoolRate: "",
    communityPoolRate: "",
    reserveRate: "",
    reserveAccount: "",
    rewardDistributeAccount: ""
  };
}
export const Params = {
  typeUrl: "/xpla.reward.v1beta1.Params",
  aminoType: "xpladev/x/reward/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.feePoolRate === "string" && typeof o.communityPoolRate === "string" && typeof o.reserveRate === "string" && typeof o.reserveAccount === "string" && typeof o.rewardDistributeAccount === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.fee_pool_rate === "string" && typeof o.community_pool_rate === "string" && typeof o.reserve_rate === "string" && typeof o.reserve_account === "string" && typeof o.reward_distribute_account === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feePoolRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.feePoolRate, 18).atomics);
    }
    if (message.communityPoolRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.communityPoolRate, 18).atomics);
    }
    if (message.reserveRate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.reserveRate, 18).atomics);
    }
    if (message.reserveAccount !== "") {
      writer.uint32(34).string(message.reserveAccount);
    }
    if (message.rewardDistributeAccount !== "") {
      writer.uint32(42).string(message.rewardDistributeAccount);
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
          message.feePoolRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.communityPoolRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.reserveRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.reserveAccount = reader.string();
          break;
        case 5:
          message.rewardDistributeAccount = reader.string();
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
    message.feePoolRate = object.feePoolRate ?? "";
    message.communityPoolRate = object.communityPoolRate ?? "";
    message.reserveRate = object.reserveRate ?? "";
    message.reserveAccount = object.reserveAccount ?? "";
    message.rewardDistributeAccount = object.rewardDistributeAccount ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.fee_pool_rate !== undefined && object.fee_pool_rate !== null) {
      message.feePoolRate = object.fee_pool_rate;
    }
    if (object.community_pool_rate !== undefined && object.community_pool_rate !== null) {
      message.communityPoolRate = object.community_pool_rate;
    }
    if (object.reserve_rate !== undefined && object.reserve_rate !== null) {
      message.reserveRate = object.reserve_rate;
    }
    if (object.reserve_account !== undefined && object.reserve_account !== null) {
      message.reserveAccount = object.reserve_account;
    }
    if (object.reward_distribute_account !== undefined && object.reward_distribute_account !== null) {
      message.rewardDistributeAccount = object.reward_distribute_account;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.fee_pool_rate = Decimal.fromUserInput(message.feePoolRate, 18).atomics ?? "";
    obj.community_pool_rate = Decimal.fromUserInput(message.communityPoolRate, 18).atomics ?? "";
    obj.reserve_rate = Decimal.fromUserInput(message.reserveRate, 18).atomics ?? "";
    obj.reserve_account = message.reserveAccount === "" ? undefined : message.reserveAccount;
    obj.reward_distribute_account = message.rewardDistributeAccount === "" ? undefined : message.rewardDistributeAccount;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "xpladev/x/reward/Params",
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
      typeUrl: "/xpla.reward.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};