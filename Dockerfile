FROM node:16-alpine as build

WORKDIR /app
COPY package*.json .
# Use npm ci instead of npm install to ensure we use the lock file 
# or error out if the lock file disagrees with the package.json
# see: https://docs.npmjs.com/cli/v9/commands/npm-ci
RUN npm ci
COPY . .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# NOTE: exec form of command does not work, possibly due to && 
ENTRYPOINT npm run build && npm run start