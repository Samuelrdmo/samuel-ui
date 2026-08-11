/**
 * The Storybook URL differs per environment: localhost while developing, a
 * deployed origin once published. Hardcoding localhost shipped a dead "Open in
 * Storybook" button to every visitor of the built site, so it reads from the
 * build-time env and only falls back to the dev port.
 *
 * Set VITE_STORYBOOK_URL in the deploy environment (see .env.example).
 */
const STORYBOOK_URL = import.meta.env.VITE_STORYBOOK_URL ?? 'http://localhost:6006';

export const EXTERNAL_LINKS = {
  github: 'https://github.com/Samuelrdmo/samuel-ui',
  storybook: STORYBOOK_URL,
  portfolio: 'https://samuelrdmo.com',
};
