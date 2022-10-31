module.exports = {
  rootDir: './src',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.tsx'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'utils.tsx', '.stories.tsx'],
  coverageProvider: 'babel',
  coverageReporters: ['text-summary', 'html'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
};
