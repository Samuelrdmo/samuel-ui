import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <div className="mx-auto flex max-w-[1400px]">
        {!isHome && <Sidebar />}
        <main className={isHome ? 'w-full' : 'min-w-0 flex-1 px-5 py-10 lg:px-10'}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
