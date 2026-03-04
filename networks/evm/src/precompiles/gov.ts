import { IGov_ABI } from 'cosmos-evm-contracts/abi/precompiles/gov/IGov';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Gov;

export const gov = { abi: IGov_ABI, address } as const;
