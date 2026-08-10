import { Button, Modal } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';
import { figmaLinks } from '../../lib/figmaLinks';

const previewCode = `<Modal.Root>
  <Modal.Trigger asChild>
    <Button.Root variant="secondary">Delete project</Button.Root>
  </Modal.Trigger>

  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Delete project</Modal.Title>
      <Modal.Description>This action cannot be undone.</Modal.Description>
    </Modal.Header>

    <Modal.Footer>
      <Modal.Close asChild>
        <Button.Root variant="outline">Cancel</Button.Root>
      </Modal.Close>
      <Button.Root variant="destructive">Delete</Button.Root>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>`;

export function ModalPage() {
  return (
    <div>
      <Breadcrumb trail={['Components', 'Modal']} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">Modal</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">
        An accessible dialog for blocking interactions that require user attention, built on Radix UI Dialog.
      </p>

      <div className="mb-14">
        <ComponentPageActions slug="modal" figmaUrl={figmaLinks.modal} />
      </div>

      <Section title="Preview">
        <div className="flex items-center justify-center rounded-md border border-border bg-surface-elevated p-10">
          <Modal.Root>
            <Modal.Trigger asChild>
              <Button.Root variant="secondary">Delete project</Button.Root>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Delete project</Modal.Title>
                <Modal.Description>This action cannot be undone.</Modal.Description>
              </Modal.Header>
              <Modal.Footer>
                <Modal.Close asChild>
                  <Button.Root variant="outline">Cancel</Button.Root>
                </Modal.Close>
                <Button.Root variant="destructive">Delete</Button.Root>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        </div>
      </Section>

      <Section title="Code">
        <CodeBlock code={previewCode} />
      </Section>

      <Section title="Usage">
        <CodeBlock code={`import { Button, Modal } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title="Composition">
        <CompositionTree
          lines={[
            'Modal.Root',
            ' ├ Modal.Trigger',
            ' └ Modal.Content',
            '    ├ Modal.Header',
            '    │  ├ Modal.Title',
            '    │  └ Modal.Description',
            '    └ Modal.Footer',
            '       └ Modal.Close',
          ]}
        />
      </Section>

      <Section title="Accessibility">
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li>Focus trap, Escape-to-close, scroll lock and overlay click-to-close all come from Radix UI Dialog.</li>
          <li><code className="font-mono text-xs">Modal.Title</code> is required — Radix wires it to the dialog's accessible name.</li>
          <li>Focus returns to the trigger element when the modal closes.</li>
        </ul>
      </Section>

      <Section title="API Reference">
        <PropsTable
          rows={[
            { prop: 'open / defaultOpen', type: 'boolean', description: 'Controlled or uncontrolled open state (on Modal.Root).' },
            { prop: 'onOpenChange', type: '(open: boolean) => void', description: 'Called when open state changes.' },
            { prop: 'hideCloseButton', type: 'boolean', default: 'false', description: 'Hides the top-right close icon on Modal.Content.' },
          ]}
        />
      </Section>

      <Section title="Design">
        <p className="text-sm text-fg-secondary">
          {figmaLinks.modal
            ? 'Open the component in Figma using the action above.'
            : 'Not yet connected to Figma — the link will appear here once the component is published in the file.'}
        </p>
      </Section>
    </div>
  );
}
