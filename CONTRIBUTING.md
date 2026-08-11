# Contributing to Samuel UI

This is a solo portfolio project, but it is built to the standards of a shared one. If you are opening a PR, keep changes scoped to one component or one documentation section at a time.

## Setup

```bash
pnpm install
pnpm dev:docs         # docs site  → http://localhost:5183
pnpm dev:storybook    # storybook  → http://localhost:6006
```

## Before you open a PR

```bash
pnpm validate
```

That runs lint, typecheck and tests together. CI runs the same three plus all three builds, so a green `validate` locally is a good predictor.

Individually:

| Command | What it covers |
| --- | --- |
| `pnpm lint` | ESLint, including `jsx-a11y` as **errors** |
| `pnpm typecheck` | `tsc --noEmit` across every package |
| `pnpm test` | Vitest + Testing Library, in `packages/ui` |
| `pnpm format` | Prettier write |

## The rules that actually matter here

**Never introduce a raw color, radius or shadow value.** Components reference semantic tokens only, through Tailwind utilities backed by CSS variables. If a value you need does not exist, add it to `packages/tokens/src/semantic.css` first. A hex code in a component is the one change that will always be rejected.

**Read the `DS-GUARD:` comments before refactoring.** They mark implementations that look redundant or overcomplicated but exist for a specific reason, usually one that is invisible in the diff. Find them with:

```bash
grep -rn "DS-GUARD" packages apps --include=*.ts --include=*.tsx --include=*.css
```

If you are convinced a guard is wrong, say so in the PR description rather than deleting it quietly. Most of them are covered by a test that will fail anyway.

**Accessibility is not a follow-up.** Every component ships keyboard support, visible focus, and correct ARIA in the same change that introduces it. Radix handles this for Select and Modal; do not reimplement focus traps, positioning or Escape handling by hand.

**Components stay generic.** The system has `Card`, not `ProjectCard`. Recompose rather than adding variants.

## Adding a component

A component is not done until all six exist:

1. Implementation in `packages/ui/src/components/<name>/`, with an `index.ts` re-export
2. Tests in `<Name>.test.tsx` — cover the behavior, not the markup
3. Export from `packages/ui/src/index.ts`
4. A story in `apps/storybook/src/<name>.stories.tsx`
5. A docs page in `apps/docs/src/pages/components/`, plus its entry in `apps/docs/src/lib/nav.ts` and both locale files
6. An AI-context file in `packages/ai-context/<name>.md`

## Translations

The docs site ships English and Portuguese. Both `apps/docs/src/i18n/locales/*.json` must stay in sync — a key added to one and not the other falls back silently to English, which is worse than an obvious gap.

Component labels that reach the user (a close button's accessible name, for instance) belong in props with English defaults, never as literals inside the component.

## Commits

Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`). The changelog is written from them.
