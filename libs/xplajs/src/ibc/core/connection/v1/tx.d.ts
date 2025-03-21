import { Counterparty, CounterpartyAmino, Version, VersionAmino } from "./connection";
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { Height, HeightAmino, Params, ParamsAmino } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
    clientId: string;
    counterparty: Counterparty;
    version?: Version;
    delayPeriod: bigint;
    signer: string;
}
export interface MsgConnectionOpenInitProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInitAmino {
    client_id: string;
    counterparty: CounterpartyAmino;
    version?: VersionAmino;
    delay_period: string;
    signer: string;
}
export interface MsgConnectionOpenInitAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenInit";
    value: MsgConnectionOpenInitAmino;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}
export interface MsgConnectionOpenInitResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponseAmino {
}
export interface MsgConnectionOpenInitResponseAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenInitResponse";
    value: MsgConnectionOpenInitResponseAmino;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
    clientId: string;
    /** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. */
    /** @deprecated */
    previousConnectionId: string;
    clientState?: Any;
    counterparty: Counterparty;
    delayPeriod: bigint;
    counterpartyVersions: Version[];
    proofHeight: Height;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proofInit: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight: Height;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    hostConsensusStateProof: Uint8Array;
}
export interface MsgConnectionOpenTryProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTryAmino {
    client_id: string;
    /** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. */
    /** @deprecated */
    previous_connection_id: string;
    client_state?: AnyAmino;
    counterparty: CounterpartyAmino;
    delay_period: string;
    counterparty_versions: VersionAmino[];
    proof_height: HeightAmino;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proof_init: string;
    /** proof of client state included in message */
    proof_client: string;
    /** proof of client consensus state */
    proof_consensus: string;
    consensus_height: HeightAmino;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    host_consensus_state_proof: string;
}
export interface MsgConnectionOpenTryAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenTry";
    value: MsgConnectionOpenTryAmino;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}
export interface MsgConnectionOpenTryResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse";
    value: Uint8Array;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponseAmino {
}
export interface MsgConnectionOpenTryResponseAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenTryResponse";
    value: MsgConnectionOpenTryResponseAmino;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
    connectionId: string;
    counterpartyConnectionId: string;
    version?: Version;
    clientState?: Any;
    proofHeight: Height;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proofTry: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight: Height;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    hostConsensusStateProof: Uint8Array;
}
export interface MsgConnectionOpenAckProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAckAmino {
    connection_id: string;
    counterparty_connection_id: string;
    version?: VersionAmino;
    client_state?: AnyAmino;
    proof_height: HeightAmino;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proof_try: string;
    /** proof of client state included in message */
    proof_client: string;
    /** proof of client consensus state */
    proof_consensus: string;
    consensus_height: HeightAmino;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    host_consensus_state_proof: string;
}
export interface MsgConnectionOpenAckAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenAck";
    value: MsgConnectionOpenAckAmino;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}
export interface MsgConnectionOpenAckResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse";
    value: Uint8Array;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponseAmino {
}
export interface MsgConnectionOpenAckResponseAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenAckResponse";
    value: MsgConnectionOpenAckResponseAmino;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
    connectionId: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proofAck: Uint8Array;
    proofHeight: Height;
    signer: string;
}
export interface MsgConnectionOpenConfirmProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirmAmino {
    connection_id: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proof_ack: string;
    proof_height: HeightAmino;
    signer: string;
}
export interface MsgConnectionOpenConfirmAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenConfirm";
    value: MsgConnectionOpenConfirmAmino;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}
