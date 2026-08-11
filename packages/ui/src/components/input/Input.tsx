import {
  createContext,
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  useContext,
  useId,
  useMemo,
} from 'react';
import { cn } from '../../lib/cn';

interface InputContextValue {
  inputId: string;
  helperId: string;
  errorId: string;
  invalid: boolean;
  disabled: boolean;
}

const InputContext = createContext<InputContextValue | null>(null);

function useInputContext(component: string) {
  const ctx = useContext(InputContext);
  if (!ctx) {
    throw new Error(`Input.${component} must be used inside <Input.Root>.`);
  }
  return ctx;
}

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  disabled?: boolean;
}

const Root = forwardRef<HTMLDivElement, InputRootProps>(
  ({ className, invalid = false, disabled = false, ...props }, ref) => {
    const reactId = useId();
    const value = useMemo<InputContextValue>(
      () => ({
        inputId: `su-input-${reactId}`,
        helperId: `su-input-${reactId}-helper`,
        errorId: `su-input-${reactId}-error`,
        invalid,
        disabled,
      }),
      [reactId, invalid, disabled]
    );

    return (
      <InputContext.Provider value={value}>
        <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props} />
      </InputContext.Provider>
    );
  }
);
Root.displayName = 'Input.Root';

const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    const { inputId } = useInputContext('Label');
    return (
      <label
        ref={ref}
        htmlFor={inputId}
        className={cn('font-mono text-xs uppercase tracking-[0.08em] text-fg-caption', className)}
        {...props}
      />
    );
  }
);
Label.displayName = 'Input.Label';

const Control = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, disabled, ...props }, ref) => {
    const { inputId, helperId, errorId, invalid, disabled: contextDisabled } = useInputContext('Control');
    /**
     * DS-GUARD: `??`, not `||`. The nullish check is what lets a caller pass
     * `disabled={false}` on the Control to opt out of a Root that is disabled.
     * With `||`, an explicit `false` falls through to the context value and the
     * escape hatch disappears.
     */
    const isDisabled = disabled ?? contextDisabled;

    return (
      <input
        ref={ref}
        id={inputId}
        disabled={isDisabled}
        aria-invalid={invalid || undefined}
        /*
          DS-GUARD: `cn` is joining DOM ids here, not Tailwind classes. It only
          works because the generated ids (`su-input-:r0:-helper`) match no
          utility pattern tailwind-merge recognises. Change the id format and
          twMerge could classify two ids into one group and drop one, quietly
          breaking the screen-reader association. A plain filter + join is the
          safer shape if this line is ever touched.

          Known gap: helperId is referenced unconditionally, so a Root rendered
          without an Input.HelperText points aria-describedby at a missing node.
        */
        aria-describedby={cn(helperId, invalid && errorId) || undefined}
        className={cn(
          'h-11 rounded-none border bg-surface-elevated px-4 text-sm text-fg-primary placeholder:text-fg-muted transition-colors duration-150',
          'border-border hover:border-border-strong',
          'focus-visible:outline-none focus-visible:border-border-brand focus-visible:shadow-focus',
          invalid && 'border-danger focus-visible:shadow-none focus-visible:border-danger',
          isDisabled && 'cursor-not-allowed opacity-40',
          className
        )}
        {...props}
      />
    );
  }
);
Control.displayName = 'Input.Control';

const HelperText = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { helperId } = useInputContext('HelperText');
    return (
      <p
        ref={ref}
        id={helperId}
        className={cn('font-body text-xs text-fg-muted', className)}
        {...props}
      />
    );
  }
);
HelperText.displayName = 'Input.HelperText';

const ErrorMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, role = 'alert', ...props }, ref) => {
    const { errorId } = useInputContext('ErrorMessage');
    return (
      <p
        ref={ref}
        id={errorId}
        role={role}
        className={cn('font-body text-xs text-danger', className)}
        {...props}
      />
    );
  }
);
ErrorMessage.displayName = 'Input.ErrorMessage';

export { Root, Label, Control, HelperText, ErrorMessage };
