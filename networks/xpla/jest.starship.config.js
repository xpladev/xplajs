/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testTimeout: 15000,
    maxWorkers: 1,
    preset: 'ts-jest',
    testEnvironment: 'node',
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
    testRegex: '(/starship/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@xpla/xpla$': '<rootDir>/dist/package.json'
    }
  };
    