module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@cybozu/eslint-config/presets/kintone-customize-es5', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [],
      env: {},
    },
  ],
}
