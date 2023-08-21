FROM node:16-alpine as build

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run generate
EXPOSE 3000

FROM httpd:2.4-alpine

COPY --from=build /app/dist /usr/local/apache2/htdocs