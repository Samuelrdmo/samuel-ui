export interface PropRow {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-surface-elevated font-mono text-[11px] uppercase tracking-[0.08em] text-fg-caption">
            <th className="px-4 py-3 font-medium">Prop</th>
            <th className="px-4 py-3 font-medium">Type</th>
            <th className="px-4 py-3 font-medium">Default</th>
            <th className="px-4 py-3 font-medium">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {rows.map((row) => (
            <tr key={row.prop}>
              <td className="px-4 py-3 font-mono text-xs text-accent">{row.prop}</td>
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
