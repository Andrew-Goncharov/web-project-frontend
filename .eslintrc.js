module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
  ],
  rules: {
    indent: [
      "error",
      2,
    ],
    "linebreak-style": [
      "warn",
      "unix",
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    "import/extensions": [
      "warn",
      "never",
    ],
    "import/no-unresolved": ["warn"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "no-param-reassign": ["warn"],
    "implicit-arrow-linebreak": ["warn"],
  },
};
