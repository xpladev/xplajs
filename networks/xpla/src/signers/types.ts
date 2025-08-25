import {
    CosmosSignerConfig,
    DocOptions,
    SignOptions as CosmosSignOptions,
    EncodedMessage
  } from '@interchainjs/cosmos/signers/types';
  import { SignatureFormatFunction } from '@interchainjs/auth';
  
  
  
  /**
   * CosmosEvm-specific signing options
   * Extends Cosmos SignOptions with CosmosEvm signature format configuration
   */
  export interface CosmosEvmSignOptions extends CosmosSignOptions {
    signature?: {
      /** Signature format configuration for CosmosEvm */
      format?: SignatureFormatFunction | string;
    };
  }
  
  /**
   * CosmosEvm document options
   * Extends Cosmos DocOptions with CosmosEvm-specific signature options
   */
  export interface CosmosEvmDocOptions extends Omit<DocOptions, 'signature'> {
    /** CosmosEvm-specific signing options */
    signature?: {
      format?: SignatureFormatFunction | string;
    };
    /** Chain ID for CosmosEvm */
    chainId?: string;
    /** Account number */
    accountNumber?: bigint;
    /** Sequence number */
    sequence?: bigint;
    /** Signer address */
    signerAddress?: string;
    /** Address prefix (default: 'xpla') */
    addressPrefix?: string;
    /** Message hashing configuration */
    message?: {
      hash: string | ((data: Uint8Array) => Uint8Array);
    };
    /** Public key encoding function */
    encodePublicKey?: (publicKey: Uint8Array) => EncodedMessage;
  }
  
  /**
   * CosmosEvm signer configuration
   * Extends Cosmos signer configuration with CosmosEvm-specific options
   */
  export interface CosmosEvmSignerConfig extends Omit<CosmosSignerConfig, keyof CosmosEvmDocOptions>, CosmosEvmDocOptions {
    /** Query client for chain interactions */
    queryClient: any; // Will be typed properly when CosmosEvm query client is defined
  }
  
  /**
   * Re-export commonly used types from Cosmos for convenience
   */
  export {
    ICosmosSigner,
    CosmosSignArgs,
    CosmosMessage,
    EncodedMessage,
    CosmosSignedTransaction,
    CosmosBroadcastOptions,
    CosmosBroadcastResponse,
    OfflineSigner,
    AccountData,
    DirectSignResponse,
    AminoSignResponse
  } from '@interchainjs/cosmos/signers/types';
  
  /**
   * Type alias for CosmosEvm signer interface
   * Uses the same interface as Cosmos since CosmosEvm is Cosmos-compatible
   */
  export type ICosmosEvmSigner = import('@interchainjs/cosmos/signers/types').ICosmosSigner;
  
  /**
   * CosmosEvm sign arguments
   * Uses the same structure as Cosmos but with CosmosEvm-specific options
   */
  export interface CosmosEvmSignArgs {
    /** Messages to sign */
    messages: readonly import('@interchainjs/cosmos/signers/types').CosmosMessage[];
    /** Transaction fee */
    fee?: import('@interchainjs/types').StdFee;
    /** Transaction memo */
    memo?: string;
    /** CosmosEvm-specific signing options */
    options?: CosmosEvmDocOptions;
  }
  
  
  