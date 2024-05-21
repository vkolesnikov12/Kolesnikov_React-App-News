module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-hooks/exhaustive-deps": "off",
    "semi": ["error"],
    "quotes": ["error", "single"],
    "no-extra-semi": "off",
    "no-console": "off",
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": false,
      "allowNamedExports": false
  }],
  "radix": ["error", "as-needed"],
  "no-param-reassign": ["off"],
  "no-shadow": ["error", { "ignoreOnInitialization": false }],
  "prefer-destructuring": ["error", {"object": true, "array": false}]
  },
}
