import type { TestProject } from 'vitest/node';
import { Instance } from 'cosmock';

// Well-known BIP39 test mnemonics (safe: local-only testing).
// One faucet per test file → no cross-process sequence races under fileParallelism.
const FAUCET_MNEMONICS = {
  token:
    'gesture inject test cycle original hollow east ridge hen combine junk child bacon zero hope comfort vacuum milk pitch cage oppose unhappy lunar seat',
  staking: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about',
  gov: 'enlist hip relief stomach skate base shallow young switch frequent cry park',
  evm: 'oyster design unusual machine spread century engine gravity focus cave carry slot',
} as const;

const RELAYER_MNEMONIC =
  'alley afraid soup fall idea toss can goose become valve initial strong forward bright dish figure check leopard decide warfare hub unusual join cart';

// 1e26 axpla = 1e8 xpla — plenty for all tests
const XPLA_FUND = '100000000000000000000000000axpla';
const COSMOS_FUND = '10000000000uatom';

const IBC_CHANNEL = 'channel-0';

const xplaAccounts = [
  ...Object.entries(FAUCET_MNEMONICS).map(([name, mnemonic]) => ({
    name: `faucet-${name}`,
    mnemonic,
    coins: XPLA_FUND,
  })),
  { name: 'relayer', mnemonic: RELAYER_MNEMONIC, coins: XPLA_FUND },
];

const gaiaAccounts = [{ name: 'relayer', mnemonic: RELAYER_MNEMONIC, coins: COSMOS_FUND }];

export default async function setup({ provide }: TestProject) {
  const xpla = Instance.xplad(
    {
      chainId: 'dimension_37-1',
      denom: 'axpla',
      prefix: 'xpla',
      rpcPort: 26657,
      grpcPort: 9090,
      apiPort: 1317,
      p2pPort: 26656,
      grpcWebPort: 9091,
      pprofPort: 6060,
      evmPort: 8545,
      accounts: xplaAccounts,
    },
    { timeout: 180_000 },
  );

  const gaia = Instance.gaiad(
    {
      chainId: 'cosmoshub-4',
      denom: 'uatom',
      prefix: 'cosmos',
      rpcPort: 26658,
      grpcPort: 9092,
      apiPort: 1318,
      p2pPort: 26659,
      grpcWebPort: 9093,
      pprofPort: 6061,
      accounts: gaiaAccounts,
    },
    { timeout: 120_000 },
  );

  await Promise.all([xpla.start(), gaia.start()]);

  const relayer = Instance.hermes(
    {
      channels: [[xpla, gaia]],
      mnemonic: RELAYER_MNEMONIC,
    },
    { timeout: 600_000 },
  );

  await relayer.start();

  provide('xplaRpcUrl', `http://localhost:${xpla.port}`);
  provide('xplaEvmRpcUrl', `http://localhost:${xpla.evmPort}`);
  provide('xplaChainId', xpla.chainId);
  provide('xplaDenom', xpla.denom);
  provide('xplaPrefix', xpla.prefix);
  provide('cosmosRpcUrl', `http://localhost:${gaia.port}`);
  provide('cosmosChainId', gaia.chainId);
  provide('cosmosPrefix', gaia.prefix);
  provide('cosmosDenom', gaia.denom);
  provide('ibcChannel', IBC_CHANNEL);
  provide('faucetMnemonics', FAUCET_MNEMONICS);

  return async () => {
    await relayer.stop().catch(() => {});
    await Promise.all([xpla.stop().catch(() => {}), gaia.stop().catch(() => {})]);
  };
}

declare module 'vitest' {
  export interface ProvidedContext {
    xplaRpcUrl: string;
    xplaEvmRpcUrl: string;
    xplaChainId: string;
    xplaDenom: string;
    xplaPrefix: string;
    cosmosRpcUrl: string;
    cosmosChainId: string;
    cosmosPrefix: string;
    cosmosDenom: string;
    ibcChannel: string;
    faucetMnemonics: Record<'token' | 'staking' | 'gov' | 'evm', string>;
  }
}
