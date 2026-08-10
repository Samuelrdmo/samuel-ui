# Samuel UI — Button

Import:
`import { Button } from '@samuel-ui/react'`

Purpose:
Triggers an action or event, such as submitting a form or opening a dialog.

Composition:
- Button.Root
- Button.Icon (optional, wraps an icon)

Basic usage:

```tsx
<Button.Root variant="primary" size="md">
  Save changes
</Button.Root>

<Button.Root variant="secondary">
  <Button.Icon>
    <Plus />
  </Button.Icon>
  Create project
</Button.Root>
```

Props (Button.Root):
- `variant`: `primary | secondary | ghost | outline | destructive` (default `primary`)
- `size`: `sm | md | lg` (default `md`)
- `loading`: boolean — shows a spinner and disables the button
- all native `<button>` props (`disabled`, `type`, `onClick`, ...)

Rules:
- Always render text content as direct children of Button.Root (it is a native `<button>`).
- Use `Button.Icon` only to wrap icon elements — it applies fixed sizing, not for text.
- Use `variant="destructive"` only for irreversible/dangerous actions, typically inside `Modal.Footer`.
- Do not disable a button to indicate loading — pass `loading` instead; it disables automatically.
