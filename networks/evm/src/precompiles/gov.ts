import { iGovAbi } from 'cosmos-evm-contracts/abi/precompiles/gov/IGov';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Gov;

export const gov = { abi: iGovAbi, address } as const;
