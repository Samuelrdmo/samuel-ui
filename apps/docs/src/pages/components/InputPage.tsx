import { Input } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
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

export function InputPage() {
  return (
    <div>
      <Breadcrumb trail={['Components', 'Input']} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">Input</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">
        A labeled text field with helper and error messaging, built as a compound component sharing state via context.
      </p>

      <div className="mb-14">
        <ComponentPageActions slug="input" figmaUrl={figmaLinks.input} />
      </div>

      <Section title="Preview">
        <div className="flex flex-col gap-6 rounded-md border border-border bg-surface-elevated p-10 sm:flex-row">
          <Input.Root className="w-full max-w-xs">
            <Input.Label>Email</Input.Label>
            <Input.Control placeholder="name@example.com" />
            <Input.HelperText>We'll never share your email.</Input.HelperText>
          </Input.Root>
          <Input.Root className="w-full max-w-xs" invalid>
            <Input.Label>Email</Input.Label>
            <Input.Control placeholder="name@example.com" defaultValue="not-an-email" />
            <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
          </Input.Root>
        </div>
      </Section>

      <Section title="Code">
        <CodeBlock code={previewCode} />
      </Section>

      <Section title="Usage">
        <CodeBlock code={`import { Input } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title="Composition">
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

      <Section title="States">
        <div className="grid gap-6 rounded-md border border-border bg-surface-elevated p-8 sm:grid-cols-2">
          <Input.Root>
            <Input.Label>Default</Input.Label>
            <Input.Control placeholder="Type something" />
          </Input.Root>
          <Input.Root disabled>
            <Input.Label>Disabled</Input.Label>
            <Input.Control placeholder="Can't type here" />
          </Input.Root>
          <Input.Root>
            <Input.Label>Filled</Input.Label>
            <Input.Control defaultValue="samuel@example.com" />
          </Input.Root>
          <Input.Root invalid>
            <Input.Label>Error</Input.Label>
            <Input.Control defaultValue="not-an-email" />
            <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
          </Input.Root>
        </div>
      </Section>

      <Section title="Error example">
        <CodeBlock code={errorCode} />
      </Section>

      <Section title="Accessibility">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li>Label and control are linked automatically via a generated <code className="font-mono text-xs">id</code>/<code className="font-mono text-xs">htmlFor</code> pair.</li>
          <li><code className="font-mono text-xs">aria-describedby</code> points at helper and/or error text; <code className="font-mono text-xs">aria-invalid</code> is set from <code className="font-mono text-xs">invalid</code>.</li>
          <li>Error text has <code className="font-mono text-xs">role="alert"</code> so assistive tech announces it when it appears.</li>
        </ul>
      </Section>

      <Section title="API Reference">
        <PropsTable
          rows={[
            { prop: 'invalid', type: 'boolean', default: 'false', description: 'Marks every child as invalid (border, aria-invalid, error styling).' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables Input.Control unless overridden directly on it.' },
          ]}
        />
      </Section>

      <Section title="Design">
        <p className="text-sm text-fg-secondary">
          {figmaLinks.input
            ? 'Open the component in Figma using the action above.'
            : 'Not yet connected to Figma — the link will appear here once the component is published in the file.'}
        </p>
      </Section>
    </div>
  );
}
