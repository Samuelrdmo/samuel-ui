import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Select from './index';

function RoleSelect(props: { position?: 'popper' | 'item-aligned' }) {
  return (
    <Select.Root defaultOpen>
      <Select.Trigger aria-label="Role">
        <Select.Value placeholder="Select a role" />
      </Select.Trigger>
      <Select.Content {...props}>
        <Select.Item value="designer">Designer</Select.Item>
        <Select.Item value="developer">Developer</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}

describe('Select', () => {
  it('renders its options when open', () => {
    render(<RoleSelect />);
    expect(screen.getByRole('option', { name: 'Designer' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Developer' })).toBeInTheDocument();
  });

  describe('content width', () => {
    /**
     * Regression test for the DS-GUARD in Select.tsx: Radix only publishes
     * --radix-select-trigger-width when positioning is `popper`. Applying the
     * width class unconditionally leaves the var undefined under `item-aligned`
     * and the panel collapses to zero width.
     */
    it('matches the trigger width in the default popper position', () => {
      const { baseElement } = render(<RoleSelect />);
      expect(
        baseElement.querySelector('[class*="--radix-select-trigger-width"]')
      ).toBeInTheDocument();
    });

    it('does not apply the trigger-width class when item-aligned', () => {
      const { baseElement } = render(<RoleSelect position="item-aligned" />);
      expect(
        baseElement.querySelector('[class*="--radix-select-trigger-width"]')
      ).not.toBeInTheDocument();
    });
  });
});
