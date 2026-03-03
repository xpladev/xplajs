/**
 * Types used when calling precompile contracts (viem readContract/writeContract).
 */

/** Coin struct for Bank precompile (send, balance, etc.) */
export type CoinStruct = {
  denom: string;
  amount: bigint | string;
};

/** PageRequest struct for paginated queries (validators, etc.) */
export type PageRequestStruct = {
  key: Uint8Array;
  offset: bigint;
  limit: bigint;
  countTotal: boolean;
  reverse: boolean;
};
