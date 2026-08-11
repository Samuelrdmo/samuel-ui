import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const radii = [
  { name: 'none', px: '0px' },
  { name: 'xs', px: '2px' },
  { name: 'sm', px: '6px' },
  { name: 'md', px: '12px' },
  { name: 'lg', px: '20px' },
  { name: 'xl', px: '32px' },
  { name: 'full', px: '999px' },
];

export function RadiusPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('foundations.radius.eyebrow')}
        title={t('foundations.radius.title')}
        description={t('foundations.radius.description')}
      />

      <Section title={t('foundations.radius.scaleTitle')}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {radii.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="size-16 border border-border bg-surface-elevated"
                style={{ borderRadius: `var(--radius-${r.name})` }}
              />
              <span className="font-mono text-[11px] text-fg-caption">radius-{r.name}</span>
              <span className="font-mono text-[11px] text-fg-muted">{r.px}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
