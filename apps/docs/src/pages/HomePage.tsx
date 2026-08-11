import { useEffect, type ComponentType, type CSSProperties, type SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpenCheck, Braces, Github, Layers3, Workflow } from 'lucide-react';
import { Button, cn } from '@samuel-ui/react';
import { EXTERNAL_LINKS } from '../lib/links';

type Icon = ComponentType<SVGProps<SVGSVGElement>>;
type Metric = { value: string; label: string };
type Capability = { title: string; description: string; tags: string[] };
type Layer = { title: string; description: string; artifact: string };
type Principle = { label: string; detail: string };

const capabilityIcons: Icon[] = [Layers3, Workflow, Braces, BookOpenCheck];
const capabilitySpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7'];

function Marker({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">
      <span className="size-1.5 bg-action-primary" aria-hidden="true" />
      <span>{index}</span>
      <span className="text-fg-disabled" aria-hidden="true">/</span>
      <span>{children}</span>
    </div>
  );
}

export function HomePage() {
  const { t, i18n } = useTranslation();
  const metrics = t('home.metrics', { returnObjects: true }) as Metric[];
  const capabilities = t('home.capabilities.items', { returnObjects: true }) as Capability[];
  const layers = t('home.layers.items', { returnObjects: true }) as Layer[];
  const principles = t('home.purpose.principles', { returnObjects: true }) as Principle[];

  useEffect(() => {
    document.title = t('home.meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('home.meta.description'));
  }, [i18n.resolvedLanguage, t]);

  return (
    <div className="flex flex-col overflow-hidden">
      <section className="border-b border-border-subtle px-5 py-16 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(400px,0.85fr)] lg:gap-16">
          <div>
            <Marker index="00">{t('home.eyebrow')}</Marker>
            <h1 className="mt-7 max-w-3xl text-5xl font-bold tracking-[-0.035em] text-fg-primary sm:text-6xl lg:text-[64px] xl:text-[72px]">
              {t('home.title')}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-fg-secondary sm:text-lg">
              {t('home.description')}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/docs/introduction"
                className={cn(Button.buttonVariants({ variant: 'primary', size: 'lg' }), 'group w-full sm:w-auto')}
              >
                {t('home.ctaDocumentation')}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href={EXTERNAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className={cn(Button.buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto')}
              >
                <Github className="size-4" aria-hidden="true" />
                {t('home.ctaGithub')}
              </a>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-3 border-y border-border-subtle">
              {metrics.map((metric, index) => (
                <div key={metric.label} className={cn('min-w-0 py-5 pr-2', index > 0 && 'border-l border-border-subtle pl-3 sm:pl-6')}>
                  <dt className="truncate font-mono text-[9px] uppercase tracking-[0.1em] text-fg-caption sm:text-[11px]">{metric.label}</dt>
                  <dd className="mt-1 font-heading text-2xl font-semibold tracking-tight text-fg-primary">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="home-system-map border border-border bg-surface-elevated p-4 sm:p-6" aria-label={t('home.blueprint.ariaLabel')}>
            <figcaption className="flex items-center justify-between gap-4 border-b border-border-subtle pb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-caption sm:text-[11px]">
              <span>{t('home.blueprint.label')}</span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <span className="home-status-dot size-1.5 bg-action-primary" aria-hidden="true" />
                {t('home.blueprint.status')}
              </span>
            </figcaption>
            <div className="preview-surface relative mt-5 overflow-hidden border border-border-subtle p-4 sm:p-5">
              <span className="home-map-axis home-map-axis-x" aria-hidden="true" />
              <span className="home-map-axis home-map-axis-y" aria-hidden="true" />
              <div className="relative z-10 flex flex-col gap-2.5">
                {layers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="home-map-layer grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-center gap-3 border border-border bg-surface-elevated px-3 py-3"
                    style={{ '--layer-offset': `${index * 7}px` } as CSSProperties}
                  >
                    <span className="font-mono text-[10px] text-fg-caption">0{index + 1}</span>
                    <span className="min-w-0 truncate font-heading text-sm font-semibold text-fg-primary">{layer.title}</span>
                    <span className="size-2 border border-border-brand bg-canvas" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.1em] text-fg-caption">
              <span>{t('home.blueprint.footer')}</span>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 bg-action-primary" />
                <span className="size-2 border border-border-strong bg-fg-primary" />
                <span className="size-2 border border-border-strong bg-surface-hover" />
                <span className="size-2 border border-border-strong bg-canvas" />
              </div>
            </div>
          </figure>
        </div>
      </section>

      <section className="border-b border-border-subtle px-5 lg:px-10" aria-labelledby="home-about-title">
        <div className="mx-auto grid max-w-6xl border-x border-border-subtle lg:grid-cols-[0.36fr_1fr]">
          <header className="border-b border-border-subtle p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <Marker index="01">{t('home.about.eyebrow')}</Marker>
          </header>
          <div className="p-6 sm:p-8 lg:p-12">
            <h2 id="home-about-title" className="max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-fg-primary sm:text-4xl lg:text-5xl">
              {t('home.about.title')}
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
              <p className="max-w-2xl text-base leading-relaxed text-fg-secondary">{t('home.about.description')}</p>
              <dl className="grid grid-cols-2 gap-5 border-l border-border-subtle pl-6 lg:grid-cols-1">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-caption">{t('home.about.typeLabel')}</dt>
                  <dd className="mt-1 text-sm font-medium text-fg-primary">{t('home.about.typeValue')}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-caption">{t('home.about.authorLabel')}</dt>
                  <dd className="mt-1">
                    <a href={EXTERNAL_LINKS.portfolio} target="_blank" rel="noreferrer" className="text-sm font-medium text-fg-primary underline decoration-border-strong underline-offset-4 hover:text-accent">
                      {t('home.about.authorValue')}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="home-capabilities-title">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <Marker index="02">{t('home.capabilities.eyebrow')}</Marker>
            <div>
              <h2 id="home-capabilities-title" className="text-3xl font-semibold tracking-[-0.025em] text-fg-primary sm:text-4xl">{t('home.capabilities.title')}</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-secondary">{t('home.capabilities.description')}</p>
            </div>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-12">
            {capabilities.map((capability, index) => {
              const CapabilityIcon = capabilityIcons[index];
              return (
                <article key={capability.title} className={cn('home-capability relative -mb-px -mr-px border border-border p-6 sm:p-8', capabilitySpans[index])}>
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-11 items-center justify-center border border-border bg-canvas text-fg-primary"><CapabilityIcon className="size-5" aria-hidden="true" /></span>
                    <span className="font-mono text-[11px] text-fg-caption">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-fg-primary sm:text-2xl">{capability.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-secondary">{capability.description}</p>
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label={t('home.capabilities.tagsLabel', { title: capability.title })}>
                    {capability.tags.map((tag) => <li key={tag} className="border border-border-subtle bg-canvas px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-fg-caption">{tag}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border-subtle px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="home-layers-title">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <Marker index="03">{t('home.layers.eyebrow')}</Marker>
              <h2 id="home-layers-title" className="mt-6 text-3xl font-semibold tracking-[-0.025em] text-fg-primary sm:text-4xl lg:text-5xl">{t('home.layers.title')}</h2>
            </div>
            <p className="max-w-2xl self-end text-base leading-relaxed text-fg-secondary">{t('home.layers.description')}</p>
          </div>
          <ol className="mt-12 border-t border-border">
            {layers.map((layer, index) => (
              <li key={layer.title} className="home-layer-row grid gap-4 border-b border-border px-1 py-7 sm:grid-cols-[3rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:items-center sm:px-5 lg:grid-cols-[4rem_minmax(0,0.75fr)_minmax(0,1.1fr)_13rem] lg:py-8">
                <span className="font-mono text-xs text-fg-caption">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-fg-primary sm:text-2xl">{layer.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">{layer.description}</p>
                <code className="w-fit border border-border-subtle bg-surface-elevated px-3 py-2 font-mono text-[10px] text-fg-caption sm:col-start-2 lg:col-start-auto">{layer.artifact}</code>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border-subtle px-5 lg:px-10" aria-labelledby="home-purpose-title">
        <div className="mx-auto grid max-w-6xl border-x border-border-subtle lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-border-subtle p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
            <Marker index="04">{t('home.purpose.eyebrow')}</Marker>
            <h2 id="home-purpose-title" className="mt-7 max-w-2xl text-3xl font-semibold tracking-[-0.025em] text-fg-primary sm:text-4xl lg:text-5xl">{t('home.purpose.title')}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-secondary">{t('home.purpose.description')}</p>
          </div>
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="border border-border bg-surface-elevated">
              {principles.map((principle, index) => (
                <div key={principle.label} className="grid grid-cols-[2.75rem_minmax(0,1fr)] border-b border-border-subtle last:border-b-0">
                  <span className="flex items-center justify-center border-r border-border-subtle font-mono text-[10px] text-fg-caption">0{index + 1}</span>
                  <div className="p-4 sm:p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-caption">{principle.label}</p>
                    <p className="mt-2 text-sm text-fg-primary">{principle.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 border border-border-brand bg-canvas px-4 py-3">
              <span className="size-2 bg-action-primary" aria-hidden="true" />
              <code className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-primary sm:text-[11px]">{t('home.purpose.output')}</code>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10 lg:py-28" aria-labelledby="home-final-title">
        <div className="home-final-cta relative mx-auto max-w-6xl overflow-hidden border border-border-brand bg-surface-elevated p-7 sm:p-10 lg:p-14">
          <div className="relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <Marker index="05">{t('home.finalCta.eyebrow')}</Marker>
              <h2 id="home-final-title" className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.025em] text-fg-primary sm:text-4xl lg:text-5xl">{t('home.finalCta.title')}</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg-secondary">{t('home.finalCta.description')}</p>
            </div>
            <Link to="/components/button" className={cn(Button.buttonVariants({ variant: 'primary', size: 'lg' }), 'group w-full sm:w-auto')}>
              {t('home.finalCta.button')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
