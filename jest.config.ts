import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './src/',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
}

export default createJestConfig(customJestConfig)
