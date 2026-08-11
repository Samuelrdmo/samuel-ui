import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Menu } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { Logo } from './Logo';
import { EXTERNAL_LINKS } from '../../lib/links';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-border-subtle bg-canvas/85 backdrop-blur">
      <div className="flex w-full items-center gap-2 px-3 sm:gap-4 sm:px-4 lg:px-6">
        <button
          type="button"
          className="flex size-9 shrink-0 items-center justify-center rounded-none text-fg-primary lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label={t('header.openNav')}
        >
          <Menu className="size-5" aria-hidden />
        </button>

        <Link to="/" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-heading text-sm font-semibold tracking-tight text-fg-primary">
          <Logo className="size-6 text-action-primary" />
          Samuel UI
        </Link>

        <nav className="ml-4 hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-fg-caption lg:flex">
          <Link to="/docs/introduction" className="transition-colors hover:text-fg-primary">
            {t('header.documentation')}
          </Link>
          <a href={EXTERNAL_LINKS.storybook} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg-primary">
            {t('header.storybook')}
          </a>
          <a href={EXTERNAL_LINKS.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg-primary">
            {t('header.github')}
          </a>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="hidden size-9 items-center justify-center rounded-none text-fg-caption transition-colors hover:text-fg-primary sm:flex lg:hidden"
            aria-label={t('header.githubAria')}
          >
            <Github className="size-4" aria-hidden />
          </a>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
