import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/precompiles/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  unbundle: true,
  clean: true,
  outExtensions: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.js',
    dts: '.d.ts',
  }),
  platform: 'neutral',
});
