import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Input from './index';

describe('Input', () => {
  it('wires the label to the control without a manual id', () => {
    render(
      <Input.Root>
        <Input.Label>Email</Input.Label>
        <Input.Control />
      </Input.Root>
    );
    expect(screen.getByLabelText('Email')).toBe(screen.getByRole('textbox'));
  });

  describe('disabled precedence', () => {
    it('propagates a disabled Root to the control', () => {
      render(
        <Input.Root disabled>
          <Input.Control />
        </Input.Root>
      );
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    /**
     * Regression test for the DS-GUARD in Input.tsx: the merge uses `??`, not
     * `||`. With `||` an explicit `disabled={false}` would fall through to the
     * context value and this escape hatch would silently disappear.
     */
    it('lets an explicit disabled={false} on the control opt out of a disabled Root', () => {
      render(
        <Input.Root disabled>
          <Input.Control disabled={false} />
        </Input.Root>
      );
      expect(screen.getByRole('textbox')).toBeEnabled();
    });
  });

  describe('invalid', () => {
    it('marks the control invalid and points it at the error message', () => {
      render(
        <Input.Root invalid>
          <Input.Control />
          <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
        </Input.Root>
      );
      const control = screen.getByRole('textbox');
      const errorId = screen.getByRole('alert').id;

      expect(control).toHaveAttribute('aria-invalid', 'true');
      expect(control.getAttribute('aria-describedby')).toContain(errorId);
    });

    it('does not reference the error message when valid', () => {
      render(
        <Input.Root>
          <Input.Control />
          <Input.HelperText>We never share your email.</Input.HelperText>
        </Input.Root>
      );
      const control = screen.getByRole('textbox');
      expect(control).not.toHaveAttribute('aria-invalid');
      expect(control.getAttribute('aria-describedby')).toContain(
        screen.getByText('We never share your email.').id
      );
    });
  });

  it.each(['Label', 'Control', 'HelperText', 'ErrorMessage'] as const)(
    'throws a named error when %s is used outside Root',
    (part) => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      const Part = Input[part];
      expect(() => render(<Part />)).toThrow(`Input.${part} must be used inside <Input.Root>.`);
      consoleError.mockRestore();
    }
  );

  it('generates unique ids per Root so two fields never collide', () => {
    render(
      <>
        <Input.Root>
          <Input.Label>First</Input.Label>
          <Input.Control />
        </Input.Root>
        <Input.Root>
          <Input.Label>Second</Input.Label>
          <Input.Control />
        </Input.Root>
      </>
    );
    expect(screen.getByLabelText('First').id).not.toBe(screen.getByLabelText('Second').id);
  });
});
