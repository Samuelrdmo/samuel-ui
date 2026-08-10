import { Plus } from 'lucide-react';
import { Button } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';
import { figmaLinks } from '../../lib/figmaLinks';

const previewCode = `<Button.Root variant="primary">
  Save changes
</Button.Root>

<Button.Root variant="secondary">
  <Button.Icon>
    <Plus />
  </Button.Icon>
  Create project
</Button.Root>`;

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

export function ButtonPage() {
  return (
    <div>
      <Breadcrumb trail={['Components', 'Button']} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">Button</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">
        Triggers an action or event, such as submitting a form or opening a dialog.
      </p>

      <div className="mb-14">
        <ComponentPageActions slug="button" figmaUrl={figmaLinks.button} />
      </div>

      <Section title="Preview">
        <div className="flex flex-wrap items-center gap-4 rounded-md border border-border bg-surface-elevated p-10">
          <Button.Root variant="primary">Save changes</Button.Root>
          <Button.Root variant="secondary">
            <Button.Icon>
              <Plus />
            </Button.Icon>
            Create project
          </Button.Root>
        </div>
      </Section>

      <Section title="Code">
        <CodeBlock code={previewCode} />
      </Section>

      <Section title="Usage">
        <CodeBlock code={usageCode} />
      </Section>

      <Section title="Composition">
        <CompositionTree lines={['Button.Root', ' └ Button.Icon (optional)']} />
      </Section>

      <Section title="Variants">
        <div className="flex flex-wrap gap-4 rounded-md border border-border bg-surface-elevated p-8">
          {variants.map((v) => (
            <div key={v.name} className="flex flex-col items-center gap-2">
              <Button.Root variant={v.variant}>Button</Button.Root>
              <span className="font-mono text-[11px] text-fg-caption">{v.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sizes">
        <div className="flex flex-wrap items-center gap-4 rounded-md border border-border bg-surface-elevated p-8">
          <Button.Root size="sm">Small</Button.Root>
          <Button.Root size="md">Medium</Button.Root>
          <Button.Root size="lg">Large</Button.Root>
        </div>
      </Section>

      <Section title="States">
        <div className="flex flex-wrap items-center gap-4 rounded-md border border-border bg-surface-elevated p-8">
          <Button.Root>Default</Button.Root>
          <Button.Root disabled>Disabled</Button.Root>
          <Button.Root loading>Loading</Button.Root>
        </div>
      </Section>

      <Section title="Accessibility">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li>Renders a native <code className="font-mono text-xs">&lt;button&gt;</code> — full keyboard and screen reader support out of the box.</li>
          <li><code className="font-mono text-xs">loading</code> sets <code className="font-mono text-xs">aria-busy</code> and disables the button; it never hides the accessible name.</li>
          <li>Focus is always visible via <code className="font-mono text-xs">--shadow-focus</code>, never removed without replacement.</li>
        </ul>
      </Section>

      <Section title="API Reference">
        <PropsTable
          rows={[
            { prop: 'variant', type: 'primary | secondary | ghost | outline | destructive', default: 'primary', description: 'Visual style of the button.' },
            { prop: 'size', type: 'sm | md | lg', default: 'md', description: 'Controls height, padding and font size.' },
            { prop: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables the button.' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Native disabled state.' },
          ]}
        />
      </Section>

      <Section title="Design">
        <p className="text-sm text-fg-secondary">
          {figmaLinks.button
            ? 'Open the component in Figma using the action above.'
            : 'Not yet connected to Figma — the link will appear here once the component is published in the file.'}
        </p>
      </Section>
    </div>
  );
}
