import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * BurnProposal defines a ongoingburn proposal
 * @name BurnProposal
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.BurnProposal
 */
export interface BurnProposal {
  proposalId: bigint;
  proposer: string;
  amount: Coin[];
}
export interface BurnProposalProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.BurnProposal";
  value: Uint8Array;
}
/**
 * BurnProposal defines a ongoingburn proposal
 * @name BurnProposalAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.BurnProposal
 */
export interface BurnProposalAmino {
  proposal_id: string;
  proposer: string;
  amount: CoinAmino[];
}
export interface BurnProposalAminoMsg {
  type: "/xpla.burn.v1beta1.BurnProposal";
  value: BurnProposalAmino;
}
function createBaseBurnProposal(): BurnProposal {
  return {
    proposalId: BigInt(0),
    proposer: "",
    amount: []
  };
}
/**
 * BurnProposal defines a ongoingburn proposal
 * @name BurnProposal
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.BurnProposal
 */
export const BurnProposal = {
  typeUrl: "/xpla.burn.v1beta1.BurnProposal",
  is(o: any): o is BurnProposal {
    return o && (o.$typeUrl === BurnProposal.typeUrl || typeof o.proposalId === "bigint" && typeof o.proposer === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is BurnProposalAmino {
    return o && (o.$typeUrl === BurnProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.proposer === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: BurnProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BurnProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BurnProposal>): BurnProposal {
    const message = createBaseBurnProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.proposer = object.proposer ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BurnProposalAmino): BurnProposal {
    const message = createBaseBurnProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BurnProposal): BurnProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: BurnProposalAminoMsg): BurnProposal {
    return BurnProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnProposalProtoMsg): BurnProposal {
    return BurnProposal.decode(message.value);
  },
  toProto(message: BurnProposal): Uint8Array {
    return BurnProposal.encode(message).finish();
  },
  toProtoMsg(message: BurnProposal): BurnProposalProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.BurnProposal",
      value: BurnProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BurnProposal.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};