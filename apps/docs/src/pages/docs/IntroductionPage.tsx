import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';

export function IntroductionPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Getting Started"
        title="Introduction"
        description="Samuel UI is a React design system built to explore the relationship between design, componentization, documentation and implementation."
      />

      <Section title="What this is">
        <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">
          Samuel UI is simultaneously a design system, a React component library, technical
          documentation, a UI engineering showcase, a Figma-to-code bridge and documentation
          written to be consumed efficiently by an LLM. V1 ships exactly five components — Button,
          Input, Select, Modal and Card — built with the same care a much larger system would
          demand.
        </p>
      </Section>

      <Section title="Why five components">
        <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">
          Quality over quantity. Each component uses compound composition where it earns its
          keep, is built on top of semantic design tokens, and is accessible by default —
          keyboard interaction, focus management and ARIA are part of the implementation, not an
          afterthought.
        </p>
      </Section>
    </div>
  );
}
