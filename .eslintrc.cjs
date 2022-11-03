module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "unused-imports"],
  rules: {},
};