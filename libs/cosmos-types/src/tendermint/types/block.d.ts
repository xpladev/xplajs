import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit?: Commit;
}
export declare const Block: {
    typeUrl: string;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromPartial(object: DeepPartial<Block>): Block;
};
