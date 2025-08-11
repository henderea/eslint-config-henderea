module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    commonjs: true,
    browser: true,
    jquery: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    requireConfigFile: false,
    jsx: true
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    semi: 0,
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    curly: [
      'error',
      'all'
    ],
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    radix: 0,
    quotes: 0,
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'no-template-curly-in-string': 0,
    eqeqeq: 0,
    'eol-last': [
      'error',
      'always'
    ],
    'no-trailing-spaces': [
      'error'
    ],
    'space-before-function-paren': 0,
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'keyword-spacing': 0,
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        overrides: {
          if: {
            after: false
          },
          for: {
            after: false
          },
          while: {
            after: false
          },
          switch: {
            after: false
          }
        }
      }
    ],
    'object-curly-spacing': 0,
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always'
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'no-constant-condition': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'caughtErrorsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-this-alias': 0,
    'no-control-regex': 0,
    '@typescript-eslint/no-namespace': 0
  }
};
