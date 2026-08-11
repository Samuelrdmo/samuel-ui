import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

const shadows = ['sm', 'md', 'lg', 'focus'] as const;

export function ShadowsPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('foundations.shadows.eyebrow')}
        title={t('foundations.shadows.title')}
        description={t('foundations.shadows.description')}
      />

      <Section title={t('foundations.shadows.elevationTitle')}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {shadows.map((name) => (
            <div key={name} className="flex flex-col items-center gap-4 py-6">
              <div
                className="size-20 rounded-none border border-border-subtle bg-surface-elevated"
                style={{ boxShadow: `var(--shadow-${name})` }}
              />
              <div className="text-center">
                <p className="font-mono text-xs text-fg-caption">--shadow-{name}</p>
                <p className="mt-1 text-xs text-fg-muted">{t(`foundations.shadows.levels.${name}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
