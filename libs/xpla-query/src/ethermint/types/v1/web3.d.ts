import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3Tx {
    /**
     * typed_data_chain_id is used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typedDataChainId: bigint;
    /**
     * fee_payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     */
    feePayer: string;
    /**
     * fee_payer_sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     */
    feePayerSig: Uint8Array;
}
export interface ExtensionOptionsWeb3TxProtoMsg {
    typeUrl: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
    value: Uint8Array;
}
/**
 * ExtensionOptionsWeb3Tx is an extension option that specifies the typed chain id,
 * the fee payer as well as its signature data.
 */
export interface ExtensionOptionsWeb3TxAmino {
    /**
     * typed_data_chain_id is used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     */
    typed_data_chain_id: string;
    /**
     * fee_payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     */
    fee_payer: string;
    /**
     * fee_payer_sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     */
    fee_payer_sig: string;
}
export interface ExtensionOptionsWeb3TxAminoMsg {
    type: "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
    value: ExtensionOptionsWeb3TxAmino;
}
export declare const ExtensionOptionsWeb3Tx: {
    typeUrl: string;
    is(o: any): o is ExtensionOptionsWeb3Tx;
    isAmino(o: any): o is ExtensionOptionsWeb3TxAmino;
    encode(message: ExtensionOptionsWeb3Tx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsWeb3Tx;
    fromPartial(object: DeepPartial<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx;
    fromAmino(object: ExtensionOptionsWeb3TxAmino): ExtensionOptionsWeb3Tx;
    toAmino(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxAmino;
    fromAminoMsg(object: ExtensionOptionsWeb3TxAminoMsg): ExtensionOptionsWeb3Tx;
    fromProtoMsg(message: ExtensionOptionsWeb3TxProtoMsg): ExtensionOptionsWeb3Tx;
    toProto(message: ExtensionOptionsWeb3Tx): Uint8Array;
    toProtoMsg(message: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3TxProtoMsg;
};
