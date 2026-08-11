import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@samuel-ui/react';

const meta: Meta<typeof Select.Root> = {
  title: 'Components/Select',
  component: Select.Root,
};

export default meta;
type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {
  render: () => (
    <Select.Root defaultValue="designer">
      <Select.Trigger style={{ width: 240 }}>
        <Select.Value placeholder="Select a role" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="designer">Designer</Select.Item>
        <Select.Item value="developer">Developer</Select.Item>
        <Select.Item value="pm">Product Manager</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger style={{ width: 240 }}>
        <Select.Value placeholder="Select a role" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="designer">Designer</Select.Item>
        <Select.Item value="researcher" disabled>
          Researcher (soon)
        </Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select.Root disabled>
      <Select.Trigger style={{ width: 240 }}>
        <Select.Value placeholder="Disabled" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a">Option A</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};
