import type { Meta, StoryObj } from '@storybook/react';
import { Button, Modal } from '@samuel-ui/react';

const meta: Meta<typeof Modal.Root> = {
  title: 'Components/Modal',
  component: Modal.Root,
};

export default meta;
type Story = StoryObj<typeof Modal.Root>;

export const Default: Story = {
  render: () => (
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
  ),
};

export const OpenByDefault: Story = {
  render: () => (
    <Modal.Root defaultOpen>
      <Modal.Trigger asChild>
        <Button.Root variant="secondary">Open</Button.Root>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Invite teammates</Modal.Title>
          <Modal.Description>Send an invite link to your team.</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root variant="primary">Done</Button.Root>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  ),
};
