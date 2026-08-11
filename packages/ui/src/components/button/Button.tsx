import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * No border-radius anywhere in this system's controls — the source site
 * (samuelrdmo.com) is square everywhere except one signature detail: the
 * primary button has its top-right/bottom-left corners cut via clip-path.
 * Reproduced here per size so the cut scales with the button.
 */
const primaryClipSm =
  '[clip-path:polygon(0_0,calc(100%_-_8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%_-_8px))]';
const primaryClipMd =
  '[clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%_-_10px))]';
const primaryClipLg =
  '[clip-path:polygon(0_0,calc(100%_-_12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%_-_12px))]';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-mono text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        primary:
          'bg-action-primary text-action-primary-foreground hover:bg-action-primary-hover active:bg-action-primary-active',
        secondary:
          'bg-surface-elevated text-fg-primary border border-border hover:border-border-brand hover:text-accent hover:bg-surface-hover',
        ghost: 'bg-transparent text-accent px-0 py-2 border-b border-transparent hover:border-border-brand',
        outline: 'bg-transparent text-fg-primary border border-border hover:border-border-brand hover:text-accent',
        destructive: 'bg-danger text-danger-foreground hover:opacity-90',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-xs',
        md: 'h-11 px-6 py-2.5',
        lg: 'h-14 px-8 py-3.5 text-sm',
      },
    },
    compoundVariants: [
      { variant: 'ghost', size: ['sm', 'md', 'lg'], class: 'h-auto' },
      { variant: 'primary', size: 'sm', class: primaryClipSm },
      { variant: 'primary', size: 'md', class: primaryClipMd },
      { variant: 'primary', size: 'lg', class: primaryClipLg },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Root = forwardRef<HTMLButtonElement, ButtonRootProps>(
  ({ className, variant, size, loading = false, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {children}
      </button>
    );
  }
);
Root.displayName = 'Button.Root';

const Icon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('flex shrink-0 [&>svg]:size-4', className)} {...props} />
  )
);
Icon.displayName = 'Button.Icon';

export { Root, Icon, buttonVariants };
