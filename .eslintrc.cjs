/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ['custom/base.cjs'],
  ignorePatterns: ['apps/**', 'packages/**', 'tooling/**'], // Important!
  root: true,
};

module.exports = config;
