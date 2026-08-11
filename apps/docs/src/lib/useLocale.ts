import { useTranslation } from 'react-i18next';
import type { Locale } from '../i18n';

export function useLocale(): Locale {
  const { i18n } = useTranslation();
  return i18n.language === 'pt-BR' ? 'pt-BR' : 'en-US';
}
