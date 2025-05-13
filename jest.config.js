// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  // Setup file after environment is set up
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Use jsdom to simulate the browser
  testEnvironment: 'jest-environment-jsdom',

  // Handle module aliases
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1', // example alias
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^react-i18next$': '<rootDir>/__mocks__/react-i18next.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Optionally ignore specific paths
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/scripts/'],

  // Collect coverage from specific files
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],

  // Coverage thresholds (optional)
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
