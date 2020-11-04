### stage: build ###
FROM node:12 AS build
LABEL MAINTAINER="rally <raleighy@163.com>"

# npm -------- https://registry.npmjs.org/
# yarn ------- https://registry.yarnpkg.com/
# cnpm ------- http://r.cnpmjs.org/
# taobao ----- https://registry.npm.taobao.org/
# nj --------- https://registry.nodejitsu.com/
# npmMirror -- https://skimdb.npmjs.com/registry/
# edunpm ----- http://registry.enpmjs.org/
# didi-old --- http://registry.npm.xiaojukeji.com/
# didi-new --- http://npm.intra.xiaojukeji.com/

# install dependences
WORKDIR /source
COPY package.json yarn.lock /source/
RUN yarn --registry=https://registry.npm.taobao.org/
COPY ./ /source
RUN yarn build

### stage: run ###
FROM nginx:alpine
COPY --from=build /source/dist /source
COPY docker/nginx.conf /etc/nginx/nginx.conf
RUN rm -f /etc/nginx/conf.d/* /etc/nginx/sites-enabled/*
COPY docker/site.conf /etc/nginx/conf.d/