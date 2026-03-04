# @xpla/evm

Chain definition and precompile addresses/ABIs for XPLA EVM (viem).

## Installation

```bash
pnpm add @xpla/evm viem
```

## Usage

### Chain (viem)

```ts
import { conxMainnet, conxTestnet, conxLocal } from '@xpla/evm';
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  chain: conxMainnet,
  transport: http(),
});
```

### Precompile addresses and ABI

Each precompile is exported as `{ abi, address }` for use with viem (full type inference for `writeContract` / `readContract`):

```ts
import { bank, type CoinStruct, type PageRequestStruct } from '@xpla/evm/precompiles';
import { getContract, createPublicClient, http, writeContract } from 'viem';
import { conxMainnet } from '@xpla/evm';

const publicClient = createPublicClient({
  chain: conxMainnet,
  transport: http(),
});
const bankContract = getContract({
  ...bank,
  client: publicClient,
});
const balance = await bankContract.read.balance([address, denom]);

// writeContract with inferred function names and args
await writeContract(publicClient, { ...bank, functionName: 'send', args: [/* ... */] });
```

Legacy: `PRECOMPILE_ADDRESSES` and `*_PRECOMPILE_ABI` constants are still exported but deprecated; prefer `auth`, `bank`, `wasm`, `bech32`, `distribution`, `gov`, `slashing`, `staking`.

## ABI sources

- **@xpla/contracts**: Auth, Bank, Wasm
- **cosmos-evm-contracts**: Bech32, Distribution, Gov, Slashing, Staking

## Chain IDs

- Mainnet: 37 — https://explorer.conx.xyz/
- Testnet: 47
