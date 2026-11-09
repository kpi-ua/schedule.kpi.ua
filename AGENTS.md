# schedule.kpi.ua - Agent Guide

<!-- BEGIN kpi-ua/.ai: synced from https://github.com/kpi-ua/.ai, do not edit here -->

## Organisation rules

@.ai/AGENTS.md

This repository follows the kpi-ua organisation rules in [`.ai/`](.ai/). Read them before working here and take
the rules from there:

- [`.ai/AGENTS.md`](.ai/AGENTS.md) — working rules: Jira, branches, commits, pull requests, code, language,
  validation, secrets, live systems.
- [`.ai/REVIEW.md`](.ai/REVIEW.md) — how to review pull requests.
- [`.ai/GIT_MESSAGES.md`](.ai/GIT_MESSAGES.md) — commit messages, pull request titles and descriptions.

The files in `.ai/` are copies from kpi-ua/.ai: change them there, not here. The rest of this file is this
repository's own context; where it departs from `.ai/`, it says so explicitly.
<!-- END kpi-ua/.ai -->

This repository contains the schedule frontend for the Igor Sikorsky Kyiv Polytechnic Institute Electronic Campus ecosystem. Use this file as the current working guide for AI agents and developers.

## Project Summary

- **Language:** TypeScript
- **Framework:** Next.js 16 (App Router), React 19
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **State:** URL searchParams (`groupId`/`lecturerId`) are the source of truth, read server-side; only the week switcher and the responsive day-slice are small client-side React Context state (`src/lib/context/week-context.tsx`, `src/lib/context/slice-options-context.tsx`). No global client store (zustand was removed).
- **Data fetching:** Every Campus data read, from Server Components and Client Components alike, goes through a `src/actions/*.ts` Server Action (`next-safe-action` + `zod`) — nothing calls `src/lib/campusApi/endpoints.ts` directly outside of `src/actions/`. Server Components `await` actions directly (via `unwrapAction`); Client Components use the `@tanstack/react-query` library for data fetching.
- **Campus API access:** `src/lib/campusApi/` is the only code allowed to talk to the real Campus API (`CAMPUS_API_URL`/`CAMPUS_API_KEY`, server-only env vars), and it is only ever imported from `src/actions/*.ts`. It has an in-process 30-minute TTL cache with stale-on-error fallback (`cache.ts`) and a 5s-timeout/1-retry fetch client (`client.ts`). `/healthz` is the only HTTP endpoint and is used as an infra liveness probe — this app is not a public data API.
- **Routing:** Next.js file-based routing under `src/app/` — URL scheme is unchanged from the pre-migration app (`/`, `/lecturers`, `/sessions`, `/about`, `/contacts`), entity selection stays query-param driven (no dynamic route segments).
- **Deployment:** Docker (Node build stage, `output: 'standalone'`, no nginx), image `kpiua/schedule.kpi.ua`, listens on port 3000.

## Repository Layout

```text
src/
├── app/            # Next.js App Router: layouts, pages, /healthz (the only HTTP endpoint)
│   ├── (schedule)/ # layout + pages for /, /lecturers, /sessions (route group, no URL segment)
│   ├── (about)/    # layout + pages for /about, /contacts
│   └── healthz/    # infra liveness probe route handler
├── actions/        # 'use server' Server Actions (next-safe-action) — the only data-fetching entry point, for Server and Client Components alike
├── assets/         # Static SVG/icon assets used by components
├── lib/
│   ├── campusApi/  # cache.ts, client.ts (fetch+timeout+retry), endpoints.ts (Campus calls)
│   ├── constants/  # shared constants (routes, options, config)
│   ├── context/    # React contexts (week, slice options, navigation pending)
│   ├── hooks/      # shared hooks
│   ├── providers/  # app-level providers (e.g. React Query)
│   ├── queries/    # react-query hooks/wrappers for client components
│   ├── utils/      # shared pure helpers
│   ├── safeAction.ts   # shared next-safe-action client (logging + error handling)
│   ├── unwrapAction.ts # Server Component helper: unwraps an action result or throws on serverError
│   └── logger.ts       # structured JSON logger
├── components/     # Presentational/reusable components
│   └── ui/         # shadcn/radix-based primitives (button, sheet, tabs, ...)
├── models/         # Domain data models used by actions/pages/components
├── types/          # Shared TypeScript structural/utility types
└── @types/         # Ambient/module type declarations
```

