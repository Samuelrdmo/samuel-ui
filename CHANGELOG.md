# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Test suite for `@samuel-ui/react` (Vitest + Testing Library), covering component behavior and every documented `DS-GUARD`
- ESLint (flat config) with `jsx-a11y` rules treated as errors, plus Prettier and EditorConfig
- CI workflow running lint, typecheck, tests and all three builds
- `closeLabel` prop on `Modal.Content`, so the close button's accessible name can be translated
- 404 page with the full documentation map, replacing the blank shell an unknown URL used to render
- Skip-to-content link, and focus/scroll management on client-side route changes
- Favicon, Open Graph and Twitter metadata, `robots.txt`
- `CONTRIBUTING.md` and this changelog

### Changed

- Focus rings are declared per Button variant rather than on the shared base
- Breadcrumbs use `nav` + ordered list with `aria-current`; the props table uses `scope`, a caption, and a keyboard-reachable scroll region
- Storybook is now a local-only dev tool: every public link/CTA pointing at it was removed from the docs site (header nav, component page actions); run it with `pnpm dev:storybook`, see the README
- Home page rebuilt on a continuous page-wide grid, with a component anatomy section replacing the token-to-interface chain
- Section dividers terminate on the vertical rails instead of bleeding to the viewport edge

### Fixed

- Keyboard focus was invisible on primary buttons: `clip-path` clipped the outer focus ring away, so that variant now uses an inset ring
- Removed all Figma references, including a permanently disabled "Open in Figma" action and an empty "Design" section on every component page

## [0.1.0]

### Added

- Initial monorepo: `@samuel-ui/tokens`, `@samuel-ui/react`, `@samuel-ui/ai-context`, docs site and Storybook
- Five components — Button, Input, Select, Modal, Card — plus Skeleton
- Primitive and semantic token layers with light and dark themes
- Documentation site in English and Portuguese
