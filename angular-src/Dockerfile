FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . /app
RUN ng build
RUN npm run build
FROM nginx:alpine
COPY --from=node public/ /usr/share/nginx/html
