export function CompositionTree({ lines }: { lines: string[] }) {
  return (
    <pre className="overflow-x-auto rounded-none border border-border bg-surface-elevated p-5 font-mono text-sm leading-relaxed text-fg-secondary">
      {lines.join('\n')}
    </pre>
  );
}
