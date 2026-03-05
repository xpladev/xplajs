import { iWasmAbi } from '@xpla/contracts/abi/precompiles/wasm/IWasm';
import { PRECOMPILE_ADDRESSES } from './addresses';

/**
 * Wasm precompile with delegate-only calls (same IWasm interface, all calls are delegated).
 */
const address = PRECOMPILE_ADDRESSES.WasmDelegate;

export const wasmDelegate = { abi: iWasmAbi, address } as const;
