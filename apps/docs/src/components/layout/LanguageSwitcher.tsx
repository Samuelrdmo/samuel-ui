import { useTranslation } from 'react-i18next';
import { cn } from '@samuel-ui/react';
import { useLocale } from '../../lib/useLocale';
import type { Locale } from '../../i18n';

const options: { value: Locale; label: string }[] = [
  { value: 'en-US', label: 'EN' },
  { value: 'pt-BR', label: 'PT' },
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-0.5 border border-border bg-surface-elevated p-0.5">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-label={t('language.switchTo', {
            language: option.value === 'en-US' ? t('language.english') : t('language.portuguese'),
          })}
          aria-pressed={locale === option.value}
          onClick={() => i18n.changeLanguage(option.value)}
          className={cn(
            'flex h-7 items-center justify-center px-2 font-mono text-[11px] font-medium tracking-[0.05em] transition-colors',
            locale === option.value
              ? 'bg-action-primary text-action-primary-foreground'
              : 'text-fg-caption hover:text-fg-primary'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
