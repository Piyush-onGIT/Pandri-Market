const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "eslint-config-turbo",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  plugins: ["only-warn", "import"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ["*.js?(x)", "*.ts?(x)", ".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
