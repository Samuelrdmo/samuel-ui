import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './index';

describe('Skeleton', () => {
  it('announces itself as a loading status', () => {
    render(<Skeleton className="h-4 w-40" />);
    expect(screen.getByRole('status')).toHaveAccessibleName('Loading');
  });

  /**
   * Regression test for the DS-GUARD in Skeleton.tsx: `{...props}` is spread
   * after role/aria-label so a consumer can replace the English default with a
   * translated one. Hoisting the spread would lock every app into "Loading".
   */
  it('lets a consumer replace the English default label', () => {
    render(<Skeleton aria-label="Carregando" />);
    expect(screen.getByRole('status')).toHaveAccessibleName('Carregando');
  });
});
