import {
  SignerConfig,
} from '@interchainjs/types';
import { Auth } from '@interchainjs/types';
import { fromNumber, toPrefixedHex } from '@interchainjs/utils';

import { defaultPublicKeyConfig } from './defaults';
import { DomainOptions, EthAccount } from './types';

export function getAccountFromAuth(
  auth: Auth,
  pubKeyConfig: SignerConfig['publicKey'] = defaultPublicKeyConfig
): EthAccount {
  const publicKey = auth.getPublicKey(pubKeyConfig.isCompressed);
  const pubKeyHash = pubKeyConfig.hash(publicKey);
  return {
    algo: auth.algo,
    publicKey,
    cosmosAddress: pubKeyHash.toBech32('inj'),
    ethereumAddress: pubKeyHash.toPrefixedHex(),
  };
}