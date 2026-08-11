import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, cn } from '@samuel-ui/react';
import { PixelIcon } from '../components/PixelIcon';
import { navGroups } from '../lib/nav';

export function NotFoundPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('notFound.metaTitle');
  }, [i18n.resolvedLanguage, t]);

  return (
    <div className="max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-fg-caption">404</p>
      <h1 className="mb-3 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">
        {t('notFound.title')}
      </h1>
      <p className="mb-10 text-base text-fg-secondary">{t('notFound.description')}</p>

      <Link
        to="/"
        className={cn(Button.buttonVariants({ variant: 'primary', size: 'md' }), 'group')}
      >
        {t('notFound.backHome')}
        <PixelIcon
          name="arrowRight"
          size={13}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>

      {/* A dead end is the worst place to leave someone — the sidebar is hidden
          below lg, so the full map is repeated here rather than just a link. */}
      <nav className="mt-14 border-t border-border-subtle pt-8" aria-label={t('notFound.exploreLabel')}>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">
          {t('notFound.explore')}
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {navGroups.map((group) => (
            <div key={group.titleKey}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-muted">
                {t(group.titleKey)}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-fg-secondary transition-colors hover:text-accent"
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
