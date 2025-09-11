import { BurnProposal, BurnProposalAmino } from "./burn";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisState
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * ongoing_burn_proposals defines the ongoing burn proposals at genesis
   */
  ongoingBurnProposals: BurnProposal[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xpla.burn.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisStateAmino
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * ongoing_burn_proposals defines the ongoing burn proposals at genesis
   */
  ongoing_burn_proposals: BurnProposalAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/xpla.burn.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    ongoingBurnProposals: []
  };
}
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisState
 * @package xpla.burn.v1beta1
 * @see proto type: xpla.burn.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/xpla.burn.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.ongoingBurnProposals) && (!o.ongoingBurnProposals.length || BurnProposal.is(o.ongoingBurnProposals[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.ongoing_burn_proposals) && (!o.ongoing_burn_proposals.length || BurnProposal.isAmino(o.ongoing_burn_proposals[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ongoingBurnProposals) {
      BurnProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ongoingBurnProposals.push(BurnProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.ongoingBurnProposals = object.ongoingBurnProposals?.map(e => BurnProposal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.ongoingBurnProposals = object.ongoing_burn_proposals?.map(e => BurnProposal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.ongoingBurnProposals) {
      obj.ongoing_burn_proposals = message.ongoingBurnProposals.map(e => e ? BurnProposal.toAmino(e) : undefined);
    } else {
      obj.ongoing_burn_proposals = message.ongoingBurnProposals;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/xpla.burn.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    BurnProposal.registerTypeUrl();
  }
};