module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  transformIgnorePatterns: [
  'node_modules/(?!(jest-)?react-native|@react-native|@reduxjs/toolkit|redux|immer|expo(nent)?|@expo|expo-modules-core|react-redux|@reduxjs|@unimodules|@expo/vector-icons)'
]
};