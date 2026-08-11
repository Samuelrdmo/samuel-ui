import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/**
 * Loading placeholder. Square by default, like every other surface in this
 * system — pass className="rounded-full" for the rare circular case (an
 * avatar), it is never the default.
 *
 * DS-GUARD: `{...props}` must stay after `role`/`aria-label`. That ordering is
 * what lets a consumer override the English default with their own translated
 * label. Hoisting the spread above them silently locks every app into "Loading".
 */
const Skeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn('relative overflow-hidden rounded-none bg-surface-hover', className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fg-primary/10 to-transparent animate-su-shimmer" />
    </div>
  )
);
Skeleton.displayName = 'Skeleton';

export { Skeleton };
