module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!@vue).+\\.js$'], // Transform node_modules if needed
    testMatch: ['<rootDir>/tests/frontend/**/*.spec.js'],
    moduleNameMapper: {
        "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
        '^@/(.*)$': '<rootDir>/frontend/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock style files
        '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image files
    },
};
