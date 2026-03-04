import { DistributionI_ABI } from 'cosmos-evm-contracts/abi/precompiles/distribution/DistributionI';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Distribution;

export const distribution = { abi: DistributionI_ABI, address } as const;
