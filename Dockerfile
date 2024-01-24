FROM node:20-alpine3.19 as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

VOLUME ./hook-vol:./app

RUN npm run build


#! Nginx webserver for production

FROM nginx:1-alpine-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist  .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]