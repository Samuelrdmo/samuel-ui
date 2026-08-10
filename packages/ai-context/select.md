# Samuel UI — Select

Import:
`import { Select } from '@samuel-ui/react'`

Purpose:
Accessible dropdown selection built on Radix UI Select — keyboard navigation, focus management, and typeahead come from the primitive.

Composition:
- Select.Root
- Select.Trigger
  - Select.Value
- Select.Content
  - Select.Item

Basic usage:

```tsx
<Select.Root onValueChange={setRole}>
  <Select.Trigger>
    <Select.Value placeholder="Select a role" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="designer">Designer</Select.Item>
    <Select.Item value="developer">Developer</Select.Item>
  </Select.Content>
</Select.Root>
```

Rules:
- `Select.Root` accepts Radix Select.Root props directly (`value`, `defaultValue`, `onValueChange`, `disabled`, `name`).
- Every `Select.Item` needs a unique, non-empty `value`.
- Do not manually implement open/close state, keyboard handling, or positioning — Radix + this wrapper already do it.
- Disable a single option with `disabled` on `Select.Item`, not by filtering it out (filtering loses discoverability).
