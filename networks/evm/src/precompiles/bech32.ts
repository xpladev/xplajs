import { Bech32I_ABI } from 'cosmos-evm-contracts/abi/precompiles/bech32/Bech32I';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Bech32;

export const bech32 = { abi: Bech32I_ABI, address } as const;
