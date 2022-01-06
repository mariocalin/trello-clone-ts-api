module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache',
  testMatch: ['<rootDir>/src/**/*.test.ts']
};
