# Samuel UI — Card

Import:
`import { Card } from '@samuel-ui/react'`

Purpose:
Generic flexible surface container — not a specific "project card" or "profile card". Compose it differently per use case rather than creating new card variants.

Composition:
- Card.Root
  - Card.Header
    - Card.Title
    - Card.Description
  - Card.Content
  - Card.Footer

Basic usage:

```tsx
<Card.Root>
  <Card.Header>
    <Card.Title>Design System</Card.Title>
    <Card.Description>Components and foundations.</Card.Description>
  </Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Footer>
    <Button.Root size="sm">Open</Button.Root>
  </Card.Footer>
</Card.Root>
```

Rules:
- All subparts are plain `<div>`/`<h3>`/`<p>` — no shared context, so any subset can be used or skipped freely.
- Do not create a new component (e.g. "ProjectCard") for a different layout — recompose `Card.*` instead.
- `Card.Content` has no default typography; style its contents per use case.
