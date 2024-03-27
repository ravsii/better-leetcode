
module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@stylistic/js"
  ],
  "rules": {
    "@stylistic/js/no-trailing-spaces": ["error"],
    "@stylistic/js/indent": [
      "error",
      2
    ],
    "prefer-const": ["error"],
    "@stylistic/js/linebreak-style": [
      "error",
      "unix"
    ],
    "@stylistic/js/quotes": [
      "error",
      "double"
    ],
    "@stylistic/js/semi": [
      "error",
      "never"
    ]
  }
}
