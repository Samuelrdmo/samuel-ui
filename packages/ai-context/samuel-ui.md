# Samuel UI

React component library and design system. Compound-component API, Tailwind + CSS variable tokens, Radix UI primitives for interaction behavior.

Import: `import { Button, Input, Select, Modal, Card } from '@samuel-ui/react'`

Available components:

- Button — button.md
- Input — input.md
- Select — select.md
- Modal — modal.md
- Card — card.md

Global rules:
- Every component exposes a `.Root` (or primitive root) plus subparts as dot-notation members, e.g. `Button.Root`, `Modal.Content`.
- Never restyle with raw colors. Only Tailwind utilities backed by semantic tokens (`bg-surface`, `text-fg-primary`, `border-border`, `action-primary`, etc.) exist in this system.
- All components forward `ref` to their underlying DOM element and accept a `className` for one-off overrides via `tailwind-merge`.

For component-specific context, use the corresponding markdown file.
