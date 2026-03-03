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

```ts
import {
  PRECOMPILE_ADDRESSES,
  BANK_PRECOMPILE_ABI,
  STAKING_PRECOMPILE_ABI,
  type CoinStruct,
  type PageRequestStruct,
} from '@xpla/evm/precompiles';
import { getContract, createPublicClient, http } from 'viem';
import { conxMainnet } from '@xpla/evm';

const publicClient = createPublicClient({
  chain: conxMainnet,
  transport: http(),
});
const bankContract = getContract({
  address: PRECOMPILE_ADDRESSES.Bank,
  abi: BANK_PRECOMPILE_ABI,
  client: publicClient,
});
const balance = await bankContract.read.balance([address, denom]);
```

## ABI sources

- **@xpla/contracts**: Auth, Bank, Wasm
- **cosmos-evm-contracts**: Bech32, Distribution, Gov, Slashing, Staking

## Chain IDs

- Mainnet: 37 — https://explorer.conx.xyz/
- Testnet: 47
