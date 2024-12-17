import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryVolunteerValidatorsRequest */
export interface QueryVolunteerValidatorsRequest {
}
export interface QueryVolunteerValidatorsRequestProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
    value: Uint8Array;
}
/** QueryVolunteerValidatorsRequest */
export interface QueryVolunteerValidatorsRequestAmino {
}
export interface QueryVolunteerValidatorsRequestAminoMsg {
    type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsRequest";
    value: QueryVolunteerValidatorsRequestAmino;
}
/** QueryVolunteerValidatorsResponse */
export interface QueryVolunteerValidatorsResponse {
    volunteerValidators: string[];
}
export interface QueryVolunteerValidatorsResponseProtoMsg {
    typeUrl: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
    value: Uint8Array;
}
/** QueryVolunteerValidatorsResponse */
export interface QueryVolunteerValidatorsResponseAmino {
    volunteer_validators: string[];
}
export interface QueryVolunteerValidatorsResponseAminoMsg {
    type: "/xpla.volunteer.v1beta1.QueryVolunteerValidatorsResponse";
    value: QueryVolunteerValidatorsResponseAmino;
}
export declare const QueryVolunteerValidatorsRequest: {
    typeUrl: string;
    is(o: any): o is QueryVolunteerValidatorsRequest;
    isAmino(o: any): o is QueryVolunteerValidatorsRequestAmino;
    encode(_: QueryVolunteerValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVolunteerValidatorsRequest;
    fromPartial(_: DeepPartial<QueryVolunteerValidatorsRequest>): QueryVolunteerValidatorsRequest;
    fromAmino(_: QueryVolunteerValidatorsRequestAmino): QueryVolunteerValidatorsRequest;
    toAmino(_: QueryVolunteerValidatorsRequest): QueryVolunteerValidatorsRequestAmino;
    fromAminoMsg(object: QueryVolunteerValidatorsRequestAminoMsg): QueryVolunteerValidatorsRequest;
    fromProtoMsg(message: QueryVolunteerValidatorsRequestProtoMsg): QueryVolunteerValidatorsRequest;
    toProto(message: QueryVolunteerValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryVolunteerValidatorsRequest): QueryVolunteerValidatorsRequestProtoMsg;
};
export declare const QueryVolunteerValidatorsResponse: {
    typeUrl: string;
    is(o: any): o is QueryVolunteerValidatorsResponse;
    isAmino(o: any): o is QueryVolunteerValidatorsResponseAmino;
    encode(message: QueryVolunteerValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVolunteerValidatorsResponse;
    fromPartial(object: DeepPartial<QueryVolunteerValidatorsResponse>): QueryVolunteerValidatorsResponse;
    fromAmino(object: QueryVolunteerValidatorsResponseAmino): QueryVolunteerValidatorsResponse;
    toAmino(message: QueryVolunteerValidatorsResponse): QueryVolunteerValidatorsResponseAmino;
    fromAminoMsg(object: QueryVolunteerValidatorsResponseAminoMsg): QueryVolunteerValidatorsResponse;
    fromProtoMsg(message: QueryVolunteerValidatorsResponseProtoMsg): QueryVolunteerValidatorsResponse;
    toProto(message: QueryVolunteerValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryVolunteerValidatorsResponse): QueryVolunteerValidatorsResponseProtoMsg;
};
