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
