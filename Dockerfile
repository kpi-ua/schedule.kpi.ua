# pull official base image
FROM node:lts-alpine AS builder

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

RUN pnpm run build

# production: only the standalone output, without node_modules and sources
FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Docker sets HOSTNAME to the container id; server.js listens on it, so bind all interfaces explicitly
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# owned by node: the fetch cache is written to .next/cache at runtime
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
CMD ["node", "server.js"]

