import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './src/',
})

const customJestConfig = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(customJestConfig)
