import { defineChain } from 'viem';

/**
 * CONX Chain Mainnet (XPLA) – chainId 37
 * @see https://explorer.conx.xyz/
 */
export const conxMainnet = defineChain({
  id: 37,
  name: 'CONX Chain mainnet',
  nativeCurrency: { name: 'CONX', symbol: 'XPLA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://dimension-evm-rpc.xpla.dev/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'CONX Explorer',
      url: 'https://explorer.conx.xyz',
    },
  },
});

/**
 * CONX Chain Testnet – chainId 47
 */
export const conxTestnet = defineChain({
  id: 47,
  name: 'CONX Chain testnet',
  nativeCurrency: { name: 'CONX', symbol: 'XPLA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://cube-evm-rpc.xpla.dev'],
    },
  },
  blockExplorers: {
    default: {
      name: 'CONX Explorer',
      url: 'https://explorer.conx.xyz',
    },
  },
});

/**
 * CONX Chain Local (e.g. starship) – default RPC 8545
 */
export const conxLocal = defineChain({
  id: 37,
  name: 'CONX Chain local',
  nativeCurrency: { name: 'CONX', symbol: 'XPLA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
  },
});
