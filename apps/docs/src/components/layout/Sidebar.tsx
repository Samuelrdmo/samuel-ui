import { NavLink } from 'react-router-dom';
import { navGroups } from '../../lib/nav';
import { cn } from '@samuel-ui/react';

export function SidebarNav() {
  return (
    <nav className="flex flex-col gap-7">
      {navGroups.map((group) => (
        <div key={group.title} className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">
            {group.title}
          </span>
          <ul className="flex flex-col gap-0.5">
            {group.items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xs px-2 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'bg-surface-hover text-accent'
                        : 'text-fg-secondary hover:bg-surface-hover hover:text-fg-primary'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto border-r border-border-subtle px-4 py-8 lg:block">
      <SidebarNav />
    </aside>
  );
}
