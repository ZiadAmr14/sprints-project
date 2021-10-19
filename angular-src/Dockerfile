FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN node_modules/.bin/ng build --prod


FROM nginx:alpine
COPY --from=node public/ /usr/share/nginx/html
