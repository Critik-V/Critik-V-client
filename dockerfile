FROM node:21-alpine3.18 AS builder

# set the working directory
WORKDIR /app

# copy the package.json and package-lock.json
COPY package*.json ./

# copy the pnpm-lock.yaml
COPY pnpm-lock.yaml ./

# install pnpm globally
RUN npm install -g pnpm

# install requirements with pnpm
RUN pnpm install --frozen-lockfile

# copy the necessary files in the container
COPY . .

# build the app
RUN pnpm run build

FROM nginx:stable-alpine3.19

# copy the build files to the nginx directory
COPY --from=builder /app/dist /usr/share/nginx/html

# copy the nginx configuration file to the nginx directory
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

# copy env file to the nginx directory

COPY --from=builder /app/.env /usr/share/nginx/html

# expose the port
EXPOSE 80

# start the nginx server
CMD ["nginx", "-g", "daemon off;"]

