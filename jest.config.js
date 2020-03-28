module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "jsx", "json"],
  // setupFiles: ['<rootDir>/config/setup.js'],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]"
  ],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  testRegex: ".*\\.(test|spec)\\.js?$",
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
