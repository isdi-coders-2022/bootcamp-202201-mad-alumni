module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  sourceType: "module",
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  plugins: ["react"],
  rules: {},
};