Root Dockerfile: `Dockerfile` (Node build stage with `next build` → Node runtime stage running `.next/standalone/server.js`, exposes port 3000, `/healthz` is a Next.js route).

## Quick Commands

```bash
pnpm dev          # Start dev server (Next.js, port 3000)
pnpm build        # next build
pnpm start        # next start (plain build; use node .next/standalone/server.js for the standalone/Docker output)
pnpm lint         # Oxlint (typescript, react, react/rules-of-hooks and react/exhaustive-deps)
pnpm lint:fix     # Oxlint --fix
pnpm prettier     # Prettier check
pnpm prettier:fix # Prettier write
```

## Code Style

- **Oxlint**: flat config (`oxlintrc.json`); `typescript`, `react`, `react/rules-of-hooks` and `react/exhaustive-deps` built-in plugins
- **Prettier**: single quotes, trailing commas, semi, 120 print width, `arrowParens: always`.
- **Imports**: use the `@/*` alias configured in `tsconfig.json` for imports rooted at `src/` (for example `@/lib/utils/cn`); keep relative imports for nearby siblings where it reads better.
- **Components**: arrow function form, `const ThingName = (props: Props) => { ... }` — this is the prevailing style across `components/` and route-local component folders like `src/app/(schedule)/_components/`.
- **Props**: `interface Props { ... }` declared just above the component.
- **File naming**: prefer kebab-case for feature/component/hook/context/utility files (for example `week-context.tsx`, `use-entity-search.ts`, `schedule-item-base.tsx`). Existing files in `src/models/` and `src/types/` currently remain PascalCase and should be kept consistent unless doing an explicit migration.

## Key Patterns

### API + data fetching

