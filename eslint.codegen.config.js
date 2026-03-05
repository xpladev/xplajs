import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.ts"],
  linterOptions: {
    reportUnusedDisableDirectives: "off",
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  rules: {
    "@typescript-eslint/consistent-type-exports": "error",
  },
});
