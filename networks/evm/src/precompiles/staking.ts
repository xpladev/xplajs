import { stakingIAbi } from 'cosmos-evm-contracts/abi/precompiles/staking/StakingI';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Staking;

export const staking = { abi: stakingIAbi, address } as const;
