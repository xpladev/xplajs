import { iBankAbi } from '@xpla/contracts/abi/precompiles/bank/IBank';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Bank;

export const bank = { abi: iBankAbi, address } as const;
