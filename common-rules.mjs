export default {
  '@stylistic/indent': ['error', 2, {
    SwitchCase: 1,
  }],

  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/semi': ['error', 'always'],
  'curly': ['error', 'all'],
  'no-debugger': 0,
  'no-alert': 0,
  'no-await-in-loop': 0,
  'no-console': 0,
  'func-names': 0,
  'no-underscore-dangle': 0,
  'consistent-return': 0,
  radix: 0,

  '@stylistic/quotes': [2, 'single', {
    avoidEscape: true,
    allowTemplateLiterals: 'always',
  }],

  'no-template-curly-in-string': 0,
  eqeqeq: 0,
  '@stylistic/eol-last': ['error', 'always'],
  '@stylistic/no-trailing-spaces': ['error'],

  '@stylistic/space-before-function-paren': ['error', {
    anonymous: 'never',
    named: 'never',
    asyncArrow: 'always',
    catch: 'never',
  }],

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

  '@stylistic/object-curly-spacing': ['error', 'always'],
  '@stylistic/arrow-parens': ['error', 'always'],
  'no-constant-condition': 0,
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
  'no-redeclare': 0,
  '@typescript-eslint/no-redeclare': ['error', {
    builtinGlobals: false,
  }],
  '@typescript-eslint/no-require-imports': 0,
  'prefer-const': ['error', {
    'destructuring': 'all',
    'ignoreReadBeforeAssign': false
  }],
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-argument': 0,
  '@typescript-eslint/no-unsafe-declaration-merging': 0,
  '@typescript-eslint/no-unsafe-function-type': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  '@typescript-eslint/require-await': 0,
  '@typescript-eslint/unbound-method': 0,
};
