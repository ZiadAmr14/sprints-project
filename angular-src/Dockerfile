FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm ci
RUN npm install -g @angular/cli
COPY . /app
RUN npm run build
FROM nginx:alpine
COPY --from=node public/ /usr/share/nginx/html
