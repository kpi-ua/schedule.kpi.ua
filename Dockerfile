# pull official base image
FROM node:lts-alpine as builder
RUN apk add --no-cache python3 py3-pip make g++
# set working directory
WORKDIR /

COPY package*.json ./

# Installs all node packages
RUN npm ci --legacy-peer-deps

# Copies everything over to Docker environment
COPY . ./
RUN npm run build

# production
FROM nginx:stable-alpine
COPY --from=builder /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
