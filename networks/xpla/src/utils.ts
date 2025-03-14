import {
  SignerConfig,
} from '@interchainjs/types';
import { Auth } from '@interchainjs/types';

import { defaultPublicKeyConfig } from './defaults';
import { EthAccount } from './types';

export function getAccountFromAuth(
  auth: Auth,
  pubKeyConfig: SignerConfig['publicKey'] = defaultPublicKeyConfig
): EthAccount {
  const publicKey = auth.getPublicKey(pubKeyConfig.isCompressed);
  const pubKeyHash = pubKeyConfig.hash(publicKey);
  return {
    algo: auth.algo,
    publicKey,
    cosmosAddress: pubKeyHash.toBech32('xpla'),
    ethereumAddress: pubKeyHash.toPrefixedHex(),
  };
}