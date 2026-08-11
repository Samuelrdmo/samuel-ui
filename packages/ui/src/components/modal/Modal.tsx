import { forwardRef } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;

const Content = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    hideCloseButton?: boolean;
    /**
     * Accessible name for the close button. Defaults to English because the
     * library ships no translation layer; every consumer in another language
     * must pass this, so it is a documented prop rather than a buried literal.
     */
    closeLabel?: string;
  }
>(({ className, children, hideCloseButton = false, closeLabel = 'Close', ...props }, ref) => (
  /**
   * DS-GUARD: Portal and Overlay are deliberately not exported as parts. Folding
   * them into Content keeps the public surface to `Modal.Content` and makes it
   * impossible to render a dialog without its overlay. Promoting them to
   * `Modal.Portal` / `Modal.Overlay` would match Radix's own shape but breaks
   * every existing call site and lets callers ship an un-dimmed, un-trapped
   * dialog. The docs in packages/ai-context/modal.md describe this composition.
   */
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-overlay animate-su-overlay-in" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-none border border-border bg-surface-elevated p-6 shadow-lg animate-su-modal-in',
        'focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {children}
      {!hideCloseButton && (
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-none text-fg-caption transition-colors hover:text-fg-primary focus-visible:outline-none focus-visible:shadow-focus"
          aria-label={closeLabel}
        >
          <X className="size-4" aria-hidden />
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
Content.displayName = 'Modal.Content';

const Header = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 pr-6', className)} {...props} />
  )
);
Header.displayName = 'Modal.Header';

const Title = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('font-heading text-lg font-semibold tracking-[-0.01em] text-fg-primary', className)}
    {...props}
  />
));
Title.displayName = 'Modal.Title';

const Description = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-fg-secondary', className)}
    {...props}
  />
));
Description.displayName = 'Modal.Description';

const Footer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-6 flex justify-end gap-3', className)} {...props} />
  )
);
Footer.displayName = 'Modal.Footer';

const Close = DialogPrimitive.Close;

export { Root, Trigger, Content, Header, Title, Description, Footer, Close };
