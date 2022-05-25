import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts}',
    '!<rootDir>/**/*.test.{js,ts}',
    '!<rootDir>/**/*.d.{js,ts}',
    '!<rootDir>/coverage/**/*',
    '!<rootDir>/mocks/**/*',
  ],
  preset: 'ts-jest',
  testRegex: '.(test|spec)\\.[jt]s$',
  testEnvironment: 'node',
  rootDir: './src',
  setupFilesAfterEnv: ['<rootDir>/tests/setEnv.ts'],
};

export default config;
