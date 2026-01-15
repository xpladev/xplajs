import path from 'path';
import { defineConfig } from 'vitest/config';
import { TestSequencer } from './testSequencer';

export default defineConfig({
  test: {
    hookTimeout: 150000,
    testTimeout: 150000,
    maxWorkers: 1,
    globals: true,
    reporters: 'verbose',
    include: ['starship/__tests__/**/*.test.ts'],
    exclude: ['**/dist/**', '**/node_modules/**'],
    sequence: {
      sequencer: TestSequencer,
    },
  },
});
