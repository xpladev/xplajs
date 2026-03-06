import { distributionIAbi } from 'cosmos-evm-contracts/abi/precompiles/distribution/DistributionI';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Distribution;

export const distribution = { abi: distributionIAbi, address } as const;
