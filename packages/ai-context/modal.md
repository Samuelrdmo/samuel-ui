# Samuel UI — Modal

Import:
`import { Modal, Button } from '@samuel-ui/react'`

Purpose:
Accessible dialog for blocking interactions that require user attention. Built on Radix UI Dialog.

Composition:
- Modal.Root
  - Modal.Trigger
  - Modal.Content
    - Modal.Header
      - Modal.Title
      - Modal.Description
    - Modal.Footer
      - Modal.Close

Basic usage:

```tsx
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
```

Rules:
- Always use `Modal.Title` inside `Modal.Content` — Radix requires it for accessibility (use `Modal.Description` or `aria-describedby={undefined}` to silence the description warning if none is needed).
- Actions belong inside `Modal.Footer`, using `Button` components.
- Do not manually implement the overlay, focus trap, Escape handling, or scroll lock — Radix + this wrapper already do it.
- Use `asChild` on `Modal.Trigger`/`Modal.Close` to render your own trigger element (e.g. a `Button.Root`) instead of a wrapping `<button>`.
