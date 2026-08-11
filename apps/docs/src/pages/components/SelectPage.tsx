import { Trans, useTranslation } from 'react-i18next';
import { Select, Skeleton } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { SubLabel } from '../../components/docs/SubLabel';
import { ExamplesSurface } from '../../components/docs/ExamplesSurface';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';

const previewCode = `<Select.Root onValueChange={setRole}>
  <Select.Trigger>
    <Select.Value placeholder="Select a role" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="designer">Designer</Select.Item>
    <Select.Item value="developer">Developer</Select.Item>
  </Select.Content>
</Select.Root>`;

const codeTag = <code className="font-mono text-xs" />;

export function SelectPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb trail={[t('breadcrumb.components'), t('components.select.title')]} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{t('components.select.title')}</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">{t('components.select.description')}</p>

      <div className="mb-14">
        <ComponentPageActions slug="select" />
      </div>

      <Section title={t('sections.examples')}>
        <ExamplesSurface>
          <div className="flex justify-center">
            <Select.Root defaultValue="designer">
              <Select.Trigger className="w-64">
                <Select.Value placeholder={t('home.rolePlaceholder') as string} />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="designer">{t('home.roleDesigner')}</Select.Item>
                <Select.Item value="developer">{t('home.roleDeveloper')}</Select.Item>
                <Select.Item value="pm">{t('home.rolePm')}</Select.Item>
                <Select.Item value="researcher" disabled>
                  {t('components.select.demo.researcherSoon')}
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.states')}</SubLabel>
            <div className="flex flex-wrap items-center gap-6">
              <Select.Root>
                <Select.Trigger className="w-56">
                  <Select.Value placeholder={t('components.select.demo.default') as string} />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="a">Option A</Select.Item>
                </Select.Content>
              </Select.Root>
              <Select.Root disabled>
                <Select.Trigger className="w-56">
                  <Select.Value placeholder={t('components.select.demo.disabled') as string} />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value="a">Option A</Select.Item>
                </Select.Content>
              </Select.Root>
              <Skeleton className="h-11 w-56" />
            </div>
          </div>
        </ExamplesSurface>
      </Section>

      <Section title={t('sections.usage')}>
        <CodeBlock code={`import { Select } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title={t('sections.composition')}>
        <CompositionTree
          lines={[
            'Select.Root',
            ' ├ Select.Trigger',
            ' │  └ Select.Value',
            ' └ Select.Content',
            '    └ Select.Item',
          ]}
        />
      </Section>

      <Section title={t('sections.accessibility')}>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><Trans i18nKey="components.select.a11y.keyboard" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.select.a11y.value" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.select.a11y.disabledItem" components={{ code: codeTag }} /></li>
        </ul>
      </Section>

      <Section title={t('sections.properties')}>
        <PropsTable
          rows={[
            { prop: 'value / defaultValue', type: 'string', description: t('components.select.api.value') },
            { prop: 'onValueChange', type: '(value: string) => void', description: t('components.select.api.onValueChange') },
            { prop: 'disabled', type: 'boolean', default: 'false', description: t('components.select.api.disabled') },
          ]}
        />
      </Section>
    </div>
  );
}
