import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const spacing = [
  { step: 1, px: 4 },
  { step: 2, px: 8 },
  { step: 3, px: 12 },
  { step: 4, px: 16 },
  { step: 5, px: 24 },
  { step: 6, px: 32 },
  { step: 7, px: 48 },
  { step: 8, px: 64 },
  { step: 9, px: 96 },
  { step: 10, px: 128 },
];

export function SpacingPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('foundations.spacing.eyebrow')}
        title={t('foundations.spacing.title')}
        description={t('foundations.spacing.description')}
      />

      <Section title={t('foundations.spacing.scaleTitle')}>
        <div className="flex flex-col gap-3">
          {spacing.map((item) => (
            <div key={item.step} className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-mono text-xs text-fg-caption">--space-{item.step}</span>
              <div
                className="h-4 rounded-none bg-action-primary"
                style={{ width: `var(--su-space-${item.step})` }}
              />
              <span className="font-mono text-xs text-fg-muted">{item.px}px</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
