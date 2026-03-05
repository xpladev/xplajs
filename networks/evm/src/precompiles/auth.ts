import { iAuthAbi } from '@xpla/contracts/abi/precompiles/auth/IAuth';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Auth;

export const auth = { abi: iAuthAbi, address } as const;
