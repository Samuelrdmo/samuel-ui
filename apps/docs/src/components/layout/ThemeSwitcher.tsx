import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme, type ThemePreference } from '../../lib/theme';
import { cn } from '@samuel-ui/react';

const options: { value: ThemePreference; icon: typeof Sun; label: string }[] = [
  { value: 'light', icon: Sun, label: 'Light theme' },
  { value: 'dark', icon: Moon, label: 'Dark theme' },
  { value: 'system', icon: Monitor, label: 'System theme' },
];

export function ThemeSwitcher() {
  const { preference, setPreference } = useTheme();

  return (
    <div className="flex items-center gap-0.5 rounded-sm border border-border bg-surface-elevated p-0.5">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={preference === value}
          onClick={() => setPreference(value)}
          className={cn(
            'flex size-7 items-center justify-center rounded-xs transition-colors',
            preference === value ? 'bg-action-primary text-action-primary-foreground' : 'text-fg-caption hover:text-fg-primary'
          )}
        >
          <Icon className="size-3.5" aria-hidden />
        </button>
      ))}
    </div>
  );
}
