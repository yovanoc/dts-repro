/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['custom'],
  rules: {
    'no-console': 'off',
  },
};

module.exports = config;
