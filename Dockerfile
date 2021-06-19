FROM node:14.2-alpine as base

WORKDIR /apps/base


COPY package-lock.json .

COPY package.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:14.2-alpine as production

WORKDIR /apps/production

RUN rm -rf node_modules

COPY --from=base /apps/base/node_modules .
COPY --from=base /apps/base/.next .

CMD [ "sh","-c","npm run start" ]