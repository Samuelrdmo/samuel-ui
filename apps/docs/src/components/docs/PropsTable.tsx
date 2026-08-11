import { useTranslation } from 'react-i18next';

export interface PropRow {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ rows, caption }: { rows: PropRow[]; caption?: string }) {
  const { t } = useTranslation();

  return (
    /**
     * tabIndex + role make the scroll container reachable by keyboard: the table
     * has a 640px floor and scrolls horizontally on narrow screens, and a scroll
     * region that only responds to a mouse strands keyboard users at column one.
     */
    <div
      className="overflow-x-auto rounded-none border border-border focus-visible:outline-none focus-visible:shadow-focus"
      tabIndex={0}
      role="region"
      aria-label={caption ?? t('table.label')}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="sr-only">{caption ?? t('table.label')}</caption>
        <thead>
          <tr className="border-b border-border bg-surface-elevated font-mono text-[11px] uppercase tracking-[0.08em] text-fg-caption">
            <th scope="col" className="px-4 py-3 font-medium">{t('table.prop')}</th>
            <th scope="col" className="px-4 py-3 font-medium">{t('table.type')}</th>
            <th scope="col" className="px-4 py-3 font-medium">{t('table.default')}</th>
            <th scope="col" className="px-4 py-3 font-medium">{t('table.description')}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {rows.map((row) => (
            <tr key={row.prop}>
              {/* scope="row" ties every cell in the row back to the prop name */}
              <th scope="row" className="px-4 py-3 text-left font-mono text-xs font-normal text-accent">
                {row.prop}
              </th>
              <td className="px-4 py-3 font-mono text-xs text-fg-secondary">{row.type}</td>
              <td className="px-4 py-3 font-mono text-xs text-fg-muted">{row.default ?? '—'}</td>
              <td className="px-4 py-3 text-fg-secondary">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
