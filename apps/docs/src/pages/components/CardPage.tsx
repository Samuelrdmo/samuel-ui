import { Trans, useTranslation } from 'react-i18next';
import { Button, Card, Skeleton } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { SubLabel } from '../../components/docs/SubLabel';
import { ExamplesSurface } from '../../components/docs/ExamplesSurface';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';

const previewCode = `<Card.Root>
  <Card.Header>
    <Card.Title>Design System</Card.Title>
    <Card.Description>Components and foundations.</Card.Description>
  </Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Footer>...</Card.Footer>
</Card.Root>`;

const codeTag = <code className="font-mono text-xs" />;

export function CardPage() {
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb trail={[t('breadcrumb.components'), t('components.card.title')]} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{t('components.card.title')}</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">{t('components.card.description')}</p>

      <div className="mb-14">
        <ComponentPageActions slug="card" />
      </div>

      <Section title={t('sections.examples')}>
        <ExamplesSurface>
          <SubLabel>{t('components.card.sameApiTitle')}</SubLabel>
          <div className="grid gap-5 sm:grid-cols-2">
            <Card.Root>
              <Card.Header>
                <Card.Title>{t('components.card.projectCardTitle')}</Card.Title>
                <Card.Description>{t('components.card.projectCardDescription')}</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-fg-secondary">{t('components.card.projectCardBody')}</p>
              </Card.Content>
              <Card.Footer>
                <Button.Root size="sm" variant="outline">
                  {t('components.card.projectCardOpen')}
                </Button.Root>
              </Card.Footer>
            </Card.Root>

            <Card.Root>
              <Card.Header>
                <Card.Title>{t('components.card.profileCardTitle')}</Card.Title>
                <Card.Description>{t('components.card.profileCardDescription')}</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-fg-secondary">{t('components.card.profileCardBody')}</p>
              </Card.Content>
            </Card.Root>

            <Card.Root>
              <Card.Header>
                <Card.Title>{t('components.card.docsCardTitle')}</Card.Title>
                <Card.Description>{t('components.card.docsCardDescription')}</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-fg-secondary">{t('components.card.docsCardBody')}</p>
              </Card.Content>
            </Card.Root>

            <Card.Root>
              <Card.Header>
                <Card.Title>{t('components.card.metricCardTitle')}</Card.Title>
                <Card.Description>{t('components.card.metricCardDescription')}</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-fg-secondary">{t('components.card.metricCardBody')}</p>
              </Card.Content>
            </Card.Root>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.states')}</SubLabel>
            <div className="flex flex-wrap items-center gap-8">
              <Card.Root style={{ width: 260 }}>
                <Card.Header>
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="mt-2 h-4 w-40" />
                </Card.Header>
                <Card.Content>
                  <Skeleton className="h-4 w-full" />
                </Card.Content>
              </Card.Root>
            </div>
          </div>
        </ExamplesSurface>
      </Section>

      <Section title={t('sections.usage')}>
        <CodeBlock code={`import { Card } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title={t('sections.composition')}>
        <CompositionTree
          lines={[
            'Card.Root',
            ' ├ Card.Header',
            ' │  ├ Card.Title',
            ' │  └ Card.Description',
            ' ├ Card.Content',
            ' └ Card.Footer',
          ]}
        />
      </Section>

      <Section title={t('sections.accessibility')}>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><Trans i18nKey="components.card.a11y.heading" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.card.a11y.interactive" components={{ code: codeTag }} /></li>
        </ul>
      </Section>

      <Section title={t('sections.properties')}>
        <PropsTable
          rows={[
            { prop: 'className', type: 'string', description: t('components.card.api.className') },
          ]}
        />
      </Section>
    </div>
  );
}
