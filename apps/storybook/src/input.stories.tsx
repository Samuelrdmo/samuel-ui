import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@samuel-ui/react';

const meta: Meta<typeof Input.Root> = {
  title: 'Components/Input',
  component: Input.Root,
};

export default meta;
type Story = StoryObj<typeof Input.Root>;

export const Default: Story = {
  render: () => (
    <Input.Root style={{ width: 280 }}>
      <Input.Label>Email</Input.Label>
      <Input.Control placeholder="name@example.com" />
      <Input.HelperText>We'll never share your email.</Input.HelperText>
    </Input.Root>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Input.Root style={{ width: 280 }} invalid>
      <Input.Label>Email</Input.Label>
      <Input.Control defaultValue="not-an-email" />
      <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
    </Input.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Input.Root style={{ width: 280 }} disabled>
      <Input.Label>Email</Input.Label>
      <Input.Control placeholder="name@example.com" />
    </Input.Root>
  ),
};

export const Composition: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 280 }}>
      <Input.Root>
        <Input.Label>Default</Input.Label>
        <Input.Control placeholder="Type something" />
      </Input.Root>
      <Input.Root invalid>
        <Input.Label>Error</Input.Label>
        <Input.Control defaultValue="bad-value" />
        <Input.ErrorMessage>Invalid value.</Input.ErrorMessage>
      </Input.Root>
    </div>
  ),
};
