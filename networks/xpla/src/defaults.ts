import {
  defaultAccountParser as parseCosmosAccount,
  defaultSignerConfig as CosmosSignerConfig,
} from '@interchainjs/cosmos/defaults';
import {
  EncodedMessage,
  SignerOptions,
  TimeoutHeightOption,
} from '@interchainjs/cosmos/types';
import { toDecoder } from '@interchainjs/cosmos/utils';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { EthAccount } from 'xplajs/ethermint/types/v1/account'
import { Eip712Doc } from '@interchainjs/ethereum/types';
import { IKey, SignerConfig } from '@interchainjs/types';

import { DomainOptions, EthereumChainId } from './types';
import { bytes as assertBytes } from '@noble/hashes/_assert';
import { keccak_256 } from '@noble/hashes/sha3';
import { computeAddress } from '@ethersproject/transactions';
import { Key } from '@interchainjs/utils';

import { registry as authV1beta1Registry } from "xplajs/cosmos/auth/v1beta1/tx.registry"
import { registry as authzV1beta1Registry } from "xplajs/cosmos/authz/v1beta1/tx.registry"
import { registry as bankV1beta1Registry } from "xplajs/cosmos/bank/v1beta1/tx.registry"
import { registry as circuitV1Registry } from "xplajs/cosmos/circuit/v1/tx.registry"
import { registry as consensusV1Registry } from "xplajs/cosmos/consensus/v1/tx.registry"
import { registry as crisisV1beta1Registry } from "xplajs/cosmos/crisis/v1beta1/tx.registry"
import { registry as distributionV1beta1Registry } from "xplajs/cosmos/distribution/v1beta1/tx.registry"
import { registry as evidenceV1beta1Registry } from "xplajs/cosmos/evidence/v1beta1/tx.registry"
import { registry as feegrantV1beta1Registry } from "xplajs/cosmos/feegrant/v1beta1/tx.registry"
import { registry as govV1Registry } from "xplajs/cosmos/gov/v1/tx.registry"
import { registry as govV1beta1Registry } from "xplajs/cosmos/gov/v1beta1/tx.registry"
import { registry as mintV1beta1Registry } from "xplajs/cosmos/mint/v1beta1/tx.registry"
import { registry as slashingV1beta1Registry } from "xplajs/cosmos/slashing/v1beta1/tx.registry"
import { registry as stakingV1beta1Registry } from "xplajs/cosmos/staking/v1beta1/tx.registry"
import { registry as upgradeV1beta1Registry } from "xplajs/cosmos/upgrade/v1beta1/tx.registry"
import { registry as vestingV1beta1Registry } from "xplajs/cosmos/vesting/v1beta1/tx.registry"
import { registry as evmV1Registry } from "xplajs/ethermint/evm/v1/tx.registry"
import { registry as feemarketV1Regitstry } from "xplajs/ethermint/feemarket/v1/tx.registry"
import { registry as rewardV1beta1Registry } from "xplajs/xpla/reward/v1beta1/tx.registry"
import { registry as volunteerV1beta1Registry } from "xplajs/xpla/volunteer/v1beta1/tx.registry"
import { registry as wasmV1beta1Registry } from "xplajs/cosmwasm/wasm/v1/tx.registry"

import { AminoConverter as authV1beta1AminoConverter } from "xplajs/cosmos/auth/v1beta1/tx.amino"
import { AminoConverter as authzV1beta1AminoConverter } from "xplajs/cosmos/authz/v1beta1/tx.amino"
import { AminoConverter as bankV1beta1AminoConverter } from "xplajs/cosmos/bank/v1beta1/tx.amino"
import { AminoConverter as circuitV1AminoConverter } from "xplajs/cosmos/circuit/v1/tx.amino"
import { AminoConverter as consensusV1AminoConverter } from "xplajs/cosmos/consensus/v1/tx.amino"
import { AminoConverter as crisisV1beta1AminoConverter } from "xplajs/cosmos/crisis/v1beta1/tx.amino"
import { AminoConverter as distributionV1beta1AminoConverter } from "xplajs/cosmos/distribution/v1beta1/tx.amino"
import { AminoConverter as evidenceV1beta1AminoConverter } from "xplajs/cosmos/evidence/v1beta1/tx.amino"
import { AminoConverter as feegrantV1beta1AminoConverter } from "xplajs/cosmos/feegrant/v1beta1/tx.amino"
import { AminoConverter as govV1AminoConverter } from "xplajs/cosmos/gov/v1/tx.amino"
import { AminoConverter as govV1beta1AminoConverter } from "xplajs/cosmos/gov/v1beta1/tx.amino"
import { AminoConverter as mintV1beta1AminoConverter } from "xplajs/cosmos/mint/v1beta1/tx.amino"
import { AminoConverter as slashingV1beta1AminoConverter } from "xplajs/cosmos/slashing/v1beta1/tx.amino"
import { AminoConverter as stakingV1beta1AminoConverter } from "xplajs/cosmos/staking/v1beta1/tx.amino"
import { AminoConverter as upgradeV1beta1AminoConverter } from "xplajs/cosmos/upgrade/v1beta1/tx.amino"
import { AminoConverter as vestingV1beta1AminoConverter } from "xplajs/cosmos/vesting/v1beta1/tx.amino"
import { AminoConverter as evmV1AminoConverter } from "xplajs/ethermint/evm/v1/tx.amino"
import { AminoConverter as feemarketV1RAminoConverter } from "xplajs/ethermint/feemarket/v1/tx.amino"
import { AminoConverter as rewardV1beta1AminoConverter } from "xplajs/xpla/reward/v1beta1/tx.amino"
import { AminoConverter as volunteerV1beta1AminoConverter } from "xplajs/xpla/volunteer/v1beta1/tx.amino"
import { AminoConverter as wasmV1beta1AminoConverter } from "xplajs/cosmwasm/wasm/v1/tx.amino"

