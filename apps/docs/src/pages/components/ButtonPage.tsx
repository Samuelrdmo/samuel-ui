import { Plus } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Skeleton } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { SubLabel } from '../../components/docs/SubLabel';
import { ExamplesSurface } from '../../components/docs/ExamplesSurface';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';
import { figmaLinks } from '../../lib/figmaLinks';

const usageCode = `import { Button } from '@samuel-ui/react';

<Button.Root variant="primary" size="md" onClick={handleSave}>
  Save changes
</Button.Root>`;

const variants: { name: string; variant: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' }[] = [
  { name: 'primary', variant: 'primary' },
  { name: 'secondary', variant: 'secondary' },
  { name: 'ghost', variant: 'ghost' },
  { name: 'outline', variant: 'outline' },
  { name: 'destructive', variant: 'destructive' },
];

const codeTag = <code className="font-mono text-xs" />;

export function ButtonPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb trail={[t('breadcrumb.components'), t('components.button.title')]} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{t('components.button.title')}</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">{t('components.button.description')}</p>

      <div className="mb-14">
        <ComponentPageActions slug="button" figmaUrl={figmaLinks.button} />
      </div>

      <Section title={t('sections.examples')}>
        <ExamplesSurface>
          <div className="flex flex-wrap items-center gap-4">
            <Button.Root variant="primary">{t('home.saveChanges')}</Button.Root>
            <Button.Root variant="secondary">
              <Button.Icon>
                <Plus />
              </Button.Icon>
              {t('home.createProject')}
            </Button.Root>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.variants')}</SubLabel>
            <div className="flex flex-wrap gap-4">
              {variants.map((v) => (
                <div key={v.name} className="flex flex-col items-center gap-2">
                  <Button.Root variant={v.variant}>{t('components.button.title')}</Button.Root>
                  <span className="font-mono text-[11px] text-fg-caption">{v.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.sizes')}</SubLabel>
            <div className="flex flex-wrap items-center gap-4">
              <Button.Root size="sm">{t('components.button.demo.small')}</Button.Root>
              <Button.Root size="md">{t('components.button.demo.medium')}</Button.Root>
              <Button.Root size="lg">{t('components.button.demo.large')}</Button.Root>
            </div>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.states')}</SubLabel>
            <div className="flex flex-wrap items-center gap-4">
              <Button.Root>{t('components.button.demo.default')}</Button.Root>
              <Button.Root disabled>{t('components.button.demo.disabled')}</Button.Root>
              <Button.Root loading>{t('components.button.demo.loading')}</Button.Root>
              <Skeleton className="h-11 w-28" />
            </div>
          </div>
        </ExamplesSurface>
      </Section>

      <Section title={t('sections.usage')}>
        <CodeBlock code={usageCode} />
      </Section>

      <Section title={t('sections.composition')}>
        <CompositionTree lines={['Button.Root', ' └ Button.Icon (optional)']} />
      </Section>

      <Section title={t('sections.accessibility')}>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><Trans i18nKey="components.button.a11y.native" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.button.a11y.loading" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.button.a11y.focus" components={{ code: codeTag }} /></li>
        </ul>
      </Section>

      <Section title={t('sections.properties')}>
        <PropsTable
          rows={[
            { prop: 'variant', type: 'primary | secondary | ghost | outline | destructive', default: 'primary', description: t('components.button.api.variant') },
            { prop: 'size', type: 'sm | md | lg', default: 'md', description: t('components.button.api.size') },
            { prop: 'loading', type: 'boolean', default: 'false', description: t('components.button.api.loading') },
            { prop: 'disabled', type: 'boolean', default: 'false', description: t('components.button.api.disabled') },
          ]}
        />
      </Section>

      <Section title={t('sections.design')}>
        <p className="text-sm text-fg-secondary">
          {figmaLinks.button ? t('design.connected') : t('design.notConnected')}
        </p>
      </Section>
    </div>
  );
}
