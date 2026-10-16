import { Params, ParamsAmino, CurrentPeriod, CurrentPeriodAmino } from "./dynamic_deflation";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the dynamic deflation module genesis state.
 * @name GenesisState
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.GenesisState
 */
export interface GenesisState {
  params: Params;
  currentPeriod?: CurrentPeriod;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the dynamic deflation module genesis state.
 * @name GenesisStateAmino
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  params: ParamsAmino;
  current_period?: CurrentPeriodAmino;
}
export interface GenesisStateAminoMsg {
  type: "/xpla.dynamicdeflation.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    currentPeriod: undefined
  };
}
/**
 * GenesisState defines the dynamic deflation module genesis state.
 * @name GenesisState
 * @package xpla.dynamicdeflation.v1beta1
 * @see proto type: xpla.dynamicdeflation.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/xpla.dynamicdeflation.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.currentPeriod !== undefined) {
      CurrentPeriod.encode(message.currentPeriod, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.currentPeriod = CurrentPeriod.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.currentPeriod = object.currentPeriod !== undefined && object.currentPeriod !== null ? CurrentPeriod.fromPartial(object.currentPeriod) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.current_period !== undefined && object.current_period !== null) {
      message.currentPeriod = CurrentPeriod.fromAmino(object.current_period);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.current_period = message.currentPeriod ? CurrentPeriod.toAmino(message.currentPeriod) : undefined;
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
      typeUrl: "/xpla.dynamicdeflation.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    CurrentPeriod.registerTypeUrl();
  }
};