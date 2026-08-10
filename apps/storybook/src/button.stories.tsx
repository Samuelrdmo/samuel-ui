import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import { Button } from '@samuel-ui/react';

const meta: Meta<typeof Button.Root> = {
  title: 'Components/Button',
  component: Button.Root,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'outline', 'destructive'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    children: 'Save changes',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button.Root>;

export const Default: Story = {};

export const WithIcon: Story = {
  render: (args) => (
    <Button.Root {...args}>
      <Button.Icon>
        <Plus />
      </Button.Icon>
      Create project
    </Button.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button.Root variant="primary">Primary</Button.Root>
      <Button.Root variant="secondary">Secondary</Button.Root>
      <Button.Root variant="ghost">Ghost</Button.Root>
      <Button.Root variant="outline">Outline</Button.Root>
      <Button.Root variant="destructive">Destructive</Button.Root>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button.Root size="sm">Small</Button.Root>
      <Button.Root size="md">Medium</Button.Root>
      <Button.Root size="lg">Large</Button.Root>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button.Root>Default</Button.Root>
      <Button.Root disabled>Disabled</Button.Root>
      <Button.Root loading>Loading</Button.Root>
    </div>
  ),
};