export interface MsgConnectionOpenConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponseAmino {
}
export interface MsgConnectionOpenConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgConnectionOpenConfirmResponse";
    value: MsgConnectionOpenConfirmResponseAmino;
}
/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the connection parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParamsAmino {
    /** signer address */
    signer: string;
    /**
     * params defines the connection parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export declare const MsgConnectionOpenInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenInit;
    isAmino(o: any): o is MsgConnectionOpenInitAmino;
    encode(message: MsgConnectionOpenInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInit;
    fromPartial(object: DeepPartial<MsgConnectionOpenInit>): MsgConnectionOpenInit;
    fromAmino(object: MsgConnectionOpenInitAmino): MsgConnectionOpenInit;
    toAmino(message: MsgConnectionOpenInit): MsgConnectionOpenInitAmino;
    fromAminoMsg(object: MsgConnectionOpenInitAminoMsg): MsgConnectionOpenInit;
    toAminoMsg(message: MsgConnectionOpenInit): MsgConnectionOpenInitAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenInitProtoMsg): MsgConnectionOpenInit;
    toProto(message: MsgConnectionOpenInit): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenInit): MsgConnectionOpenInitProtoMsg;
};
export declare const MsgConnectionOpenInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenInitResponse;
    isAmino(o: any): o is MsgConnectionOpenInitResponseAmino;
    encode(_: MsgConnectionOpenInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInitResponse;
    fromPartial(_: DeepPartial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse;
    fromAmino(_: MsgConnectionOpenInitResponseAmino): MsgConnectionOpenInitResponse;
    toAmino(_: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAmino;
    fromAminoMsg(object: MsgConnectionOpenInitResponseAminoMsg): MsgConnectionOpenInitResponse;
    toAminoMsg(message: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenInitResponseProtoMsg): MsgConnectionOpenInitResponse;
    toProto(message: MsgConnectionOpenInitResponse): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseProtoMsg;
};
export declare const MsgConnectionOpenTry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenTry;
    isAmino(o: any): o is MsgConnectionOpenTryAmino;
    encode(message: MsgConnectionOpenTry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTry;
    fromPartial(object: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry;
    fromAmino(object: MsgConnectionOpenTryAmino): MsgConnectionOpenTry;
    toAmino(message: MsgConnectionOpenTry): MsgConnectionOpenTryAmino;
    fromAminoMsg(object: MsgConnectionOpenTryAminoMsg): MsgConnectionOpenTry;
    toAminoMsg(message: MsgConnectionOpenTry): MsgConnectionOpenTryAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenTryProtoMsg): MsgConnectionOpenTry;
    toProto(message: MsgConnectionOpenTry): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenTry): MsgConnectionOpenTryProtoMsg;
};
export declare const MsgConnectionOpenTryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenTryResponse;
    isAmino(o: any): o is MsgConnectionOpenTryResponseAmino;
    encode(_: MsgConnectionOpenTryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTryResponse;
    fromPartial(_: DeepPartial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse;
    fromAmino(_: MsgConnectionOpenTryResponseAmino): MsgConnectionOpenTryResponse;
    toAmino(_: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAmino;
    fromAminoMsg(object: MsgConnectionOpenTryResponseAminoMsg): MsgConnectionOpenTryResponse;
    toAminoMsg(message: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenTryResponseProtoMsg): MsgConnectionOpenTryResponse;
    toProto(message: MsgConnectionOpenTryResponse): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseProtoMsg;
};
export declare const MsgConnectionOpenAck: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenAck;
    isAmino(o: any): o is MsgConnectionOpenAckAmino;
    encode(message: MsgConnectionOpenAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAck;
    fromPartial(object: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck;
    fromAmino(object: MsgConnectionOpenAckAmino): MsgConnectionOpenAck;
    toAmino(message: MsgConnectionOpenAck): MsgConnectionOpenAckAmino;
    fromAminoMsg(object: MsgConnectionOpenAckAminoMsg): MsgConnectionOpenAck;
    toAminoMsg(message: MsgConnectionOpenAck): MsgConnectionOpenAckAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenAckProtoMsg): MsgConnectionOpenAck;
    toProto(message: MsgConnectionOpenAck): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenAck): MsgConnectionOpenAckProtoMsg;
};
export declare const MsgConnectionOpenAckResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenAckResponse;
    isAmino(o: any): o is MsgConnectionOpenAckResponseAmino;
    encode(_: MsgConnectionOpenAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAckResponse;
    fromPartial(_: DeepPartial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse;
    fromAmino(_: MsgConnectionOpenAckResponseAmino): MsgConnectionOpenAckResponse;
    toAmino(_: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAmino;
    fromAminoMsg(object: MsgConnectionOpenAckResponseAminoMsg): MsgConnectionOpenAckResponse;
    toAminoMsg(message: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenAckResponseProtoMsg): MsgConnectionOpenAckResponse;
    toProto(message: MsgConnectionOpenAckResponse): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseProtoMsg;
};
export declare const MsgConnectionOpenConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenConfirm;
    isAmino(o: any): o is MsgConnectionOpenConfirmAmino;
    encode(message: MsgConnectionOpenConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirm;
    fromPartial(object: DeepPartial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm;
    fromAmino(object: MsgConnectionOpenConfirmAmino): MsgConnectionOpenConfirm;
    toAmino(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAmino;
    fromAminoMsg(object: MsgConnectionOpenConfirmAminoMsg): MsgConnectionOpenConfirm;
    toAminoMsg(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenConfirmProtoMsg): MsgConnectionOpenConfirm;
    toProto(message: MsgConnectionOpenConfirm): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmProtoMsg;
};
export declare const MsgConnectionOpenConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgConnectionOpenConfirmResponse;
    isAmino(o: any): o is MsgConnectionOpenConfirmResponseAmino;
    encode(_: MsgConnectionOpenConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse;
    fromPartial(_: DeepPartial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse;
    fromAmino(_: MsgConnectionOpenConfirmResponseAmino): MsgConnectionOpenConfirmResponse;
    toAmino(_: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAmino;
    fromAminoMsg(object: MsgConnectionOpenConfirmResponseAminoMsg): MsgConnectionOpenConfirmResponse;
    toAminoMsg(message: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgConnectionOpenConfirmResponseProtoMsg): MsgConnectionOpenConfirmResponse;
    toProto(message: MsgConnectionOpenConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseProtoMsg;
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
    aminoType: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
