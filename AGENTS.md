# schedule.kpi.ua - Agent Guide

This repository contains the schedule frontend for the Igor Sikorsky Kyiv Polytechnic Institute Electronic Campus ecosystem. Use this file as the current working guide for AI agents and developers.

## Project Summary

- **Language:** TypeScript
- **Framework:** Next.js 15 (App Router), React 18
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **State:** URL searchParams (`groupId`/`lecturerId`) are the source of truth, read server-side; only the week switcher and the responsive day-slice are small client-side React Context state (`common/context/WeekContext.tsx`, `common/context/SliceOptionsContext.tsx`). No global client store (zustand was removed).
- **Data fetching:** Server Components and `/api/*` route handlers both call `src/lib/campusApi/endpoints.ts` directly — no client-side data-fetching library (react-query was removed).
- **Backend-for-frontend:** `src/lib/campusApi/` is the only code allowed to talk to the real Campus API (`CAMPUS_API_URL`/`CAMPUS_API_KEY`, server-only env vars). It has an in-process 30-minute TTL cache with stale-on-error fallback (`cache.ts`) and a 5s-timeout/1-retry fetch client (`client.ts`). `src/app/api/**/route.ts` mirrors Campus's paths 1:1 for the browser and external consumers.
- **Routing:** Next.js file-based routing under `src/app/` — URL scheme is unchanged from the pre-migration app (`/`, `/lecturers`, `/sessions`, `/about`, `/contacts`), entity selection stays query-param driven (no dynamic route segments).
- **Main branch:** `master`
- **Deployment:** Docker (Node build stage, `output: 'standalone'`, no nginx), image `kpiua/schedule.kpi.ua`, listens on port 3000.

## Repository Layout

```text
src/
├── app/            # Next.js App Router: layouts, pages, /api/* route handlers, /healthz
│   ├── (schedule)/ # layout + pages for /, /lecturers, /sessions (route group, no URL segment)
│   ├── (about)/    # layout + pages for /about, /contacts
│   └── api/        # BFF route handlers mirroring Campus API paths
├── lib/
│   ├── campusApi/  # client.ts (fetch+timeout+retry), cache.ts (TTL+stale), endpoints.ts (Campus calls)
│   ├── apiRoute.ts # request logging wrapper for /api/* route handlers
│   └── logger.ts   # structured JSON logger
├── common/
│   ├── constants/  # shared constants (routes, options, config)
│   ├── context/    # React contexts (WeekContext, SliceOptionsContext) — client-only state
│   ├── hooks/      # shared hooks
│   └── utils/      # shared pure helpers
├── components/     # Presentational/reusable components
│   └── ui/         # shadcn/radix-based primitives (button, sheet, tabs, ...)
├── containers/     # Feature components composing components + server-fetched data via props
├── layouts/        # Shared non-route layout helpers (e.g. TwoColumnsLayout)
├── models/         # Domain data models (Pair, Schedule, ...) — also the /api/* response contract
├── types/          # Shared TypeScript types
└── @types/         # Ambient/module type declarations
```

Root Dockerfile: `Dockerfile` (Node build stage with `next build` → Node runtime stage running `.next/standalone/server.js`, exposes port 3000, `/healthz` is a Next.js route).

## Quick Commands

```bash
pnpm dev          # Start dev server (Next.js, port 3000)
pnpm build        # next build
pnpm start        # next start (plain build; use node .next/standalone/server.js for the standalone/Docker output)
pnpm lint         # ESLint (next/core-web-vitals + typescript-eslint)
pnpm lint:fix     # ESLint --fix
pnpm prettier     # Prettier check
pnpm prettier:fix # Prettier write
```

## Code Style

- **ESLint**: flat config (`eslint.config.mjs`), `typescript-eslint` recommended + React Hooks + React Refresh + Prettier.
- **Prettier**: single quotes, trailing commas, semi, 120 print width, `arrowParens: always`.
- **Imports**: relative paths (no `@/` path alias configured in this project) — use `../../` navigation matching sibling files, not absolute aliases.
- **Components**: arrow function form, `const ThingName = (props: Props) => { ... }` — this is the prevailing style across `components/` and `containers/`. Match it for new components.
- **Props**: `interface Props { ... }` declared just above the component.

## Key Patterns

### API + data fetching

- All Campus API calls live in `src/lib/campusApi/endpoints.ts`, going through `client.ts` (timeout/retry) and `cache.ts` (30-min TTL, stale-on-error). This module reads `process.env.CAMPUS_API_URL`/`CAMPUS_API_KEY` and must never be imported by a Client Component.
- Server Components (pages, layouts) call these functions directly — no internal fetch to our own `/api/*`.
- Client Components that need Campus data (e.g. `LastSyncDate`, the lecturer-profile link in `LecturerSearch`) fetch our own `/api/*` routes with plain `fetch`, not the `campusApi` lib.
- `src/app/api/**/route.ts` handlers are thin wrappers: parse `request.nextUrl.searchParams`, call the matching `campusApi` function, return `NextResponse.json(...)`, wrapped in `withApiLogging` (`src/lib/apiRoute.ts`).

### State

- Selected group/lecturer is **not** stored in any client state — it's read from the URL (`?groupId=`/`?lecturerId=`) server-side on every render. `useEntitySearch` (`common/hooks/useEntitySearch.ts`) only restores the last choice from `localStorage` into the URL and keeps `localStorage` in sync; it doesn't hold the value itself.
- The week switch (`WeekContext`) and the responsive day-slice (`SliceOptionsContext`) are the only client-side React Context state, both seeded from server-fetched data (`currentTime`) and scoped to the `(schedule)` route group.
- Components that read `useSearchParams`/`usePathname`/`useRouter` or any of the above contexts must have `'use client'` at the top of the file.

### Styling

- Tailwind utility classes directly in JSX. Use `cn()` from `src/common/utils/cn.ts` (clsx + tailwind-merge) when composing conditional/merged class names — don't hand-concatenate class strings.

### Constants

- Shared, cross-feature constants: `src/common/constants/<name>.ts` (routes, select options, day options, screen breakpoints). Don't hardcode these values in components.

## Environment Variables

See `.env.example` at the repo root. `CAMPUS_API_URL` and `CAMPUS_API_KEY` are server-only (no `NEXT_PUBLIC_` prefix) and must never be read from a Client Component. `KPI_ID_*` vars are reserved for a future SSO integration and currently unused.

## Build And Test

```bash
pnpm build   # next build — must pass with no new TypeScript/ESLint errors
pnpm lint    # must pass with no new ESLint errors
```

There is currently no automated test suite in this repository. Manually verify UI changes in the dev server (`pnpm dev`) before committing.

Docker build:

```bash
docker build -t kpiua/schedule.kpi.ua:local -f Dockerfile .
```

## Development Conventions

- Prefer existing component/container boundaries over new abstractions — check 2-3 sibling files in `components/` or `containers/` before introducing a new pattern.
- Keep `lib/campusApi/` thin and server-only; put derived/business logic in the consuming Server Component, `common/utils/`, or the route handler, not in the Campus client itself.
- Don't add a parallel mobile-specific component tree — this codebase uses responsive Tailwind classes on the same component, not separate `md:hidden` variants, unless an existing component already does so.
- Follow existing patterns for `models/` vs `types/`: `models/` holds domain entities (e.g. `Pair`, `Schedule`), `types/` holds shared structural/utility types (e.g. `ScheduleMatrix`, `ScheduleComponentsProps`).
- Default to Server Components; add `'use client'` only at the boundary file that actually needs hooks, browser APIs, or event handlers — don't mark a whole subtree client just because one leaf needs it.

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
