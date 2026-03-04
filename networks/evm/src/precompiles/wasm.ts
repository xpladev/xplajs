import { IWasm_ABI } from '@xpla/contracts/abi/precompiles/wasm/IWasm';
import { PRECOMPILE_ADDRESSES } from './addresses';

const address = PRECOMPILE_ADDRESSES.Wasm;

export const wasm = { abi: IWasm_ABI, address } as const;
