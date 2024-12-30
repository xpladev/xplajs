import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutResponse, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgAcknowledgement, MsgAcknowledgementResponse, MsgChannelUpgradeInit, MsgChannelUpgradeInitResponse, MsgChannelUpgradeTry, MsgChannelUpgradeTryResponse, MsgChannelUpgradeAck, MsgChannelUpgradeAckResponse, MsgChannelUpgradeConfirm, MsgChannelUpgradeConfirmResponse, MsgChannelUpgradeOpen, MsgChannelUpgradeOpenResponse, MsgChannelUpgradeTimeout, MsgChannelUpgradeTimeoutResponse, MsgChannelUpgradeCancel, MsgChannelUpgradeCancelResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgPruneAcknowledgements, MsgPruneAcknowledgementsResponse } from "./tx";
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
  /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
  /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
  /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
  /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
  /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
  /**
   * ChannelCloseConfirm defines a rpc handler method for
   * MsgChannelCloseConfirm.
   */
  ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
  /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
  /** ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  ChannelUpgradeInit(request: MsgChannelUpgradeInit): Promise<MsgChannelUpgradeInitResponse>;
  /** ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  ChannelUpgradeTry(request: MsgChannelUpgradeTry): Promise<MsgChannelUpgradeTryResponse>;
  /** ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  ChannelUpgradeAck(request: MsgChannelUpgradeAck): Promise<MsgChannelUpgradeAckResponse>;
  /** ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  ChannelUpgradeConfirm(request: MsgChannelUpgradeConfirm): Promise<MsgChannelUpgradeConfirmResponse>;
  /** ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  ChannelUpgradeOpen(request: MsgChannelUpgradeOpen): Promise<MsgChannelUpgradeOpenResponse>;
  /** ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  ChannelUpgradeTimeout(request: MsgChannelUpgradeTimeout): Promise<MsgChannelUpgradeTimeoutResponse>;
  /** ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  ChannelUpgradeCancel(request: MsgChannelUpgradeCancel): Promise<MsgChannelUpgradeCancelResponse>;
  /** UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  UpdateChannelParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  PruneAcknowledgements(request: MsgPruneAcknowledgements): Promise<MsgPruneAcknowledgementsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
  ChannelOpenInit = async (request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse> => {
    const data = MsgChannelOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
    return promise.then(data => MsgChannelOpenInitResponse.decode(new BinaryReader(data)));
  };
  /* ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
  ChannelOpenTry = async (request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse> => {
    const data = MsgChannelOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
    return promise.then(data => MsgChannelOpenTryResponse.decode(new BinaryReader(data)));
  };
  /* ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
  ChannelOpenAck = async (request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse> => {
    const data = MsgChannelOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
    return promise.then(data => MsgChannelOpenAckResponse.decode(new BinaryReader(data)));
  };
  /* ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
  ChannelOpenConfirm = async (request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse> => {
    const data = MsgChannelOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
    return promise.then(data => MsgChannelOpenConfirmResponse.decode(new BinaryReader(data)));
  };
  /* ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
  ChannelCloseInit = async (request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse> => {
    const data = MsgChannelCloseInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
    return promise.then(data => MsgChannelCloseInitResponse.decode(new BinaryReader(data)));
  };
  /* ChannelCloseConfirm defines a rpc handler method for
   MsgChannelCloseConfirm. */
  ChannelCloseConfirm = async (request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse> => {
    const data = MsgChannelCloseConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
    return promise.then(data => MsgChannelCloseConfirmResponse.decode(new BinaryReader(data)));
  };
  /* RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket = async (request: MsgRecvPacket): Promise<MsgRecvPacketResponse> => {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
    return promise.then(data => MsgRecvPacketResponse.decode(new BinaryReader(data)));
  };
  /* Timeout defines a rpc handler method for MsgTimeout. */
  Timeout = async (request: MsgTimeout): Promise<MsgTimeoutResponse> => {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
    return promise.then(data => MsgTimeoutResponse.decode(new BinaryReader(data)));
  };
  /* TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
  TimeoutOnClose = async (request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse> => {
    const data = MsgTimeoutOnClose.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
    return promise.then(data => MsgTimeoutOnCloseResponse.decode(new BinaryReader(data)));
  };
  /* Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement = async (request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse> => {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
    return promise.then(data => MsgAcknowledgementResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeInit defines a rpc handler method for MsgChannelUpgradeInit. */
  ChannelUpgradeInit = async (request: MsgChannelUpgradeInit): Promise<MsgChannelUpgradeInitResponse> => {
    const data = MsgChannelUpgradeInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeInit", data);
    return promise.then(data => MsgChannelUpgradeInitResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeTry defines a rpc handler method for MsgChannelUpgradeTry. */
  ChannelUpgradeTry = async (request: MsgChannelUpgradeTry): Promise<MsgChannelUpgradeTryResponse> => {
    const data = MsgChannelUpgradeTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeTry", data);
    return promise.then(data => MsgChannelUpgradeTryResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeAck defines a rpc handler method for MsgChannelUpgradeAck. */
  ChannelUpgradeAck = async (request: MsgChannelUpgradeAck): Promise<MsgChannelUpgradeAckResponse> => {
    const data = MsgChannelUpgradeAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeAck", data);
    return promise.then(data => MsgChannelUpgradeAckResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeConfirm defines a rpc handler method for MsgChannelUpgradeConfirm. */
  ChannelUpgradeConfirm = async (request: MsgChannelUpgradeConfirm): Promise<MsgChannelUpgradeConfirmResponse> => {
    const data = MsgChannelUpgradeConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeConfirm", data);
    return promise.then(data => MsgChannelUpgradeConfirmResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeOpen defines a rpc handler method for MsgChannelUpgradeOpen. */
  ChannelUpgradeOpen = async (request: MsgChannelUpgradeOpen): Promise<MsgChannelUpgradeOpenResponse> => {
    const data = MsgChannelUpgradeOpen.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeOpen", data);
    return promise.then(data => MsgChannelUpgradeOpenResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeTimeout defines a rpc handler method for MsgChannelUpgradeTimeout. */
  ChannelUpgradeTimeout = async (request: MsgChannelUpgradeTimeout): Promise<MsgChannelUpgradeTimeoutResponse> => {
    const data = MsgChannelUpgradeTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeTimeout", data);
    return promise.then(data => MsgChannelUpgradeTimeoutResponse.decode(new BinaryReader(data)));
  };
  /* ChannelUpgradeCancel defines a rpc handler method for MsgChannelUpgradeCancel. */
  ChannelUpgradeCancel = async (request: MsgChannelUpgradeCancel): Promise<MsgChannelUpgradeCancelResponse> => {
    const data = MsgChannelUpgradeCancel.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelUpgradeCancel", data);
    return promise.then(data => MsgChannelUpgradeCancelResponse.decode(new BinaryReader(data)));
  };
  /* UpdateChannelParams defines a rpc handler method for MsgUpdateParams. */
  UpdateChannelParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "UpdateChannelParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* PruneAcknowledgements defines a rpc handler method for MsgPruneAcknowledgements. */
  PruneAcknowledgements = async (request: MsgPruneAcknowledgements): Promise<MsgPruneAcknowledgementsResponse> => {
    const data = MsgPruneAcknowledgements.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v1.Msg", "PruneAcknowledgements", data);
    return promise.then(data => MsgPruneAcknowledgementsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};