import type { ReactNode } from 'react';

/**
 * The single bordered, gridded surface every component's Examples section
 * renders on. Sub-groups (Variants, Sizes, States...) live inside it,
 * separated only by a SubLabel and spacing, never by their own box —
 * they're all views of the same component on the same canvas.
 */
export function ExamplesSurface({ children }: { children: ReactNode }) {
  return <div className="rounded-none border border-border preview-surface p-10">{children}</div>;
}
