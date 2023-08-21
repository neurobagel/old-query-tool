FROM node:16-alpine as build

WORKDIR /app
COPY package*.json .
# Use npm ci instead of npm install to ensure we use the lock file 
# or error out if the lock file disagrees with the package.json
# see: https://docs.npmjs.com/cli/v9/commands/npm-ci
RUN npm ci
COPY . .
RUN npm run generate

FROM httpd:2.4-alpine

COPY --from=build /app/dist /usr/local/apache2/htdocs