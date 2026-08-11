export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-fg-caption">{eyebrow}</p>
      <h1 className="mb-3 text-3xl font-semibold tracking-[-0.01em] text-fg-primary">{title}</h1>
      <p className="text-base text-fg-secondary">{description}</p>
    </header>
  );
}
