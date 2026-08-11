import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const scaleRows = [
  { key: 'display', size: 'text-5xl', family: 'font-heading' },
  { key: 'heading', size: 'text-3xl', family: 'font-heading' },
  { key: 'subheading', size: 'text-xl', family: 'font-heading' },
  { key: 'body', size: 'text-base', family: 'font-body' },
  { key: 'small', size: 'text-sm', family: 'font-body' },
  { key: 'caption', size: 'text-xs', family: 'font-mono' },
] as const;

const codeSample = "<Button.Root variant=\"primary\" />";

const families = [
  { key: 'heading', token: '--font-heading', value: "'Inter Tight', 'General Sans', sans-serif" },
  { key: 'body', token: '--font-body', value: "'Inter', sans-serif" },
  { key: 'mono', token: '--font-mono', value: "'JetBrains Mono', 'IBM Plex Mono', monospace" },
];

export function TypographyPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('foundations.typography.eyebrow')}
        title={t('foundations.typography.title')}
        description={t('foundations.typography.description')}
      />

      <Section title={t('foundations.typography.scaleTitle')}>
        <div className="flex flex-col divide-y divide-border-subtle rounded-none border border-border">
          {scaleRows.map((item) => (
            <div key={item.key} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-caption">
                {t(`foundations.typography.scale.${item.key}`)}
              </span>
              <p className={`${item.size} ${item.family} flex-1 text-fg-primary`}>
                {t(`foundations.typography.samples.${item.key}`)}
              </p>
            </div>
          ))}
          <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
            <span className="w-28 shrink-0 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-caption">
              {t('foundations.typography.scale.code')}
            </span>
            <p className="text-sm font-mono flex-1 text-fg-primary">{codeSample}</p>
          </div>
        </div>
      </Section>

      <Section title={t('foundations.typography.familiesTitle')}>
        <div className="grid gap-3 sm:grid-cols-3">
          {families.map((f) => (
            <div key={f.key} className="rounded-none border border-border bg-surface-elevated p-4">
              <p className="mb-1 text-sm font-semibold text-fg-primary">{t(`foundations.typography.families.${f.key}`)}</p>
              <code className="font-mono text-xs text-fg-caption">{f.token}</code>
              <p className="mt-2 font-mono text-xs text-fg-secondary">{f.value}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