export const Network = {
  Mainnet: {
    lcd: "https://dimension-lcd.xpla.io",
    rpc: "https://dimension-rpc.xpla.io",
  },
  Testnet: {
    lcd: "https://cube-lcd.xpla.io",
    rpc: "https://cube-rpc.xpla.io",
  }
}

export const defaultPublicKeyConfig: SignerConfig['publicKey'] = {
  isCompressed: CosmosSignerConfig.publicKey.isCompressed,
  hash: (publicKey: Key) => Key.fromHex(computeAddress(publicKey.value))
};

export const defaultEncodePublicKey = (key: IKey): EncodedMessage => {
  return {
    typeUrl: '/ethermint.crypto.v1.ethsecp256k1.PubKey',
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: key.value })
    ).finish(),
  };
};

export const defaultAccountParser = (
  encodedAccount: EncodedMessage
): BaseAccount => {
  try {
    return parseCosmosAccount(encodedAccount);
  } catch (error) {
    const decoder = toDecoder(EthAccount);
    const account: EthAccount = decoder.fromPartial(
      decoder.decode(encodedAccount.value)
    );
    return account.baseAccount;
  }
};

export const defaultSignerOptions: Record<string, Required<SignerOptions>> = {
  Cosmos: {
    ...CosmosSignerConfig,
    message: {
      ...CosmosSignerConfig.message,
      hash: (message: Uint8Array) => {
        const hashed = keccak_256(message);
        assertBytes(hashed);
        return hashed;
      },
    },
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    prefix: 'xpla',
  },
  Ethereum: {
    message: {
      hash: (message: Uint8Array) => {
        const hashed = keccak_256(message);
        assertBytes(hashed);
        return hashed;
      },
    },
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    prefix: undefined,
  },
};

export const defaultRegistry = [
  ...authV1beta1Registry,
  ...authzV1beta1Registry,
  ...bankV1beta1Registry,
  ...circuitV1Registry,
  ...consensusV1Registry,
  ...crisisV1beta1Registry,
  ...distributionV1beta1Registry,
  ...evidenceV1beta1Registry,
  ...feegrantV1beta1Registry,
  ...govV1Registry,
  ...govV1beta1Registry,
  ...mintV1beta1Registry,
  ...slashingV1beta1Registry,
  ...stakingV1beta1Registry,
  ...upgradeV1beta1Registry,
  ...vestingV1beta1Registry,
  ...evmV1Registry,
  ...feemarketV1Regitstry,
  ...rewardV1beta1Registry,
  ...volunteerV1beta1Registry,
  ...wasmV1beta1Registry,
]

export const defaultAminoConverter = {
  ...authV1beta1AminoConverter,
  ...authzV1beta1AminoConverter,
  ...bankV1beta1AminoConverter,
  ...circuitV1AminoConverter,
  ...consensusV1AminoConverter,
  ...crisisV1beta1AminoConverter,
  ...distributionV1beta1AminoConverter,
  ...evidenceV1beta1AminoConverter,
  ...feegrantV1beta1AminoConverter,
  ...govV1AminoConverter,
  ...govV1beta1AminoConverter,
  ...mintV1beta1AminoConverter,
  ...slashingV1beta1AminoConverter,
  ...stakingV1beta1AminoConverter,
  ...upgradeV1beta1AminoConverter,
  ...vestingV1beta1AminoConverter,
  ...evmV1AminoConverter,
  ...feemarketV1RAminoConverter,
  ...rewardV1beta1AminoConverter,
  ...volunteerV1beta1AminoConverter,
  ...wasmV1beta1AminoConverter,
}