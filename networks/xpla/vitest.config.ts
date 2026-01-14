import path from 'path';
import { defineConfig } from 'vitest/config';
import { TestSequencer } from './testSequencer';

export default defineConfig({
  resolve: {
    alias: {
      // This is needed to resolve workspace modules,
      // which uses exports paths based on publishConfig.directory
      '@xpla/evm': path.resolve(__dirname, '../../libs/evm/dist'),
      '@xpla/xplajs': path.resolve(__dirname, '../../libs/xplajs/dist'),
    },
  },
  test: {
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
