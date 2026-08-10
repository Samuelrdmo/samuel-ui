/**
 * Shared Tailwind preset — maps Tailwind utilities to Samuel UI's semantic
 * CSS variables (packages/tokens/src/semantic.css). Components never
 * reference raw hex or primitive scale values, only these utility names.
 * Consumed by packages/ui, apps/docs and apps/storybook.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-canvas)',
        surface: 'var(--bg-surface)',
        'surface-elevated': 'var(--bg-surface-elevated)',
        'surface-hover': 'var(--bg-surface-hover)',
        overlay: 'var(--bg-overlay)',
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          caption: 'var(--fg-caption)',
          muted: 'var(--fg-muted)',
          'on-brand': 'var(--fg-on-brand)',
          disabled: 'var(--fg-disabled)',
        },
        border: {
          DEFAULT: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
          strong: 'var(--border-strong)',
          brand: 'var(--border-brand)',
        },
        action: {
          primary: 'var(--action-primary)',
          'primary-hover': 'var(--action-primary-hover)',
          'primary-active': 'var(--action-primary-active)',
          'primary-foreground': 'var(--action-primary-foreground)',
        },
        accent: 'var(--accent-foreground)',
        danger: {
          DEFAULT: 'var(--feedback-danger)',
          foreground: 'var(--feedback-danger-foreground)',
        },
        success: 'var(--feedback-success)',
        warning: 'var(--feedback-warning)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
      },
      keyframes: {
        'su-fade-in': { from: { opacity: 0 }, to: { opacity: 1 } },
        'su-scale-in': {
          from: { opacity: 0, transform: 'scale(0.96) translateY(4px)' },
          to: { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        'su-overlay-in': { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: {
        'su-fade-in': 'su-fade-in 0.15s ease-out',
        'su-scale-in': 'su-scale-in 0.15s ease-out',
        'su-overlay-in': 'su-overlay-in 0.2s ease-out',
      },
    },
  },
};
