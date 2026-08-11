import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['**/dist/**', '**/node_modules/**', '**/storybook-static/**', '**/*.tsbuildinfo'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      /**
       * A design system that documents accessibility has no business shipping
       * accessibility lint errors. These are errors, not warnings, on purpose.
       */
      ...jsxA11y.flatConfigs.recommended.rules,

      /**
       * A scroll container must be reachable by keyboard (WCAG 2.1.1), and the
       * only way to do that is tabIndex={0} on the non-interactive element that
       * scrolls. The rule allows this for `tabpanel` out of the box; `region`
       * is the same situation and is what our scrollable tables use.
       */
      'jsx-a11y/no-noninteractive-tabindex': [
        'error',
        { tags: [], roles: ['tabpanel', 'region'], allowExpressionValues: true },
      ],

      /**
       * The escape hatch for intentionally unused values is a leading
       * underscore, so a real unused binding still fails the build.
       */
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
    },
  },

  {
    // Config and build files run in Node, not the browser.
    files: ['**/*.config.{ts,js,cjs}', '**/.storybook/**/*.{ts,tsx}'],
    languageOptions: { globals: { ...globals.node } },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },

  {
    files: ['**/*.cjs'],
    languageOptions: { globals: { ...globals.node }, sourceType: 'commonjs' },
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },

  {
    files: ['**/*.test.{ts,tsx}', '**/src/test/**'],
    languageOptions: { globals: { ...globals.node } },
  }
);
