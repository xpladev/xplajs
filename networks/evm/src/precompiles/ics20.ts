import { ics20IAbi } from 'cosmos-evm-contracts/abi/precompiles/ics20/ICS20I';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.ICS20;

export const ics20 = { abi: ics20IAbi, address } as const;
