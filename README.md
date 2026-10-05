# schedule.kpi.ua

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/kpiua/schedule.kpi.ua)](https://hub.docker.com/r/kpiua/schedule.kpi.ua)

A responsive, maintainable, scalable, and fast UI with a modern design for the students of Igor Sikorsky Kyiv Polytechnic Institute.

Built with Next.js (App Router). The server renders pages and also exposes a `/api/*` backend-for-frontend that
proxies and caches the Campus API — the browser and external consumers only ever talk to `schedule.kpi.ua/api/*`,
never to Campus directly.

## Environment variables

Copy `.env.example` to `.env.local` for local development. These are server-only and are never exposed to the browser:

- `CAMPUS_API_URL` — base URL of the Campus API (defaults to `https://api.campus.kpi.ua`).
- `CAMPUS_API_KEY` — API key sent as the `X-Api-Key` header to Campus.
- `KPI_ID_CLIENT_ID` / `KPI_ID_CLIENT_SECRET` — reserved for future KPI ID (SSO) integration, not used yet.

## API usage

`/api/*` mirrors the Campus API 1:1 so it can be used as a drop-in replacement once Campus is retired for this traffic:

- Groups list: `GET /api/group/all`
- Lecturers list: `GET /api/schedule/lecturer/list`
- Group schedule: `GET /api/schedule/lessons?groupId={id}`
- Group exams: `GET /api/schedule/exams/group?groupId={id}`
- Last sync date: `GET /api/schedule/status?groupId={id}`
- Lecturer schedule: `GET /api/schedule/lecturer?lecturerId={id}`
- Time slots: `GET /api/schedule/lessons/slots`
- Current day and week: `GET /api/time/current`
- Health check: `GET /healthz`

Responses are cached in-process per endpoint+params for 30 minutes; on a Campus API error or timeout the last known-good
copy is served regardless of age (and logged as stale) instead of failing the request.

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

## Related Projects

If you are owner of iPhone or iPad you can use this simple [iOS application](https://github.com/MrPaschenko/Schedule-KPI) which is built over schedule API.

[![Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917](https://user-images.githubusercontent.com/64316080/168581675-cfc29e4a-410c-4664-9213-31f11560813c.svg)](https://apps.apple.com/us/app/schedule-kpi/id1625484300)
