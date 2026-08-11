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
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none font-mono text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      /**
       * Each variant carries its own focus ring rather than inheriting one
       * from the base: primary needs a different technique, and tailwind-merge
       * cannot dedupe `shadow-focus` against an arbitrary shadow (it reads the
       * custom key as a shadow *color*), so a shared base ring would leave two
       * competing classes on the element and let stylesheet order decide.
       */
      variant: {
        /**
         * Inset, unlike every other variant. clip-path clips the element's
         * whole rendering, so the usual outer ring would be cut away and
         * keyboard focus would be invisible. An inset ring paints inside the
         * padding box and survives the cut.
         */
        primary:
          'bg-action-primary text-action-primary-foreground hover:bg-action-primary-hover active:bg-action-primary-active focus-visible:shadow-[inset_0_0_0_2px_var(--action-primary-foreground)]',
        secondary:
          'bg-surface-elevated text-fg-primary border border-border hover:border-border-brand hover:text-accent hover:bg-surface-hover focus-visible:shadow-focus',
        ghost:
          'bg-transparent text-accent px-0 py-2 border-b border-transparent hover:border-border-brand focus-visible:shadow-focus',
        outline:
          'bg-transparent text-fg-primary border border-border hover:border-border-brand hover:text-accent focus-visible:shadow-focus',
        destructive: 'bg-danger text-danger-foreground hover:opacity-90 focus-visible:shadow-focus',
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
        {/*
          DS-GUARD: children stay mounted while loading — the spinner is added
          alongside the label, never swapped for it. Replacing the content
          collapses the button to the spinner's width mid-interaction and shifts
          whatever sits next to it. `aria-busy` above is what communicates the
          state; the visible label is not the mechanism.
          Covered by Button.test.tsx > loading > "keeps the label mounted".
        */}
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
