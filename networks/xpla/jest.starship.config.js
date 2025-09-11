/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testTimeout: 150000,
  maxWorkers: 1,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testSequencer: '<rootDir>/testSequencer.js',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig: false,
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testRegex: '/starship/__tests__/.*\\.(test|spec)\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
