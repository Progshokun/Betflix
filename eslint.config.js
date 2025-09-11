import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js, eslintPluginPrettier, react: pluginReact },
    extends: [
      'js/recommended',
      pluginReact.configs.flat.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs['jsx-runtime'].rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
      'react/jsx-key': 'warn',
      'prettier/prettier': 'warn',
      'react/prop-types': 0,
    },
  },
]);
