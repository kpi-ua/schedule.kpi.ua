# pull official base image
FROM node:lts-alpine as builder
RUN apk add --no-cache python3 py3-pip make g++
# set working directory (must NOT be `/`: Tailwind 4 auto-scans the whole
# working directory for class names, and scanning the container root —
# /proc, /sys, /usr, ... — makes `vite build` hang until it is OOM-killed)
WORKDIR /app

COPY package*.json ./

# Installs all node packages
RUN npm ci --legacy-peer-deps

# Copies everything over to Docker environment
COPY . ./

# Prevent esbuild/tsc from oversubscribing CPU/memory beyond the container's
# actual cgroup limits (they otherwise see the host's full core/RAM count,
# which can make the build hang for a long time before being SIGKILLed).
ENV GOMAXPROCS=2
ENV NODE_OPTIONS=--max-old-space-size=2048

RUN npm run build

# production
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
