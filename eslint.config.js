import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    files: ['**/*.ts'],
    settings: {
      react: {
        version: '18'
      }
    }
  },
  eslintPluginPrettier
);
