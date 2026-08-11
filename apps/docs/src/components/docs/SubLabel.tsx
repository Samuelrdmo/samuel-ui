import type { ReactNode } from 'react';

export function SubLabel({ children }: { children: ReactNode }) {
  return <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">{children}</p>;
}
