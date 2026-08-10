import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const shadows = [
  { name: 'sm', description: 'Subtle lift — hovered rows, small controls.' },
  { name: 'md', description: 'Cards, popovers, dropdown content.' },
  { name: 'lg', description: 'Modals and anything floating above the page.' },
  { name: 'focus', description: 'Focus ring — brand-colored, replaces default outline.' },
];

export function ShadowsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Foundations"
        title="Shadows"
        description="Elevation levels. Dark mode uses ambient black shadows; light mode softens them so nothing looks muddy on a bright surface."
      />

      <Section title="Elevation">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {shadows.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-4 py-6">
              <div
                className="size-20 rounded-md border border-border-subtle bg-surface-elevated"
                style={{ boxShadow: `var(--shadow-${s.name})` }}
              />
              <div className="text-center">
                <p className="font-mono text-xs text-fg-caption">--shadow-{s.name}</p>
                <p className="mt-1 text-xs text-fg-muted">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
