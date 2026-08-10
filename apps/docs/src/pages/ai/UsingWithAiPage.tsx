import { Download } from 'lucide-react';
import { Button } from '@samuel-ui/react';
import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';
import { aiContextIndex, downloadAiContext, type ComponentSlug } from '../../lib/aiContext';

const components: ComponentSlug[] = ['button', 'input', 'select', 'modal', 'card'];

export function UsingWithAiPage() {
  return (
    <div>
      <PageHeader
        eyebrow="AI"
        title="Using Samuel UI with AI"
        description="Every component ships a short, token-efficient Markdown file meant to be pasted into an LLM's context — not the full documentation."
      />

      <Section title="Why a separate context format">
        <p className="max-w-2xl text-sm leading-relaxed text-fg-secondary">
          The docs pages you're reading are for humans: visual previews, variants, states. AI
          context files are for models: import path, purpose, composition tree, one correct
          usage example, and a short list of rules. No marketing copy, no history, no exhaustive
          option lists — just what a model needs to generate correct code on the first try.
        </p>
      </Section>

      <Section title="Index">
        <CodeBlock language="md" code={aiContextIndex} />
      </Section>

      <Section title="Per-component files">
        <div className="flex flex-wrap gap-3">
          {components.map((slug) => (
            <Button.Root key={slug} variant="outline" size="sm" onClick={() => downloadAiContext(slug)}>
              <Button.Icon>
                <Download />
              </Button.Icon>
              {slug}.md
            </Button.Root>
          ))}
        </div>
      </Section>
    </div>
  );
}
