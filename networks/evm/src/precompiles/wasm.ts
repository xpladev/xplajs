import { iWasmAbi } from '@xpla/contracts/abi/precompiles/wasm/IWasm';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Wasm;

export const wasm = { abi: iWasmAbi, address } as const;
