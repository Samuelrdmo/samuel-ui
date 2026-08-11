# Samuel UI

A React design system that doubles as its own documentation — components, tokens, Storybook and AI-ready context, all sourced from one place.

Samuel UI is not just a component library. It is simultaneously a design system, a React library, technical documentation, a UI Engineering showcase, a Figma-to-code bridge, and documentation written to be consumed efficiently by an LLM.

**V1 ships exactly five components** — Button, Input, Select, Modal, Card — built with the composition, accessibility and token discipline a much larger system would demand. Quality over quantity.

## Links

- Documentation — `pnpm dev:docs` (see [Development](#development))
- Storybook — `pnpm dev:storybook`
- Figma — not connected yet, wired per-component in [`figmaLinks.ts`](apps/docs/src/lib/figmaLinks.ts)
- npm — not published yet (`@samuel-ui/react`)

## Features

- **Compound component APIs** — `Button.Root`/`Button.Icon`, `Input.Root`/`Label`/`Control`/`HelperText`/`ErrorMessage`, `Select.*`, `Modal.*`, `Card.*`
- **Design tokens as the only source of color, radius, spacing and shadow** — primitive scale → semantic tokens → Tailwind utilities, never a raw hex in a component
- **Light, dark and system themes**, both fully token-driven
- **Radix UI primitives** for Select and Modal — real keyboard navigation, focus management, focus trap, scroll lock and ARIA, not reimplemented
- **A documentation site** that renders the real components (not screenshots) alongside foundations, API references and accessibility notes
- **Storybook** consuming the same components as the docs site — no duplicated implementations
- **AI Context** — a short, token-efficient Markdown file per component, built for pasting into an LLM's context window

## Architecture

```
samuel-ui/
  packages/
    tokens/        Primitive + semantic CSS variables, shared Tailwind preset
    ui/             @samuel-ui/react — the actual components
    ai-context/     button.md, input.md, select.md, modal.md, card.md, samuel-ui.md
  apps/
    docs/           Documentation website (Vite + React Router)
    storybook/      Storybook, consuming @samuel-ui/react directly
```

Extracted from real components, not the other way around: the visual language (near-black surfaces, lime-green accent, mono uppercase labels, thin translucent borders) is derived from [samuelrdmo.com](https://samuelrdmo.com)'s own design tokens.

## Installation

```bash
git clone https://github.com/Samuelrdmo/samuel-ui.git
cd samuel-ui
pnpm install
```

Once published:

```bash
npm install @samuel-ui/react
```

## Usage

```tsx
import { Button, Modal } from '@samuel-ui/react';
import '@samuel-ui/tokens/semantic.css';

function DeleteProjectButton() {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button.Root variant="secondary">Delete project</Button.Root>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Delete project</Modal.Title>
          <Modal.Description>This action cannot be undone.</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root variant="outline">Cancel</Button.Root>
          </Modal.Close>
          <Button.Root variant="destructive">Delete</Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
```

Components use Tailwind utility classes backed by semantic tokens, so the consuming app's Tailwind config needs `../../node_modules/@samuel-ui/react/src/**/*.{ts,tsx}` (or the equivalent workspace path) in its `content` array, and can extend `@samuel-ui/tokens/tailwind.preset.cjs` as a preset.

## Components

| Component | Composition |
|---|---|
| Button | `Button.Root`, `Button.Icon` |
| Input | `Input.Root`, `Input.Label`, `Input.Control`, `Input.HelperText`, `Input.ErrorMessage` |
| Select | `Select.Root`, `Select.Trigger`, `Select.Value`, `Select.Content`, `Select.Item` |
| Modal | `Modal.Root`, `Modal.Trigger`, `Modal.Content`, `Modal.Header`, `Modal.Title`, `Modal.Description`, `Modal.Footer`, `Modal.Close` |
| Card | `Card.Root`, `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer` |

Full docs, live previews, variants, states, accessibility notes and API references live in the docs site under `/components/*`.

## Design Tokens

Three layers, never skipped:

1. **Primitive** — raw scales (`--su-brand-500`, `--su-neutral-900`, spacing/radius/shadow steps) in `packages/tokens/src/primitives.css`
2. **Semantic** — theme-aware tokens components actually use (`--bg-surface`, `--fg-primary`, `--action-primary`, `--feedback-danger`...) in `packages/tokens/src/semantic.css`, mapped separately for `[data-theme="dark"]` and `[data-theme="light"]`
3. **Tailwind** — a shared preset (`packages/tokens/tailwind.preset.cjs`) maps utility classes to those semantic variables, so every app in the monorepo styles the same way

## AI Context

Each component has a short Markdown file in `packages/ai-context/` — import path, purpose, composition tree, one correct usage example, and hard rules. No marketing copy, no history, minimal tokens. The docs site reads these same files for its "Copy for AI" / "Download AI Context" actions — there is exactly one source of truth. See `/ai/using-with-ai` in the docs site.

## Development

```bash
pnpm install          # install everything
pnpm dev:docs         # docs site → http://localhost:5183
pnpm dev:storybook    # storybook → http://localhost:6006
pnpm build:ui         # typecheck + bundle @samuel-ui/react
pnpm typecheck        # typecheck every package
```

## Contributing

This is currently a solo portfolio/open-source project. Issues and PRs are welcome once the repository is public — please keep changes scoped to one component or one doc section at a time, and match the existing token/composition conventions.

## License

MIT
