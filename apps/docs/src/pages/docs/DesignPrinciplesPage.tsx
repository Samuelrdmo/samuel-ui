import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

export function DesignPrinciplesPage() {
  const { t } = useTranslation();
  const principles = t('docs.designPrinciples.principles', { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  return (
    <div>
      <PageHeader
        eyebrow={t('docs.designPrinciples.eyebrow')}
        title={t('docs.designPrinciples.title')}
        description={t('docs.designPrinciples.description')}
      />

      <Section title={t('docs.designPrinciples.sectionTitle')}>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-none border border-border bg-surface-elevated p-5">
              <p className="mb-2 text-sm font-semibold text-fg-primary">{p.title}</p>
              <p className="text-sm text-fg-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
