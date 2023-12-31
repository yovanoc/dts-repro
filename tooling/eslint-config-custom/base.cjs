/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  globals: {
    NodeJS: true,
  },
  ignorePatterns: [
    '**/.eslintrc.cjs',
    '**/*.config.js',
    '**/*.config.cjs',
    '**/*.config.ts',
    '.next',
    'dist',
    'pnpm-lock.yaml',
  ],
  reportUnusedDisableDirectives: true,
  extends: ['eslint:recommended', 'turbo', 'prettier'],
  plugins: ['json-format'],
  rules: {
    'prefer-const': 'error',
    eqeqeq: 'error',
    'lines-between-class-members': 'error',
    curly: 'error',
    'no-constant-condition': 'error',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'func-style': ['error', 'expression'],
    'no-extra-semi': 'error',
    'default-case': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-console': 'warn',
    'no-misleading-character-class': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-path-concat': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-vars': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
};

module.exports = config;
