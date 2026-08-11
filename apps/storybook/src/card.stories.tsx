import type { Meta, StoryObj } from '@storybook/react';
import { Button, Card } from '@samuel-ui/react';

const meta: Meta<typeof Card.Root> = {
  title: 'Components/Card',
  component: Card.Root,
};

export default meta;
type Story = StoryObj<typeof Card.Root>;

export const Default: Story = {
  render: () => (
    <Card.Root style={{ width: 320 }}>
      <Card.Header>
        <Card.Title>Design System</Card.Title>
        <Card.Description>Components and foundations.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p style={{ fontSize: 14 }}>Card.Content has no default typography — style it per use case.</p>
      </Card.Content>
      <Card.Footer>
        <Button.Root size="sm">Open</Button.Root>
      </Card.Footer>
    </Card.Root>
  ),
};

export const ProjectCard: Story = {
  render: () => (
    <Card.Root style={{ width: 320 }}>
      <Card.Header>
        <Card.Title>Design Systems</Card.Title>
        <Card.Description>Tokens → React.</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button.Root variant="outline" size="sm">
          Open
        </Button.Root>
      </Card.Footer>
    </Card.Root>
  ),
};

export const MetricCard: Story = {
  render: () => (
    <Card.Root style={{ width: 260 }}>
      <Card.Header>
        <Card.Title>128ms</Card.Title>
        <Card.Description>Median interaction latency</Card.Description>
      </Card.Header>
    </Card.Root>
  ),
};
