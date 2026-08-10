import { Button, Card } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { figmaLinks } from '../../lib/figmaLinks';

const previewCode = `<Card.Root>
  <Card.Header>
    <Card.Title>Design System</Card.Title>
    <Card.Description>Components and foundations.</Card.Description>
  </Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Footer>...</Card.Footer>
</Card.Root>`;

export function CardPage() {
  return (
    <div>
      <Breadcrumb trail={['Components', 'Card']} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">Card</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">
        A flexible surface container recomposed for different situations — never a one-off "ProjectCard".
      </p>

      <div className="mb-14">
        <ComponentPageActions slug="card" figmaUrl={figmaLinks.card} />
      </div>

      <Section title="Code">
        <CodeBlock code={previewCode} />
      </Section>

      <Section title="Usage">
        <CodeBlock code={`import { Card } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title="Composition">
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

      <Section title="Same API, four use cases">
        <div className="grid gap-5 sm:grid-cols-2">
          <Card.Root>
            <Card.Header>
              <Card.Title>Design Systems</Card.Title>
              <Card.Description>Project card</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-fg-secondary">Figma → tokens → React, shipped to production.</p>
            </Card.Content>
            <Card.Footer>
              <Button.Root size="sm" variant="outline">
                Open
              </Button.Root>
            </Card.Footer>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Samuel Ramos</Card.Title>
              <Card.Description>Profile card</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-fg-secondary">Design Engineer — Design Systems & UI Engineering.</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>Getting Started</Card.Title>
              <Card.Description>Documentation card</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-fg-secondary">Install, import tokens, render your first component.</p>
            </Card.Content>
          </Card.Root>

          <Card.Root>
            <Card.Header>
              <Card.Title>128ms</Card.Title>
              <Card.Description>Metric card</Card.Description>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-fg-secondary">Median interaction latency, last 7 days.</p>
            </Card.Content>
          </Card.Root>
        </div>
      </Section>

      <Section title="Accessibility">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><code className="font-mono text-xs">Card.Title</code> renders an <code className="font-mono text-xs">&lt;h3&gt;</code> — keep heading order sane on the page around it.</li>
          <li>No implicit interactivity — wrap the whole card in a link/button yourself if the entire surface should be clickable.</li>
        </ul>
      </Section>

      <Section title="Design">
        <p className="text-sm text-fg-secondary">
          {figmaLinks.card
            ? 'Open the component in Figma using the action above.'
            : 'Not yet connected to Figma — the link will appear here once the component is published in the file.'}
        </p>
      </Section>
    </div>
  );
}
