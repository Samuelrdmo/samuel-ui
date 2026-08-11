import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/**
 * Loading placeholder. Square by default, like every other surface in this
 * system — pass className="rounded-full" for the rare circular case (an
 * avatar), it is never the default.
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
