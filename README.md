# schedule.kpi.ua

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/kpiua/schedule.kpi.ua)](https://hub.docker.com/r/kpiua/schedule.kpi.ua)

A responsive, maintainable, scalable, and fast UI with a modern design for the students of Igor Sikorsky Kyiv Polytechnic Institute.

Built with Next.js (App Router). The server renders pages and fetches the Campus API directly, server-side only —
this app does not expose a public REST API. The handful of client-side data needs (lecturer profile link, group
last-sync date) are served by Next.js Server Actions, not HTTP endpoints.

## Environment variables

Copy `.env.example` to `.env.local` for local development. These are server-only and are never exposed to the browser:

- `CAMPUS_API_URL` — base URL of the Campus API (defaults to `https://api.campus.kpi.ua`).
- `CAMPUS_API_KEY` — API key sent as the `X-Api-Key` header to Campus.
- `KPI_ID_CLIENT_ID` / `KPI_ID_CLIENT_SECRET` — reserved for future KPI ID (SSO) integration, not used yet.

## Campus API access

There is no public REST API — `src/lib/campusApi/` is the only code allowed to call the real Campus API and is never
imported by a Client Component. Campus responses are cached in-process per endpoint+params for 30 minutes; on a
Campus API error or timeout the last known-good copy is served regardless of age (and logged as stale) instead of
failing the request.

`GET /healthz` remains the only HTTP endpoint this app exposes, for infra liveness checks.

## Run and Develop

### Run in the development mode

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Make a production build

```bash
pnpm build
pnpm start
```

### Build Docker container

```bash
docker build ./ --file ./Dockerfile --tag kpiua/schedule.kpi.ua:latest
```

### Run latest Docker container

The app listens on port 3000 inside the container (no nginx — the Next.js standalone server serves everything).

```bash
docker run --rm -it -p 3000:3000 \
  -e CAMPUS_API_URL=https://api.campus.kpi.ua \
  -e CAMPUS_API_KEY=changeme \
  kpiua/schedule.kpi.ua
```
