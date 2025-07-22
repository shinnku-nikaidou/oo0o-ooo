# Codex Agent Instructions

This file defines guidelines for contributors and the Codex agent when
working in this repository. Follow these rules when modifying files
within this repo unless overridden by explicit user instructions.

## Formatting and Style

- Use **Prettier** defaults for formatting. Indent with two spaces,
  keep semicolons, and prefer double quotes in JavaScript/TypeScript.
- End every file with a trailing newline.
- Use TypeScript for React components. Export components using named
  exports and arrow functions.
- Keep import statements ordered: built‑in modules, third‑party
  packages, then internal `@/` aliases and relative paths.
- Keep Markdown files wrapped at 80 characters where practical.

## Building

- Install dependencies with `pnpm install`.
- Develop locally using `pnpm dev`.
- Create a production build using `pnpm build`.
- Preview the build with `pnpm preview`.
- Ensure the project builds successfully before opening a pull request.

## Testing

- This project currently contains no automated tests. If tests are
  added in the future, run them with `pnpm test` and ensure they pass
  before committing.

## Commit Messages

- Use short, present‑tense statements in commit messages,
  e.g. `Add Navbar component` or `Fix build error`.
- The first line should be under 72 characters.
