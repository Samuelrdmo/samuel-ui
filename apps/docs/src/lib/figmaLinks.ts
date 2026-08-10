/**
 * Central registry for Figma component URLs. Never hardcode a Figma link
 * inside a page — add it here once the real component exists in the file.
 */
export const figmaFileUrl: string | null = null;

export const figmaLinks: Record<'button' | 'input' | 'select' | 'modal' | 'card', string | null> = {
  button: null,
  input: null,
  select: null,
  modal: null,
  card: null,
};
