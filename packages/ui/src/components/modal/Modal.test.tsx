import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Modal from './index';
import * as Button from '../button';

function DeleteDialog(props: { closeLabel?: string; hideCloseButton?: boolean }) {
  return (
    <Modal.Root defaultOpen>
      <Modal.Content {...props}>
        <Modal.Header>
          <Modal.Title>Delete project</Modal.Title>
          <Modal.Description>This action cannot be undone.</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root variant="outline">Cancel</Button.Root>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}

describe('Modal', () => {
  it('exposes title and description as the dialog accessible name', () => {
    render(<DeleteDialog />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Delete project');
    expect(dialog).toHaveAccessibleDescription('This action cannot be undone.');
  });

  /**
   * Regression test for the DS-GUARD in Modal.tsx: Portal and Overlay are folded
   * into Content so a dialog can never be rendered without them.
   */
  it('always renders the overlay with the content', () => {
    const { baseElement } = render(<DeleteDialog />);
    expect(baseElement.querySelector('.bg-overlay')).toBeInTheDocument();
  });

  describe('close button', () => {
    it('defaults to an English accessible name', () => {
      render(<DeleteDialog />);
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });

    it('accepts a translated label so non-English apps are not stuck', () => {
      render(<DeleteDialog closeLabel="Fechar" />);
      expect(screen.getByRole('button', { name: 'Fechar' })).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });

    it('can be removed entirely', () => {
      render(<DeleteDialog hideCloseButton />);
      expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument();
    });
  });

  it('closes on Escape, which comes from the Radix primitive', async () => {
    render(<DeleteDialog />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
