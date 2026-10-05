# pull official base image
FROM node:lts-alpine AS builder
RUN apk add --no-cache python3 py3-pip make g++

# enable pnpm via corepack, pinned to the project's packageManager version
RUN corepack enable && corepack prepare pnpm@12.5.1 --activate

# set working directory (must NOT be `/`: Tailwind 4 auto-scans the whole
# working directory for class names, and scanning the container root —
# /proc, /sys, /usr, ... — makes the build hang until it is OOM-killed)
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Installs all node packages
RUN pnpm install --frozen-lockfile

# Copies everything over to Docker environment
COPY . ./

# Prevent esbuild/tsc from oversubscribing CPU/memory beyond the container's
# actual cgroup limits (they otherwise see the host's full core/RAM count,
# which can make the build hang for a long time before being SIGKILLed).
ENV GOMAXPROCS=2
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN pnpm run build

# production
FROM node:lts-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]

