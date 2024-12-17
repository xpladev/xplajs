import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** Params defines the EVM module parameters */
export interface Params {
    /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    noBaseFee: boolean;
    /**
     * base_fee_change_denominator bounds the amount the base fee can change
     * between blocks.
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticityMultiplier: number;
    /** enable_height defines at which block height the base fee calculation is enabled. */
    enableHeight: bigint;
    /** base_fee for EIP-1559 blocks. */
    baseFee: string;
    /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
    minGasPrice: string;
    /**
     * min_gas_multiplier bounds the minimum gas used to be charged
     * to senders based on gas limit
     */
    minGasMultiplier: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.Params";
    value: Uint8Array;
}
/** Params defines the EVM module parameters */
export interface ParamsAmino {
    /** no_base_fee forces the EIP-1559 base fee to 0 (needed for 0 price calls) */
    no_base_fee: boolean;
    /**
     * base_fee_change_denominator bounds the amount the base fee can change
     * between blocks.
     */
    base_fee_change_denominator: number;
    /**
     * elasticity_multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     */
    elasticity_multiplier: number;
    /** enable_height defines at which block height the base fee calculation is enabled. */
    enable_height: string;
    /** base_fee for EIP-1559 blocks. */
    base_fee: string;
    /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
    min_gas_price: string;
    /**
     * min_gas_multiplier bounds the minimum gas used to be charged
     * to senders based on gas limit
     */
    min_gas_multiplier: string;
}
export interface ParamsAminoMsg {
    type: "ethermint/x/feemarket/Params";
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
