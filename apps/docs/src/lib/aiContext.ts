/**
 * DS-GUARD: these `?raw` imports reach into packages/ai-context on purpose.
 * The same Markdown files serve the "Copy for AI" action here and the published
 * AI context of the design system, so there is exactly one source of truth.
 * Copying the text into this file (or into a component page) to avoid the deep
 * relative paths creates a second copy that drifts the first time a prop
 * changes, and the drift is invisible until someone pastes stale docs into a
 * model. Move the files if the paths are ugly; do not duplicate them.
 */
import buttonMd from '../../../../packages/ai-context/button.md?raw';
import inputMd from '../../../../packages/ai-context/input.md?raw';
import selectMd from '../../../../packages/ai-context/select.md?raw';
import modalMd from '../../../../packages/ai-context/modal.md?raw';
import cardMd from '../../../../packages/ai-context/card.md?raw';

export type ComponentSlug = 'button' | 'input' | 'select' | 'modal' | 'card';

export const aiContext: Record<ComponentSlug, string> = {
  button: buttonMd,
  input: inputMd,
  select: selectMd,
  modal: modalMd,
  card: cardMd,
};

export async function copyAiContext(slug: ComponentSlug) {
  await navigator.clipboard.writeText(aiContext[slug]);
}

export function downloadAiContext(slug: ComponentSlug) {
  const blob = new Blob([aiContext[slug]], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${slug}.md`;
  anchor.click();
  URL.revokeObjectURL(url);
}
