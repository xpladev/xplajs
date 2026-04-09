import { defineConfig } from 'vitest/config';
import { TestSequencer } from './testSequencer';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'module',
          include: ['module/__tests__/**/*.test.ts'],
        },
      },
      {
        test: {
          name: 'starship',
          include: ['starship/__tests__/**/*.test.ts'],
          setupFiles: ['./starship/setup.ts'],
          testTimeout: 200_000,
          hookTimeout: 200_000,
          fileParallelism: false,
          sequence: {
            sequencer: TestSequencer,
          },
        },
      },
      {
        test: {
          name: 'cosmock',
          include: ['cosmock/__tests__/**/*.test.ts'],
          globalSetup: ['./cosmock/global-setup.ts'],
          testTimeout: 30_000,
          hookTimeout: 60_000,
        },
      },
    ],
  },
});
