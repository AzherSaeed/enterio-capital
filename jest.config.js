module.export = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
  ], // setupFiles before the tests are ran
  displayName: 'Entira Capital Test Report',
  moduleNameMapper: {
    '@pages/(.*)$': './src/pages/$1',
    '@assets': './src/assets/index.js',
    '@routes/(.*)$': '<rootDir>/src/routes/$1',
    '@config': './src/config.js',
    '@components/(.*)$': './src/components/$1',
  },
};
