import { useTranslation } from 'react-i18next';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';

export function InstallationPage() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t('docs.installation.eyebrow')}
        title={t('docs.installation.title')}
        description={t('docs.installation.description')}
      />

      <Section title={t('docs.installation.cloneTitle')}>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/Samuelrdmo/samuel-ui.git\ncd samuel-ui\npnpm install`}
        />
      </Section>

      <Section title={t('docs.installation.runTitle')}>
        <CodeBlock language="bash" code={`pnpm dev:docs`} />
      </Section>

      <Section title={t('docs.installation.publishedTitle')}>
        <CodeBlock language="bash" code={`npm install @samuel-ui/react`} />
      </Section>
    </div>
  );
}
