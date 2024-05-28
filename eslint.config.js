// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      // @ts-expect-error outdated types
      'react-hooks': fixupPluginRules(reactHooks),
    },
    // @ts-expect-error outdated types
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
  },

  {
    ignores: ['dist', 'old'],
  },
);
