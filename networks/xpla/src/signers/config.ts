import { PRESET_COSMOS_EVM_SIGNATURE_FORMATS } from './signature-processor';
import { CosmosEvmDocOptions, CosmosEvmSignerConfig } from './types';
import deepmerge from 'deepmerge';
import { PubKey as Secp256k1PubKey } from '@interchainjs/cosmos-types/cosmos/crypto/secp256k1/keys';
import { EncodedMessage } from '@interchainjs/cosmos/signers/types';

/**
 * Encode public key for CosmosEvm
 * Uses the CosmosEvm-specific public key type URL
 */
export const encodeCosmosEvmPublicKey = (publicKey: Uint8Array): EncodedMessage => {
  return {
    typeUrl: '/cosmos.evm.crypto.v1.ethsecp256k1.PubKey',
    value: Secp256k1PubKey.encode(
      Secp256k1PubKey.fromPartial({ key: publicKey })
    ).finish(),
  };
};

/**
 * Default configuration for CosmosEvm signers
 * Provides CosmosEvm-specific defaults for fee calculation, signing options, and transaction options
 */
export const DEFAULT_COSMOS_EVM_SIGNER_CONFIG: Partial<CosmosEvmDocOptions> = {
  // FeeOptions - Gas and fee calculation defaults for CosmosEvm
  multiplier: 1.5, // Higher gas multiplier for CosmosEvm due to COSMOS_EVM compatibility
  gasPrice: 'average', // Use average gas price from network

  // SignOptions - CosmosEvm-specific signing and address defaults
  addressPrefix: 'xpla', // CosmosEvm address prefix
  message: {
    hash: 'keccak256' // CosmosEvm uses keccak256 for Ethereum compatibility
  },

  // Signature format options - CosmosEvm-specific signature processing
  signature: {
    format: PRESET_COSMOS_EVM_SIGNATURE_FORMATS['compact']
  },

  // TxOptions - Transaction-level defaults
  unordered: false, // Ordered transactions by default
  extensionOptions: [], // No extension options by default
  nonCriticalExtensionOptions: [], // No non-critical extension options by default

  // Public key encoding - CosmosEvm specific
  encodePublicKey: encodeCosmosEvmPublicKey
};

/**
 * Creates a complete CosmosEvm signer configuration by merging user-provided config with defaults
 * @param userConfig - User-provided configuration (must include required EndpointOptions)
 * @returns Complete CosmosSignerConfig with CosmosEvm defaults applied
 */
export function createCosmosEvmSignerConfig(userConfig: CosmosEvmSignerConfig): CosmosEvmSignerConfig {
  // Ensure required EndpointOptions are present
  if (!userConfig.queryClient) {
    throw new Error('queryClient is required in signer configuration');
  }

  const queryClient = userConfig.queryClient;

  // Deep merge user config with CosmosEvm defaults, giving priority to user config
  const mergedConfig = deepmerge(DEFAULT_COSMOS_EVM_SIGNER_CONFIG, userConfig, {
    // Custom merge function to handle arrays properly
    arrayMerge: (_destinationArray, sourceArray) => sourceArray,
    // Clone to avoid mutations
    clone: true
  }) as CosmosEvmSignerConfig;

  mergedConfig.queryClient = queryClient;

  return mergedConfig;
}

/**
 * Creates a partial configuration for use in sign operations
 * Merges the base signer config with operation-specific options
 * @param baseConfig - Base signer configuration
 * @param operationOptions - Operation-specific options (from sign args)
 * @returns Merged configuration for the operation
 */
export function mergeCosmosEvmSignerOptions(
  baseConfig: CosmosEvmSignerConfig,
  operationOptions: Partial<CosmosEvmDocOptions> = {}
): CosmosEvmDocOptions {
  return deepmerge(baseConfig, operationOptions, {
    arrayMerge: (_destinationArray, sourceArray) => sourceArray,
    clone: true
  }) as CosmosEvmDocOptions;
}
