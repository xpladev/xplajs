import { ICosmosWalletConfig } from '@interchainjs/cosmos/wallets/types';
import { AddrDerivation, HDPath, IWalletConfig } from '@interchainjs/types';

/**
 * Creates a wallet configuration for Ethereum-style address derivation
 * @param passphrase - Optional passphrase for key derivation
 * @returns Wallet configuration object
 */
export function createCosmosEvmConfig(derivations: AddrDerivation[] = [], passphrase?: string): ICosmosWalletConfig {
  const addrDerivation = derivations.length > 0 ? derivations : [{ hdPath: HDPath.eth().toString(), prefix: 'xpla' }];

  return {
    privateKeyConfig: {
      algo: 'secp256k1',
      passphrase
    },
    publicKeyConfig: {
      compressed: true  // Use compressed keys for Cosmos-compatible signing
    },
    addressConfig: {
      strategy: 'cosmos_evm'
    },
    derivations: addrDerivation,
    message: {
      hash: 'keccak256'
    }
  };
}