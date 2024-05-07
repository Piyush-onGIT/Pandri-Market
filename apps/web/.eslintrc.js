/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  ignorePatterns: [
    "tsconfig.json",
    "**/useSellerStore.ts",
    "**/useShopStore.ts",
    "useStore",
    "**/Multiselect.tsx",
    "**/Dropdown.tsx",
    "**/table.tsx",
  ],
};
