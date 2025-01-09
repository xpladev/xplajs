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