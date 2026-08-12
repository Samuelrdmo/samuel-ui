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

  describe('ghost alignment', () => {
    /**
     * Regression test for the DS-GUARD in Button.tsx: ghost used to override
     * its height to `h-auto`, so a row of buttons top-aligned by their column
     * (the common layout for a variant showcase, or two buttons side by side)
     * left ghost visibly shorter and its label reading higher than its
     * siblings, even though nothing about the row's alignment was wrong.
     */
    it.each(['sm', 'md', 'lg'] as const)('gives ghost the same height as %s outline', (size) => {
      render(
        <>
          <Button.Root variant="ghost" size={size}>
            Ghost
          </Button.Root>
          <Button.Root variant="outline" size={size}>
            Outline
          </Button.Root>
        </>
      );
      const [ghost, outline] = screen.getAllByRole('button');
      /**
       * cva concatenates every matching variant/size/compoundVariant class as
       * plain text — it never removes a conflicting one, so a stray override
       * (e.g. `h-auto`) can sit right next to `h-11` in the class list and still
       * win in the browser via Tailwind's stylesheet order. Asserting the size
       * class is present is not enough to catch that; only checking for the
       * override's absence does.
       */
      const sizeClass = outline.className.match(/h-\S+/)![0];
      expect(ghost.className).toContain(sizeClass);
      expect(ghost.className).not.toContain('h-auto');
    });

    /**
     * Regression test: the mark used to be a manual `border-b` on an inner
     * span that only Button.Root's JSX rendered. `buttonVariants()` is a
     * documented public export applied directly to non-button elements (e.g.
     * a router Link, see the home page's ghost CTA) — a mark that only exists
     * in Root's JSX is invisible on every one of those call sites. Using
     * `text-decoration` instead keeps the mark in the class string itself, so
     * it works wherever the classes are applied, not only inside Root.
     */
    it('marks itself with text-decoration in the class string, not JSX-only markup', () => {
      const tokens = Button.buttonVariants({ variant: 'ghost' }).split(/\s+/);
      expect(tokens).toContain('underline');
      // token, not substring: `decoration-border-brand` legitimately contains
      // "border-b" as text, so a substring check would false-positive on it.
      expect(tokens).not.toContain('border-b');
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
