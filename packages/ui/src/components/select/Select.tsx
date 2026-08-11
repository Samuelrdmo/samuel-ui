import { forwardRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

const Root = SelectPrimitive.Root;
const Value = SelectPrimitive.Value;
const Group = SelectPrimitive.Group;

const Trigger = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-11 w-full items-center justify-between gap-2 rounded-none border border-border bg-surface-elevated px-4 text-sm text-fg-primary transition-colors duration-150',
      'hover:border-border-strong',
      'focus-visible:outline-none focus-visible:border-border-brand focus-visible:shadow-focus',
      'data-[placeholder]:text-fg-muted',
      'disabled:cursor-not-allowed disabled:opacity-40',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="size-4 shrink-0 text-fg-caption" aria-hidden />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
Trigger.displayName = 'Select.Trigger';

const Content = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      sideOffset={6}
      className={cn(
        'z-50 overflow-hidden rounded-none border border-border bg-surface-elevated shadow-md animate-su-scale-in',
        position === 'popper' && 'w-[var(--radix-select-trigger-width)]',
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
Content.displayName = 'Select.Content';

const Item = forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex h-9 cursor-pointer select-none items-center rounded-none px-3 pr-8 text-sm text-fg-primary outline-none transition-colors',
      'data-[highlighted]:bg-surface-hover data-[highlighted]:text-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      className
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator className="absolute right-3 inline-flex items-center">
      <Check className="size-4 text-accent" aria-hidden />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
Item.displayName = 'Select.Item';

export { Root, Value, Group, Trigger, Content, Item };
