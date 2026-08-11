import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const MAIN_ID = 'main-content';

export function Layout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);
  const isHome = pathname === '/';

  /**
   * A client-side route change replaces the page without telling the browser,
   * so neither scroll position nor focus resets on its own: a keyboard or
   * screen-reader user lands mid-document, still focused on the sidebar link
   * they just activated. Moving focus to <main> is what makes the new page
   * announce itself and puts the next Tab at the top of the new content.
   * Skipped on first render so we never steal focus during initial load.
   */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-canvas">
      <div className="noise" aria-hidden="true" />

      {/* Off-screen until focused, so keyboard users can jump the ~13 sidebar
          links that otherwise sit between the header and the page content. */}
      <a
        href={`#${MAIN_ID}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-border-brand focus:bg-surface-elevated focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.1em] focus:text-fg-primary"
      >
        {t('a11y.skipToContent')}
      </a>

      <Header />
      <div className="mx-auto flex max-w-[1400px]">
        {!isHome && <Sidebar />}
        {/*
          DS-GUARD: the home page gets no padding from the shell on purpose. Its
          sections draw their own full-width rules and repeat a fixed-width
          bordered container to fake continuous vertical rails down the page (see
          .home-rail in styles/index.css). Any padding or max-width added here
          insets those sections and the rails stop lining up between them.
        */}
        <main
          id={MAIN_ID}
          ref={mainRef}
          tabIndex={-1}
          className={isHome ? 'w-full focus:outline-none' : 'min-w-0 flex-1 px-5 py-10 focus:outline-none lg:px-10'}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
