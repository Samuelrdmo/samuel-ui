import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const scale = [
  { label: 'Display', size: 'text-5xl', family: 'font-heading', sample: 'Samuel UI' },
  { label: 'Heading', size: 'text-3xl', family: 'font-heading', sample: 'Design and code' },
  { label: 'Subheading', size: 'text-xl', family: 'font-heading', sample: 'Speaking the same language' },
  { label: 'Body', size: 'text-base', family: 'font-body', sample: 'A design system for people who ship.' },
  { label: 'Small', size: 'text-sm', family: 'font-body', sample: 'Helper text and secondary content.' },
  { label: 'Caption', size: 'text-xs', family: 'font-mono', sample: 'UPPERCASE LABEL' },
  { label: 'Code', size: 'text-sm', family: 'font-mono', sample: "<Button.Root variant=\"primary\" />" },
];

const families = [
  { name: 'Heading', token: '--font-heading', value: "'Inter Tight', 'General Sans', sans-serif" },
  { name: 'Body', token: '--font-body', value: "'Inter', sans-serif" },
  { name: 'Mono', token: '--font-mono', value: "'JetBrains Mono', 'IBM Plex Mono', monospace" },
];

export function TypographyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Foundations"
        title="Typography"
        description="Three families, one job each: Inter Tight for headings, Inter for body copy, JetBrains Mono for labels, code and anything technical."
      />

      <Section title="Type scale">
        <div className="flex flex-col divide-y divide-border-subtle rounded-md border border-border">
          {scale.map((item) => (
            <div key={item.label} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-caption">
                {item.label}
              </span>
              <p className={`${item.size} ${item.family} flex-1 text-fg-primary`}>{item.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Font families">
        <div className="grid gap-3 sm:grid-cols-3">
          {families.map((f) => (
            <div key={f.name} className="rounded-sm border border-border bg-surface-elevated p-4">
              <p className="mb-1 text-sm font-semibold text-fg-primary">{f.name}</p>
              <code className="font-mono text-xs text-fg-caption">{f.token}</code>
              <p className="mt-2 font-mono text-xs text-fg-secondary">{f.value}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
