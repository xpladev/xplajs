import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * App includes the protocol and software version for the application.
 * This information is included in ResponseInfo. The App.Protocol can be
 * updated in ResponseEndBlock.
 */
export interface App {
    protocol: bigint;
    software: string;
}
/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
    block: bigint;
    app: bigint;
}
export declare const App: {
    typeUrl: string;
    encode(message: App, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): App;
    fromPartial(object: DeepPartial<App>): App;
};
export declare const Consensus: {
    typeUrl: string;
    encode(message: Consensus, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Consensus;
    fromPartial(object: DeepPartial<Consensus>): Consensus;
};
