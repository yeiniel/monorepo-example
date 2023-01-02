module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["lib/**/*.*"],
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
  ],
};
