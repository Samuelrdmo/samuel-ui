import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 focus-visible:outline-none focus-visible:shadow-focus disabled:pointer-events-none disabled:opacity-40',
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
        sm: 'h-9 px-4 rounded-sm text-xs',
        md: 'h-11 px-6 rounded-sm',
        lg: 'h-13 px-8 rounded-md text-sm',
      },
    },
    compoundVariants: [{ variant: 'ghost', size: ['sm', 'md', 'lg'], class: 'h-auto' }],
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
