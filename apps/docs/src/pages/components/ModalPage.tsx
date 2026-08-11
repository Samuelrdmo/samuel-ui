import { useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Button, Input, Modal, Skeleton } from '@samuel-ui/react';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { ComponentPageActions } from '../../components/docs/ComponentPageActions';
import { Section } from '../../components/docs/Section';
import { SubLabel } from '../../components/docs/SubLabel';
import { ExamplesSurface } from '../../components/docs/ExamplesSurface';
import { CodeBlock } from '../../components/CodeBlock';
import { CompositionTree } from '../../components/docs/CompositionTree';
import { PropsTable } from '../../components/docs/PropsTable';

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

const formCode = `const titleRef = useRef<HTMLHeadingElement>(null);

<Modal.Root>
  <Modal.Trigger asChild>
    <Button.Root variant="secondary">Rename project</Button.Root>
  </Modal.Trigger>

  <Modal.Content
    onOpenAutoFocus={(event) => {
      // The dialog would otherwise auto-focus Input.Control, landing
      // right inside a prefilled field. Focus the title instead.
      event.preventDefault();
      titleRef.current?.focus();
    }}
  >
    <Modal.Header>
      <Modal.Title ref={titleRef} tabIndex={-1}>Rename project</Modal.Title>
    </Modal.Header>

    <Input.Root className="mt-4">
      <Input.Label>Name</Input.Label>
      <Input.Control defaultValue="Design System" />
    </Input.Root>

    <Modal.Footer>
      <Modal.Close asChild>
        <Button.Root variant="outline">Cancel</Button.Root>
      </Modal.Close>
      <Button.Root variant="primary">Save</Button.Root>
    </Modal.Footer>
  </Modal.Content>
</Modal.Root>`;

const codeTag = <code className="font-mono text-xs" />;

export function ModalPage() {
  const { t } = useTranslation();
  const renameTitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <div>
      <Breadcrumb trail={[t('breadcrumb.components'), t('components.modal.title')]} />
      <h1 className="mb-2 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{t('components.modal.title')}</h1>
      <p className="mb-6 max-w-xl text-base text-fg-secondary">{t('components.modal.description')}</p>

      <div className="mb-14">
        <ComponentPageActions slug="modal" />
      </div>

      <Section title={t('sections.examples')}>
        <ExamplesSurface>
          <div className="flex flex-wrap items-center gap-4">
            <Modal.Root>
              <Modal.Trigger asChild>
                <Button.Root variant="secondary">{t('components.modal.deleteProject')}</Button.Root>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>{t('components.modal.deleteProject')}</Modal.Title>
                  <Modal.Description>{t('components.modal.deleteProjectWarning')}</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                  <Modal.Close asChild>
                    <Button.Root variant="outline">{t('components.modal.cancel')}</Button.Root>
                  </Modal.Close>
                  <Button.Root variant="destructive">{t('components.modal.delete')}</Button.Root>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>

            <Modal.Root>
              <Modal.Trigger asChild>
                <Button.Root variant="primary">{t('components.modal.examples.confirmTrigger')}</Button.Root>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>{t('components.modal.examples.confirmTitle')}</Modal.Title>
                  <Modal.Description>{t('components.modal.examples.confirmDescription')}</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                  <Modal.Close asChild>
                    <Button.Root variant="outline">{t('components.modal.cancel')}</Button.Root>
                  </Modal.Close>
                  <Button.Root variant="primary">{t('components.modal.examples.confirmAction')}</Button.Root>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>

            <Modal.Root>
              <Modal.Trigger asChild>
                <Button.Root variant="secondary">{t('components.modal.examples.formTrigger')}</Button.Root>
              </Modal.Trigger>
              <Modal.Content
                onOpenAutoFocus={(event) => {
                  event.preventDefault();
                  renameTitleRef.current?.focus();
                }}
              >
                <Modal.Header>
                  <Modal.Title ref={renameTitleRef} tabIndex={-1}>
                    {t('components.modal.examples.formTitle')}
                  </Modal.Title>
                </Modal.Header>
                <Input.Root className="mt-4">
                  <Input.Label>{t('components.modal.examples.formLabel')}</Input.Label>
                  <Input.Control defaultValue="Design System" />
                </Input.Root>
                <Modal.Footer>
                  <Modal.Close asChild>
                    <Button.Root variant="outline">{t('components.modal.cancel')}</Button.Root>
                  </Modal.Close>
                  <Button.Root variant="primary">{t('components.modal.examples.formSave')}</Button.Root>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>
          </div>

          <div className="mt-10">
            <SubLabel>{t('sections.states')}</SubLabel>
            <div className="flex justify-center">
              <div className="w-full max-w-sm border border-border bg-canvas p-6">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="mt-2 h-4 w-56" />
                <div className="mt-6 flex justify-end gap-3">
                  <Skeleton className="h-9 w-20" />
                  <Skeleton className="h-9 w-20" />
                </div>
              </div>
            </div>
          </div>
        </ExamplesSurface>

        <div className="mt-6">
          <SubLabel>{t('components.modal.examples.formTrigger')}</SubLabel>
          <CodeBlock code={formCode} />
        </div>
      </Section>

      <Section title={t('sections.usage')}>
        <CodeBlock code={`import { Button, Modal } from '@samuel-ui/react';\n\n${previewCode}`} />
      </Section>

      <Section title={t('sections.composition')}>
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

      <Section title={t('sections.accessibility')}>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-fg-secondary">
          <li><Trans i18nKey="components.modal.a11y.radix" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.modal.a11y.title" components={{ code: codeTag }} /></li>
          <li><Trans i18nKey="components.modal.a11y.focusReturn" components={{ code: codeTag }} /></li>
        </ul>
      </Section>

      <Section title={t('sections.properties')}>
        <PropsTable
          rows={[
            { prop: 'open / defaultOpen', type: 'boolean', description: t('components.modal.api.open') },
            { prop: 'onOpenChange', type: '(open: boolean) => void', description: t('components.modal.api.onOpenChange') },
            { prop: 'hideCloseButton', type: 'boolean', default: 'false', description: t('components.modal.api.hideCloseButton') },
          ]}
        />
      </Section>
    </div>
  );
}
