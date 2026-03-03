import type { Abi } from 'viem';

// @xpla/contracts – Auth, Bank, Wasm
import authAbiJson from '@xpla/contracts/abi/precompiles/auth/IAuth.sol/IAuth.json';
import bankAbiJson from '@xpla/contracts/abi/precompiles/bank/IBank.sol/IBank.json';
import wasmAbiJson from '@xpla/contracts/abi/precompiles/wasm/IWasm.sol/IWasm.json';

// cosmos-evm-contracts – Bech32, Distribution, Gov, Slashing, Staking
import bech32AbiJson from 'cosmos-evm-contracts/abi/precompiles/bech32/Bech32I.json';
import distributionAbiJson from 'cosmos-evm-contracts/abi/precompiles/distribution/DistributionI.json';
import govAbiJson from 'cosmos-evm-contracts/abi/precompiles/gov/IGov.json';
import slashingAbiJson from 'cosmos-evm-contracts/abi/precompiles/slashing/ISlashing.json';
import stakingAbiJson from 'cosmos-evm-contracts/abi/precompiles/staking/StakingI.json';

const toAbi = (a: unknown): Abi => (Array.isArray(a) ? a : (a as { abi?: Abi }).abi ?? []) as Abi;

export const AUTH_PRECOMPILE_ABI = toAbi(authAbiJson);
export const BANK_PRECOMPILE_ABI = toAbi(bankAbiJson);
export const WASM_PRECOMPILE_ABI = toAbi(wasmAbiJson);
export const BECH32_PRECOMPILE_ABI = toAbi(bech32AbiJson);
export const DISTRIBUTION_PRECOMPILE_ABI = toAbi(distributionAbiJson);
export const GOV_PRECOMPILE_ABI = toAbi(govAbiJson);
export const SLASHING_PRECOMPILE_ABI = toAbi(slashingAbiJson);
export const STAKING_PRECOMPILE_ABI = toAbi(stakingAbiJson);
