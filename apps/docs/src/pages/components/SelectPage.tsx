import { Select } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';
import { figmaLinks } from '../../lib/figmaLinks';

const previewCode = `<Select.Root onValueChange={setRole}>
  <Select.Trigger>
    <Select.Value placeholder="Select a role" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="designer">Designer</Select.Item>
    <Select.Item value="developer">Developer</Select.Item>
  </Select.Content>
</Select.Root>`;

export function SelectPage() {
  return (
    <div>
      <Breadcrumb trail={['Components', 'Select']} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">Select</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">
        An accessible dropdown selection, wrapping Radix UI Select for keyboard navigation and focus management.
      </p>

      <div className="mb-14">
        <ComponentPageActions slug="select" figmaUrl={figmaLinks.select} />
      </div>

      <Section title="Preview">
        <div className="flex items-center justify-center rounded-md border border-border bg-surface-elevated p-10">
          <Select.Root defaultValue="designer">
            <Select.Trigger className="w-64">
              <Select.Value placeholder="Select a role" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="designer">Designer</Select.Item>
              <Select.Item value="developer">Developer</Select.Item>
              <Select.Item value="pm">Product Manager</Select.Item>
              <Select.Item value="researcher" disabled>
                Researcher (soon)
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </Section>

      <Section title="Code">
        <CodeBlock code={previewCode} />
      </Section>

      <Section title="Usage">
        <CodeBlock code={`import { Select } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title="Composition">
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

      <Section title="States">
        <div className="flex flex-wrap items-center gap-6 rounded-md border border-border bg-surface-elevated p-8">
          <Select.Root>
            <Select.Trigger className="w-56">
              <Select.Value placeholder="Default" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="a">Option A</Select.Item>
            </Select.Content>
          </Select.Root>
          <Select.Root disabled>
            <Select.Trigger className="w-56">
              <Select.Value placeholder="Disabled" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="a">Option A</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </Section>

      <Section title="Accessibility">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li>Keyboard navigation (arrow keys, typeahead, Home/End), focus management and ARIA roles come from Radix UI Select — not reimplemented here.</li>
          <li>The trigger exposes the current value to screen readers via <code className="font-mono text-xs">Select.Value</code>.</li>
          <li>Disabled items remain visible and announced, only unreachable via selection.</li>
        </ul>
      </Section>

      <Section title="API Reference">
        <PropsTable
          rows={[
            { prop: 'value / defaultValue', type: 'string', description: 'Controlled or uncontrolled selected value.' },
            { prop: 'onValueChange', type: '(value: string) => void', description: 'Called when the selection changes.' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the whole select.' },
          ]}
        />
      </Section>

      <Section title="Design">
        <p className="text-sm text-fg-secondary">
          {figmaLinks.select
            ? 'Open the component in Figma using the action above.'
            : 'Not yet connected to Figma — the link will appear here once the component is published in the file.'}
        </p>
      </Section>
    </div>
  );
}
