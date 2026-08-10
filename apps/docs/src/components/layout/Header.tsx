import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Figma, Github, Menu, Search } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileNav } from './MobileNav';
import { EXTERNAL_LINKS } from '../../lib/links';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-border-subtle bg-canvas/85 backdrop-blur">
      <div className="flex w-full items-center gap-4 px-4 lg:px-6">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-sm text-fg-primary lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <Menu className="size-5" aria-hidden />
        </button>

        <Link to="/" className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight text-fg-primary">
          <span className="flex size-6 items-center justify-center rounded-xs bg-action-primary text-[11px] font-mono font-bold text-action-primary-foreground">
            S
          </span>
          Samuel UI
        </Link>

        <nav className="ml-4 hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.1em] text-fg-caption lg:flex">
          <Link to="/docs/introduction" className="transition-colors hover:text-fg-primary">
            Documentation
          </Link>
          <a href={EXTERNAL_LINKS.storybook} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg-primary">
            Storybook
          </a>
          <a href={EXTERNAL_LINKS.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg-primary">
            GitHub
          </a>
          <span
            className="flex cursor-not-allowed items-center gap-1.5 text-fg-disabled"
            title="Figma links are configured per-component"
          >
            <Figma className="size-3.5" aria-hidden />
            Figma
          </span>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-sm border border-border bg-surface-elevated px-3 py-1.5 font-mono text-xs text-fg-caption sm:flex"
            aria-label="Search documentation"
          >
            <Search className="size-3.5" aria-hidden />
            Search
            <kbd className="ml-2 rounded-xs border border-border-subtle px-1 text-[10px]">/</kbd>
          </button>
          <a
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="flex size-9 items-center justify-center rounded-sm text-fg-caption transition-colors hover:text-fg-primary lg:hidden"
            aria-label="GitHub"
          >
            <Github className="size-4" aria-hidden />
          </a>
          <ThemeSwitcher />
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
