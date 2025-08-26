import { IAddressStrategy, IAlgo } from '@interchainjs/types';
import { bech32 } from 'bech32';
import { keccak_256 } from '@noble/hashes/sha3';

// Cosmos EVM-style address strategy using keccak256 but outputting bech32
export const COSMOS_EVM_ADDRESS_STRATEGY: IAddressStrategy = {
  name: 'cosmos_evm',
  preprocessPublicKey: (pubKeyBytes: Uint8Array, compressed: boolean, algo: IAlgo) => {
    let ethPubKey = compressed ? algo.uncompress(pubKeyBytes) : pubKeyBytes;
    return ethPubKey[0] === 0x04 ? ethPubKey.slice(1) : ethPubKey;
  },
  hash: (bytes: Uint8Array) => keccak_256(bytes).slice(-20),
  encode: (bytes: Uint8Array, prefix: string = 'xpla') => {
    const words = bech32.toWords(Buffer.from(bytes));
    return bech32.encode(prefix, words);
  },
  decode: (address: string) => {
    const decoded = bech32.decode(address);
    return { bytes: new Uint8Array(bech32.fromWords(decoded.words)), prefix: decoded.prefix };
  },
  extractPrefix: (address: string) => {
    const match = address.match(/^([a-z]+)1/);
    return match ? match[1] : undefined;
  }
};