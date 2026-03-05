import { iSlashingAbi } from 'cosmos-evm-contracts/abi/precompiles/slashing/ISlashing';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Slashing;

export const slashing = { abi: iSlashingAbi, address } as const;
