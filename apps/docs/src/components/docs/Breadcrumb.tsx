import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Real breadcrumb semantics: a labelled <nav> wrapping an ordered list, with
 * the current page carrying aria-current. The "/" separators are decorative
 * and hidden, otherwise a screen reader reads "slash" between every crumb.
 */
export function Breadcrumb({ trail }: { trail: string[] }) {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('breadcrumb.label')} className="mb-4">
      <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-fg-caption">
        <li>
          <Link to="/" className="transition-colors hover:text-fg-primary">
            Samuel UI
          </Link>
        </li>
        {trail.map((item, index) => {
          const isCurrent = index === trail.length - 1;
          return (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <span
                className={isCurrent ? 'text-fg-primary' : undefined}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
