import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col rounded-md border border-border bg-surface-elevated transition-colors duration-150',
        className
      )}
      {...props}
    />
  )
);
Root.displayName = 'Card.Root';

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5 p-6 pb-0', className)} {...props} />
  )
);
Header.displayName = 'Card.Header';

const Title = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-heading text-base font-semibold tracking-[-0.01em] text-fg-primary', className)}
      {...props}
    />
  )
);
Title.displayName = 'Card.Title';

const Description = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-fg-secondary', className)} {...props} />
  )
);
Description.displayName = 'Card.Description';

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-6', className)} {...props} />
);
Content.displayName = 'Card.Content';

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-3 p-6 pt-0', className)} {...props} />
  )
);
Footer.displayName = 'Card.Footer';

export { Root, Header, Title, Description, Content, Footer };
