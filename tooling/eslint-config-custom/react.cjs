/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    require.resolve("./index.cjs")
  ],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  // globals: {
  //   JSX: true,
  // },
  rules: {
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
  },
};

module.exports = config;
