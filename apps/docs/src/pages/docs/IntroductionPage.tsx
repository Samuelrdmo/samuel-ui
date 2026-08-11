import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

export function IntroductionPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('docs.introduction.eyebrow')}
        title={t('docs.introduction.title')}
        description={t('docs.introduction.description')}
      />

      <Section title={t('docs.introduction.whatTitle')}>
        <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">{t('docs.introduction.whatBody')}</p>
      </Section>

      <Section title={t('docs.introduction.whyTitle')}>
        <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">{t('docs.introduction.whyBody')}</p>
      </Section>
    </div>
  );
}
