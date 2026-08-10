import { Link } from 'react-router-dom';
import { ArrowRight, Figma as FigmaIcon, Github, Plus } from 'lucide-react';
import { Button, Card, Input, Select } from '@samuel-ui/react';
import { EXTERNAL_LINKS } from '../lib/links';

const flowSteps = [
  { label: 'Figma', detail: 'Component design & variants' },
  { label: 'Design Tokens', detail: 'Primitive → semantic CSS variables' },
  { label: 'React Components', detail: 'Compound APIs, Radix behavior' },
  { label: 'Storybook', detail: 'Isolated states & interactions' },
  { label: 'Products', detail: 'Docs site, apps, portfolio' },
];

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border-subtle px-5 py-24 text-center lg:px-10 lg:py-32">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">Samuel UI</p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-fg-primary lg:text-6xl">
          Design and code,
          <br />
          speaking the same language.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-fg-secondary lg:text-lg">
          Samuel UI is a React design system built to explore the relationship between design,
          componentization, documentation and implementation.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/components/button">
            <Button.Root variant="primary" size="lg">
              Explore components
              <Button.Icon>
                <ArrowRight />
              </Button.Icon>
            </Button.Root>
          </Link>
          <a href={EXTERNAL_LINKS.storybook} target="_blank" rel="noreferrer">
            <Button.Root variant="secondary" size="lg">
              Open Storybook
            </Button.Root>
          </a>
          <a href={EXTERNAL_LINKS.github} target="_blank" rel="noreferrer">
            <Button.Root variant="outline" size="lg">
              <Button.Icon>
                <Github />
              </Button.Icon>
              View GitHub
            </Button.Root>
          </a>
        </div>
      </section>

      {/* Live showcase */}
      <section className="border-b border-border-subtle px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.14em] text-fg-caption">
            Real components, not screenshots
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card.Root className="p-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-caption">Button</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button.Root variant="primary">Save changes</Button.Root>
                <Button.Root variant="secondary">
                  <Button.Icon>
                    <Plus />
                  </Button.Icon>
                  Create project
                </Button.Root>
                <Button.Root variant="ghost">Learn more</Button.Root>
              </div>
            </Card.Root>

            <Card.Root className="p-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fg-caption">Input & Select</p>
              <div className="flex flex-col gap-4">
                <Input.Root>
                  <Input.Label>Email</Input.Label>
                  <Input.Control placeholder="name@example.com" />
                </Input.Root>
                <Select.Root defaultValue="designer">
                  <Select.Trigger>
                    <Select.Value placeholder="Select a role" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="designer">Designer</Select.Item>
                    <Select.Item value="developer">Developer</Select.Item>
                    <Select.Item value="pm">Product Manager</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
            </Card.Root>

            <Card.Root className="lg:col-span-2">
              <Card.Header>
                <Card.Title>Design System</Card.Title>
                <Card.Description>Components and foundations, built as one composable system.</Card.Description>
              </Card.Header>
              <Card.Content className="pt-4">
                <p className="text-sm text-fg-secondary">
                  Card.Root, Card.Header, Card.Content and Card.Footer recompose into project cards, profile
                  cards, documentation cards and metric cards — no one-off components.
                </p>
              </Card.Content>
              <Card.Footer>
                <Link to="/components/card">
                  <Button.Root variant="outline" size="sm">
                    View Card docs
                  </Button.Root>
                </Link>
              </Card.Footer>
            </Card.Root>
          </div>
        </div>
      </section>

      {/* From design to code */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-center font-mono text-xs uppercase tracking-[0.14em] text-accent">
            From design to code
          </p>
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-[-0.01em] text-fg-primary lg:text-3xl">
            One system, from Figma to production
          </h2>

          <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-1 items-center">
                <div className="flex w-full flex-col gap-2 rounded-md border border-border bg-surface-elevated p-5">
                  <span className="font-mono text-[11px] text-fg-caption">0{i + 1}</span>
                  <span className="font-heading text-sm font-semibold text-fg-primary">{step.label}</span>
                  <span className="text-xs text-fg-secondary">{step.detail}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="mx-2 hidden size-4 shrink-0 text-fg-disabled lg:block" aria-hidden />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-fg-muted">
            <FigmaIcon className="size-3.5" aria-hidden />
            Figma links are wired per-component and populated as the library grows.
          </div>
        </div>
      </section>
    </div>
  );
}
