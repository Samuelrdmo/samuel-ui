import { Trans, useTranslation } from 'react-i18next';
import { Input, Skeleton } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { SubLabel } from '../../components/docs/SubLabel';
import { ExamplesSurface } from '../../components/docs/ExamplesSurface';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';
import { figmaLinks } from '../../lib/figmaLinks';

const previewCode = `<Input.Root>
  <Input.Label>Email</Input.Label>
  <Input.Control placeholder="name@example.com" />
  <Input.HelperText>We'll never share your email.</Input.HelperText>
</Input.Root>`;

const errorCode = `<Input.Root invalid>
  <Input.Label>Email</Input.Label>
  <Input.Control placeholder="name@example.com" />
  <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
</Input.Root>`;

const codeTag = <code className="font-mono text-xs" />;

export function InputPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb trail={[t('breadcrumb.components'), t('components.input.title')]} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{t('components.input.title')}</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">{t('components.input.description')}</p>

      <div className="mb-14">
        <ComponentPageActions slug="input" figmaUrl={figmaLinks.input} />
      </div>

      <Section title={t('sections.examples')}>
        <ExamplesSurface>
          <div className="max-w-xs">
            <Input.Root>
              <Input.Label>{t('home.emailLabel')}</Input.Label>
              <Input.Control placeholder="name@example.com" />
              <Input.HelperText>We'll never share your email.</Input.HelperText>
            </Input.Root>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.states')}</SubLabel>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Input.Root>
                <Input.Label>{t('components.input.demo.default')}</Input.Label>
                <Input.Control placeholder={t('components.input.demo.typeSomething') as string} />
              </Input.Root>
              <Input.Root disabled>
                <Input.Label>{t('components.input.demo.disabled')}</Input.Label>
                <Input.Control placeholder={t('components.input.demo.cantType') as string} />
              </Input.Root>
              <Input.Root>
                <Input.Label>{t('components.input.demo.filled')}</Input.Label>
                <Input.Control defaultValue="samuel@example.com" />
              </Input.Root>
              <Input.Root invalid>
                <Input.Label>{t('components.input.demo.error')}</Input.Label>
                <Input.Control defaultValue="not-an-email" />
                <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
              </Input.Root>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-11 w-full" />
              </div>
            </div>
          </div>
        </ExamplesSurface>

        <div className="mt-6">
          <SubLabel>{t('sections.errorState')}</SubLabel>
          <CodeBlock code={errorCode} />
        </div>
      </Section>

      <Section title={t('sections.usage')}>
        <CodeBlock code={`import { Input } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title={t('sections.composition')}>
        <CompositionTree
          lines={[
            'Input.Root',
            ' ├ Input.Label',
            ' ├ Input.Control',
            ' ├ Input.HelperText',
            ' └ Input.ErrorMessage',
          ]}
        />
      </Section>

      <Section title={t('sections.accessibility')}>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><Trans i18nKey="components.input.a11y.label" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.input.a11y.describedby" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.input.a11y.error" components={{ code: codeTag }} /></li>
        </ul>
      </Section>

      <Section title={t('sections.properties')}>
        <PropsTable
          rows={[
            { prop: 'invalid', type: 'boolean', default: 'false', description: t('components.input.api.invalid') },
            { prop: 'disabled', type: 'boolean', default: 'false', description: t('components.input.api.disabled') },
          ]}
        />
      </Section>

      <Section title={t('sections.design')}>
        <p className="text-sm text-fg-secondary">
          {figmaLinks.input ? t('design.connected') : t('design.notConnected')}
        </p>
      </Section>
    </div>
  );
}
