import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, cn } from '@samuel-ui/react';
import { PixelIcon, type PixelIconName } from '../components/PixelIcon';
import { EXTERNAL_LINKS } from '../lib/links';

type Layer = { title: string; description: string; sample: string };
type Facet = { title: string; description: string };
type MetaItem = { label: string; value: string };
type AnatomyPart = { label: string; value: string };

const facetIcons: PixelIconName[] = ['grid', 'workflow', 'code', 'docs'];

const eyebrowClass = 'home-eyebrow';
const monoClass = 'font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption';
const bodyClass = 'text-[17px] leading-relaxed text-fg-secondary';

function Eyebrow({ children }: { children: string }) {
  return <span className={eyebrowClass}>{children}</span>;
}

export function HomePage() {
  const { t, i18n } = useTranslation();
  const meta = t('home.about.meta', { returnObjects: true }) as MetaItem[];
  const facets = t('home.facets.items', { returnObjects: true }) as Facet[];
  const layers = t('home.structure.items', { returnObjects: true }) as Layer[];
  const parts = t('home.anatomy.parts', { returnObjects: true }) as AnatomyPart[];
  const states = t('home.anatomy.states', { returnObjects: true }) as string[];

  useEffect(() => {
    document.title = t('home.meta.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('home.meta.description'));
  }, [i18n.resolvedLanguage, t]);

  return (
    <div className="sm:px-6 lg:px-10">
      {/* 00 — Hero */}
      <section className="home-section">
        <div className="home-rail home-split">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Eyebrow>{t('home.hero.eyebrow')}</Eyebrow>
            <h1 className="home-h1 mt-7 whitespace-pre-line text-fg-primary">
              {t('home.hero.title')}
            </h1>
            <p className={cn(bodyClass, 'mt-7 max-w-[36rem]')}>{t('home.hero.description')}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/docs/introduction"
                className={cn(
                  Button.buttonVariants({ variant: 'primary', size: 'lg' }),
                  'group w-full sm:w-auto'
                )}
              >
                {t('home.hero.ctaDocs')}
                <PixelIcon
                  name="arrowRight"
                  size={13}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  Button.buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full sm:w-auto'
                )}
              >
                {t('home.hero.ctaGithub')}
                <PixelIcon name="arrowUpRight" size={13} />
              </a>
            </div>
          </div>

          {/* The five layers as one connected spine: the shape of the system,
              read top to bottom, with the real artefact each layer produces. */}
          <div className="preview-surface flex items-center px-6 py-12 sm:px-10 lg:px-12">
            <ol className="home-spine" aria-label={t('home.hero.spineLabel')}>
              {layers.map((layer, index) => (
                <li key={layer.title} className="home-spine__step">
                  <span className="home-spine__line" aria-hidden="true" />
                  <span className="home-spine__node" aria-hidden="true" />
                  <span className="font-mono text-[11px] text-fg-caption">0{index + 1}</span>
                  {/* Labels in a diagram, not section headings — the layers get
                      their real headings in the structure section below. */}
                  <span className="font-heading text-[15px] font-semibold tracking-tight text-fg-primary">
                    {layer.title}
                  </span>
                  <code className="home-spine__sample truncate font-mono text-[11px] text-fg-muted">
                    {layer.sample}
                  </code>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 01 — About */}
      <section className="home-section" aria-labelledby="home-about">
        <div className="home-rail home-split">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Eyebrow>{t('home.about.eyebrow')}</Eyebrow>
            <h2
              id="home-about"
              className="home-h2 mt-7 whitespace-pre-line text-fg-primary"
            >
              {t('home.about.title')}
            </h2>
            <p className={cn(bodyClass, 'mt-6 max-w-[34rem]')}>{t('home.about.description')}</p>
          </div>

          <dl className="flex flex-col justify-center">
            {meta.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  'px-6 py-5 sm:px-10 lg:px-12',
                  index < meta.length - 1 && 'border-b border-border-subtle'
                )}
              >
                <dt className={monoClass}>{item.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium text-fg-primary">
                  {index === meta.length - 1 ? (
                    <a
                      href={EXTERNAL_LINKS.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-border-brand"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 02 — What the project shows */}
      <section className="home-section" aria-labelledby="home-facets">
        <div className="home-rail">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Eyebrow>{t('home.facets.eyebrow')}</Eyebrow>
            <h2
              id="home-facets"
              className="home-h2 mt-7 whitespace-pre-line text-fg-primary"
            >
              {t('home.facets.title')}
            </h2>
            <p className={cn(bodyClass, 'mt-6 max-w-[34rem]')}>{t('home.facets.description')}</p>
          </div>

          <div className="grid border-t border-border-subtle sm:grid-cols-2">
            {facets.map((facet, index) => (
              <article
                key={facet.title}
                className={cn(
                  'home-cell border-border-subtle px-6 py-9 sm:px-10 sm:py-12 lg:px-12',
                  index < facets.length - 1 && 'border-b sm:border-b-0',
                  index < 2 && 'sm:border-b',
                  index % 2 === 0 && 'sm:border-r'
                )}
              >
                <div className="flex items-center justify-between gap-4 text-fg-caption">
                  <PixelIcon name={facetIcons[index]} size={16} />
                  <span className="font-mono text-[11px]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 font-heading text-xl font-semibold tracking-tight text-fg-primary">
                  {facet.title}
                </h3>
                <p className="mt-3 max-w-[26rem] text-[15px] leading-relaxed text-fg-secondary">
                  {facet.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Structure */}
      <section className="home-section" aria-labelledby="home-structure">
        <div className="home-rail">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Eyebrow>{t('home.structure.eyebrow')}</Eyebrow>
            <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
              <h2
                id="home-structure"
                className="home-h2 whitespace-pre-line text-fg-primary"
              >
                {t('home.structure.title')}
              </h2>
              <p className={cn(bodyClass, 'max-w-[32rem]')}>{t('home.structure.description')}</p>
            </div>
          </div>

          <ol className="home-flow border-t border-border-subtle">
            {layers.map((layer, index) => (
              <li key={layer.title} className="home-flow__step">
                <span className="home-flow__line" aria-hidden="true" />
                <span className="home-flow__node" aria-hidden="true" />
                <span className="font-mono text-[11px] text-fg-caption">0{index + 1}</span>
                <h3 className="mt-9 font-heading text-[17px] font-semibold tracking-tight text-fg-primary lg:mt-12">
                  {layer.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fg-secondary">
                  {layer.description}
                </p>
                <code className="mt-5 block font-mono text-[11px] leading-relaxed text-fg-muted">
                  {layer.sample}
                </code>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 04 — Anatomy of a component */}
      <section className="home-section" aria-labelledby="home-anatomy">
        <div className="home-rail">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <Eyebrow>{t('home.anatomy.eyebrow')}</Eyebrow>
            <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
              <h2 id="home-anatomy" className="home-h2 whitespace-pre-line text-fg-primary">
                {t('home.anatomy.title')}
              </h2>
              <p className={cn(bodyClass, 'max-w-[32rem]')}>{t('home.anatomy.description')}</p>
            </div>
          </div>

          <figure
            className="home-anatomy border-t border-border-subtle"
            aria-label={t('home.anatomy.figureLabel')}
          >
            <div className="home-anatomy__stage preview-surface">
              {/* A specimen, not a control: it does nothing, so it stays out of
                  the tab order and the callouts carry the meaning instead. */}
              <Button.Root variant="primary" size="lg" tabIndex={-1} aria-hidden="true">
                {t('home.anatomy.buttonLabel')}
                <Button.Icon>
                  <PixelIcon name="arrowRight" />
                </Button.Icon>
              </Button.Root>
            </div>

            {parts.map((part, index) => (
              <div
                key={part.label}
                className="home-anatomy__item"
                data-side={index < 3 ? 'left' : 'right'}
              >
                <span className="home-anatomy__line" aria-hidden="true" />
                <span className="home-anatomy__node" aria-hidden="true" />
                <span className={monoClass}>{part.label}</span>
                <code className="mt-1.5 block font-mono text-[12px] text-fg-primary">
                  {part.value}
                </code>
              </div>
            ))}
          </figure>

          <div className="home-states" role="group" aria-label={t('home.anatomy.statesLabel')}>
            {states.map((state) => (
              <div key={state} className="home-states__item">
                <Button.Root
                  variant="primary"
                  size="sm"
                  tabIndex={-1}
                  aria-hidden="true"
                  disabled={state === 'disabled'}
                  className={cn(
                    state === 'hover' && 'bg-action-primary-hover',
                    state === 'focus' &&
                      'shadow-[inset_0_0_0_2px_var(--action-primary-foreground)]'
                  )}
                >
                  {t('home.anatomy.buttonLabel')}
                </Button.Root>
                <span className="font-mono text-[11px] text-fg-caption">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Explore */}
      <section aria-labelledby="home-final">
        <div className="home-rail">
          <div className="px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="home-cta border border-border-brand px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
                <div>
                  <Eyebrow>{t('home.finalCta.eyebrow')}</Eyebrow>
                  <h2
                    id="home-final"
                    className="home-h2 mt-7 whitespace-pre-line text-fg-primary"
                  >
                    {t('home.finalCta.title')}
                  </h2>
                  <p className={cn(bodyClass, 'mt-6 max-w-[32rem]')}>
                    {t('home.finalCta.description')}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:shrink-0">
                  <Link
                    to="/components/button"
                    className={cn(
                      Button.buttonVariants({ variant: 'primary', size: 'lg' }),
                      'group w-full sm:w-auto'
                    )}
                  >
                    {t('home.finalCta.primary')}
                    <PixelIcon
                      name="arrowRight"
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                  <Link
                    to="/foundations/colors"
                    className={cn(Button.buttonVariants({ variant: 'ghost' }), 'w-fit')}
                  >
                    {t('home.finalCta.secondary')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
