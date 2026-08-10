import { Link } from 'react-router-dom';

export function Breadcrumb({ trail }: { trail: string[] }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-fg-caption">
      <Link to="/" className="hover:text-fg-primary">
        Samuel UI
      </Link>
      {trail.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          <span>/</span>
          <span className={i === trail.length - 1 ? 'text-fg-primary' : ''}>{item}</span>
        </span>
      ))}
    </div>
  );
}
