import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const brandScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const neutralScale = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const semanticGroups: { groupKey: string; tokens: string[] }[] = [
  { groupKey: 'surface', tokens: ['bg-canvas', 'bg-surface', 'bg-surface-elevated', 'bg-surface-hover', 'bg-overlay'] },
  {
    groupKey: 'foreground',
    tokens: ['fg-primary', 'fg-secondary', 'fg-caption', 'fg-muted', 'fg-on-brand', 'fg-disabled'],
  },
  { groupKey: 'border', tokens: ['border-subtle', 'border-default', 'border-strong', 'border-brand'] },
  {
    groupKey: 'action',
    tokens: ['action-primary', 'action-primary-hover', 'action-primary-active', 'action-primary-foreground'],
  },
  { groupKey: 'feedback', tokens: ['feedback-danger', 'feedback-success', 'feedback-warning'] },
];

export function ColorsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('foundations.colors.eyebrow')}
        title={t('foundations.colors.title')}
        description={t('foundations.colors.description')}
      />

      <Section title={t('foundations.colors.primitiveBrandTitle')}>
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
          {brandScale.map((step) => (
            <div key={step} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-none border border-border-subtle"
                style={{ background: `var(--su-brand-${step})` }}
              />
              <span className="font-mono text-[11px] text-fg-caption">{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('foundations.colors.primitiveNeutralTitle')}>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-12">
          {neutralScale.map((step) => (
            <div key={step} className="flex flex-col gap-2">
              <div
                className="h-14 rounded-none border border-border-subtle"
                style={{ background: `var(--su-neutral-${step})` }}
              />
              <span className="font-mono text-[11px] text-fg-caption">{step}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t('foundations.colors.semanticTitle')}>
        <div className="flex flex-col gap-8">
          {semanticGroups.map((group) => (
            <div key={group.groupKey}>
              <p className="mb-3 text-sm font-semibold text-fg-primary">
                {t(`foundations.colors.groups.${group.groupKey}`)}
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.tokens.map((token) => (
                  <div
                    key={token}
                    className="flex items-center gap-3 rounded-none border border-border bg-surface-elevated p-3"
                  >
                    <div
                      className="size-8 shrink-0 rounded-none border border-border-subtle"
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
