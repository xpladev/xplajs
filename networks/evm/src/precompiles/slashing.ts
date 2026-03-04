import { ISlashing_ABI } from 'cosmos-evm-contracts/abi/precompiles/slashing/ISlashing';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Slashing;

export const slashing = { abi: ISlashing_ABI, address } as const;
