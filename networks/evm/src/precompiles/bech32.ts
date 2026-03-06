import { bech32IAbi } from 'cosmos-evm-contracts/abi/precompiles/bech32/Bech32I';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Bech32;

export const bech32 = { abi: bech32IAbi, address } as const;
