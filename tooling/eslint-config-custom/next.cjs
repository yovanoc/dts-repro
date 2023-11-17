/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['next/core-web-vitals', require.resolve('./react.cjs')],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
  },
  overrides: [
    {
      // Adapt to your needs (e.g. some might want to only override "next.config.js")
      files: ['*.js'],
      // This is the default parser of ESLint
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  ],
};

module.exports = config;
