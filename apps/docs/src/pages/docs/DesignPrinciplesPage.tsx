import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const principles = [
  {
    title: 'Composition over configuration',
    body: 'Compound components (Modal.Root, Modal.Trigger, Modal.Content…) instead of one giant component with dozens of boolean props.',
  },
  {
    title: 'Tokens, not values',
    body: 'No component reads a raw hex or pixel value. Everything resolves through semantic CSS variables so themes stay consistent by construction.',
  },
  {
    title: 'Accessible by default',
    body: 'Keyboard interaction, focus management and ARIA are part of the component, not a follow-up task. Radix primitives handle it where the behavior is complex (Select, Modal).',
  },
  {
    title: 'Documentation is a first-class product',
    body: 'The docs site and Storybook consume the same real components and the same AI context files — there is exactly one source of truth.',
  },
];

export function DesignPrinciplesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Getting Started"
        title="Design Principles"
        description="The rules that shape every component decision in Samuel UI."
      />

      <Section title="Principles">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-md border border-border bg-surface-elevated p-5">
              <p className="mb-2 text-sm font-semibold text-fg-primary">{p.title}</p>
              <p className="text-sm text-fg-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
