import { Header, HeaderAmino, Data, DataAmino, Commit, CommitAmino } from "./types";
import { EvidenceList, EvidenceListAmino } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit?: Commit;
}
export interface BlockProtoMsg {
    typeUrl: "/tendermint.types.Block";
    value: Uint8Array;
}
export interface BlockAmino {
    header: HeaderAmino;
    data: DataAmino;
    evidence: EvidenceListAmino;
    last_commit?: CommitAmino;
}
export interface BlockAminoMsg {
    type: "/tendermint.types.Block";
    value: BlockAmino;
}
export declare const Block: {
    typeUrl: string;
    is(o: any): o is Block;
    isAmino(o: any): o is BlockAmino;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromPartial(object: DeepPartial<Block>): Block;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
