# pull official base image
FROM node:16.13.2-buster-slim AS builder

# set working directory
WORKDIR /app


# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json ./

# Installs all node packages
RUN npm install


# Copies everything over to Docker environment
COPY . ./
RUN npm run build

#Stage 2
#######################################
#pull the official nginx:1.19.0 base image
FROM nginx:1.19.0
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=builder /app/build .
COPY ./default.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
