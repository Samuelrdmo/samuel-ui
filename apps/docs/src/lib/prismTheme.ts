import type { PrismTheme } from 'prism-react-renderer';

/**
 * Custom syntax theme built from Samuel UI's own palette (not a stock Prism
 * theme) — keywords/tags in brand green, strings in amber, everything else
 * neutral, matching the mono/technical language of the rest of the system.
 */
export const darkCodeTheme: PrismTheme = {
  plain: { color: '#cfcfcf', backgroundColor: 'transparent' },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#5c5c5c', fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: '#7a7a7a' } },
    { types: ['tag', 'keyword'], style: { color: '#4dff7f' } },
    { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#8cffb0' } },
    { types: ['attr-name', 'property'], style: { color: '#a6a6a6' } },
    { types: ['attr-value', 'string', 'char'], style: { color: '#ffb020' } },
    { types: ['boolean', 'number'], style: { color: '#8cffb0' } },
    { types: ['operator'], style: { color: '#a6a6a6' } },
    { types: ['variable', 'symbol'], style: { color: '#f4f4f4' } },
  ],
};

export const lightCodeTheme: PrismTheme = {
  plain: { color: '#12140f', backgroundColor: 'transparent' },
  styles: [
    { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#8a9085', fontStyle: 'italic' } },
    { types: ['punctuation'], style: { color: '#8a9085' } },
    { types: ['tag', 'keyword'], style: { color: '#00a833' } },
    { types: ['function', 'class-name', 'maybe-class-name'], style: { color: '#007a27' } },
    { types: ['attr-name', 'property'], style: { color: '#4b5147' } },
    { types: ['attr-value', 'string', 'char'], style: { color: '#b37a11' } },
    { types: ['boolean', 'number'], style: { color: '#007a27' } },
    { types: ['operator'], style: { color: '#4b5147' } },
    { types: ['variable', 'symbol'], style: { color: '#12140f' } },
  ],
};
