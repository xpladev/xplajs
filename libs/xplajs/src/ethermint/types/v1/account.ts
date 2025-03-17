import { BaseAccount, BaseAccountAmino } from "../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * EthAccount implements the sdk.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccount {
  /** base_account is an authtypes.BaseAccount */
  base_account?: BaseAccount;
  /** code_hash is the hash calculated from the code contents */
  code_hash: string;
}
export interface EthAccountProtoMsg {
  type_url: "/ethermint.types.v1.EthAccount";
  value: Uint8Array;
}
/**
 * EthAccount implements the sdk.AccountI interface and embeds an
 * authtypes.BaseAccount type. It is compatible with the auth AccountKeeper.
 */
export interface EthAccountAmino {
  /** base_account is an authtypes.BaseAccount */
  base_account?: BaseAccountAmino;
  /** code_hash is the hash calculated from the code contents */
  code_hash: string;
}
export interface EthAccountAminoMsg {
  type: "/ethermint.types.v1.EthAccount";
  value: EthAccountAmino;
}
function createBaseEthAccount(): EthAccount {
  return {
    base_account: undefined,
    code_hash: ""
  };
}
export const EthAccount = {
  typeUrl: "/ethermint.types.v1.EthAccount",
  is(o: any): o is EthAccount {
    return o && (o.$typeUrl === EthAccount.typeUrl || typeof o.code_hash === "string");
  },
  isAmino(o: any): o is EthAccountAmino {
    return o && (o.$typeUrl === EthAccount.typeUrl || typeof o.code_hash === "string");
  },
  encode(message: EthAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.code_hash !== "") {
      writer.uint32(18).string(message.code_hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EthAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.code_hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EthAccount>): EthAccount {
    const message = createBaseEthAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.code_hash = object.code_hash ?? "";
    return message;
  },
  fromAmino(object: EthAccountAmino): EthAccount {
    const message = createBaseEthAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.base_account = BaseAccount.fromAmino(object.base_account);
    }
    if (object.code_hash !== undefined && object.code_hash !== null) {
      message.code_hash = object.code_hash;
    }
    return message;
  },
  toAmino(message: EthAccount): EthAccountAmino {
    const obj: any = {};
    obj.base_account = message.base_account ? BaseAccount.toAmino(message.base_account) : undefined;
    obj.code_hash = message.code_hash === "" ? undefined : message.code_hash;
    return obj;
  },
  fromAminoMsg(object: EthAccountAminoMsg): EthAccount {
    return EthAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EthAccountProtoMsg): EthAccount {
    return EthAccount.decode(message.value);
  },
  toProto(message: EthAccount): Uint8Array {
    return EthAccount.encode(message).finish();
  },
  toProtoMsg(message: EthAccount): EthAccountProtoMsg {
    return {
      typeUrl: "/ethermint.types.v1.EthAccount",
      value: EthAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    GlobalDecoderRegistry.register(EthAccount.typeUrl, EthAccount);
    BaseAccount.registerTypeUrl();
  }
};