- All Campus API calls live in `src/lib/campusApi/endpoints.ts`, going through `client.ts` (timeout/retry) and `cache.ts` (30-min TTL, stale-on-error). This module reads `process.env.CAMPUS_API_URL`/`CAMPUS_API_KEY` and is only ever imported from `src/actions/*.ts` — never directly from a Server or Client Component.
- `src/actions/*.ts` files start with `'use server'`, validate input with a `zod` schema via `.inputSchema(...)` (skipped for zero-input actions), and are built from the shared `actionClient` in `src/lib/safeAction.ts` (`createSafeActionClient` with logging + `handleServerError`, equivalent to the old `withApiLogging`). Each action calls `.metadata({ actionName: '...' })` before `.action(...)` (required by the shared client's metadata schema).
- Server Components (pages, layouts) call these Server Actions directly and unwrap the result with `src/lib/unwrapAction.ts`, which returns `result.data` or throws `result.serverError` — this preserves the old throw-on-failure behavior of `campusApi/endpoints.ts` for Server Component call sites.
- Client Components that need Campus data after mount (e.g. `LecturerSearch`, the lecturer-profile link in `LecturerSearch`) use the `@tanstack/react-query` data fetching library. Client components must not use hooks from `@tanstack/react-query` directly. All react-query related logic is located in `src/lib/queries` folder and imported from there by components.
- This app does not expose a public REST API — `/healthz` (infra liveness probe) is the only HTTP endpoint under `src/app/`. Don't add new `/api/*` route handlers or call `campusApi/endpoints.ts` outside `src/actions/`; add/extend a Server Action instead.

### State

- Selected group/lecturer is **not** stored in any client state — it's read from the URL (`?groupId=`/`?lecturerId=`) server-side on every render. `useEntitySearch` (`src/lib/hooks/use-entity-search.ts`) only restores the last choice from `localStorage` into the URL and keeps `localStorage` in sync; it doesn't hold the value itself.
- The week switch (`useWeekContext`) and the responsive day-slice (`useSliceOptionsContext`) are the only client-side React Context state, both seeded from server-fetched data (`currentTime`) and scoped to the `(schedule)` route group.
- Components that read `useSearchParams`/`usePathname`/`useRouter` or any of the above contexts must have `'use client'` at the top of the file.

### Styling

- Tailwind utility classes directly in JSX. Use `cn()` from `src/lib/utils/cn.ts` (clsx + tailwind-merge) when composing conditional/merged class names — don't hand-concatenate class strings.

### Constants

- Shared, cross-feature constants: `src/lib/constants/<name>.ts` (routes, select options, day options, screen breakpoints). Don't hardcode these values in components.

## Environment Variables

See `.env.example` at the repo root. `CAMPUS_API_URL` and `CAMPUS_API_KEY` are server-only (no `NEXT_PUBLIC_` prefix) and must never be read from a Client Component. `KPI_ID_*` vars are reserved for a future SSO integration and currently unused.

## Build And Test

```bash
pnpm build   # next build — must pass with no new TypeScript/Oxlint errors
pnpm lint    # must pass with no new Oxlint errors
```

There is currently no automated test suite in this repository. Manually verify UI changes in the dev server (`pnpm dev`) before committing.

Docker build:

```bash
docker build -t kpiua/schedule.kpi.ua:local -f Dockerfile .
```

## Development Conventions

- Prefer existing boundaries over new abstractions — check 2-3 sibling files in `src/components/` or route-local folders like `src/app/(schedule)/_components/` before introducing a new pattern.
- Keep `lib/campusApi/` thin and server-only; put derived/business logic in the consuming Server Component, `src/lib/utils/`, or the route handler, not in the Campus client itself.
- Don't add a parallel mobile-specific component tree — this codebase uses responsive Tailwind classes on the same component, not separate `md:hidden` variants, unless an existing component already does so.
- Follow existing patterns for `models/` vs `types/`: `models/` holds domain entities (e.g. `Pair`, `Schedule`), `types/` holds shared structural/utility types (e.g. `ScheduleMatrix`, `ScheduleComponentsProps`).
- Default to Server Components; add `'use client'` only at the boundary file that actually needs hooks, browser APIs, or event handlers — don't mark a whole subtree client just because one leaf needs it.

## Git Workflow

### Commit Messages

If a provided ticket key is not from the `KBX` project, reject it and respond: "Commits require a KBX-XXXX ticket key. Please provide a valid ticket from the KBX project."

Ticket Verification Procedure:

- If Atlassian MCP is available, call Jira issue lookup for `kpiua.atlassian.net`.
- If MCP lookup reports the ticket does not exist, halt and output: "Ticket KBX-XXXX was not found in the KBX project. Please provide a valid existing ticket key before committing." Do not proceed with the commit.
- If Atlassian MCP is not available, output: "Atlassian MCP unavailable. Please confirm ticket KBX-XXXX exists before I continue." and wait for explicit developer confirmation.
- If explicit developer confirmation is not received, halt and output: "Cannot verify Jira issue key. Please provide a valid KBX-XXXX ticket before committing." Do not proceed with the commit.

## Documentation

- `README.md` is the operational overview (running, building, API endpoints).
- `CLAUDE.md` and `GEMINI.md` only import this file (`@AGENTS.md`) for Claude Code and Gemini CLI.

This guide is the authoritative source for repository-wide rules.
If `CLAUDE.md` or `GEMINI.md` says anything that contradicts this guide, treat this guide as canonical and flag the inconsistency to the developer.

Last updated: 2026-10-28.
