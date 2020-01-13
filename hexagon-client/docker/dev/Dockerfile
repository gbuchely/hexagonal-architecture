FROM node:12.7 AS build
WORKDIR /usr/src/app

RUN pwd
RUN ls
RUN npm install
COPY . .
RUN npm run build
