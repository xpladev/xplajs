import { defineConfig } from 'vitest/config';

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
        },
      },
    ],
  },
});
