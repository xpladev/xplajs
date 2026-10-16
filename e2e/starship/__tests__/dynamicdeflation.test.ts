import { createCosmosQueryClient } from '@interchainjs/cosmos';
import {
  getCurrentPeriod,
  getParams,
  getDynamicDeflationStatus,
} from '@xpla/xplajs/xpla/dynamicdeflation/v1beta1/query.rpc.func';
import { getParams as getEvmParams } from '@xpla/xplajs/cosmos/evm/vm/v1/query.rpc.func';
import { PageRequest } from '@xpla/xplajs/cosmos/base/query/v1beta1/pagination';
import { getOngoingProposals } from '@xpla/xplajs/xpla/burn/v1beta1/query.rpc.func';
import { getVolunteerValidators } from '@xpla/xplajs/xpla/volunteer/v1beta1/query.rpc.func';
import { useChain } from 'starshipjs';
import { beforeAll, describe, expect, it } from 'vitest';

describe('XPLA v1.14 module queries', () => {
  let queryClient: Awaited<ReturnType<typeof createCosmosQueryClient>>;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('xpla');
    queryClient = await createCosmosQueryClient(await getRpcEndpoint());
  });

  it('decodes the dynamic deflation parameters', async () => {
    const { params } = await getParams(queryClient, {});

    expect(params.enabled).toBe(true);
    expect(Number(params.allocationRate)).toBe(0.2);
    expect(params.settlementIntervalBlocks).toBe(100_000n);
    expect(params.minFeeAmount).toEqual({
      denom: 'axpla',
      amount: '69444000000000000000000',
    });
    expect(params.maxFeeAmount).toEqual({
      denom: 'axpla',
      amount: '3472222000000000000000000',
    });
  });

  it('decodes the active period created after the first block', async () => {
    await expect.poll(async () => {
      const { currentPeriod } = await getCurrentPeriod(queryClient, {});
      return currentPeriod?.startHeight;
    }, { timeout: 30_000 }).toBeGreaterThan(0n);

    const { currentPeriod } = await getCurrentPeriod(queryClient, {});
    expect(currentPeriod).toBeDefined();
    expect(currentPeriod!.endHeight).toBeGreaterThan(currentPeriod!.startHeight);
    expect(currentPeriod!.activeConfig.enabled).toBe(true);
    expect(BigInt(currentPeriod!.grossAmount)).toBeGreaterThanOrEqual(0n);
    expect(BigInt(currentPeriod!.allocatedAmount)).toBeGreaterThanOrEqual(0n);
  });

  it('decodes pool accounting from one status response', async () => {
    const status = await getDynamicDeflationStatus(queryClient, {});

    for (const coin of [status.moduleBalance, status.allocatedAmount, status.surplusAmount, status.deficitAmount]) {
      expect(coin.denom).toBe('axpla');
      expect(BigInt(coin.amount)).toBeGreaterThanOrEqual(0n);
    }
    const balance = BigInt(status.moduleBalance.amount);
    const allocated = BigInt(status.allocatedAmount.amount);
    expect(BigInt(status.surplusAmount.amount)).toBe(balance > allocated ? balance - allocated : 0n);
    expect(BigInt(status.deficitAmount.amount)).toBe(allocated > balance ? allocated - balance : 0n);
  });

  it('enables the rc4 ICS20 precompile in genesis', async () => {
    const { params } = await getEvmParams(queryClient, {});
    expect(params.activeStaticPrecompiles).toContain('0x0000000000000000000000000000000000000802');
    expect(params.activeStaticPrecompiles).not.toContain('0x1000000000000000000000000000000000000044');
  });

  it('decodes pagination from burn and volunteer queries', async () => {
    const request = { pagination: PageRequest.fromPartial({ limit: 1n, countTotal: true }) };
    const responses = await Promise.all([
      getOngoingProposals(queryClient, request),
      getVolunteerValidators(queryClient, request),
    ]);
    for (const response of responses) {
      expect(response.pagination).toBeDefined();
      expect(response.pagination!.nextKey).toBeInstanceOf(Uint8Array);
      expect(response.pagination!.total).toBeGreaterThanOrEqual(0n);
    }
  });
});
