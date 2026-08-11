import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../lib/theme';
import { cn } from '@samuel-ui/react';

export function ThemeSwitcher() {
  const { resolved, setPreference } = useTheme();
  const { t } = useTranslation();
  const isDark = resolved === 'dark';

  return (
    <div className="relative grid grid-cols-2 border border-border bg-surface-elevated p-0.5">
      <div
        className="absolute inset-y-0.5 left-0.5 h-7 w-7 bg-action-primary transition-transform duration-200 ease-out"
        style={{ transform: isDark ? 'translateX(28px)' : 'translateX(0)' }}
        aria-hidden
      />
      <button
        type="button"
        onClick={() => setPreference('light')}
        aria-label={t('theme.light')}
        aria-pressed={!isDark}
        className={cn(
          'relative z-10 flex size-7 items-center justify-center transition-colors',
          !isDark ? 'text-action-primary-foreground' : 'text-fg-caption hover:text-fg-primary'
        )}
      >
        <Sun className="size-3.5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => setPreference('dark')}
        aria-label={t('theme.dark')}
        aria-pressed={isDark}
        className={cn(
          'relative z-10 flex size-7 items-center justify-center transition-colors',
          isDark ? 'text-action-primary-foreground' : 'text-fg-caption hover:text-fg-primary'
        )}
      >
        <Moon className="size-3.5" aria-hidden />
      </button>
    </div>
  );
}
