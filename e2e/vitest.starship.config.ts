import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 200_000,
    hookTimeout: 200_000,
    globals: true,
    include: ['starship/__tests__/**/*.test.ts'],
  },
});
