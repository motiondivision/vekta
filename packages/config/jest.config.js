/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  rootDir: "src",
  preset: "ts-jest",
  // testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.{test.js,test.jsx,test.ts,test.tsx}",
    "!**/node_modules/**",
    "!**/__tests__/**",
  ],
  testMatch: ["/**/*.test.(js|ts)?(x)"],
  coverageDirectory: "<rootDir>/../coverage",
}

module.exports = config
