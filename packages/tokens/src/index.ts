import './primitives.css';
import './semantic.css';

/**
 * Programmatic mirror of the semantic tokens, for docs/Storybook to render
 * swatches and tables from — not consumed by components (they use the CSS
 * variables directly via Tailwind's theme.extend.colors).
 */
export const semanticTokenGroups = {
  surface: ['bg-canvas', 'bg-surface', 'bg-surface-elevated', 'bg-surface-hover', 'bg-overlay'],
  foreground: ['fg-primary', 'fg-secondary', 'fg-caption', 'fg-muted', 'fg-on-brand', 'fg-disabled'],
  border: ['border-subtle', 'border-default', 'border-strong', 'border-brand'],
  action: [
    'action-primary',
    'action-primary-hover',
    'action-primary-active',
    'action-primary-foreground',
    'accent-foreground',
  ],
  feedback: ['feedback-danger', 'feedback-success', 'feedback-warning'],
} as const;

export const radiusTokens = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full'] as const;
export const spacingTokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const shadowTokens = ['sm', 'md', 'lg', 'focus'] as const;

export const fontFamilies = {
  heading: "'Inter Tight', 'General Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', 'IBM Plex Mono', monospace",
} as const;
