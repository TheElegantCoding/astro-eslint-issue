import tseslint from 'typescript-eslint'
import eslintAstro from 'eslint-plugin-astro'

export default [
  ...tseslint.config(
    ...tseslint.configs.recommended,
    {
      languageOptions:
      {
        parserOptions:
        {
          project: './tsconfig.json',
          sourceType: 'module',
        },
      },
    },
  ),
  {
    rules: {
      'no-console': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/require-array-sort-compare': 'error',
    },
  },
  ...eslintAstro.configs['flat/all'],
  {
    files: ['**/*.astro/*.ts', '*.astro/*.ts'],
    rules:
    {
      '@typescript-eslint/require-array-sort-compare': 'off',
    },
  },
]
