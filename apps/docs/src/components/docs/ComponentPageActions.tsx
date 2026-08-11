import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Check, Code2, Download } from 'lucide-react';
import { Button } from '@samuel-ui/react';
import { EXTERNAL_LINKS } from '../../lib/links';
import { copyAiContext, downloadAiContext, type ComponentSlug } from '../../lib/aiContext';

export function ComponentPageActions({ slug }: { slug: ComponentSlug }) {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  async function handleCopyForAi() {
    await copyAiContext(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a href={`${EXTERNAL_LINKS.storybook}/?path=/story/${slug}`} target="_blank" rel="noreferrer">
        <Button.Root variant="outline" size="sm">
          {t('actions.openInStorybook')}
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
          {t('actions.viewSource')}
        </Button.Root>
      </a>

      <Button.Root variant="secondary" size="sm" onClick={handleCopyForAi}>
        <Button.Icon>{copied ? <Check /> : <Bot />}</Button.Icon>
        {copied ? t('actions.aiContextCopied') : t('actions.copyForAi')}
      </Button.Root>

      <Button.Root variant="secondary" size="sm" onClick={() => downloadAiContext(slug)}>
        <Button.Icon>
          <Download />
        </Button.Icon>
        {t('actions.downloadAiContext')}
      </Button.Root>
    </div>
  );
}
