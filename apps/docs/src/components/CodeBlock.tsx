import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Copy } from 'lucide-react';
import { Highlight, type Language } from 'prism-react-renderer';
import { Button } from '@samuel-ui/react';
import { useTheme } from '../lib/theme';
import { darkCodeTheme, lightCodeTheme } from '../lib/prismTheme';

export function CodeBlock({ code, language = 'tsx' }: { code: string; language?: Language }) {
  const [copied, setCopied] = useState(false);
  const { resolved } = useTheme();
  const { t } = useTranslation();
  const trimmed = code.replace(/\n$/, '');

  async function handleCopy() {
    await navigator.clipboard.writeText(trimmed);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="group relative overflow-hidden rounded-none border border-border bg-surface-elevated">
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-caption">{language}</span>
        <Button.Root variant="ghost" size="sm" onClick={handleCopy} className="!py-1 text-[11px]">
          {copied ? (
            <>
              <Button.Icon>
                <Check />
              </Button.Icon>
              {t('actions.copied')}
            </>
          ) : (
            <>
              <Button.Icon>
                <Copy />
              </Button.Icon>
              {t('actions.copyCode')}
            </>
          )}
        </Button.Root>
      </div>
      <Highlight theme={resolved === 'light' ? lightCodeTheme : darkCodeTheme} code={trimmed} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} overflow-x-auto p-4 text-[13px] leading-relaxed`} style={style}>
            <code className="font-mono">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-fg-disabled" aria-hidden>
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
