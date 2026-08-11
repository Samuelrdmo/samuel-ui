import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Button from './index';

describe('Button', () => {
  it('renders its children as the accessible name', () => {
    render(<Button.Root>Save changes</Button.Root>);
    expect(screen.getByRole('button', { name: 'Save changes' })).toBeInTheDocument();
  });

  it('fires onClick', async () => {
    const onClick = vi.fn();
    render(<Button.Root onClick={onClick}>Save</Button.Root>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  describe('loading', () => {
    /**
     * Regression test for the DS-GUARD in Button.tsx: the spinner is added
     * alongside the label, never swapped for it. Swapping collapses the button
     * to the spinner's width mid-interaction and shifts the layout around it.
     */
    it('keeps the label mounted so the button cannot change width', () => {
      render(<Button.Root loading>Save changes</Button.Root>);
      expect(screen.getByRole('button')).toHaveTextContent('Save changes');
    });

    it('disables the button and marks it busy', () => {
      render(<Button.Root loading>Save</Button.Root>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('is not busy when idle', () => {
      render(<Button.Root>Save</Button.Root>);
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy');
    });
  });

  describe('focus ring', () => {
    /**
     * Regression test for the DS-GUARD in Button.tsx: `primary` is clipped with
     * clip-path, which cuts away anything painted outside the border box. An
     * outer ring (shadow-focus) would be invisible, so this variant alone uses
     * an inset one.
     */
    it('gives the clipped primary variant an inset ring instead of an outer one', () => {
      const classes = Button.buttonVariants({ variant: 'primary', size: 'md' });
      expect(classes).toContain('focus-visible:shadow-[inset_0_0_0_2px_var(--action-primary-foreground)]');
      expect(classes).not.toContain('focus-visible:shadow-focus');
    });

    /**
     * The base string carries no focus ring, so exactly one ever lands on the
     * element. tailwind-merge cannot dedupe `shadow-focus` against an arbitrary
     * shadow, so two competing classes would let stylesheet order decide.
     */
    it.each(['secondary', 'ghost', 'outline', 'destructive'] as const)(
      'gives the unclipped %s variant exactly one focus ring',
      (variant) => {
        const rings = Button.buttonVariants({ variant }).match(/focus-visible:shadow-\S+/g) ?? [];
        expect(rings).toEqual(['focus-visible:shadow-focus']);
      }
    );

    it('only clips the primary variant', () => {
      expect(Button.buttonVariants({ variant: 'primary' })).toContain('clip-path');
      expect(Button.buttonVariants({ variant: 'outline' })).not.toContain('clip-path');
    });
  });

  it('lets a consumer className win over the variant styles', () => {
    render(
      <Button.Root variant="primary" className="bg-danger">
        Delete
      </Button.Root>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-danger');
    expect(button).not.toHaveClass('bg-action-primary');
  });

  it('forwards its ref to the underlying button element', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button.Root ref={ref}>Save</Button.Root>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
