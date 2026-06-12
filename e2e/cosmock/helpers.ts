import { inject } from 'vitest';
import { DirectSigner, createCosmosQueryClient, toEncoders } from '@interchainjs/cosmos';
import { EthSecp256k1HDWallet, DEFAULT_COSMOS_EVM_SIGNER_CONFIG } from '@xpla/xpla';
import { send } from '@xpla/xplajs';
import { MsgSend } from '@xpla/xplajs/cosmos/bank/v1beta1/tx';

export const HD_PATH = "m/44'/60'/0'/0/0";

// Default: 100 xpla (matches starship faucet behavior in the original tests)
const DEFAULT_XPLA_AMOUNT = '100000000000000000000';

export type FaucetKey = 'token' | 'staking' | 'gov' | 'evm';

type FaucetContext = {
  signer: DirectSigner;
  address: string;
  denom: string;
};

const cached = new Map<FaucetKey, FaucetContext>();

async function getFaucet(key: FaucetKey): Promise<FaucetContext> {
  const hit = cached.get(key);
  if (hit) return hit;

  const rpcUrl = inject('xplaRpcUrl');
  const chainId = inject('xplaChainId');
  const prefix = inject('xplaPrefix');
  const denom = inject('xplaDenom');
  const mnemonic = inject('faucetMnemonics')[key];

  const wallet = await EthSecp256k1HDWallet.fromMnemonic(mnemonic, {
    derivations: [{ prefix, hdPath: HD_PATH }],
  });
  const offlineSigner = await wallet.toOfflineDirectSigner();
  const [{ address }] = await offlineSigner.getAccounts();

  const queryClient = await createCosmosQueryClient(rpcUrl);
  const signer = new DirectSigner(offlineSigner, {
    ...DEFAULT_COSMOS_EVM_SIGNER_CONFIG,
    queryClient,
    chainId,
    addressPrefix: prefix,
  });
  signer.addEncoders(toEncoders(MsgSend));

  const ctx: FaucetContext = { signer, address, denom };
  cached.set(key, ctx);
  return ctx;
}

/**
 * Send tokens from the test file's dedicated pre-funded faucet account to a target address.
 * Each file gets its own faucet (keyed by `token` / `staking` / `gov` / `evm`) so parallel
 * test files don't share sequence state — no cross-process lock needed.
 */
export async function faucet(key: FaucetKey, toAddress: string, amount: string = DEFAULT_XPLA_AMOUNT): Promise<void> {
  const { signer, address, denom } = await getFaucet(key);
  const fee = {
    amount: [{ denom, amount: '100000' }],
    gas: '550000',
  };
  const result = await send(
    signer,
    address,
    {
      fromAddress: address,
      toAddress,
      amount: [{ denom, amount }],
    },
    fee,
    'faucet',
  );
  await result.wait();
}
