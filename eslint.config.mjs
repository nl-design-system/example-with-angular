import js from '@eslint/js';
import jasmine from 'eslint-plugin-jasmine';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['**/build/', '**/dist', '**/tmp/', '**/coverage', '**/.angular']),
  {
    name: '@eslint/js recommended',
    files: ['**/*.{js,cjs,mjs,ts}'],
    ...js.configs.recommended,
  },
  {
    name: 'typescript-eslint recommended',
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
  },
  {
    name: 'eslint-plugin-jasmine',
    files: ['**/*.spec.ts', './e2e/protractor.conf.js'],
    plugins: { jasmine },
    languageOptions: {
      globals: { ...globals.jasmine },
    },
    extends: [jasmine.configs.recommended],
  },
  {
    name: 'Node.js globals',
    files: ['./karma.conf.js', './e2e/protractor.conf.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
]);
