import {
  defaultAccountParser as parseCosmosAccount,
  defaultSignerConfig as CosmosSignerConfig,
} from '@interchainjs/cosmos/defaults';
import {
  EncodedMessage,
  SignerOptions,
} from '@interchainjs/cosmos/types';
import { toDecoder } from '@interchainjs/cosmos/utils';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { EthAccount } from './accounts/eth-account';
import { EthAccount as protoEthAccount } from '@xpla/xplajs/ethermint/types/v1/account';
import { WalletOptions } from '@interchainjs/cosmos/types/wallet';
import { IKey, SignerConfig } from '@interchainjs/types';

import { abytes } from '@noble/hashes/_assert';
import { keccak_256 } from '@noble/hashes/sha3';
import { computeAddress } from '@ethersproject/transactions';
import { Key } from '@interchainjs/utils';
import { EthSecp256k1Auth } from '@interchainjs/auth/ethSecp256k1';

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
    const decoder = toDecoder(protoEthAccount);
    const account: protoEthAccount = decoder.fromPartial(
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
        abytes(hashed);
        return hashed;
      },
    },
    publicKey: defaultPublicKeyConfig,
    encodePublicKey: defaultEncodePublicKey,
    parseAccount: defaultAccountParser,
    createAccount: EthAccount,
    prefix: 'xpla',
  }
};

export const defaultWalletOptions: WalletOptions = {
  bip39Password: undefined,
  createAuthsFromMnemonic: EthSecp256k1Auth.fromMnemonic,
  signerConfig: defaultSignerOptions.Cosmos,
}