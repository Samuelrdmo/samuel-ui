import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SidebarNav } from './Sidebar';

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-overlay" onClick={onClose} aria-hidden />
      <div className="absolute left-0 top-0 h-full w-72 overflow-y-auto border-r border-border bg-canvas px-5 py-6">
        <button
          type="button"
          onClick={onClose}
          aria-label={t('header.closeNav')}
          className="mb-6 flex size-8 items-center justify-center rounded-none text-fg-caption"
        >
          <X className="size-4" aria-hidden />
        </button>
        <SidebarNav />
      </div>
    </div>
  );
}
