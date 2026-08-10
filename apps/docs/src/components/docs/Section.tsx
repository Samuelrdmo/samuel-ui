import type { ReactNode } from 'react';

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-fg-caption">{title}</h2>
      {children}
    </section>
  );
}
