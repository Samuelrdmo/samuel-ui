import { PageHeader } from '../../components/docs/PageHeader';
import { Section } from '../../components/docs/Section';
import { CodeBlock } from '../../components/CodeBlock';

export function InstallationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Getting Started"
        title="Installation"
        description="Samuel UI is developed as a pnpm workspace. The package is not published to npm yet — clone the repository to use it locally."
      />

      <Section title="Clone & install">
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/Samuelrdmo/samuel-ui.git\ncd samuel-ui\npnpm install`}
        />
      </Section>

      <Section title="Run the docs site">
        <CodeBlock language="bash" code={`pnpm dev:docs`} />
      </Section>

      <Section title="Once published">
        <CodeBlock language="bash" code={`npm install @samuel-ui/react`} />
      </Section>
    </div>
  );
}
