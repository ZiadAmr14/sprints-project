FROM node:14 as node

WORKDIR /app

COPY package*.json ./

RUN npm i && npm ci

COPY . ./

RUN npm run build

FROM nginx:1.20.1-alpine

COPY --from=node public/ /usr/share/nginx/html/
