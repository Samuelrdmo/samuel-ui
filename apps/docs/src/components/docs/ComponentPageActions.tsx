import { useState } from 'react';
import { Bot, Check, Code2, Download, Figma } from 'lucide-react';
import { Button } from '@samuel-ui/react';
import { EXTERNAL_LINKS } from '../../lib/links';
import { copyAiContext, downloadAiContext, type ComponentSlug } from '../../lib/aiContext';

export function ComponentPageActions({
  slug,
  figmaUrl,
}: {
  slug: ComponentSlug;
  figmaUrl: string | null;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopyForAi() {
    await copyAiContext(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {figmaUrl ? (
        <a href={figmaUrl} target="_blank" rel="noreferrer">
          <Button.Root variant="outline" size="sm">
            <Button.Icon>
              <Figma />
            </Button.Icon>
            Open in Figma
          </Button.Root>
        </a>
      ) : (
        <Button.Root variant="outline" size="sm" disabled title="Figma link not connected yet">
          <Button.Icon>
            <Figma />
          </Button.Icon>
          Open in Figma
        </Button.Root>
      )}

      <a href={`${EXTERNAL_LINKS.storybook}/?path=/story/${slug}`} target="_blank" rel="noreferrer">
        <Button.Root variant="outline" size="sm">
          Open in Storybook
        </Button.Root>
      </a>

      <a
        href={`${EXTERNAL_LINKS.github}/tree/main/packages/ui/src/components/${slug}`}
        target="_blank"
        rel="noreferrer"
      >
        <Button.Root variant="outline" size="sm">
          <Button.Icon>
            <Code2 />
          </Button.Icon>
          View source
        </Button.Root>
      </a>

      <Button.Root variant="secondary" size="sm" onClick={handleCopyForAi}>
        <Button.Icon>{copied ? <Check /> : <Bot />}</Button.Icon>
        {copied ? 'AI context copied' : 'Copy for AI'}
      </Button.Root>

      <Button.Root variant="secondary" size="sm" onClick={() => downloadAiContext(slug)}>
        <Button.Icon>
          <Download />
        </Button.Icon>
        Download AI Context
      </Button.Root>
    </div>
  );
}
