/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Deployed Storybook origin. Falls back to the local dev port when unset. */
  readonly VITE_STORYBOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
