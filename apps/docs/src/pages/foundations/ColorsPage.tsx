import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const brandScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const neutralScale = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const semanticGroups: { title: string; tokens: string[] }[] = [
  { title: 'Surface', tokens: ['bg-canvas', 'bg-surface', 'bg-surface-elevated', 'bg-surface-hover', 'bg-overlay'] },
  {
    title: 'Foreground',
    tokens: ['fg-primary', 'fg-secondary', 'fg-caption', 'fg-muted', 'fg-on-brand', 'fg-disabled'],
  },
  { title: 'Border', tokens: ['border-subtle', 'border-default', 'border-strong', 'border-brand'] },
  {
    title: 'Action',
    tokens: ['action-primary', 'action-primary-hover', 'action-primary-active', 'action-primary-foreground'],
  },
  { title: 'Feedback', tokens: ['feedback-danger', 'feedback-success', 'feedback-warning'] },
];

export function ColorsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Foundations"
        title="Colors"
        description="Primitive scales feed semantic tokens, which are the only colors components are allowed to reference. Values shown resolve for the active theme."
      />

      <Section title="Primitive — brand">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {brandScale.map((step) => (
            <div key={step} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-sm border border-border-subtle"
                style={{ background: `var(--su-brand-${step})` }}
              />
              <span className="font-mono text-[11px] text-fg-caption">{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Primitive — neutral">
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-12">
          {neutralScale.map((step) => (
            <div key={step} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-sm border border-border-subtle"
                style={{ background: `var(--su-neutral-${step})` }}
              />
              <span className="font-mono text-[11px] text-fg-caption">{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Semantic tokens — light & dark mapping">
        <div className="flex flex-col gap-8">
          {semanticGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-sm font-semibold text-fg-primary">{group.title}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.tokens.map((token) => (
                  <div
                    key={token}
                    className="flex items-center gap-3 rounded-sm border border-border bg-surface-elevated p-3"
                  >
                    <div
                      className="size-8 shrink-0 rounded-xs border border-border-subtle"
                      style={{ background: `var(--${token})` }}
                    />
                    <code className="font-mono text-xs text-fg-secondary">--{token}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
