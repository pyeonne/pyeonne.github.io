import tsEslint from '@typescript-eslint/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    plugins: {
      '@typescript-eslint': tsEslint,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      //
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      //
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.cjs',
      },
      next: {
        rootDir: ['apps/*/'],
      },
    },
  },
];
