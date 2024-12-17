import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Params, ParamsAmino, AccessTuple, AccessTupleAmino, Log, LogAmino } from "./evm";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
    /** data is inner transaction data of the Ethereum transaction */
    data?: Any;
    /** size is the encoded storage size of the transaction (DEPRECATED) */
    size: number;
    /** hash of the transaction in hex format */
    hash: string;
    /**
     * from is the ethereum signer address in hex format. This address value is checked
     * against the address derived from the signature (V, R, S) using the
     * secp256k1 elliptic curve
     */
    from: string;
}
export interface MsgEthereumTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTx";
    value: Uint8Array;
}
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTxAmino {
    /** data is inner transaction data of the Ethereum transaction */
    data?: AnyAmino;
    /** size is the encoded storage size of the transaction (DEPRECATED) */
    size: number;
    /** hash of the transaction in hex format */
    hash: string;
    /**
     * from is the ethereum signer address in hex format. This address value is checked
     * against the address derived from the signature (V, R, S) using the
     * secp256k1 elliptic curve
     */
    from: string;
}
export interface MsgEthereumTxAminoMsg {
    type: "ethermint/MsgEthereumTx";
    value: MsgEthereumTxAmino;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTx {
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
export interface LegacyTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.LegacyTx";
    value: Uint8Array;
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 * NOTE: All non-protected transactions (i.e non EIP155 signed) will fail if the
 * AllowUnprotectedTxs parameter is disabled.
 */
export interface LegacyTxAmino {
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: string;
    /** gas_price defines the value for each gas unit */
    gas_price: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: string;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: string;
    /** v defines the signature value */
    v: string;
    /** r defines the signature value */
    r: string;
    /** s define the signature value */
    s: string;
}
export interface LegacyTxAminoMsg {
    type: "/ethermint.evm.v1.LegacyTx";
    value: LegacyTxAmino;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_price defines the value for each gas unit */
    gasPrice: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the recipient address in hex format */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
export interface AccessListTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.AccessListTx";
    value: Uint8Array;
}
/** AccessListTx is the data of EIP-2930 access list transactions. */
export interface AccessListTxAmino {
    /** chain_id of the destination EVM chain */
    chain_id: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: string;
    /** gas_price defines the value for each gas unit */
    gas_price: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: string;
    /** to is the recipient address in hex format */
    to: string;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: string;
    /** accesses is an array of access tuples */
    accesses: AccessTupleAmino[];
    /** v defines the signature value */
    v: string;
    /** r defines the signature value */
    r: string;
    /** s define the signature value */
    s: string;
}
export interface AccessListTxAminoMsg {
    type: "/ethermint.evm.v1.AccessListTx";
    value: AccessListTxAmino;
}
/** DynamicFeeTx is the data of EIP-1559 dynamic fee transactions. */
export interface DynamicFeeTx {
    /** chain_id of the destination EVM chain */
    chainId: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: bigint;
    /** gas_tip_cap defines the max value for the gas tip */
    gasTipCap: string;
    /** gas_fee_cap defines the max value for the gas fee */
    gasFeeCap: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: bigint;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: Uint8Array;
    /** accesses is an array of access tuples */
    accesses: AccessTuple[];
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
}
export interface DynamicFeeTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.DynamicFeeTx";
    value: Uint8Array;
}
/** DynamicFeeTx is the data of EIP-1559 dynamic fee transactions. */
export interface DynamicFeeTxAmino {
    /** chain_id of the destination EVM chain */
    chain_id: string;
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: string;
    /** gas_tip_cap defines the max value for the gas tip */
    gas_tip_cap: string;
    /** gas_fee_cap defines the max value for the gas fee */
    gas_fee_cap: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: string;
    /** to is the hex formatted address of the recipient */
    to: string;
    /** value defines the transaction amount. */
    value: string;
    /** data is the data payload bytes of the transaction. */
    data: string;
    /** accesses is an array of access tuples */
    accesses: AccessTupleAmino[];
    /** v defines the signature value */
    v: string;
    /** r defines the signature value */
    r: string;
    /** s define the signature value */
    s: string;
}
export interface DynamicFeeTxAminoMsg {
    type: "/ethermint.evm.v1.DynamicFeeTx";
    value: DynamicFeeTxAmino;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTx {
}
export interface ExtensionOptionsEthereumTxProtoMsg {
    typeUrl: "/ethermint.evm.v1.ExtensionOptionsEthereumTx";
    value: Uint8Array;
}
/** ExtensionOptionsEthereumTx is an extension option for ethereum transactions */
export interface ExtensionOptionsEthereumTxAmino {
}
export interface ExtensionOptionsEthereumTxAminoMsg {
    type: "/ethermint.evm.v1.ExtensionOptionsEthereumTx";
    value: ExtensionOptionsEthereumTxAmino;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
    /**
     * hash of the ethereum transaction in hex format. This hash differs from the
     * Tendermint sha256 hash of the transaction bytes. See
     * https://github.com/tendermint/tendermint/issues/6539 for reference
     */
    hash: string;
    /**
     * logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    logs: Log[];
    /**
     * ret is the returned data from evm function (result or data supplied with revert
     * opcode)
     */
    ret: Uint8Array;
    /** vm_error is the error returned by vm execution */
    vmError: string;
    /** gas_used specifies how much gas was consumed by the transaction */
    gasUsed: bigint;
}
export interface MsgEthereumTxResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.MsgEthereumTxResponse";
    value: Uint8Array;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponseAmino {
    /**
     * hash of the ethereum transaction in hex format. This hash differs from the
     * Tendermint sha256 hash of the transaction bytes. See
     * https://github.com/tendermint/tendermint/issues/6539 for reference
     */
    hash: string;
    /**
     * logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    logs: LogAmino[];
    /**
     * ret is the returned data from evm function (result or data supplied with revert
     * opcode)
     */
    ret: string;
    /** vm_error is the error returned by vm execution */
    vm_error: string;
    /** gas_used specifies how much gas was consumed by the transaction */
    gas_used: string;
}
export interface MsgEthereumTxResponseAminoMsg {
    type: "/ethermint.evm.v1.MsgEthereumTxResponse";
    value: MsgEthereumTxResponseAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
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
    typeUrl: "/ethermint.evm.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/evm module parameters. */
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
    type: "ethermint/x/evm/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ethermint.evm.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/ethermint.evm.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export declare const MsgEthereumTx: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgEthereumTx;
    isAmino(o: any): o is MsgEthereumTxAmino;
    encode(message: MsgEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEthereumTx;
    fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx;
    fromAmino(object: MsgEthereumTxAmino): MsgEthereumTx;
    toAmino(message: MsgEthereumTx): MsgEthereumTxAmino;
    fromAminoMsg(object: MsgEthereumTxAminoMsg): MsgEthereumTx;
    toAminoMsg(message: MsgEthereumTx): MsgEthereumTxAminoMsg;
    fromProtoMsg(message: MsgEthereumTxProtoMsg): MsgEthereumTx;
    toProto(message: MsgEthereumTx): Uint8Array;
    toProtoMsg(message: MsgEthereumTx): MsgEthereumTxProtoMsg;
};
export declare const LegacyTx: {
    typeUrl: string;
    is(o: any): o is LegacyTx;
    isAmino(o: any): o is LegacyTxAmino;
    encode(message: LegacyTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LegacyTx;
    fromPartial(object: DeepPartial<LegacyTx>): LegacyTx;
    fromAmino(object: LegacyTxAmino): LegacyTx;
    toAmino(message: LegacyTx): LegacyTxAmino;
    fromAminoMsg(object: LegacyTxAminoMsg): LegacyTx;
    fromProtoMsg(message: LegacyTxProtoMsg): LegacyTx;
    toProto(message: LegacyTx): Uint8Array;
    toProtoMsg(message: LegacyTx): LegacyTxProtoMsg;
};
export declare const AccessListTx: {
    typeUrl: string;
    is(o: any): o is AccessListTx;
    isAmino(o: any): o is AccessListTxAmino;
    encode(message: AccessListTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AccessListTx;
    fromPartial(object: DeepPartial<AccessListTx>): AccessListTx;
    fromAmino(object: AccessListTxAmino): AccessListTx;
    toAmino(message: AccessListTx): AccessListTxAmino;
    fromAminoMsg(object: AccessListTxAminoMsg): AccessListTx;
    fromProtoMsg(message: AccessListTxProtoMsg): AccessListTx;
    toProto(message: AccessListTx): Uint8Array;
    toProtoMsg(message: AccessListTx): AccessListTxProtoMsg;
};
export declare const DynamicFeeTx: {
    typeUrl: string;
    is(o: any): o is DynamicFeeTx;
    isAmino(o: any): o is DynamicFeeTxAmino;
    encode(message: DynamicFeeTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DynamicFeeTx;
    fromPartial(object: DeepPartial<DynamicFeeTx>): DynamicFeeTx;
    fromAmino(object: DynamicFeeTxAmino): DynamicFeeTx;
    toAmino(message: DynamicFeeTx): DynamicFeeTxAmino;
    fromAminoMsg(object: DynamicFeeTxAminoMsg): DynamicFeeTx;
    fromProtoMsg(message: DynamicFeeTxProtoMsg): DynamicFeeTx;
    toProto(message: DynamicFeeTx): Uint8Array;
    toProtoMsg(message: DynamicFeeTx): DynamicFeeTxProtoMsg;
};
export declare const ExtensionOptionsEthereumTx: {
    typeUrl: string;
    is(o: any): o is ExtensionOptionsEthereumTx;
    isAmino(o: any): o is ExtensionOptionsEthereumTxAmino;
    encode(_: ExtensionOptionsEthereumTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsEthereumTx;
    fromPartial(_: DeepPartial<ExtensionOptionsEthereumTx>): ExtensionOptionsEthereumTx;
    fromAmino(_: ExtensionOptionsEthereumTxAmino): ExtensionOptionsEthereumTx;
    toAmino(_: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxAmino;
    fromAminoMsg(object: ExtensionOptionsEthereumTxAminoMsg): ExtensionOptionsEthereumTx;
    fromProtoMsg(message: ExtensionOptionsEthereumTxProtoMsg): ExtensionOptionsEthereumTx;
    toProto(message: ExtensionOptionsEthereumTx): Uint8Array;
    toProtoMsg(message: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxProtoMsg;
};
export declare const MsgEthereumTxResponse: {
    typeUrl: string;
    is(o: any): o is MsgEthereumTxResponse;
    isAmino(o: any): o is MsgEthereumTxResponseAmino;
    encode(message: MsgEthereumTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgEthereumTxResponse;
    fromPartial(object: DeepPartial<MsgEthereumTxResponse>): MsgEthereumTxResponse;
    fromAmino(object: MsgEthereumTxResponseAmino): MsgEthereumTxResponse;
    toAmino(message: MsgEthereumTxResponse): MsgEthereumTxResponseAmino;
    fromAminoMsg(object: MsgEthereumTxResponseAminoMsg): MsgEthereumTxResponse;
    fromProtoMsg(message: MsgEthereumTxResponseProtoMsg): MsgEthereumTxResponse;
    toProto(message: MsgEthereumTxResponse): Uint8Array;
    toProtoMsg(message: MsgEthereumTxResponse): MsgEthereumTxResponseProtoMsg;
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
