FROM node:latest as node

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=node public/ /usr/share/nginx/html
