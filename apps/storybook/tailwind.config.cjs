/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@samuel-ui/tokens/tailwind.preset.cjs')],
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./.storybook/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
