import { buildTx, SigningClientResolver } from "../../../../helper-func-types";
import { buildUseMutation } from "../../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx";
export const createStoreCode = (clientResolver?: SigningClientResolver) => buildTx<MsgStoreCode>({
  clientResolver,
  typeUrl: MsgStoreCode.typeUrl,
  encoders: toEncoders(MsgStoreCode),
  converters: toConverters(MsgStoreCode)
});
export const useStoreCode = buildUseMutation<MsgStoreCode, Error>({
  builderMutationFn: createStoreCode
});
export const createRemoveChecksum = (clientResolver?: SigningClientResolver) => buildTx<MsgRemoveChecksum>({
  clientResolver,
  typeUrl: MsgRemoveChecksum.typeUrl,
  encoders: toEncoders(MsgRemoveChecksum),
  converters: toConverters(MsgRemoveChecksum)
});
export const useRemoveChecksum = buildUseMutation<MsgRemoveChecksum, Error>({
  builderMutationFn: createRemoveChecksum
});
export const createMigrateContract = (clientResolver?: SigningClientResolver) => buildTx<MsgMigrateContract>({
  clientResolver,
  typeUrl: MsgMigrateContract.typeUrl,
  encoders: toEncoders(MsgMigrateContract),
  converters: toConverters(MsgMigrateContract)
});
export const useMigrateContract = buildUseMutation<MsgMigrateContract, Error>({
  builderMutationFn: createMigrateContract
});