module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: [
      'error',
      'never',
    ],
    'max-len': [
      2,
      {
        code: 200,
        tabWidth: 4,
        ignoreUrls: true,
      },
    ],
  },
}
