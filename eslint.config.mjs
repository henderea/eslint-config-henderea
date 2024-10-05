import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@stylistic': stylistic,
    },

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
        ...globals.browser,
        ...globals.jquery,
      },

      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'commonjs',

      parserOptions: {
        requireConfigFile: false,
      },
    },

    rules: {
      indent: ['error', 2, {
        SwitchCase: 1,
      }],

      'linebreak-style': ['error', 'unix'],
      '@stylistic/semi': ['error', 'always'],
      'curly': ['error', 'all'],
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

      '@stylistic/quotes': [2, 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],

      'import/no-extraneous-dependencies': 0,
      'no-template-curly-in-string': 0,
      eqeqeq: 0,
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': ['error'],
      'space-before-function-paren': 0,

      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],

      'keyword-spacing': 0,

      '@stylistic/keyword-spacing': ['error', {
        overrides: {
          if: {
            after: false,
          },

          for: {
            after: false,
          },

          while: {
            after: false,
          },

          switch: {
            after: false,
          },
        },
      }],

      'object-curly-spacing': 0,
      '@stylistic/object-curly-spacing': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'no-constant-condition': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-inferrable-types': 0,

      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],

      '@typescript-eslint/no-this-alias': 0,
      'no-control-regex': 0,
      '@typescript-eslint/no-namespace': 0,
      'no-redeclare': ['error', {
        builtinGlobals: false,
      }],
    },
  },
];
