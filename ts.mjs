import typescriptEslint from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

import rules from './common-rules.mjs';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: false
    }
  },
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
        projectService: {
          allowDefaultProject: ['*.mjs', '*.js', '*.cjs', '*.jsx'],
        },
        ecmaFeatures: {
          jsx: true
        },
      },
    },

    rules: {
      ...rules,
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-argument': 0,
      '@typescript-eslint/no-unsafe-declaration-merging': 0,
      '@typescript-eslint/no-unsafe-function-type': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/require-await': 0,
      '@typescript-eslint/unbound-method': 0,
    }
  }
];
