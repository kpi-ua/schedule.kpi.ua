# schedule.kpi.ua - Agent Guide

This repository contains the schedule frontend for the Igor Sikorsky Kyiv Polytechnic Institute Electronic Campus ecosystem. Use this file as the current working guide for AI agents and developers.

## Project Summary

- **Language:** TypeScript
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`)
- **State:** `zustand` (global, e.g. `store/weekStore.tsx`), React Context for cross-cutting slice options, local component state otherwise
- **Data fetching:** `react-query` (v3) hooks in `src/queries/`
- **Routing:** `react-router-dom` v7
- **Main branch:** `master`
- **Deployment:** Docker (Node build stage + nginx serve), image `kpiua/schedule.kpi.ua`

## Repository Layout

```text
src/
├── api/            # Raw HTTP calls (fetch wrappers), one file per resource
├── queries/        # react-query hooks wrapping api/ calls (useXxx.ts)
├── store/          # zustand stores
├── common/
│   ├── constants/  # shared constants (routes, options, config)
│   ├── context/    # React contexts
│   ├── hooks/      # shared hooks
│   └── utils/      # shared pure helpers
├── components/     # Presentational/reusable components
│   └── ui/         # shadcn/radix-based primitives (button, sheet, tabs, ...)
├── containers/     # Feature/layout components composing components + queries/store
├── layouts/        # Page-level layout shells
├── models/         # Domain data models (Pair, Schedule, ...)
├── types/          # Shared TypeScript types
├── @types/         # Ambient/module type declarations
└── app/            # App entry, routing setup
```

Root Dockerfile: `Dockerfile` (Node build stage -> nginx serve, exposes port 80, health via nginx).

## Quick Commands

```bash
npm run dev          # Start dev server (Vite, port 3000)
npm run build         # tsc -b && vite build
npm run lint          # ESLint
npm run lint:fix      # ESLint --fix
npm run prettier      # Prettier check
npm run prettier:fix  # Prettier write
npm run preview       # Preview production build
```

## Code Style

- **ESLint**: flat config (`eslint.config.mjs`), `typescript-eslint` recommended + React Hooks + React Refresh + Prettier.
- **Prettier**: single quotes, trailing commas, semi, 120 print width, `arrowParens: always`.
- **Imports**: relative paths (no `@/` path alias configured in this project) — use `../../` navigation matching sibling files, not absolute aliases.
- **Components**: arrow function form, `const ThingName = (props: Props) => { ... }` — this is the prevailing style across `components/` and `containers/`. Match it for new components.
- **Props**: `interface Props { ... }` declared just above the component.

## Key Patterns

### API + data fetching

- Raw fetch/HTTP logic lives in `src/api/<resource>.ts`.
- Each API call is wrapped in a `react-query` hook in `src/queries/use<Thing>.ts` (e.g. `useStudentSchedule.ts`, `useTimeSlots.ts`). Components consume the query hook, never the raw `api/` function directly.

### State

- Cross-component ephemeral state (e.g. selected week) goes in a `zustand` store under `src/store/`.
- Cross-cutting derived/contextual values used by several components in one subtree go in a React Context under `src/common/context/`.

### Styling

- Tailwind utility classes directly in JSX. Use `cn()` from `src/common/utils/cn.ts` (clsx + tailwind-merge) when composing conditional/merged class names — don't hand-concatenate class strings.

### Constants

- Shared, cross-feature constants: `src/common/constants/<name>.ts` (routes, select options, day options, screen breakpoints). Don't hardcode these values in components.

## Environment Variables

Check `.env` files at the repo root for required variables (API base URL, etc.) before assuming a hardcoded value is intentional.

## Build And Test

```bash
npm run build   # tsc -b && vite build — must pass with no new TypeScript errors
npm run lint    # must pass with no new ESLint errors
```

There is currently no automated test suite in this repository. Manually verify UI changes in the dev server (`npm run dev`) before committing.

Docker build:

```bash
docker build -t kpiua/schedule.kpi.ua:local -f Dockerfile .
```

## Development Conventions

- Prefer existing component/container boundaries over new abstractions — check 2-3 sibling files in `components/` or `containers/` before introducing a new pattern.
- Keep `api/` calls thin; put derived/business logic in `queries/` hooks, `common/utils/`, or the consuming container, not in the raw API layer.
- Don't add a parallel mobile-specific component tree — this codebase uses responsive Tailwind classes on the same component, not separate `md:hidden` variants, unless an existing component already does so.
- Follow existing patterns for `models/` vs `types/`: `models/` holds domain entities (e.g. `Pair`, `Schedule`), `types/` holds shared structural/utility types (e.g. `ScheduleMatrix`, `ScheduleComponentsProps`).

## Git Workflow

### Change Scope

- For bug fixes and small features, prefer the smallest focused diff that fully solves the task and avoid unrelated changes that inflate the pull request.
- Larger changes are appropriate when refactoring is explicitly in scope or technically necessary; keep them justified and directly related to the task.

### Commit Messages

Every commit must start with a real Jira issue key from the `KBX` project, followed by a single space and a short imperative summary.

If a provided ticket key is not from the `KBX` project, reject it and respond: "Commits require a KBX-XXXX ticket key. Please provide a valid ticket from the KBX project."

Example:

```text
KBX-1064 Migrate from styled components to Tailwind
```

Ticket Verification Procedure:

- If Atlassian MCP is available, call Jira issue lookup for `kpiua.atlassian.net`.
- If MCP lookup reports the ticket does not exist, halt and output: "Ticket KBX-XXXX was not found in the KBX project. Please provide a valid existing ticket key before committing." Do not proceed with the commit.
- If Atlassian MCP is not available, output: "Atlassian MCP unavailable. Please confirm ticket KBX-XXXX exists before I continue." and wait for explicit developer confirmation.
- If explicit developer confirmation is not received, halt and output: "Cannot verify Jira issue key. Please provide a valid KBX-XXXX ticket before committing." Do not proceed with the commit.
- Do not proceed to checklist step 3 until verification succeeds.

Before committing, follow this checklist:

1. Ensure you have a valid `KBX-XXXX` ticket key.
2. Run the Ticket Verification Procedure above.
3. Name the branch using the ticket key, following the Branches and Pull Requests rules below.
4. Format the commit message as: `KBX-XXXX Short imperative summary`.

### Branches and Pull Requests

- Name branches as `KBX-XXXX-<short-kebab-case-summary>`, for example `KBX-1064-migrate-tailwind`.
- Do not add assistant/tool prefixes to branch names such as `codex/`, `claude/`, or similar.
- Pull request descriptions must link the related Jira issue.
- Put the Jira link on the first line using Markdown link syntax with the real Jira URL, for example `Jira: [KBX-1064](https://kpiua.atlassian.net/browse/KBX-1064)`.
- Use this pull request description structure by default:

  ```markdown
  Jira: [KBX-1064](https://kpiua.atlassian.net/browse/KBX-1064)

  ## Summary
  - Short change 1.
  - Short change 2.
  - Short change 3.

  ## Notes
  - Optional: rollout detail, dependency on another PR, known limitation.

  ## UI
  <!-- Optional: screenshots for visible frontend changes only -->
  ```

- Keep `Summary` concise and include `Notes` or `UI` only when they add useful context.
- Do not include a `Validation` section by default when it would only list standard commands.

## Documentation

- `README.md` is the operational overview (running, building, API endpoints).
- `CLAUDE.md` is a compatibility entry point for assistant-facing notes and may be a symlink to this file.

This guide is the authoritative source for repository-wide rules.
If `CLAUDE.md` differs from this guide in any environment, treat this guide as canonical and flag the inconsistency to the developer.

Last updated: 2026-08-22.
