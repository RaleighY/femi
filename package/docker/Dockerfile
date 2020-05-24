### stage: build ###
FROM node:10.18-alpine3.10 AS build
LABEL MAINTAINER="raleighy <raleighy@163.com>"

# change to cnpm registry
RUN yarn global add nrm
RUN nrm use cnpm

# install dependences
COPY package.json yarn.lock /source/
RUN cd /source && yarn


### stage: run ###
FROM nginx:alpine
COPY --from=build /source/dist /raly
COPY docker/nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/* /etc/nginx/sites-enabled/*
COPY docker/site.conf /etc/nginx/conf.d/