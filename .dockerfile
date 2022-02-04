# pull official base image
FROM node:lts-alpine as builder

# set working directory
WORKDIR /app

COPY package*.json ./

# Installs all node packages
RUN npm ci

# Copies everything over to Docker environment
COPY . ./
RUN npm run build

# production
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
