import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@samuel-ui/react';

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="group relative overflow-hidden rounded-md border border-border bg-surface-elevated">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">{language}</span>
        <Button.Root variant="ghost" size="sm" onClick={handleCopy} className="!py-1 text-[11px]">
          {copied ? (
            <>
              <Button.Icon>
                <Check />
              </Button.Icon>
              Copied
            </>
          ) : (
            <>
              <Button.Icon>
                <Copy />
              </Button.Icon>
              Copy code
            </>
          )}
        </Button.Root>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-fg-secondary">{code}</code>
      </pre>
    </div>
  );
}
