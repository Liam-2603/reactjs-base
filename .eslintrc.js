module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Các rules tùy chỉnh của bạn ở đây
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
};