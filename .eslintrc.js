module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
    semi: ["error", "never"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    indent: "off"
  }
}
