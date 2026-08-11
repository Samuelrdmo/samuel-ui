# Samuel UI — Input

Import:
`import { Input } from '@samuel-ui/react'`

Purpose:
Labeled text field with helper/error messaging, built with compound components sharing state via context.

Composition:
- Input.Root
- Input.Label
- Input.Control
- Input.HelperText
- Input.ErrorMessage

Basic usage:

```tsx
<Input.Root>
  <Input.Label>Email</Input.Label>
  <Input.Control placeholder="name@example.com" />
  <Input.HelperText>We'll never share your email.</Input.HelperText>
</Input.Root>

<Input.Root invalid>
  <Input.Label>Email</Input.Label>
  <Input.Control placeholder="name@example.com" />
  <Input.ErrorMessage>Invalid email.</Input.ErrorMessage>
</Input.Root>
```

Props:
- `Input.Root`: `invalid?: boolean`, `disabled?: boolean` — controls state for every child.
- `Input.Control`: all native `<input>` props.

Rules:
- All subparts must be inside `Input.Root` — they read shared id/state from context and throw if used standalone.
- Set `invalid` on `Input.Root`, not on `Input.Control`.
- Render either `Input.HelperText` or `Input.ErrorMessage`, not both, for a given state.
- `Input.Label` automatically targets `Input.Control` via `htmlFor` — do not pass a manual `id`.
